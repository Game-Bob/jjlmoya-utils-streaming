export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { SORTEO_TOOL } from './tool/sorteo/index';
import { TEBAS_CHECK_TOOL } from './tool/tebasCheck/index';

export const ALL_TOOLS: ToolDefinition[] = [
  SORTEO_TOOL,
  TEBAS_CHECK_TOOL,
];

