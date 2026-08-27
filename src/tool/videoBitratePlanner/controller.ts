import { calculatePlan, type PlannerInput, type VideoCodec } from './logic';
import { clearPlannerInput, loadPlannerInput, savePlannerInput } from './storage';
import { renderPlanner } from './dom-views';
import type { VideoBitratePlannerUI } from './ui';

const defaults: PlannerInput = {
  resolutionId: '1080p',
  fps: 60,
  codec: 'h264',
  bitrateMbps: 8,
  durationMinutes: 60,
  copies: 1,
};

const labels = {
  quality: {
    aggressive: 'Aggressive compression',
    lean: 'Lean and light',
    balanced: 'Balanced signal',
    strong: 'Strong detail',
    excellent: 'Excellent headroom',
  },
  capacity: {
    light: 'Light storage footprint',
    medium: 'Medium storage footprint',
    heavy: 'Heavy storage footprint',
  },
};

function getInput(root: HTMLElement): PlannerInput {
  const mode = getMode(root);
  return {
    ...mode,
    bitrateMbps: getNumberInput(root, '[name="bitrate"]', defaults.bitrateMbps),
    durationMinutes: getNumberInput(root, '[name="duration"]', defaults.durationMinutes),
    copies: getNumberInput(root, '[name="copies"]', defaults.copies),
  };
}

function getMode(root: HTMLElement): Pick<PlannerInput, 'resolutionId' | 'fps' | 'codec'> {
  return {
    resolutionId: root.dataset.resolution || defaults.resolutionId,
    fps: Number(root.dataset.fps || defaults.fps),
    codec: (root.dataset.codec || defaults.codec) as VideoCodec,
  };
}

function getNumberInput(root: HTMLElement, selector: string, fallback: number): number {
  const input = root.querySelector<HTMLInputElement>(selector);
  return Number(input?.value || fallback);
}

function setInput(root: HTMLElement, input: PlannerInput): void {
  root.dataset.resolution = input.resolutionId;
  root.dataset.fps = String(input.fps);
  root.dataset.codec = input.codec;
  setValue(root, '[name="bitrate"]', input.bitrateMbps.toString());
  setValue(root, '[name="duration"]', input.durationMinutes.toString());
  setValue(root, '[name="copies"]', input.copies.toString());
  syncActiveButtons(root);
}

function setValue(root: HTMLElement, selector: string, value: string): void {
  const input = root.querySelector<HTMLInputElement>(selector);
  if (input) input.value = value;
}

function syncActiveButtons(root: HTMLElement): void {
  root.querySelectorAll<HTMLButtonElement>('[data-resolution], [data-fps], [data-codec]').forEach((button) => {
    const key = isActiveButton(root, button);
    button.classList.toggle('is-active', Boolean(key));
    button.setAttribute('aria-pressed', String(Boolean(key)));
  });
}

function isActiveButton(root: HTMLElement, button: HTMLButtonElement): boolean {
  if (button.dataset.resolution) return root.dataset.resolution === button.dataset.resolution;
  if (button.dataset.fps) return root.dataset.fps === button.dataset.fps;
  return root.dataset.codec === button.dataset.codec;
}

function update(root: HTMLElement, ui: VideoBitratePlannerUI): void {
  const input = getInput(root);
  const result = calculatePlan(input);
  renderPlanner(root, result, ui, labels);
  savePlannerInput(result.input);
}

function applyPreset(root: HTMLElement, preset: string): void {
  const presets: Record<string, PlannerInput> = {
    fast: { ...defaults, resolutionId: '720p', fps: 30, bitrateMbps: 4 },
    upload: { ...defaults, resolutionId: '1080p', fps: 60, bitrateMbps: 8 },
    archive: { ...defaults, resolutionId: '2160p', fps: 30, codec: 'av1', bitrateMbps: 35 },
  };
  const selected = presets[preset];
  if (selected) setInput(root, selected);
}

function handleClick(event: Event, root: HTMLElement, ui: VideoBitratePlannerUI): void {
  const target = event.target as HTMLElement;
  const button = target.closest<HTMLButtonElement>('button');
  if (!button) return;
  const preset = button.dataset.preset;
  if (preset) applyPreset(root, preset);
  if (button.dataset.resolution) root.dataset.resolution = button.dataset.resolution;
  if (button.dataset.fps) root.dataset.fps = button.dataset.fps;
  if (button.dataset.codec) root.dataset.codec = button.dataset.codec as VideoCodec;
  if (button.dataset.reset !== undefined) {
    clearPlannerInput();
    setInput(root, defaults);
  }
  syncActiveButtons(root);
  update(root, ui);
}

function start(root: HTMLElement): void {
  const uiScript = root.querySelector<HTMLScriptElement>('[data-planner-ui]');
  if (!uiScript) return;
  const ui = JSON.parse(uiScript.textContent ?? '{}') as VideoBitratePlannerUI;
  const saved = loadPlannerInput(defaults);
  setInput(root, saved);
  root.addEventListener('click', (event) => handleClick(event, root, ui));
  root.addEventListener('input', () => update(root, ui));
  root.addEventListener('change', () => update(root, ui));
  update(root, ui);
}

export function mountVideoBitratePlanner(): void {
  document.querySelectorAll<HTMLElement>('[data-video-bitrate-planner]').forEach((root) => {
    if (root.dataset.mounted) return;
    root.dataset.mounted = 'true';
    start(root);
  });
}
