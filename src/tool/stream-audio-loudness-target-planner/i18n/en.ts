import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import type { StreamAudioLoudnessLocaleContent } from "../entry";
import { bibliography } from "../bibliography";

const slug = "stream-audio-loudness-target-planner";
const title = "Stream Audio Loudness Target Planner";
const description =
  "Turn a measured LUFS and true peak reading into a gain adjustment, peak safety check and platform target plan for streaming audio.";

const faq = [
  {
    question: "What does the gain correction mean?",
    answer:
      "It is the target loudness minus your measured integrated loudness. A positive value suggests increasing gain, while a negative value suggests reducing gain before you export or stream.",
  },
  {
    question: "Why does the planner show true peak as well as LUFS?",
    answer:
      "Loudness and peak level answer different questions. LUFS describes perceived programme level over time, while true peak estimates the highest continuous signal peak and helps reveal clipping headroom after a gain change.",
  },
  {
    question: "Are the web and game targets official platform requirements?",
    answer:
      "No. The profile values are editable planning references. A platform may normalize, limit or publish its own delivery guidance, so verify the current specification for the destination you use.",
  },
  {
    question: "What is the -1 dBTP line?",
    answer:
      "It is a conservative ceiling used to flag the projected peak in this planner. It is a warning threshold, not proof that a file passes a platform or broadcaster quality check.",
  },
  {
    question: "Can this tool measure an audio file?",
    answer:
      "Yes, supported audio and video files can be decoded locally in the browser. The native-browser result is an estimate, so use a compliant loudness meter for a delivery decision and keep the manual fields available for trusted readings.",
  },
  {
    question: "What should I do when the peak risk badge appears?",
    answer:
      "Reduce gain or use a transparent limiter while checking the whole programme again. Do not solve a peak warning by judging only a short sample, because integrated loudness and true peak depend on the material being measured.",
  },
];

const howTo = [
  {
    name: "Load or enter a reading",
    text: "Drop a supported audio or video file for a local browser estimate, or type trusted integrated LUFS and dBTP readings from a complete analysis pass.",
  },
  {
    name: "Review the dynamics",
    text: "Use the estimated loudness range and peak warning as screening signals. They are prompts for listening and remeasurement, not certification.",
  },
  {
    name: "Choose a target profile",
    text: "Select a planning reference for web, broadcast or game audio, or choose Custom and enter the target published by your destination.",
  },
  {
    name: "Act on the reading",
    text: "Use the correction, projected peak and headroom together. You can render a local WAV with a safety limiter, then recheck the full programme with a compliant meter.",
  },
];

const faqSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: title,
  description,
  step: howTo.map((item) => ({
    "@type": "HowToStep",
    name: item.name,
    text: item.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: title,
  description,
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export const content: StreamAudioLoudnessLocaleContent = {
  slug,
  title,
  description,
  ui: {
    fileAnalysisLabel: "Analyze a file locally",
    fileAnalysisHint:
      "Drop audio or video here. The file stays in this browser tab.",
    fileDropLabel: "Drop a WAV, MP3 or MP4 file",
    fileTypesLabel: "WAV · MP3 · MP4 · WebM",
    fileIdleText: "No file loaded. Manual readings still work.",
    fileReadingText: "Reading {name}...",
    fileReadyText: "Ready: {name}",
    fileErrorText: "This browser could not decode that file. Try WAV or MP3.",
    useAnalysisLabel: "Use these readings",
    analysisSummaryLabel: "Browser estimate",
    measuredLufsLabel: "Measured integrated loudness",
    measuredLufsHint: "Use a complete programme reading, not a momentary peak.",
    truePeakLabel: "Measured true peak",
    truePeakHint: "Use the dBTP reading from the same analysis pass.",
    targetProfileLabel: "Target profile",
    targetWebLabel: "Web guidance -14",
    targetBroadcastLabel: "Broadcast -23",
    targetGameLabel: "Game audio -23",
    targetCustomLabel: "Custom target",
    customTargetLabel: "Target loudness",
    contentTypeLabel: "Content type",
    contentVoiceLabel: "Voice",
    contentGameplayLabel: "Gameplay",
    contentMusicLabel: "Music",
    sceneLabel: "Emission meter",
    currentLabel: "Current reading",
    targetLabel: "Target",
    peakCeilingLabel: "Peak warning line",
    correctionLabel: "Gain correction",
    projectedPeakLabel: "Projected peak",
    headroomLabel: "Peak headroom",
    stateReady: "Ready to check",
    stateBoost: "Needs a boost",
    stateTrim: "Needs a trim",
    statePeakRisk: "Peak risk",
    stateReadyText:
      "The loudness target is close and the projected peak stays below the warning line.",
    stateBoostText:
      "The target needs more gain. Check the projected peak before applying the correction.",
    stateTrimText:
      "The reading is louder than the selected target. Reduce gain before the next export or transmission.",
    statePeakRiskText:
      "The requested correction would cross the peak warning line. Do not apply it blindly.",
    guidanceLabel: "Next check",
    webGuidance:
      "Web targets are planning references, not universal platform rules.",
    broadcastGuidance:
      "The broadcast reference is a loudness standard starting point, not a stream acceptance test.",
    gameGuidance:
      "Game audio can change quickly, so inspect effects and voice separately after the gain move.",
    customGuidance:
      "Custom targets should come from the destination specification you are delivering to.",
    voiceGuidance:
      "For voice, listen again for plosives, room noise and limiter breathing.",
    gameplayGuidance:
      "For gameplay, check sudden effects and voice chat after any level change.",
    musicGuidance:
      "For music, recheck dynamics and limiter movement across the full programme.",
    meterAria:
      "A loudness scale from minus 36 to 0 LUFS showing the current reading, target and minus 1 dBTP warning line.",
    resetLabel: "Restore example values",
    noteLabel: "Keep the model honest.",
    noteText:
      "File analysis and export stay in the browser, but the estimates are not a compliant meter and the rendered WAV must be rechecked before delivery.",
    lraLabel: "Dynamic range screen",
    lraWaiting: "Load a file for an estimate",
    lraWide: "Wide: inspect quiet sections",
    lraBalanced: "Moderate: listen in context",
    lraNarrow: "Narrow: check compression feel",
    limiterLabel: "Peak limiter needed",
    limiterWaiting: "Calculated from the readings",
    limiterNone: "No extra peak cut",
    limiterRequired: "Limit {amount} dB to reach the ceiling",
    platformPreviewLabel: "Platform preview",
    platformPreviewHint:
      "Edit the planning target; a negative result predicts playback trim, not a file rewrite.",
    platformTargetLabel: "Target",
    platformTrim: "Playback trim {amount}",
    platformNoTrim: "No predicted trim",
    outputLabel: "Create a processed copy",
    outputHint:
      "Uses gain plus a browser safety limiter, then exports a WAV. Re-measure the result.",
    outputSettingsLabel: "Suggested chain",
    obsPresetLabel: "OBS",
    dawPresetLabel: "DAW",
    outputProcessLabel: "Render WAV locally",
    outputDownloadLabel: "Download processed WAV",
    outputProcessing: "Rendering the WAV locally...",
    outputWaiting: "Load a file to enable export.",
    outputReady: "Your local WAV is ready to download.",
    outputError: "The browser could not render this file.",
    youtubeLabel: "YouTube",
    spotifyLabel: "Spotify",
    twitchLabel: "Twitch",
    tiktokLabel: "TikTok",
  },
  seo: [
    {
      type: "title",
      text: "How to Read LUFS and True Peak Together",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Integrated loudness describes the average level of a complete programme using LUFS. True peak describes the highest estimated peak between digital samples using dBTP. They belong together because a mix can be quiet overall yet contain peaks that leave little headroom after normalization.",
    },
    {
      type: "paragraph",
      html: "The planner subtracts the measured LUFS from the chosen target to produce a gain correction. It then adds that correction to the measured true peak. This is arithmetic for a first pass, not a replacement for measuring the processed programme again.",
    },
    {
      type: "title",
      text: "Choosing a Target Without False Precision",
      level: 2,
    },
    {
      type: "paragraph",
      html: "The profile buttons are deliberately described as guidance. Web platforms can normalize or process audio differently, and their delivery documentation can change. The platform preview lets you edit a planning target and see predicted playback trim; it does not emulate each codec or player.",
    },
    {
      type: "table",
      headers: ["Reading", "Correction", "Decision"],
      rows: [
        [
          "-18 LUFS to -14 LUFS",
          "+4 dB",
          "Check the projected peak before boosting",
        ],
        [
          "-14.5 LUFS to -14 LUFS",
          "+0.5 dB",
          "Usually close enough for a comparison pass",
        ],
        [
          "-10 LUFS to -14 LUFS",
          "-4 dB",
          "Trim the signal and measure it again",
        ],
      ],
    },
    { type: "title", text: "What the Peak Warning Actually Says", level: 2 },
    {
      type: "paragraph",
      html: "The yellow line is set at -1 dBTP for a clear warning threshold. If the projected peak crosses it, the proposed gain move could create insufficient headroom. That does not prove audible clipping, and staying below it does not prove that a platform, codec or encoder will behave identically.",
    },
    {
      type: "tip",
      title: "Treat correction as a test instruction",
      html: "Apply the proposed gain only as a starting move. Analyze the full result again with a compliant loudness meter, then listen for changes in voice clarity, effects impact and limiter behavior.",
    },
    {
      type: "title",
      text: "A Practical Loudness Check Before Going Live",
      level: 2,
    },
    {
      type: "list",
      items: [
        "Load a supported file for a browser estimate, or enter trusted readings manually.",
        "Inspect the loudness range and true peak warning alongside the correction.",
        "Choose the destination target and review each editable platform preview.",
        "Render a local WAV only when you understand the suggested gain and limiter ceiling.",
        "Measure the processed result from start to finish and compare voice, music and effects in context.",
      ],
    },
    {
      type: "paragraph",
      html: "Content type changes the listening checklist, not the underlying arithmetic. Voice needs attention to plosives and room noise, gameplay needs attention to abrupt effects and chat, and music needs attention to dynamics and limiter movement. Those checks cannot be inferred from LUFS alone.",
    },
    {
      type: "tip",
      title: "What this planner cannot certify",
      html: "The browser estimate is not a libebur128 or broadcast-meter replacement. It cannot emulate every codec, inspect a destination player or guarantee compliance. Keep a trusted meter and the current delivery specification in the loop.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
};
