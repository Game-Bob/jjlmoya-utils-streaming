import type { SEOSection } from '@jjlmoya/utils-shared';
import type { UtilityLocale } from '@jjlmoya/utils-shared/routing';
import type { WithContext, Thing } from 'schema-dts';
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

export type { SEOSection };

export type KnownLocale = UtilityLocale;

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BibliographyEntry {
  name: string;
  url: string;
}

export interface HowToStep {
  name: string;
  text: string;
}

export interface ToolLocaleContent<TUI extends Record<string, string | string[]> = Record<string, string | string[]>> {
  slug: string;
  title: string;
  description: string;
  ui: TUI;
  seo: SEOSection[];
  faq: FAQItem[];
  bibliography: BibliographyEntry[];
  howTo: HowToStep[];
  schemas: WithContext<Thing>[];
}

export interface CategoryLocaleContent {
  slug: string;
  title: string;
  description: string;
  seo: SEOSection[];
}

export type LocaleLoader<T> = () => Promise<T>;

export type LocaleMap<T> = Partial<Record<KnownLocale, LocaleLoader<T>>>;

export interface StreamingToolEntry<TUI extends Record<string, string | string[]> = Record<string, string | string[]>> {
  id: string;
  icons: {
    bg: string;
    fg: string;
  };
  i18n: LocaleMap<ToolLocaleContent<TUI>>;
}

export interface StreamingCategoryEntry {
  icon: string;
  tools: StreamingToolEntry[];
  i18n: LocaleMap<CategoryLocaleContent>;
}

export interface ToolDefinition {
  entry: StreamingToolEntry;
  Component: () => Promise<{ default: AstroComponentFactory }>;
  SEOComponent: () => Promise<{ default: AstroComponentFactory }>;
  BibliographyComponent: () => Promise<{ default: AstroComponentFactory }>;
  css?: string;
}
