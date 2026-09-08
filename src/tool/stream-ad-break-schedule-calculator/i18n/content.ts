import type { FAQItem, HowToStep, SEOSection } from '../../../types';
import type { StreamAdBreakScheduleLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

interface LocalizedContentInput {
  slug: string;
  title: string;
  description: string;
  ui: StreamAdBreakScheduleLocaleContent['ui'];
  seo: SEOSection[];
  faq: FAQItem[];
  howTo: HowToStep[];
}

export function makeContent(input: LocalizedContentInput): StreamAdBreakScheduleLocaleContent {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: input.faq.map((item) => ({ '@type': 'Question' as const, name: item.question, acceptedAnswer: { '@type': 'Answer' as const, text: item.answer } })),
  } as const;
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: input.title,
    description: input.description,
    step: input.howTo.map((item) => ({ '@type': 'HowToStep' as const, name: item.name, text: item.text })),
  } as const;
  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: input.title,
    description: input.description,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  } as const;
  return { ...input, bibliography, schemas: [appSchema, faqSchema, howToSchema] };
}
