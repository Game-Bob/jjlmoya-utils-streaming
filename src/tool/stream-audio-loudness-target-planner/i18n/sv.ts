import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import type { StreamAudioLoudnessLocaleContent } from "../entry";
import type { StreamAudioLoudnessUI } from "../ui";
import { bibliography } from "../bibliography";

const title = "Planerare för loudnessmål för strömmande ljud";
const description =
  "Beräkna gainkorrigering, kontrollera True Peak-marginal och planera loudnessmål för strömmande ljud.";
const faq = [
  {
    question: "Vad betyder gainkorrigeringen?",
    answer:
      "Det är målet i LUFS minus den uppmätta integrerade loudnessnivån. Ett positivt värde höjer gain och ett negativt värde sänker den.",
  },
  {
    question: "Varför visas LUFS och True Peak tillsammans?",
    answer:
      "LUFS visar programmets genomsnittsnivå och True Peak den högsta uppskattade toppen. Tillsammans visar de marginalen efter korrigering.",
  },
  {
    question: "Är plattformsmålen officiella regler?",
    answer:
      "Nej. De är redigerbara planeringsvärden. Kontrollera alltid den aktuella specifikationen för destinationen.",
  },
  {
    question: "Vad betyder linjen vid minus 1 dBTP?",
    answer:
      "Det är en försiktig varningsgräns. Om den beräknade toppen går över behövs begränsning eller en ny mätning.",
  },
  {
    question: "Kan jag analysera en ljudfil i webbläsaren?",
    answer:
      "Ja. Kompatibla filer analyseras lokalt, men resultatet är en uppskattning som bör kontrolleras med en lämplig mätare.",
  },
  {
    question: "Vad gör jag vid topp-risk?",
    answer:
      "Lyssna på hela programmet igen och använd en transparent limiter vid behov. Bedöm inte bara ett kort utdrag.",
  },
];
const howTo = [
  {
    name: "Ladda fil eller skriv in mätvärden",
    text: "Släpp en fil som stöds eller skriv in integrerad LUFS och True Peak från en fullständig analys.",
  },
  {
    name: "Kontrollera dynamiken",
    text: "Använd Loudness Range och toppvarningen som signaler för lyssning och ny mätning.",
  },
  {
    name: "Välj mål",
    text: "Välj Web, Broadcast, Game Audio eller ett eget mål och justera plattformsvärdena.",
  },
  {
    name: "Kontrollera resultatet",
    text: "Skapa vid behov en lokal WAV med säkerhetslimiter och mät hela resultatet igen.",
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
  offers: { "@type": "Offer", price: "0", priceCurrency: "SEK" },
};
const ui: StreamAudioLoudnessUI = {
  fileAnalysisLabel: "Analysera fil lokalt",
  fileAnalysisHint:
    "Släpp ljud eller video här. Filen stannar i den här webbläsarfliken.",
  fileDropLabel: "Släpp en WAV-, MP3- eller MP4-fil",
  fileTypesLabel: "WAV · MP3 · MP4 · WebM",
  fileIdleText: "Ingen fil laddad. Manuell inmatning fungerar fortfarande.",
  fileReadingText: "Läser {name}...",
  fileReadyText: "Klar: {name}",
  fileErrorText: "Webbläsaren kunde inte avkoda filen. Prova WAV eller MP3.",
  useAnalysisLabel: "Använd dessa mätvärden",
  analysisSummaryLabel: "Webbläsarens uppskattning",
  measuredLufsLabel: "Uppmätt integrerad loudness",
  measuredLufsHint:
    "Använd ett mätvärde för hela programmet, inte en momentan topp.",
  truePeakLabel: "Uppmätt True Peak",
  truePeakHint: "Använd dBTP-värdet från samma analys.",
  targetProfileLabel: "Målprofil",
  targetWebLabel: "Webbriktvärde -14",
  targetBroadcastLabel: "Broadcast -23",
  targetGameLabel: "Spel-ljud -23",
  targetCustomLabel: "Eget mål",
  customTargetLabel: "Loudnessmål",
  contentTypeLabel: "Innehållstyp",
  contentVoiceLabel: "Tal",
  contentGameplayLabel: "Gameplay",
  contentMusicLabel: "Musik",
  sceneLabel: "Emissionsmätare",
  currentLabel: "Aktuellt mätvärde",
  targetLabel: "Mål",
  peakCeilingLabel: "Varningslinje för topp",
  correctionLabel: "Gainkorrigering",
  projectedPeakLabel: "Beräknad topp",
  headroomLabel: "Toppmarginal",
  stateReady: "Klar att kontrollera",
  stateBoost: "Behöver höjas",
  stateTrim: "Behöver sänkas",
  statePeakRisk: "Topp-risk",
  stateReadyText:
    "Målet ligger nära och den beräknade toppen är under varningslinjen.",
  stateBoostText:
    "Målet behöver mer gain. Kontrollera den beräknade toppen innan du korrigerar.",
  stateTrimText: "Mätvärdet är högre än målet. Sänk gain före nästa export.",
  statePeakRiskText:
    "Korrigeringen passerar varningslinjen. Tillämpa den inte utan kontroll.",
  guidanceLabel: "Nästa kontroll",
  webGuidance:
    "Webbmål är planeringsvärden, inte universella plattformsregler.",
  broadcastGuidance:
    "Broadcast är en loudnessreferens, inte ett godkännandetest för streamen.",
  gameGuidance:
    "Spelljud förändras snabbt. Kontrollera effekter och tal separat efter ändringen.",
  customGuidance: "Egna mål bör komma från destinationens specifikation.",
  voiceGuidance:
    "För tal: lyssna igen efter klusiler, rumsbrus och limiterns andning.",
  gameplayGuidance:
    "För gameplay: kontrollera plötsliga effekter och röstchatt.",
  musicGuidance:
    "För musik: kontrollera dynamik och limiterarbete genom hela programmet.",
  meterAria:
    "Loudnessskala från minus 36 till 0 LUFS som visar aktuellt värde, mål och varningslinje vid minus 1 dBTP.",
  resetLabel: "Återställ exempelvärden",
  noteLabel: "Håll modellen ärlig.",
  noteText:
    "Analys och export sker i webbläsaren, men uppskattningarna ersätter inte en kompatibel mätare och måste kontrolleras före leverans.",
  lraLabel: "Dynamikkontroll",
  lraWaiting: "Ladda en fil för uppskattning",
  lraWide: "Bred: kontrollera tysta delar",
  lraBalanced: "Måttlig: lyssna i sammanhang",
  lraNarrow: "Smal: kontrollera kompressionskänslan",
  limiterLabel: "Topplimiter behövs",
  limiterWaiting: "Beräknas från mätvärdena",
  limiterNone: "Ingen extra toppsänkning",
  limiterRequired: "Begränsa {amount} dB för att nå taket",
  platformPreviewLabel: "Plattformsförhandsvisning",
  platformPreviewHint:
    "Redigera planeringsmålet. Ett negativt resultat förutspår sänkning vid uppspelning, inte en filändring.",
  platformTargetLabel: "Mål",
  platformTrim: "Förutspådd sänkning {amount}",
  platformNoTrim: "Ingen sänkning förutspås",
  outputLabel: "Skapa en bearbetad kopia",
  outputHint:
    "Använder gain och webbläsarens säkerhetslimiter och exporterar WAV. Mät resultatet igen.",
  outputSettingsLabel: "Föreslagen kedja",
  obsPresetLabel: "OBS",
  dawPresetLabel: "DAW",
  outputProcessLabel: "Rendera WAV lokalt",
  outputDownloadLabel: "Ladda ner bearbetad WAV",
  outputProcessing: "Renderar WAV lokalt...",
  outputWaiting: "Ladda en fil för att aktivera export.",
  outputReady: "Din lokala WAV är klar.",
  outputError: "Webbläsaren kunde inte rendera filen.",
  youtubeLabel: "YouTube",
  spotifyLabel: "Spotify",
  twitchLabel: "Twitch",
  tiktokLabel: "TikTok",
};
export const content: StreamAudioLoudnessLocaleContent = {
  slug: "planerare-loudnessmal-streaming-ljud",
  title,
  description,
  ui,
  seo: [
    {
      type: "title",
      text: "Så läser du LUFS och True Peak tillsammans",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Integrerad loudness beskriver genomsnittsnivån för ett helt program. True Peak visar den högsta uppskattade toppen mellan sampel. Båda behövs eftersom en låg källa kan förlora marginal när den höjs.",
    },
    {
      type: "paragraph",
      html: "Planeraren subtraherar uppmätt LUFS från målet och lägger korrigeringen till den uppmätta toppen. Det är ett tydligt första steg, inte en certifiering av den bearbetade filen.",
    },
    { type: "title", text: "Välj mål utan falsk precision", level: 2 },
    {
      type: "paragraph",
      html: "Plattformsförhandsvisningen använder redigerbara mål. Den förutspår sänkning för en starkare källa men emulerar inte varje codec eller spelare.",
    },
    {
      type: "table",
      headers: ["Mätning", "Korrigering", "Beslut"],
      rows: [
        ["-18 LUFS till -14 LUFS", "+4 dB", "Kontrollera toppen efter höjning"],
        ["-14.5 LUFS till -14 LUFS", "+0.5 dB", "Gör en jämförelsemätning"],
        ["-10 LUFS till -14 LUFS", "-4 dB", "Sänk och mät igen"],
      ],
    },
    { type: "title", text: "Vad toppvarningen faktiskt säger", level: 2 },
    {
      type: "paragraph",
      html: "Om den beräknade toppen passerar varningslinjen behövs troligen en limiter eller mindre gain. Mät hela programmet igen efter bearbetning.",
    },
    {
      type: "tip",
      title: "Använd korrigeringen som testinstruktion",
      html: "Gör ändringen kontrollerat, lyssna på tal, effekter och musik i sammanhang och kontrollera sedan den nya mätningen.",
    },
    { type: "title", text: "Praktisk kontroll före sändning", level: 2 },
    {
      type: "list",
      items: [
        "Ladda filen eller skriv in tillförlitliga mätvärden.",
        "Titta på dynamik och toppvarning tillsammans med korrigeringen.",
        "Kontrollera de redigerbara målen för varje plattform.",
        "Exportera WAV och mät resultatet från början till slut.",
        "Bedöm tal, musik och effekter, inte bara en siffra.",
      ],
    },
    {
      type: "paragraph",
      html: "Innehållstypen ändrar lyssningskontrollen, inte beräkningen: tal, effekter och musik kräver olika kontroller.",
    },
    {
      type: "tip",
      title: "Det planeraren inte kan certifiera",
      html: "Webbläsarens uppskattning ersätter inte libebur128 eller en broadcastmätare. Den garanterar inte codec-beteende eller att destinationens krav uppfylls.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
};
