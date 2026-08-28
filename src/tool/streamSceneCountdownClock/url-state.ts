import { clampDuration } from './logic';
import type { DesignKey, SceneKey } from './ui';
import type { SavedClockSettings } from './storage';

export interface UrlClockState {
  streaming: boolean;
  autoStart: boolean;
  settings: Partial<SavedClockSettings>;
}

const scenes: SceneKey[] = ['brb', 'starting', 'raid', 'intermission'];
const designs: DesignKey[] = ['aurora', 'type', 'pulse', 'glitch', 'sunset'];

function getParam(params: URLSearchParams, name: string): string | null {
  for (const [key, value] of params.entries()) {
    if (key.toLowerCase() === name) return value;
  }
  return null;
}

function getScene(value: string | null): SceneKey | null {
  return value && scenes.includes(value as SceneKey) ? value as SceneKey : null;
}

function getDesign(value: string | null): DesignKey | null {
  if (value === 'neon') return 'aurora';
  if (value === 'cyber') return 'glitch';
  if (value === 'studio') return 'glitch';
  return value && designs.includes(value as DesignKey) ? value as DesignKey : null;
}

function getColor(value: string | null): string | null {
  return value && /^#[\da-f]{6}$/i.test(value) ? value : null;
}

function getDuration(value: string | null): number | null {
  if (!value) return null;
  const duration = Number(value);
  return Number.isFinite(duration) ? clampDuration(duration) : null;
}

function getStartSettings(params: URLSearchParams, streaming: boolean): { startMode?: SavedClockSettings['startMode']; startTime?: string; autoStart: boolean } {
  const start = getParam(params, 'start');
  const time = getParam(params, 'time');
  if (start && /^\d{2}:\d{2}$/.test(start)) return { startMode: 'scheduled', startTime: start, autoStart: true };
  if (start === 'scheduled' && time) return { startMode: 'scheduled', startTime: time, autoStart: true };
  if (start === 'now' || streaming) return { startMode: 'now', autoStart: true };
  return { autoStart: false };
}

function readSceneAndDesign(params: URLSearchParams): Partial<SavedClockSettings> {
  const scene = getScene(getParam(params, 'scene'));
  const design = getDesign(getParam(params, 'design') ?? getParam(params, 'style'));
  return {
    ...(scene ? { scene } : {}),
    ...(design ? { design } : {}),
  };
}

function readColors(params: URLSearchParams): Partial<SavedClockSettings> {
  const accentColor = getColor(getParam(params, 'accent'));
  const glowColor = getColor(getParam(params, 'glow'));
  return {
    ...(accentColor ? { accentColor } : {}),
    ...(glowColor ? { glowColor } : {}),
  };
}

function readContent(params: URLSearchParams): Partial<SavedClockSettings> {
  const sceneTitle = getParam(params, 'title');
  const message = getParam(params, 'message');
  const durationSeconds = getDuration(getParam(params, 'duration'));
  return {
    ...(sceneTitle !== null ? { sceneTitle } : {}),
    ...(message !== null ? { message } : {}),
    ...(durationSeconds !== null ? { durationSeconds } : {}),
  };
}

function readTimingSettings(timing: ReturnType<typeof getStartSettings>): Partial<SavedClockSettings> {
  return {
    ...(timing.startMode ? { startMode: timing.startMode } : {}),
    ...(timing.startTime ? { startTime: timing.startTime } : {}),
  };
}

export function readUrlState(search: string): UrlClockState {
  const params = new URLSearchParams(search);
  const streaming = Array.from(params.keys()).some((key) => key.toLowerCase() === 'streaming');
  const timing = getStartSettings(params, streaming);
  return {
    streaming,
    autoStart: timing.autoStart,
    settings: {
      ...readSceneAndDesign(params),
      ...readColors(params),
      ...readContent(params),
      ...readTimingSettings(timing),
    },
  };
}

export function buildStreamingUrl(settings: SavedClockSettings, origin: string, pathname: string): string {
  const params = new URLSearchParams({
    scene: settings.scene,
    duration: String(settings.durationSeconds),
    design: settings.design,
    accent: settings.accentColor,
    glow: settings.glowColor,
  });
  if (settings.sceneTitle.trim()) params.set('title', settings.sceneTitle.trim());
  if (settings.message.trim()) params.set('message', settings.message.trim());
  if (settings.startMode === 'scheduled') {
    params.set('start', 'scheduled');
    params.set('time', settings.startTime);
  }
  return `${origin}${pathname}?STREAMING&${params.toString()}`;
}
