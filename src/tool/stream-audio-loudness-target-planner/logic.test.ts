import { describe, expect, it } from 'vitest';
import { calculateLoudness, formatSigned, getLimiterRequirement, getPlatformPreview, PEAK_CEILING_DBTP } from './logic';
import { estimateLra } from './audio-analysis';

describe('stream audio loudness logic', () => {
  it('calculates a boost and projected peak', () => {
    const result = calculateLoudness({ measuredLufs: -20, truePeakDbtp: -6, targetLufs: -14, contentType: 'voice' });
    expect(result.correctionDb).toBe(6);
    expect(result.projectedPeakDbtp).toBe(0);
    expect(result.headroomDb).toBe(-1);
    expect(result.state).toBe('peak-risk');
  });

  it('marks a close match as ready', () => {
    const result = calculateLoudness({ measuredLufs: -14.4, truePeakDbtp: -4, targetLufs: -14, contentType: 'gameplay' });
    expect(result.state).toBe('ready');
    expect(result.headroomDb).toBeCloseTo(2.6, 5);
  });

  it('distinguishes trim from a safe correction', () => {
    const result = calculateLoudness({ measuredLufs: -10, truePeakDbtp: -8, targetLufs: -14, contentType: 'music' });
    expect(result.state).toBe('trim');
    expect(result.correctionDb).toBe(-4);
  });

  it('exposes the documented peak ceiling', () => {
    expect(PEAK_CEILING_DBTP).toBe(-1);
    expect(formatSigned(-2)).toBe('-2.0');
    expect(formatSigned(2)).toBe('+2.0');
  });

  it('calculates a platform trim preview without adding gain', () => {
    expect(getPlatformPreview('spotify', -10, -14)).toEqual({ id: 'spotify', targetLufs: -14, changeDb: -4 });
    expect(getPlatformPreview('youtube', -18, -14).changeDb).toBe(0);
  });

  it('reports only the limiter amount above the safety ceiling', () => {
    expect(getLimiterRequirement(-1)).toBe(0);
    expect(getLimiterRequirement(1.5)).toBe(2.5);
  });

  it('estimates loudness range from short-term readings', () => {
    expect(estimateLra([-24, -23, -22, -14, -12])).toBeCloseTo(11.2, 1);
  });
});
