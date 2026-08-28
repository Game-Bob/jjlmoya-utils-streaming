export type ClockStatus = 'ready' | 'waiting' | 'live' | 'ended';

export interface CountdownInput {
  durationSeconds: number;
  startAtMs: number | null;
  nowMs: number;
}

export interface CountdownSnapshot {
  status: ClockStatus;
  displaySeconds: number;
  remainingSeconds: number;
  elapsedFraction: number;
  startAtMs: number | null;
  endAtMs: number | null;
}

export const MIN_DURATION_SECONDS = 10;
export const MAX_DURATION_SECONDS = 86400;

export function clampDuration(seconds: number): number {
  if (!Number.isFinite(seconds)) return 300;
  return Math.min(MAX_DURATION_SECONDS, Math.max(MIN_DURATION_SECONDS, Math.round(seconds)));
}

export function parseStartTime(value: string, referenceMs: number): number | null {
  const match = /^(\d{2}):(\d{2})$/.exec(value);
  if (!match) return null;
  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (hours > 23 || minutes > 59) return null;
  const date = new Date(referenceMs);
  date.setHours(hours, minutes, 0, 0);
  if (date.getTime() <= referenceMs) date.setDate(date.getDate() + 1);
  return date.getTime();
}

export function getCountdown(input: CountdownInput): CountdownSnapshot {
  const durationSeconds = clampDuration(input.durationSeconds);
  if (input.startAtMs === null) return createReadySnapshot(durationSeconds);

  const endAtMs = input.startAtMs + durationSeconds * 1000;
  if (input.nowMs < input.startAtMs) return createWaitingSnapshot(input, durationSeconds, endAtMs);
  if (input.nowMs >= endAtMs) return createEndedSnapshot(input.startAtMs, endAtMs);

  const remainingSeconds = Math.ceil((endAtMs - input.nowMs) / 1000);
  const elapsedFraction = Math.min(1, Math.max(0, (input.nowMs - input.startAtMs) / (durationSeconds * 1000)));
  return createLiveSnapshot({
    remainingSeconds,
    elapsedFraction,
    startAtMs: input.startAtMs,
    endAtMs,
  });
}

function createReadySnapshot(durationSeconds: number): CountdownSnapshot {
  return {
    status: 'ready',
    displaySeconds: durationSeconds,
    remainingSeconds: durationSeconds,
    elapsedFraction: 0,
    startAtMs: null,
    endAtMs: null,
  };
}

function createWaitingSnapshot(input: CountdownInput, durationSeconds: number, endAtMs: number): CountdownSnapshot {
  return {
    status: 'waiting',
    displaySeconds: Math.ceil((input.startAtMs as number - input.nowMs) / 1000),
    remainingSeconds: durationSeconds,
    elapsedFraction: 0,
    startAtMs: input.startAtMs,
    endAtMs,
  };
}

function createEndedSnapshot(startAtMs: number, endAtMs: number): CountdownSnapshot {
  return {
    status: 'ended',
    displaySeconds: 0,
    remainingSeconds: 0,
    elapsedFraction: 1,
    startAtMs,
    endAtMs,
  };
}

function createLiveSnapshot(input: Omit<CountdownSnapshot, 'status' | 'displaySeconds'>): CountdownSnapshot {
  return {
    status: 'live',
    displaySeconds: input.remainingSeconds,
    ...input,
  };
}

export function formatCountdown(seconds: number): string {
  const safeSeconds = Math.max(0, Math.floor(seconds));
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const remainder = safeSeconds % 60;
  return [hours, minutes, remainder].map((part) => String(part).padStart(2, '0')).join(':');
}

export function formatLocalTime(timestamp: number | null): string {
  if (timestamp === null) return '--:--';
  return new Intl.DateTimeFormat('en', { hour: 'numeric', minute: '2-digit' }).format(timestamp);
}
