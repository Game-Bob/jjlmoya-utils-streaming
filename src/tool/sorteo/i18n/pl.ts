import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SorteoUI } from '../ui';

const slug = 'losowanie-imion';
const title = 'Generator Losowych Imion do Streamingu';
const description =
  'Wybierz zwycięzcę losowo z listy imion. Darmowe, szybkie i wizualne narzędzie do losowań na Twitch, YouTube i wydarzenia.';

const faqData = [
  {
    question: 'Czy to losowanie jest naprawdę losowe?',
    answer:
      'Tak, używamy algorytmu kryptograficznej losowości przeglądarki (Web Crypto API), aby zapewnić, że każdy uczestnik ma dokładnie taką samą szansę na wygraną, bez uprzedzeń i manipulacji.',
  },
  {
    question: 'Czy mogę używać tego generatora na Twitchu lub YouTube?',
    answer:
      'Oczywiście. Jako narzędzie internetowe, możesz przechwycić okno za pomocą OBS lub bezpośrednio udostępnić ekran. Przejrzysty design i animacje zostały zaprojektowane tak, aby widownia widziała proces z pełną transparentnością.',
  },
  {
    question: 'Jak zapobiec dwukrotnemu udziałowi tej samej osoby?',
    answer:
      'Narzędzie posiada funkcję automatycznego „czyszczenia duplikatów”, która wykrywa identyczne imiona lub takie z niewielkimi różnicami w spacji, aby zapewnić, że każda prawdziwa osoba liczy się tylko raz.',
  },
  {
    question: 'Czy mogę wylosować kilku zwycięzców naraz?',
    answer:
      'Tak, możesz skonfigurować liczbę pożądanych zwycięzców przed kliknięciem przycisku. Narzędzie wyraźnie wypisze szczęśliwców, abyś mógł ich wymienić podczas swojej transmisji na żywo.',
  },
  {
    question: 'Ile imion mogę dodać do listy?',
    answer:
      'Narzędzie nie nakłada żadnych ścisłych limitów. Zoptymalizowaliśmy silnik tak, aby obsługiwał listy tysięcy uczestników bez problemów z wydajnością, co czyni go idealnym nawet dla masowych losowań.',
  },
  {
    question: 'Czy moje dane lub lista uczestników są zapisywane?',
    answer:
      'Nie, nigdy. Twoja prywatność jest najważniejsza. Cały proces losowania odbywa się lokalnie w Twojej przeglądarce internetowej. Wpisane imiona nigdy nie są wysyłane na nasze serwery ani przechowywane w żadnej bazie danych.',
  },
];

const howToData = [
  {
    name: 'Przygotuj listę uczestników',
    text: 'Skopiuj listę imion z czatu, Excela lub sieci społecznościowej i wklej ją do pola tekstowego.',
  },
  {
    name: 'Skonfiguruj opcje losowania',
    text: 'Wybierz, ilu zwycięzców potrzebujesz i czy chcesz odfiltrować duplikaty lub puste wpisy.',
  },
  {
    name: 'Uruchom „niewinną rękę”',
    text: 'Kliknij przycisk losowania. Wizualna animacja podtrzyma napięcie przed ujawnieniem zwycięzcy.',
  },
  {
    name: 'Ogłoś wyniki',
    text: 'Skopiuj imiona zwycięzców, aby udostępnić je w swoich sieciach społecznościowych lub na czacie transmisji.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<SorteoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje Techniczne',
  bibliography: [
    {
      name: 'Web Crypto API: getRandomValues()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues',
    },
    {
      name: 'Algorytm przetasowania Fishera-Yatesa',
      url: 'https://pl.wikipedia.org/wiki/Algorytm_Fishera-Yatesa',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: 'Generator Losowych Imion i Lista Uczestników Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zastanawiasz się, jak przeprowadzić losowanie online szybko, bezpiecznie i całkowicie przejrzyście? Nasze darmowe narzędzie <strong>Losowanie Imion</strong> to ostateczne rozwiązanie, pozwalające wybrać zwycięzcę w kilka sekund. Zaprojektowane, by być proste, wizualne i skuteczne, jest idealne do każdego scenariusza, w którym potrzebujesz cyfrowej „niewinnej ręki”.',
    },
    {
      type: 'paragraph',
      html: 'Niezależnie od tego, czy zarządzasz konkursem w mediach społecznościowych, masowym losowaniem na swoim kanale streamingowym, czy po prostu decydujesz, kto dzisiaj wynosi śmieci, nasz losowy selektor gwarantuje całkowitą bezstronność dzięki nowoczesnym algorytmom kryptograficznym. <strong>Bez manipulacji, bez uprzedzeń, tylko czysta losowość.</strong>'
    },
    {
      type: 'title',
      text: 'Zastosowania',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Losowania w Mediach Społecznościowych',
          description: 'Idealne dla konkursów na Instagramie, Twitterze (X) lub Facebooku. Po prostu skopiuj imiona z komentarzy i wklej je, aby wybrać uczciwego zwycięzcę. Narzędzie automatycznie usuwa duplikaty.',
        },
        {
          title: 'Twitch / YouTube Streaming',
          description: 'Dzięki naszemu Trybowi Studio z płynnymi animacjami i zintegrowanymi dźwiękami, możesz udostępniać swój ekran bezpośrednio w OBS i zaoferować ekscytujące show swojej widowni wybierając zwycięzców na żywo.',
        },
        {
          title: 'Dynamika Klasy i Zespołu',
          description: 'Nauczyciele i liderzy zespołów mogą używać go do tworzenia losowych grup, wyboru osoby prezentującej jako pierwszej lub przypisywania zadań przy pełnej przejrzystości i bez faworyzowania.',
        },
        {
          title: 'Mikołajki i Wydarzenia',
          description: 'Uprość organizację wydarzeń rodzinnych, losowań biurowych lub Mikołajek wybierając imiona losowo w mgnieniu oka bez potrzeby używania kartek czy skomplikowanej logistyki.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego nasze narzędzie jest inne?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Prawdziwa Kryptografia:</strong> Używamy Web Crypto API przeglądarki (standard W3C) zamiast słabych generatorów pseudolosowych. Każde losowanie jest matematycznie bezstronne.',
        '<strong>Brak Przechowywania:</strong> Twoje dane nigdy nie opuszczają przeglądarki. Nie sprzedajemy list, nie profilujemy Cię, niczego nie przechowujemy. Czyste przetwarzanie lokalne.',
        '<strong>Wizualny Design:</strong> Tryb kinowy i animacje sprawiają, że każde losowanie staje się niezapomnianym wydarzeniem. Idealne do przechwytywania przez OBS lub transmisji na żywo.',
        '<strong>Zarządzanie Duplikatami:</strong> Automatycznie wykrywa powtórzone imiona lub warianty (dodatkowe spacje, wielkość liter itd.), aby zapewnić, że każda prawdziwa osoba liczy się tylko raz.',
      ],
    },
    {
      type: 'title',
      text: 'Jak korzystać z losowania krok po kroku',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Krok 1 - Wprowadź uczestników:</strong> Wklej listę imion do głównego pola tekstowego. Narzędzie automatycznie wykrywa każdą nową linię jako oddzielnego uczestnika. Masz duplikaty? Nie ma problemu, narzędzie je usunie.',
        '<strong>Krok 2 - Dostosuj:</strong> W zakładce ustawień możesz włączyć odliczanie, aby zbudować napięcie, efekt konfetti do świętowania, lub aktywować „ czarną listę”, aby wykluczyć pewne imiona.',
        '<strong>Krok 3 - Losuj!</strong> Kliknij główny przycisk, a nasz silnik wygeneruje kryptograficznie bezpieczny wybór. Zwycięzcy zostaną wyświetleni w sposób czytelny i efektowny.',
      ],
    },
    {
      type: 'title',
      text: 'Wpisy Ważone: Daj Przewagę Niektórym Uczestnikom',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Chcesz nagrodzić swoich najwierniejszych subskrybentów lub dać więcej szans niektórym uczestnikom? Nasz system <strong>Wpisów Ważonych</strong> jest unikalny i pozwala przypisać „wagę” lub mnożnik do dowolnego imienia bez konieczności wielokrotnego wpisywania go.',
    },
    {
      type: 'tip',
      title: 'Jak przypisać wagi do imion',
      html: '<p>Użyj gwiazdki (*) lub „x”, a następnie wpisz liczbę udziałów. Przykłady:</p><ul><li><strong>"Jan * 5"</strong> - Jan bierze udział tak, jakby był 5 osobami</li><li><strong>"Maria x 10"</strong> - Maria ma 10 razy większe szanse</li><li><strong>"Piotr"</strong> - Brak symbolu = 1 zwykły wpis</li></ul><p>Jest to idealne dla losowań, w których chcesz dać przewagę subskrybentom VIP lub specjalnym użytkownikom.</p>',
    },
    {
      type: 'title',
      text: 'Pełna Prywatność i Bezpieczeństwo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'W przeciwieństwie do innych narzędzi online, <strong>nie przechowujemy Twoich danych</strong>. Całe przetwarzanie imion i wykonanie losowania odbywa się lokalnie w Twojej własnej przeglądarce. Twoje listy uczestników nigdy nie podróżują przez sieć ani nie są zapisywane na żadnym zewnętrznym serwerze.',
    },
    {
      type: 'paragraph',
      html: '<strong>Co to oznacza?</strong> Twoja lista uczestników należy do Ciebie i tylko do Ciebie. Po zamknięciu karty dane znikają. Żadnych ciasteczek śledzących, żadnych profili użytkowników, żadnej centralnej bazy danych. Gwarancja maksymalnej prywatności dla Ciebie i Twoich uczestników.',
    },
    {
      type: 'title',
      text: 'Transparentność Matematyczna',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Niektórzy mogą pytać: „A co jeśli zmanipulujecie wyniki?”. Odpowiedź jest prosta: <strong>nie możemy</strong>. Kod losowania jest deterministyczny i kryptograficzny. Brak ukrytych zmiennych, żadnych „palców na wadze”.',
    },
    {
      type: 'paragraph',
      html: 'Każdy zwycięzca jest bezpośrednim wynikiem algorytmu Fisher-Yates Shuffle zastosowanego do Twojej dokładnej listy, przy użyciu prawdziwej entropii kryptograficznej. Jeśli chcesz audytować ten proces, kod jest dostępny na GitHub do publicznego wglądu.',
    },
  ],
  ui: {
    faqTitle: 'Często Zadawane Pytania',
    bibliographyTitle: 'Referencje Techniczne',
    title: 'Losowanie',
    totalParticipants: 'Suma Unikalnych Uczestników',
    ready: 'GOTOWE',
    participants: 'Uczestnicy',
    settings: 'Ustawienia',
    importFile: 'Importuj Plik',
    clearAll: 'Wyczyść wszystko',
    placeholder: 'Wpisz lub wklej imiona tutaj...\nJan Kowalski\nAnna Nowak\n@użytkownik_twitch',
    onePerLine: '1 uczestnik na linię',
    lines: 'linii',
    filters: 'Filtry',
    allowDuplicates: 'Zezwalaj na Duplikaty',
    winnerCount: 'Liczba Zwycięzców',
    autoRemove: 'Automatyczne Usuwanie Zwycięzcy',
    blacklist: 'Czarna lista (Wyklucz)',
    blacklistPlaceholder: 'Zabronione imiona (jedno na linię)...',
    blacklistInfo: 'Ci użytkownicy nie wejdą do losowania.',
    sceneEffects: 'Efekty Sceny',
    countdown: 'Odliczanie (3s)',
    confetti: 'Konfetti Zwycięstwa',
    zenMode: 'Tryb Zen (Ukryj Panel)',
    waitingParticipants: 'Oczekiwanie na uczestników...',
    winner: 'ZWYCIĘZCA',
    reroll: 'Losuj ponownie',
    history: 'Historia tej sesji',
    noWinnersYet: 'Brak zwycięzców...',
    startGiveaway: 'Rozpocznij Losowanie',
    studioHeader: 'LIVE STUDIO v2.0',
  },
};
