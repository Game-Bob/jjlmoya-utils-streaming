import { streamSceneCountdownClock } from './entry';
import type { ToolDefinition } from '../../types';
import streamSceneCountdownClockCss from './stream-scene-countdown-clock.css?raw';

export * from './entry';

export const STREAM_SCENE_COUNTDOWN_CLOCK_TOOL: ToolDefinition = {
  entry: streamSceneCountdownClock,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  css: streamSceneCountdownClockCss,
};
