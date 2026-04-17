import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TebasCheckUI } from '../types';

const slug = 'wykrywacz-blokad-isp';
const title = 'Wykrywacz Blokad ISP Tebas Check';
const description = 'Narzędzie diagnostyczne do wykrywania nielegalnych blokad współdzielonych adresów IP Cloudflare przez hiszpańskich dostawców Internetu.';

const faqData = [
  {
    question: 'Co to jest Tebas-Check?',
    answer: 'To narzędzie diagnostyczne, które próbuje połączyć się ze znanymi adresami IP Cloudflare, które zostały zablokowane sądownie w Hiszpanii, aby uniemożliwić dostęp do pirackich transmisji. Problem polega na tym, że blokując współdzielony adres IP, "psuje się" tysiące legalnych stron internetowych.',
  },
  {
    question: 'Dlaczego mój dostawca Internetu blokuje adres IP Cloudflare?',
    answer: 'Z powodu dynamicznych środków zapobiegawczych, w ramach których dostawcy usług internetowych muszą blokować adresy IP serwerów rzekomo nadających chronione treści. Korzystając z Cloudflare (CDN), wiele stron internetowych współdzieli ten sam adres IP, co powoduje szkody uboczne dla niewinnych użytkowników.',
  },
  {
    question: 'Jak działa ten test?',
    answer: 'Próbujemy załadować mały zasób z adresów IP oznaczonych jako zablokowane. Jeśli połączenie nie powiedzie się z powodu "Przekroczenia czasu" (Timeout) lub resetowania połączenia tylko na tych adresach IP, jest to jasny wskaźnik, że dostawca stosuje filtrowanie IP.',
  },
  {
    question: 'Czy mogę obejść tę blokadę?',
    answer: 'Blokady IP są trudne do obejścia jedynie poprzez zmianę DNS. Rozwiązanie zazwyczaj polega na korzystaniu z VPN, przeglądarki Tor lub czekaniu, aż Cloudflare przypisze nowy adres IP do legalnej usługi, którą próbujesz odwiedzić.',
  },
];

const howToData = [
  {
    name: 'Wyłącz VPN lub serwery proxy',
    text: 'Aby test był dokładny, musisz korzystać z bezpośredniego połączenia routera (światłowód lub 4G/5G) bez warstw pośrednich.',
  },
  {
    name: 'Rozpocznij skanowanie',
    text: 'Kliknij przycisk diagnostyki. Narzędzie wyśle pakiety testowe do adresów IP podejrzanych o blokowanie.',
  },
  {
    name: 'Zinterpretuj wyniki',
    text: 'Jeśli widzisz wyniki w kolorze czerwonym, oznacza to, że dany adres IP jest nieosiągalny. Jeśli jest zielony, ruch odbywa się normalnie.',
  },
  {
    name: 'Generuj raport',
    text: 'Możesz wykorzystać wyniki do zgłoszenia incydentu swojemu dostawcy Internetu, jeśli blokuje on legalne usługi.',
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

export const content: ToolLocaleContent<TebasCheckUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje i Kontekst',
  bibliography: [
    {
      name: 'Cloudflare: Zrozumienie blokowania IP',
      url: 'https://www.cloudflare.com/learning/network-layer/what-is-ip-blocking/',
    },
    {
      name: 'Hiszpańskie przepisy dotyczące dynamicznego blokowania',
      url: 'https://www.poderjudicial.es/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: 'Dlaczego wszystko przestało działać?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Witamy w cudownym świecie <strong>"Sprawiedliwości Zapobiegawczej"</strong>. Jeśli jesteś tu w niedzielne popołudnie i legalne strony internetowe przestały się ładować, podczas gdy Twitter działa idealnie, prawdopodobnie jesteś ofiarą uboczną krucjaty przeciwko nielegalnym transmisjom piłkarskim.',
    },
    {
      type: 'paragraph',
      html: 'W Hiszpanii sędziowie przekazali "czerwony przycisk" niektórym organizacjom sportowym. Ten przycisk pozwala im blokować adresy IP w czasie rzeczywistym, bez bezpośredniego nadzoru sądowego minuta po minucie. Problem polega na tym, że celują jak z odpustowej wiatrówki i często trafiają w serwery współdzielone, na których oprócz "nielegalnych meczów" znajdują się szpitale, uniwersytety lub Twój ulubiony blog kulinarny.',
    },
    {
      type: 'title',
      text: 'Teoria Płonącego Budynku',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wyobraź sobie, że nielegalny stream jest nadawany z mieszkania 4B w wieżowcu. Logicznym rozwiązaniem byłoby zapukanie do drzwi 4B i odcięcie prądu, prawda?',
    },
    {
      type: 'paragraph',
      html: 'Otóż nie. Obecnym rozwiązaniem jest <strong>wysadzenie fundamentów całego budynku</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Blokując adres IP usługi takiej jak Cloudflare, dostawca internetu nie tylko eliminuje pirata, ale także pozostałe 50 000 legalnych stron internetowych, które współdzielą ten sam adres cyfrowy. Jeśli pracowałeś lub uczyłeś się, a Twoja strona korzystała z tego adresu IP: pech, szkoda uboczna. Reklamacje proszę składać do głównego rusznikarza.',
    },
    {
      type: 'title',
      text: 'Co dokładnie robi to narzędzie diagnostyczne?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'To narzędzie przeprowadza analizę techniczną w trzech krokach, aby zidentyfikować, czy Twój dostawca stosuje selektywne blokowanie adresów IP:',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Ping Google',
          description: 'Sprawdzamy, czy masz puls. Jeśli Google się nie ładuje, problemem jest to, że nie zapłaciłeś za Wi-Fi. To podstawowy test łączności.',
        },
        {
          title: 'Ping Cloudflare',
          description: 'Próbujemy dotrzeć do 1.1.1.1. To "kanarek w kopalni" blokowania w Hiszpanii i główny cel blokad sądowych.',
        },
        {
          title: 'Werdykt',
          description: 'Jeśli Google działa, a Cloudflare zawodzi, sprawa jest jasna: Twój dostawca stosuje selektywne blokowanie adresu IP Cloudflare.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Wpływ Dynamicznego Blokowania',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Fałszywe Alarmy',
          description: 'Strony firmowe, prywatne blogi i usługi rządowe mogą przestać działać, jeśli dzielą adres IP z nieautoryzowanym serwerem streamingowym.',
        },
        {
          title: 'Filtrowanie IP',
          description: 'W przeciwieństwie do blokowania DNS, filtrowanie IP uniemożliwia połączenie na poziomie sieci, co sprawia, że zmiana DNS nie wystarczy do rozwiązania problemu.',
        },
        {
          title: 'Brak Przejrzystości',
          description: 'Często użytkownik widzi tylko błąd "Timeout" bez wiedzy, czy problem leży w jego połączeniu, czy w aktywnej blokadzie dostawcy.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Pytania, na które nikt nie chce odpowiedzieć',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Czy używanie tego jest nielegalne?</strong> Nie. Pingowanie serwera jest tak samo nielegalne jak pat patrzenie na wystawę sklepową. To narzędzie to pasywna diagnostyka sieci. Nie łamie szyfrowania, nie łamie haseł i nie uzyskuje dostępu do chronionych treści. Mówi Ci tylko, dlaczego nie możesz uzyskać dostępu do swoich zwykłych stron internetowych.',
        '<strong>Jak to naprawić?</strong> Jeśli masz aktywną blokadę, zmiana DNS już nie pomaga (znają wszystkie triki). Jedynym realnym dziś rozwiązaniem jest <strong>VPN</strong>. Szyfrując ruch, dostawca nie widzi, o co prosisz ani kogo, a zatem nie może Cię zablokować "selektywnie" (lub przez pomyłkę).',
      ],
    },
    {
      type: 'title',
      text: 'Tryb Streamera / Widget OBS',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jesteś streamerem i chcesz pokazywać stan cenzury w czasie rzeczywistym na swoim streamie? Stworzyliśmy specjalny ultra-minimalistyczny tryb z przezroczystym tłem (gotowy do kluczowania) i automatycznym odświeżaniem co 5 minut.',
    },
    {
      type: 'list',
      items: [
        '<strong>Krok 1:</strong> Dodaj nowe źródło <strong>Przeglądarka</strong> w OBS.',
        '<strong>Krok 2:</strong> Użyj tego adresu URL: <code>https://jjlmoya.es/utilidades/tebas-check/stream/</code>',
        '<strong>Krok 3:</strong> Gotowe! Pojawi się duża ikona (zielona/czerwona) wskazująca, czy Twoje połączenie jest czyste, czy pod atakiem sądowym.',
      ],
    },
    {
      type: 'tip',
      title: 'Nota Prawna',
      html: '<p>To narzędzie nie jest powiązane z żadną organizacją sportową, nie ułatwia dostępu do chronionych treści i nie omija technologicznych środków ochrony (DRM). Po prostu informuje użytkownika, że jego połączenie internetowe jest sztucznie degradowane.</p>',
    },
  ],
  ui: {
    faqTitle: 'Często Zadawane Pytania',
    bibliographyTitle: 'Referencje i Kontekst',
    scanning: 'Skanowanie matrixa...',
    seekingBlocks: 'Szukanie betonowych blokad w Twoim światłowodzie...',
    blockedTitle: 'BLOKOWANIE...',
    blockedDiagnosis: 'Diagnoza: "Cenzura Selektywna"',
    blockedReason: 'Wykryliśmy zakłócenia u Twojego dostawcy Internetu. Cloudflare lub DNS są manipulowane.',
    noInternetTitle: 'BRAK POŁĄCZENIA',
    noInternetReason: 'Wygląda na to, że nie masz dostępu do Internetu. Sprawdź kabel lub rachunek.',
    successTitle: 'JESTEŚ WOLNY',
    successReason: 'Twoje połączenie wygląda na czyste. Jeśli istnieją blokady globalne, nie mają one na Ciebie wpływu.',
    retryBtn: 'Ponownie sprowokuj wymiar sprawiedliwości',
    authorNoteTitle: 'Nota od autora:',
    authorNoteText: 'Nie byłem w stanie w pełni przetestować tego narzędzia, ponieważ nie dotknęła mnie "czarna ręka" Tebasa. Jeśli chcesz pomóc mi udoskonalić diagnostykę, skontaktuj się ze mną.',
    consoleHeader: 'TEBAS_OS v3.2.0',
    statusNegotiating: 'Negocjowanie z routerem...',
    statusDodging: 'Unikanie okólnika sądowego...',
    statusCheckingPirate: 'Sprawdzanie, czy jesteś piratem (mrugnięcie okiem)...',
    statusPinging: 'Pingowanie Google, aby sprawdzić, czy istniejesz...',
    statusConsulting: 'Konsultacja z wyrocznią współdzielonych IP...',
    statusCheckingFee: 'Sprawdzanie, czy Tebas zapłacił składkę dla samozatrudnionych...',
    statusCalculating: 'Obliczanie prawdopodobieństwa wygrania na loterii...',
    statusDeciphering: 'Próba rozszyfrowania umowy z dostawcą...',
    logStarted: "URUCHAMIANIE AUTONOMICZNEGO PROTOKOŁU 'TEBAS_WATCH'...",
    logDetecting: '> Wykrywanie dostawcy i podstawowej łączności...',
    logIspFound: '> Wykryto dostawcę: ',
    logConnError: '> Błąd podstawowego połączenia',
    logDnsCross: '> Wykonywanie krzyżowej kontroli danych DNS (DoH vs lokalne)...',
    logDnsGoogle: '> Prawdziwy DNS (Google): ',
    logDnsPoisoned: '> ALERT: Wykryto zatruty DNS.',
    logDnsNoDoh: '> DoH niedostępny, pomijanie krzyżowej kontroli DNS.',
    logLaunchingProbes: '> Uruchamianie sond na krytyczne cele...',
    logIpBlocked: '> Cel {ip}: BRAK ODPOWIEDZI (Podejrzenie blokady IP)',
    logIpActive: '> Cel {ip}: AKTYWNY',
    logAlertInterference: '!!! ALERT INGERENCJI SĄDOWEJ !!!',
    logNoInternet: 'BRAK DOSTĘPU DO INTERNETU',
    logClean: 'CZYSTE POŁĄCZENIE. KORZYSTAJ.',
    logDiagError: 'BŁĄD DIAGNOSTYCZNY',
  },
};
