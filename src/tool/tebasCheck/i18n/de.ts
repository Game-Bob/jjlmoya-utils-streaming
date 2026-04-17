import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TebasCheckUI } from '../types';

const slug = 'isp-block-detektor';
const title = 'ISP Sperren Detektor Tebas Check';
const description = 'Diagnosetool zur Erkennung illegaler Sperren gemeinsamer Cloudflare-IPs durch spanische Internetanbieter.';

const faqData = [
  {
    question: 'Was ist der Tebas-Check?',
    answer: 'Es handelt sich um ein Diagnosetool, das versucht, eine Verbindung zu bekannten Cloudflare-IPs herzustellen, die in Spanien gerichtlich gesperrt wurden, um den Zugriff auf illegale Übertragungen zu verhindern. Das Problem ist, dass durch das Sperren einer gemeinsam genutzten IP tausende legitime Websites „kaputt“ gehen.',
  },
  {
    question: 'Warum sperrt mein Internetanbieter eine Cloudflare-IP?',
    answer: 'Aufgrund dynamischer Vorsichtsmaßnahmen müssen Internetanbieter IPs von Servern sperren, die angeblich geschützte Inhalte übertragen. Durch die Nutzung von Cloudflare (CDN) teilen sich viele Websites dieselbe IP, was zu Kollateralschäden bei unschuldigen Nutzern führt.',
  },
  {
    question: 'Wie funktioniert der Test?',
    answer: 'Wir versuchen, eine kleine Ressource von den als gesperrt markierten IPs zu laden. Wenn die Verbindung aufgrund von „Timeouts“ oder Verbindungsabbrüchen nur bei diesen IPs fehlschlägt, ist dies ein klares Indiz dafür, dass Ihr Anbieter eine IP-Filterung vornimmt.',
  },
  {
    question: 'Kann ich diese Sperre umgehen?',
    answer: 'IP-Sperren sind allein durch die Änderung des DNS schwer zu umgehen. Die Lösung besteht in der Regel in der Verwendung eines VPN, des Tor-Browsers oder darin, darauf zu warten, dass Cloudflare dem legitimen Dienst, den Sie besuchen möchten, eine neue IP zuweist.',
  },
];

const howToData = [
  {
    name: 'VPN oder Proxys deaktivieren',
    text: 'Damit der Test genau ist, müssen Sie die direkte Verbindung Ihres Routers (Glasfaser oder 4G/5G) ohne Zwischenschichten verwenden.',
  },
  {
    name: 'Scan starten',
    text: 'Klicken Sie auf die Diagnose-Schaltfläche. Das Tool sendet Testpakete an die unter Sperrverdacht stehenden IPs.',
  },
  {
    name: 'Ergebnisse interpretieren',
    text: 'Wenn die Ergebnisse rot angezeigt werden, bedeutet dies, dass die IP nicht erreichbar ist. Wenn sie grün sind, fließt Ihr Datenverkehr normal.',
  },
  {
    name: 'Bericht erstellen',
    text: 'Sie können die Ergebnisse verwenden, um den Vorfall Ihrem Internetanbieter zu melden, falls dieser legitime Dienste blockiert.',
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

export const content: ToolLocaleContent<TebasCheckUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Referenzen und Kontext',
  bibliography: [
    {
      name: 'Cloudflare: IP-Sperren verstehen',
      url: 'https://www.cloudflare.com/learning/network-layer/what-is-ip-blocking/',
    },
    {
      name: 'Spanische Regelungen zu dynamischen Sperren',
      url: 'https://www.poderjudicial.es/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: 'Warum funktioniert plötzlich nichts mehr?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Willkommen in der wunderbaren Welt der <strong>„präventiven Justiz“</strong>. Wenn Sie an einem Sonntagnachmittag hier sind und legitime Websites nicht mehr geladen werden, während Twitter einwandfrei funktioniert, sind Sie wahrscheinlich ein Kollateralschaden des Kreuzzugs gegen illegale Fußballübertragungen.',
    },
    {
      type: 'paragraph',
      html: 'In Spanien haben Richter bestimmten Sportorganisationen einen „roten Knopf“ in die Hand gegeben. Dieser Knopf erlaubt es ihnen, IP-Adressen in Echtzeit und ohne direkte gerichtliche Aufsicht von Minute zu Minute zu sperren. Das Problem ist, dass sie mit einer Kirmes-Schrotflinte zielen und oft auf gemeinsam genutzte Server schießen, auf denen neben „illegalen Spielen“ auch Krankenhäuser, Universitäten oder Ihr Lieblings-Kochblog zu Hause sind.',
    },
    {
      type: 'title',
      text: 'Die Theorie des brennenden Gebäudes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Stellen Sie sich vor, aus Wohnung 4B eines Wolkenkratzers wird ein illegaler Stream gesendet. Die logische Lösung wäre, an die Tür von 4B zu klopfen und den Strom abzustellen, oder?',
    },
    {
      type: 'paragraph',
      html: 'Nun, nein. Die aktuelle Lösung lautet: <strong>Das Fundament des gesamten Gebäudes wegsprengen</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Indem der Internetanbieter die IP eines Dienstes wie Cloudflare sperrt, schaltet er nicht nur den Piraten ab, sondern auch die anderen 50.000 legitimen Websites, die sich dieselbe digitale Adresse teilen. Wenn Sie gerade arbeiten oder lernen wollten und Ihre Website diese IP nutzt: Pech gehabt, Kollateralschaden. Beschweren Sie sich beim Oberbüchsenmacher.',
    },
    {
      type: 'title',
      text: 'Was genau macht dieses Diagnosetool?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dieses Tool führt eine technische Analyse in drei Schritten durch, um festzustellen, ob Ihr Anbieter selektive IP-Sperren anwendet:',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Google anpingen',
          description: 'Wir prüfen, ob Sie noch „Puls“ haben. Wenn Google nicht lädt, haben Sie wahrscheinlich Ihre WLAN-Rechnung nicht bezahlt. Dies ist der grundlegende Konnektivitätstest.',
        },
        {
          title: 'Cloudflare anpingen',
          description: 'Wir versuchen, 1.1.1.1 zu erreichen. Das ist der „Kanarienvogel im Bergwerk“ für Sperren in Spanien und das Hauptziel gerichtlicher Blockaden.',
        },
        {
          title: 'Urteil',
          description: 'Wenn Google funktioniert und Cloudflare fehlschlägt, ist die Sache klar: Ihr Anbieter wendet eine selektive IP-Sperre gegen Cloudflare an.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Auswirkungen dynamischer Sperren',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Falsch positive Ergebnisse',
          description: 'Unternehmens-Websites, private Blogs und Behördendienste können den Betrieb einstellen, wenn sie eine IP mit einem nicht autorisierten Streaming-Server teilen.',
        },
        {
          title: 'IP Filterung',
          description: 'Im Gegensatz zur DNS-Sperre verhindert die IP-Filterung die Verbindung auf Netzwerkebene, wodurch eine Änderung des DNS nicht ausreicht, um das Problem zu lösen.',
        },
        {
          title: 'Mangelnde Transparenz',
          description: 'Oft sieht der Nutzer nur einen „Timeout“-Fehler, ohne zu wissen, ob das Problem an seiner eigenen Verbindung oder an einer aktiven Sperre des Anbieters liegt.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Fragen, die niemand beantworten will',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Ist die Verwendung illegal?</strong> Nein. Einen Server anzupingen ist so illegal wie der Blick in ein Schaufenster. Dieses Tool ist eine passive Netzwerkdiagnose. Es bricht keine Verschlüsselung, knackt keine Passwörter und greift nicht auf geschützte Inhalte zu. Es sagt Ihnen lediglich, warum Sie Ihre gewohnten Websites nicht erreichen können.',
        '<strong>Wie behebe ich das?</strong> Wenn bei Ihnen eine aktive Sperre vorliegt, hilft das Ändern des DNS nicht mehr (sie kennen alle Tricks). Die einzige echte Lösung ist heute ein <strong>VPN</strong>. Durch die Verschlüsselung Ihres Datenverkehrs kann Ihr Anbieter nicht sehen, was Sie anfordern oder von wem, und kann Sie daher nicht „selektiv“ (oder versehentlich) sperren.',
      ],
    },
    {
      type: 'title',
      text: 'Streamer-Modus / OBS-Widget',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sind Sie Streamer und möchten den Status der Zensur in Echtzeit in Ihrem Stream anzeigen? Wir haben einen speziellen, ultra-minimalistischen Modus entwickelt, mit transparentem Hintergrund (chroma-ready) und automatischer Aktualisierung alle 5 Minuten.',
    },
    {
      type: 'list',
      items: [
        '<strong>Schritt 1:</strong> Fügen Sie eine neue <strong>Browser</strong>-Quelle in OBS hinzu.',
        '<strong>Schritt 2:</strong> Verwenden Sie diese URL: <code>https://jjlmoya.es/utilidades/tebas-check/stream/</code>',
        '<strong>Schritt 3:</strong> Fertig! Ein großes Symbol (Grün/Rot) zeigt an, ob Ihre Verbindung sauber ist oder unter gerichtlichem Beschuss steht.',
      ],
    },
    {
      type: 'tip',
      title: 'Rechtlicher Hinweis',
      html: '<p>Dieses Tool steht in keiner Verbindung zu Sportorganisationen, ermöglicht keinen Zugriff auf geschützte Inhalte und umgeht keine technologischen Schutzmaßnahmen (DRM). Es informiert den Nutzer lediglich darüber, dass seine Internetverbindung künstlich verschlechtert wird.</p>',
    },
  ],
  ui: {
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Referenzen und Kontext',
    scanning: 'Scanne die Matrix...',
    seekingBlocks: 'Suche nach Betonblöcken in deiner Leitung...',
    blockedTitle: 'GESPERRT...',
    blockedDiagnosis: 'Diagnose: „Selektive Zensur“',
    blockedReason: 'Interferenzen beim Internetanbieter erkannt. Cloudflare oder DNS werden manipuliert.',
    noInternetTitle: 'KEINE VERBINDUNG',
    noInternetReason: 'Es scheint, als hätten Sie keinen Internetzugriff. Prüfen Sie Kabel oder Rechnung.',
    successTitle: 'SIE SIND FREI',
    successReason: 'Ihre Verbindung sieht sauber aus. Falls es globale Sperren gibt, betreffen sie Sie nicht.',
    retryBtn: 'Die Justiz erneut herausfordern',
    authorNoteTitle: 'Anmerkung des Autors:',
    authorNoteText: 'Ich konnte dieses Tool nicht vollständig testen, da ich nicht von Tebas\' „schwarzer Hand“ betroffen bin. Wenn du mir helfen willst, die Diagnose zu verbessern, kontaktiere mich.',
    consoleHeader: 'TEBAS_OS v3.2.0',
    statusNegotiating: 'Verhandle mit deinem Router...',
    statusDodging: 'Weiche dem Gerichtsbeschluss aus...',
    statusCheckingPirate: 'Prüfe, ob du ein Pirat bist (Zwinker, Zwinker)...',
    statusPinging: 'Pinge Google an, um zu sehen, ob du existierst...',
    statusConsulting: 'Befrage das Orakel der geteilten IPs...',
    statusCheckingFee: 'Prüfe, ob Tebas die Selbstständigengebühr bezahlt hat...',
    statusCalculating: 'Berechne die Gewinnwahrscheinlichkeit im Lotto...',
    statusDeciphering: 'Versuche, deinen Providervertrag zu entziffern...',
    logStarted: "STARTE AUTONOMES PROTOKOLL ‚TEBAS_WATCH‘...",
    logDetecting: '> Erkenne Anbieter und Basis-Konnektivität...',
    logIspFound: '> Anbieter erkannt: ',
    logConnError: '> Basis-Verbindungsfehler',
    logDnsCross: '> Führe DNS-Datenabgleich aus (DoH vs. Lokal)...',
    logDnsGoogle: '> Echtes DNS (Google): ',
    logDnsPoisoned: '> ALARM: Manipuliertes DNS erkannt.',
    logDnsNoDoh: '> DoH nicht verfügbar, überspringe DNS-Abgleich.',
    logLaunchingProbes: '> Starte Sonden auf kritische Ziele...',
    logIpBlocked: '> Ziel {ip}: KEINE ANTWORT (Verdacht auf IP-Sperre)',
    logIpActive: '> Ziel {ip}: AKTIV',
    logAlertInterference: '!!! ALARM: GERICHTLICHE INTERFERENZ !!!',
    logNoInternet: 'KEIN INTERNETZUGRIFF',
    logClean: 'SAUBERE VERBINDUNG. VIEL SPASS.',
    logDiagError: 'DIAGNOSEFEHLER',
  },
};
