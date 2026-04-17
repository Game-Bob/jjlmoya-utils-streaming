import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TebasCheckUI } from '../types';

const slug = 'isp-blockerings-detektor';
const title = 'ISP blockeringsdetektor Tebas Check';
const description = 'Diagnostikverktyg för att upptäcka olaglig blockering av delade Cloudflare-IP-adresser av spanska internetleverantörer.';

const faqData = [
  {
    question: 'Vad är Tebas-Check?',
    answer: 'Det är ett diagnostikverktyg som försöker ansluta till kända Cloudflare-IP-adresser som har blockerats rättsligt i Spanien för att förhindra åtkomst till piratsändningar. Problemet är att genom att blockera en delad IP-adress "går" tusentals legitima webbplatser sönder.',
  },
  {
    question: 'Varför blockerar min internetleverantör en Cloudflare-IP?',
    answer: 'På grund av dynamiska försiktighetsåtgärder där internetleverantörer måste blockera IP-adresser till servrar som påstås sända skyddat innehåll. Genom att använda Cloudflare (CDN) delar många webbplatser samma IP-adress, vilket orsakar sidoskador för oskyldiga användare.',
  },
  {
    question: 'Hur fungerar testet?',
    answer: 'Vi försöker ladda en liten resurs från de IP-adresser som markerats som blockerade. Om anslutningen misslyckas på grund av "Timeout" eller att anslutningen återställs endast på dessa IP-adresser, är det en tydlig indikator på att din leverantör tillämpar IP-filtrering.',
  },
  {
    question: 'Kan jag kringgå denna blockering?',
    answer: 'IP-blockeringar är svåra att kringgå enbart genom att byta DNS. Lösningen innebär vanligtvis att man använder en VPN, Tor-webbläsaren eller väntar på att Cloudflare tilldelar en ny IP-adress till den legitima tjänst du försöker besöka.',
  },
];

const howToData = [
  {
    name: 'Inaktivera VPN eller proxy',
    text: 'För att testet ska vara korrekt måste du använda din routers direktanslutning (Fiber eller 4G/5G) utan mellanhänder.',
  },
  {
    name: 'Starta skanningen',
    text: 'Klicka på diagnostikknappen. Verktyget skickar testpaket till de IP-adresser som misstänks för blockering.',
  },
  {
    name: 'Tolka resultaten',
    text: 'Om du ser resultat i rött betyder det att IP-adressen inte kan nås. Om den är grön flyter din trafik normalt.',
  },
  {
    name: 'Generera rapport',
    text: 'Du kan använda resultaten för att rapportera händelsen till din internetleverantör om de blockerar legitima tjänster.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<TebasCheckUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Referenser och kontext',
  bibliography: [
    {
      name: 'Cloudflare: Förstå IP-blockering',
      url: 'https://www.cloudflare.com/learning/network-layer/what-is-ip-blocking/',
    },
    {
      name: 'Spanska regler för dynamisk blockering',
      url: 'https://www.poderjudicial.es/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: 'Varför har allt slutat fungera?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Välkommen till den underbara världen av <strong>"förebyggande rättvisa"</strong>. Om du är här en söndagseftermiddag och legitima webbplatser har slutat laddas medan Twitter fungerar perfekt, är du förmodligen ett sidooffer i korståget mot olagliga fotbollssändningar.',
    },
    {
      type: 'paragraph',
      html: 'I Spanien har domare gett en "röd knapp" till vissa idrottsorganisationer. Denna knapp låter dem blockera IP-adresser i realtid utan direkt rättslig tillsyn minut för minut. Problemet är att de siktar med ett tivoligevär och ofta träffar delade servrar där, förutom "olagliga matcher", även sjukhus, universitet eller din favoritmatblogg huserar.',
    },
    {
      type: 'title',
      text: 'Teorin om den brinnande byggnaden',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Föreställ dig att en olaglig stream sänds från lägenhet 4B i en skyskrapa. Den logiska lösningen vore att knacka på dörren till 4B och bryta strömmen, eller hur?',
    },
    {
      type: 'paragraph',
      html: 'Nåväl, nej. Den nuvarande lösningen är att <strong>spränga grunden till hela byggnaden</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Genom att blockera IP-adressen för en tjänst som Cloudflare tar internetleverantören inte bara ner piraten, utan även de andra 50 000 legitima webbplatserna som delade samma digitala adress. Om du arbetade eller studerade och din webbplats använde den IP-adressen: otur, sidoskada. Klaga hos mästersmeden.',
    },
    {
      type: 'title',
      text: 'Vad gör det här diagnostikverktyget exakt?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Det här verktyget utför en teknisk analys i tre steg för att identifiera om din leverantör tillämpar selektiv IP-adressblockering:',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Ping Google',
          description: 'Vi kontrollerar om du har en "puls". Om Google inte laddas är problemet att du inte har betalat din Wi-Fi-räkning. Detta är baslinjetestet för anslutning.',
        },
        {
          title: 'Ping Cloudflare',
          description: 'Vi försöker nå 1.1.1.1. Det är "kanariefågeln i kolgruvan" för blockering i Spanien och huvudmålet för rättsliga blockeringar.',
        },
        {
          title: 'Dom',
          description: 'Om Google fungerar och Cloudflare misslyckas är det glasklart: din internetleverantör tillämpar selektiv IP-blockering av Cloudflare.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Inverkan av dynamisk blockering',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Falska positiva',
          description: 'Företagswebbplatser, personliga bloggar och statliga tjänster kan sluta fungera om de delar en IP-adress med en obehörig streamingserver.',
        },
        {
          title: 'IP filtrering',
          description: 'Till skillnad från DNS-blockering förhindrar IP-filtrering anslutning på nätverksnivå, vilket gör att det inte räcker att byta DNS för att lösa problemet.',
        },
        {
          title: 'Brist på transparens',
          description: 'Ofta ser användaren bara ett "Timeout"-fel utan att veta om problemet är deras anslutning eller en aktiv blockering från leverantören.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Frågor som ingen vill svara på',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Är det olagligt att använda detta?</strong> Nej. Att pinga en server är lika olagligt som att titta i ett skyltfönster. Det här verktyget är en passiv nätverksdiagnostik. Det bryter inte kryptering, knäcker inte lösenord och kommer inte åt skyddat innehåll. Det talar bara om för dig varför du inte kan komma åt dina vanliga webbplatser.',
        '<strong>Hur fixar jag det?</strong> Om du har en aktiv blockering hjälper det inte längre att byta DNS (de kan alla knep). Den enda verkliga lösningen idag är en <strong>VPN</strong>. Genom att kryptera din trafik kan din leverantör inte se vad du frågar efter eller till vem, och kan därför inte blockera dig "selektivt" (eller av misstag).',
      ],
    },
    {
      type: 'title',
      text: 'Streamer-läge / OBS-widget',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Är du en streamer och vill visa statusen för censur i realtid i din stream? Vi har skapat ett speciellt ultra-minimalistiskt läge, med transparent bakgrund (chroma-ready) och automatisk uppdatering var 5:e minut.',
    },
    {
      type: 'list',
      items: [
        '<strong>Steg 1:</strong> Lägg till en ny <strong>Webbläsare</strong>-källa i OBS.',
        '<strong>Steg 2:</strong> Använd denna URL: <code>https://jjlmoya.es/utilidades/tebas-check/stream/</code>',
        '<strong>Steg 3:</strong> Klart! En stor ikon (Grön/Röd) visas som indikerar om din anslutning är ren eller under rättslig attack.',
      ],
    },
    {
      type: 'tip',
      title: 'Rättsligt meddelande',
      html: '<p>Detta verktyg har ingen anknytning till någon idrottsorganisation, underlättar inte åtkomst till skyddat innehåll och kringgår inte tekniska skyddsåtgärder (DRM). Det informerar helt enkelt användaren om att deras internetanslutning är artificiellt försämrad.</p>',
    },
  ],
  ui: {
    faqTitle: 'Vanliga frågor',
    bibliographyTitle: 'Referenser och kontext',
    scanning: 'Skannar matrisen...',
    seekingBlocks: 'Letar efter betongblock i din fiber...',
    blockedTitle: 'BLOCKERAR...',
    blockedDiagnosis: 'Diagnos: "Selektiv censur"',
    blockedReason: 'Vi upptäckte störningar hos din leverantör. Cloudflare eller DNS manipuleras.',
    noInternetTitle: 'INGEN ANSLUTNING',
    noInternetReason: 'Det verkar som om du inte har tillgång till internet. Kontrollera din kabel eller fakturan.',
    successTitle: 'DU ÄR FRI',
    successReason: 'Din anslutning ser ren ut. Om det finns globala blockeringar påverkar de inte dig.',
    retryBtn: 'Utmana rättvisan igen',
    authorNoteTitle: 'Författarens anteckning:',
    authorNoteText: 'Jag har inte kunnat testa detta verktyg fullt ut eftersom jag inte påverkas av Tebas "svarta hand". Om du vill hjälpa mig att förbättra diagnosen, kontakta mig.',
    consoleHeader: 'TEBAS_OS v3.2.0',
    statusNegotiating: 'Förhandlar med din router...',
    statusDodging: 'Smitar från domstolens cirkulär...',
    statusCheckingPirate: 'Kontrollerar om du är en pirat (blink, blink)...',
    statusPinging: 'Pingar Google för att se om du existerar...',
    statusConsulting: 'Rådfrågar oraklet för delade IP-adresser...',
    statusCheckingFee: 'Kontrollerar om Tebas betalat egenavgiften...',
    statusCalculating: 'Beräknar sannolikheten att vinna på lotto...',
    statusDeciphering: 'Försöker tyda ditt kontrakt med leverantören...',
    logStarted: "STARTAR AUTONOMT PROTOKOLL 'TEBAS_WATCH'...",
    logDetecting: '> Detekterar leverantör och grundläggande anslutning...',
    logIspFound: '> Leverantör hittad: ',
    logConnError: '> Grundläggande anslutningsfel',
    logDnsCross: '> Utför DNS-datakontroll (DoH vs Lokal)...',
    logDnsGoogle: '> Verklig DNS (Google): ',
    logDnsPoisoned: '> VARNING: Förgiftad DNS upptäckt.',
    logDnsNoDoh: '> DoH ej tillgängligt, hoppar över DNS-kontroll.',
    logLaunchingProbes: '> Skickar sonder mot kritiska mål...',
    logIpBlocked: '> Mål {ip}: INGET SVAR (Misstänkt IP-blockering)',
    logIpActive: '> Mål {ip}: AKTIV',
    logAlertInterference: '!!! VARNING FÖR RÄTTSLIG STÖRNING !!!',
    logNoInternet: 'INGEN INTERNETÅTKOMST',
    logClean: 'REN ANSLUTNING. NJUT.',
    logDiagError: 'DIAGNOSTIKFEL',
  },
};
