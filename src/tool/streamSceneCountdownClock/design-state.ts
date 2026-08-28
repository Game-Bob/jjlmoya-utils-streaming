import type { SavedClockSettings } from './storage';
import type { DesignKey } from './ui';

export const designPalettes: Record<DesignKey, Pick<SavedClockSettings, 'accentColor' | 'glowColor'>> = {
  aurora: { accentColor: '#a78bfa', glowColor: '#8ff5d7' },
  type: { accentColor: '#ffb84d', glowColor: '#ff5f91' },
  pulse: { accentColor: '#ff6b9d', glowColor: '#9d7bff' },
  glitch: { accentColor: '#d8ff3e', glowColor: '#5ee7ff' },
  sunset: { accentColor: '#ff6b4a', glowColor: '#ffc36b' },
};

export function renderDesignChoices(root: HTMLElement, design: DesignKey): void {
  root.querySelectorAll<HTMLButtonElement>('[data-preview-design]').forEach((button) => {
    const active = button.dataset.previewDesign === design;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
  });
}

export function renderDesignSelect(root: HTMLElement, design: DesignKey): void {
  const trigger = root.querySelector<HTMLButtonElement>('[data-design-trigger]');
  const selected = root.querySelector<HTMLButtonElement>(`[data-design-option="${design}"]`);
  if (trigger && selected) trigger.textContent = selected.textContent?.trim() ?? '';
  root.querySelectorAll<HTMLButtonElement>('[data-design-option]').forEach((option) => {
    const active = option.dataset.designOption === design;
    option.classList.toggle('is-active', active);
    option.setAttribute('aria-selected', String(active));
  });
}

export function bindDesignSelect(root: HTMLElement, onSelect: (design: DesignKey) => void): void {
  const trigger = root.querySelector<HTMLButtonElement>('[data-design-trigger]');
  const options = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-design-option]'));
  const menu = root.querySelector<HTMLElement>('[data-design-options]');
  if (!trigger || !menu) return;
  const close = () => {
    menu.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
  };
  const open = () => {
    menu.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
  };
  trigger.addEventListener('click', () => {
    if (menu.hidden) open();
    else close();
  });
  options.forEach((option) => option.addEventListener('click', () => {
    onSelect(option.dataset.designOption as DesignKey);
    close();
  }));
  trigger.addEventListener('keydown', (event) => handleSelectKey(event, options, open, close));
  document.addEventListener('click', (event) => {
    if (!root.contains(event.target as Node)) close();
  });
}

function handleSelectKey(event: KeyboardEvent, options: HTMLButtonElement[], open: () => void, close: () => void): void {
  if (event.key === 'Escape') {
    close();
    return;
  }
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    open();
    return;
  }
  if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
  event.preventDefault();
  open();
  const selectedIndex = options.findIndex((option) => option.getAttribute('aria-selected') === 'true');
  const direction = event.key === 'ArrowDown' ? 1 : -1;
  const nextIndex = (selectedIndex + direction + options.length) % options.length;
  options[nextIndex]?.focus();
}

export function bindPreviewDesignButtons(root: HTMLElement, onSelect: (design: DesignKey) => void): void {
  root.querySelectorAll<HTMLButtonElement>('[data-preview-design]').forEach((button) => {
    button.addEventListener('click', () => onSelect(button.dataset.previewDesign as DesignKey));
  });
}
