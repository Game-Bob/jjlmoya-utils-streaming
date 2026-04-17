import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SorteoUI } from '../ui';

const slug = 'naam-kiezer';
const title = 'Willekeurige Naam Kiezer voor Streaming';
const description =
  'Kies willekeurig een winnaar uit een lijst met namen. Gratis, snelle en visuele giveaway-tool voor Twitch, YouTube en evenementen.';

const faqData = [
  {
    question: 'Is deze verloting echt willekeurig?',
    answer:
      'Ja, we gebruiken het cryptografische willekeurigheidsalgoritme van de browser (Web Crypto API) om ervoor te zorgen dat elke deelnemer precies dezelfde kans heeft om te winnen, zonder bias of manipulatie.',
  },
  {
    question: 'Kan ik deze kiezer op Twitch of YouTube gebruiken?',
    answer:
      'Absoluut. Omdat het een webtool is, kun je het venster vastleggen met OBS of je scherm rechtstreeks delen. Het strakke ontwerp en de animaties zijn zo ontworpen dat het publiek het proces in volledige transparantie kan zien.',
  },
  {
    question: 'Hoe voorkom ik dat iemand twee keer deelneemt?',
    answer:
      'De tool heeft een automatische functie voor het "opschonen van duplicaten" die identieke namen of namen met kleine variaties in spaties detecteert om ervoor te zorgen dat elke echte persoon slechts één keer telt.',
  },
  {
    question: 'Kan ik meerdere winnaars tegelijk trekken?',
    answer:
      'Ja, je kunt het gewenste aantal winnaars configureren voordat je op de knop klikt. De tool vermeldt de gelukkigen duidelijk, zodat je ze kunt noemen in je livestream.',
  },
  {
    question: 'Hoeveel namen kan ik aan de lijst toevoegen?',
    answer:
      'Er is geen strikte limiet opgelegd door de tool. We hebben de engine geoptimaliseerd om lijsten met duizenden deelnemers te verwerken zonder prestatieproblemen, waardoor het ideaal is, zelfs voor massale giveaways.',
  },
  {
    question: 'Worden mijn gegevens of de deelnemerslijst opgeslagen?',
    answer:
      'Nee, nooit. Je privacy komt op de eerste plaats. Het hele lotingsproces wordt lokaal in je webbrowser uitgevoerd. De namen die je invoert, worden nooit naar onze servers verzonden of in een database opgeslagen.',
  },
];

const howToData = [
  {
    name: 'Bereid de deelnemerslijst voor',
    text: 'Kopieer de lijst met namen uit je chat, Excel of sociale netwerk en plak deze in het tekstvak.',
  },
  {
    name: 'Configureer giveaway-opties',
    text: 'Kies hoeveel winnaars je nodig hebt en of je duplicaten of lege namen wilt filteren.',
  },
  {
    name: 'Lanceer de "onschuldige hand"',
    text: 'Klik op de lotingsknop. Een visuele animatie houdt de spanning erin voordat de winnaar bekend wordt gemaakt.',
  },
  {
    name: 'Maak resultaten bekend',
    text: 'Kopieer de namen van de winnaars om ze te delen op je sociale netwerken of streamingchat.',
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

export const content: ToolLocaleContent<SorteoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde vragen',
  faq: faqData,
  bibliographyTitle: 'Technische Referenties',
  bibliography: [
    {
      name: 'Web Crypto API: getRandomValues()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues',
    },
    {
      name: 'Fisher-Yates Shuffle Algoritme',
      url: 'https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: 'Online Willekeurige Naam Kiezer en Deelnemerslijst',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Vraag je je af hoe je snel, veilig en volledig transparant een online verloting kunt houden? Onze gratis <strong>Naam Kiezer</strong> tool is de ultieme oplossing om in enkele seconden een willekeurige winnaar te kiezen. Ontworpen om eenvoudig, visueel en effectief te zijn, is het perfect voor elk scenario waarin je een digitale "onschuldige hand" nodig hebt.',
    },
    {
      type: 'paragraph',
      html: 'Of je nu een wedstrijd op sociale netwerken beheert, een massale giveaway op je streamingkanaal houdt of gewoon beslist wie vandaag het vuilnis buiten zet, onze willekeurige selector garandeert totale onpartijdigheid dankzij moderne cryptografische algoritmen. <strong>Geen manipulatie, geen bias, gewoon pure willekeur.</strong>'
    },
    {
      type: 'title',
      text: 'Gebruiksscenario\'s',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Social Media Giveaways',
          description: 'Ideaal voor Instagram-, Twitter (X)- of Facebook-wedstrijden. Kopieer eenvoudig de namen uit de reacties en plak ze om een eerlijke winnaar te kiezen. De tool verwijdert automatisch duplicaten.',
        },
        {
          title: 'Twitch / YouTube Streaming',
          description: 'Dankzij onze Studio Mode met vloeiende animaties en geïntegreerde geluiden kun je je scherm rechtstreeks delen in OBS en een opwindende visuele show aan je publiek bieden terwijl je live winnaars kiest.',
        },
        {
          title: 'Klasse en Teamdynamiek',
          description: 'Docenten en teamleiders kunnen het gebruiken om willekeurige groepen te vormen, te kiezen wie het eerst presenteert of taken willekeurig toe te wijzen met totale transparantie en zonder vriendjespolitiek.',
        },
        {
          title: 'Secret Santa en Evenementen',
          description: 'Vereenvoudig de organisatie von familie-evenementen, kantoorlotingen of Secret Santa door onmiddellijk willekeurig namen te kiezen zonder papierwerk of ingewikkelde logistiek.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Waarom is onze tool anders?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Echte Cryptografie:</strong> We gebruiken de Web Crypto API van de browser (W3C-standaard) in plaats van zwakke pseudo-willekeurige generatoren. Elke trekking is wiskundig onpartijdig.',
        '<strong>Geen Opslag:</strong> Je gegevens verlaten nooit je browser. We verkopen geen lijsten, we profileren je niet, we slaan niets op. Puur lokale verwerking.',
        '<strong>Visueel Ontwerp:</strong> De bioscoopmodus en animaties maken van elke giveaway een gedenkwaardige gebeurtenis. Perfect voor OBS-opnames of live streaming.',
        '<strong>Duplicaatbeheer:</strong> Detecteert automatisch herhaalde namen of varianten (extra spaties, hoofdletters, etc.) om ervoor te zorgen dat elke echte persoon slechts één keer telt.',
      ],
    },
    {
      type: 'title',
      text: 'Hoe gebruik je de giveaway stap voor stap',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Stap 1 - Deelnemers invoeren:</strong> Plak je namenlijst in het hoofdtekstvak. De tool detecteert automatisch elke regeleinde als een andere deelnemer. Heb je duplicaten? Geen probleem, de tool verwijdert ze.',
        '<strong>Stap 2 - Aanpassen:</strong> In het instellingentabblad kun je het aftellen inschakelen om spanning te creëren, het confetti-effect om feest te vieren, of de "zwarte lijst" om bepaalde namen uit te sluiten.',
        '<strong>Stap 3 - Trekking!</strong> Klik op de hoofdknop en onze engine genereert een cryptografisch veilige willekeurige selectie. De winnaars worden duidelijk en memorabel weergegeven.',
      ],
    },
    {
      type: 'title',
      text: 'Gewogen Vermeldingen: Geef Voordeel aan Bepaalde Deelnemers',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wil je je meest loyale abonnees belonen of bepaalde deelnemers meer kansen geven? Ons systeem van <strong>Gewogen Vermeldingen</strong> is uniek en stelt je in staat om een "gewicht" of vermenigvuldiger aan elke naam toe te wijzen zonder deze meerdere keren te hoeven schrijven.',
    },
    {
      type: 'tip',
      title: 'Hoe gewichten aan namen toe te wijzen',
      html: '<p>Gebruik een sterretje (*) of een "x" gevolgd door het aantal deelnames. Voorbeelden:</p><ul><li><strong>"Jan * 5"</strong> - Jan doet mee alsof hij 5 personen is</li><li><strong>"Maria x 10"</strong> - Maria heeft 10 keer meer kans</li><li><strong>"Piet"</strong> - Geen symbool = 1 normale deelname</li></ul><p>Dit is perfect voor giveaways waarbij je VIP-abonnees of speciale gebruikers een voordeel wilt geven.</p>',
    },
    {
      type: 'title',
      text: 'Totale Privacy en Veiligheid',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'In tegenstelling tot andere online tools <strong>slaan we je gegevens niet op</strong>. Alle verwerking van namen en uitvoering van de trekking gebeurt lokaal in je eigen browser. Je deelnemerslijsten reizen nooit over het netwerk en worden niet opgeslagen op een externe server.',
    },
    {
      type: 'paragraph',
      html: '<strong>Wat betekent dit?</strong> Je deelnemerslijst is van jou en van jou alleen. Bij het sluiten van het tabblad verdwijnt deze. Geen tracking cookies, geen gebruikersprofielen, geen centrale database. Maximale privacy gegarandeerd voor jou en degenen die deelnemen aan je giveaways.',
    },
    {
      type: 'title',
      text: 'Wiskundige Transparantie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sommigen vragen zich misschien af: "Wat als jullie de resultaten manipuleren?" Het antwoord is simpel: <strong>dat kunnen we niet</strong>. De lotingscode is deterministisch en cryptografisch. Geen verborgen variabelen, geen "vingers in de pap".',
    },
    {
      type: 'paragraph',
      html: 'Elke winnaar is het directe resultaat van het Fisher-Yates Shuffle-algoritme dat op je exacte lijst is toegepast, met behulp van echte cryptografische entropie. Als je het proces wilt auditen, is de code beschikbaar op GitHub voor openbare inspectie.',
    },
  ],
  ui: {
    faqTitle: 'Veelgestelde vragen',
    bibliographyTitle: 'Technische Referenties',
    title: 'Willekeurige Giveaway',
    totalParticipants: 'Totaal Unieke Deelnemers',
    ready: 'GEREED',
    participants: 'Deelnemers',
    settings: 'Instellingen',
    importFile: 'Bestand Importeren',
    clearAll: 'Alles wissen',
    placeholder: 'Typ of plak hier namen...\nJan Janssen\nMaria de Vries\n@twitch_gebruiker',
    onePerLine: '1 deelnemer per regel',
    lines: 'regels',
    filters: 'Filters',
    allowDuplicates: 'Duplicaten Toestaan',
    winnerCount: 'Aantal Winnaars',
    autoRemove: 'Winnaar Automatisch Verwijderen',
    blacklist: 'Zwarte lijst (Uitsluiten)',
    blacklistPlaceholder: 'Verboden namen (één per regel)...',
    blacklistInfo: 'Deze gebruikers doen niet mee aan de loting.',
    sceneEffects: 'Scène-effecten',
    countdown: 'Aftellen (3s)',
    confetti: 'Overwinningsconfetti',
    zenMode: 'Zen-modus (Paneel verbergen)',
    waitingParticipants: 'Wachten op deelnemers...',
    winner: 'WINNAAR',
    reroll: 'Opnieuw trekken',
    history: 'Geschiedenis voor deze sessie',
    noWinnersYet: 'Nog geen winnaars...',
    startGiveaway: 'Start Giveaway',
    studioHeader: 'LIVE STUDIO v2.0',
  },
};
