import { videoBitratePlanner } from './entry';
import type { ToolDefinition } from '../../types';
import plannerCss from './video-bitrate-storage-planner.css?raw';

export * from './entry';

export const VIDEO_BITRATE_PLANNER_TOOL: ToolDefinition = {
  entry: videoBitratePlanner,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  css: plannerCss,
};
