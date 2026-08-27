import { describe, expect, it } from 'vitest';
import { calculatePlan, RESOLUTION_PRESETS } from './logic';

const baseInput = {
  resolutionId: '1080p',
  fps: 60,
  codec: 'h264' as const,
  bitrateMbps: 8,
  durationMinutes: 60,
  copies: 1,
};

describe('video bitrate planner logic', () => {
  it('contains the supported resolution presets', () => {
    expect(RESOLUTION_PRESETS.map((item) => item.id)).toEqual(['720p', '1080p', '1440p', '2160p']);
  });

  it('converts bitrate and duration into storage', () => {
    const result = calculatePlan(baseInput);
    expect(result.perCopyGb).toBeCloseTo(3.6, 6);
    expect(result.bitratePerHourGb).toBeCloseTo(3.6, 6);
    expect(result.dataPerFrameKb).toBeCloseTo(16.6667, 3);
  });

  it('multiplies storage by the requested copies', () => {
    const result = calculatePlan({ ...baseInput, copies: 3, durationMinutes: 90 });
    expect(result.allCopiesGb).toBeCloseTo(16.2, 6);
    expect(result.capacityTone).toBe('light');
  });

  it('recognizes codec efficiency in the quality estimate', () => {
    const h264 = calculatePlan(baseInput);
    const av1 = calculatePlan({ ...baseInput, codec: 'av1' });
    expect(av1.quality.effectiveBpp).toBeGreaterThan(h264.quality.effectiveBpp);
  });

  it('clamps unsafe or incomplete values to useful defaults', () => {
    const result = calculatePlan({
      ...baseInput,
      fps: Number.NaN,
      bitrateMbps: -4,
      durationMinutes: 0,
      copies: 400,
    });
    expect(result.input.fps).toBe(60);
    expect(result.input.bitrateMbps).toBe(8);
    expect(result.input.durationMinutes).toBe(60);
    expect(result.input.copies).toBe(99);
  });
});
