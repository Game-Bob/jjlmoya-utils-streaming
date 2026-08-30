export async function renderProcessedWav(buffer: AudioBuffer, gainDb: number, ceilingDbtp: number): Promise<Blob> {
  const context = new OfflineAudioContext(buffer.numberOfChannels, buffer.length, buffer.sampleRate);
  const source = context.createBufferSource();
  const gain = context.createGain();
  const limiter = context.createDynamicsCompressor();
  source.buffer = buffer;
  gain.gain.value = 10 ** (gainDb / 20);
  limiter.threshold.value = ceilingDbtp;
  limiter.knee.value = 0;
  limiter.ratio.value = 20;
  limiter.attack.value = 0.003;
  limiter.release.value = 0.1;
  source.connect(gain).connect(limiter).connect(context.destination);
  source.start();
  const rendered = await context.startRendering();
  applyEstimatedPeakCeiling(rendered, ceilingDbtp);
  return encodeWav(rendered);
}

function applyEstimatedPeakCeiling(buffer: AudioBuffer, ceilingDbtp: number): void {
  const ceiling = 10 ** (ceilingDbtp / 20);
  const peak = getBufferPeak(buffer);
  if (peak <= ceiling || peak === 0) return;
  scaleBuffer(buffer, ceiling / peak);
}

function getBufferPeak(buffer: AudioBuffer): number {
  let peak = 0;
  for (let channel = 0; channel < buffer.numberOfChannels; channel += 1) {
    const data = buffer.getChannelData(channel);
    for (let index = 0; index < data.length; index += 1) {
      const sample = data[index] ?? 0;
      peak = Math.max(peak, Math.abs(sample));
      if (index + 1 < data.length) {
        const next = data[index + 1] ?? 0;
        peak = Math.max(peak, Math.abs(sample * 0.75 + next * 0.25), Math.abs(sample * 0.5 + next * 0.5), Math.abs(sample * 0.25 + next * 0.75));
      }
    }
  }
  return peak;
}

function scaleBuffer(buffer: AudioBuffer, scale: number): void {
  for (let channel = 0; channel < buffer.numberOfChannels; channel += 1) {
    const data = buffer.getChannelData(channel);
    for (let index = 0; index < data.length; index += 1) data[index] = (data[index] ?? 0) * scale;
  }
}

function encodeWav(buffer: AudioBuffer): Blob {
  const bytesPerSample = 2;
  const dataLength = buffer.length * buffer.numberOfChannels * bytesPerSample;
  const view = new DataView(new ArrayBuffer(44 + dataLength));
  writeText(view, 0, 'RIFF');
  view.setUint32(4, 36 + dataLength, true);
  writeText(view, 8, 'WAVE');
  writeText(view, 12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, buffer.numberOfChannels, true);
  view.setUint32(24, buffer.sampleRate, true);
  view.setUint32(28, buffer.sampleRate * buffer.numberOfChannels * bytesPerSample, true);
  view.setUint16(32, buffer.numberOfChannels * bytesPerSample, true);
  view.setUint16(34, 16, true);
  writeText(view, 36, 'data');
  view.setUint32(40, dataLength, true);
  writeSamples(view, buffer);
  return new Blob([view], { type: 'audio/wav' });
}

function writeSamples(view: DataView, buffer: AudioBuffer): void {
  let offset = 44;
  for (let index = 0; index < buffer.length; index += 1) {
    for (let channel = 0; channel < buffer.numberOfChannels; channel += 1) {
      const sample = Math.max(-1, Math.min(1, buffer.getChannelData(channel)[index] ?? 0));
      view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true);
      offset += 2;
    }
  }
}

function writeText(view: DataView, offset: number, value: string): void {
  for (let index = 0; index < value.length; index += 1) view.setUint8(offset + index, value.charCodeAt(index));
}
