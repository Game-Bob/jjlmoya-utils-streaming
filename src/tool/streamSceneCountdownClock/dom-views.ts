import { formatCountdown, formatLocalTime, type CountdownSnapshot } from './logic';
import { evaluateStatus } from './evaluator';
import type { SceneKey, StreamSceneCountdownClockUI } from './ui';

interface RenderInput {
  root: HTMLElement;
  snapshot: CountdownSnapshot;
  scene: SceneKey;
  sceneTitle: string;
  message: string;
  ui: StreamSceneCountdownClockUI;
}

function setText(root: HTMLElement, selector: string, value: string): void {
  const element = root.querySelector<HTMLElement>(selector);
  if (element) element.textContent = value;
}

export function renderClock(input: RenderInput): void {
  const { root, snapshot, scene, ui } = input;
  const reading = evaluateStatus(snapshot.status, ui);
  const stageMessage = input.message.trim() || ui.stageCaption;
  root.dataset.status = reading.tone;
  root.style.setProperty('--n-progress', String(snapshot.elapsedFraction));
  const clock = root.querySelector<HTMLElement>('[data-clock]');
  if (clock) {
    const parts = formatCountdown(snapshot.displaySeconds).split(':');
    clock.innerHTML = parts.map((part, index) => `${index > 0 ? '<span class="ssc-clock-separator">:</span>' : ''}<span class="ssc-clock-part">${part}</span>`).join('');
  }
  setText(root, '[data-stage-message]', stageMessage);
  setText(root, '[data-status-badge]', reading.badge);
  setText(root, '[data-status-copy]', reading.text);
  setText(root, '[data-scene-name]', input.sceneTitle.trim() || getSceneLabel(scene, ui));
  setText(root, '[data-start-time]', formatLocalTime(snapshot.startAtMs));
  setText(root, '[data-end-time]', formatLocalTime(snapshot.endAtMs));
  setText(root, '[data-progress-copy]', `${Math.round(snapshot.elapsedFraction * 100)}%`);
  const progress = root.querySelector<SVGCircleElement>('[data-progress-ring]');
  if (progress) progress.style.strokeDashoffset = String(314.16 * (1 - snapshot.elapsedFraction));
  const altProgress = root.querySelector<HTMLElement>('[data-alt-progress]');
  if (altProgress) altProgress.style.transform = `scaleX(${snapshot.elapsedFraction})`;
  const badge = root.querySelector<HTMLElement>('[data-status-badge]');
  if (badge) badge.setAttribute('aria-label', `${ui.statusAria}: ${reading.badge}`);
}

export function getSceneLabel(scene: SceneKey, ui: StreamSceneCountdownClockUI): string {
  const labels: Record<SceneKey, string> = {
    brb: ui.sceneBrb,
    starting: ui.sceneStarting,
    raid: ui.sceneRaid,
    intermission: ui.sceneIntermission,
  };
  return labels[scene];
}
