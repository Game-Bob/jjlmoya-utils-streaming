import { analyzeAudioFile, type AudioAnalysis } from './audio-analysis';
import { renderProcessedWav } from './audio-processing';
import { calculateLoudness, clampNumber, PEAK_CEILING_DBTP } from './logic';
import { loadSettings, saveSettings, type SavedLoudnessSettings } from './storage';
import { renderLoudness } from './dom-views';
import type { ContentType, StreamAudioLoudnessUI, TargetProfile } from './ui';

const targets: Record<Exclude<TargetProfile, 'custom'>, number> = { web: -14, broadcast: -23, game: -23 };
const platformIds = ['youtube', 'spotify', 'twitch', 'tiktok'];

interface RuntimeState {
  buffer: AudioBuffer | null;
  analysis: AudioAnalysis | null;
  downloadUrl: string | null;
}

interface ToolContext {
  root: HTMLElement;
  form: HTMLFormElement;
  ui: StreamAudioLoudnessUI;
  runtime: RuntimeState;
}

export function mountLoudnessTool(): void {
  const root = document.querySelector<HTMLElement>('[data-loudness-tool]');
  const uiNode = document.querySelector<HTMLScriptElement>('[data-loudness-ui]');
  if (!root || !uiNode?.textContent) return;
  const ui = parseUi(uiNode.textContent);
  if (!ui) return;
  const form = root.querySelector<HTMLFormElement>('[data-loudness-form]');
  if (!form) return;
  const context: ToolContext = { root, form, ui, runtime: { buffer: null, analysis: null, downloadUrl: null } };
  restoreSettings(root, form);
  bindFormEvents(context);
  updateView(context);
}

function bindFormEvents(context: ToolContext): void {
  context.form.addEventListener('input', () => updateView(context));
  context.form.addEventListener('change', () => updateView(context));
  context.root.addEventListener('input', (event) => updatePlatformPreview(context, event));
  context.form.addEventListener('reset', () => window.setTimeout(() => resetSettings(context), 0));
  bindChoiceEvents(context);
  bindFileEvents(context);
  bindOutputEvents(context);
}

function bindChoiceEvents(context: ToolContext): void {
  context.form.querySelectorAll<HTMLButtonElement>('[data-target-profile]').forEach((button) => button.addEventListener('click', () => selectTarget(context, button.dataset.targetProfile as TargetProfile)));
  context.form.querySelectorAll<HTMLButtonElement>('[data-content-type]').forEach((button) => button.addEventListener('click', () => selectContent(context, button.dataset.contentType as ContentType)));
}

function bindFileEvents(context: ToolContext): void {
  context.form.querySelector<HTMLInputElement>('[data-audio-file]')?.addEventListener('change', (event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) void handleFile(context, file);
  });
  const dropZone = context.form.querySelector<HTMLElement>('[data-drop-zone]');
  dropZone?.addEventListener('dragover', (event) => event.preventDefault());
  dropZone?.addEventListener('drop', (event) => {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];
    if (file) void handleFile(context, file);
  });
}

function bindOutputEvents(context: ToolContext): void {
  context.form.querySelector<HTMLButtonElement>('[data-use-analysis]')?.addEventListener('click', () => useAnalysis(context));
  context.root.querySelector<HTMLButtonElement>('[data-process-audio]')?.addEventListener('click', () => void processAudio(context));
}

function parseUi(text: string): StreamAudioLoudnessUI | null {
  try {
    return JSON.parse(text) as StreamAudioLoudnessUI;
  } catch {
    return null;
  }
}

function updateView(context: ToolContext): void {
  const { root, form, ui, runtime } = context;
  const values = readSettings(root, form);
  const targetLufs = getTarget(values);
  const result = calculateLoudness({ measuredLufs: values.measuredLufs, truePeakDbtp: values.truePeakDbtp, targetLufs, contentType: values.contentType });
  root.dataset.measuredLufs = String(values.measuredLufs);
  renderLoudness(root, result, { labels: ui, targetLufs, ui, analysis: runtime.analysis, platformTargets: readPlatformTargets(root) });
  updateGuidance(root, ui, values);
  saveSettings(values);
  syncProcessButton(root, runtime);
}

function readSettings(root: HTMLElement, form: HTMLFormElement): SavedLoudnessSettings {
  const input = (name: string) => form.elements.namedItem(name) as HTMLInputElement;
  const targetProfile = (root.dataset.targetProfile || 'web') as TargetProfile;
  const contentType = (root.dataset.contentType || 'gameplay') as ContentType;
  return {
    measuredLufs: clampNumber(Number(input('measuredLufs').value), -60, 0, -18),
    truePeakDbtp: clampNumber(Number(input('truePeakDbtp').value), -60, 6, -6),
    targetProfile,
    customTargetLufs: clampNumber(Number(input('customTargetLufs').value), -60, 0, -14),
    contentType,
  };
}

function readPlatformTargets(root: HTMLElement): Record<string, number> {
  return Object.fromEntries(platformIds.map((id) => {
    const input = root.querySelector<HTMLInputElement>(`[data-platform-target="${id}"]`);
    return [id, clampNumber(Number(input?.value), -60, 0, -14)];
  }));
}

function updatePlatformPreview(context: ToolContext, event: Event): void {
  const target = event.target as HTMLElement;
  if (target.matches('[data-platform-target]')) updateView(context);
}

function getTarget(values: SavedLoudnessSettings): number {
  return values.targetProfile === 'custom' ? values.customTargetLufs : targets[values.targetProfile];
}

function selectTarget(context: ToolContext, profile: TargetProfile): void {
  context.root.dataset.targetProfile = profile;
  syncButtons(context.form, context.root);
  updateView(context);
}

function selectContent(context: ToolContext, contentType: ContentType): void {
  context.root.dataset.contentType = contentType;
  syncButtons(context.form, context.root);
  updateView(context);
}

function resetSettings(context: ToolContext): void {
  context.root.dataset.targetProfile = 'web';
  context.root.dataset.contentType = 'gameplay';
  syncButtons(context.form, context.root);
  updateView(context);
}

function updateGuidance(root: HTMLElement, ui: StreamAudioLoudnessUI, values: SavedLoudnessSettings): void {
  const key = `${values.targetProfile}Guidance` as keyof StreamAudioLoudnessUI;
  const contentKey = `${values.contentType}Guidance` as keyof StreamAudioLoudnessUI;
  const guidance = root.querySelector<HTMLElement>('[data-guidance]');
  if (guidance) guidance.textContent = `${ui[key]} ${ui[contentKey]}`;
}

async function handleFile(context: ToolContext, file: File): Promise<void> {
  const { root, ui, runtime } = context;
  setText(root, '[data-file-status]', ui.fileReadingText.replace('{name}', file.name));
  try {
    const result = await analyzeAudioFile(file);
    runtime.buffer = result.buffer;
    runtime.analysis = result.analysis;
    setText(root, '[data-file-status]', ui.fileReadyText.replace('{name}', file.name));
    setText(root, '[data-analysis-summary]', `${ui.analysisSummaryLabel}: ${result.analysis.integratedLufs.toFixed(1)} LUFS · ${result.analysis.truePeakDbtp.toFixed(1)} dBTP · ${result.analysis.lraDb.toFixed(1)} dB LRA`);
    toggleHidden(root, '[data-analysis-result]', false);
    updateView(context);
  } catch {
    runtime.buffer = null;
    runtime.analysis = null;
    setText(root, '[data-file-status]', ui.fileErrorText);
    toggleHidden(root, '[data-analysis-result]', true);
    updateView(context);
  }
}

function useAnalysis(context: ToolContext): void {
  const { form, runtime } = context;
  if (!runtime.analysis) return;
  const measured = form.elements.namedItem('measuredLufs') as HTMLInputElement;
  const peak = form.elements.namedItem('truePeakDbtp') as HTMLInputElement;
  measured.value = runtime.analysis.integratedLufs.toFixed(1);
  peak.value = runtime.analysis.truePeakDbtp.toFixed(1);
  updateView(context);
}

async function processAudio(context: ToolContext): Promise<void> {
  const { root, form, ui, runtime } = context;
  if (!runtime.buffer) return;
  const values = readSettings(root, form);
  const result = calculateLoudness({ measuredLufs: values.measuredLufs, truePeakDbtp: values.truePeakDbtp, targetLufs: getTarget(values), contentType: values.contentType });
  const button = root.querySelector<HTMLButtonElement>('[data-process-audio]');
  if (button) button.disabled = true;
  setText(root, '[data-output-status]', ui.outputProcessing);
  try {
    const wav = await renderProcessedWav(runtime.buffer, result.correctionDb, PEAK_CEILING_DBTP);
    if (runtime.downloadUrl) URL.revokeObjectURL(runtime.downloadUrl);
    runtime.downloadUrl = URL.createObjectURL(wav);
    const link = root.querySelector<HTMLAnchorElement>('[data-download-audio]');
    if (link) {
      link.href = runtime.downloadUrl;
      link.download = 'stream-loudness-normalized.wav';
      link.hidden = false;
    }
    setText(root, '[data-output-status]', ui.outputReady);
  } catch {
    setText(root, '[data-output-status]', ui.outputError);
  } finally {
    syncProcessButton(root, runtime);
  }
}

function syncProcessButton(root: HTMLElement, runtime: RuntimeState): void {
  const button = root.querySelector<HTMLButtonElement>('[data-process-audio]');
  if (button) button.disabled = !runtime.buffer;
}

function restoreSettings(root: HTMLElement, form: HTMLFormElement): void {
  const saved = loadSettings();
  const input = (name: string) => form.elements.namedItem(name) as HTMLInputElement;
  if (typeof saved.measuredLufs === 'number') input('measuredLufs').value = String(saved.measuredLufs);
  if (typeof saved.truePeakDbtp === 'number') input('truePeakDbtp').value = String(saved.truePeakDbtp);
  if (typeof saved.customTargetLufs === 'number') input('customTargetLufs').value = String(saved.customTargetLufs);
  if (saved.targetProfile) root.dataset.targetProfile = saved.targetProfile;
  if (saved.contentType) root.dataset.contentType = saved.contentType;
  syncButtons(form, root);
}

function syncButtons(form: HTMLFormElement, root: HTMLElement): void {
  form.querySelectorAll('[data-target-profile]').forEach((button) => button.classList.toggle('active', button.getAttribute('data-target-profile') === root.dataset.targetProfile));
  form.querySelectorAll('[data-content-type]').forEach((button) => button.classList.toggle('active', button.getAttribute('data-content-type') === root.dataset.contentType));
  const custom = form.querySelector<HTMLElement>('[data-custom-target]');
  if (custom) custom.hidden = root.dataset.targetProfile !== 'custom';
}

function setText(root: HTMLElement, selector: string, value: string): void {
  const node = root.querySelector<HTMLElement>(selector);
  if (node) node.textContent = value;
}

function toggleHidden(root: HTMLElement, selector: string, hidden: boolean): void {
  const node = root.querySelector<HTMLElement>(selector);
  if (node) node.hidden = hidden;
}
