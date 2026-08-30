import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import type { StreamAudioLoudnessLocaleContent } from "../entry";
import type { StreamAudioLoudnessUI } from "../ui";
import { bibliography } from "../bibliography";

const title = "Pianificatore dei target di loudness per lo streaming";
const description =
  "Calcola la correzione di guadagno, controlla il margine True Peak e pianifica il target audio per lo streaming.";
const faq = [
  {
    question: "Cosa significa la correzione di guadagno?",
    answer:
      "È il target in LUFS meno la loudness integrata misurata. Un valore positivo suggerisce di aumentare il guadagno, uno negativo di ridurlo.",
  },
  {
    question: "Perché mostrare insieme LUFS e True Peak?",
    answer:
      "I LUFS descrivono il livello medio del programma e il True Peak il picco massimo stimato. Insieme indicano se la correzione conserva margine.",
  },
  {
    question: "I target delle piattaforme sono regole ufficiali?",
    answer:
      "No. Sono riferimenti modificabili per la pianificazione. Controlla sempre la specifica aggiornata della destinazione.",
  },
  {
    question: "Cosa indica la linea a meno 1 dBTP?",
    answer:
      "È una soglia prudente di avviso. Se il picco previsto la supera, serve limitazione o una nuova misurazione.",
  },
  {
    question: "Posso analizzare un file nel browser?",
    answer:
      "Sì. I file audio e video supportati vengono analizzati localmente, ma il risultato è una stima da verificare con un meter conforme.",
  },
  {
    question: "Cosa devo fare quando appare rischio di picco?",
    answer:
      "Riascolta il programma completo e usa un limiter trasparente se serve. Non decidere da un breve estratto.",
  },
];
const howTo = [
  {
    name: "Caricare o inserire le misure",
    text: "Trascina un file supportato oppure inserisci LUFS integrati e True Peak ricavati da un analisi completa.",
  },
  {
    name: "Controllare la dinamica",
    text: "Usa il Loudness Range e l avviso di picco come segnali per l ascolto e una nuova misurazione.",
  },
  {
    name: "Scegliere il target",
    text: "Seleziona Web, Broadcast, Game Audio o un target personalizzato e modifica i valori delle piattaforme.",
  },
  {
    name: "Verificare l uscita",
    text: "Se necessario, crea una WAV locale con limiter di sicurezza e misurala dall inizio alla fine.",
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
  fileAnalysisLabel: "Analizza un file localmente",
  fileAnalysisHint:
    "Trascina audio o video qui. Il file resta in questa scheda.",
  fileDropLabel: "Trascina un file WAV, MP3 o MP4",
  fileTypesLabel: "WAV · MP3 · MP4 · WebM",
  fileIdleText:
    "Nessun file caricato. L inserimento manuale resta disponibile.",
  fileReadingText: "Lettura di {name}...",
  fileReadyText: "Pronto: {name}",
  fileErrorText: "Il browser non ha decodificato il file. Prova WAV o MP3.",
  useAnalysisLabel: "Usa queste misure",
  analysisSummaryLabel: "Stima del browser",
  measuredLufsLabel: "Loudness integrata misurata",
  measuredLufsHint:
    "Usa la lettura di un programma completo, non un picco momentaneo.",
  truePeakLabel: "True Peak misurato",
  truePeakHint: "Usa il valore dBTP della stessa analisi.",
  targetProfileLabel: "Profilo target",
  targetWebLabel: "Riferimento Web -14",
  targetBroadcastLabel: "Broadcast -23",
  targetGameLabel: "Audio giochi -23",
  targetCustomLabel: "Target personalizzato",
  customTargetLabel: "Loudness target",
  contentTypeLabel: "Tipo di contenuto",
  contentVoiceLabel: "Voce",
  contentGameplayLabel: "Gameplay",
  contentMusicLabel: "Musica",
  sceneLabel: "Meter di emissione",
  currentLabel: "Lettura attuale",
  targetLabel: "Target",
  peakCeilingLabel: "Linea di avviso picco",
  correctionLabel: "Correzione guadagno",
  projectedPeakLabel: "Picco previsto",
  headroomLabel: "Margine di picco",
  stateReady: "Pronto da controllare",
  stateBoost: "Serve più guadagno",
  stateTrim: "Serve meno guadagno",
  statePeakRisk: "Rischio di picco",
  stateReadyText:
    "Il target è vicino e il picco previsto resta sotto la linea di avviso.",
  stateBoostText:
    "Il target richiede più guadagno. Controlla il picco previsto prima di applicare la correzione.",
  stateTrimText:
    "La lettura è più alta del target. Riduci il guadagno prima del prossimo export.",
  statePeakRiskText:
    "La correzione supererebbe la linea di avviso. Non applicarla senza controllare il risultato.",
  guidanceLabel: "Prossimo controllo",
  webGuidance:
    "I target Web sono riferimenti di pianificazione, non regole universali.",
  broadcastGuidance:
    "Broadcast è un riferimento di loudness, non un test di accettazione dello stream.",
  gameGuidance:
    "L audio dei giochi cambia rapidamente. Controlla effetti e voce separatamente dopo la modifica.",
  customGuidance:
    "I target personalizzati devono arrivare dalla specifica della destinazione.",
  voiceGuidance:
    "Per la voce, riascolta plosive, rumore della stanza e respiro del limiter.",
  gameplayGuidance:
    "Per il gameplay, controlla effetti improvvisi e chat vocale.",
  musicGuidance:
    "Per la musica, controlla dinamica e movimento del limiter su tutto il programma.",
  meterAria:
    "Scala di loudness da meno 36 a 0 LUFS con lettura attuale, target e linea di avviso a meno 1 dBTP.",
  resetLabel: "Ripristina valori di esempio",
  noteLabel: "Mantieni onesto il modello.",
  noteText:
    "Analisi ed export restano nel browser, ma le stime non sostituiscono un meter conforme e vanno verificate prima della consegna.",
  lraLabel: "Controllo della dinamica",
  lraWaiting: "Carica un file per stimarla",
  lraWide: "Ampia: controlla le parti deboli",
  lraBalanced: "Moderata: ascolta nel contesto",
  lraNarrow: "Stretta: controlla la compressione",
  limiterLabel: "Limiter di picco necessario",
  limiterWaiting: "Calcolato dalle misure",
  limiterNone: "Nessun taglio extra",
  limiterRequired: "Limita {amount} dB per raggiungere il tetto",
  platformPreviewLabel: "Anteprima per piattaforma",
  platformPreviewHint:
    "Modifica il target di pianificazione. Un risultato negativo prevede attenuazione in riproduzione, non modifica il file.",
  platformTargetLabel: "Target",
  platformTrim: "Attenuazione prevista {amount}",
  platformNoTrim: "Nessuna attenuazione prevista",
  outputLabel: "Crea una copia elaborata",
  outputHint:
    "Applica guadagno e limiter di sicurezza del browser, poi esporta una WAV. Misurala di nuovo.",
  outputSettingsLabel: "Catena suggerita",
  obsPresetLabel: "OBS",
  dawPresetLabel: "DAW",
  outputProcessLabel: "Renderizza WAV localmente",
  outputDownloadLabel: "Scarica WAV elaborata",
  outputProcessing: "Rendering locale della WAV...",
  outputWaiting: "Carica un file per attivare l export.",
  outputReady: "La WAV locale è pronta da scaricare.",
  outputError: "Il browser non ha potuto renderizzare questo file.",
  youtubeLabel: "YouTube",
  spotifyLabel: "Spotify",
  twitchLabel: "Twitch",
  tiktokLabel: "TikTok",
};
export const content: StreamAudioLoudnessLocaleContent = {
  slug: "pianificatore-target-loudness-audio-streaming",
  title,
  description,
  ui,
  seo: [
    { type: "title", text: "Come leggere insieme LUFS e True Peak", level: 2 },
    {
      type: "paragraph",
      html: "La loudness integrata descrive il livello medio di un programma completo. Il True Peak mostra il picco massimo stimato tra i campioni. Servono entrambi perché una sorgente bassa può perdere margine dopo un aumento.",
    },
    {
      type: "paragraph",
      html: "Il pianificatore sottrae i LUFS misurati dal target e somma la correzione al picco misurato. È un primo calcolo trasparente, non una certificazione del file elaborato.",
    },
    {
      type: "title",
      text: "Scegliere un target senza falsa precisione",
      level: 2,
    },
    {
      type: "paragraph",
      html: "L anteprima per piattaforma usa target modificabili. Mostra l attenuazione prevista per una sorgente più forte e non emula ogni codec o player.",
    },
    {
      type: "table",
      headers: ["Lettura", "Correzione", "Decisione"],
      rows: [
        ["-18 LUFS a -14 LUFS", "+4 dB", "Controlla il picco dopo l aumento"],
        ["-14.5 LUFS a -14 LUFS", "+0.5 dB", "Esegui una misura di confronto"],
        ["-10 LUFS a -14 LUFS", "-4 dB", "Riduci e misura di nuovo"],
      ],
    },
    { type: "title", text: "Cosa indica davvero l avviso di picco", level: 2 },
    {
      type: "paragraph",
      html: "Se il picco previsto supera la linea di avviso, la correzione richiede probabilmente un limiter o meno guadagno. Dopo l elaborazione misura di nuovo l intero programma.",
    },
    {
      type: "tip",
      title: "Tratta la correzione come una prova controllata",
      html: "Applica il valore con cautela, poi ascolta voce, effetti e musica nel contesto e verifica la nuova misura.",
    },
    { type: "title", text: "Controllo pratico prima della diretta", level: 2 },
    {
      type: "list",
      items: [
        "Carica il file o inserisci misure affidabili.",
        "Osserva dinamica e avviso di picco insieme alla correzione.",
        "Controlla i target modificabili di ogni piattaforma.",
        "Esporta una WAV e misura il risultato dall inizio alla fine.",
        "Valuta voce, musica ed effetti, non solo un numero.",
      ],
    },
    {
      type: "paragraph",
      html: "Il tipo di contenuto cambia il controllo all ascolto, non il calcolo: voce, effetti e musica richiedono verifiche diverse.",
    },
    {
      type: "tip",
      title: "Cosa non può certificare",
      html: "La stima del browser non sostituisce libebur128 o un meter broadcast. Non garantisce il comportamento del codec né la conformità della destinazione.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
};
