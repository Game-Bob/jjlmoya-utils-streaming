import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import type { StreamAudioLoudnessLocaleContent } from "../entry";
import type { StreamAudioLoudnessUI } from "../ui";
import { bibliography } from "../bibliography";

const title = "ストリーミング音声ラウドネス目標プランナー";
const description =
  "ゲイン補正、True Peakの余裕、ストリーミング音声の目標ラウドネスを確認します。";
const faq = [
  {
    question: "ゲイン補正とは何ですか？",
    answer:
      "目標LUFSから測定した統合ラウドネスを引いた値です。正の値はゲインを上げ、負の値は下げる目安です。",
  },
  {
    question: "なぜLUFSとTrue Peakを一緒に表示しますか？",
    answer:
      "LUFSは番組の平均レベル、True Peakは推定された最大ピークを示します。両方で補正後の余裕を判断できます。",
  },
  {
    question: "プラットフォーム目標は公式ルールですか？",
    answer:
      "いいえ。編集できる計画用の値です。配信先の最新仕様を必ず確認してください。",
  },
  {
    question: "マイナス1 dBTPの線は何ですか？",
    answer:
      "保守的な警告ラインです。予測ピークが超える場合はリミッターまたは再測定が必要です。",
  },
  {
    question: "ブラウザで音声ファイルを測定できますか？",
    answer:
      "対応ファイルをローカルで解析できます。ただし推定値なので、適合するメーターで確認してください。",
  },
  {
    question: "ピークリスクが出たらどうしますか？",
    answer:
      "番組全体を聴き直し、必要なら透明なリミッターを使います。短い抜粋だけで判断しないでください。",
  },
];
const howTo = [
  {
    name: "ファイルを読み込むか値を入力",
    text: "対応ファイルをドロップするか、完全な測定から統合LUFSとTrue Peakを入力します。",
  },
  {
    name: "ダイナミクスを確認",
    text: "Loudness Rangeとピーク警告を、試聴と再測定のための手がかりとして使います。",
  },
  {
    name: "目標を選ぶ",
    text: "Web、Broadcast、Game Audio、カスタム目標から選び、プラットフォーム値を調整します。",
  },
  {
    name: "出力を確認",
    text: "必要なら安全リミッター付きのWAVをローカル生成し、全体を再測定します。",
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
  offers: { "@type": "Offer", price: "0", priceCurrency: "JPY" },
};
const ui: StreamAudioLoudnessUI = {
  fileAnalysisLabel: "ファイルをローカル解析",
  fileAnalysisHint:
    "音声または動画をここにドロップします。ファイルはこのタブ内に留まります。",
  fileDropLabel: "WAV、MP3、MP4をドロップ",
  fileTypesLabel: "WAV · MP3 · MP4 · WebM",
  fileIdleText: "ファイル未読み込み。手動入力も使えます。",
  fileReadingText: "{name}を読み込み中...",
  fileReadyText: "準備完了: {name}",
  fileErrorText:
    "このブラウザではファイルをデコードできません。WAVまたはMP3を試してください。",
  useAnalysisLabel: "この測定値を使う",
  analysisSummaryLabel: "ブラウザ推定",
  measuredLufsLabel: "測定した統合ラウドネス",
  measuredLufsHint: "瞬間ピークではなく、番組全体の測定値を使います。",
  truePeakLabel: "測定したTrue Peak",
  truePeakHint: "同じ解析のdBTP値を使います。",
  targetProfileLabel: "目標プロファイル",
  targetWebLabel: "Web目安 -14",
  targetBroadcastLabel: "Broadcast -23",
  targetGameLabel: "ゲーム音声 -23",
  targetCustomLabel: "カスタム目標",
  customTargetLabel: "目標ラウドネス",
  contentTypeLabel: "コンテンツ種類",
  contentVoiceLabel: "音声",
  contentGameplayLabel: "ゲームプレイ",
  contentMusicLabel: "音楽",
  sceneLabel: "出力メーター",
  currentLabel: "現在値",
  targetLabel: "目標",
  peakCeilingLabel: "ピーク警告ライン",
  correctionLabel: "ゲイン補正",
  projectedPeakLabel: "予測ピーク",
  headroomLabel: "ピーク余裕",
  stateReady: "確認できます",
  stateBoost: "上げる必要あり",
  stateTrim: "下げる必要あり",
  statePeakRisk: "ピークリスク",
  stateReadyText: "目標に近く、予測ピークは警告ライン未満です。",
  stateBoostText:
    "目標にはゲインが必要です。補正前に予測ピークを確認してください。",
  stateTrimText:
    "測定値が目標より大きい値です。次の書き出し前にゲインを下げます。",
  statePeakRiskText:
    "補正すると警告ラインを超えます。確認せず適用しないでください。",
  guidanceLabel: "次の確認",
  webGuidance:
    "Web目標は計画用の目安で、共通のプラットフォーム規則ではありません。",
  broadcastGuidance:
    "Broadcastはラウドネスの基準であり、配信受入テストではありません。",
  gameGuidance:
    "ゲーム音声は急に変化します。補正後に効果音と音声を別々に確認します。",
  customGuidance: "カスタム目標は配信先の仕様から設定します。",
  voiceGuidance:
    "音声では破裂音、部屋のノイズ、リミッターの呼吸を聴き直します。",
  gameplayGuidance: "ゲームプレイでは急な効果音とボイスチャットを確認します。",
  musicGuidance: "音楽では番組全体のダイナミクスとリミッター動作を確認します。",
  meterAria:
    "マイナス36から0 LUFSのラウドネス目盛り。現在値、目標、マイナス1 dBTPの警告ラインを表示します。",
  resetLabel: "例の値に戻す",
  noteLabel: "モデルを正直に保つ。",
  noteText:
    "解析と書き出しはブラウザ内で行いますが、推定値は適合メーターの代わりにならず、納品前に確認が必要です。",
  lraLabel: "ダイナミクス確認",
  lraWaiting: "ファイルを読み込んで推定",
  lraWide: "広い: 小さい部分を確認",
  lraBalanced: "中程度: 文脈で試聴",
  lraNarrow: "狭い: 圧縮感を確認",
  limiterLabel: "ピークリミッターが必要",
  limiterWaiting: "測定値から計算",
  limiterNone: "追加のピークカットなし",
  limiterRequired: "上限にするには{amount} dB制限",
  platformPreviewLabel: "プラットフォーム表示",
  platformPreviewHint:
    "計画目標を編集できます。負の値は再生時の低下予測で、ファイル変更ではありません。",
  platformTargetLabel: "目標",
  platformTrim: "再生時の低下予測 {amount}",
  platformNoTrim: "低下予測なし",
  outputLabel: "処理済みコピーを作る",
  outputHint:
    "ゲインとブラウザの安全リミッターを適用してWAVを書き出します。結果を再測定してください。",
  outputSettingsLabel: "推奨チェーン",
  obsPresetLabel: "OBS",
  dawPresetLabel: "DAW",
  outputProcessLabel: "WAVをローカル生成",
  outputDownloadLabel: "処理済みWAVをダウンロード",
  outputProcessing: "WAVをローカル生成中...",
  outputWaiting: "ファイルを読み込むと書き出せます。",
  outputReady: "ローカルWAVをダウンロードできます。",
  outputError: "ブラウザでこのファイルを生成できませんでした。",
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
    { type: "title", text: "LUFSとTrue Peakを一緒に読む方法", level: 2 },
    {
      type: "paragraph",
      html: "統合ラウドネスは番組全体の平均レベルを示します。True Peakはサンプル間の最大ピーク推定値です。音量を上げたときの余裕を判断するには両方が必要です。",
    },
    {
      type: "paragraph",
      html: "プランナーは測定LUFSを目標から引き、その補正を測定ピークに加えます。これは確認しやすい初期計算であり、処理済みファイルの認証ではありません。",
    },
    { type: "title", text: "過度な確信を持たずに目標を選ぶ", level: 2 },
    {
      type: "paragraph",
      html: "プラットフォーム表示では目標を編集できます。音量が大きいソースの再生時低下を予測しますが、すべてのコーデックやプレーヤーは再現しません。",
    },
    {
      type: "table",
      headers: ["測定", "補正", "判断"],
      rows: [
        ["-18 LUFSから-14 LUFS", "+4 dB", "上げた後のピークを確認"],
        ["-14.5 LUFSから-14 LUFS", "+0.5 dB", "比較測定を行う"],
        ["-10 LUFSから-14 LUFS", "-4 dB", "下げて再測定"],
      ],
    },
    { type: "title", text: "ピーク警告が示すこと", level: 2 },
    {
      type: "paragraph",
      html: "予測ピークが警告ラインを超える場合、リミッターまたは小さいゲインが必要です。処理後は番組全体を再測定してください。",
    },
    {
      type: "tip",
      title: "補正をテスト指示として使う",
      html: "変更を慎重に適用し、音声、効果音、音楽を文脈の中で聴き、新しい測定値を確認します。",
    },
    { type: "title", text: "配信前の実用チェック", level: 2 },
    {
      type: "list",
      items: [
        "ファイルを読み込むか信頼できる測定値を入力する。",
        "補正と一緒にダイナミクスとピーク警告を見る。",
        "各プラットフォームの編集可能な目標を確認する。",
        "WAVを書き出し、最初から最後まで測定する。",
        "数値だけでなく音声、音楽、効果音を評価する。",
      ],
    },
    {
      type: "paragraph",
      html: "コンテンツの種類は計算式ではなく、聴き直しの観点を変えます。音声、効果音、音楽にはそれぞれ別の確認が必要です。",
    },
    {
      type: "tip",
      title: "このプランナーが保証しないこと",
      html: "ブラウザ推定はlibebur128や放送用メーターの代わりではありません。コーデック動作や配信先への適合を保証しません。",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
};
