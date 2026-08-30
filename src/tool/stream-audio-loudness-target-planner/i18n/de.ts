import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import type { StreamAudioLoudnessLocaleContent } from "../entry";
import type { StreamAudioLoudnessUI } from "../ui";
import { bibliography } from "../bibliography";

const title = "Planer für Loudnessziele bei Streaming Audio";
const description =
  "Berechne eine Pegelkorrektur, pruefe True Peak Reserven und plane Streaming Ziele fuer Audio.";
const faq = [
  {
    question: "Was bedeutet die Pegelkorrektur?",
    answer:
      "Sie ist das Ziel in LUFS minus der gemessenen integrierten Lautheit. Ein positiver Wert empfiehlt mehr Pegel, ein negativer Wert weniger Pegel.",
  },
  {
    question: "Warum werden LUFS und True Peak zusammen angezeigt?",
    answer:
      "LUFS beschreibt die durchschnittliche Programmlautheit, True Peak die hoechste geschaetzte Spitze. Erst zusammen zeigen sie, ob eine Pegelaenderung genug Reserve laesst.",
  },
  {
    question: "Sind die Plattformziele offizielle Regeln?",
    answer:
      "Nein. Die Werte sind bearbeitbare Planungswerte. Pruefe immer die aktuelle Vorgabe des Zielsystems.",
  },
  {
    question: "Was bedeutet die Linie bei minus 1 dBTP?",
    answer:
      "Sie ist eine konservative Warnschwelle. Ein Ueberschreiten bedeutet, dass die geplante Korrektur eine Begrenzung oder neue Messung braucht.",
  },
  {
    question: "Kann ich eine Datei im Browser analysieren?",
    answer:
      "Ja. Unterstuetzte Audio- und Videodateien werden lokal geschaetzt. Fuer eine Freigabe sollte danach ein konformes Messgeraet verwendet werden.",
  },
  {
    question: "Was mache ich bei einem Peak-Risiko?",
    answer:
      "Pruefe die volle Sendung erneut und setze einen transparenten Limiter ein. Entscheide nicht nur anhand eines kurzen Ausschnitts.",
  },
];
const howTo = [
  {
    name: "Datei laden oder Messwerte eingeben",
    text: "Ziehe eine Datei in den lokalen Bereich oder trage integrierte LUFS und True Peak aus einer vollstaendigen Messung ein.",
  },
  {
    name: "Dynamik und Spitzen pruefen",
    text: "Nutze Loudness Range und Peak-Warnung als Hinweise fuer das Hoeren und die Nachmessung.",
  },
  {
    name: "Ziel waehlen",
    text: "Waehle Web, Broadcast, Game Audio oder ein eigenes Ziel und passe die editierbaren Plattformwerte an.",
  },
  {
    name: "Ausgabe kontrollieren",
    text: "Erzeuge bei Bedarf eine lokale WAV mit Sicherheitslimiter und messe das Ergebnis von Anfang bis Ende erneut.",
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
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
};
const ui: StreamAudioLoudnessUI = {
  fileAnalysisLabel: "Datei lokal analysieren",
  fileAnalysisHint:
    "Audio oder Video hier ablegen. Die Datei bleibt in diesem Browser-Tab.",
  fileDropLabel: "WAV, MP3 oder MP4 ablegen",
  fileTypesLabel: "WAV · MP3 · MP4 · WebM",
  fileIdleText: "Keine Datei geladen. Manuelle Werte funktionieren weiterhin.",
  fileReadingText: "Lese {name}...",
  fileReadyText: "Bereit: {name}",
  fileErrorText:
    "Dieser Browser konnte die Datei nicht dekodieren. Versuche WAV oder MP3.",
  useAnalysisLabel: "Diese Werte verwenden",
  analysisSummaryLabel: "Browser-Schätzung",
  measuredLufsLabel: "Gemessene integrierte Lautheit",
  measuredLufsHint:
    "Verwende eine vollständige Programmmessung, keinen Momentanwert.",
  truePeakLabel: "Gemessener True Peak",
  truePeakHint: "Verwende den dBTP-Wert aus derselben Messung.",
  targetProfileLabel: "Zielprofil",
  targetWebLabel: "Web-Orientierung -14",
  targetBroadcastLabel: "Broadcast -23",
  targetGameLabel: "Game Audio -23",
  targetCustomLabel: "Eigenes Ziel",
  customTargetLabel: "Ziellautheit",
  contentTypeLabel: "Inhaltstyp",
  contentVoiceLabel: "Sprache",
  contentGameplayLabel: "Gameplay",
  contentMusicLabel: "Musik",
  sceneLabel: "Emissionsmesser",
  currentLabel: "Aktueller Wert",
  targetLabel: "Ziel",
  peakCeilingLabel: "Peak-Warnlinie",
  correctionLabel: "Pegelkorrektur",
  projectedPeakLabel: "Prognose Peak",
  headroomLabel: "Peak-Reserve",
  stateReady: "Bereit zur Prüfung",
  stateBoost: "Mehr Pegel nötig",
  stateTrim: "Weniger Pegel nötig",
  statePeakRisk: "Peak-Risiko",
  stateReadyText:
    "Das Ziel liegt nahe und der prognostizierte Peak bleibt unter der Warnlinie.",
  stateBoostText:
    "Das Ziel braucht mehr Pegel. Prüfe den prognostizierten Peak vor der Korrektur.",
  stateTrimText:
    "Der Wert ist lauter als das Ziel. Senke den Pegel vor dem nächsten Export.",
  statePeakRiskText:
    "Die Korrektur würde die Peak-Warnlinie überschreiten. Nicht blind anwenden.",
  guidanceLabel: "Nächster Check",
  webGuidance:
    "Web-Ziele sind Planungswerte und keine universellen Plattformregeln.",
  broadcastGuidance:
    "Broadcast ist ein Standardbezug und kein Test für Streaming-Annahme.",
  gameGuidance:
    "Game Audio ändert sich schnell. Prüfe Effekte und Sprache nach der Korrektur getrennt.",
  customGuidance:
    "Eigene Ziele sollten aus der Spezifikation des Zielsystems stammen.",
  voiceGuidance:
    "Bei Sprache erneut auf Plosive, Raumgeräusche und Limiteratmen hören.",
  gameplayGuidance: "Bei Gameplay plötzliche Effekte und Voice Chat prüfen.",
  musicGuidance:
    "Bei Musik Dynamik und Limiterbewegung über das ganze Programm prüfen.",
  meterAria:
    "Lautheitsskala von minus 36 bis 0 LUFS mit aktuellem Wert, Ziel und Warnlinie bei minus 1 dBTP.",
  resetLabel: "Beispielwerte wiederherstellen",
  noteLabel: "Das Modell ehrlich halten.",
  noteText:
    "Analyse und Export bleiben im Browser. Die Schätzungen ersetzen keinen konformen Meter und müssen vor der Lieferung nachgemessen werden.",
  lraLabel: "Dynamik-Check",
  lraWaiting: "Datei für Schätzung laden",
  lraWide: "Weit: leise Stellen prüfen",
  lraBalanced: "Mittel: im Kontext hören",
  lraNarrow: "Eng: Kompressionsgefühl prüfen",
  limiterLabel: "Peak-Limiter nötig",
  limiterWaiting: "Aus Messwerten berechnet",
  limiterNone: "Kein weiterer Peak-Schnitt",
  limiterRequired: "{amount} dB begrenzen, um das Ziel zu erreichen",
  platformPreviewLabel: "Plattform-Vorschau",
  platformPreviewHint:
    "Planungsziel bearbeiten. Ein negativer Wert sagt eine Wiedergabeabsenkung voraus, keine Dateiänderung.",
  platformTargetLabel: "Ziel",
  platformTrim: "Wiedergabe minus {amount}",
  platformNoTrim: "Keine Absenkung erwartet",
  outputLabel: "Bearbeitete Kopie erstellen",
  outputHint:
    "Wendet Pegel und Browser-Sicherheitslimiter an und exportiert WAV. Ergebnis nachmessen.",
  outputSettingsLabel: "Vorgeschlagene Kette",
  obsPresetLabel: "OBS",
  dawPresetLabel: "DAW",
  outputProcessLabel: "WAV lokal rendern",
  outputDownloadLabel: "Bearbeitete WAV laden",
  outputProcessing: "WAV wird lokal gerendert...",
  outputWaiting: "Datei laden, um den Export zu aktivieren.",
  outputReady: "Die lokale WAV ist bereit.",
  outputError: "Der Browser konnte diese Datei nicht rendern.",
  youtubeLabel: "YouTube",
  spotifyLabel: "Spotify",
  twitchLabel: "Twitch",
  tiktokLabel: "TikTok",
};
export const content: StreamAudioLoudnessLocaleContent = {
  slug: "stream-audio-loudness-zielplaner",
  title,
  description,
  ui,
  seo: [
    { type: "title", text: "LUFS und True Peak gemeinsam lesen", level: 2 },
    {
      type: "paragraph",
      html: "Integrierte Lautheit beschreibt den Durchschnitt eines vollstaendigen Programms. True Peak zeigt die hoechste geschaetzte Spitze zwischen Samples. Beide Werte sind noetig, weil eine leise Mischung nach einer Anhebung trotzdem zu Spitzen fuehren kann.",
    },
    {
      type: "paragraph",
      html: "Der Planer zieht den Messwert vom Ziel ab und addiert die Korrektur zum Peak. Das ist ein nachvollziehbarer erster Schritt, aber keine Freigabe fuer die bearbeitete Datei.",
    },
    { type: "title", text: "Ziele ohne falsche Sicherheit waehlen", level: 2 },
    {
      type: "paragraph",
      html: "Die Plattformvorschau arbeitet mit editierbaren Planungszielen. Sie zeigt eine erwartete Absenkung bei lauteren Programmen und simuliert weder Codec noch konkreten Player.",
    },
    {
      type: "table",
      headers: ["Messung", "Korrektur", "Aktion"],
      rows: [
        ["-18 LUFS zu -14 LUFS", "+4 dB", "Peak nach der Anhebung pruefen"],
        ["-14.5 LUFS zu -14 LUFS", "+0.5 dB", "Vergleichsmessung durchfuehren"],
        ["-10 LUFS zu -14 LUFS", "-4 dB", "Pegel senken und neu messen"],
      ],
    },
    { type: "title", text: "Was der Peak Hinweis bedeutet", level: 2 },
    {
      type: "paragraph",
      html: "Wenn der prognostizierte Peak die Warnlinie ueberschreitet, braucht die Korrektur wahrscheinlich einen Limiter oder weniger Gain. Nach jedem Prozess sollte das komplette Programm neu gemessen werden.",
    },
    {
      type: "tip",
      title: "Korrektur als Testanweisung verwenden",
      html: "Wende den Wert zuerst als kontrollierte Aenderung an. Hoere danach Sprache, Effekte und Musik im Zusammenhang und pruefe die neue Messung.",
    },
    { type: "title", text: "Praktischer Check vor dem Livegang", level: 2 },
    {
      type: "list",
      items: [
        "Datei laden oder vertrauenswuerdige Messwerte eingeben.",
        "Dynamikbereich und Peak Warnung gemeinsam betrachten.",
        "Zielwerte fuer die konkrete Ausgabe pruefen.",
        "WAV exportieren und das Ergebnis vollstaendig nachmessen.",
        "Nicht nur eine Zahl, sondern Sprache, Musik und Effekte beurteilen.",
      ],
    },
    {
      type: "paragraph",
      html: "Der Inhaltstyp ändert die Hörkontrolle, nicht die Grundrechnung: Stimme, Effekte und Musik brauchen jeweils andere Nachkontrollen.",
    },
    {
      type: "tip",
      title: "Was der Planer nicht bestaetigt",
      html: "Die Browser-Schaetzung ist kein Ersatz fuer libebur128 oder einen Broadcast Meter. Sie garantiert weder Codec-Verhalten noch Plattformkonformitaet.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
};
