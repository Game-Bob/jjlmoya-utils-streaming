import type { StreamingToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import TebasCheckComponent from './component.astro';
import TebasCheckSEO from './seo.astro';
import TebasCheckBibliography from './bibliography.astro';
import type { TebasCheckUI } from './types';

export type TebasCheckLocaleContent = ToolLocaleContent<TebasCheckUI>;

export const tebasCheck: StreamingToolEntry<TebasCheckUI> = {
  id: 'tebas-check',
  icons: {
    bg: 'mdi:shield-search',
    fg: 'mdi:security',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { TebasCheckComponent, TebasCheckSEO, TebasCheckBibliography };

export const TEBAS_CHECK_TOOL: ToolDefinition = {
  entry: tebasCheck,
  Component: TebasCheckComponent,
  SEOComponent: TebasCheckSEO,
  BibliographyComponent: TebasCheckBibliography,
};
