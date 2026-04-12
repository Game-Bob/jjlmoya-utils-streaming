import type { ProbeResult } from './types';

export class TebasEngine {
  private targetIps: string[];

  constructor(ips: string[]) {
    this.targetIps = ips;
  }

  async checkGoogle(): Promise<boolean> {
    try {
      await fetch('https://www.google.es/favicon.ico', {
        mode: 'no-cors',
        cache: 'no-store',
      });
      return true;
    } catch {
      return false;
    }
  }

  async getIspInfo(): Promise<{ org?: string }> {
    try {
      const res = await fetch('https://ipapi.co/json/');
      return await res.json();
    } catch {
      return {};
    }
  }

  async checkDnsPoisoning(testDomain: string = 'www.cloudflare.com'): Promise<boolean> {
    try {
      const res = await fetch(`https://dns.google/resolve?name=${testDomain}&type=A`);
      const data = (await res.json()) as { Answer?: Array<{ data: string }> };
      const realIps = data.Answer?.map((a) => a.data) || [];
      
      if (realIps.length === 0) return false;

      const [domainWorks, ipWorks] = await Promise.all([
        fetch(`https://${testDomain}/favicon.ico`, { mode: 'no-cors' })
          .then(() => true)
          .catch(() => false),
        fetch(`https://${realIps[0]}/favicon.ico`, { mode: 'no-cors' })
          .then(() => true)
          .catch(() => false),
      ]);

      return !domainWorks && ipWorks;
    } catch {
      return false;
    }
  }

  async probeIps(limit: number = 10): Promise<ProbeResult[]> {
    const subset = [...this.targetIps].sort(() => 0.5 - Math.random()).slice(0, limit);
    return Promise.all(subset.map(ip => this.probeOne(ip)));
  }

  private async probeOne(ip: string): Promise<ProbeResult> {
    const start = performance.now();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    try {
      await fetch(`https://${ip}/favicon.ico`, {
        mode: 'no-cors',
        cache: 'no-store',
        signal: controller.signal,
      });
      return { ip, status: 'ok', time: performance.now() - start };
    } catch (e: unknown) {
      const time = performance.now() - start;
      if (e instanceof Error && e.name === 'AbortError') {
        return { ip, status: 'blocked', time };
      }
      if (time > 2000) return { ip, status: 'blocked', time };

      return { ip, status: 'ok', time };
    } finally {
      clearTimeout(timeoutId);
    }
  }

  async runFullDiagnostic(): Promise<{
    internet: boolean;
    isp: string;
    poisoned: boolean;
    blocks: number;
    results: ProbeResult[];
    isBlocked: boolean;
  }> {
    const [google, ispInfo, poisoned] = await Promise.all([
      this.checkGoogle(),
      this.getIspInfo(),
      this.checkDnsPoisoning()
    ]);

    if (!google) {
      return { 
        internet: false, isp: 'Unknown', poisoned: false, blocks: 0, results: [], isBlocked: false 
      };
    }

    const results = await this.probeIps(10);
    const blocks = results.filter(r => r.status === 'blocked').length;

    return {
      internet: true,
      isp: ispInfo.org || 'Unknown',
      poisoned,
      blocks,
      results,
      isBlocked: poisoned || blocks >= 3,
    };
  }
}
