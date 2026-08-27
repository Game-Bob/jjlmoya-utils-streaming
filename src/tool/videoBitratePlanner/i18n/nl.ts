import { createLocalizedContent } from '../locale-content';

export const content = createLocalizedContent({
  language: 'nl',
  slug: 'video-bitrate-opslagplanner',
  title: 'Planner voor Videobitrate en Opslag',
  description: 'Schat video opslag, frametijd en praktische bitrate niveaus voor streaming of opnames.',
  ui: {
    presetLabel: 'Begin met een scène', presetFast: 'Snelle webstream', presetUpload: 'Dagelijkse live', presetArchive: '4K archief', resolutionLabel: 'Resolutie', frameRateLabel: 'Beeldsnelheid', codecLabel: 'Codec', bitrateLabel: 'Videobitrate', durationLabel: 'Sessieduur', copiesLabel: 'Bewaarde kopieën', minutesLabel: 'minuten', copiesShort: 'kopieën', h264: 'H.264', h265: 'H.265', av1: 'AV1', codecNote: 'Codec efficiëntie verandert de kwaliteitslezing, niet de opslagberekening.', sceneLabel: 'Van signaal naar opslag', signalSource: 'Beeld', codecGate: 'Codering', storageReel: 'Opslag', qualityEstimate: 'Kwaliteitslezing', storageEstimate: 'Geschatte opslag', perCopy: 'Eén kopie', allCopies: 'Alle kopieën', perHour: 'Per uur', frameTime: 'Frametijd', dataPerFrame: 'Data per frame', comparisonLabel: 'Opslagvergelijking', lean: 'Zuinig', balanced: 'Gebalanceerd', crisp: 'Scherp', qualityLean: 'Zuinig en compact', qualityBalanced: 'Gebalanceerd signaal', qualityStrong: 'Veel detail', qualityExcellent: 'Veel marge', qualityAggressive: 'Sterke compressie', qualityGuidance: 'Een visuele schatting om instellingen te vergelijken.', capacityLight: 'Lichte opslagvoetafdruk', capacityMedium: 'Gemiddelde opslagvoetafdruk', capacityHeavy: 'Zware opslagvoetafdruk', capacityNote: 'De capaciteitsstatus is gebaseerd op alle hierboven getoonde kopieën.', reset: 'Waarden herstellen', localNote: 'Draait lokaal in deze browser. Er wordt niets geüpload.', assumptionTitle: 'Aannames lezen', assumptionText: 'Opslag gebruikt decimale gigabytes en de ingevoerde videobitrate. Audio, container overhead, pieken van variabele bitrate en bestandssysteemruimte worden niet toegevoegd.', warningText: 'De kwaliteitsniveaus zijn planningsrichtlijnen. Beweging, ruis, keyframes, encoder presets, platformtranscodering en netwerkruimte kunnen het echte resultaat veranderen.', readyText: 'Pas een waarde aan om het signaal opnieuw te tekenen.', calculateAria: 'Videoplan bijwerken',
  },
  faq: [
    { question: 'Uploadt of onderzoekt deze planner mijn video?', answer: 'Nee. Hij gebruikt alleen de waarden die je in de browser invoert. Er worden geen bestanden geüpload, camera s onderzocht of streamingdiensten bevraagd.' },
    { question: 'Hoe wordt opslag berekend?', answer: 'De bitrate wordt vermenigvuldigd met de duur en gedeeld door acht om bits naar bytes om te zetten. Het resultaat gebruikt decimale gigabytes en wordt met het aantal kopieën vermenigvuldigd.' },
    { question: 'Wat betekent de kwaliteitslezing?', answer: 'Het is een vuistregel op basis van pixels, beelden per seconde, bitrate en een brede codec efficiëntiefactor. Het is geen belofte van beeldkwaliteit, want beweging en encoderinstellingen tellen ook mee.' },
    { question: 'Waarom verandert dezelfde bitrate bij een andere resolutie of beeldsnelheid?', answer: 'Een hogere resolutie beschrijft meer pixels en een hogere beeldsnelheid verstuurt meer beelden per seconde. Meer visuele informatie moet dezelfde bitrate delen.' },
    { question: 'Kan ik het resultaat als platformvereiste gebruiken?', answer: 'Gebruik het voor capaciteitsplanning en vergelijkingen. Platformvereisten veranderen, dus controleer de actuele encoderinformatie en houd uploadruimte over voor een livestream.' },
  ],
  howTo: [
    { name: 'Kies het beeldformaat', text: 'Selecteer de resolutie en beeldsnelheid die passen bij je geplande stream of opname.' },
    { name: 'Stel het coderingssignaal in', text: 'Kies de codec en voer de videobitrate in megabit per seconde in. Gebruik een preset als startpunt.' },
    { name: 'Beschrijf de sessie', text: 'Voer de duur in minuten in en het aantal kopieën dat je wilt bewaren, monteren of leveren.' },
    { name: 'Lees de afweging', text: 'Vergelijk zuinige, gebalanceerde en scherpe niveaus om de opslag vóór de sessie te zien veranderen.' },
  ],
  seo: [
    { type: 'title', text: 'Videosopslag schatten voor je gaat streamen of opnemen', level: 2 },
    { type: 'paragraph', html: 'Een videobitrate calculator helpt bij een realistisch opslagplan voor een opnamesessie. Voer bitrate, duur en kopieën in en vergelijk drie signaalniveaus voor hetzelfde beeldformaat.' },
    { type: 'title', text: 'Wat de planner berekent', level: 3 },
    { type: 'list', items: ['<strong>Opslag:</strong> bitrate maal tijd, omgerekend van bits naar decimale gigabytes en vermenigvuldigd met de kopieën.', '<strong>Frametijd:</strong> de milliseconden per frame bij de gekozen FPS en een schatting van data per frame.', '<strong>Kwaliteitslezing:</strong> een vergelijking van pixels per frame met een codec efficiëntiefactor.'] },
    { type: 'title', text: 'Hoe resolutie en FPS de afweging veranderen', level: 3 },
    { type: 'paragraph', html: 'Een hogere resolutie verhoogt het aantal pixels per frame en een hogere FPS verhoogt het aantal frames per seconde. Bij dezelfde bitrate krijgt elk frame minder data en wordt compressie zwaarder.' },
    { type: 'tip', title: 'Houd ruimte over voor een livestream', html: 'Zie de videobitrate als de hoofdlast, niet als de volledige verbindingscapaciteit. Houd ruimte over voor audio, protocol en netwerkschommelingen en test een scène met vergelijkbare beweging.' },
    { type: 'title', text: 'Gebruik platforminformatie voor de definitieve instelling', level: 3 },
    { type: 'paragraph', html: 'Deze planner is platformonafhankelijk. YouTube publiceert bitratebereiken per resolutie en beeldsnelheid. Gebruik de actuele regels van je bestemming om het scenario te controleren.' },
    { type: 'title', text: 'Waarom het opslagresultaat een schatting is', level: 3 },
    { type: 'paragraph', html: 'Een nominale bitrate beschrijft niet elke byte van het eindbestand. Variabele bitrate, audio, containermetadata, keyframes, transcodering en systeemeenheden kunnen de uiteindelijke grootte veranderen.' },
  ],
});
