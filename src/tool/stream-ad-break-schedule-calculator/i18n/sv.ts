import type { SEOSection } from '../../../types';
import { makeContent } from './content';

const faq = [
  { question: 'Hur placerar kalkylatorn en reklampaus?', answer: 'Den jämför innehållsminuterna med valt intervall och placerar pausen vid den första tillgängliga blockgränsen efter den punkten. Ett block delas aldrig.' },
  { question: 'Vilket format ska innehållsblocken ha?', answer: 'Skriv ett block per rad som Namn | minuter, till exempel Öppning | 15. Ordningen blir ditt körschema.' },
  { question: 'Varför kan pausen hamna efter intervallet?', answer: 'Kalkylatorn respekterar blockgränserna. Om ett långt block passerar intervallet flyttas pausen till nästa gräns och avvikelsen markeras.' },
  { question: 'Följer detta en annonsregel för en plattform?', answer: 'Nej. Det är en planeringsmodell utifrån ditt intervall, din pauslängd och programmets struktur. Kontrollera aktuella regler för plattform, avtal och region.' },
  { question: 'Ingår pauserna i sluttiden?', answer: 'Ja. Innehållstid och annonstid visas separat, men sluttiden räknar med alla planerade pauser.' },
];
const howTo = [
  { name: 'Ställ in start och pausregler', text: 'Välj starttid, planerade innehållsminuter, intervall och längd för varje paus.' },
  { name: 'Skriv körschemat', text: 'Skriv varje block som Namn | minuter. Lägg gränser där programledaren kan pausa naturligt.' },
  { name: 'Läs tidslinjen', text: 'Se var pauserna hamnar, hur mycket tid de lägger till och om ett långt block skjuter målet framåt.' },
  { name: 'Kopiera produktionsplanen', text: 'Kontrollera varningarna och kopiera sedan tidslistan för produktion, moderatorer eller scennoteringar.' },
];
const seo: SEOSection[] = [
  { type: 'title', text: 'Planera pauser runt programmet', level: 2 },
  { type: 'paragraph', html: 'En livesändning har två klockor: minuterna för innehåll och den riktiga tiden med pauser. Den här kalkylatorn visar båda och räknar ut sluttiden från körschema, intervall och pauslängd.' },
  { type: 'paragraph', html: 'När innehållsklockan når intervallet får nästa lämpliga blockgräns en paus. Före sändningen kan du flytta eller korta ett block, eller medvetet acceptera förskjutningen.' },
  { type: 'title', text: 'Använd blockgränser som produktionssignaler', level: 2 },
  { type: 'paragraph', html: 'Bra pauser kommer efter en öppning, ett ämnesbyte, en match eller ett planerat avbrott. Ett enda långt block saknar en säker punkt; varningen gör det redaktionella valet tydligt.' },
  { type: 'list', items: ['Dela ett långt samtal i välkomstord, samtal och frågor.', 'Låt avslutningen vara det sista blocket.', 'Jämför innehållsminuterna med sluttiden inklusive annonser.', 'Ge planen till personen som startar pauserna.'] },
  { type: 'title', text: 'Läs de tre tidssignalerna', level: 2 },
  { type: 'table', headers: ['Signal', 'Betydelse', 'Åtgärd'], rows: [['Innehåll', 'Minuter i körschemat', 'Kontrollera att den redaktionella längden stämmer'], ['Annonstid', 'Extra minuter från pauser', 'Informera programledare och produktion'], ['Slut i sändning', 'Start plus innehåll och pauser', 'Reservera rätt studio- eller överlämningstid']] },
  { type: 'tip', title: 'Ingen plattformsgaranti', html: 'Resultatet är ett lokalt körschema. Det startar inga annonser och bekräftar inte vad tittare ser, vad ett avtal tillåter eller vilken lag som gäller. Kontrollera alltid aktuella villkor.' },
  { type: 'title', text: 'Gör planen användbar i kontrollrummet', level: 2 },
  { type: 'paragraph', html: 'Kopiera planen efter att du läst varningarna. Tiderna hjälper till med scener, moderatorer och övergångar. Om ingen paus syns, skapa en naturlig redaktionell gräns.' },
  { type: 'tip', title: 'Kontrollera den riktiga klockan efter repetition', html: 'Samtal och tekniska övergångar blir ofta längre. Använd beräkningen som grund och uppdatera minuterna efter repetitionen.' },
];
export const content = makeContent({
  slug: 'kalkylator-reklampauser-livestream',
  title: 'Kalkylator för reklampauser i livestream',
  description: 'Gör om ditt körschema för livestream till ett schema för reklampauser och räkna ut den riktiga sluttiden.',
  ui: {
    startTimeLabel: 'Starttid live', startTimeHint: 'När streamen börjar', streamDurationLabel: 'Planerade innehållsminuter', streamDurationHint: 'Programtid utan pauser', cadenceLabel: 'Pausintervall', cadenceHint: 'Lägg en paus efter detta antal innehållsminuter', breakLengthLabel: 'Pauslängd', breakLengthHint: 'Minuter som läggs till på klockan', segmentsLabel: 'Körschema', segmentsHint: 'En rad per block: Namn | minuter', presetsLabel: 'Börja med en programform', presetQuick: 'Tvåtimmarssändning', presetLong: 'Långt evenemang', presetInterview: 'Intervjustream', scheduleLabel: 'Tidslinje i sändning', scheduleHint: 'Pauser hamnar vid första möjliga gräns efter intervallet.', contentTotalLabel: 'Innehåll', adsTotalLabel: 'Annonstid', plannedEndLabel: 'Slut i sändning', breaksLabel: 'Pauser', stateReady: 'Användbara gränser', stateWarning: 'Kontrollera tidspänningen', stateEmpty: 'Lägg till körschema', stateReadyText: 'Schemat kan lämnas till produktionen som ett första körschema.', stateWarningText: 'En rad är ogiltig eller intervallet träffar ingen naturlig blockgräns.', stateEmptyText: 'Lägg till minst två block för att placera en paus mellan dem.', copyLabel: 'Kopiera körschema', resetLabel: 'Återställ exempel', copiedLabel: 'Körschema kopierat', copyErrorLabel: 'Kopieringen blockerades. Markera schemat och kopiera manuellt.', segmentKind: 'Innehåll', breakKind: 'Reklampaus', minutesShort: 'min', noEntriesText: 'Din tidslinje visas här.', invalidLineText: 'Kontrollera rad {lines}. Använd Namn | minuter.', plannedMismatchText: 'Körschemat skiljer sig från planerad tid med {difference}.', boundaryWarningText: 'Ingen paus placerades eftersom intervallet nås inuti ett block. Lägg till en gräns eller dela blocket.'
  }, seo, faq, howTo,
});
