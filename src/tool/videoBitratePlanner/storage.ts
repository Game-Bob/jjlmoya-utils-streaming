import type { PlannerInput } from './logic';

const STORAGE_KEY = 'jjlmoya-video-bitrate-planner';

function isStoredInput(value: unknown): value is Partial<PlannerInput> {
  return typeof value === 'object' && value !== null;
}

export function loadPlannerInput(fallback: PlannerInput): PlannerInput {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed: unknown = JSON.parse(raw);
    if (!isStoredInput(parsed)) return fallback;
    return { ...fallback, ...parsed };
  } catch {
    return fallback;
  }
}

export function savePlannerInput(input: PlannerInput): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {}
}

export function clearPlannerInput(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {}
}
