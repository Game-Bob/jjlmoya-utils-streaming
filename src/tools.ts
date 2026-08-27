export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { SORTEO_TOOL } from './tool/sorteo/index';
import { TEBAS_CHECK_TOOL } from './tool/tebasCheck/index';
import { VIDEO_BITRATE_PLANNER_TOOL } from './tool/videoBitratePlanner/index';

export const ALL_TOOLS: ToolDefinition[] = [
  SORTEO_TOOL,
  TEBAS_CHECK_TOOL,
  VIDEO_BITRATE_PLANNER_TOOL,
];
