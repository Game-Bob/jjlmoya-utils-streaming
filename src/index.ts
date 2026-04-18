export { streamingCategory } from './category';
export const streamingCategorySEO = () => import('./category/seo.astro').then((m) => m.default);

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  StreamingToolEntry,
  StreamingCategoryEntry,
  ToolDefinition,
} from './types';

export { ALL_ENTRIES, ALL_TOOLS } from './tools';

export { SORTEO_TOOL } from './tool/sorteo/index';

export { TEBAS_CHECK_TOOL } from './tool/tebasCheck/index';
