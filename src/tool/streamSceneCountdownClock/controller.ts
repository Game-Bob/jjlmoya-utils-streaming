import { getSceneLabel, renderClock } from './dom-views';
import { getCountdown, parseStartTime } from './logic';
import { loadSettings, saveSettings, type SavedClockSettings } from './storage';
import type { SceneKey, StreamSceneCountdownClockUI } from './ui';
import { readUrlState } from './url-state';
import { collectSettings } from './settings-state';
import { bindCopyUrlButton, renderStreamingUrl } from './stream-url-view';
import { bindDesignSelect as bindDesignSelectControl, bindPreviewDesignButtons, designPalettes, renderDesignChoices, renderDesignSelect } from './design-state';
import { bindTextInputs as bindInputFields } from './text-input-state';

const defaults: SavedClockSettings = {
  scene: 'starting',
  sceneTitle: '',
  design: 'aurora',
  accentColor: '#a78bfa',
  glowColor: '#8ff5d7',
  message: 'Back in 5 minutes',
  durationSeconds: 300,
  startMode: 'now',
  startTime: '20:00',
};

interface ControllerState {
  settings: SavedClockSettings;
  startAtMs: number | null;
}

function getElement<T extends HTMLElement>(root: HTMLElement, selector: string): T | null {
  return root.querySelector<T>(selector);
}

function getAccentInk(hex: string): string {
  const match = hex.match(/^#([\da-f]{6})$/i);
  if (!match) return '#fffaf2';
  const value = match[1] ?? '';
  const channels = [0, 2, 4].map((offset) => Number.parseInt(value.slice(offset, offset + 2), 16) / 255);
  const weights = [0.2126, 0.7152, 0.0722];
  const luminance = channels.reduce((sum, channel, index) => {
    const linear = channel <= .03928 ? channel / 12.92 : ((channel + .055) / 1.055) ** 2.4;
    return sum + linear * (weights[index] ?? 0);
  }, 0);
  const darkContrast = (luminance + .05) / .06;
  const lightContrast = 1.05 / (luminance + .05);
  return darkContrast >= lightContrast ? '#171615' : '#fffaf2';
}

function renderInputValues(root: HTMLElement, settings: SavedClockSettings): void {
  const values = [
    ['[data-message]', settings.message],
    ['[data-scene-title]', settings.sceneTitle],
    ['[data-duration-input]', String(settings.durationSeconds)],
    ['[data-start-time-input]', settings.startTime],
    ['[data-design]', settings.design],
    ['[data-accent-color]', settings.accentColor],
    ['[data-glow-color]', settings.glowColor],
  ] as const;
  values.forEach(([selector, value]) => {
    const element = getElement<HTMLInputElement | HTMLSelectElement>(root, selector);
    if (element) element.value = value;
  });
}

function renderSettings(root: HTMLElement, settings: SavedClockSettings): void {
  const timeWrap = getElement<HTMLElement>(root, '.ssc-time-wrap');
  renderInputValues(root, settings);
  renderDesignSelect(root, settings.design);
  root.querySelectorAll<HTMLButtonElement>('[data-scene]').forEach((button) => {
    const active = button.dataset.scene === settings.scene;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  root.querySelectorAll<HTMLButtonElement>('[data-duration]').forEach((button) => {
    button.classList.toggle('is-active', Number(button.dataset.duration) === settings.durationSeconds);
  });
  root.querySelectorAll<HTMLButtonElement>('[data-start-mode]').forEach((button) => {
    const active = button.dataset.startMode === settings.startMode;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  renderDesignChoices(root, settings.design);
  if (timeWrap) timeWrap.hidden = settings.startMode !== 'scheduled';
}

function renderState(root: HTMLElement, state: ControllerState, ui: StreamSceneCountdownClockUI): void {
  renderSettings(root, state.settings);
  root.dataset.design = state.settings.design;
  root.style.setProperty('--n-user-accent', state.settings.accentColor);
  root.style.setProperty('--n-user-glow', state.settings.glowColor);
  root.style.setProperty('--n-accent-ink', getAccentInk(state.settings.accentColor));
  renderStreamingUrl(root, state.settings);
  renderClock({
    root,
    snapshot: getCountdown({ durationSeconds: state.settings.durationSeconds, startAtMs: state.startAtMs, nowMs: Date.now() }),
    scene: state.settings.scene,
    sceneTitle: state.settings.sceneTitle,
    message: state.settings.message,
    ui,
  });
}

function persistAndRender(root: HTMLElement, state: ControllerState, ui: StreamSceneCountdownClockUI): void {
  saveSettings(state.settings);
  renderState(root, state, ui);
}

function applyDefaultSceneTitle(settings: SavedClockSettings, ui: StreamSceneCountdownClockUI): SavedClockSettings {
  return settings.sceneTitle.trim() ? settings : { ...settings, sceneTitle: getSceneLabel(settings.scene, ui) };
}

function getStartTimestamp(state: ControllerState, nowMs: number, ui: StreamSceneCountdownClockUI, root: HTMLElement): number | null {
  if (state.settings.startMode === 'now') return nowMs;
  const value = state.settings.startTime;
  const timestamp = parseStartTime(value, nowMs);
  if (timestamp === null) {
    const error = getElement<HTMLElement>(root, '[data-time-error]');
    if (error) error.textContent = ui.invalidTime;
  }
  return timestamp;
}

export function mountCountdown(root: HTMLElement, ui: StreamSceneCountdownClockUI): void {
  const stored = loadSettings();
  const urlState = readUrlState(window.location.search);
  let settings: SavedClockSettings = { ...defaults, ...stored, ...urlState.settings };
  settings = applyDefaultSceneTitle(settings, ui);
  if (!designPalettes[settings.design]) settings.design = defaults.design;
  const state: ControllerState = { settings, startAtMs: null };
  if (urlState.streaming) {
    root.dataset.streaming = 'true';
    hideStreamingShell(root);
  }
  if (urlState.autoStart) state.startAtMs = getStartTimestamp(state, Date.now(), ui, root);
  bindChoiceButtons(root, state, ui);
  bindInputFields({ root, state, ui, render: renderState });
  bindActionButtons(root, state, ui);
  renderState(root, state, ui);
  const timer = window.setInterval(() => renderState(root, state, ui), 250);
  root.addEventListener('astro:unmount', () => window.clearInterval(timer), { once: true });
}

function bindChoiceButtons(root: HTMLElement, state: ControllerState, ui: StreamSceneCountdownClockUI): void {
  bindSceneButtons(root, state, ui);
  bindDurationButtons(root, state, ui);
  bindStartModeButtons(root, state, ui);
  bindDesignSelectControl(root, (design) => {
    state.settings = { ...collectSettings(root, state.settings), design, ...designPalettes[design] };
    persistAndRender(root, state, ui);
  });
  bindPreviewDesignButtons(root, (design) => {
    state.settings = { ...collectSettings(root, state.settings), design, ...designPalettes[design] };
    persistAndRender(root, state, ui);
  });
  bindColorInputs(root, state, ui);
}

function bindColorInputs(root: HTMLElement, state: ControllerState, ui: StreamSceneCountdownClockUI): void {
  root.querySelectorAll<HTMLInputElement>('[data-accent-color], [data-glow-color]').forEach((input) => {
    input.addEventListener('input', () => {
      state.settings = collectSettings(root, state.settings);
      persistAndRender(root, state, ui);
    });
  });
}

function bindSceneButtons(root: HTMLElement, state: ControllerState, ui: StreamSceneCountdownClockUI): void {
  root.querySelectorAll<HTMLButtonElement>('[data-scene]').forEach((button) => {
    button.addEventListener('click', () => {
      const scene = button.dataset.scene as SceneKey;
      state.settings = { ...collectSettings(root, state.settings), scene, sceneTitle: getSceneLabel(scene, ui) };
      persistAndRender(root, state, ui);
    });
  });
}

function bindDurationButtons(root: HTMLElement, state: ControllerState, ui: StreamSceneCountdownClockUI): void {
  root.querySelectorAll<HTMLButtonElement>('[data-duration]').forEach((button) => {
    button.addEventListener('click', () => {
      state.settings = { ...collectSettings(root, state.settings), durationSeconds: Number(button.dataset.duration) };
      persistAndRender(root, state, ui);
    });
  });
}

function bindStartModeButtons(root: HTMLElement, state: ControllerState, ui: StreamSceneCountdownClockUI): void {
  root.querySelectorAll<HTMLButtonElement>('[data-start-mode]').forEach((button) => {
    button.addEventListener('click', () => {
      state.settings = { ...collectSettings(root, state.settings), startMode: button.dataset.startMode as SavedClockSettings['startMode'] };
      persistAndRender(root, state, ui);
    });
  });
}

function bindActionButtons(root: HTMLElement, state: ControllerState, ui: StreamSceneCountdownClockUI): void {
  bindStartButton(root, state, ui);
  bindFocusButton(root, ui);
  bindResetButton(root, state, ui);
  bindCopyUrlButton(root, () => state.settings, ui);
}

function bindFocusButton(root: HTMLElement, ui: StreamSceneCountdownClockUI): void {
  const button = getElement<HTMLButtonElement>(root, '[data-action="focus"]');
  if (!button) return;
  button.addEventListener('click', async () => {
    if (document.fullscreenElement === root || root.dataset.focus === 'true') {
      if (document.fullscreenElement === root) await document.exitFullscreen();
      delete root.dataset.focus;
    } else {
      await enterFocus(root);
    }
    updateFocusButton(button, ui);
  });
  document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement !== root && root.dataset.focus === 'true') {
      delete root.dataset.focus;
    }
    updateFocusButton(button, ui);
  });
}

async function enterFocus(root: HTMLElement): Promise<void> {
  if (document.fullscreenElement === root) return;
  root.dataset.focus = 'true';
  try {
    await root.requestFullscreen();
  } catch {}
}

function updateFocusButton(button: HTMLButtonElement, ui: StreamSceneCountdownClockUI): void {
  const root = button.closest<HTMLElement>('[data-stream-scene-clock]');
  const focused = document.fullscreenElement === root || root?.dataset.focus === 'true';
  button.textContent = focused ? ui.exitFocusAction : ui.focusAction;
  button.setAttribute('aria-pressed', String(focused));
}

function hideStreamingShell(root: HTMLElement): void {
  let child: HTMLElement = root;
  let parent = root.parentElement;
  document.documentElement.dataset.sscStreaming = 'true';
  while (parent && parent !== document.body) {
    Array.from(parent.children).forEach((sibling) => {
      if (sibling !== child) (sibling as HTMLElement).dataset.sscHidden = 'true';
    });
    parent.dataset.sscContainer = 'true';
    child = parent;
    parent = parent.parentElement;
  }
  Array.from(document.body.children).forEach((sibling) => {
    if (sibling !== child) (sibling as HTMLElement).dataset.sscHidden = 'true';
  });
}

function bindStartButton(root: HTMLElement, state: ControllerState, ui: StreamSceneCountdownClockUI): void {
  getElement<HTMLButtonElement>(root, '[data-action="start"]')?.addEventListener('click', async () => {
    state.settings = collectSettings(root, state.settings);
    const timestamp = getStartTimestamp(state, Date.now(), ui, root);
    if (timestamp === null) return;
    state.startAtMs = timestamp;
    const error = getElement<HTMLElement>(root, '[data-time-error]');
    if (error) error.textContent = '';
    persistAndRender(root, state, ui);
    await enterFocus(root);
  });
}

function bindResetButton(root: HTMLElement, state: ControllerState, ui: StreamSceneCountdownClockUI): void {
  getElement<HTMLButtonElement>(root, '[data-action="reset"]')?.addEventListener('click', () => {
    state.settings = { ...defaults };
    state.startAtMs = null;
    persistAndRender(root, state, ui);
  });
}
