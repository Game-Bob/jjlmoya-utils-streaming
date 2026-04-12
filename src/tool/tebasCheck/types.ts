export interface TebasCheckUI {
  [key: string]: string | string[];
  scanning: string;
  seekingBlocks: string;
  blockedTitle: string;
  blockedDiagnosis: string;
  blockedReason: string;
  noInternetTitle: string;
  noInternetReason: string;
  successTitle: string;
  successReason: string;
  retryBtn: string;
  authorNoteTitle: string;
  authorNoteText: string;
  consoleHeader: string;
  logStarted: string;
  logDetecting: string;
  logIspFound: string;
  logConnError: string;
  logDnsCross: string;
  logDnsGoogle: string;
  logDnsPoisoned: string;
  logDnsNoDoh: string;
  logLaunchingProbes: string;
  logIpBlocked: string;
  logIpActive: string;
  logAlertInterference: string;
  logNoInternet: string;
  logClean: string;
  logDiagError: string;
  statusNegotiating: string;
  statusDodging: string;
  statusCheckingPirate: string;
  statusPinging: string;
  statusConsulting: string;
  statusCheckingFee: string;
  statusCalculating: string;
  statusDeciphering: string;
}

export interface ProbeResult {
  ip: string;
  status: 'ok' | 'blocked';
  time: number;
}
