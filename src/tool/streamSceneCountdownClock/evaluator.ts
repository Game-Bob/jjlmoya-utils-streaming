import type { ClockStatus } from './logic';

export interface StatusLabels {
  readyBadge: string;
  waitingBadge: string;
  liveBadge: string;
  endedBadge: string;
  readyText: string;
  waitingText: string;
  liveText: string;
  endedText: string;
}

export interface StatusReading {
  badge: string;
  text: string;
  tone: ClockStatus;
}

export function evaluateStatus(status: ClockStatus, labels: StatusLabels): StatusReading {
  const readings: Record<ClockStatus, StatusReading> = {
    ready: { badge: labels.readyBadge, text: labels.readyText, tone: 'ready' },
    waiting: { badge: labels.waitingBadge, text: labels.waitingText, tone: 'waiting' },
    live: { badge: labels.liveBadge, text: labels.liveText, tone: 'live' },
    ended: { badge: labels.endedBadge, text: labels.endedText, tone: 'ended' },
  };
  return readings[status];
}
