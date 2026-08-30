import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import type { StreamAudioLoudnessLocaleContent } from "../entry";
import type { StreamAudioLoudnessUI } from "../ui";
import { bibliography } from "../bibliography";

const title = "Perencana target loudness audio streaming";
const description =
  "Hitung koreksi gain, periksa cadangan True Peak, dan rencanakan target loudness untuk audio streaming.";
const faq = [
  {
    question: "Apa arti koreksi gain?",
    answer:
      "Koreksi adalah target LUFS dikurangi loudness terintegrasi yang terukur. Nilai positif menyarankan kenaikan gain, sedangkan nilai negatif menyarankan penurunan.",
  },
  {
    question: "Mengapa LUFS dan True Peak ditampilkan bersama?",
    answer:
      "LUFS menunjukkan tingkat rata-rata program, sedangkan True Peak menunjukkan puncak tertinggi yang diperkirakan. Keduanya menunjukkan apakah perubahan level masih memiliki cadangan.",
  },
  {
    question: "Apakah target platform ini aturan resmi?",
    answer:
      "Tidak. Ini adalah referensi perencanaan yang dapat diubah. Selalu periksa spesifikasi terbaru dari tujuan Anda.",
  },
  {
    question: "Apa arti garis minus 1 dBTP?",
    answer:
      "Ini adalah ambang peringatan konservatif. Jika puncak proyeksi melewatinya, gunakan limiter atau lakukan pengukuran ulang.",
  },
  {
    question: "Bisakah file audio dianalisis di browser?",
    answer:
      "Bisa. File yang didukung dianalisis secara lokal, tetapi hasilnya adalah perkiraan yang perlu dikonfirmasi dengan meter yang sesuai.",
  },
  {
    question: "Apa yang harus dilakukan saat ada risiko puncak?",
    answer:
      "Dengarkan ulang seluruh program dan gunakan limiter transparan bila perlu. Jangan mengambil keputusan dari cuplikan pendek.",
  },
];
const howTo = [
  {
    name: "Muat file atau masukkan hasil ukur",
    text: "Seret file yang didukung atau masukkan LUFS terintegrasi dan True Peak dari analisis lengkap.",
  },
  {
    name: "Periksa dinamika",
    text: "Gunakan Loudness Range dan peringatan puncak sebagai tanda untuk mendengarkan dan mengukur ulang.",
  },
  {
    name: "Pilih target",
    text: "Pilih Web, Broadcast, Game Audio, atau target khusus lalu ubah nilai per platform.",
  },
  {
    name: "Periksa hasil",
    text: "Buat WAV lokal dengan limiter keamanan bila perlu, lalu ukur hasilnya dari awal sampai akhir.",
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
const ui: StreamAudioLoudnessUI = {
  fileAnalysisLabel: "Analisis file secara lokal",
  fileAnalysisHint:
    "Letakkan audio atau video di sini. File tetap berada di tab browser ini.",
  fileDropLabel: "Letakkan file WAV, MP3, atau MP4",
  fileTypesLabel: "WAV · MP3 · MP4 · WebM",
  fileIdleText: "Belum ada file. Input manual tetap tersedia.",
  fileReadingText: "Membaca {name}...",
  fileReadyText: "Siap: {name}",
  fileErrorText: "Browser ini tidak dapat mendekode file. Coba WAV atau MP3.",
  useAnalysisLabel: "Gunakan hasil ini",
  analysisSummaryLabel: "Perkiraan browser",
  measuredLufsLabel: "Loudness terintegrasi terukur",
  measuredLufsHint: "Gunakan hasil program lengkap, bukan puncak sesaat.",
  truePeakLabel: "True Peak terukur",
  truePeakHint: "Gunakan nilai dBTP dari analisis yang sama.",
  targetProfileLabel: "Profil target",
  targetWebLabel: "Referensi Web -14",
  targetBroadcastLabel: "Broadcast -23",
  targetGameLabel: "Audio game -23",
  targetCustomLabel: "Target khusus",
  customTargetLabel: "Loudness target",
  contentTypeLabel: "Jenis konten",
  contentVoiceLabel: "Suara",
  contentGameplayLabel: "Gameplay",
  contentMusicLabel: "Musik",
  sceneLabel: "Meter emisi",
  currentLabel: "Hasil saat ini",
  targetLabel: "Target",
  peakCeilingLabel: "Garis peringatan puncak",
  correctionLabel: "Koreksi gain",
  projectedPeakLabel: "Puncak proyeksi",
  headroomLabel: "Cadangan puncak",
  stateReady: "Siap diperiksa",
  stateBoost: "Perlu dinaikkan",
  stateTrim: "Perlu diturunkan",
  statePeakRisk: "Risiko puncak",
  stateReadyText:
    "Target sudah dekat dan puncak proyeksi berada di bawah garis peringatan.",
  stateBoostText:
    "Target memerlukan gain lebih besar. Periksa puncak proyeksi sebelum menerapkan koreksi.",
  stateTrimText:
    "Hasil lebih keras daripada target. Turunkan gain sebelum ekspor berikutnya.",
  statePeakRiskText:
    "Koreksi akan melewati garis peringatan. Jangan menerapkannya tanpa pemeriksaan.",
  guidanceLabel: "Pemeriksaan berikutnya",
  webGuidance:
    "Target Web adalah referensi perencanaan, bukan aturan universal.",
  broadcastGuidance:
    "Broadcast adalah referensi loudness, bukan tes penerimaan stream.",
  gameGuidance:
    "Audio game berubah cepat. Periksa efek dan suara secara terpisah setelah perubahan.",
  customGuidance: "Target khusus sebaiknya berasal dari spesifikasi tujuan.",
  voiceGuidance:
    "Untuk suara, dengarkan kembali plosive, noise ruangan, dan napas limiter.",
  gameplayGuidance: "Untuk gameplay, periksa efek mendadak dan voice chat.",
  musicGuidance:
    "Untuk musik, periksa dinamika dan gerakan limiter sepanjang program.",
  meterAria:
    "Skala loudness dari minus 36 hingga 0 LUFS yang menampilkan hasil saat ini, target, dan garis peringatan minus 1 dBTP.",
  resetLabel: "Pulihkan nilai contoh",
  noteLabel: "Jaga model tetap jujur.",
  noteText:
    "Analisis dan ekspor tetap di browser, tetapi hasil perkiraan bukan pengganti meter yang sesuai dan harus diperiksa sebelum pengiriman.",
  lraLabel: "Pemeriksaan dinamika",
  lraWaiting: "Muat file untuk memperkirakan",
  lraWide: "Lebar: periksa bagian pelan",
  lraBalanced: "Sedang: dengarkan dalam konteks",
  lraNarrow: "Sempit: periksa rasa kompresi",
  limiterLabel: "Limiter puncak diperlukan",
  limiterWaiting: "Dihitung dari hasil ukur",
  limiterNone: "Tidak ada pemotongan tambahan",
  limiterRequired: "Batasi {amount} dB untuk mencapai batas",
  platformPreviewLabel: "Pratinjau platform",
  platformPreviewHint:
    "Ubah target perencanaan. Hasil negatif memprediksi trim saat diputar, bukan mengubah file.",
  platformTargetLabel: "Target",
  platformTrim: "Trim pemutaran {amount}",
  platformNoTrim: "Tidak ada trim yang diperkirakan",
  outputLabel: "Buat salinan terproses",
  outputHint:
    "Menerapkan gain dan limiter keamanan browser lalu mengekspor WAV. Ukur ulang hasilnya.",
  outputSettingsLabel: "Rangkaian yang disarankan",
  obsPresetLabel: "OBS",
  dawPresetLabel: "DAW",
  outputProcessLabel: "Render WAV secara lokal",
  outputDownloadLabel: "Unduh WAV terproses",
  outputProcessing: "Merender WAV secara lokal...",
  outputWaiting: "Muat file untuk mengaktifkan ekspor.",
  outputReady: "WAV lokal siap diunduh.",
  outputError: "Browser tidak dapat merender file ini.",
  youtubeLabel: "YouTube",
  spotifyLabel: "Spotify",
  twitchLabel: "Twitch",
  tiktokLabel: "TikTok",
};
export const content: StreamAudioLoudnessLocaleContent = {
  slug: "perencana-target-loudness-audio-streaming",
  title,
  description,
  ui,
  seo: [
    { type: "title", text: "Membaca LUFS dan True Peak bersama", level: 2 },
    {
      type: "paragraph",
      html: "Loudness terintegrasi menjelaskan level rata-rata program lengkap. True Peak menunjukkan puncak tertinggi yang diperkirakan di antara sampel. Keduanya penting karena sumber yang pelan dapat kehabisan cadangan setelah dinaikkan.",
    },
    {
      type: "paragraph",
      html: "Perencana mengurangi LUFS terukur dari target lalu menambahkan koreksi ke puncak. Ini adalah langkah awal yang jelas, bukan sertifikasi file terproses.",
    },
    { type: "title", text: "Memilih target tanpa kepastian palsu", level: 2 },
    {
      type: "paragraph",
      html: "Pratinjau platform memakai target yang dapat diedit. Hasilnya menunjukkan trim pemutaran yang diperkirakan dan tidak meniru setiap codec atau pemutar.",
    },
    {
      type: "table",
      headers: ["Hasil ukur", "Koreksi", "Keputusan"],
      rows: [
        ["-18 LUFS ke -14 LUFS", "+4 dB", "Periksa puncak setelah menaikkan"],
        ["-14.5 LUFS ke -14 LUFS", "+0.5 dB", "Lakukan pengukuran pembanding"],
        ["-10 LUFS ke -14 LUFS", "-4 dB", "Turunkan lalu ukur lagi"],
      ],
    },
    { type: "title", text: "Arti peringatan puncak", level: 2 },
    {
      type: "paragraph",
      html: "Jika puncak proyeksi melewati garis peringatan, koreksi kemungkinan membutuhkan limiter atau gain yang lebih kecil. Ukur ulang seluruh program setelah diproses.",
    },
    {
      type: "tip",
      title: "Jadikan koreksi sebagai instruksi uji",
      html: "Terapkan perubahan dengan terkendali, dengarkan suara, efek, dan musik dalam konteks, lalu periksa pengukuran baru.",
    },
    { type: "title", text: "Pemeriksaan sebelum siaran", level: 2 },
    {
      type: "list",
      items: [
        "Muat file atau masukkan hasil ukur yang tepercaya.",
        "Perhatikan dinamika dan peringatan puncak bersama koreksi.",
        "Periksa target setiap platform yang dapat diedit.",
        "Ekspor WAV dan ukur hasilnya dari awal sampai akhir.",
        "Nilai suara, musik, dan efek, bukan hanya satu angka.",
      ],
    },
    {
      type: "paragraph",
      html: "Jenis konten mengubah pemeriksaan saat mendengarkan, bukan rumusnya: suara, efek, dan musik memerlukan pemeriksaan lanjutan yang berbeda.",
    },
    {
      type: "tip",
      title: "Yang tidak dapat disertifikasi",
      html: "Perkiraan browser bukan pengganti libebur128 atau meter broadcast. Hasil ini tidak menjamin perilaku codec atau kepatuhan tujuan.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
};
