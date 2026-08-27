export type VideoCodec = 'h264' | 'h265' | 'av1';

export interface ResolutionPreset {
  id: string;
  label: string;
  width: number;
  height: number;
}

export interface PlannerInput {
  resolutionId: string;
  fps: number;
  codec: VideoCodec;
  bitrateMbps: number;
  durationMinutes: number;
  copies: number;
}

export interface QualityResult {
  label: string;
  tone: 'lean' | 'balanced' | 'strong' | 'excellent' | 'aggressive';
  effectiveBpp: number;
  guidance: string;
}

export interface ComparisonRow {
  label: string;
  bitrateMbps: number;
  storageGb: number;
  quality: string;
  tone: QualityResult['tone'];
}

export interface PlannerResult {
  input: PlannerInput;
  resolution: ResolutionPreset;
  bitratePerHourGb: number;
  perCopyGb: number;
  allCopiesGb: number;
  frameTimeMs: number;
  dataPerFrameKb: number;
  quality: QualityResult;
  capacityTone: 'light' | 'medium' | 'heavy';
  comparison: ComparisonRow[];
}

export const RESOLUTION_PRESETS: ResolutionPreset[] = [
  { id: '720p', label: '720p', width: 1280, height: 720 },
  { id: '1080p', label: '1080p', width: 1920, height: 1080 },
  { id: '1440p', label: '1440p', width: 2560, height: 1440 },
  { id: '2160p', label: '4K', width: 3840, height: 2160 },
];

const CODEC_EFFICIENCY: Record<VideoCodec, number> = {
  h264: 1,
  h265: 1.35,
  av1: 1.55,
};

const QUALITY_GUIDANCE: Record<QualityResult['tone'], string> = {
  aggressive: 'Expect visible compression in motion or detailed scenes.',
  lean: 'A compact setting for simple scenes and limited upload capacity.',
  balanced: 'A practical middle ground for everyday streaming and recording.',
  strong: 'Healthy headroom for motion, text, and changing scenes.',
  excellent: 'A generous setting for demanding motion and fine detail.',
};

function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(Math.max(value, minimum), maximum);
}

function getResolution(id: string): ResolutionPreset {
  return RESOLUTION_PRESETS.find((item) => item.id === id) ?? RESOLUTION_PRESETS[1]!;
}

function positive(value: number, fallback: number): number {
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

function qualityFromBpp(effectiveBpp: number): QualityResult {
  const tone = getQualityTone(effectiveBpp);
  return {
    label: tone,
    tone,
    effectiveBpp,
    guidance: QUALITY_GUIDANCE[tone],
  };
}

function getQualityTone(effectiveBpp: number): QualityResult['tone'] {
  if (effectiveBpp >= 0.16) return 'excellent';
  if (effectiveBpp >= 0.1) return 'strong';
  if (effectiveBpp >= 0.06) return 'balanced';
  if (effectiveBpp >= 0.03) return 'lean';
  return 'aggressive';
}

function estimateBitrate(input: PlannerInput, multiplier: number): number {
  const resolution = getResolution(input.resolutionId);
  const base = resolution.width * resolution.height * input.fps * 0.000000061;
  return Math.max(0.5, base * multiplier / CODEC_EFFICIENCY[input.codec]);
}

function makeComparison(input: PlannerInput): ComparisonRow[] {
  const tiers = [
    { label: 'lean', multiplier: 0.65 },
    { label: 'balanced', multiplier: 1 },
    { label: 'crisp', multiplier: 1.45 },
  ];
  return tiers.map((tier) => {
    const bitrateMbps = estimateBitrate(input, tier.multiplier);
    const effectiveBpp = bitrateMbps * 1000000 * CODEC_EFFICIENCY[input.codec]
      / (getResolution(input.resolutionId).width * getResolution(input.resolutionId).height * input.fps);
    const quality = qualityFromBpp(effectiveBpp);
    return {
      label: tier.label,
      bitrateMbps,
      storageGb: bitrateMbps * input.durationMinutes * 60 / 8 / 1000,
      quality: quality.label,
      tone: quality.tone,
    };
  });
}

function capacityFromStorage(storageGb: number): PlannerResult['capacityTone'] {
  if (storageGb >= 100) return 'heavy';
  if (storageGb >= 20) return 'medium';
  return 'light';
}

export function calculatePlan(rawInput: PlannerInput): PlannerResult {
  const input: PlannerInput = {
    resolutionId: rawInput.resolutionId,
    fps: clamp(positive(rawInput.fps, 60), 1, 240),
    codec: rawInput.codec,
    bitrateMbps: clamp(positive(rawInput.bitrateMbps, 8), 0.1, 500),
    durationMinutes: clamp(positive(rawInput.durationMinutes, 60), 1, 10080),
    copies: Math.round(clamp(positive(rawInput.copies, 1), 1, 99)),
  };
  const resolution = getResolution(input.resolutionId);
  const bitratePerHourGb = input.bitrateMbps * 60 * 60 / 8 / 1000;
  const perCopyGb = input.bitrateMbps * input.durationMinutes / 8 / 1000 * 60;
  const effectiveBpp = input.bitrateMbps * 1000000 * CODEC_EFFICIENCY[input.codec]
    / (resolution.width * resolution.height * input.fps);
  const quality = qualityFromBpp(effectiveBpp);
  return {
    input,
    resolution,
    bitratePerHourGb,
    perCopyGb,
    allCopiesGb: perCopyGb * input.copies,
    frameTimeMs: 1000 / input.fps,
    dataPerFrameKb: input.bitrateMbps * 1000 / input.fps / 8,
    quality,
    capacityTone: capacityFromStorage(perCopyGb * input.copies),
    comparison: makeComparison(input),
  };
}
