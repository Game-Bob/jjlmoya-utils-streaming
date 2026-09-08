import type { ToolDefinition } from '../../types';
import { streamAdBreakScheduleCalculator } from './entry';

export * from './entry';

export const STREAM_AD_BREAK_SCHEDULE_CALCULATOR_TOOL: ToolDefinition = {
  entry: streamAdBreakScheduleCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
