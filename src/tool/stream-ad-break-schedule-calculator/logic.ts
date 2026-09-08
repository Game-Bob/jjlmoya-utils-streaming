export interface StreamSegment {
  label: string;
  duration: number;
}

export interface PlanInput {
  startTime: string;
  plannedDuration: number;
  cadence: number;
  breakLength: number;
  segmentsText: string;
}

export interface ScheduleEntry {
  kind: 'segment' | 'break';
  label: string;
  duration: number;
  offset: number;
  startTime: string;
}

export interface PlanResult {
  entries: ScheduleEntry[];
  contentMinutes: number;
  adMinutes: number;
  totalMinutes: number;
  breakCount: number;
  endTime: string;
  invalidLines: number[];
  plannedDifference: number;
  hasBoundaryWarning: boolean;
}

function positive(value: number): number {
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function parseSegment(line: string): StreamSegment | null {
  const [label, durationText] = line.split('|').map((part) => part.trim());
  const duration = Number.parseFloat(durationText ?? '');
  if (!label || !Number.isFinite(duration) || duration <= 0) return null;
  return { label, duration };
}

function isValidClockPart(value: number, minimum: number, maximum: number): boolean {
  return Number.isInteger(value) && value >= minimum && value <= maximum;
}

export function parseSegments(raw: string): { segments: StreamSegment[]; invalidLines: number[] } {
  const segments: StreamSegment[] = [];
  const invalidLines: number[] = [];
  raw.split(/\r?\n/).forEach((line, index) => {
    if (!line.trim()) return;
    const segment = parseSegment(line);
    if (segment) segments.push(segment);
    else invalidLines.push(index + 1);
  });
  return { segments, invalidLines };
}

export function parseClock(value: string): number {
  const [hoursText, minutesText] = value.split(':');
  const hours = Number.parseInt(hoursText ?? '', 10);
  const minutes = Number.parseInt(minutesText ?? '', 10);
  if (!isValidClockPart(hours, 0, 23) || !isValidClockPart(minutes, 0, 59)) return 0;
  return hours * 60 + minutes;
}

export function formatClock(totalMinutes: number): string {
  const normalized = ((Math.round(totalMinutes) % 1440) + 1440) % 1440;
  const hours = Math.floor(normalized / 60).toString().padStart(2, '0');
  const minutes = (normalized % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

function addEntry(entries: ScheduleEntry[], segment: StreamSegment, offset: number, start: number): number {
  entries.push({ kind: 'segment', label: segment.label, duration: segment.duration, offset, startTime: formatClock(start + offset) });
  return offset + segment.duration;
}

function addBreak(entries: ScheduleEntry[], duration: number, offset: number, start: number): number {
  entries.push({ kind: 'break', label: 'Ad break', duration, offset, startTime: formatClock(start + offset) });
  return offset + duration;
}

interface PlanAccumulator {
  entries: ScheduleEntry[];
  offset: number;
  contentMinutes: number;
  adMinutes: number;
  breakCount: number;
  nextBreakAt: number;
}

interface SegmentPlanOptions {
  index: number;
  count: number;
  start: number;
  cadence: number;
  breakLength: number;
}

function appendSegment(accumulator: PlanAccumulator, segment: StreamSegment, options: SegmentPlanOptions): void {
  accumulator.offset = addEntry(accumulator.entries, segment, accumulator.offset, options.start);
  accumulator.contentMinutes += segment.duration;
  const hasNextSegment = options.index < options.count - 1;
  const isBreakDue = hasNextSegment && options.breakLength > 0 && options.cadence > 0 && accumulator.contentMinutes >= accumulator.nextBreakAt;
  if (!isBreakDue) return;
  accumulator.offset = addBreak(accumulator.entries, options.breakLength, accumulator.offset, options.start);
  accumulator.adMinutes += options.breakLength;
  accumulator.breakCount += 1;
  accumulator.nextBreakAt = accumulator.contentMinutes + options.cadence;
}

export function createPlan(input: PlanInput): PlanResult {
  const { segments, invalidLines } = parseSegments(input.segmentsText);
  const cadence = positive(input.cadence);
  const breakLength = positive(input.breakLength);
  const plannedDuration = positive(input.plannedDuration);
  const accumulator: PlanAccumulator = { entries: [], offset: 0, contentMinutes: 0, adMinutes: 0, breakCount: 0, nextBreakAt: cadence };
  const options = { count: segments.length, start: parseClock(input.startTime), cadence, breakLength };
  segments.forEach((segment, index) => appendSegment(accumulator, segment, { ...options, index }));

  return {
    entries: accumulator.entries,
    contentMinutes: accumulator.contentMinutes,
    adMinutes: accumulator.adMinutes,
    totalMinutes: accumulator.offset,
    breakCount: accumulator.breakCount,
    endTime: formatClock(parseClock(input.startTime) + accumulator.offset),
    invalidLines,
    plannedDifference: accumulator.contentMinutes - plannedDuration,
    hasBoundaryWarning: segments.length > 0 && accumulator.breakCount === 0 && accumulator.contentMinutes >= cadence && segments.length < 2,
  };
}

export function formatMinutes(value: number): string {
  const rounded = Math.round(value * 10) / 10;
  if (Number.isInteger(rounded)) return `${rounded}`;
  return rounded.toFixed(1);
}

export function formatPlanText(result: PlanResult): string {
  return result.entries.map((entry) => `${entry.startTime}  ${entry.label}  (${formatMinutes(entry.duration)} min)`).join('\n');
}
