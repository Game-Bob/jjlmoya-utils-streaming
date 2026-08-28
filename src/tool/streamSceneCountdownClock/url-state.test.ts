import { describe, expect, it } from 'vitest';
import { buildStreamingUrl, readUrlState } from './url-state';

describe('stream scene countdown URL state', () => {
  it('loads an overlay with case insensitive streaming flag and inputs', () => {
    const state = readUrlState('?STREAMING&scene=raid&message=Back%20soon&duration=90');
    expect(state.streaming).toBe(true);
    expect(state.autoStart).toBe(true);
    expect(state.settings).toEqual({ scene: 'raid', message: 'Back soon', durationSeconds: 90, startMode: 'now' });
  });

  it('supports a scheduled start in a browser source URL', () => {
    const state = readUrlState('?streaming&scene=starting&start=scheduled&time=23%3A45');
    expect(state.settings.startMode).toBe('scheduled');
    expect(state.settings.startTime).toBe('23:45');
  });

  it('does not auto-start a normal page without a start flag', () => {
    const state = readUrlState('?scene=brb&duration=600');
    expect(state.streaming).toBe(false);
    expect(state.autoStart).toBe(false);
  });

  it('loads a visual design and its custom colors', () => {
    const state = readUrlState('?STREAMING&design=type&accent=%23ffb84d&glow=%23ff5f91');
    expect(state.settings).toMatchObject({ design: 'type', accentColor: '#ffb84d', glowColor: '#ff5f91' });
  });

  it('loads a custom scene title for the browser source', () => {
    const state = readUrlState('?STREAMING&scene=starting&title=Back%20in%20a%20moment');
    expect(state.settings.sceneTitle).toBe('Back in a moment');
  });

  it('builds a ready-to-paste OBS URL from the streamer settings', () => {
    const url = buildStreamingUrl({
      scene: 'raid',
      sceneTitle: 'Raid starts soon',
      design: 'aurora',
      accentColor: '#a78bfa',
      glowColor: '#8ff5d7',
      message: 'Raid incoming',
      durationSeconds: 90,
      startMode: 'scheduled',
      startTime: '23:45',
    }, 'https://example.com', '/en/stream-scene-countdown-clock/');
    expect(url).toBe('https://example.com/en/stream-scene-countdown-clock/?STREAMING&scene=raid&duration=90&design=aurora&accent=%23a78bfa&glow=%238ff5d7&title=Raid+starts+soon&message=Raid+incoming&start=scheduled&time=23%3A45');
  });
});
