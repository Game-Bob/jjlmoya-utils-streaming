import { describe, expect, it } from 'vitest';
import { createPlan, formatClock, formatPlanText, parseSegments } from './logic';

describe('stream ad break schedule logic', () => {
  it('parses labelled duration rows and reports malformed rows', () => {
    expect(parseSegments('Intro | 10\nwrong\nMain show | 45')).toEqual({
      segments: [{ label: 'Intro', duration: 10 }, { label: 'Main show', duration: 45 }],
      invalidLines: [2],
    });
  });

  it('places breaks at the first available boundary after cadence', () => {
    const result = createPlan({
      startTime: '19:00',
      plannedDuration: 100,
      cadence: 30,
      breakLength: 3,
      segmentsText: 'Opening | 20\nMain show | 35\nClosing | 20',
    });
    expect(result.breakCount).toBe(1);
    expect(result.entries.map((entry) => [entry.kind, entry.startTime])).toEqual([
      ['segment', '19:00'],
      ['segment', '19:20'],
      ['break', '19:55'],
      ['segment', '19:58'],
    ]);
    expect(result.endTime).toBe('20:18');
  });

  it('keeps the physical schedule duration separate from ad minutes', () => {
    const result = createPlan({
      startTime: '23:50',
      plannedDuration: 20,
      cadence: 10,
      breakLength: 2,
      segmentsText: 'Show | 8\nQ&A | 12',
    });
    expect(result.contentMinutes).toBe(20);
    expect(result.adMinutes).toBe(0);
    expect(result.totalMinutes).toBe(20);
    expect(result.endTime).toBe('00:10');
  });

  it('formats clocks across midnight and produces copy text', () => {
    expect(formatClock(24 * 60 + 5)).toBe('00:05');
    const result = createPlan({
      startTime: '10:00',
      plannedDuration: 60,
      cadence: 30,
      breakLength: 3,
      segmentsText: 'A | 30\nB | 30',
    });
    expect(formatPlanText(result)).toContain('10:30  Ad break  (3 min)');
  });

  it('returns an empty plan without throwing for empty input', () => {
    const result = createPlan({ startTime: '08:00', plannedDuration: 60, cadence: 30, breakLength: 3, segmentsText: '' });
    expect(result.entries).toEqual([]);
    expect(result.endTime).toBe('08:00');
  });
});
