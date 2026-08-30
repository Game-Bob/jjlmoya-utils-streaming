import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import type { StreamAudioLoudnessLocaleContent } from "../entry";
import type { StreamAudioLoudnessUI } from "../ui";
import { bibliography } from "../bibliography";

const title = "스트리밍 오디오 라우드니스 목표 플래너";
const description =
  "게인 보정, True Peak 여유, 스트리밍 오디오 목표 라우드니스를 계산합니다.";
const faq = [
  {
    question: "게인 보정은 무엇인가요?",
    answer:
      "목표 LUFS에서 측정된 통합 라우드니스를 뺀 값입니다. 양수는 게인을 높이고 음수는 낮추는 기준입니다.",
  },
  {
    question: "LUFS와 True Peak를 함께 보는 이유는 무엇인가요?",
    answer:
      "LUFS는 프로그램 평균 레벨을, True Peak는 추정된 최고 피크를 보여 줍니다. 둘을 함께 봐야 보정 후 여유를 판단할 수 있습니다.",
  },
  {
    question: "플랫폼 목표는 공식 규칙인가요?",
    answer:
      "아닙니다. 수정 가능한 계획용 기준입니다. 항상 대상 플랫폼의 최신 사양을 확인하세요.",
  },
  {
    question: "마이너스 1 dBTP 선은 무엇인가요?",
    answer:
      "보수적인 경고 기준입니다. 예상 피크가 넘으면 리미팅이나 재측정이 필요합니다.",
  },
  {
    question: "브라우저에서 오디오 파일을 분석할 수 있나요?",
    answer:
      "지원되는 파일을 로컬에서 분석할 수 있습니다. 단, 결과는 추정치이므로 적합한 미터로 확인해야 합니다.",
  },
  {
    question: "피크 위험이 표시되면 어떻게 하나요?",
    answer:
      "전체 프로그램을 다시 듣고 필요하면 투명한 리미터를 사용하세요. 짧은 구간만으로 판단하지 마세요.",
  },
];
const howTo = [
  {
    name: "파일을 불러오거나 측정값 입력",
    text: "지원 파일을 드롭하거나 전체 분석에서 얻은 통합 LUFS와 True Peak를 입력합니다.",
  },
  {
    name: "다이내믹 확인",
    text: "Loudness Range와 피크 경고를 듣기와 재측정을 위한 신호로 사용합니다.",
  },
  {
    name: "목표 선택",
    text: "Web, Broadcast, Game Audio 또는 사용자 지정 목표를 선택하고 플랫폼 값을 조정합니다.",
  },
  {
    name: "출력 확인",
    text: "필요하면 안전 리미터가 적용된 WAV를 로컬에서 만들고 결과 전체를 다시 측정합니다.",
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
  offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
};
const ui: StreamAudioLoudnessUI = {
  fileAnalysisLabel: "파일을 로컬에서 분석",
  fileAnalysisHint:
    "오디오나 비디오를 여기에 놓으세요. 파일은 이 브라우저 탭에만 남습니다.",
  fileDropLabel: "WAV, MP3 또는 MP4 파일 놓기",
  fileTypesLabel: "WAV · MP3 · MP4 · WebM",
  fileIdleText: "파일이 없습니다. 수동 입력도 계속 사용할 수 있습니다.",
  fileReadingText: "{name} 읽는 중...",
  fileReadyText: "준비 완료: {name}",
  fileErrorText:
    "이 브라우저에서 파일을 디코딩할 수 없습니다. WAV 또는 MP3를 시도하세요.",
  useAnalysisLabel: "이 측정값 사용",
  analysisSummaryLabel: "브라우저 추정값",
  measuredLufsLabel: "측정된 통합 라우드니스",
  measuredLufsHint: "순간 피크가 아닌 전체 프로그램 측정값을 사용하세요.",
  truePeakLabel: "측정된 True Peak",
  truePeakHint: "같은 분석의 dBTP 값을 사용하세요.",
  targetProfileLabel: "목표 프로필",
  targetWebLabel: "Web 기준 -14",
  targetBroadcastLabel: "Broadcast -23",
  targetGameLabel: "게임 오디오 -23",
  targetCustomLabel: "사용자 지정 목표",
  customTargetLabel: "목표 라우드니스",
  contentTypeLabel: "콘텐츠 유형",
  contentVoiceLabel: "음성",
  contentGameplayLabel: "게임플레이",
  contentMusicLabel: "음악",
  sceneLabel: "출력 미터",
  currentLabel: "현재 측정값",
  targetLabel: "목표",
  peakCeilingLabel: "피크 경고선",
  correctionLabel: "게인 보정",
  projectedPeakLabel: "예상 피크",
  headroomLabel: "피크 여유",
  stateReady: "확인할 준비 완료",
  stateBoost: "높여야 함",
  stateTrim: "낮춰야 함",
  statePeakRisk: "피크 위험",
  stateReadyText: "목표가 가깝고 예상 피크가 경고선 아래에 있습니다.",
  stateBoostText:
    "목표에 더 많은 게인이 필요합니다. 보정 전에 예상 피크를 확인하세요.",
  stateTrimText:
    "측정값이 목표보다 큽니다. 다음 내보내기 전에 게인을 낮추세요.",
  statePeakRiskText: "보정하면 경고선을 넘습니다. 확인 없이 적용하지 마세요.",
  guidanceLabel: "다음 확인",
  webGuidance: "Web 목표는 계획용 기준이며 모든 플랫폼의 공통 규칙이 아닙니다.",
  broadcastGuidance:
    "Broadcast는 라우드니스 기준이지 스트림 승인 테스트가 아닙니다.",
  gameGuidance:
    "게임 오디오는 빠르게 변합니다. 조정 후 효과음과 음성을 따로 확인하세요.",
  customGuidance: "사용자 지정 목표는 대상 사양에서 가져와야 합니다.",
  voiceGuidance: "음성은 파열음, 실내 소음, 리미터 움직임을 다시 들어 보세요.",
  gameplayGuidance:
    "게임플레이는 갑작스러운 효과음과 보이스 채팅을 확인하세요.",
  musicGuidance:
    "음악은 전체 프로그램의 다이내믹과 리미터 움직임을 확인하세요.",
  meterAria:
    "마이너스 36에서 0 LUFS까지의 라우드니스 눈금으로 현재값, 목표, 마이너스 1 dBTP 경고선을 표시합니다.",
  resetLabel: "예시 값 복원",
  noteLabel: "모델을 정직하게 유지하세요.",
  noteText:
    "분석과 내보내기는 브라우저에서 처리되지만 추정값은 적합한 미터를 대신하지 않으며 전달 전에 확인해야 합니다.",
  lraLabel: "다이내믹 확인",
  lraWaiting: "추정하려면 파일을 불러오세요",
  lraWide: "넓음: 조용한 구간 확인",
  lraBalanced: "중간: 맥락에서 듣기",
  lraNarrow: "좁음: 압축감 확인",
  limiterLabel: "피크 리미터 필요",
  limiterWaiting: "측정값으로 계산됨",
  limiterNone: "추가 피크 컷 없음",
  limiterRequired: "한계에 맞추려면 {amount} dB 제한",
  platformPreviewLabel: "플랫폼 미리보기",
  platformPreviewHint:
    "계획 목표를 수정하세요. 음수 결과는 재생 시 감쇠 예상이며 파일을 바꾸지 않습니다.",
  platformTargetLabel: "목표",
  platformTrim: "재생 감쇠 예상 {amount}",
  platformNoTrim: "감쇠 예상 없음",
  outputLabel: "처리된 복사본 만들기",
  outputHint:
    "게인과 브라우저 안전 리미터를 적용해 WAV로 내보냅니다. 결과를 다시 측정하세요.",
  outputSettingsLabel: "권장 체인",
  obsPresetLabel: "OBS",
  dawPresetLabel: "DAW",
  outputProcessLabel: "WAV 로컬 렌더링",
  outputDownloadLabel: "처리된 WAV 다운로드",
  outputProcessing: "WAV를 로컬에서 렌더링 중...",
  outputWaiting: "내보내려면 파일을 불러오세요.",
  outputReady: "로컬 WAV를 다운로드할 수 있습니다.",
  outputError: "브라우저에서 이 파일을 렌더링할 수 없습니다.",
  youtubeLabel: "YouTube",
  spotifyLabel: "Spotify",
  twitchLabel: "Twitch",
  tiktokLabel: "TikTok",
};
export const content: StreamAudioLoudnessLocaleContent = {
  slug: "stream-audio-loudness-target-planner",
  title,
  description,
  ui,
  seo: [
    { type: "title", text: "LUFS와 True Peak를 함께 읽는 법", level: 2 },
    {
      type: "paragraph",
      html: "통합 라우드니스는 전체 프로그램의 평균 레벨을 나타냅니다. True Peak는 샘플 사이에서 추정한 최대 피크입니다. 볼륨을 올린 뒤 여유를 판단하려면 두 값이 모두 필요합니다.",
    },
    {
      type: "paragraph",
      html: "플래너는 측정 LUFS를 목표에서 빼고 그 보정을 측정 피크에 더합니다. 이는 확인 가능한 첫 계산이며 처리된 파일의 인증은 아닙니다.",
    },
    { type: "title", text: "과도한 확신 없이 목표 선택하기", level: 2 },
    {
      type: "paragraph",
      html: "플랫폼 미리보기의 목표는 수정할 수 있습니다. 더 큰 소스의 재생 감쇠를 예상하지만 모든 코덱이나 플레이어를 재현하지는 않습니다.",
    },
    {
      type: "table",
      headers: ["측정", "보정", "결정"],
      rows: [
        ["-18 LUFS에서 -14 LUFS", "+4 dB", "올린 뒤 피크 확인"],
        ["-14.5 LUFS에서 -14 LUFS", "+0.5 dB", "비교 측정 수행"],
        ["-10 LUFS에서 -14 LUFS", "-4 dB", "낮추고 다시 측정"],
      ],
    },
    { type: "title", text: "피크 경고의 의미", level: 2 },
    {
      type: "paragraph",
      html: "예상 피크가 경고선을 넘으면 리미터나 더 작은 게인이 필요할 수 있습니다. 처리 후 전체 프로그램을 다시 측정하세요.",
    },
    {
      type: "tip",
      title: "보정을 테스트 지시로 사용하세요",
      html: "변경을 통제된 방식으로 적용하고 음성, 효과음, 음악을 맥락에서 들은 뒤 새 측정값을 확인하세요.",
    },
    { type: "title", text: "방송 전 실용적인 확인", level: 2 },
    {
      type: "list",
      items: [
        "파일을 불러오거나 신뢰할 수 있는 측정값을 입력합니다.",
        "보정과 함께 다이내믹과 피크 경고를 봅니다.",
        "각 플랫폼의 수정 가능한 목표를 확인합니다.",
        "WAV를 내보내고 처음부터 끝까지 측정합니다.",
        "숫자 하나가 아니라 음성, 음악, 효과음을 평가합니다.",
      ],
    },
    {
      type: "paragraph",
      html: "콘텐츠 유형은 계산식이 아니라 다시 들을 항목을 바꿉니다. 음성, 효과음, 음악은 각각 다른 확인이 필요합니다.",
    },
    {
      type: "tip",
      title: "플래너가 인증할 수 없는 것",
      html: "브라우저 추정값은 libebur128이나 방송용 미터를 대신하지 않습니다. 코덱 동작이나 대상 플랫폼의 준수를 보장하지 않습니다.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
};
