import { createLocalizedContent } from '../locale-content';

export const content = createLocalizedContent({
  language: 'it',
  slug: 'pianificatore-bitrate-archiviazione-video',
  title: 'Pianificatore di Bitrate e Archiviazione Video',
  description: 'Stima lo spazio video, il tempo per fotogramma e livelli pratici di bitrate per streaming o registrazioni.',
  ui: {
    presetLabel: 'Inizia da una scena', presetFast: 'Stream web rapido', presetUpload: 'Diretta quotidiana', presetArchive: 'Archivio 4K', resolutionLabel: 'Risoluzione', frameRateLabel: 'Fotogrammi al secondo', codecLabel: 'Codec', bitrateLabel: 'Bitrate video', durationLabel: 'Durata sessione', copiesLabel: 'Copie conservate', minutesLabel: 'minuti', copiesShort: 'copie', h264: 'H.264', h265: 'H.265', av1: 'AV1', codecNote: 'L efficienza del codec cambia la lettura della qualità, non il calcolo dello spazio.', sceneLabel: 'Dal segnale allo spazio', signalSource: 'Immagine', codecGate: 'Codifica', storageReel: 'Archiviazione', qualityEstimate: 'Lettura della qualità', storageEstimate: 'Spazio stimato', perCopy: 'Una copia', allCopies: 'Tutte le copie', perHour: 'All ora', frameTime: 'Tempo fotogramma', dataPerFrame: 'Dati per fotogramma', comparisonLabel: 'Confronto dello spazio', lean: 'Leggero', balanced: 'Bilanciato', crisp: 'Nitido', qualityLean: 'Leggero e compatto', qualityBalanced: 'Segnale bilanciato', qualityStrong: 'Dettaglio solido', qualityExcellent: 'Ampio margine', qualityAggressive: 'Compressione aggressiva', qualityGuidance: 'Una stima visiva per confrontare le impostazioni.', capacityLight: 'Ingombro di archiviazione ridotto', capacityMedium: 'Ingombro medio', capacityHeavy: 'Ingombro elevato', capacityNote: 'Lo stato dipende dal totale delle copie mostrato sopra.', reset: 'Reimposta valori', localNote: 'Funziona localmente nel browser. Nulla viene caricato.', assumptionTitle: 'Leggi le ipotesi', assumptionText: 'Lo spazio usa gigabyte decimali e il bitrate video inserito. Audio, overhead del contenitore, picchi del bitrate variabile e padding del file system non sono inclusi.', warningText: 'I livelli di qualità sono indicativi. Movimento, grana, keyframe, preset dell encoder, transcodifica e margine di rete possono cambiare il risultato reale.', readyText: 'Modifica un valore per ridisegnare il segnale.', calculateAria: 'Aggiorna il piano video',
  },
  faq: [
    { question: 'Questo pianificatore carica o analizza il mio video?', answer: 'No. Usa solo i valori inseriti nel browser. Non carica file, non analizza una videocamera e non interroga servizi di streaming.' },
    { question: 'Come viene calcolato lo spazio?', answer: 'Il bitrate viene moltiplicato per la durata e diviso per otto per convertire i bit in byte. Il risultato usa gigabyte decimali e viene moltiplicato per le copie.' },
    { question: 'Che cosa indica la lettura della qualità?', answer: 'È una regola indicativa basata su pixel, fotogrammi al secondo, bitrate e un fattore generale di efficienza del codec. Non garantisce la qualità perché contano anche movimento e impostazioni dell encoder.' },
    { question: 'Perché lo stesso bitrate cambia con risoluzione o frequenza diverse?', answer: 'Una risoluzione maggiore contiene più pixel e una frequenza maggiore invia più fotogrammi ogni secondo. Più informazioni competono per lo stesso bitrate.' },
    { question: 'Posso usare il risultato come requisito di una piattaforma?', answer: 'Usalo per pianificare lo spazio e confrontare scenari. I requisiti cambiano, quindi controlla la guida aggiornata della destinazione e lascia margine di upload per una diretta.' },
  ],
  howTo: [
    { name: 'Scegli il formato dell immagine', text: 'Seleziona risoluzione e frequenza adatte allo streaming o alla registrazione che vuoi realizzare.' },
    { name: 'Imposta il segnale', text: 'Scegli il codec e inserisci il bitrate video in megabit al secondo. Un preset è un buon punto di partenza.' },
    { name: 'Descrivi la sessione', text: 'Inserisci la durata in minuti e il numero di copie da conservare, montare o consegnare.' },
    { name: 'Leggi il compromesso', text: 'Confronta i livelli leggero, bilanciato e nitido per vedere come cambia lo spazio prima della sessione.' },
  ],
  seo: [
    { type: 'title', text: 'Stima lo spazio video prima di trasmettere o registrare', level: 2 },
    { type: 'paragraph', html: 'Un calcolatore di bitrate video aiuta a preparare uno spazio realistico per una sessione. Inserisci bitrate, durata e copie, poi confronta tre livelli di segnale per lo stesso formato.' },
    { type: 'title', text: 'Che cosa calcola il pianificatore', level: 3 },
    { type: 'list', items: ['<strong>Spazio:</strong> bitrate per tempo, convertito da bit a gigabyte decimali e moltiplicato per le copie.', '<strong>Tempo fotogramma:</strong> millisecondi disponibili in base agli FPS e stima dei dati per fotogramma.', '<strong>Lettura qualità:</strong> confronto dei pixel per fotogramma corretto con un fattore di efficienza del codec.'] },
    { type: 'title', text: 'Come risoluzione e FPS cambiano il compromesso', level: 3 },
    { type: 'paragraph', html: 'La risoluzione aumenta i pixel di ogni fotogramma e gli FPS aumentano i fotogrammi al secondo. Se il bitrate resta fisso, ogni fotogramma riceve meno dati e la compressione diventa più impegnativa.' },
    { type: 'tip', title: 'Lascia margine per una diretta', html: 'Considera il bitrate video come il carico principale, non come tutta la capacità della connessione. Lascia spazio per audio, protocollo e variazioni di rete e prova una scena simile.' },
    { type: 'title', text: 'Usa le indicazioni della piattaforma per il valore finale', level: 3 },
    { type: 'paragraph', html: 'Questo pianificatore è indipendente dalle piattaforme. YouTube pubblica intervalli di bitrate per risoluzione e frequenza. Controlla le regole aggiornate della destinazione per convalidare lo scenario.' },
    { type: 'title', text: 'Perché il risultato è una stima', level: 3 },
    { type: 'paragraph', html: 'Un bitrate nominale non descrive ogni byte del file finale. Bitrate variabile, audio, metadati, keyframe, transcodifica e unità del sistema possono modificare la dimensione.' },
  ],
});
