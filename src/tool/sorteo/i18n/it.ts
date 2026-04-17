import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SorteoUI } from '../ui';

const slug = 'estrazione-nomi';
const title = 'Generatore Nomi Casuali per Streaming';
const description =
  'Scegli un vincitore a caso da una lista di nomi. Strumento per giveaway gratuito, veloce e visuale per Twitch, YouTube ed eventi.';

const faqData = [
  {
    question: 'L\'estrazione è davvero casuale?',
    answer:
      'Sì, utilizziamo l\'algoritmo di casualità crittografica del browser (Web Crypto API) per garantire che ogni partecipante abbia esattamente la stessa probabilità di vincere, senza pregiudizi o manipolazioni.',
  },
  {
    question: 'Posso usare questo generatore su Twitch o YouTube?',
    answer:
      'Assolutamente sì. Essendo uno strumento web, puoi catturare la finestra con OBS o condividere direttamente lo schermo. Il design pulito e le animazioni sono pensati affinché il pubblico veda il processo con totale trasparenza.',
  },
  {
    question: 'Come posso evitare che qualcuno partecipi due volte?',
    answer:
      'Lo strumento ha una funzione automatica di "pulizia duplicati" che rileva nomi identici o con piccole variazioni di spaziatura per garantire che ogni persona reale conti una sola volta.',
  },
  {
    question: 'Posso estrarre più vincitori contemporaneamente?',
    answer:
      'Sì, puoi configurare il numero di vincitori desiderati prima di cliccare sul pulsante. Lo strumento elencherà i fortunati in modo chiaro affinché tu possa menzionarli nella tua diretta.',
  },
  {
    question: 'Quanti nomi posso aggiungere alla lista?',
    answer:
      'Non c\'è un limite rigoroso imposto dallo strumento. Abbiamo ottimizzato il motore per gestire liste di migliaia di partecipanti senza problemi di prestazioni, rendendolo ideale anche per giveaway massivi.',
  },
  {
    question: 'I miei dati o la lista dei partecipanti vengono salvati?',
    answer:
      'No, mai. La tua privacy viene prima di tutto. L\'intero processo di estrazione avviene localmente nel tuo browser web. I nomi inseriti non vengono mai inviati ai nostri server né memorizzati in alcun database.',
  },
];

const howToData = [
  {
    name: 'Prepara la lista dei partecipanti',
    text: 'Copia la lista dei nomi dalla tua chat, da Excel o dai social network e incollala nella casella di testo.',
  },
  {
    name: 'Configura le opzioni del giveaway',
    text: 'Scegli di quanti vincitori hai bisogno e se vuoi filtrare i duplicati o i nomi vuoti.',
  },
  {
    name: 'Lancia la "mano innocente"',
    text: 'Clicca sul pulsante di estrazione. Un\'animazione visiva manterrà la tensione prima di svelare il vincitore.',
  },
  {
    name: 'Annuncia i risultati',
    text: 'Copia i nomi dei vincitori per condividerli sui tuoi social network o nella chat dello streaming.',
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

export const content: ToolLocaleContent<SorteoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti Tecnici',
  bibliography: [
    {
      name: 'Web Crypto API: getRandomValues()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues',
    },
    {
      name: 'Algoritmo Fisher-Yates Shuffle',
      url: 'https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: 'Estrattore Nomi Casuali e Lista Partecipanti Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ti stai chiedendo come fare un giveaway online in modo rapido, sicuro e totalmente trasparente? Il nostro strumento gratuito di <strong>Estrazione Nomi</strong> è la soluzione definitiva per scegliere un vincitore a caso in pochi secondi. Progettato per essere semplice, visuale ed efficace, è perfetto per qualsiasi scenario in cui hai bisogno di una "mano innocente" digitale.',
    },
    {
      type: 'paragraph',
      html: 'Sia che tu stia gestendo un concorso sui social network, un giveaway massivo sul tuo canale streaming o semplicemente decidendo a chi tocca buttare la spazzatura oggi, il nostro selettore casuale garantisce totale imparzialità grazie ai moderni algoritmi crittografici. <strong>Nessuna manipolazione, nessun pregiudizio, solo pura casualità.</strong>'
    },
    {
      type: 'title',
      text: 'Casi d\'uso',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Giveaway sui Social Media',
          description: 'Ideale per concorsi su Instagram, Twitter (X) o Facebook. Basta copiare i nomi dai commenti e incollarli per scegliere un vincitore equo. Lo strumento rimuove automaticamente i duplicati.',
        },
        {
          title: 'Twitch / YouTube Streaming',
          description: 'Grazie alla nostra Modalità Studio con animazioni fluide e suoni integrati, puoi condividere lo schermo direttamente su OBS e offrire uno spettacolo visivo eccitante al tuo pubblico mentre scegli i vincitori dal vivo.',
        },
        {
          title: 'Dinamiche di Classe e di Team',
          description: 'Insegnanti e team leader possono usarlo per formare gruppi casuali, scegliere chi presenta per primo o assegnare compiti a caso con totale trasparenza e senza favoritismi.',
        },
        {
          title: 'Babbo Natale Segreto ed Eventi',
          description: 'Semplifica l\'organizzazione di eventi familiari, estrazioni in ufficio o Babbo Natale Segreto scegliendo i nomi a caso istantaneamente senza bisogno di foglietti o logistica complicata.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Perché il nostro strumento è diverso?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Criptografia Reale:</strong> Utilizziamo la Web Crypto API del browser (standard W3C) invece di deboli generatori pseudo-casuali. Ogni estrazione è matematicamente imparziale.',
        '<strong>Nessuna Archiviazione:</strong> I tuoi dati non lasciano mai il browser. Non vendiamo liste, non facciamo profilazione, non memorizziamo nulla. Elaborazione puramente locale.',
        '<strong>Design Visuale:</strong> La modalità cinema e le animazioni rendono ogni giveaway un evento memorabile. Perfetto per la cattura con OBS o le dirette streaming.',
        '<strong>Gestione Duplicati:</strong> Rileva automaticamente nomi ripetuti o varianti (spazi extra, maiuscole, ecc.) per garantire che ogni persona reale conti una sola volta.',
      ],
    },
    {
      type: 'title',
      text: 'Come usare il giveaway passo dopo passo',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Passaggio 1 - Inserisci i partecipanti:</strong> Incolla la tua lista di nomi nella casella di testo principale. Lo strumento rileva automaticamente ogni riga come un partecipante diverso. Hai dei duplicati? Nessun problema, lo strumento li rimuove.',
        '<strong>Passaggio 2 - Personalizza:</strong> Nella scheda impostazioni puoi attivare il conto alla rovescia per creare tensione, l\'effetto coriandoli per festeggiare, o attivare la "lista nera" per escludere certi nomi.',
        '<strong>Passaggio 3 - Estrai!</strong> Clicca sul pulsante principale e il nostro motore genererà una selezione casuale crittograficamente sicura. I vincitori saranno visualizzati in modo chiaro e memorabile.',
      ],
    },
    {
      type: 'title',
      text: 'Voci Ponderate: Dai un Vantaggio ad Alcuni Partecipanti',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vuoi premiare i tuoi iscritti più fedeli o dare più opportunità a certi partecipanti? Il nostro sistema di <strong>Voci Ponderate</strong> è unico e ti permette di assegnare un "peso" o moltiplicatore a qualsiasi nome senza doverlo scrivere più volte.',
    },
    {
      type: 'tip',
      title: 'Come assegnare i pesi ai nomi',
      html: '<p>Usa un asterisco (*) o una "x" seguita dal numero di partecipazioni. Esempi:</p><ul><li><strong>"Mario * 5"</strong> - Mario partecipa come se fosse 5 persone</li><li><strong>"Maria x 10"</strong> - Maria ha 10 volte più possibilità</li><li><strong>"Pietro"</strong> - Nessun simbolo = 1 voce regolare</li></ul><p>Questo è perfetto per giveaway in cui vuoi dare un vantaggio agli iscritti VIP o agli utenti speciali.</p>',
    },
    {
      type: 'title',
      text: 'Privacy e Sicurezza Totale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A differenza di altri strumenti online, <strong>non memorizziamo i tuoi dati</strong>. Tutta l\'elaborazione dei nomi e l\'esecuzione dell\'estrazione avviene localmente nel tuo browser. Le tue liste di partecipanti non viaggiano mai sulla rete né vengono salvate su alcun server esterno.',
    },
    {
      type: 'paragraph',
      html: '<strong>Cosa significa?</strong> La tua lista dei partecipanti è tua e solo tua. Chiudendo la scheda, scompare. Niente cookie di tracciamento, niente profili utente, niente database centrale. Massima privacy garantita per te e per chi partecipa ai tuoi giveaway.',
    },
    {
      type: 'title',
      text: 'Trasparenza Matematica',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Qualcuno potrebbe chiedersi: "E se manipolaste i risultati?". La risposta è semplice: <strong>non possiamo</strong>. Il codice dell\'estrazione è deterministico e crittografico. Niente variabili nascoste, niente "trucchi sul palco".',
    },
    {
      type: 'paragraph',
      html: 'Ogni vincitore è il risultato diretto dell\'algoritmo Fisher-Yates Shuffle applicato alla tua lista esatta, utilizzando una reale entropia crittografica. Se vuoi controllare il processo, il codice è disponibile su GitHub per l\'ispezione pubblica.',
    },
  ],
  ui: {
    faqTitle: 'Domande Frequenti',
    bibliographyTitle: 'Riferimenti Tecnici',
    title: 'Giveaway Casuale',
    totalParticipants: 'Partecipanti Unici Totali',
    ready: 'PRONTO',
    participants: 'Partecipanti',
    settings: 'Impostazioni',
    importFile: 'Importa File',
    clearAll: 'Cancella tutto',
    placeholder: 'Digita o incolla i nomi qui...\nMario Rossi\nMaria Bianchi\n@utente_twitch',
    onePerLine: '1 partecipante per riga',
    lines: 'righe',
    filters: 'Filtri',
    allowDuplicates: 'Permetti Duplicati',
    winnerCount: 'Numero di Vincitori',
    autoRemove: 'Rimuovi Vincitore Automaticamente',
    blacklist: 'Lista Nera (Escludi)',
    blacklistPlaceholder: 'Nomi vietati (uno per riga)...',
    blacklistInfo: 'Questi utenti non parteciperanno all\'estrazione.',
    sceneEffects: 'Effetti Scena',
    countdown: 'Conto alla rovescia (3s)',
    confetti: 'Coriandoli Vittoria',
    zenMode: 'Modalità Zen (Nascondi Pannello)',
    waitingParticipants: 'In attesa di partecipanti...',
    winner: 'VINCITORE',
    reroll: 'Estrai di nuovo',
    history: 'Cronologia della sessione',
    noWinnersYet: 'Ancora nessun vincitore...',
    startGiveaway: 'Inizia Giveaway',
    studioHeader: 'LIVE STUDIO v2.0',
  },
};
