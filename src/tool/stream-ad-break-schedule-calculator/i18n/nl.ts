import type { SEOSection } from '../../../types';
import { makeContent } from './content';

const faq = [
  { question: 'Hoe plaatst de calculator een advertentiepauze?', answer: 'De calculator vergelijkt de contentminuten met het gekozen interval en plaatst een pauze op de eerstvolgende beschikbare grens. Een blok wordt nooit doormidden geknipt.' },
  { question: 'Welk formaat gebruik ik voor contentblokken?', answer: 'Voer per regel Naam | minuten in, bijvoorbeeld Opening | 15. De volgorde vormt je draaiboek.' },
  { question: 'Waarom komt de pauze later dan het interval?', answer: 'De calculator respecteert de grenzen van je blokken. Als een lang blok het interval overschrijdt, schuift de pauze door naar de volgende grens en wordt dat gemarkeerd.' },
  { question: 'Volgt dit een advertentieregel van een platform?', answer: 'Nee. Dit is een planningsmodel op basis van je interval, pauzeduur en showopbouw. Controleer de actuele regels van platform, contract en regio.' },
  { question: 'Zit de pauze in de eindtijd?', answer: 'Ja. Contenttijd en advertentietijd blijven apart zichtbaar, maar de eindtijd telt alle geplande pauzes mee.' },
];
const howTo = [
  { name: 'Start en pauzeregels instellen', text: 'Kies de starttijd, geplande contentminuten, het pauze-interval en de duur van elke pauze.' },
  { name: 'Het draaiboek invoeren', text: 'Schrijf elk blok als Naam | minuten. Zet grenzen waar de presentator natuurlijk kan stoppen.' },
  { name: 'De tijdlijn lezen', text: 'Bekijk waar pauzes vallen, hoeveel tijd ze toevoegen en of een lang blok het doel verschuift.' },
  { name: 'Het productieschema kopiëren', text: 'Controleer waarschuwingen en kopieer daarna de tijdlijst voor productie, moderatie of scènenotities.' },
];
const seo: SEOSection[] = [
  { type: 'title', text: 'Pauzes rond de show plannen', level: 2 },
  { type: 'paragraph', html: 'Een livestream heeft twee klokken: de minuten voor content en de echte klok met pauzes. Deze calculator toont beide en berekent de eindtijd op basis van draaiboek, interval en pauzeduur.' },
  { type: 'paragraph', html: 'Wanneer de contentklok het interval bereikt, krijgt de eerstvolgende geschikte blokgrens een pauze. Zo kun je voor de start een blok verplaatsen, inkorten of de vertraging bewust accepteren.' },
  { type: 'title', text: 'Blokgrenzen als productiesignalen gebruiken', level: 2 },
  { type: 'paragraph', html: 'Goede momenten zijn een opening, een onderwerpwissel, een wedstrijd of een geplande onderbreking. Een enkel lang blok heeft geen veilig stoppunt; de waarschuwing maakt die redactionele keuze zichtbaar.' },
  { type: 'list', items: ['Splits een lang interview in welkom, gesprek en vragen.', 'Houd de afsluiting als laatste blok.', 'Vergelijk contentminuten met de eindtijd inclusief advertenties.', 'Geef het schema aan degene die de pauzes start.'] },
  { type: 'title', text: 'De drie tijdsignalen lezen', level: 2 },
  { type: 'table', headers: ['Signaal', 'Betekenis', 'Actie'], rows: [['Content', 'Minuten uit je draaiboek', 'Controleer of de redactionele duur klopt'], ['Advertentietijd', 'Extra minuten door pauzes', 'Informeer presentator en productie'], ['Einde op zender', 'Start plus content en pauzes', 'Reserveer studio- of overdrachtstijd']] },
  { type: 'tip', title: 'Geen platformgarantie', html: 'Het resultaat is een lokaal draaiboek. Het start geen advertenties en bevestigt niet wat kijkers zien, wat een contract toestaat of welke wet geldt. Controleer de actuele voorwaarden.' },
  { type: 'title', text: 'Het schema bruikbaar maken in de regie', level: 2 },
  { type: 'paragraph', html: 'Kopieer het schema nadat je de waarschuwingen hebt gelezen. De tijden helpen bij scènes, moderators en overgangen. Als er geen pauze verschijnt, maak dan een natuurlijke redactionele grens.' },
  { type: 'tip', title: 'Controleer de echte klok na de repetitie', html: 'Gesprekken en technische overgangen lopen vaak uit. Gebruik dit als basis en werk de blokminuten bij na een repetitie.' },
];
export const content = makeContent({
  slug: 'calculator-advertentiepauzes-livestream',
  title: 'Calculator voor advertentiepauzes in livestreams',
  description: 'Maak van je livestreamdraaiboek een schema voor advertentiepauzes en bereken de echte eindtijd.',
  ui: {
    startTimeLabel: 'Starttijd live', startTimeHint: 'Wanneer de stream begint', streamDurationLabel: 'Geplande contentminuten', streamDurationHint: 'Showduur zonder pauzes', cadenceLabel: 'Pauze-interval', cadenceHint: 'Plaats een pauze na dit aantal contentminuten', breakLengthLabel: 'Pauzeduur', breakLengthHint: 'Minuten die aan de klok worden toegevoegd', segmentsLabel: 'Draaiboek', segmentsHint: 'Een regel per blok: Naam | minuten', presetsLabel: 'Begin met een showvorm', presetQuick: 'Show van twee uur', presetLong: 'Lang evenement', presetInterview: 'Interviewstream', scheduleLabel: 'Tijdlijn op zender', scheduleHint: 'Pauzes vallen op de eerste beschikbare grens na het interval.', contentTotalLabel: 'Content', adsTotalLabel: 'Advertentietijd', plannedEndLabel: 'Einde op zender', breaksLabel: 'Pauzes', stateReady: 'Bruikbare grenzen', stateWarning: 'Tijdspanning controleren', stateEmpty: 'Draaiboek toevoegen', stateReadyText: 'Dit schema kan als eerste productiedraaiboek worden gedeeld.', stateWarningText: 'Een regel is ongeldig of het interval raakt geen natuurlijke blokgrens.', stateEmptyText: 'Voeg minstens twee blokken toe om een pauze ertussen te plaatsen.', copyLabel: 'Draaiboek kopiëren', resetLabel: 'Voorbeeld herstellen', copiedLabel: 'Draaiboek gekopieerd', copyErrorLabel: 'Kopiëren is geblokkeerd. Selecteer het schema en kopieer het handmatig.', segmentKind: 'Content', breakKind: 'Advertentiepauze', minutesShort: 'min', noEntriesText: 'Hier verschijnt je tijdlijn.', invalidLineText: 'Controleer regel {lines}. Gebruik Naam | minuten.', plannedMismatchText: 'Het draaiboek wijkt {difference} af van de geplande duur.', boundaryWarningText: 'Geen pauze geplaatst: het interval wordt binnen één blok bereikt. Voeg een grens toe of splits het blok.'
  }, seo, faq, howTo,
});
