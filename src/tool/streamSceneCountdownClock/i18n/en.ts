import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StreamSceneCountdownClockUI } from '../ui';

const slug = 'stream-scene-countdown-clock';
const title = 'Stream Scene Countdown Clock';
const description = 'Build a streamer-first countdown slate for starting soon, BRB, raid, and intermission scenes.';

const faq = [
  {
    question: 'Does this countdown connect to OBS or Twitch?',
    answer: 'No. It is a standalone timer and does not control OBS, Twitch, chat, or a stream server. Use Focus slate to make the countdown fill the screen, then capture that view as a browser source.',
  },
  {
    question: 'How do I use the countdown directly in OBS?',
    answer: 'Add the tool URL as an OBS Browser Source with the streaming flag and inputs, for example ?STREAMING&scene=starting&duration=300&design=aurora&title=Starting%20soon&accent=%23a78bfa&glow=%238ff5d7&message=Back%20soon. The controls and page chrome disappear, and the countdown fills the browser source viewport.',
  },
  {
    question: 'What happens when I schedule a start time?',
    answer: 'The clock enters a waiting state until the selected local time, then counts down the scene duration. A time that has already passed is treated as the next occurrence on the following day.',
  },
  {
    question: 'Can I use a custom message?',
    answer: 'Yes. As the streamer, write the short cue you want viewers to see, such as a return time, a next step, or a raid message.',
  },
  {
    question: 'What do the scene presets change?',
    answer: 'They label the broadcast moment so the slate is easier to recognize at a glance. The preset does not change the timer math, duration, or connection to a streaming platform.',
  },
  {
    question: 'Is the end time exact?',
    answer: 'It is calculated from the local browser clock and the duration you enter. Browser sleep, a paused tab, or a clock change can affect when the display visibly refreshes, so it is a planning cue rather than a broadcast synchronization guarantee.',
  },
];

const howTo = [
  {
    name: 'Choose the scene moment',
    text: 'Select Starting soon, BRB, Raid, or Intermission so the slate names the moment your viewers are seeing.',
  },
  {
    name: 'Write your streamer cue',
    text: 'Enter the short message you want viewers to read while you prepare the next scene, such as when you will return or what happens next.',
  },
  {
    name: 'Set the duration or start time',
    text: 'Pick a common duration or enter your own. Start immediately for a live cue, or schedule a local clock time for a planned scene.',
  },
  {
    name: 'Read the status',
    text: 'Use the large clock and status badge to decide when to switch your broadcast scene.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

const ui: StreamSceneCountdownClockUI = {
  sceneLabel: 'Which scene are you setting up?',
  sceneBrb: 'BRB',
  sceneStarting: 'Starting soon',
  sceneRaid: 'Raid',
  sceneIntermission: 'Intermission',
  sceneTitleLabel: 'What should appear above the timer?',
  sceneTitlePlaceholder: 'Starting soon',
  designLabel: 'What should your scene feel like?',
  designAurora: 'Aurora haze',
  designType: 'Kinetic type',
  designPulse: 'Pulse bloom',
  designGlitch: 'Glitch signal',
  designSunset: 'Solar flare',
  accentColorLabel: 'Accent color',
  glowColorLabel: 'Glow color',
  messageLabel: 'What should your viewers know?',
  messagePlaceholder: 'Back in 5 minutes',
  durationLabel: 'How long do you need?',
  duration60: '1 min',
  duration300: '5 min',
  duration600: '10 min',
  durationCustom: 'Custom',
  secondsLabel: 'seconds',
  startLabel: 'When should this cue start?',
  startNow: 'Start now',
  scheduleTime: 'Schedule a time',
  timeLabel: 'What local time should it start?',
  startAction: 'Put my cue on air',
  focusAction: 'Show my slate',
  exitFocusAction: 'Exit slate view',
  resetAction: 'Reset my cue',
  flowText: 'You are the streamer: choose what is happening, set the time you need, then put your cue on air.',
  obsTitle: 'Put this scene in OBS',
  obsText: 'Copy the link, add an OBS Browser Source, paste it into the URL field, and use your scene resolution. STREAMING opens the clean full-screen slate automatically.',
  obsStepCopy: 'Copy this link',
  obsStepAdd: 'Add a Browser Source in OBS',
  obsStepPaste: 'Paste it and match your canvas size',
  copyUrlAction: 'Copy OBS link',
  copiedUrlText: 'OBS link copied',
  streamUrlAria: 'Generated OBS streaming URL',
  previewTitle: 'Choose your scene look',
  previewHint: 'Click a preview to use it',
  previewAria: 'Scene design previews',
  stageEyebrow: 'Broadcast slate',
  stageCaption: 'Your next scene is ready',
  readyBadge: 'Ready',
  waitingBadge: 'Waiting',
  liveBadge: 'Live cue',
  endedBadge: 'Ended',
  readyText: 'Preview the slate, then start the cue when your scene is ready.',
  waitingText: 'The slate will switch to its live countdown at the scheduled local time.',
  liveText: 'Keep this slate visible until the scene change is ready.',
  endedText: 'The planned cue is over. Reset it or set a new scene.',
  remainingLabel: 'Time on slate',
  startTimeLabel: 'Starts',
  endTimeLabel: 'Ends',
  progressLabel: 'Scene progress',
  assumptionTitle: 'Timing note',
  assumptionText: 'Scheduled times use your device clock. The timer is a visual cue and does not synchronize OBS, Twitch, chat, or an encoder.',
  warningTitle: 'Use it as a scene cue',
  warningText: 'A sleeping browser tab, a changed system clock, or a delayed broadcast can make the visible time differ from the actual stream. Check the live scene before switching.',
  invalidTime: 'Enter a local time in the format HH:MM.',
  clockAria: 'Countdown time remaining',
  statusAria: 'Countdown status',
};

export const content: ToolLocaleContent<StreamSceneCountdownClockUI> = {
  slug,
  title,
  description,
  ui,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: 'Keep a stream scene cue readable at a glance',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A stream countdown clock gives your starting soon, BRB, raid, or intermission scene a clear return point. Tell viewers what you are doing, set the time you need, and use the large timer while you prepare the broadcast.',
    },
    {
      type: 'title',
      text: 'What the scene clock calculates',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Immediate cue:</strong> starts from the moment you put the clock on air and counts down the selected duration.',
        '<strong>Scheduled cue:</strong> waits for the local time you enter, then begins the scene duration.',
        '<strong>Scene status:</strong> separates ready, waiting, live, and ended so the display communicates what action is next.',
      ],
    },
    {
      type: 'title',
      text: 'How to choose a useful scene duration',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Use a short duration when you are changing sources or returning from a quick interruption. Choose a longer duration when you need time to prepare a guest, a game, or a technical reset. Your cue should add information that the timer alone cannot provide.',
    },
    {
      type: 'tip',
      title: 'Make the return cue specific',
      html: 'Instead of a generic promise, write the next action: "Back at 8:30 with the final match" or "Raid setup in progress". Your cue then gives viewers the wait and the reason for it.',
    },
    {
      type: 'title',
      text: 'Why the clock is intentionally offline',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The clock does not need access to your channel or broadcast software. Keeping the scene text and timing local makes it useful as a planning slate and avoids sending private production notes to a third party. If you use a browser source, verify the source visibility and scene transition in your broadcast software before going live.',
    },
    {
      type: 'title',
      text: 'Send a finished scene to OBS',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Your scene is ready when the preview looks right. Click <strong>Copy OBS link</strong>, add a Browser Source to the scene you use for your stream, paste the link, and match your canvas resolution. The <code>?STREAMING</code> flag opens a clean, self-starting slate with the controls removed.',
    },
    {
      type: 'title',
      text: 'Make the slate look like your stream',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Choose a visual direction from five genuinely different layouts: Aurora haze keeps the atmospheric ring, Kinetic type builds the countdown from oversized numbers, Pulse bloom uses expanding waves, Glitch signal brings sharp broadcast energy, and Solar flare creates a warm horizon. Pick a preview before you open the output, then tune the accent and glow colors to your channel.',
    },
    {
      type: 'list',
      items: [
        '<strong>Scene:</strong> labels the moment - starting soon, BRB, raid, or intermission.',
        '<strong>Title:</strong> replaces the default scene line with your own headline, such as "FINAL BOSS FIGHT".',
        '<strong>Message:</strong> adds the supporting cue your viewers need to read.',
        '<strong>Duration and start time:</strong> control when the scene begins and how long it stays live.',
      ],
    },
    {
      type: 'paragraph',
      html: 'If you build the URL yourself, keep it short with <code>?STREAMING&amp;scene=raid&amp;title=Raid%20starts%20soon&amp;design=pulse</code>. The generator includes your duration, message, and custom colors automatically, so you can paste one complete link into OBS.',
    },
    {
      type: 'title',
      text: 'Read the end time as a planning cue',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The end time is derived from your device clock and the duration you chose. It is not a guarantee that the stream reaches viewers at the same instant. Keep a small buffer when the scene change depends on another person, a guest connection, or a broadcast transition.',
    },
  ],
};
