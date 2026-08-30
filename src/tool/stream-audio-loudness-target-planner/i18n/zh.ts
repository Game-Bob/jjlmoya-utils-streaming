import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import type { StreamAudioLoudnessLocaleContent } from "../entry";
import type { StreamAudioLoudnessUI } from "../ui";
import { bibliography } from "../bibliography";

const title = "流媒体音频响度目标规划器";
const description =
  "计算增益修正，检查 True Peak 余量，并规划流媒体音频的响度目标。";
const faq = [
  {
    question: "增益修正是什么意思？",
    answer:
      "它等于 LUFS 目标减去测得的综合响度。正值表示建议增加增益，负值表示建议降低增益。",
  },
  {
    question: "为什么要同时显示 LUFS 和 True Peak？",
    answer:
      "LUFS 表示节目的平均电平，True Peak 表示估算的最高峰值。两者一起才能判断修正后是否还有余量。",
  },
  {
    question: "平台目标是官方规则吗？",
    answer: "不是。这些是可以编辑的规划参考值。请始终确认目标平台的最新规格。",
  },
  {
    question: "负 1 dBTP 线表示什么？",
    answer:
      "它是一个保守的警告阈值。如果预测峰值超过它，就需要限制或重新测量。",
  },
  {
    question: "可以在浏览器中分析音频文件吗？",
    answer:
      "可以。支持的文件会在本地分析，但结果是估算值，应使用合规测量仪再次确认。",
  },
  {
    question: "出现峰值风险时应该怎么办？",
    answer: "重新聆听完整节目，必要时使用透明限制器。不要只根据短片段作决定。",
  },
];
const howTo = [
  {
    name: "加载文件或输入测量值",
    text: "拖入支持的文件，或输入完整分析得到的综合 LUFS 和 True Peak。",
  },
  {
    name: "检查动态",
    text: "把 Loudness Range 和峰值警告作为聆听与重新测量的提示。",
  },
  {
    name: "选择目标",
    text: "选择 Web、Broadcast、Game Audio 或自定义目标，并调整各平台数值。",
  },
  {
    name: "检查输出",
    text: "需要时在本地生成带安全限制器的 WAV，然后重新测量完整结果。",
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
  offers: { "@type": "Offer", price: "0", priceCurrency: "CNY" },
};
const ui: StreamAudioLoudnessUI = {
  fileAnalysisLabel: "在本地分析文件",
  fileAnalysisHint: "将音频或视频拖到这里。文件只保留在此浏览器标签页中。",
  fileDropLabel: "拖入 WAV、MP3 或 MP4 文件",
  fileTypesLabel: "WAV · MP3 · MP4 · WebM",
  fileIdleText: "尚未加载文件。仍可手动输入。",
  fileReadingText: "正在读取 {name}...",
  fileReadyText: "准备完成：{name}",
  fileErrorText: "此浏览器无法解码该文件。请尝试 WAV 或 MP3。",
  useAnalysisLabel: "使用这些测量值",
  analysisSummaryLabel: "浏览器估算",
  measuredLufsLabel: "测得的综合响度",
  measuredLufsHint: "使用完整节目的读数，而不是瞬时峰值。",
  truePeakLabel: "测得的 True Peak",
  truePeakHint: "使用同一次分析中的 dBTP 读数。",
  targetProfileLabel: "目标配置",
  targetWebLabel: "Web 参考值 -14",
  targetBroadcastLabel: "Broadcast -23",
  targetGameLabel: "游戏音频 -23",
  targetCustomLabel: "自定义目标",
  customTargetLabel: "目标响度",
  contentTypeLabel: "内容类型",
  contentVoiceLabel: "人声",
  contentGameplayLabel: "游戏过程",
  contentMusicLabel: "音乐",
  sceneLabel: "输出测量器",
  currentLabel: "当前读数",
  targetLabel: "目标",
  peakCeilingLabel: "峰值警告线",
  correctionLabel: "增益修正",
  projectedPeakLabel: "预测峰值",
  headroomLabel: "峰值余量",
  stateReady: "可以检查",
  stateBoost: "需要提高",
  stateTrim: "需要降低",
  statePeakRisk: "峰值风险",
  stateReadyText: "目标很接近，预测峰值低于警告线。",
  stateBoostText: "目标需要更多增益。应用修正前请检查预测峰值。",
  stateTrimText: "读数高于目标。下次导出前请降低增益。",
  statePeakRiskText: "修正会越过警告线。请勿直接应用。",
  guidanceLabel: "下一项检查",
  webGuidance: "Web 目标是规划参考，不是所有平台的通用规则。",
  broadcastGuidance: "Broadcast 是响度参考，不是流媒体接收测试。",
  gameGuidance: "游戏音频变化很快。调整后请分别检查效果声和人声。",
  customGuidance: "自定义目标应来自目标平台的规格。",
  voiceGuidance: "对于人声，请重新聆听爆破音、房间噪声和限制器呼吸声。",
  gameplayGuidance: "对于游戏过程，请检查突然的效果声和语音聊天。",
  musicGuidance: "对于音乐，请检查完整节目中的动态和限制器动作。",
  meterAria:
    "负 36 到 0 LUFS 的响度刻度，显示当前读数、目标和负 1 dBTP 警告线。",
  resetLabel: "恢复示例值",
  noteLabel: "保持模型诚实。",
  noteText:
    "分析和导出都在浏览器中完成，但估算值不能替代合规测量器，交付前必须重新确认。",
  lraLabel: "动态检查",
  lraWaiting: "加载文件以进行估算",
  lraWide: "宽: 检查安静片段",
  lraBalanced: "中等: 在上下文中聆听",
  lraNarrow: "窄: 检查压缩感",
  limiterLabel: "需要峰值限制器",
  limiterWaiting: "根据测量值计算",
  limiterNone: "无需额外削峰",
  limiterRequired: "限制 {amount} dB 以达到上限",
  platformPreviewLabel: "平台预览",
  platformPreviewHint: "编辑规划目标。负值预测播放时的降低，不会改写文件。",
  platformTargetLabel: "目标",
  platformTrim: "预测播放降低 {amount}",
  platformNoTrim: "未预测到降低",
  outputLabel: "创建处理后的副本",
  outputHint: "应用增益和浏览器安全限制器，然后导出 WAV。请重新测量结果。",
  outputSettingsLabel: "建议链路",
  obsPresetLabel: "OBS",
  dawPresetLabel: "DAW",
  outputProcessLabel: "在本地渲染 WAV",
  outputDownloadLabel: "下载处理后的 WAV",
  outputProcessing: "正在本地渲染 WAV...",
  outputWaiting: "加载文件后才能导出。",
  outputReady: "本地 WAV 已准备好下载。",
  outputError: "浏览器无法渲染此文件。",
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
    { type: "title", text: "如何同时读取 LUFS 和 True Peak", level: 2 },
    {
      type: "paragraph",
      html: "综合响度表示完整节目的平均电平。True Peak 表示样本之间估算的最高峰值。两者都很重要，因为提高较安静的来源后可能没有足够余量。",
    },
    {
      type: "paragraph",
      html: "规划器从目标中减去测得的 LUFS，再把修正量加到测得的峰值上。这是清晰的第一步，不是对处理文件的认证。",
    },
    { type: "title", text: "避免虚假的精确度来选择目标", level: 2 },
    {
      type: "paragraph",
      html: "平台预览使用可编辑的目标。它预测较响来源在播放时的降低，但不会模拟每一种编码器或播放器。",
    },
    {
      type: "table",
      headers: ["读数", "修正", "决定"],
      rows: [
        ["-18 LUFS 到 -14 LUFS", "+4 dB", "提高后检查峰值"],
        ["-14.5 LUFS 到 -14 LUFS", "+0.5 dB", "进行对比测量"],
        ["-10 LUFS 到 -14 LUFS", "-4 dB", "降低后重新测量"],
      ],
    },
    { type: "title", text: "峰值警告真正说明什么", level: 2 },
    {
      type: "paragraph",
      html: "如果预测峰值越过警告线，修正可能需要限制器或更小的增益。处理后请重新测量完整节目。",
    },
    {
      type: "tip",
      title: "把修正当作测试指令",
      html: "以可控方式应用变化，在上下文中聆听人声、效果声和音乐，然后检查新的测量值。",
    },
    { type: "title", text: "播出前的实际检查", level: 2 },
    {
      type: "list",
      items: [
        "加载文件或输入可靠的测量值。",
        "同时查看动态、峰值警告和修正量。",
        "检查每个平台可编辑的目标。",
        "导出 WAV 并从头到尾测量结果。",
        "评价人声、音乐和效果声，而不只是一个数字。",
      ],
    },
    {
      type: "paragraph",
      html: "内容类型不会改变计算公式，但会改变复听重点：人声、效果声和音乐需要不同的后续检查。",
    },
    {
      type: "tip",
      title: "规划器无法认证的内容",
      html: "浏览器估算不是 libebur128 或广播测量器的替代品，也不能保证编码器行为或目标平台合规。",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
};
