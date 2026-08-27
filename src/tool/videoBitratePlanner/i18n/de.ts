import { createLocalizedContent } from '../locale-content';

export const content = createLocalizedContent({
  language: 'de',
  slug: 'video-bitrate-speicherplaner',
  title: 'Video Bitrate und Speicherplaner',
  description: 'Schätze Videospeicher, Bildzeiten und praktische Bitraten für Streaming oder Aufnahmen.',
  ui: {
    presetLabel: 'Mit einer Szene starten', presetFast: 'Schneller Webstream', presetUpload: 'Alltäglicher Livestream', presetArchive: '4K Archiv',
    resolutionLabel: 'Auflösung', frameRateLabel: 'Bildrate', codecLabel: 'Codec', bitrateLabel: 'Video Bitrate', durationLabel: 'Sitzungsdauer', copiesLabel: 'Gespeicherte Kopien', minutesLabel: 'Minuten', copiesShort: 'Kopien',
    h264: 'H.264', h265: 'H.265', av1: 'AV1', codecNote: 'Die Codec Effizienz verändert die Qualitätsbewertung, nicht die Speicherrechnung.', sceneLabel: 'Signal zum Speicher', signalSource: 'Bild', codecGate: 'Kodierung', storageReel: 'Speicher', qualityEstimate: 'Qualitätsbewertung', storageEstimate: 'Geschätzter Speicher', perCopy: 'Eine Kopie', allCopies: 'Alle Kopien', perHour: 'Pro Stunde', frameTime: 'Bildzeit', dataPerFrame: 'Daten pro Bild', comparisonLabel: 'Speichervergleich', lean: 'Sparsam', balanced: 'Ausgewogen', crisp: 'Scharf', qualityLean: 'Sparsam und leicht', qualityBalanced: 'Ausgewogenes Signal', qualityStrong: 'Viele Details', qualityExcellent: 'Sehr viel Spielraum', qualityAggressive: 'Starke Kompression', qualityGuidance: 'Eine visuelle Schätzung zum Vergleich der Einstellungen.', capacityLight: 'Geringer Speicherbedarf', capacityMedium: 'Mittlerer Speicherbedarf', capacityHeavy: 'Hoher Speicherbedarf', capacityNote: 'Der Speicherstatus basiert auf allen oben angezeigten Kopien.', reset: 'Werte zurücksetzen', localNote: 'Läuft lokal im Browser. Nichts wird hochgeladen.', assumptionTitle: 'Annahmen lesen', assumptionText: 'Der Speicher nutzt dezimale Gigabyte und die eingegebene Videobitrate. Audio, Container-Overhead, Spitzen variabler Bitraten und Dateisystem-Padding werden nicht addiert.', warningText: 'Die Qualitätsstufen sind Planungswerte. Bewegung, Körnung, Keyframes, Encoder-Presets, Plattform-Transkodierung und Netzwerkreserven verändern das echte Ergebnis.', readyText: 'Ändere einen Wert, um das Signal neu zu zeichnen.', calculateAria: 'Videoplan aktualisieren',
  },
  faq: [
    { question: 'Lädt oder untersucht dieser Planer mein Video?', answer: 'Nein. Er verwendet nur die Werte, die du im Browser eingibst. Es werden keine Dateien hochgeladen, keine Kamera untersucht und kein Streamingdienst abgefragt.' },
    { question: 'Wie wird der Speicher berechnet?', answer: 'Die Bitrate wird mit der Dauer multipliziert und durch acht geteilt, um Bits in Bytes umzuwandeln. Das Ergebnis nutzt dezimale Gigabyte und wird mit der Anzahl der Kopien multipliziert.' },
    { question: 'Was bedeutet die Qualitätsbewertung?', answer: 'Sie ist eine Faustregel aus Pixeln, Bildern pro Sekunde, Bitrate und einem groben Codec Faktor. Sie garantiert keine Bildqualität, da Bewegung, Körnung und Encoder Einstellungen ebenfalls zählen.' },
    { question: 'Warum ändert sich dieselbe Bitrate bei anderer Auflösung oder Bildrate?', answer: 'Eine höhere Auflösung beschreibt mehr Pixel und eine höhere Bildrate sendet mehr Bilder pro Sekunde. Dadurch konkurriert mehr Bildinformation um dieselbe Bitrate.' },
    { question: 'Kann ich das Ergebnis als Plattformvorgabe verwenden?', answer: 'Nutze es für Kapazitätsplanung und Vergleiche. Plattformvorgaben ändern sich, deshalb prüfe die aktuelle Encoder Anleitung des Ziels und lasse beim Livestream Upload Reserve.' },
  ],
  howTo: [
    { name: 'Bildformat wählen', text: 'Wähle die Auflösung und Bildrate, die zu deinem geplanten Stream oder deiner Aufnahme passen.' },
    { name: 'Kodierung festlegen', text: 'Wähle den Codec und gib die Videobitrate in Megabit pro Sekunde ein. Ein Preset ist ein guter Startpunkt.' },
    { name: 'Sitzung beschreiben', text: 'Gib die Dauer in Minuten und die Anzahl der Kopien ein, die du behalten, bearbeiten oder ausliefern möchtest.' },
    { name: 'Abwägung lesen', text: 'Vergleiche sparsame, ausgewogene und scharfe Stufen, um den Speicherbedarf vor der Aufnahme zu prüfen.' },
  ],
  seo: [
    { type: 'title', text: 'Videospeicher vor dem Stream oder der Aufnahme schätzen', level: 2 },
    { type: 'paragraph', html: 'Ein Video Bitraten Rechner hilft, wenn eine Aufnahme einen realistischen Speicherplan braucht. Gib Bitrate, Dauer und Kopien ein und vergleiche anschließend drei Signalstufen für dasselbe Bildformat.' },
    { type: 'title', text: 'Was der Planer berechnet', level: 3 },
    { type: 'list', items: ['<strong>Speicher:</strong> Bitrate mal Zeit, von Bits in dezimale Gigabyte umgerechnet und mit den Kopien multipliziert.', '<strong>Bildzeit:</strong> Millisekunden pro Bild bei der gewählten FPS Zahl sowie eine Schätzung der Daten pro Bild.', '<strong>Qualitätsbewertung:</strong> ein Pixel pro Bild Vergleich mit einem groben Codec Faktor.'] },
    { type: 'title', text: 'Wie Auflösung und FPS die Abwägung ändern', level: 3 },
    { type: 'paragraph', html: 'Eine höhere Auflösung erhöht die Pixelzahl pro Bild. Eine höhere Bildrate erhöht die Bildzahl pro Sekunde. Bleibt die Bitrate gleich, erhält jedes Bild weniger Daten und die Kompression wird anspruchsvoller.' },
    { type: 'tip', title: 'Reserve für Livestreams lassen', html: 'Behandle die Videobitrate nicht als gesamte Leitungskapazität. Lass Platz für Audio, Protokoll-Overhead und Netzschwankungen und teste eine Szene mit ähnlicher Bewegung.' },
    { type: 'title', text: 'Für die letzte Einstellung Plattformvorgaben nutzen', level: 3 },
    { type: 'paragraph', html: 'Dieser Planer bleibt plattformneutral. YouTube veröffentlicht Bitratenbereiche nach Auflösung und Bildrate. Nutze die aktuellen Regeln deines Ziels, um das hier modellierte Szenario zu prüfen.' },
    { type: 'title', text: 'Warum das Speicherergebnis eine Schätzung ist', level: 3 },
    { type: 'paragraph', html: 'Eine nominelle Bitrate beschreibt nicht jedes Byte einer fertigen Datei. Variable Bitrate, Audio, Containerdaten, Keyframes, Transkodierung und Dateieinheiten können die Endgröße verändern.' },
  ],
});
