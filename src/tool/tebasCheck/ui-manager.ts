export class TebasUIManager {
  private output: HTMLElement | null;

  constructor(outputId: string) {
    this.output = document.getElementById(outputId);
  }

  log(msg: string, type: 'neutral' | 'error' | 'success' | 'info' = 'neutral') {
    if (!this.output) return;
    
    let colorClass = 'tebas-log-neutral';
    if (type === 'error') {
      colorClass = 'tebas-log-error';
    } else if (type === 'success') {
      colorClass = 'tebas-log-success';
    }
      
    const div = document.createElement('div');
    div.className = `tebas-log-line ${colorClass}`;
    
    const time = new Date().toLocaleTimeString().split(' ')[0];
    div.innerHTML = `<span class="tebas-log-time">[${time}]</span> ${msg}`;
    
    this.output.appendChild(div);
    this.output.scrollTop = this.output.scrollHeight;
  }

  clearLog() {
    if (this.output) this.output.innerHTML = '';
  }
}
