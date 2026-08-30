import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import type { StreamAudioLoudnessLocaleContent } from "../entry";
import type { StreamAudioLoudnessUI } from "../ui";
import { bibliography } from "../bibliography";

const title = "Yayın ses yüksekliği hedef planlayıcısı";
const description =
  "Kazanç düzeltmesini hesaplayın, True Peak payını kontrol edin ve yayın sesi için hedef belirleyin.";
const faq = [
  {
    question: "Kazanç düzeltmesi ne anlama gelir?",
    answer:
      "Ölçülen entegre ses yüksekliğinin hedeften çıkarılmasıdır. Pozitif değer kazancı artırmayı, negatif değer azaltmayı önerir.",
  },
  {
    question: "LUFS ve True Peak neden birlikte gösterilir?",
    answer:
      "LUFS programın ortalama seviyesini, True Peak ise tahmin edilen en yüksek tepeyi gösterir. Birlikte düzeltme sonrası payı görürsünüz.",
  },
  {
    question: "Platform hedefleri resmi kurallar mı?",
    answer:
      "Hayır. Bunlar düzenlenebilir planlama değerleridir. Hedefin güncel teknik şartlarını her zaman kontrol edin.",
  },
  {
    question: "Eksi 1 dBTP çizgisi ne demektir?",
    answer:
      "Temkinli bir uyarı eşiğidir. Tahmini tepe bunu aşarsa sınırlama veya yeniden ölçüm gerekir.",
  },
  {
    question: "Tarayıcıda ses dosyası analiz edebilir miyim?",
    answer:
      "Evet. Desteklenen dosyalar yerel olarak analiz edilir, ancak sonuç bir tahmindir ve uygun bir ölçerle doğrulanmalıdır.",
  },
  {
    question: "Tepe riski çıktığında ne yapmalıyım?",
    answer:
      "Programın tamamını yeniden dinleyin ve gerekirse şeffaf bir limiter kullanın. Kararı kısa bir parçaya göre vermeyin.",
  },
];
const howTo = [
  {
    name: "Dosya yükleyin veya ölçüm girin",
    text: "Desteklenen bir dosyayı bırakın ya da tam analizden gelen entegre LUFS ve True Peak değerlerini yazın.",
  },
  {
    name: "Dinamiği kontrol edin",
    text: "Loudness Range ve tepe uyarısını dinleme ve yeniden ölçüm için ipucu olarak kullanın.",
  },
  {
    name: "Hedefi seçin",
    text: "Web, Broadcast, Game Audio veya özel hedef seçin ve platform değerlerini düzenleyin.",
  },
  {
    name: "Çıktıyı doğrulayın",
    text: "Gerekirse güvenlik limiteri içeren yerel WAV oluşturun ve sonucu baştan sona yeniden ölçün.",
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
  offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
};
const ui: StreamAudioLoudnessUI = {
  fileAnalysisLabel: "Dosyayı yerel olarak analiz et",
  fileAnalysisHint:
    "Ses veya videoyu buraya bırakın. Dosya bu tarayıcı sekmesinde kalır.",
  fileDropLabel: "WAV, MP3 veya MP4 bırakın",
  fileTypesLabel: "WAV · MP3 · MP4 · WebM",
  fileIdleText: "Dosya yüklenmedi. Manuel giriş hâlâ kullanılabilir.",
  fileReadingText: "{name} okunuyor...",
  fileReadyText: "Hazır: {name}",
  fileErrorText: "Tarayıcı bu dosyayı çözemedi. WAV veya MP3 deneyin.",
  useAnalysisLabel: "Bu ölçümleri kullan",
  analysisSummaryLabel: "Tarayıcı tahmini",
  measuredLufsLabel: "Ölçülen entegre ses yüksekliği",
  measuredLufsHint: "Anlık tepe yerine tam program ölçümünü kullanın.",
  truePeakLabel: "Ölçülen True Peak",
  truePeakHint: "Aynı analizdeki dBTP değerini kullanın.",
  targetProfileLabel: "Hedef profili",
  targetWebLabel: "Web rehberi -14",
  targetBroadcastLabel: "Broadcast -23",
  targetGameLabel: "Oyun sesi -23",
  targetCustomLabel: "Özel hedef",
  customTargetLabel: "Hedef ses yüksekliği",
  contentTypeLabel: "İçerik türü",
  contentVoiceLabel: "Konuşma",
  contentGameplayLabel: "Gameplay",
  contentMusicLabel: "Müzik",
  sceneLabel: "Yayın ölçeri",
  currentLabel: "Güncel ölçüm",
  targetLabel: "Hedef",
  peakCeilingLabel: "Tepe uyarı çizgisi",
  correctionLabel: "Kazanç düzeltmesi",
  projectedPeakLabel: "Tahmini tepe",
  headroomLabel: "Tepe payı",
  stateReady: "Kontrole hazır",
  stateBoost: "Artırılmalı",
  stateTrim: "Azaltılmalı",
  statePeakRisk: "Tepe riski",
  stateReadyText: "Hedef yakın ve tahmini tepe uyarı çizgisinin altında.",
  stateBoostText:
    "Hedef daha fazla kazanç istiyor. Düzeltmeden önce tahmini tepeyi kontrol edin.",
  stateTrimText:
    "Ölçüm hedeften daha yüksek. Sonraki dışa aktarmadan önce kazancı azaltın.",
  statePeakRiskText:
    "Düzeltme uyarı çizgisini aşacak. Kontrol etmeden uygulamayın.",
  guidanceLabel: "Sonraki kontrol",
  webGuidance:
    "Web hedefleri planlama rehberidir, evrensel platform kuralları değildir.",
  broadcastGuidance:
    "Broadcast bir ses yüksekliği referansıdır, yayın kabul testi değildir.",
  gameGuidance:
    "Oyun sesi hızlı değişir. Düzeltmeden sonra efekt ve konuşmayı ayrı kontrol edin.",
  customGuidance: "Özel hedefler hedefin teknik şartlarından alınmalıdır.",
  voiceGuidance:
    "Konuşmada patlamalı sesleri, oda gürültüsünü ve limiter nefesini yeniden dinleyin.",
  gameplayGuidance:
    "Gameplay için ani efektleri ve sesli sohbeti kontrol edin.",
  musicGuidance:
    "Müzikte tüm program boyunca dinamiği ve limiter hareketini kontrol edin.",
  meterAria:
    "Güncel ölçümü, hedefi ve eksi 1 dBTP uyarı çizgisini gösteren eksi 36 ile 0 LUFS arası ses yüksekliği ölçeği.",
  resetLabel: "Örnek değerleri geri yükle",
  noteLabel: "Modeli dürüst tutun.",
  noteText:
    "Analiz ve dışa aktarma tarayıcıda kalır, ancak tahminler uyumlu bir ölçerin yerini tutmaz ve teslimden önce doğrulanmalıdır.",
  lraLabel: "Dinamik kontrolü",
  lraWaiting: "Tahmin için dosya yükleyin",
  lraWide: "Geniş: sessiz kısımları kontrol edin",
  lraBalanced: "Orta: bağlam içinde dinleyin",
  lraNarrow: "Dar: sıkıştırma hissini kontrol edin",
  limiterLabel: "Tepe limiteri gerekli",
  limiterWaiting: "Ölçümlerden hesaplandı",
  limiterNone: "Ek tepe kesintisi yok",
  limiterRequired: "Tavana ulaşmak için {amount} dB sınırla",
  platformPreviewLabel: "Platform önizlemesi",
  platformPreviewHint:
    "Planlama hedefini düzenleyin. Negatif sonuç oynatmada azalmayı öngörür, dosyayı değiştirmez.",
  platformTargetLabel: "Hedef",
  platformTrim: "Öngörülen oynatma azalması {amount}",
  platformNoTrim: "Azalma öngörülmüyor",
  outputLabel: "İşlenmiş kopya oluştur",
  outputHint:
    "Kazanç ve tarayıcı güvenlik limiteri uygular, ardından WAV dışa aktarır. Sonucu yeniden ölçün.",
  outputSettingsLabel: "Önerilen zincir",
  obsPresetLabel: "OBS",
  dawPresetLabel: "DAW",
  outputProcessLabel: "WAV dosyasını yerel oluştur",
  outputDownloadLabel: "İşlenmiş WAV indir",
  outputProcessing: "WAV yerel olarak işleniyor...",
  outputWaiting: "Dışa aktarmayı açmak için dosya yükleyin.",
  outputReady: "Yerel WAV indirilmeye hazır.",
  outputError: "Tarayıcı bu dosyayı işleyemedi.",
  youtubeLabel: "YouTube",
  spotifyLabel: "Spotify",
  twitchLabel: "Twitch",
  tiktokLabel: "TikTok",
};
export const content: StreamAudioLoudnessLocaleContent = {
  slug: "yayin-ses-yuksekligi-hedef-planlayici",
  title,
  description,
  ui,
  seo: [
    {
      type: "title",
      text: "LUFS ve True Peak birlikte nasıl okunur",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Entegre ses yüksekliği tam programın ortalama seviyesini anlatır. True Peak örnekler arasındaki tahmini en yüksek tepeyi gösterir. Seviyeyi artırdıktan sonraki payı anlamak için ikisi de gereklidir.",
    },
    {
      type: "paragraph",
      html: "Planlayıcı ölçülen LUFS değerini hedeften çıkarır ve düzeltmeyi ölçülen tepeye ekler. Bu anlaşılır bir ilk hesaptır, işlenmiş dosya sertifikası değildir.",
    },
    { type: "title", text: "Yanlış kesinlik olmadan hedef seçme", level: 2 },
    {
      type: "paragraph",
      html: "Platform önizlemesi düzenlenebilir hedefler kullanır. Daha yüksek bir kaynağın oynatma azalmasını öngörür, ancak her codec veya oynatıcıyı taklit etmez.",
    },
    {
      type: "table",
      headers: ["Ölçüm", "Düzeltme", "Karar"],
      rows: [
        [
          "-18 LUFS ile -14 LUFS",
          "+4 dB",
          "Artırdıktan sonra tepeyi kontrol edin",
        ],
        ["-14.5 LUFS ile -14 LUFS", "+0.5 dB", "Karşılaştırma ölçümü yapın"],
        ["-10 LUFS ile -14 LUFS", "-4 dB", "Azaltın ve yeniden ölçün"],
      ],
    },
    { type: "title", text: "Tepe uyarısı ne anlatır", level: 2 },
    {
      type: "paragraph",
      html: "Tahmini tepe uyarı çizgisini geçerse düzeltme muhtemelen limiter veya daha az kazanç ister. İşlemeden sonra tam programı yeniden ölçün.",
    },
    {
      type: "tip",
      title: "Düzeltmeyi test talimatı gibi kullanın",
      html: "Değişikliği kontrollü uygulayın, konuşma, efekt ve müziği bağlam içinde dinleyin, ardından yeni ölçümü kontrol edin.",
    },
    { type: "title", text: "Yayın öncesi pratik kontrol", level: 2 },
    {
      type: "list",
      items: [
        "Dosyayı yükleyin veya güvenilir ölçümler girin.",
        "Düzeltmeyle birlikte dinamik ve tepe uyarısını inceleyin.",
        "Her platformun düzenlenebilir hedefini kontrol edin.",
        "WAV dışa aktarın ve sonucu baştan sona ölçün.",
        "Sadece bir sayıyı değil, konuşma, müzik ve efektleri değerlendirin.",
      ],
    },
    {
      type: "paragraph",
      html: "İçerik türü hesabı değil, dinleme kontrolünü değiştirir: konuşma, efektler ve müzik farklı kontroller gerektirir.",
    },
    {
      type: "tip",
      title: "Planlayıcının doğrulayamayacağı şeyler",
      html: "Tarayıcı tahmini libebur128 veya broadcast ölçerinin yerini tutmaz. Codec davranışını ya da hedefe uyumu garanti etmez.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
};
