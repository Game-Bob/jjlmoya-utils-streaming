import { sorteo } from './entry';
export * from './entry';
export const SORTEO_TOOL: ToolDefinition = {
  entry: sorteo,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
