export function playBeep(audioContext: AudioContext | null, frequency = 440, duration = 0.1, type: OscillatorType = 'sine') {
  if (!audioContext) {
    return null;
  }
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(frequency, audioContext.currentTime);
  gain.gain.setValueAtTime(0.1, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
  osc.connect(gain);
  gain.connect(audioContext.destination);
  osc.start();
  osc.stop(audioContext.currentTime + duration);
  return audioContext;
}

export async function runCountdownSequence(
  els: { stateCountdown: HTMLElement | null; countdownNumber: HTMLElement | null },
  audioContext: AudioContext | null,
  beepFn: typeof playBeep
) {
  if (!els.stateCountdown || !els.countdownNumber) {
    return;
  }
  els.stateCountdown.classList.remove('hidden');
  for (let i = 3; i > 0; i--) {
    els.countdownNumber.textContent = i.toString();
    els.countdownNumber.classList.remove('animate-ping-slow');
    void els.countdownNumber.offsetWidth;
    els.countdownNumber.classList.add('animate-ping-slow');
    beepFn(audioContext, 600 + i * 100, 0.1, 'square');
    await new Promise((r) => setTimeout(r, 1000));
  }
  els.stateCountdown.classList.add('hidden');
}

export function triggerConfetti(container: HTMLElement | null) {
  if (!container) {
    return;
  }
  const colors = ['#6366f1', '#a855f7', '#ec4899', '#fbbf24', '#34d399'];
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    p.className = 'sorteo-confetti-particle';
    p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)] || '';
    const angle = Math.random() * Math.PI * 2;
    const velocity = 100 + Math.random() * 300;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity;
    const rot = Math.random() * 360;
    p.style.setProperty('--tx', `${tx}px`);
    p.style.setProperty('--ty', `${ty}px`);
    p.style.setProperty('--rot', `${rot}deg`);
    container.appendChild(p);
    setTimeout(() => p.remove(), 1500);
  }
}

export function addToHistory(
  historyList: HTMLElement | null,
  names: string | string[],
  noWinnersYetText: string
) {
  if (!historyList) {
    return;
  }

  if (historyList.innerHTML.includes(noWinnersYetText)) {
    historyList.innerHTML = '';
  }

  const list = Array.isArray(names) ? names : [names];

  list.forEach((name) => {
    const badge = document.createElement('div');
    badge.className = 'sorteo-history-item';
    badge.innerHTML = `<span class="sorteo-history-dot"></span>${name}`;
    historyList.prepend(badge);
  });
}
