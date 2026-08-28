import { describe, expect, it } from 'vitest';
import {
  clampDuration,
  formatCountdown,
  getCountdown,
  parseStartTime,
} from './logic';

describe('stream scene countdown logic', () => {
  it('clamps invalid and extreme durations', () => {
    expect(clampDuration(Number.NaN)).toBe(300);
    expect(clampDuration(1)).toBe(10);
    expect(clampDuration(90000)).toBe(86400);
  });

  it('formats a countdown as hours, minutes, and seconds', () => {
    expect(formatCountdown(3661)).toBe('01:01:01');
    expect(formatCountdown(-2)).toBe('00:00:00');
  });

  it('starts in preview mode without an armed timestamp', () => {
    expect(getCountdown({ durationSeconds: 300, startAtMs: null, nowMs: 1000 }).status).toBe('ready');
  });

  it('counts down to a scheduled start before going live', () => {
    const snapshot = getCountdown({ durationSeconds: 300, startAtMs: 10000, nowMs: 5500 });
    expect(snapshot.status).toBe('waiting');
    expect(snapshot.displaySeconds).toBe(5);
  });

  it('reports live progress and remaining time', () => {
    const snapshot = getCountdown({ durationSeconds: 300, startAtMs: 10000, nowMs: 16000 });
    expect(snapshot.status).toBe('live');
    expect(snapshot.remainingSeconds).toBe(294);
    expect(snapshot.elapsedFraction).toBeCloseTo(0.02);
  });

  it('reports an ended clock at its exact end boundary', () => {
    const snapshot = getCountdown({ durationSeconds: 300, startAtMs: 10000, nowMs: 310000 });
    expect(snapshot.status).toBe('ended');
    expect(snapshot.displaySeconds).toBe(0);
  });

  it('parses a local clock time and rolls a passed time to tomorrow', () => {
    const reference = new Date(2026, 7, 28, 20, 30).getTime();
    const nextDay = parseStartTime('19:15', reference);
    expect(nextDay).not.toBeNull();
    expect(new Date(nextDay as number).getDate()).toBe(29);
    expect(parseStartTime('25:00', reference)).toBeNull();
  });
});
