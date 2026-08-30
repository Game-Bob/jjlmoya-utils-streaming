import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import type { StreamAudioLoudnessLocaleContent } from "../entry";
import type { StreamAudioLoudnessUI } from "../ui";
import { bibliography } from "../bibliography";

const title = "Planer celów głośności audio do streamingu";
const description =
  "Oblicz korektę wzmocnienia, sprawdź zapas True Peak i zaplanuj cel głośności dla audio w streamingu.";
const faq = [
  {
    question: "Co oznacza korekta wzmocnienia?",
    answer:
      "To cel w LUFS pomniejszony o zmierzoną głośność zintegrowaną. Wartość dodatnia sugeruje zwiększenie, a ujemna zmniejszenie wzmocnienia.",
  },
  {
    question: "Dlaczego LUFS i True Peak są pokazane razem?",
    answer:
      "LUFS opisuje średni poziom programu, a True Peak najwyższy szacowany szczyt. Razem pokazują, czy korekta zostawia wystarczający zapas.",
  },
  {
    question: "Czy cele platform są oficjalnymi zasadami?",
    answer:
      "Nie. To edytowalne wartości do planowania. Zawsze sprawdzaj aktualną specyfikację miejsca docelowego.",
  },
  {
    question: "Co oznacza linia minus 1 dBTP?",
    answer:
      "To ostrożny próg ostrzegawczy. Jeśli przewidywany szczyt go przekroczy, potrzebne jest ograniczenie lub ponowny pomiar.",
  },
  {
    question: "Czy mogę analizować plik w przeglądarce?",
    answer:
      "Tak. Obsługiwane pliki są analizowane lokalnie, ale wynik jest szacunkiem i trzeba go potwierdzić odpowiednim miernikiem.",
  },
  {
    question: "Co zrobić przy ryzyku szczytu?",
    answer:
      "Przesłuchaj cały program i w razie potrzeby użyj przejrzystego limitera. Nie decyduj na podstawie krótkiego fragmentu.",
  },
];
const howTo = [
  {
    name: "Wczytaj plik lub wpisz pomiary",
    text: "Przeciągnij obsługiwany plik albo wpisz zintegrowane LUFS i True Peak z pełnej analizy.",
  },
  {
    name: "Sprawdź dynamikę",
    text: "Użyj Loudness Range i ostrzeżenia o szczycie jako wskazówek do odsłuchu i ponownego pomiaru.",
  },
  {
    name: "Wybierz cel",
    text: "Wybierz Web, Broadcast, Game Audio lub własny cel i dostosuj wartości platform.",
  },
  {
    name: "Sprawdź wynik",
    text: "W razie potrzeby utwórz lokalny WAV z limiterem bezpieczeństwa i ponownie zmierz go w całości.",
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
  offers: { "@type": "Offer", price: "0", priceCurrency: "PLN" },
};
const ui: StreamAudioLoudnessUI = {
  fileAnalysisLabel: "Analizuj plik lokalnie",
  fileAnalysisHint:
    "Upuść tutaj audio lub wideo. Plik pozostaje w tej karcie przeglądarki.",
  fileDropLabel: "Upuść plik WAV, MP3 lub MP4",
  fileTypesLabel: "WAV · MP3 · MP4 · WebM",
  fileIdleText: "Nie załadowano pliku. Wpisywanie ręczne nadal działa.",
  fileReadingText: "Odczyt {name}...",
  fileReadyText: "Gotowe: {name}",
  fileErrorText:
    "Ta przeglądarka nie mogła zdekodować pliku. Spróbuj WAV lub MP3.",
  useAnalysisLabel: "Użyj tych pomiarów",
  analysisSummaryLabel: "Szacunek przeglądarki",
  measuredLufsLabel: "Zmierzona głośność zintegrowana",
  measuredLufsHint: "Użyj pomiaru pełnego programu, nie chwilowego szczytu.",
  truePeakLabel: "Zmierzony True Peak",
  truePeakHint: "Użyj wartości dBTP z tej samej analizy.",
  targetProfileLabel: "Profil celu",
  targetWebLabel: "Wskazówka Web -14",
  targetBroadcastLabel: "Broadcast -23",
  targetGameLabel: "Audio gry -23",
  targetCustomLabel: "Własny cel",
  customTargetLabel: "Głośność celu",
  contentTypeLabel: "Typ treści",
  contentVoiceLabel: "Głos",
  contentGameplayLabel: "Gameplay",
  contentMusicLabel: "Muzyka",
  sceneLabel: "Miernik emisji",
  currentLabel: "Bieżący pomiar",
  targetLabel: "Cel",
  peakCeilingLabel: "Linia ostrzegawcza szczytu",
  correctionLabel: "Korekta wzmocnienia",
  projectedPeakLabel: "Przewidywany szczyt",
  headroomLabel: "Zapas szczytu",
  stateReady: "Gotowe do sprawdzenia",
  stateBoost: "Trzeba zwiększyć",
  stateTrim: "Trzeba zmniejszyć",
  statePeakRisk: "Ryzyko szczytu",
  stateReadyText:
    "Cel jest blisko, a przewidywany szczyt pozostaje pod linią ostrzegawczą.",
  stateBoostText:
    "Cel wymaga większego wzmocnienia. Sprawdź przewidywany szczyt przed zastosowaniem korekty.",
  stateTrimText:
    "Pomiar jest głośniejszy od celu. Zmniejsz wzmocnienie przed kolejnym eksportem.",
  statePeakRiskText:
    "Korekta przekroczy linię ostrzegawczą. Nie stosuj jej bez sprawdzenia.",
  guidanceLabel: "Następne sprawdzenie",
  webGuidance:
    "Cele Web są wartościami do planowania, a nie uniwersalnymi zasadami platform.",
  broadcastGuidance:
    "Broadcast jest punktem odniesienia głośności, nie testem akceptacji streamu.",
  gameGuidance:
    "Audio gry szybko się zmienia. Po korekcie sprawdź osobno efekty i głos.",
  customGuidance:
    "Własne cele powinny pochodzić ze specyfikacji miejsca docelowego.",
  voiceGuidance:
    "Dla głosu ponownie posłuchaj głosek wybuchowych, szumu pomieszczenia i pracy limitera.",
  gameplayGuidance: "Dla gameplayu sprawdź nagłe efekty i czat głosowy.",
  musicGuidance:
    "Dla muzyki sprawdź dynamikę i pracę limitera w całym programie.",
  meterAria:
    "Skala głośności od minus 36 do 0 LUFS pokazująca bieżący pomiar, cel i linię ostrzegawczą minus 1 dBTP.",
  resetLabel: "Przywróć wartości przykładowe",
  noteLabel: "Zachowaj uczciwość modelu.",
  noteText:
    "Analiza i eksport odbywają się w przeglądarce, ale szacunki nie zastępują zgodnego miernika i trzeba je sprawdzić przed dostarczeniem.",
  lraLabel: "Kontrola dynamiki",
  lraWaiting: "Załaduj plik, aby oszacować",
  lraWide: "Szeroka: sprawdź ciche fragmenty",
  lraBalanced: "Umiarkowana: słuchaj w kontekście",
  lraNarrow: "Wąska: sprawdź odczucie kompresji",
  limiterLabel: "Potrzebny limiter szczytu",
  limiterWaiting: "Obliczone z pomiarów",
  limiterNone: "Brak dodatkowego cięcia szczytu",
  limiterRequired: "Ogranicz o {amount} dB, aby osiągnąć próg",
  platformPreviewLabel: "Podgląd platform",
  platformPreviewHint:
    "Edytuj cel planowania. Ujemny wynik przewiduje ściszenie podczas odtwarzania, a nie zmianę pliku.",
  platformTargetLabel: "Cel",
  platformTrim: "Przewidywane ściszenie {amount}",
  platformNoTrim: "Brak przewidywanego ściszenia",
  outputLabel: "Utwórz przetworzoną kopię",
  outputHint:
    "Zastosuj wzmocnienie i limiter bezpieczeństwa przeglądarki, a następnie eksportuj WAV. Zmierz wynik ponownie.",
  outputSettingsLabel: "Sugerowany łańcuch",
  obsPresetLabel: "OBS",
  dawPresetLabel: "DAW",
  outputProcessLabel: "Renderuj WAV lokalnie",
  outputDownloadLabel: "Pobierz przetworzony WAV",
  outputProcessing: "Lokalne renderowanie WAV...",
  outputWaiting: "Załaduj plik, aby włączyć eksport.",
  outputReady: "Lokalny WAV jest gotowy do pobrania.",
  outputError: "Przeglądarka nie mogła wyrenderować tego pliku.",
  youtubeLabel: "YouTube",
  spotifyLabel: "Spotify",
  twitchLabel: "Twitch",
  tiktokLabel: "TikTok",
};
export const content: StreamAudioLoudnessLocaleContent = {
  slug: "planer-celow-glosnosci-audio-streaming",
  title,
  description,
  ui,
  seo: [
    { type: "title", text: "Jak czytać LUFS i True Peak razem", level: 2 },
    {
      type: "paragraph",
      html: "Głośność zintegrowana opisuje średni poziom całego programu. True Peak pokazuje najwyższy szacowany szczyt między próbkami. Obie wartości są potrzebne, bo ciche źródło może stracić zapas po podbiciu.",
    },
    {
      type: "paragraph",
      html: "Planer odejmuje zmierzone LUFS od celu i dodaje korektę do zmierzonego szczytu. To przejrzysty pierwszy krok, a nie certyfikacja przetworzonego pliku.",
    },
    { type: "title", text: "Wybierz cel bez pozornej pewności", level: 2 },
    {
      type: "paragraph",
      html: "Podgląd platform używa celów, które można zmienić. Pokazuje przewidywane ściszenie głośniejszego źródła, ale nie emuluje każdego kodeka ani odtwarzacza.",
    },
    {
      type: "table",
      headers: ["Pomiar", "Korekta", "Decyzja"],
      rows: [
        ["-18 LUFS do -14 LUFS", "+4 dB", "Sprawdź szczyt po podbiciu"],
        ["-14.5 LUFS do -14 LUFS", "+0.5 dB", "Wykonaj pomiar porównawczy"],
        ["-10 LUFS do -14 LUFS", "-4 dB", "Zmniejsz i zmierz ponownie"],
      ],
    },
    {
      type: "title",
      text: "Co naprawdę oznacza ostrzeżenie szczytu",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Jeśli przewidywany szczyt przekroczy linię ostrzegawczą, korekta prawdopodobnie wymaga limitera albo mniejszego wzmocnienia. Po obróbce ponownie zmierz cały program.",
    },
    {
      type: "tip",
      title: "Traktuj korektę jak instrukcję testu",
      html: "Zastosuj zmianę w kontrolowany sposób, posłuchaj głosu, efektów i muzyki w kontekście, a następnie sprawdź nowy pomiar.",
    },
    { type: "title", text: "Praktyczna kontrola przed transmisją", level: 2 },
    {
      type: "list",
      items: [
        "Załaduj plik lub wpisz wiarygodne pomiary.",
        "Obejrzyj dynamikę i ostrzeżenie szczytu razem z korektą.",
        "Sprawdź edytowalne cele każdej platformy.",
        "Wyeksportuj WAV i zmierz wynik od początku do końca.",
        "Oceń głos, muzykę i efekty, nie tylko jedną liczbę.",
      ],
    },
    {
      type: "paragraph",
      html: "Typ treści zmienia kontrolę odsłuchową, ale nie wzór: głos, efekty i muzyka wymagają innych sprawdzeń.",
    },
    {
      type: "tip",
      title: "Czego planer nie potwierdza",
      html: "Szacunek przeglądarki nie zastępuje libebur128 ani miernika broadcast. Nie gwarantuje zachowania kodeka ani zgodności z miejscem docelowym.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
};
