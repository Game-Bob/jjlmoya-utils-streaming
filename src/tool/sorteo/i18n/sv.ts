import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SorteoUI } from '../ui';

const slug = 'slumpartad-namnvaljare';
const title = 'Slumpartad namnväljare för streaming';
const description =
  'Välj en vinnare slumpmässigt från en lista med namn. Gratis, snabbt och visuellt giveaway-verktyg för Twitch, YouTube och evenemang.';

const faqData = [
  {
    question: 'Är denna utlottning verkligen slumpartad?',
    answer:
      'Ja, vi använder webbläsarens kryptografiska slumptalsalgoritm (Web Crypto API) för att säkerställa att varje deltagare har exakt samma sannolikhet att vinna, utan partiskhet eller manipulation.',
  },
  {
    question: 'Kan jag använda denna namnväljare på Twitch eller YouTube?',
    answer:
      'Absolut. Eftersom det är ett webbverktyg kan du fånga fönstret med OBS eller dela din skärm direkt. Den rena designen och animationerna är utformade så att publiken ser processen med total transparens.',
  },
  {
    question: 'Hur förhindrar jag att någon deltar två gånger?',
    answer:
      'Verktyget har en automatisk funktion för "duplikatrensning" som upptäcker identiska namn eller namn med små variationer i mellanslag för att säkerställa att varje verklig person räknas endast en gång.',
  },
  {
    question: 'Kan jag dra flera vinnare samtidigt?',
    answer:
      'Ja, du kan konfigurera antalet önskade vinnare innan du klickar på knappen. Verktyget kommer att lista de lyckliga tydligt så att du kan nämna dem i din livesändning.',
  },
  {
    question: 'Hur många namn kan jag lägga till i listan?',
    answer:
      'Det finns ingen strikt gräns från verktygets sida. Vi har optimerat motorn för att hantera listor med tusentals deltagare utan prestandaproblem, vilket gör den idealisk även för massiva giveaways.',
  },
  {
    question: 'Sparas mina data eller deltagarlistan?',
    answer:
      'Nej, aldrig. Din integritet kommer först. Hela utlottningsprocessen körs lokalt i din webbläsare. Namnen du skriver in skickas aldrig till våra servrar eller lagras i någon databas.',
  },
];

const howToData = [
  {
    name: 'Förbered deltagarlistan',
    text: 'Kopiera listan med namn från din chatt, Excel eller sociala nätverk och klistra in den i textrutan.',
  },
  {
    name: 'Konfigurera giveaway-alternativ',
    text: 'Välj hur många vinnare du behöver och om du vill filtrera bort duplikat eller tomma namn.',
  },
  {
    name: 'Starta den "oskyldiga handen"',
    text: 'Klicka på utlottningsknappen. En visuell animation kommer att hålla spänningen uppe innan vinnaren avslöjas.',
  },
  {
    name: 'Meddela resultat',
    text: 'Kopiera namnen på vinnarna för att dela dem på dina sociala nätverk eller i din streamingchatt.',
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

export const content: ToolLocaleContent<SorteoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Tekniska referenser',
  bibliography: [
    {
      name: 'Web Crypto API: getRandomValues()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues',
    },
    {
      name: 'Fisher-Yates Shuffle Algorithm',
      url: 'https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: 'Online slumpartad namnväljare och deltagarlista',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Undrar du hur man gör en slumpmässig utlottning online snabbt, säkert och helt transparent? Vårt kostnadsfria verktyg <strong>Namnväljare</strong> är den ultimata lösningen för att välja en vinnare slumpmässigt på några sekunder. Designat för att vara enkelt, visuellt och effektivt, är det perfekt för alla scenarier där du behöver en digital "oskyldig hand".',
    },
    {
      type: 'paragraph',
      html: 'Oavsett om du hanterar en tävling på sociala nätverk, en massiv giveaway på din streamingkanal eller helt enkelt bestämmer vem som ska ta ut soporna idag, garanterar vår slumpväljare total opartiskhet tack vare moderna kryptografiska algoritmer. <strong>Ingen manipulation, ingen partiskhet, bara ren slumpmässighet.</strong>'
    },
    {
      type: 'title',
      text: 'Användningsområden',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Giveaways på sociala medier',
          description: 'Idéaliskt för tävlingar på Instagram, Twitter (X) eller Facebook. Kopiera helt enkelt namn från kommentarer och klistra in dem för att välja en rättvis vinnare. Verktyget tar automatiskt bort duplikat.',
        },
        {
          title: 'Twitch / YouTube Streaming',
          description: 'Tack vare vårt Studio-läge med mjuka animationer och integrerade ljud kan du dela din skärm direkt i OBS och erbjuda en spännande visuell show för din publik medan du väljer vinnare live.',
        },
        {
          title: 'Klass och teamdynamik',
          description: 'Lärare och teamledare kan använda det för att bilda slumpmässiga grupper, välja vem som presenterar först eller tilldela uppgifter slumpmässigt med total transparens och utan favorisering.',
        },
        {
          title: 'Secret Santa och evenemang',
          description: 'Förenkla organiseringen av familjeevenemang, kontorsutlottningar eller Secret Santa genom att välja namn slumpmässigt direkt utan behov av papper eller komplicerad logistik.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Varför är vårt verktyg annorlunda?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Riktig kryptografi:</strong> Vi använder webbläsarens Web Crypto API (W3C-standard) istället for svaga pseudoslumpmässiga generatorer. Varje utlottning är matematiskt opartisk.',
        '<strong>Ingen lagring:</strong> Dina data lämnar aldrig din webbläsare. Vi säljer inte listor, vi profilerar dig inte, vi lagrar ingenting. Rent lokal bearbetning.',
        '<strong>Visuell design:</strong> Bioläge och animationer gör varje giveaway till en minnesvärd händelse. Perfekt för OBS-fångst eller livesändning.',
        '<strong>Duplikathantering:</strong> Upptäcker automatiskt upprepade namn eller varianter (extra mellanslag, stora/små bokstäver, etc.) för att säkerställa att varje verklig person räknas endast en gång.',
      ],
    },
    {
      type: 'title',
      text: 'Hur man använder utlottningen steg för steg',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Steg 1 - Ange deltagare:</strong> Klistra in din lista med namn i huvudtextrutan. Verktyget känner automatiskt av varje radbrytning som en ny deltagare. Har du duplikat? Inga problem, verktyget tar bort dem.',
        '<strong>Steg 2 - Anpassa:</strong> Under fliken inställningar kan du aktivera nedräkning för att skapa spänning, konfettieffekt för att fira, eller aktivera "svartlistan" för att utesluta vissa namn.',
        '<strong>Steg 3 - Dra!</strong> Klicka på huvudknappen så genererar vår motor ett kryptografiskt säkert slumpmässigt val. Vinnarna kommer att visas tydligt och minnesvärt.',
      ],
    },
    {
      type: 'title',
      text: 'Viktade bidrag: Ge fördel åt vissa deltagare',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vill du belöna dina mest lojala prenumeranter eller ge fler möjligheter till vissa deltagare? Vårt system för <strong>viktade bidrag</strong> är unikt och låter dig tilldela en "vikt" eller multiplikator till vilket namn som helst utan att behöva skriva det flera gånger.',
    },
    {
      type: 'tip',
      title: 'Hur man tilldelar vikter till namn',
      html: '<p>Använd en asterisk (*) eller ett "x" följt av antalet deltaganden. Exempel:</p><ul><li><strong>"Johan * 5"</strong> - Johan tävlar som om han vore 5 personer</li><li><strong>"Maria x 10"</strong> - Maria har 10 gånger fler chanser</li><li><strong>"Peter"</strong> - Ingen symbol = 1 vanligt bidrag</li></ul><p>Detta är perfekt för giveaways där du vill ge VIP-prenumeranter eller speciella användare en fördel.</p>',
    },
    {
      type: 'title',
      text: 'Total integritet och säkerhet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Till skillnad från andra onlineverktyg <strong>lagrar vi inte dina data</strong>. All bearbetning av namn och utförande av utlottningen sker lokalt i din egen webbläsare. Dina deltagarlistor skickas aldrig över nätverket eller sparas på någon extern server.',
    },
    {
      type: 'paragraph',
      html: '<strong>Vad betyder detta?</strong> Din deltagarlista är din och bara din. När du stänger fliken försvinner den. Inga spårningscookies, inga användarprofiler, ingen central databas. Maximal integritet garanteras för dig och de som deltar i dina giveaways.',
    },
    {
      type: 'title',
      text: 'Matematisk transparens',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vissa kanske undrar: "Tänk om ni manipulerar resultaten?". Svaret är enkelt: <strong>det kan vi inte</strong>. Utlottningskoden är deterministisk och kryptografisk. Inga dolda variabler, inga "fingrar i spelet".',
    },
    {
      type: 'paragraph',
      html: 'Varje vinnare är det direkta resultatet av Fisher-Yates Shuffle-algoritmen tillämpad på din exakta lista, med hjälp av verklig kryptografisk entropi. Om du vill granska processen finns koden tillgänglig på GitHub för offentlig granskning.',
    },
  ],
  ui: {
    faqTitle: 'Vanliga frågor',
    bibliographyTitle: 'Tekniska referenser',
    title: 'Slumpartad utlottning',
    totalParticipants: 'Totalt antal unika deltagare',
    ready: 'REDO',
    participants: 'Deltagare',
    settings: 'Inställningar',
    importFile: 'Importera fil',
    clearAll: 'Rensa allt',
    placeholder: 'Skriv eller klistra in namn här...\nJohan Johansson\nMaria Svensson\n@twitch_användare',
    onePerLine: '1 deltagare per rad',
    lines: 'rader',
    filters: 'Filter',
    allowDuplicates: 'Tillåt duplikat',
    winnerCount: 'Antal vinnare',
    autoRemove: 'Ta bort vinnare automatiskt',
    blacklist: 'Svartlista (Exkludera)',
    blacklistPlaceholder: 'Förbjudna namn (ett per rad)...',
    blacklistInfo: 'Dessa användare kommer inte att delta i utlottningen.',
    sceneEffects: 'Sceneffekter',
    countdown: 'Nedräkning (3s)',
    confetti: 'Segerkonfetti',
    zenMode: 'Zen-läge (Dölj panel)',
    waitingParticipants: 'Väntar på deltagare...',
    winner: 'VINNARE',
    reroll: 'Dra igen',
    history: 'Historik för denna session',
    noWinnersYet: 'Inga vinnare än...',
    startGiveaway: 'Starta utlottning',
    studioHeader: 'LIVE STUDIO v2.0',
  },
};
