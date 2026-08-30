import { evaluateLoudness, type EvaluatorLabels } from './evaluator';
import { formatSigned, getLimiterRequirement, getPlatformPreview, type LoudnessResult } from './logic';
import type { AudioAnalysis } from './audio-analysis';
import type { StreamAudioLoudnessUI } from './ui';

interface ViewContext {
  ui: StreamAudioLoudnessUI;
  labels: EvaluatorLabels;
  targetLufs: number;
  analysis: AudioAnalysis | null;
  platformTargets: Record<string, number>;
}

export function renderLoudness(root: HTMLElement, result: LoudnessResult, context: ViewContext): void {
  const reading = evaluateLoudness(result, context.labels);
  setText(root, '[data-state-badge]', reading.badge);
  setText(root, '[data-state-text]', reading.text);
  setText(root, '[data-correction]', `${formatSigned(result.correctionDb)} dB`);
  setText(root, '[data-projected-peak]', `${formatSigned(result.projectedPeakDbtp)} dBTP`);
  setText(root, '[data-headroom]', `${formatSigned(result.headroomDb)} dB`);
  setText(root, '[data-current-value]', `${formatSigned(Number(root.dataset.measuredLufs ?? 0))} LUFS`);
  setText(root, '[data-target-value]', `${formatSigned(context.targetLufs)} LUFS`);
  setText(root, '[data-peak-value]', `${formatSigned(-1)} dBTP`);
  root.dataset.state = reading.tone;
  updateMarker(root, '[data-current-marker]', Number(root.dataset.measuredLufs ?? 0));
  updateMarker(root, '[data-target-marker]', context.targetLufs);
  updateFill(root, Number(root.dataset.measuredLufs ?? 0));
  renderInsights(root, result, context);
  renderPlatforms(root, context);
  setText(root, '[data-output-settings]', `Gain ${formatSigned(result.correctionDb)} dB · Limiter ${formatSigned(Math.min(-1, result.projectedPeakDbtp))} dBTP`);
  setText(root, '[data-obs-preset]', `${context.ui.obsPresetLabel}: Gain ${formatSigned(result.correctionDb)} dB · Limiter ${formatSigned(Math.min(-1, result.projectedPeakDbtp))} dBTP`);
  setText(root, '[data-daw-preset]', `${context.ui.dawPresetLabel}: Gain ${formatSigned(result.correctionDb)} dB · Ceiling ${formatSigned(Math.min(-1, result.projectedPeakDbtp))} dBTP`);
}

function renderInsights(root: HTMLElement, result: LoudnessResult, context: ViewContext): void {
  const analysis = context.analysis;
  setText(root, '[data-lra]', analysis ? `${analysis.lraDb.toFixed(1)} dB` : '-');
  setText(root, '[data-lra-status]', analysis ? getLraStatus(analysis.lraDb, context.ui) : context.ui.lraWaiting);
  const limiter = getLimiterRequirement(result.projectedPeakDbtp);
  setText(root, '[data-limiter-required]', limiter > 0 ? `${formatSigned(limiter)} dB` : context.ui.limiterNone);
  setText(root, '[data-limiter-status]', limiter > 0 ? context.ui.limiterRequired.replace('{amount}', formatSigned(limiter)) : context.ui.limiterNone);
}

function renderPlatforms(root: HTMLElement, context: ViewContext): void {
  const measured = Number(root.dataset.measuredLufs ?? 0);
  Object.entries(context.platformTargets).forEach(([id, target]) => {
    const preview = getPlatformPreview(id, measured, target);
    const text = preview.changeDb < 0 ? context.ui.platformTrim.replace('{amount}', formatSigned(preview.changeDb)) : context.ui.platformNoTrim;
    setText(root, `[data-platform-result="${id}"]`, `${text} · ${formatSigned(target)} LUFS`);
  });
}

function getLraStatus(lraDb: number, ui: StreamAudioLoudnessUI): string {
  if (lraDb > 12) return ui.lraWide;
  if (lraDb < 4) return ui.lraNarrow;
  return ui.lraBalanced;
}

function setText(root: HTMLElement, selector: string, value: string): void {
  const node = root.querySelector<HTMLElement>(selector);
  if (node) node.textContent = value;
}

function updateMarker(root: HTMLElement, selector: string, value: number): void {
  const node = root.querySelector<HTMLElement>(selector);
  if (!node) return;
  node.style.left = `${toPercent(value)}%`;
}

function updateFill(root: HTMLElement, value: number): void {
  const node = root.querySelector<HTMLElement>('[data-meter-fill]');
  if (node) node.style.width = `${toPercent(value)}%`;
}

function toPercent(value: number): number {
  return Math.min(100, Math.max(0, ((value + 36) / 36) * 100));
}
