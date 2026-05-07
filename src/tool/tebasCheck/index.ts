import { tebasCheck } from './entry';
import type { ToolDefinition } from '../../types';
import tebasCss from './isp-blockage-detector.css?raw';
export * from './entry';
export const TEBAS_CHECK_TOOL: ToolDefinition = {
  entry: tebasCheck,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
  css: tebasCss,
};
