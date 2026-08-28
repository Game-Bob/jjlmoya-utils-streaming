import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { FAQItem, HowToStep, SEOSection, ToolLocaleContent } from '../../../types';
import type { StreamSceneCountdownClockUI } from '../ui';

interface LocaleCopy {
  language: string;
  slug: string;
  title: string;
  description: string;
  ui: StreamSceneCountdownClockUI;
  faq: FAQItem[];
  howTo: HowToStep[];
  seo: SEOSection[];
}

export function makeContent(copy: LocaleCopy): ToolLocaleContent<StreamSceneCountdownClockUI> {
  const faqSchema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
  const howToSchema: WithContext<HowTo> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: copy.title,
    description: copy.description,
    step: copy.howTo.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
  const appSchema: WithContext<SoftwareApplication> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: copy.title,
    description: copy.description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    inLanguage: copy.language,
  };
  return { ...copy, bibliography, schemas: [faqSchema as any, howToSchema as any, appSchema as any] };
}
