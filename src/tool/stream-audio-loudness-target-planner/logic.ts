import type { ContentType } from './ui';

export const PEAK_CEILING_DBTP = -1;

export interface LoudnessInput {
  measuredLufs: number;
  truePeakDbtp: number;
  targetLufs: number;
  contentType: ContentType;
}

export type LoudnessState = 'ready' | 'boost' | 'trim' | 'peak-risk';

export interface LoudnessResult {
  correctionDb: number;
  projectedPeakDbtp: number;
  headroomDb: number;
  state: LoudnessState;
  contentType: ContentType;
}

export interface PlatformPreview {
  id: string;
  targetLufs: number;
  changeDb: number;
}

export function calculateLoudness(input: LoudnessInput): LoudnessResult {
  const correctionDb = input.targetLufs - input.measuredLufs;
  const projectedPeakDbtp = input.truePeakDbtp + correctionDb;
  const headroomDb = PEAK_CEILING_DBTP - projectedPeakDbtp;
  const state = getState(correctionDb, projectedPeakDbtp);
  return { correctionDb, projectedPeakDbtp, headroomDb, state, contentType: input.contentType };
}

function getState(correctionDb: number, projectedPeakDbtp: number): LoudnessState {
  if (projectedPeakDbtp > PEAK_CEILING_DBTP) return 'peak-risk';
  if (correctionDb > 1) return 'boost';
  if (correctionDb < -1) return 'trim';
  return 'ready';
}

export function clampNumber(value: number, minimum: number, maximum: number, fallback: number): number {
  if (!Number.isFinite(value)) return fallback;
  return Math.min(maximum, Math.max(minimum, value));
}

export function formatSigned(value: number): string {
  const rounded = Math.round(value * 10) / 10;
  return `${rounded > 0 ? '+' : ''}${rounded.toFixed(1)}`;
}

export function getPlatformPreview(id: string, measuredLufs: number, targetLufs: number): PlatformPreview {
  const changeDb = measuredLufs > targetLufs ? targetLufs - measuredLufs : 0;
  return { id, targetLufs, changeDb };
}

export function getLimiterRequirement(projectedPeakDbtp: number): number {
  return Math.max(0, projectedPeakDbtp - PEAK_CEILING_DBTP);
}
