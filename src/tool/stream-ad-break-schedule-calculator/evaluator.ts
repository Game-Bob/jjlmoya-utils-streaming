import type { PlanResult } from './logic';

export type PlanState = 'ready' | 'warning' | 'empty';

export interface PlanEvaluation {
  state: PlanState;
  intensity: number;
}

export function evaluatePlan(result: PlanResult): PlanEvaluation {
  if (result.entries.length === 0) return { state: 'empty', intensity: 0 };
  if (result.invalidLines.length > 0 || result.hasBoundaryWarning) return { state: 'warning', intensity: 0.45 };
  const intensity = result.totalMinutes > 0 ? result.adMinutes / result.totalMinutes : 0;
  return { state: 'ready', intensity };
}
