import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { streamingCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have at least 2 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(2);
    });

    it('streamingCategory should be defined', () => {
      expect(streamingCategory).toBeDefined();
      expect(streamingCategory.i18n).toBeDefined();
    });
  });
});

