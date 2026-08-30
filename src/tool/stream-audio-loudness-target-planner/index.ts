import type { ToolDefinition } from '../../types';
import { streamAudioLoudnessTargetPlanner } from './entry';

export * from './entry';

export const STREAM_AUDIO_LOUDNESS_TARGET_PLANNER_TOOL: ToolDefinition = {
  entry: streamAudioLoudnessTargetPlanner,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
