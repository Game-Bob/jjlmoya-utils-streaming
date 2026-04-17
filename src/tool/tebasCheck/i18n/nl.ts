import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TebasCheckUI } from '../types';

const slug = 'isp-blokkade-detector';
const title = 'ISP blokkeringsdetector Tebas Check';
const description = 'Diagnostisch hulpmiddel om onrechtmatige blokkering van gedeelde Cloudflare IP-adressen door Spaanse providers te detecteren.';

const faqData = [
  {
    question: 'Wat is de Tebas-Check?',
    answer: 'Het is een diagnostisch hulpmiddel dat probeert verbinding te maken met bekende Cloudflare IP-adressen die in Spanje gerechtelijk zijn geblokkeerd om toegang tot illegale uitzendingen te voorkomen. Het probleem is dat door het blokkeren van een gedeeld IP-adres, duizenden legitieme websites "kapot" gaan.',
  },
  {
    question: 'Waarom blokkeert mijn provider een Cloudflare IP-adres?',
    answer: 'Vanwege dynamische voorzorgsmaatregelen waarbij providers IP-adressen moeten blokkeren van servers die zogenaamd beschermde inhoud uitzenden. Door het gebruik van Cloudflare (CDN) delen veel websites hetzelfde IP-adres, wat leidt tot bijkomende schade voor onschuldige gebruikers.',
  },
  {
    question: 'Hoe werkt de test?',
    answer: 'We proberen een kleine bron te laden vanaf de IP-adressen die als geblokkeerd zijn gemarkeerd. Als de verbinding mislukt vanwege "Timeout" of verbinding-resets alleen op die IP-adressen, is dit een duidelijke indicator dat uw provider IP-filtering toepast.',
  },
  {
    question: 'Kan ik deze blokkade omzeilen?',
    answer: 'IP-blokkades zijn moeilijk te omzeilen door alleen de DNS te wijzigen. De oplossing bestaat meestal uit het gebruik van een VPN, de Tor-browser of wachten tot Cloudflare een nieuw IP-adres toewijst aan de legitieme dienst die u probeert te bezoeken.',
  },
];

const howToData = [
  {
    name: 'VPN of proxy\'s uitschakelen',
    text: 'Voor een nauwkeurige test moet u de directe verbinding van uw router gebruiken (Glasvezel of 4G/5G) zonder tussenlagen.',
  },
  {
    name: 'Start de scan',
    text: 'Klik op de diagnoseknop. Het hulpmiddel stuurt testpakketten naar de IP-adressen die verdacht worden van blokkering.',
  },
  {
    name: 'Interpreteer de resultaten',
    text: 'Als u resultaten in het rood ziet, betekent dit dat die IP onbereikbaar is. Als het groen is, stroomt uw verkeer normaal.',
  },
  {
    name: 'Rapport genereren',
    text: 'U kunt de resultaten gebruiken om het incident te melden bij uw provider als zij legitieme diensten blokkeren.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<TebasCheckUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde vragen',
  faq: faqData,
  bibliographyTitle: 'Referenties en context',
  bibliography: [
    {
      name: 'Cloudflare: IP-blokkering begrijpen',
      url: 'https://www.cloudflare.com/learning/network-layer/what-is-ip-blocking/',
    },
    {
      name: 'Spaanse regelgeving voor dynamische blokkering',
      url: 'https://www.poderjudicial.es/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: 'Waarom is alles gestopt met werken?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Welkom in de wondere wereld van de <strong>"Preventieve Justitie"</strong>. Als je hier bent op een zondagmiddag en legitieme websites stoppen met laden terwijl Twitter perfect werkt, ben je waarschijnlijk een bijkomend slachtoffer van de kruistocht tegen illegale voetbaluitzendingen.',
    },
    {
      type: 'paragraph',
      html: 'In Spanje hebben rechters een "rode knop" gegeven aan bepaalde sportorganisaties. Met deze knop kunnen ze IP-adressen in realtime blokkeren zonder direct gerechtelijk toezicht van minuut tot minuut. Het probleem is dat ze met een kermisschrootgeweer richten, en ze schieten vaak op gedeelde servers waar naast "illegale wedstrijden" ook ziekenhuizen, universiteiten of je favoriete kookblog wonen.',
    },
    {
      type: 'title',
      text: 'De theorie van het brandende gebouw',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Stel je voor dat er een illegale stream wordt uitgezonden vanuit appartement 4B van een wolkenkrabber. De logische oplossing zou zijn om bij 4B aan te kloppen en de stroom af te sluiten, toch?',
    },
    {
      type: 'paragraph',
      html: 'Nou, nee. De huidige oplossing is om <strong>de fundering van het hele gebouw op te blazen</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Door het IP-adres van een dienst als Cloudflare te blokkeren, haalt de internetprovider niet alleen de piraat neer, maar ook de andere 50.000 legitieme websites die hetzelfde digitale adres deelden. Als je aan het werk was of aan het studeren en je website gebruikte dat IP-adres: pech gehad, bijkomende schade. Dien een klacht in bij de meester-wapensmid.',
    },
    {
      type: 'title',
      text: 'Wat doet dit diagnostisch hulpmiddel precies?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dit hulpmiddel voert een technische analyse uit in drie stappen om te identificeren of uw provider selectieve IP-adresblokkering toepast:',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Ping naar Google',
          description: 'We controleren of je een "pols" hebt. Als Google niet laadt, is het probleem dat je je wifi-rekening niet hebt betaald. Dit is de basis connectiviteitstest.',
        },
        {
          title: 'Ping naar Cloudflare',
          description: 'We proberen 1.1.1.1 te bereiken. Het is de "kanarie in de kolenmijn" van blokkades in Spanje en het hoofddoel van gerechtelijke blokkades.',
        },
        {
          title: 'Verdict',
          description: 'Als Google werkt en Cloudflare faalt, is het glashelder: je provider past selectieve IP-blokkering van Cloudflare toe.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Impact van dynamische blokkering',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Valse positieven',
          description: 'Bedrijfswebsites, persoonlijke blogs en overheidsdiensten kunnen stoppen met werken als ze een IP-adres delen met een ongeautoriseerde streamingserver.',
        },
        {
          title: 'IP filtering',
          description: 'In tegenstelling tot DNS-blokkering voorkomt IP-filtering verbinding op netwerkniveau, waardoor het wijzigen van de DNS onvoldoende is om het probleem op te lossen.',
        },
        {
          title: 'Gebrek aan transparantie',
          description: 'Vaak ziet de gebruiker alleen een "Timeout"-fout zonder te weten of het probleem in hun verbinding zit of een actieve blokkade van de provider is.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Vragen die niemand wil beantwoorden',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Is het illegaal om dit te gebruiken?</strong> Nee. Pingen naar een server is net zo illegaal als naar een etalage kijken. Dit hulpmiddel is een passieve netwerkdiagnose. Het breekt geen encryptie, kraakt geen wachtwoorden en opent geen beschermde inhoud. Het vertelt je alleen waarom je je gebruikelijke websites niet kunt bezoeken.',
        '<strong>Hoe los ik het op?</strong> Als je een actieve blokkade hebt, helpt het wijzigen van de DNS niet meer (ze kennen alle trucs). De enige echte oplossing vandaag de dag is een <strong>VPN</strong>. Door je verkeer te versleutelen, kan je provider niet zien wat je vraagt of aan wie, en kan je dus niet "selectief" (of per ongeluk) blokkeren.',
      ],
    },
    {
      type: 'title',
      text: 'Streamer-modus / OBS-widget',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ben je een streamer en wil je de status van de censuur in realtime laten zien in je stream? We hebben een speciale ultra-minimalistische modus gemaakt, met een transparante achtergrond (chroma-ready) en elke 5 minuten een automatische verversing.',
    },
    {
      type: 'list',
      items: [
        '<strong>Stap 1:</strong> Voeg een nieuwe <strong>Browser</strong>-bron toe in OBS.',
        '<strong>Stap 2:</strong> Gebruik deze URL: <code>https://jjlmoya.es/utilidades/tebas-check/stream/</code>',
        '<strong>Stap 3:</strong> Klaar! Er verschijnt een groot pictogram (Groen/Rood) dat aangeeft of je verbinding schoon is of onder een gerechtelijke aanval ligt.',
      ],
    },
    {
      type: 'tip',
      title: 'Juridische mededeling',
      html: '<p>Dit hulpmiddel is niet gelieerd aan enige sportorganisatie, vergemakkelijkt de toegang tot beschermde inhoud niet en omzeilt geen technologische beschermingsmaatregelen (DRM). Het informeert de gebruiker eenvoudigweg dat hun internetverbinding kunstmatig wordt vertraagd.</p>',
    },
  ],
  ui: {
    faqTitle: 'Veelgestelde vragen',
    bibliographyTitle: 'Referenties en context',
    scanning: 'De matrix scannen...',
    seekingBlocks: 'Zoeken naar betonblokken in je glasvezel...',
    blockedTitle: 'BLOKKEREN...',
    blockedDiagnosis: 'Diagnose: "Selectieve Censuur"',
    blockedReason: 'We hebben interferentie gedetecteerd bij uw provider. Cloudflare of DNS worden gemanipuleerd.',
    noInternetTitle: 'GEEN VERBINDING',
    noInternetReason: 'Het lijkt erop dat je geen internettoegang hebt. Controleer je kabel of de rekening.',
    successTitle: 'JE BENT VRIJ',
    successReason: 'Je verbinding ziet er schoon uit. Als er globale blokkades zijn, hebben die geen invloed op jou.',
    retryBtn: 'De justitie opnieuw uitdagen',
    authorNoteTitle: 'Opmerking van de auteur:',
    authorNoteText: 'Ik heb dit hulpmiddel niet volledig kunnen testen omdat ik geen last heb van de "zwarte hand" van Tebas. Als je me wilt helpen de diagnose te verbeteren, neem dan contact met me op.',
    consoleHeader: 'TEBAS_OS v3.2.0',
    statusNegotiating: 'Onderhandelen met je router...',
    statusDodging: 'De gerechtelijke circulaire ontwijken...',
    statusCheckingPirate: 'Controleren of je een piraat bent (knipoog)...',
    statusPinging: 'Pingen naar Google om te zien of je bestaat...',
    statusConsulting: 'Het gedeelde IP-orakel raadplegen...',
    statusCheckingFee: 'Controleren of Tebas de zelfstandigenbijdrage heeft betaald...',
    statusCalculating: 'De kans berekenen om de loterij te winnen...',
    statusDeciphering: 'Poging om je providercontract te ontcijferen...',
    logStarted: "AUTONOOM PROTOCOL 'TEBAS_WATCH' STARTEN...",
    logDetecting: '> Provider en basis connectiviteit detecteren...',
    logIspFound: '> Provider gedetecteerd: ',
    logConnError: '> Basis verbindingsfout',
    logDnsCross: '> Uitvoeren van DNS-datacontrole (DoH vs Lokaal)...',
    logDnsGoogle: '> Echte DNS (Google): ',
    logDnsPoisoned: '> ALERT: Vergiftigde DNS gedetecteerd.',
    logDnsNoDoh: '> DoH niet beschikbaar, overslaan van DNS-controle.',
    logLaunchingProbes: '> Lancering van sondes op kritieke doelen...',
    logIpBlocked: '> Doel {ip}: GEEN REACTIE (Vermoedelijke IP-blokkade)',
    logIpActive: '> Doel {ip}: ACTIEF',
    logAlertInterference: '!!! ALERT GERECHTELIJKE INTERFERENTIE !!!',
    logNoInternet: 'GEEN INTERNETTOEGANG',
    logClean: 'SCHONE VERBINDING. GENIET ERVAN.',
    logDiagError: 'DIAGNOSTISCHE FOUT',
  },
};
