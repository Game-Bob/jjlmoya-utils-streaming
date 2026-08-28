import { collectSettings } from './settings-state';
import { saveSettings, type SavedClockSettings } from './storage';
import type { StreamSceneCountdownClockUI } from './ui';

interface InputState {
  settings: SavedClockSettings;
  startAtMs: number | null;
}

interface InputContext {
  root: HTMLElement;
  state: InputState;
  ui: StreamSceneCountdownClockUI;
  render: (root: HTMLElement, state: InputState, ui: StreamSceneCountdownClockUI) => void;
}

function bindTextInput(context: InputContext, selector: string): void {
  const element = context.root.querySelector<HTMLInputElement>(selector);
  element?.addEventListener('input', () => {
    context.state.settings = collectSettings(context.root, context.state.settings);
    saveSettings(context.state.settings);
    context.render(context.root, context.state, context.ui);
  });
}

export function bindTextInputs(context: InputContext): void {
  bindTextInput(context, '[data-scene-title]');
  bindTextInput(context, '[data-message]');
  bindTextInput(context, '[data-duration-input]');
  bindTextInput(context, '[data-start-time-input]');
}
