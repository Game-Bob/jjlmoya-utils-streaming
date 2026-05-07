import { sorteo } from './entry';
import type { ToolDefinition } from '../../types';
import giveawayCss from './giveaway.css?raw';
export * from './entry';
export const SORTEO_TOOL: ToolDefinition = {
  entry: sorteo,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  css: giveawayCss,
};
