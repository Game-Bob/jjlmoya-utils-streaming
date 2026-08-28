import { buildStreamingUrl } from './url-state';
import type { SavedClockSettings } from './storage';
import type { StreamSceneCountdownClockUI } from './ui';

function getElement<T extends HTMLElement>(root: HTMLElement, selector: string): T | null {
  return root.querySelector<T>(selector);
}

export function renderStreamingUrl(root: HTMLElement, settings: SavedClockSettings): void {
  const element = getElement<HTMLAnchorElement>(root, '[data-stream-url]');
  if (!element) return;
  const url = buildStreamingUrl(settings, window.location.origin, window.location.pathname);
  element.href = url;
  element.textContent = url;
}

export function bindCopyUrlButton(root: HTMLElement, settings: () => SavedClockSettings, ui: StreamSceneCountdownClockUI): void {
  const button = getElement<HTMLButtonElement>(root, '[data-copy-url]');
  if (!button) return;
  button.addEventListener('click', async () => {
    const current = settings();
    const url = buildStreamingUrl(current, window.location.origin, window.location.pathname);
    try {
      await navigator.clipboard.writeText(url);
    } catch {}
    const stateElement = getElement<HTMLElement>(root, '[data-copy-state]');
    if (stateElement) stateElement.textContent = ui.copiedUrlText;
    window.setTimeout(() => {
      if (stateElement) stateElement.textContent = '';
    }, 1800);
  });
}
