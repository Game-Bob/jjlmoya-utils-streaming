import type { ContentType, TargetProfile } from './ui';

export interface SavedLoudnessSettings {
  measuredLufs: number;
  truePeakDbtp: number;
  targetProfile: TargetProfile;
  customTargetLufs: number;
  contentType: ContentType;
}

const STORAGE_KEY = 'jjlmoya-stream-audio-loudness-target-planner';

export function loadSettings(): Partial<SavedLoudnessSettings> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Partial<SavedLoudnessSettings>;
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

export function saveSettings(settings: SavedLoudnessSettings): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {}
}
