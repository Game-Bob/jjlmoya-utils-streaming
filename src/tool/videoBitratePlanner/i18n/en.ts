import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VideoBitratePlannerUI } from '../ui';

const slug = 'video-bitrate-storage-planner';
const title = 'Video Bitrate and Storage Planner';
const description = 'Estimate video storage, frame timing, and practical bitrate tiers for streaming or recording scenarios.';

const faq = [
  {
    question: 'Does this planner upload or inspect my video?',
    answer: 'No. It only uses the values you enter in the browser. It does not upload files, inspect a camera, or query a streaming service.',
  },
  {
    question: 'How is storage calculated?',
    answer: 'Storage is estimated from bitrate multiplied by duration and divided by eight to convert bits to bytes. The result uses decimal gigabytes, and the copies field multiplies the per-copy estimate.',
  },
  {
    question: 'What does the quality estimate mean?',
    answer: 'It is a rule-of-thumb signal based on pixels, frames per second, bitrate, and a broad codec efficiency factor. It is not a promise of visual quality because motion, grain, scene complexity, and encoder settings also matter.',
  },
  {
    question: 'Why does the same bitrate change with resolution or frame rate?',
    answer: 'A higher resolution has more pixels to describe, and a higher frame rate sends more frames each second. Both increase the amount of visual information competing for the same bitrate.',
  },
  {
    question: 'Can I use the result as a platform requirement?',
    answer: 'Use it for planning capacity and comparing scenarios. Platform requirements vary, so check the current encoder guidance for the destination and leave upload headroom for a live stream.',
  },
];

const howTo = [
  {
    name: 'Choose the picture shape',
    text: 'Select the output resolution and frame rate that match the stream or recording you plan to make.',
  },
  {
    name: 'Set the encoding signal',
    text: 'Choose the codec and enter the video bitrate in megabits per second. Use a preset as a starting point when you are unsure.',
  },
  {
    name: 'Describe the session',
    text: 'Enter the duration in minutes and the number of copies you expect to keep, edit, or deliver.',
  },
  {
    name: 'Read the tradeoff',
    text: 'Compare the lean, balanced, and crisp tiers to see how storage changes before you commit to a recording or stream setup.',
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

const ui: VideoBitratePlannerUI = {
  presetLabel: 'Start with a scene',
  presetFast: 'Fast web stream',
  presetUpload: 'Everyday live',
  presetArchive: '4K archive',
  resolutionLabel: 'Resolution',
  frameRateLabel: 'Frame rate',
  codecLabel: 'Codec',
  bitrateLabel: 'Video bitrate',
  durationLabel: 'Session length',
  copiesLabel: 'Copies kept',
  minutesLabel: 'minutes',
  copiesShort: 'copies',
  h264: 'H.264',
  h265: 'H.265',
  av1: 'AV1',
  codecNote: 'Codec efficiency changes the quality reading, not the storage arithmetic.',
  sceneLabel: 'Signal to storage',
  signalSource: 'Picture',
  codecGate: 'Encoding gate',
  storageReel: 'Storage',
  qualityEstimate: 'Quality reading',
  storageEstimate: 'Estimated storage',
  perCopy: 'One copy',
  allCopies: 'All copies',
  perHour: 'Per hour',
  frameTime: 'Frame time',
  dataPerFrame: 'Data per frame',
  comparisonLabel: 'Storage tradeoff',
  lean: 'Lean',
  balanced: 'Balanced',
  crisp: 'Crisp',
  qualityLean: 'Lean and light',
  qualityBalanced: 'Balanced signal',
  qualityStrong: 'Strong detail',
  qualityExcellent: 'Excellent headroom',
  qualityAggressive: 'Aggressive compression',
  qualityGuidance: 'A visual estimate for comparing settings.',
  capacityLight: 'Light storage footprint',
  capacityMedium: 'Medium storage footprint',
  capacityHeavy: 'Heavy storage footprint',
  capacityNote: 'Capacity badge is based on the total copies shown above.',
  reset: 'Reset values',
  localNote: 'Runs locally in this browser. Nothing is uploaded.',
  assumptionTitle: 'Read the assumptions',
  assumptionText: 'Storage uses decimal gigabytes and the entered video bitrate. It does not add audio, container overhead, variable bitrate peaks, or filesystem padding.',
  warningText: 'The quality tiers are planning heuristics. Motion, grain, keyframes, encoder presets, platform transcoding, and network headroom can change the real result.',
  readyText: 'Adjust a value to redraw the signal.',
  calculateAria: 'Update the video plan',
};

export const content: ToolLocaleContent<VideoBitratePlannerUI> = {
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
      text: 'Estimate video storage before you stream or record',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A video bitrate calculator is useful when a recording session needs a realistic storage plan. Enter the bitrate, duration, and number of copies to see the capacity footprint, then compare lean, balanced, and crisp signal tiers for the same picture format.',
    },
    {
      type: 'title',
      text: 'What the planner calculates',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Storage:</strong> bitrate multiplied by time, converted from bits to decimal gigabytes, then multiplied by the copies you keep.',
        '<strong>Frame timing:</strong> the milliseconds available for each frame at the chosen FPS and an estimate of data carried by each frame.',
        '<strong>Quality reading:</strong> a broad pixels per frame comparison adjusted by a codec efficiency factor so settings can be compared on one screen.',
      ],
    },
    {
      type: 'title',
      text: 'How resolution and FPS change the tradeoff',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Resolution increases the number of pixels in each frame. Frame rate increases the number of frames sent every second. If bitrate stays fixed while either rises, each frame receives less data and compression becomes more demanding. A faster codec can improve the comparison, but it cannot remove the need to test the real content.',
    },
    {
      type: 'tip',
      title: 'Leave room for a live stream',
      html: 'Treat the entered video bitrate as the payload, not as the full capacity of your connection. Leave practical upload headroom for audio, protocol overhead, and network variation, then test a scene with similar motion to the real broadcast.',
    },
    {
      type: 'title',
      text: 'Use platform guidance for the final setting',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'This planner is intentionally platform neutral. YouTube publishes bitrate ranges by resolution and frame rate for live encoding and uploads, while also recommending that creators test the actual stream. Use those current destination rules to validate the scenario you model here.',
    },
    {
      type: 'title',
      text: 'Why the storage result is an estimate',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A nominal bitrate does not describe every byte in a finished file. Variable bitrate encoders, audio, container metadata, keyframe decisions, platform transcoding, and filesystem units can all move the final size. Keep the assumptions panel open when you need to explain the number to a client or production team.',
    },
  ],
};
