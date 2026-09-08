import type { SEOSection } from '../../../types';
import { makeContent } from './content';

const faq = [
  { question: 'Come inserisce una pausa pubblicitaria il calcolatore?', answer: 'Confronta i minuti di contenuto con la frequenza scelta e inserisce una pausa al primo confine disponibile dopo quel punto. Un blocco non viene mai tagliato.' },
  { question: 'Quale formato devo usare per i blocchi?', answer: "Inserisci un blocco per riga nel formato Nome | minuti, per esempio Apertura | 15. L'ordine è la scaletta." },
  { question: 'Perché la pausa può arrivare dopo la frequenza?', answer: 'Il calcolatore rispetta i confini dei blocchi. Se un blocco supera la frequenza, sposta la pausa al confine successivo e segnala il compromesso.' },
  { question: 'Segue una regola pubblicitaria di una piattaforma?', answer: 'No. È un modello di pianificazione basato sulla tua frequenza, sulla durata della pausa e sulla struttura del programma. Controlla le regole aggiornate della piattaforma, del contratto e del paese.' },
  { question: "L'orario finale include le pause?", answer: "Sì. I minuti di contenuto e pubblicità restano separati, ma l'orario finale somma tutte le pause previste." },
];
const howTo = [
  { name: 'Impostare inizio e regole', text: "Scegli l'ora di inizio, i minuti di contenuto, la frequenza e la durata di ogni pausa." },
  { name: 'Inserire la scaletta', text: 'Scrivi ogni blocco come Nome | minuti. Crea confini dove il conduttore può fermarsi naturalmente.' },
  { name: 'Leggere la linea temporale', text: "Controlla dove cadono le pause, quanto tempo aggiungono e se un blocco lungo sposta l'obiettivo." },
  { name: 'Copiare il piano di produzione', text: "Controlla gli avvisi e copia l'elenco orario per produzione, moderazione o note di scena." },
];
const seo: SEOSection[] = [
  { type: 'title', text: 'Pianificare le pause intorno al programma', level: 2 },
  { type: 'paragraph', html: "Una diretta ha due orologi: i minuti dedicati al contenuto e l'ora reale con le pause. Questo calcolatore li mostra entrambi e calcola la fine usando scaletta, frequenza e durata delle pause." },
  { type: 'paragraph', html: 'Quando il contatore del contenuto raggiunge la frequenza, la pausa viene assegnata al primo confine adatto. Puoi spostare o accorciare un blocco prima di iniziare, oppure accettare il ritardo in modo consapevole.' },
  { type: 'title', text: 'Usare i confini come segnali di produzione', level: 2 },
  { type: 'paragraph', html: "I momenti migliori arrivano dopo un benvenuto, un cambio di tema, una partita o un'interruzione prevista. Un solo blocco lungo non offre un punto sicuro; l'avviso rende visibile questa scelta editoriale." },
  { type: 'list', items: ['Dividere una lunga intervista in apertura, conversazione e domande.', 'Tenere il saluto finale come ultimo blocco.', 'Confrontare i minuti di contenuto con la fine che include la pubblicità.', 'Dare il piano alla persona che avvia le pause.'] },
  { type: 'title', text: 'Leggere i tre segnali temporali', level: 2 },
  { type: 'table', headers: ['Segnale', 'Significato', 'Azione'], rows: [['Contenuto', 'Minuti della scaletta', 'Verificare che la durata editoriale sia coerente'], ['Tempo pubblicitario', 'Minuti aggiunti dalle pause', 'Avvisare conduttore e produzione'], ['Fine in onda', 'Inizio più contenuto e pause', 'Riservare correttamente lo spazio di studio o consegna']] },
  { type: 'tip', title: 'Non è una garanzia della piattaforma', html: 'Il risultato è una scaletta locale. Non avvia annunci e non certifica cosa vedrà il pubblico, un contratto o una norma. Verifica sempre le regole aggiornate della destinazione.' },
  { type: 'title', text: 'Rendere il piano utile in regia', level: 2 },
  { type: 'paragraph', html: 'Copia il piano dopo aver controllato gli avvisi. Gli orari aiutano a preparare scene, moderatori e passaggi. Se non compare una pausa, crea un confine editoriale sensato invece di forzarla.' },
  { type: 'tip', title: "Controllare l'orologio dopo la prova", html: 'Conversazioni e transizioni tecniche possono allungarsi. Usa il calcolo come base e aggiorna i minuti dopo la prova.' },
];
export const content = makeContent({
  slug: 'calcolatore-programma-pause-pubblicitarie-stream',
  title: 'Calcolatore delle pause pubblicitarie per streaming',
  description: "Trasforma la scaletta di una diretta in un programma di pause pubblicitarie e calcola l'orario reale di fine.",
  ui: {
    startTimeLabel: 'Ora di inizio della diretta', startTimeHint: 'Quando parte lo streaming', streamDurationLabel: 'Minuti di contenuto previsti', streamDurationHint: 'Durata del programma senza pause', cadenceLabel: 'Frequenza delle pause', cadenceHint: 'Inserisci una pausa dopo questi minuti di contenuto', breakLengthLabel: 'Durata della pausa', breakLengthHint: "Minuti aggiunti all'orologio", segmentsLabel: 'Scaletta', segmentsHint: 'Una riga per blocco: Nome | minuti', presetsLabel: 'Inizia con una struttura', presetQuick: 'Diretta di due ore', presetLong: 'Evento lungo', presetInterview: 'Diretta con intervista', scheduleLabel: 'Linea temporale in onda', scheduleHint: 'Le pause cadono al primo confine disponibile dopo la frequenza.', contentTotalLabel: 'Contenuto', adsTotalLabel: 'Tempo pubblicitario', plannedEndLabel: 'Fine in onda', breaksLabel: 'Pause', stateReady: 'Confini utilizzabili', stateWarning: 'Controlla la tensione oraria', stateEmpty: 'Aggiungi una scaletta', stateReadyText: 'Il programma può essere consegnato alla produzione come prima scaletta.', stateWarningText: 'Una riga non è valida oppure la frequenza non incontra un confine naturale.', stateEmptyText: 'Aggiungi almeno due blocchi per inserire una pausa tra loro.', copyLabel: 'Copia la scaletta', resetLabel: 'Ripristina esempio', copiedLabel: 'Scaletta copiata', copyErrorLabel: 'La copia è stata bloccata. Seleziona il programma e copialo manualmente.', segmentKind: 'Contenuto', breakKind: 'Pausa pubblicitaria', minutesShort: 'min', noEntriesText: 'Qui comparirà la tua linea temporale.', invalidLineText: 'Controlla la riga {lines}. Usa Nome | minuti.', plannedMismatchText: 'La scaletta differisce dalla durata prevista di {difference}.', boundaryWarningText: 'Nessuna pausa: la frequenza viene raggiunta dentro un unico blocco. Aggiungi un confine o dividi il blocco.'
  }, seo, faq, howTo,
});
