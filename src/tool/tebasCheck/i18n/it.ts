import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TebasCheckUI } from '../types';

const slug = 'rilevatore-blocchi-isp';
const title = 'Rilevatore Blocchi ISP Tebas Check';
const description = 'Strumento di diagnostica per rilevare il blocco illegittimo di IP Cloudflare condivisi da parte degli ISP spagnoli.';

const faqData = [
  {
    question: 'Cos\'è il Tebas-Check?',
    answer: 'È uno strumento di diagnostica che tenta di connettersi a IP Cloudflare noti che sono stati bloccati giudizialmente in Spagna per impedire l\'accesso a trasmissioni pirata. Il problema è che bloccando un IP condiviso, migliaia di siti web legittimi vengono "danneggiati".',
  },
  {
    question: 'Perché il mio ISP blocca un IP Cloudflare?',
    answer: 'A causa di misure cautelari dinamiche in cui gli ISP devono bloccare gli IP di server che presumibilmente trasmettono contenuti protetti. Utilizzando Cloudflare (CDN), molti siti web condividono lo stesso IP, causando danni collaterali a utenti innocenti.',
  },
  {
    question: 'Come funziona il test?',
    answer: 'Tentiamo di caricare una piccola risorsa dagli IP segnalati come bloccati. Se la connessione fallisce per "Timeout" o reset della connessione solo su quegli IP, è un chiaro indicatore che il tuo ISP sta applicando un filtraggio IP.',
  },
  {
    question: 'Posso aggirare questo blocco?',
    answer: 'I blocchi IP sono difficili da aggirare solo cambiando i DNS. La soluzione di solito prevede l\'uso di una VPN, del browser Tor o l\'attesa che Cloudflare assegni un nuovo IP al servizio legittimo che stai cercando di visitare.',
  },
];

const howToData = [
  {
    name: 'Disabilita VPN o Proxy',
    text: 'Affinché il test sia accurato, devi utilizzare la connessione diretta del tuo router (Fibra o 4G/5G) senza strati intermedi.',
  },
  {
    name: 'Avvia la scansione',
    text: 'Clicca sul pulsante di diagnostica. Lo strumento invierà pacchetti di prova agli IP sospettati di blocco.',
  },
  {
    name: 'Interpreta i risultati',
    text: 'Se vedi risultati in rosso, significa che quell\'IP è irraggiungibile. Se è verde, il tuo traffico scorre normalmente.',
  },
  {
    name: 'Genera rapporto',
    text: 'Puoi usare i risultati per segnalare l\'incidente al tuo ISP se sta bloccando servizi legittimi.',
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
  inLanguage: 'it',
};

export const content: ToolLocaleContent<TebasCheckUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti e Contesto',
  bibliography: [
    {
      name: 'Cloudflare: Capire il blocco IP',
      url: 'https://www.cloudflare.com/learning/network-layer/what-is-ip-blocking/',
    },
    {
      name: 'Normative spagnole sui blocchi dinamici',
      url: 'https://www.poderjudicial.es/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: 'Perché tutto ha smesso di funzionare?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Benvenuto nel meraviglioso mondo della <strong>"Giustizia Preventiva"</strong>. Se sei qui una domenica pomeriggio e i siti web legittimi hanno smesso di caricarsi mentre Twitter funziona perfettamente, probabilmente sei una vittima collaterale della crociata contro le trasmissioni calcistiche illegali.',
    },
    {
      type: 'paragraph',
      html: 'In Spagna, i giudici hanno consegnato un "pulsante rosso" a certe entità sportive. Questo pulsante permette loro di bloccare indirizzi IP in tempo reale senza supervisione giudiziaria diretta minuto per minuto. Il problema è che mirano con un fucile da fiera e spesso colpiscono server condivisi dove, oltre alle "partite illegali", risiedono ospedali, università o il tuo blog di cucina preferito.',
    },
    {
      type: 'title',
      text: 'La Teoria dell\'Edificio in Fiamme',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Immagina che uno streaming illegale venga trasmesso dall\'appartamento 4B di un grattacielo. La soluzione logica sarebbe bussare alla porta del 4B e staccare la luce, giusto?',
    },
    {
      type: 'paragraph',
      html: 'Ebbene, no. La soluzione attuale è <strong>far saltare in aria le fondamenta dell\'intero edificio</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Bloccando l\'IP di un servizio come Cloudflare, il fornitore di internet non solo abbatte il pirata, ma anche gli altri 50.000 siti web legittimi che condividevano lo stesso indirizzo digitale. Se stavi lavorando o studiando e il tuo sito usava quell\'IP: sfortuna, danno collaterale. Reclama con l\'armaiolo principale.',
    },
    {
      type: 'title',
      text: 'Cosa fa esattamente questo strumento di diagnostica?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Questo strumento esegue un\'analisi tecnica in tre passaggi per identificare se il tuo ISP sta applicando il blocco selettivo degli indirizzi IP:',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Ping Google',
          description: 'Controlliamo se hai battito. Se Google non si carica, il problema è che non hai pagato la bolletta del Wi-Fi. Questo è il test di connettività di base.',
        },
        {
          title: 'Ping Cloudflare',
          description: 'Proviamo a raggiungere 1.1.1.1. È il "canarino in miniera" del blocco in Spagna e l\'obiettivo principale dei blocchi giudiziari.',
        },
        {
          title: 'Verdetto',
          description: 'Se Google funziona e Cloudflare fallisce, è chiarissimo: il tuo ISP sta applicando un blocco IP selettivo verso Cloudflare.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Impatto del Blocco Dinamico',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Falsi Positivi',
          description: 'Siti aziendali, blog personali e servizi governativi possono smettere di funzionare se condividono un IP con un server di streaming non autorizzato.',
        },
        {
          title: 'Filtraggio IP',
          description: 'A differenza del blocco DNS, il filtraggio IP impedisce la connessione a livello di rete, rendendo il cambio dei DNS insufficiente per risolvere il problema.',
        },
        {
          title: 'Mancanza di Trasparenza',
          description: 'Spesso l\'utente vede solo un errore di "Timeout" senza sapere se il problema è la sua connessione o un blocco attivo dell\'ISP.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Domande a cui nessuno vuole rispondere',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>È illegale usarlo?</strong> No. Fare il ping a un server è illegale quanto guardare una vetrina. Questo strumento è una diagnostica di rete passiva. Non rompe la crittografia, non viola le password e non accede a contenuti protetti. Ti dice solo perché non puoi accedere ai tuoi soliti siti web.',
        '<strong>Come lo risolvo?</strong> Se hai un blocco attivo, cambiare i DNS non aiuta più (conoscono tutti i trucchi). L\'unica vera soluzione oggi è una <strong>VPN</strong>. Criptando il tuo traffico, il tuo ISP non può vedere cosa stai chiedendo o a chi, e quindi non può bloccarti "selettivamente" (o per errore).',
      ],
    },
    {
      type: 'title',
      text: 'Modalità Streamer / Widget OBS',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sei uno streamer e vuoi mostrare lo stato della censura in tempo reale nel tuo stream? Abbiamo creato una speciale modalità ultra-minimalista, con sfondo trasparente (chroma-ready) e aggiornamento automatico ogni 5 minuti.',
    },
    {
      type: 'list',
      items: [
        '<strong>Passaggio 1:</strong> Aggiungi una nuova fonte <strong>Browser</strong> in OBS.',
        '<strong>Passaggio 2:</strong> Usa questo URL: <code>https://jjlmoya.es/utilidades/tebas-check/stream/</code>',
        '<strong>Passaggio 3:</strong> Fatto! Apparirà una grande icona (Verde/Rossa) che indica se la tua connessione è pulita o sotto attacco giudiziario.',
      ],
    },
    {
      type: 'tip',
      title: 'Note Legali',
      html: '<p>Questo strumento non ha alcuna affiliazione con alcuna entità sportiva, non facilita l\'accesso a contenuti protetti e non elude le misure tecnologiche di protezione (DRM). Semplicemente informa l\'utente che la sua connessione internet è artificialmente degradata.</p>',
    },
  ],
  ui: {
    faqTitle: 'Domande Frequenti',
    bibliographyTitle: 'Riferimenti e Contesto',
    scanning: 'Scansione della matrice...',
    seekingBlocks: 'Ricerca di blocchi di cemento nella tua fibra...',
    blockedTitle: 'BLOCCO...',
    blockedDiagnosis: 'Diagnosi: "Censura Selettiva"',
    blockedReason: 'Rilevata interferenza nel tuo ISP. Cloudflare o i DNS sono manipolati.',
    noInternetTitle: 'NESSUNA CONNESSIONE',
    noInternetReason: 'Sembra che tu non abbia accesso a internet. Controlla il cavo o la bolletta.',
    successTitle: 'SEI LIBERO',
    successReason: 'La tua connessione sembra pulita. Se ci sono blocchi globali, non ti stanno influenzando.',
    retryBtn: 'Provoca di nuovo la giustizia',
    authorNoteTitle: 'Nota dell\'Autore:',
    authorNoteText: 'Non ho potuto testare completamente questa utility perché non sono colpito dalla "mano nera" di Tebas. Se vuoi aiutarmi a migliorare la diagnosi, contattami.',
    consoleHeader: 'TEBAS_OS v3.2.0',
    statusNegotiating: 'Negoziazione con il tuo router...',
    statusDodging: 'Schivando la circolare del tribunale...',
    statusCheckingPirate: 'Controllando se sei un pirata (occhiolino)...',
    statusPinging: 'Pingando Google per vedere se esisti...',
    statusConsulting: 'Consultando l\'oracolo dell\'IP condiviso...',
    statusCheckingFee: 'Controllando se Tebas ha pagato il contributo per i lavoratori autonomi...',
    statusCalculating: 'Calcolando la probabilità di vincere alla lotteria...',
    statusDeciphering: 'Tentando di decifrare il tuo contratto ISP...',
    logStarted: "AVVIO PROTOCOLLO AUTONOMO 'TEBAS_WATCH'...",
    logDetecting: '> Rilevamento ISP e connettività di base...',
    logIspFound: '> ISP rilevato: ',
    logConnError: '> Errore di connessione di base',
    logDnsCross: '> Esecuzione controllo incrociato dati DNS (DoH vs Locale)...',
    logDnsGoogle: '> DNS Reale (Google): ',
    logDnsPoisoned: '> ALLERTA: Rilevato DNS avvelenato.',
    logDnsNoDoh: '> DoH non disponibile, salto il controllo incrociato DNS.',
    logLaunchingProbes: '> Lancio sonde su obiettivi critici...',
    logIpBlocked: '> Obiettivo {ip}: NESSUNA RISPOSTA (Sospetto blocco IP)',
    logIpActive: '> Obiettivo {ip}: ATTIVO',
    logAlertInterference: '!!! ALLERTA INTERFERENZA GIUDIZIARIA !!!',
    logNoInternet: 'NESSUN ACCESSO A INTERNET',
    logClean: 'CONNESSIONE PULITA. DIVERTITI.',
    logDiagError: 'ERRORE DI DIAGNOSTICA',
  },
};
