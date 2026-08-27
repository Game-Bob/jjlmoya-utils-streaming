import type { FAQPage, HowTo, SoftwareApplication, Thing, WithContext } from 'schema-dts';
import { bibliography } from './bibliography';
import type { ToolLocaleContent, FAQItem, HowToStep, SEOSection } from '../../types';
import type { VideoBitratePlannerUI } from './ui';

export interface VideoBitrateLocaleData {
  slug: string;
  title: string;
  description: string;
  ui: VideoBitratePlannerUI;
  seo: SEOSection[];
  faq: FAQItem[];
  howTo: HowToStep[];
  language: string;
}

function createFaqSchema(faq: FAQItem[]): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

function createHowToSchema(data: VideoBitrateLocaleData): WithContext<HowTo> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: data.title,
    description: data.description,
    step: data.howTo.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

function createAppSchema(data: VideoBitrateLocaleData): WithContext<SoftwareApplication> {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: data.title,
    description: data.description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    inLanguage: data.language,
  };
}

export function createLocalizedContent(data: VideoBitrateLocaleData): ToolLocaleContent<VideoBitratePlannerUI> {
  const faqSchema = createFaqSchema(data.faq);
  const howToSchema = createHowToSchema(data);
  const appSchema = createAppSchema(data);
  return {
    slug: data.slug,
    title: data.title,
    description: data.description,
    ui: data.ui,
    seo: data.seo,
    faq: data.faq,
    bibliography,
    howTo: data.howTo,
    schemas: [faqSchema as WithContext<Thing>, howToSchema as WithContext<Thing>, appSchema as WithContext<Thing>],
  };
}
