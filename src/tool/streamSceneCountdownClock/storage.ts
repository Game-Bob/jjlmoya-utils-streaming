import type { DesignKey, SceneKey } from './ui';

export interface SavedClockSettings {
  scene: SceneKey;
  sceneTitle: string;
  design: DesignKey;
  accentColor: string;
  glowColor: string;
  message: string;
  durationSeconds: number;
  startMode: 'now' | 'scheduled';
  startTime: string;
}

const STORAGE_KEY = 'jjlmoya-stream-scene-countdown-clock';

export function loadSettings(): Partial<SavedClockSettings> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Partial<SavedClockSettings>;
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

export function saveSettings(settings: SavedClockSettings): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {}
}
