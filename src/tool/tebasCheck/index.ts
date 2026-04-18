export * from './entry';
export const TEBAS_CHECK_TOOL: ToolDefinition = {
  entry: tebasCheck,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
