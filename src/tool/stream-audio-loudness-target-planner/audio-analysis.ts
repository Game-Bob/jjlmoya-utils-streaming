export interface AudioAnalysis {
  integratedLufs: number;
  truePeakDbtp: number;
  lraDb: number;
  durationSeconds: number;
  sampleRate: number;
}

export async function analyzeAudioFile(file: File): Promise<{ buffer: AudioBuffer; analysis: AudioAnalysis }> {
  const context = new AudioContext();
  try {
    const buffer = await context.decodeAudioData(await file.arrayBuffer());
    return { buffer, analysis: analyzeAudioBuffer(buffer) };
  } finally {
    await context.close();
  }
}

export function analyzeAudioBuffer(buffer: AudioBuffer): AudioAnalysis {
  const mono = mixToMono(buffer);
  const windowSize = Math.max(1, Math.round(buffer.sampleRate * 0.4));
  const hopSize = Math.max(1, Math.round(buffer.sampleRate * 0.1));
  const loudnessValues: number[] = [];
  for (let start = 0; start < mono.length; start += hopSize) {
    const end = Math.min(mono.length, start + windowSize);
    if (end - start < windowSize * 0.5) break;
    const meanSquare = getMeanSquare(mono, start, end);
    loudnessValues.push(meanSquare > 0 ? -0.691 + 10 * Math.log10(meanSquare) : -100);
  }
  const integratedLufs = getIntegratedLufs(loudnessValues);
  const lraDb = estimateLra(loudnessValues);
  const truePeakDbtp = getTruePeakDbtp(mono);
  return { integratedLufs, truePeakDbtp, lraDb, durationSeconds: buffer.duration, sampleRate: buffer.sampleRate };
}

export function estimateLra(loudnessValues: number[]): number {
  const gated = loudnessValues.filter((value) => value > -70);
  if (gated.length < 2) return 0;
  const sorted = [...gated].sort((a, b) => a - b);
  return Math.max(0, percentile(sorted, 0.95) - percentile(sorted, 0.1));
}

function mixToMono(buffer: AudioBuffer): Float32Array {
  const mono = new Float32Array(buffer.length);
  for (let channel = 0; channel < buffer.numberOfChannels; channel += 1) {
    const data = buffer.getChannelData(channel);
    for (let index = 0; index < buffer.length; index += 1) mono[index] = (mono[index] ?? 0) + (data[index] ?? 0) / buffer.numberOfChannels;
  }
  return mono;
}

function getMeanSquare(data: Float32Array, start: number, end: number): number {
  let total = 0;
  for (let index = start; index < end; index += 1) {
    const sample = data[index] ?? 0;
    total += sample * sample;
  }
  return total / Math.max(1, end - start);
}

function getIntegratedLufs(values: number[]): number {
  const absoluteGated = values.filter((value) => value > -70);
  if (!absoluteGated.length) return -60;
  const firstMean = getMeanFromLoudness(absoluteGated);
  const relativeGate = firstMean - 10;
  const relativeGated = absoluteGated.filter((value) => value >= relativeGate);
  return Math.max(-60, getMeanFromLoudness(relativeGated.length ? relativeGated : absoluteGated));
}

function getMeanFromLoudness(values: number[]): number {
  const meanSquare = values.reduce((total, value) => total + 10 ** ((value + 0.691) / 10), 0) / values.length;
  return -0.691 + 10 * Math.log10(meanSquare);
}

function getTruePeakDbtp(data: Float32Array): number {
  let peak = 0;
  for (let index = 0; index < data.length; index += 1) {
    const sample = data[index] ?? 0;
    peak = Math.max(peak, Math.abs(sample));
    if (index + 1 < data.length) {
      const next = data[index + 1] ?? 0;
      peak = Math.max(peak, Math.abs(sample * 0.75 + next * 0.25), Math.abs(sample * 0.5 + next * 0.5), Math.abs(sample * 0.25 + next * 0.75));
    }
  }
  return peak > 0 ? 20 * Math.log10(peak) : -60;
}

function percentile(sorted: number[], ratio: number): number {
  const position = (sorted.length - 1) * ratio;
  const lower = Math.floor(position);
  const upper = Math.ceil(position);
  const weight = position - lower;
  const lowerValue = sorted[lower] ?? sorted[0] ?? 0;
  const upperValue = sorted[upper] ?? lowerValue;
  return lowerValue + (upperValue - lowerValue) * weight;
}
