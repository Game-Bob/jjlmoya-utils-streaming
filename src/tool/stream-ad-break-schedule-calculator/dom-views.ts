import type { PlanResult, ScheduleEntry } from './logic';
import { formatMinutes } from './logic';

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character] ?? character));
}

function entryMarkup(entry: ScheduleEntry, totalMinutes: number): string {
  const width = Math.max(9, Math.round((entry.duration / Math.max(totalMinutes, 1)) * 100));
  const kind = entry.kind === 'break' ? 'schedule-entry-break' : 'schedule-entry-content';
  const label = entry.kind === 'break' ? 'Ad break' : escapeHtml(entry.label);
  return `<div class="schedule-entry ${kind}" style="--entry-width:${width}%" title="${escapeHtml(entry.startTime)} ${label}"><span class="schedule-entry-time">${escapeHtml(entry.startTime)}</span><span class="schedule-entry-label">${label}</span><span class="schedule-entry-duration">${formatMinutes(entry.duration)} min</span></div>`;
}

export function renderSchedule(result: PlanResult): string {
  if (result.entries.length === 0) return '';
  return result.entries.map((entry) => entryMarkup(entry, result.totalMinutes)).join('');
}
