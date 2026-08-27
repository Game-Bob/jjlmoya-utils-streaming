import type { VideoBitratePlannerUI } from './ui';
import type { PlannerResult } from './logic';
import { getCapacityLabel, getQualityLabel, type EvaluatorLabels } from './evaluator';

function number(value: number, digits = 2): string {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: digits }).format(value);
}

function storage(value: number): string {
  if (value >= 1000) return `${number(value / 1000)} TB`;
  return `${number(value)} GB`;
}

function qualityTone(result: PlannerResult): string {
  return result.quality.tone;
}

function renderFrames(root: HTMLElement, result: PlannerResult): void {
  const frameCount = Math.min(18, Math.max(6, Math.round(result.input.bitrateMbps * 1.4)));
  const frames = Array.from({ length: frameCount }, (_, index) => {
    const active = index % 4 === 0 ? ' frame-accent' : '';
    return `<span class="signal-frame${active}" style="--frame-delay:${index * 55}ms"></span>`;
  }).join('');
  const target = root.querySelector<HTMLElement>('[data-signal-frames]');
  if (target) target.innerHTML = frames;
}

function renderResultText(root: HTMLElement, result: PlannerResult, ui: VideoBitratePlannerUI, labels: EvaluatorLabels): void {
  const quality = root.querySelector<HTMLElement>('[data-quality-badge]');
  const qualityNote = root.querySelector<HTMLElement>('[data-quality-note]');
  const capacity = root.querySelector<HTMLElement>('[data-capacity-badge]');
  if (quality) {
    quality.textContent = getQualityLabel(result, labels);
    quality.dataset.tone = qualityTone(result);
  }
  if (qualityNote) qualityNote.textContent = `${ui.qualityEstimate}: ${result.quality.guidance}`;
  if (capacity) {
    capacity.textContent = getCapacityLabel(result, labels);
    capacity.dataset.tone = result.capacityTone;
  }
  setText(root, '[data-total-storage]', storage(result.allCopiesGb));
  setText(root, '[data-per-copy]', storage(result.perCopyGb));
  setText(root, '[data-per-hour]', storage(result.bitratePerHourGb));
  setText(root, '[data-frame-time]', `${number(result.frameTimeMs)} ms`);
  setText(root, '[data-data-per-frame]', `${number(result.dataPerFrameKb)} KB`);
  setText(root, '[data-storage-caption]', `${ui.allCopies}: ${storage(result.allCopiesGb)} total`);
  setText(root, '[data-codec-value]', result.input.codec.toUpperCase());
  setText(root, '[data-resolution-value]', result.resolution.label);
  setText(root, '[data-fps-value]', `${result.input.fps} fps`);
}

function setText(root: HTMLElement, selector: string, value: string): void {
  const target = root.querySelector<HTMLElement>(selector);
  if (target) target.textContent = value;
}

function renderComparison(root: HTMLElement, result: PlannerResult, ui: VideoBitratePlannerUI): void {
  const target = root.querySelector<HTMLElement>('[data-comparison]');
  if (!target) return;
  const names: Record<string, string> = { lean: ui.lean, balanced: ui.balanced, crisp: ui.crisp };
  target.innerHTML = result.comparison.map((row) => `
    <div class="comparison-row" data-tone="${row.tone}">
      <span class="comparison-mark"></span>
      <span class="comparison-name">${names[row.label]}</span>
      <strong>${number(row.bitrateMbps)} Mbps</strong>
      <span>${storage(row.storageGb)}</span>
      <span class="comparison-quality">${row.quality}</span>
    </div>`).join('');
}

export function renderPlanner(root: HTMLElement, result: PlannerResult, ui: VideoBitratePlannerUI, labels: EvaluatorLabels): void {
  renderFrames(root, result);
  renderResultText(root, result, ui, labels);
  renderComparison(root, result, ui);
  root.dataset.qualityTone = result.quality.tone;
  root.dataset.capacityTone = result.capacityTone;
}
