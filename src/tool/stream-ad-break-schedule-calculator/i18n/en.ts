import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { StreamAdBreakScheduleLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const slug = 'stream-ad-break-schedule-calculator';
const title = 'Stream Ad Break Schedule Calculator';
const description = 'Turn a live stream plan into a timed ad break schedule that protects content boundaries and shows the real finish time.';

const faq = [
  { question: 'How does the calculator place an ad break?', answer: 'It watches the content minutes against your chosen cadence and places one break at the first available boundary after that point. A break never cuts through a segment.' },
  { question: 'What format should I use for content blocks?', answer: 'Enter one block per line as Label | minutes, such as Opening | 15. The order is the running order and the minutes are content minutes before ad breaks.' },
  { question: 'Why can the actual break be later than the cadence?', answer: 'The calculator respects your segment boundaries. If a segment runs past the cadence, the break moves to the next boundary and the plan flags that compromise for review.' },
  { question: 'Does this follow a platform advertising rule?', answer: 'No. It is a planning model based on your own cadence, break length and show structure. Check the current rules and controls for the platform, contract and jurisdiction where you publish.' },
  { question: 'Does the finish time include the breaks?', answer: 'Yes. Content total is kept separate from ad time, while the planned finish time includes every scheduled break so your run sheet reflects the clock on air.' },
];

const howTo = [
  { name: 'Set the live start and break rules', text: 'Choose the start time, the planned content duration, the cadence between breaks and the duration of each break.' },
  { name: 'Enter the running order', text: 'Write one segment per line with a label, a vertical bar and its duration in minutes. Keep boundaries where the host can pause naturally.' },
  { name: 'Read the time rail', text: 'Use the visual rail to see where breaks land, how much time they add and whether a long segment pushes a break past its target.' },
  { name: 'Copy the production run sheet', text: 'Check the boundary warnings, then copy the timed list for your producer, moderator or streaming scene notes.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((item) => ({ '@type': 'HowToStep', name: item.name, text: item.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export const content: StreamAdBreakScheduleLocaleContent = {
  slug,
  title,
  description,
  ui: {
    startTimeLabel: 'Live start time', startTimeHint: 'When the stream goes live',
    streamDurationLabel: 'Planned content minutes', streamDurationHint: 'Expected show time before breaks',
    cadenceLabel: 'Break cadence', cadenceHint: 'Place a break after this many content minutes',
    breakLengthLabel: 'Break length', breakLengthHint: 'Minutes added to the live clock',
    segmentsLabel: 'Running order', segmentsHint: 'One line per block: Label | minutes',
    presetsLabel: 'Start with a show shape', presetQuick: 'Two hour live show', presetLong: 'Long event', presetInterview: 'Interview stream',
    scheduleLabel: 'On air time rail', scheduleHint: 'Breaks land at the first available boundary after the cadence.',
    contentTotalLabel: 'Content', adsTotalLabel: 'Ad time', plannedEndLabel: 'Finish on air', breaksLabel: 'Breaks',
    stateReady: 'Plan has usable boundaries', stateWarning: 'Review the timing tension', stateEmpty: 'Add a running order',
    stateReadyText: 'The schedule can be handed to a producer as a first run sheet.',
    stateWarningText: 'A line is invalid or the cadence does not meet a natural segment boundary.',
    stateEmptyText: 'Add two or more blocks to let the calculator place a break between them.',
    copyLabel: 'Copy run sheet', resetLabel: 'Restore example', copiedLabel: 'Run sheet copied', copyErrorLabel: 'Copy was blocked. Select the schedule text and copy it manually.',
    segmentKind: 'Content', breakKind: 'Ad break', minutesShort: 'min', noEntriesText: 'Your time rail will appear here.',
    invalidLineText: 'Check line {lines}. Use Label | minutes.', plannedMismatchText: 'The running order differs from the planned duration by {difference}.',
    boundaryWarningText: 'No break was placed because the cadence is reached inside a single block. Add a boundary or split that block.',
  },
  seo: [
    { type: 'title', text: 'Plan breaks around the show, not through it', level: 2 },
    { type: 'paragraph', html: 'A live stream schedule has two clocks: the minutes devoted to the programme and the wall clock that includes pauses. This calculator keeps those clocks visible. You describe the running order, choose a cadence and see the finish time after scheduled breaks are added.' },
    { type: 'paragraph', html: 'The placement rule is intentionally practical. When the content clock reaches the cadence, the next suitable segment boundary receives a break. That makes the result a production conversation: if the break arrives late, the host can move a boundary, shorten a block or accept the delay before going live.' },
    { type: 'title', text: 'Use content boundaries as production cues', level: 2 },
    { type: 'paragraph', html: 'Good break points are moments where the audience can tolerate a change: after an introduction, before a new topic, during a planned intermission or after a match. Enter those moments as separate blocks. A single long block gives the calculator no safe place to pause, so the warning is useful rather than a failure.' },
    { type: 'list', items: ['Split a long interview into welcome, conversation and questions.', 'Keep the final sign-off separate so a break is never scheduled after the show has effectively ended.', 'Compare the planned content minutes with the finish time that includes ad time.', 'Give the copied run sheet to the person calling breaks, not only to the on-screen host.'] },
    { type: 'title', text: 'Read the three timing signals', level: 2 },
    { type: 'table', headers: ['Signal', 'What it means', 'Action'], rows: [['Content', 'Minutes of your running order', 'Check that the editorial plan fits the promised show length'], ['Ad time', 'Break minutes added to the clock', 'Tell the host and producer how much pause time is expected'], ['Finish on air', 'Start time plus content and breaks', 'Reserve the correct studio, raid or handoff window']] },
    { type: 'tip', title: 'A schedule is not a platform guarantee', html: 'The result is a local run sheet. It does not trigger ads, know whether a viewer sees an ad, or certify compliance with a platform, sponsor agreement or local advertising law. Verify the current destination rules before publishing.' },
    { type: 'title', text: 'Make the plan usable in the control room', level: 2 },
    { type: 'paragraph', html: 'Copy the finished schedule only after reviewing the warning line. A producer can use the timestamps to prepare a scene, tell moderators when to announce a pause and protect a high-value section of the show. If the plan has no break despite a short cadence, the fix is usually editorial: create another meaningful boundary rather than forcing an interruption.' },
    { type: 'tip', title: 'Check the real clock after rehearsal', html: 'Hosts talk, transitions expand and technical checks take time. Treat this calculation as a baseline, then rehearse the transition and update the segment minutes before the live event.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
};
