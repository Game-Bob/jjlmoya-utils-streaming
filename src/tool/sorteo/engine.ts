export class GiveawayEngine {
  private rawParticipants: string[] = [];
  private excludeList: string[] = [];
  private allowDuplicates: boolean = false;
  private weightRegex = /^(.+?)(?:\s+[\*x]\s*(\d+)|\s*\(\s*[x\*]?\s*(\d+)\s*\))$/i;

  private processedParticipants: string[] = [];

  constructor() {
    this.process();
  }

  public setParticipantsFromText(text: string): void {
    this.rawParticipants = text
      .split(/\n/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
    this.process();
  }

  public setBlacklistFromText(text: string): void {
    this.excludeList = text
      .split(/[\n,]/)
      .map((s) => s.trim().toLowerCase())
      .filter((s) => s.length > 0);
    this.process();
  }

  public setAllowDuplicates(allow: boolean): void {
    this.allowDuplicates = allow;
    this.process();
  }

  private parseLine(line: string): { name: string; weight: number } {
    let name = line;
    let weight = 1;
    const match = line.match(this.weightRegex);
    if (match && match[1]) {
      name = match[1].trim();
      const wStr = match[2] || match[3] || '1';
      weight = parseInt(wStr, 10);
      if (isNaN(weight) || weight < 1) {
        weight = 1;
      }
    }
    return { name, weight };
  }

  private process(): void {
    this.processedParticipants = [];

    if (this.allowDuplicates) {
      this.processDuplicates();
    } else {
      this.processUnique();
    }
  }

  private processDuplicates(): void {
    for (const line of this.rawParticipants) {
      const { name, weight } = this.parseLine(line);
      if (this.excludeList.includes(name.toLowerCase())) {
        continue;
      }

      for (let i = 0; i < weight; i++) {
        this.processedParticipants.push(name);
      }
    }
  }

  private processUnique(): void {
    const tempMap = new Map<string, number>();

    for (const line of this.rawParticipants) {
      const { name, weight } = this.parseLine(line);
      if (this.excludeList.includes(name.toLowerCase())) {
        continue;
      }

      const currentW = tempMap.get(name) || 0;
      tempMap.set(name, currentW + weight);
    }

    tempMap.forEach((w, n) => {
      for (let i = 0; i < w; i++) {
        this.processedParticipants.push(n);
      }
    });
  }

  public getParticipants(): string[] {
    return this.processedParticipants;
  }

  public getCount(): number {
    return this.processedParticipants.length;
  }

  public pickWinners(count: number = 1): string[] {
    if (this.processedParticipants.length === 0) {
      return [];
    }

    const availableIndices = Array.from(
      { length: this.processedParticipants.length },
      (_, i) => i
    );
    const winners: string[] = [];
    const numToPick = Math.min(count, availableIndices.length);

    for (let i = 0; i < numToPick; i++) {
      const randomIndex = this.getSecureRandomIndex(availableIndices.length);
      const winningIndex = availableIndices[randomIndex];
      if (winningIndex !== undefined) {
        const winner = this.processedParticipants[winningIndex];
        if (winner) winners.push(winner);
        availableIndices.splice(randomIndex, 1);
      }
    }

    return winners;
  }

  private getSecureRandomIndex(limit: number): number {
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      const array = new Uint32Array(1);
      crypto.getRandomValues(array);
      const val = array[0];
      if (val !== undefined) return val % limit;
    }
    return Math.floor(Math.random() * limit);
  }

  public removeParticipant(name: string): void {
    this.rawParticipants = this.rawParticipants.filter((line) => {
      const { name: extractedName } = this.parseLine(line);
      return extractedName.toLowerCase() !== name.toLowerCase();
    });

    this.process();
  }
}
