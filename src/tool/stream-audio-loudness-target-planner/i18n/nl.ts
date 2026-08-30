import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import type { StreamAudioLoudnessLocaleContent } from "../entry";
import type { StreamAudioLoudnessUI } from "../ui";
import { bibliography } from "../bibliography";

const title = "Planner voor loudnessdoelen van streaming audio";
const description =
  "Bereken gaincorrectie, controleer de True Peak reserve en plan loudnessdoelen voor streaming audio.";
const faq = [
  {
    question: "Wat betekent de gaincorrectie?",
    answer:
      "Dit is het doel in LUFS min de gemeten geïntegreerde loudness. Een positieve waarde betekent gain verhogen, een negatieve waarde gain verlagen.",
  },
  {
    question: "Waarom staan LUFS en True Peak samen?",
    answer:
      "LUFS beschrijft het gemiddelde niveau van het programma en True Peak de hoogst geschatte piek. Samen tonen ze of een niveaubeweging voldoende reserve laat.",
  },
  {
    question: "Zijn de platformdoelen officiële regels?",
    answer:
      "Nee. Het zijn aanpasbare planningswaarden. Controleer altijd de actuele specificatie van je bestemming.",
  },
  {
    question: "Wat betekent de lijn bij min 1 dBTP?",
    answer:
      "Dit is een voorzichtige waarschuwingsdrempel. Als de verwachte piek erover gaat, is limiting of opnieuw meten nodig.",
  },
  {
    question: "Kan ik een audiobestand in de browser analyseren?",
    answer:
      "Ja. Ondersteunde bestanden worden lokaal geanalyseerd, maar het resultaat is een schatting die je met een geschikte meter moet controleren.",
  },
  {
    question: "Wat doe ik bij piekrisico?",
    answer:
      "Luister het volledige programma opnieuw en gebruik zo nodig een transparante limiter. Beslis niet op basis van een kort fragment.",
  },
];
const howTo = [
  {
    name: "Laad een bestand of voer waarden in",
    text: "Sleep een ondersteund bestand naar het vak of voer geïntegreerde LUFS en True Peak uit een volledige analyse in.",
  },
  {
    name: "Controleer de dynamiek",
    text: "Gebruik Loudness Range en de piekwaarschuwing als signalen om te luisteren en opnieuw te meten.",
  },
  {
    name: "Kies het doel",
    text: "Kies Web, Broadcast, Game Audio of een eigen doel en pas de platformwaarden aan.",
  },
  {
    name: "Controleer de uitvoer",
    text: "Maak indien nodig lokaal een WAV met veiligheidslimiter en meet het resultaat volledig opnieuw.",
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
  fileAnalysisLabel: "Bestand lokaal analyseren",
  fileAnalysisHint:
    "Zet audio of video hier neer. Het bestand blijft in dit browsertabblad.",
  fileDropLabel: "Zet een WAV, MP3 of MP4 neer",
  fileTypesLabel: "WAV · MP3 · MP4 · WebM",
  fileIdleText: "Geen bestand geladen. Handmatige invoer blijft beschikbaar.",
  fileReadingText: "Leest {name}...",
  fileReadyText: "Klaar: {name}",
  fileErrorText:
    "Deze browser kon het bestand niet decoderen. Probeer WAV of MP3.",
  useAnalysisLabel: "Deze metingen gebruiken",
  analysisSummaryLabel: "Browserschatting",
  measuredLufsLabel: "Gemeten geïntegreerde loudness",
  measuredLufsHint:
    "Gebruik een meting van het volledige programma, geen momentpiek.",
  truePeakLabel: "Gemeten True Peak",
  truePeakHint: "Gebruik de dBTP waarde uit dezelfde analyse.",
  targetProfileLabel: "Doelprofiel",
  targetWebLabel: "Web richtwaarde -14",
  targetBroadcastLabel: "Broadcast -23",
  targetGameLabel: "Game audio -23",
  targetCustomLabel: "Eigen doel",
  customTargetLabel: "Doelloudness",
  contentTypeLabel: "Contenttype",
  contentVoiceLabel: "Stem",
  contentGameplayLabel: "Gameplay",
  contentMusicLabel: "Muziek",
  sceneLabel: "Emissiemeter",
  currentLabel: "Huidige meting",
  targetLabel: "Doel",
  peakCeilingLabel: "Piekwaarschuwingslijn",
  correctionLabel: "Gaincorrectie",
  projectedPeakLabel: "Verwachte piek",
  headroomLabel: "Piekreserve",
  stateReady: "Klaar om te controleren",
  stateBoost: "Meer gain nodig",
  stateTrim: "Minder gain nodig",
  statePeakRisk: "Piekrisico",
  stateReadyText:
    "Het doel ligt dichtbij en de verwachte piek blijft onder de waarschuwingslijn.",
  stateBoostText:
    "Het doel vraagt meer gain. Controleer de verwachte piek voordat je de correctie toepast.",
  stateTrimText:
    "De meting is luider dan het doel. Verlaag gain voor de volgende export.",
  statePeakRiskText:
    "De correctie overschrijdt de waarschuwingslijn. Pas haar niet blind toe.",
  guidanceLabel: "Volgende controle",
  webGuidance:
    "Webdoelen zijn planningswaarden, geen universele platformregels.",
  broadcastGuidance:
    "Broadcast is een loudnessreferentie, geen acceptatietest voor een stream.",
  gameGuidance:
    "Game audio verandert snel. Controleer effecten en stem apart na de wijziging.",
  customGuidance:
    "Eigen doelen horen uit de specificatie van de bestemming te komen.",
  voiceGuidance:
    "Luister bij stem opnieuw naar plosieven, kamerruis en limiterademhaling.",
  gameplayGuidance:
    "Controleer bij gameplay plotselinge effecten en voicechat.",
  musicGuidance:
    "Controleer bij muziek dynamiek en limiterbeweging over het hele programma.",
  meterAria:
    "Loudnessschaal van min 36 tot 0 LUFS met huidige meting, doel en waarschuwingslijn op min 1 dBTP.",
  resetLabel: "Voorbeeldwaarden herstellen",
  noteLabel: "Houd het model eerlijk.",
  noteText:
    "Analyse en export blijven in de browser, maar de schattingen vervangen geen conforme meter en moeten voor levering opnieuw worden gecontroleerd.",
  lraLabel: "Dynamiekcontrole",
  lraWaiting: "Laad een bestand voor een schatting",
  lraWide: "Breed: stille delen controleren",
  lraBalanced: "Gemiddeld: in context beluisteren",
  lraNarrow: "Smal: compressiegevoel controleren",
  limiterLabel: "Pieklimiter nodig",
  limiterWaiting: "Berekend uit de metingen",
  limiterNone: "Geen extra piekverlaging",
  limiterRequired: "Beperk {amount} dB om het plafond te halen",
  platformPreviewLabel: "Platformvoorbeeld",
  platformPreviewHint:
    "Bewerk het planningsdoel. Een negatieve uitkomst voorspelt afspeelverlaging, geen wijziging van het bestand.",
  platformTargetLabel: "Doel",
  platformTrim: "Afspeelverlaging {amount}",
  platformNoTrim: "Geen verlaging verwacht",
  outputLabel: "Een verwerkte kopie maken",
  outputHint:
    "Past gain en een browserveiligheidslimiter toe en exporteert WAV. Meet het resultaat opnieuw.",
  outputSettingsLabel: "Voorgestelde keten",
  obsPresetLabel: "OBS",
  dawPresetLabel: "DAW",
  outputProcessLabel: "WAV lokaal renderen",
  outputDownloadLabel: "Verwerkte WAV downloaden",
  outputProcessing: "WAV wordt lokaal gerenderd...",
  outputWaiting: "Laad een bestand om export te activeren.",
  outputReady: "Je lokale WAV is klaar.",
  outputError: "De browser kon dit bestand niet renderen.",
  youtubeLabel: "YouTube",
  spotifyLabel: "Spotify",
  twitchLabel: "Twitch",
  tiktokLabel: "TikTok",
};
export const content: StreamAudioLoudnessLocaleContent = {
  slug: "planner-loudnessdoelen-streaming-audio",
  title,
  description,
  ui,
  seo: [
    { type: "title", text: "LUFS en True Peak samen lezen", level: 2 },
    {
      type: "paragraph",
      html: "Geïntegreerde loudness beschrijft het gemiddelde niveau van een volledig programma. True Peak toont de hoogst geschatte piek tussen samples. Beide zijn nodig omdat een stille bron na een verhoging toch pieken zonder reserve kan krijgen.",
    },
    {
      type: "paragraph",
      html: "De planner trekt de gemeten LUFS van het doel af en telt die correctie op bij de gemeten piek. Dat is een controleerbare eerste stap, geen certificering van het verwerkte bestand.",
    },
    { type: "title", text: "Een doel kiezen zonder schijnzekerheid", level: 2 },
    {
      type: "paragraph",
      html: "Het platformvoorbeeld gebruikt aanpasbare doelen. Het voorspelt afspeelverlaging voor luidere bronnen en bootst geen specifieke codec of speler na.",
    },
    {
      type: "table",
      headers: ["Meting", "Correctie", "Beslissing"],
      rows: [
        ["-18 LUFS naar -14 LUFS", "+4 dB", "Piek na verhogen controleren"],
        ["-14.5 LUFS naar -14 LUFS", "+0.5 dB", "Een vergelijkingsmeting doen"],
        ["-10 LUFS naar -14 LUFS", "-4 dB", "Verlagen en opnieuw meten"],
      ],
    },
    { type: "title", text: "Wat de piekwaarschuwing zegt", level: 2 },
    {
      type: "paragraph",
      html: "Als de verwachte piek de waarschuwingslijn overschrijdt, heb je waarschijnlijk een limiter of minder gain nodig. Meet het volledige programma na verwerking opnieuw.",
    },
    {
      type: "tip",
      title: "Gebruik de correctie als testinstructie",
      html: "Pas de wijziging gecontroleerd toe, luister daarna naar stem, effecten en muziek in context en controleer de nieuwe meting.",
    },
    { type: "title", text: "Praktische controle voor livegang", level: 2 },
    {
      type: "list",
      items: [
        "Laad het bestand of voer betrouwbare metingen in.",
        "Bekijk dynamiek en piekwaarschuwing samen met de correctie.",
        "Controleer de aanpasbare doelen per platform.",
        "Exporteer WAV en meet het resultaat van begin tot eind.",
        "Beoordeel stem, muziek en effecten, niet alleen een getal.",
      ],
    },
    {
      type: "paragraph",
      html: "Het contenttype verandert de luistercontrole, niet de berekening: stem, effecten en muziek vragen elk een andere controle.",
    },
    {
      type: "tip",
      title: "Wat deze planner niet certificeert",
      html: "De browserschatting vervangt libebur128 of een broadcastmeter niet. Codecgedrag en naleving van een bestemming zijn niet gegarandeerd.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
};
