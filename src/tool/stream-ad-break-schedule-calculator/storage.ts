import type { PlanInput } from './logic';

const STORAGE_KEY = 'stream-ad-break-schedule-calculator';

export function loadSavedPlan(): Partial<PlanInput> | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as Partial<PlanInput> : null;
  } catch {
    return null;
  }
}

export function savePlan(input: PlanInput): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {}
}

export function clearSavedPlan(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {}
}
