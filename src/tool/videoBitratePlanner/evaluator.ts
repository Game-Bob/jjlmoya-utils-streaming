import type { PlannerResult, QualityResult } from './logic';

export interface EvaluatorLabels {
  quality: Record<QualityResult['tone'], string>;
  capacity: Record<PlannerResult['capacityTone'], string>;
}

export function getQualityLabel(result: PlannerResult, labels: EvaluatorLabels): string {
  return labels.quality[result.quality.tone];
}

export function getCapacityLabel(result: PlannerResult, labels: EvaluatorLabels): string {
  return labels.capacity[result.capacityTone];
}

export function getNetworkNote(result: PlannerResult): string {
  const headroom = Math.max(1, result.input.bitrateMbps * 1.2);
  return `Plan at least ${headroom.toFixed(1)} Mbps of upload headroom for a ${result.input.bitrateMbps.toFixed(1)} Mbps stream.`;
}
