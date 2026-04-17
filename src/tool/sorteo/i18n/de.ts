import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SorteoUI } from '../ui';

const slug = 'zufallsgenerator';
const title = 'Zufallsgenerator für Namen (Streaming)';
const description =
  'Wählen Sie per Zufall einen Gewinner aus einer Namensliste aus. Kostenloses, schnelles und visuelles Gewinnspiel-Tool für Twitch, YouTube und Events.';

const faqData = [
  {
    question: 'Ist dieses Gewinnspiel wirklich zufällig?',
    answer:
      'Ja, wir verwenden den kryptografischen Zufallsalgorithmus des Browsers (Web Crypto API), um sicherzustellen, dass jeder Teilnehmer genau die gleiche Gewinnwahrscheinlichkeit hat – ohne Verzerrung oder Manipulation.',
  },
  {
    question: 'Kann ich diesen Generator auf Twitch oder YouTube verwenden?',
    answer:
      'Absolut. Da es sich um ein Web-Tool handelt, können Sie das Fenster mit OBS erfassen oder Ihren Bildschirm direkt teilen. Das klare Design und die Animationen sind so konzipiert, dass das Publikum den Prozess mit totaler Transparenz mitverfolgen kann.',
  },
  {
    question: 'Wie kann ich verhindern, dass jemand doppelt teilnimmt?',
    answer:
      'Das Tool verfügt über eine automatische Funktion zur Bereinigung von Dubletten, die identische Namen oder Namen mit geringfügigen Abweichungen in der Leerzeichensetzung erkennt, damit jede reale Person nur einmal gezählt wird.',
  },
  {
    question: 'Kann ich mehrere Gewinner gleichzeitig ziehen?',
    answer:
      'Ja, Sie können die Anzahl der gewünschten Gewinner konfigurieren, bevor Sie auf die Schaltfläche klicken. Das Tool listet die Glücklichen übersichtlich auf, damit Sie sie in Ihrem Livestream nennen können.',
  },
  {
    question: 'Wie viele Namen kann ich zur Liste hinzufügen?',
    answer:
      'Es gibt keine strikte Grenze vonseiten des Tools. Wir haben die Engine so optimiert, dass sie Listen mit tausenden Teilnehmern ohne Performance-Probleme verarbeitet – ideal also auch für riesige Gewinnspiele.',
  },
  {
    question: 'Werden meine Daten oder die Teilnehmerliste gespeichert?',
    answer:
      'Nein, niemals. Ihre Privatsphäre steht an erster Stelle. Der gesamte Prozess läuft lokal in Ihrem Webbrowser ab. Die eingegebenen Namen werden niemals an unsere Server gesendet oder in einer Datenbank gespeichert.',
  },
];

const howToData = [
  {
    name: 'Teilnehmerliste vorbereiten',
    text: 'Kopieren Sie die Namensliste aus Ihrem Chat, Excel oder sozialen Netzwerk und fügen Sie sie in das Textfeld ein.',
  },
  {
    name: 'Optionen konfigurieren',
    text: 'Wählen Sie aus, wie viele Gewinner Sie benötigen und ob Sie Duplikate oder leere Zeilen filtern möchten.',
  },
  {
    name: 'Die „Glücksfee“ starten',
    text: 'Klicken Sie auf die Schaltfläche für die Auslosung. Eine visuelle Animation sorgt für Spannung, bevor der Gewinner enthüllt wird.',
  },
  {
    name: 'Ergebnisse verkünden',
    text: 'Kopieren Sie die Namen der Gewinner, um sie in Ihren sozialen Netzwerken oder im Streaming-Chat zu teilen.',
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<SorteoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Technische Referenzen',
  bibliography: [
    {
      name: 'Web Crypto API: getRandomValues()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues',
    },
    {
      name: 'Fisher-Yates Shuffle Algorithmus',
      url: 'https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: 'Zufallsgenerator für Namen und Teilnehmerlisten online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Fragen Sie sich, wie Sie online ein Gewinnspiel schnell, sicher und absolut transparent durchführen können? Unser kostenloser <strong>Namens-Picker</strong> ist die ultimative Lösung, um in Sekunden einen Zufallsgewinner zu ziehen. Entwickelt, um einfach, visuell und effektiv zu sein – perfekt für jedes Szenario, in dem Sie eine digitale „Glücksfee“ benötigen.',
    },
    {
      type: 'paragraph',
      html: 'Egal, ob Sie ein Gewinnspiel in sozialen Netzwerken verwalten, eine große Verlosung auf Ihrem Streaming-Kanal durchführen oder einfach nur entscheiden, wer heute den Müll rausbringt: Unser Zufalls-Selektor garantiert dank moderner kryptografischer Algorithmen absolute Unparteilichkeit. <strong>Keine Manipulation, keine Bevorzugung, nur reiner Zufall.</strong>'
    },
    {
      type: 'title',
      text: 'Anwendungsfälle',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Gewinnspiele in sozialen Medien',
          description: 'Ideal für Instagram-, Twitter (X)- oder Facebook-Wettbewerbe. Kopieren Sie einfach die Namen aus den Kommentaren und fügen Sie sie ein. Das Tool entfernt automatisch Duplikate.',
        },
        {
          title: 'Twitch / YouTube Streaming',
          description: 'Dank unseres Studio-Modus mit flüssigen Animationen und integrierten Sounds können Sie Ihren Bildschirm direkt in OBS teilen und Ihrem Publikum eine spannende Show bieten, während Sie die Gewinner live ziehen.',
        },
        {
          title: 'Klassen und Team Dynamiken',
          description: 'Lehrer und Teamleiter können das Tool nutzen, um Zufallsgruppen zu bilden, die Reihenfolge von Präsentationen festzulegen oder Aufgaben völlig transparent und ohne Bevorzugung zu verteilen.',
        },
        {
          title: 'Wichteln und Events',
          description: 'Vereinfachen Sie die Organisation von Familienfeiern, Büro-Verlosungen oder Wichtel-Runden, indem Sie Namen sofort zufällig ziehen, ohne Zettelwirtschaft oder komplizierte Logistik.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Warum ist unser Tool anders?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Echte Kryptografie:</strong> Wir verwenden die Web Crypto API des Browsers (W3C-Standard) anstelle schwacher Pseudo-Zufallsgeneratoren. Jede Auslosung ist mathematisch unparteiisch.',
        '<strong>Keine Speicherung:</strong> Ihre Daten verlassen niemals Ihren Browser. Wir verkaufen keine Listen, erstellen keine Profile und speichern nichts. Alles wird lokal verarbeitet.',
        '<strong>Visuelles Design:</strong> Der Kino-Modus und die Animationen machen jedes Gewinnspiel zu einem Erlebnis. Ideal für die Erfassung mit OBS oder für Live-Streams.',
        '<strong>Umgang mit Duplikaten:</strong> Erkennt automatisch wiederholte Namen oder Varianten (zusätzliche Leerzeichen, Groß-/Kleinschreibung usw.), um sicherzustellen, dass jede reale Person nur einmal zählt.',
      ],
    },
    {
      type: 'title',
      text: 'So nutzen Sie das Gewinnspiel Schritt für Schritt',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Schritt 1 – Teilnehmer eingeben:</strong> Fügen Sie Ihre Namensliste in das Haupttextfeld ein. Das Tool erkennt jeden Zeilenumbruch als separaten Teilnehmer. Haben Sie Duplikate? Kein Problem, das Tool entfernt sie automatisch.',
        '<strong>Schritt 2 – Anpassen:</strong> In den Einstellungen können Sie den Countdown für mehr Spannung, den Konfetti-Effekt zum Feiern oder die „Blacklist“ zum Ausschluss bestimmter Namen aktivieren.',
        '<strong>Schritt 3 – Auslosen!</strong> Klicken Sie auf die Hauptschaltfläche. Unsere Engine generiert eine kryptografisch sichere Zufallsauswahl. Die Gewinner werden klar und einprägsam angezeigt.',
      ],
    },
    {
      type: 'title',
      text: 'Gewichtete Einträge: Geben Sie bestimmten Teilnehmern einen Vorteil',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Möchten Sie Ihre treuesten Abonnenten belohnen oder bestimmten Teilnehmern mehr Chancen einräumen? Unser System für <strong>gewichtete Einträge</strong> ist einzigartig und ermöglicht es Ihnen, jedem Namen ein „Gewicht“ oder einen Multiplikator zuzuweisen, ohne ihn mehrfach aufschreiben zu müssen.',
    },
    {
      type: 'tip',
      title: 'So weisen Sie Gewichte zu',
      html: '<p>Verwenden Sie ein Sternchen (*) oder ein „x“, gefolgt von der Anzahl der Teilnahmen. Beispiele:</p><ul><li><strong>„Max * 5“</strong> – Max nimmt teil, als wäre er 5 Personen</li><li><strong>„Julia x 10“</strong> – Julia hat eine 10-mal höhere Gewinnchance</li><li><strong>„Peter“</strong> – Kein Symbol = 1 normale Teilnahme</li></ul><p>Dies ist perfekt für Gewinnspiele, bei denen Sie VIP-Abonnenten oder speziellen Nutzern einen Vorteil gewähren möchten.</p>',
    },
    {
      type: 'title',
      text: 'Vollständige Privatsphäre und Sicherheit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Im Gegensatz zu anderen Online-Tools <strong>speichern wir Ihre Daten nicht</strong>. Die gesamte Verarbeitung der Namen und die Durchführung der Auslosung erfolgen lokal in Ihrem eigenen Browser. Ihre Teilnehmerlisten werden niemals über das Netzwerk übertragen oder auf einem externen Server gespeichert.',
    },
    {
      type: 'paragraph',
      html: '<strong>Was bedeutet das?</strong> Ihre Teilnehmerliste gehört Ihnen und nur Ihnen. Sobald Sie den Tab schließen, ist sie weg. Keine Tracking-Cookies, keine Nutzerprofile, keine zentrale Datenbank. Garantierte Privatsphäre für Sie und Ihre Teilnehmer.',
    },
    {
      type: 'title',
      text: 'Mathematische Transparenz',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Manchen mag die Frage kommen: „Was, wenn die Ergebnisse manipuliert werden?“ Die Antwort ist einfach: <strong>Wir können es nicht.</strong> Der Code der Auslosung ist deterministisch und kryptografisch. Keine versteckten Variablen, keine „geschobenen“ Ergebnisse.',
    },
    {
      type: 'paragraph',
      html: 'Jeder Gewinner ist das direkte Ergebnis des Fisher-Yates-Shuffle-Algorithmus, der auf Ihre exakte Liste angewendet wird und echte kryptografische Entropie nutzt. Wenn Sie den Prozess prüfen möchten: Der Code ist auf GitHub öffentlich einsehbar.',
    },
  ],
  ui: {
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Technische Referenzen',
    title: 'Zufalls Gewinnspiel',
    totalParticipants: 'Teilnehmer (einmalig)',
    ready: 'BEREIT',
    participants: 'Teilnehmer',
    settings: 'Einstellungen',
    importFile: 'Datei importieren',
    clearAll: 'Alle löschen',
    placeholder: 'Namen hier eingeben oder einfügen...\nMax Mustermann\nErika Musterfrau\n@twitch_user',
    onePerLine: '1 Teilnehmer pro Zeile',
    lines: 'Zeilen',
    filters: 'Filter',
    allowDuplicates: 'Duplikate zulassen',
    winnerCount: 'Anzahl der Gewinner',
    autoRemove: 'Gewinner automatisch entfernen',
    blacklist: 'Blacklist (Ausschließen)',
    blacklistPlaceholder: 'Gesperrte Namen (einer pro Zeile)...',
    blacklistInfo: 'Diese Nutzer nehmen nicht am Gewinnspiel teil.',
    sceneEffects: 'Szeneneffekte',
    countdown: 'Countdown (3s)',
    confetti: 'Sieges-Konfetti',
    zenMode: 'Zen-Modus (Panel ausblenden)',
    waitingParticipants: 'Warten auf Teilnehmer...',
    winner: 'GEWINNER',
    reroll: 'Erneut auslosen',
    history: 'Verlauf dieser Sitzung',
    noWinnersYet: 'Noch keine Gewinner...',
    startGiveaway: 'Gewinnspiel starten',
    studioHeader: 'LIVE STUDIO v2.0',
  },
};
