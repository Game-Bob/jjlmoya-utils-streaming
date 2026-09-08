import type { StreamAdBreakScheduleUI } from './ui';
import { createPlan, formatMinutes, formatPlanText, type PlanInput, type PlanResult } from './logic';
import { evaluatePlan } from './evaluator';
import { renderSchedule } from './dom-views';
import { clearSavedPlan, loadSavedPlan, savePlan } from './storage';
import type { PlanState } from './evaluator';

interface Preset extends PlanInput {
  id: string;
}

const presets: Preset[] = [
  { id: 'quick', startTime: '19:00', plannedDuration: 120, cadence: 30, breakLength: 3, segmentsText: 'Opening | 15\nMain show | 35\nGameplay | 35\nClosing | 35' },
  { id: 'long', startTime: '18:00', plannedDuration: 180, cadence: 45, breakLength: 3, segmentsText: 'Opening | 20\nFeature | 50\nBreak segment | 45\nCommunity | 45\nClosing | 20' },
  { id: 'interview', startTime: '20:00', plannedDuration: 90, cadence: 30, breakLength: 2, segmentsText: 'Welcome | 10\nInterview | 25\nAudience questions | 25\nWrap-up | 30' },
];

function input(root: HTMLElement, name: keyof PlanInput): HTMLInputElement | HTMLTextAreaElement {
  const element = root.querySelector(`[name="${name}"]`);
  if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLTextAreaElement)) throw new Error(`Missing ${name}`);
  return element;
}

function readInput(root: HTMLElement): PlanInput {
  return {
    startTime: input(root, 'startTime').value,
    plannedDuration: Number.parseFloat(input(root, 'plannedDuration').value),
    cadence: Number.parseFloat(input(root, 'cadence').value),
    breakLength: Number.parseFloat(input(root, 'breakLength').value),
    segmentsText: input(root, 'segmentsText').value,
  };
}

function setInput(root: HTMLElement, plan: Partial<PlanInput>): void {
  (input(root, 'startTime') as HTMLInputElement).value = plan.startTime ?? '19:00';
  (input(root, 'plannedDuration') as HTMLInputElement).value = `${plan.plannedDuration ?? 120}`;
  (input(root, 'cadence') as HTMLInputElement).value = `${plan.cadence ?? 30}`;
  (input(root, 'breakLength') as HTMLInputElement).value = `${plan.breakLength ?? 3}`;
  (input(root, 'segmentsText') as HTMLTextAreaElement).value = plan.segmentsText ?? presets[0]!.segmentsText;
}

function text(root: HTMLElement, selector: string, value: string): void {
  const element = root.querySelector(selector);
  if (element) element.textContent = value;
}

function html(root: HTMLElement, selector: string, value: string): void {
  const element = root.querySelector(selector);
  if (element) element.innerHTML = value;
}

function formatDifference(value: number): string {
  if (Math.abs(value) < 0.05) return '';
  const direction = value > 0 ? '+' : '';
  return `${direction}${formatMinutes(value)} min`;
}

function getStateCopy(state: PlanState, ui: StreamAdBreakScheduleUI): { label: string; detail: string } {
  if (state === 'ready') return { label: ui.stateReady, detail: ui.stateReadyText };
  if (state === 'warning') return { label: ui.stateWarning, detail: ui.stateWarningText };
  return { label: ui.stateEmpty, detail: ui.stateEmptyText };
}

function buildDetails(result: PlanResult, ui: StreamAdBreakScheduleUI): string {
  const details: string[] = [];
  if (result.invalidLines.length > 0) details.push(ui.invalidLineText.replace('{lines}', result.invalidLines.join(', ')));
  const difference = formatDifference(result.plannedDifference);
  if (difference) details.push(ui.plannedMismatchText.replace('{difference}', difference));
  if (result.hasBoundaryWarning) details.push(ui.boundaryWarningText);
  return details.join(' ');
}

function updateOutput(root: HTMLElement, ui: StreamAdBreakScheduleUI, result: PlanResult): void {
  const evaluation = evaluatePlan(result);
  const stateCopy = getStateCopy(evaluation.state, ui);
  const state = root.querySelector('[data-plan-state]');
  if (state) {
    state.textContent = stateCopy.label;
    state.setAttribute('data-state', evaluation.state);
  }
  text(root, '[data-plan-state-text]', stateCopy.detail);
  html(root, '[data-schedule]', renderSchedule(result));
  text(root, '[data-content-total]', `${formatMinutes(result.contentMinutes)} ${ui.minutesShort}`);
  text(root, '[data-ads-total]', `${formatMinutes(result.adMinutes)} ${ui.minutesShort}`);
  text(root, '[data-break-count]', `${result.breakCount}`);
  text(root, '[data-end-time]', result.endTime);
  text(root, '[data-plan-detail]', buildDetails(result, ui));
  const empty = root.querySelector('[data-empty-schedule]');
  if (empty) empty.textContent = result.entries.length === 0 ? ui.noEntriesText : '';
}

function bindPreset(root: HTMLElement, button: HTMLButtonElement, ui: StreamAdBreakScheduleUI, render: () => void): void {
  button.addEventListener('click', () => {
    const preset = presets.find((item) => item.id === button.dataset.preset);
    if (!preset) return;
    setInput(root, preset);
    render();
    const status = root.querySelector('[data-copy-status]');
    if (status) status.textContent = `${ui.presetsLabel}: ${button.textContent ?? ''}`;
  });
}

async function copyPlan(root: HTMLElement, ui: StreamAdBreakScheduleUI, result: PlanResult): Promise<void> {
  const status = root.querySelector('[data-copy-status]');
  try {
    await navigator.clipboard.writeText(formatPlanText(result));
    if (status) status.textContent = ui.copiedLabel;
  } catch {
    if (status) status.textContent = ui.copyErrorLabel;
  }
}

export function initStreamAdBreakSchedule(root: HTMLElement): void {
  const ui = JSON.parse(root.dataset.ui ?? '{}') as StreamAdBreakScheduleUI;
  const saved = loadSavedPlan();
  if (saved) setInput(root, saved);
  let result = createPlan(readInput(root));
  const render = (): void => {
    const plan = readInput(root);
    result = createPlan(plan);
    savePlan(plan);
    updateOutput(root, ui, result);
  };
  root.querySelectorAll('input, textarea').forEach((element) => element.addEventListener('input', render));
  root.querySelectorAll<HTMLButtonElement>('[data-preset]').forEach((button) => bindPreset(root, button, ui, render));
  root.querySelector('[data-copy]')?.addEventListener('click', () => copyPlan(root, ui, result));
  root.querySelector('[data-reset]')?.addEventListener('click', () => {
    clearSavedPlan();
    setInput(root, presets[0]!);
    render();
  });
  render();
}
