import { clampDuration } from './logic';
import type { SavedClockSettings } from './storage';
import type { DesignKey } from './ui';

function getTextValue(root: HTMLElement, selector: string, fallback: string): string {
  const element = root.querySelector<HTMLInputElement | HTMLSelectElement>(selector);
  return element ? element.value : fallback;
}

function getDurationValue(root: HTMLElement, fallback: number): number {
  const element = root.querySelector<HTMLInputElement>('[data-duration-input]');
  return element && Number.isFinite(element.valueAsNumber) ? element.valueAsNumber : fallback;
}

export function collectSettings(root: HTMLElement, current: SavedClockSettings): SavedClockSettings {
  const message = getTextValue(root, '[data-message]', current.message);
  const sceneTitle = getTextValue(root, '[data-scene-title]', current.sceneTitle);
  const duration = getDurationValue(root, current.durationSeconds);
  const startTime = getTextValue(root, '[data-start-time-input]', current.startTime);
  const design = getTextValue(root, '[data-design]', current.design) as DesignKey;
  const accentColor = getTextValue(root, '[data-accent-color]', current.accentColor);
  const glowColor = getTextValue(root, '[data-glow-color]', current.glowColor);
  return { ...current, message, sceneTitle, durationSeconds: clampDuration(duration), startTime, design, accentColor, glowColor };
}
