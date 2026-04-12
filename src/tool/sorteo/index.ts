import type { StreamingToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import SorteoComponent from './component.astro';
import SorteoSEO from './seo.astro';
import SorteoBibliography from './bibliography.astro';
import type { SorteoUI } from './ui';

export type SorteoLocaleContent = ToolLocaleContent<SorteoUI>;

export const sorteo: StreamingToolEntry<SorteoUI> = {
  id: 'sorteo',
  icons: {
    bg: 'mdi:ticket',
    fg: 'mdi:account-group',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { SorteoComponent, SorteoSEO, SorteoBibliography };

export const SORTEO_TOOL: ToolDefinition = {
  entry: sorteo,
  Component: SorteoComponent,
  SEOComponent: SorteoSEO,
  BibliographyComponent: SorteoBibliography,
};
