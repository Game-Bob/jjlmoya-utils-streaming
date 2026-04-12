import { sorteo } from '../tool/sorteo/index';
import { tebasCheck } from '../tool/tebasCheck/index';

export const streamingCategory: StreamingCategoryEntry = {
  icon: 'mdi:broadcast',
  tools: [sorteo, tebasCheck],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};
