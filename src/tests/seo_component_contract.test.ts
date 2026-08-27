import { describe, expect, it } from 'vitest';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const toolSeoFiles = [
  'sorteo/seo.astro',
  'tebasCheck/seo.astro',
  'videoBitratePlanner/seo.astro',
];

describe('SEO component contract', () => {
  for (const relativePath of toolSeoFiles) {
    it(`${relativePath} loads localized SEO sections from locale`, async () => {
      const source = await readFile(resolve(__dirname, '../tool', relativePath), 'utf8');

      expect(source).toMatch(/locale\?: KnownLocale/);
      expect(source).toMatch(/locale = 'es'/);
      expect(source).toMatch(/entry\.i18n\[locale\]\?\.\(\)/);
      expect(source).toMatch(/sections: content\.seo/);
    });
  }
});
