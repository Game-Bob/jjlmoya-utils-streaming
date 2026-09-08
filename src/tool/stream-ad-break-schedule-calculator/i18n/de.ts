import type { SEOSection } from '../../../types';
import { makeContent } from './content';

const faq = [
  { question: 'Wie setzt der Rechner eine Werbepause?', answer: 'Er vergleicht die Inhaltsminuten mit dem gewählten Abstand und setzt eine Pause an die erste verfügbare Grenze danach. Ein Block wird nie geteilt.' },
  { question: 'Welches Format haben die Inhaltsblöcke?', answer: 'Gib pro Zeile Blockname | Minuten ein, zum Beispiel Einstieg | 15. Die Reihenfolge ist dein Ablaufplan.' },
  { question: 'Warum liegt die Pause später als der Abstand?', answer: 'Der Rechner respektiert deine Blockgrenzen. Wenn ein Block den Abstand überschreitet, wird die Pause an die nächste Grenze verschoben und markiert.' },
  { question: 'Befolgt das eine Werberegel einer Plattform?', answer: 'Nein. Es ist ein Planungsmodell mit deinem Abstand, deiner Pausenlänge und deinem Ablauf. Prüfe die aktuellen Regeln deiner Plattform, deines Vertrags und deiner Region.' },
  { question: 'Enthält die Endzeit die Pausen?', answer: 'Ja. Inhaltszeit und Werbezeit bleiben getrennt, aber die Endzeit enthält jede geplante Pause.' },
];
const howTo = [
  { name: 'Start und Pausenregeln festlegen', text: 'Wähle Startzeit, geplante Inhaltsminuten, Abstand zwischen Pausen und Dauer jeder Pause.' },
  { name: 'Ablaufplan eingeben', text: 'Schreibe jeden Block als Name | Minuten. Setze Grenzen an Stellen, an denen der Host natürlich pausieren kann.' },
  { name: 'Zeitschiene prüfen', text: 'Sieh, wo die Pausen landen, wie viel Zeit sie hinzufügen und ob ein langer Block den Zielabstand verschiebt.' },
  { name: 'Produktionsplan kopieren', text: 'Prüfe Warnungen und kopiere anschließend die Zeitliste für Produktion, Moderation oder Szenennotizen.' },
];
const seo: SEOSection[] = [
  { type: 'title', text: 'Pausen um die Sendung herum planen', level: 2 },
  { type: 'paragraph', html: 'Ein Livestream hat zwei Uhren: die Inhaltsminuten und die reale Uhrzeit mit Pausen. Dieser Rechner zeigt beide und berechnet die Endzeit aus Ablauf, Abstand und Pausenlänge.' },
  { type: 'paragraph', html: 'Sobald der Inhaltszähler den Abstand erreicht, erhält die nächste passende Blockgrenze eine Pause. So kannst du vor dem Start einen Block verschieben, kürzen oder die Verzögerung bewusst akzeptieren.' },
  { type: 'title', text: 'Blockgrenzen als Produktionssignale nutzen', level: 2 },
  { type: 'paragraph', html: 'Gute Pausen passen nach Begrüßung, Themenwechsel, Spiel oder geplanter Unterbrechung. Ein einzelner langer Block bietet keine sichere Grenze; die Warnung zeigt genau dieses redaktionelle Problem.' },
  { type: 'list', items: ['Ein langes Interview in Begrüßung, Gespräch und Fragen teilen.', 'Den Abschied als letzten eigenen Block behalten.', 'Inhaltsminuten mit der Endzeit inklusive Pausen vergleichen.', 'Den kopierten Plan an die Person geben, die Pausen auslöst.'] },
  { type: 'title', text: 'Drei Zeitsignale richtig lesen', level: 2 },
  { type: 'table', headers: ['Signal', 'Bedeutung', 'Aktion'], rows: [['Inhalt', 'Minuten deines Ablaufplans', 'Passt der redaktionelle Plan zur angekündigten Länge?'], ['Werbezeit', 'Zusätzliche Minuten durch Pausen', 'Host und Produktion über die geplante Unterbrechung informieren'], ['Ende auf Sendung', 'Start plus Inhalt und Pausen', 'Studio, Übergabe oder Ausspielzeit reservieren']] },
  { type: 'tip', title: 'Kein Plattformversprechen', html: 'Das Ergebnis ist ein lokaler Ablaufplan. Es startet keine Anzeigen und bestätigt weder Ausspielung noch Vertrag oder Werberecht. Prüfe die aktuellen Vorgaben deines Zielorts.' },
  { type: 'title', text: 'Den Plan im Regieraum verwendbar machen', level: 2 },
  { type: 'paragraph', html: 'Kopiere den Plan erst nach der Warnungsprüfung. Die Zeitstempel helfen bei Szenen, Moderatoren und Übergängen. Wenn trotz kurzem Abstand keine Pause entsteht, ist meist eine zusätzliche sinnvolle Blockgrenze nötig.' },
  { type: 'tip', title: 'Nach der Probe die echte Uhr prüfen', html: 'Gespräche und technische Übergänge dauern oft länger. Nutze den Plan als Basis und aktualisiere die Blockminuten nach einer Probe.' },
];
export const content = makeContent({
  slug: 'stream-werbepausen-zeitplan-rechner',
  title: 'Rechner für Werbepausen im Livestream',
  description: 'Erstelle aus deinem Livestream-Ablauf einen Zeitplan für Werbepausen und sehe die tatsächliche Endzeit.',
  ui: {
    startTimeLabel: 'Startzeit live', startTimeHint: 'Wann der Stream beginnt', streamDurationLabel: 'Geplante Inhaltsminuten', streamDurationHint: 'Erwartete Sendezeit ohne Pausen', cadenceLabel: 'Pausenabstand', cadenceHint: 'Nach so vielen Inhaltsminuten eine Pause einplanen', breakLengthLabel: 'Pausenlänge', breakLengthHint: 'Minuten, die zur Uhrzeit hinzukommen', segmentsLabel: 'Ablaufplan', segmentsHint: 'Eine Zeile je Block: Name | Minuten', presetsLabel: 'Mit einem Sendemuster starten', presetQuick: 'Zweistündige Sendung', presetLong: 'Langes Event', presetInterview: 'Interviewstream', scheduleLabel: 'Zeitschiene auf Sendung', scheduleHint: 'Pausen landen an der ersten verfügbaren Grenze nach dem Abstand.', contentTotalLabel: 'Inhalt', adsTotalLabel: 'Werbezeit', plannedEndLabel: 'Ende auf Sendung', breaksLabel: 'Pausen', stateReady: 'Grenzen sind nutzbar', stateWarning: 'Zeitkonflikt prüfen', stateEmpty: 'Ablaufplan hinzufügen', stateReadyText: 'Der Plan kann als erster Ablaufplan an die Produktion gehen.', stateWarningText: 'Eine Zeile ist ungültig oder der Abstand trifft keine natürliche Blockgrenze.', stateEmptyText: 'Füge mindestens zwei Blöcke hinzu, damit eine Pause dazwischen liegen kann.', copyLabel: 'Ablaufplan kopieren', resetLabel: 'Beispiel wiederherstellen', copiedLabel: 'Ablaufplan kopiert', copyErrorLabel: 'Kopieren wurde blockiert. Markiere den Plan und kopiere ihn manuell.', segmentKind: 'Inhalt', breakKind: 'Werbepause', minutesShort: 'Min.', noEntriesText: 'Hier erscheint deine Zeitschiene.', invalidLineText: 'Prüfe Zeile {lines}. Nutze Name | Minuten.', plannedMismatchText: 'Der Ablauf weicht bei der geplanten Dauer um {difference} ab.', boundaryWarningText: 'Keine Pause gesetzt: Der Abstand wird innerhalb eines Blocks erreicht. Setze eine Grenze oder teile den Block.'
  }, seo, faq, howTo,
});
