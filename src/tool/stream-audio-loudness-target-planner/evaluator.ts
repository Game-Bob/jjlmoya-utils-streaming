import type { LoudnessResult, LoudnessState } from './logic';

export interface EvaluatorLabels {
  stateReady: string;
  stateBoost: string;
  stateTrim: string;
  statePeakRisk: string;
  stateReadyText: string;
  stateBoostText: string;
  stateTrimText: string;
  statePeakRiskText: string;
}

export interface LoudnessReading {
  badge: string;
  text: string;
  tone: LoudnessState;
}

export function evaluateLoudness(result: LoudnessResult, labels: EvaluatorLabels): LoudnessReading {
  const readings: Record<LoudnessState, LoudnessReading> = {
    ready: { badge: labels.stateReady, text: labels.stateReadyText, tone: 'ready' },
    boost: { badge: labels.stateBoost, text: labels.stateBoostText, tone: 'boost' },
    trim: { badge: labels.stateTrim, text: labels.stateTrimText, tone: 'trim' },
    'peak-risk': { badge: labels.statePeakRisk, text: labels.statePeakRiskText, tone: 'peak-risk' },
  };
  return readings[result.state];
}
