import { makeContent } from './locale-factory';

export const content = makeContent({
  language: 'nl',
  slug: 'stream-scene-aftelklok-obs',
  title: 'Aftelklok voor streamscènes',
  description: 'Maak een aftelscherm voor streamers tijdens binnenkort live, BRB, raids en pauzes.',
  ui: {
    sceneLabel: 'Welke scène bereid je voor?', sceneBrb: 'BRB', sceneStarting: 'Bijna live', sceneRaid: 'Raid', sceneIntermission: 'Pauze', sceneTitleLabel: 'Wat moet boven de timer staan?', sceneTitlePlaceholder: 'Bijna live', designLabel: 'Welke sfeer moet je scène hebben?', designAurora: 'Auroranevel', designType: 'Kinetische typografie', designPulse: 'Pulserende gloed', designGlitch: 'Glitchsignaal', designSunset: 'Zonnevlam', accentColorLabel: 'Accentkleur', glowColorLabel: 'Gloedkleur', messageLabel: 'Wat moeten je kijkers weten?', messagePlaceholder: 'Ik ben over 5 minuten terug', durationLabel: 'Hoeveel tijd heb je nodig?', duration60: '1 min', duration300: '5 min', duration600: '10 min', durationCustom: 'Aangepast', secondsLabel: 'seconden', startLabel: 'Wanneer moet dit signaal starten?', startNow: 'Nu starten', scheduleTime: 'Tijd plannen', timeLabel: 'Op welk lokaal tijdstip moet dit starten?', startAction: 'Mijn signaal live zetten', focusAction: 'Mijn scène tonen', exitFocusAction: 'Scèneweergave verlaten', resetAction: 'Signaal resetten', flowText: 'Jij bent de streamer: kies het moment, stel de benodigde tijd in en zet je signaal live.', obsTitle: 'Deze scène in OBS gebruiken', obsText: 'Kopieer de link, voeg in OBS een Browser Source toe, plak de link en gebruik je canvasresolutie. STREAMING opent automatisch een schoon scherm op volledig formaat.', obsStepCopy: 'Deze link kopiëren', obsStepAdd: 'Een Browser Source toevoegen in OBS', obsStepPaste: 'Plakken en canvasformaat aanpassen', copyUrlAction: 'OBS-link kopiëren', copiedUrlText: 'OBS-link gekopieerd', streamUrlAria: 'Gegenereerde OBS-streaming-URL', previewTitle: 'Kies je scèneontwerp', previewHint: 'Klik op een voorbeeld om het te gebruiken', previewAria: 'Voorbeelden van scèneontwerpen', stageEyebrow: 'Uitzendscherm', stageCaption: 'Je volgende scène is klaar', readyBadge: 'Klaar', waitingBadge: 'Wachten', liveBadge: 'Live signaal', endedBadge: 'Afgelopen', readyText: 'Controleer het scherm en start het signaal wanneer je scène klaar is.', waitingText: 'Het live aftellen begint op het geplande lokale tijdstip.', liveText: 'Laat dit scherm staan totdat de scènewissel klaar is.', endedText: 'Het signaal is afgelopen. Reset het of maak een nieuwe scène.', remainingLabel: 'Tijd op scène', startTimeLabel: 'Start', endTimeLabel: 'Einde', progressLabel: 'Scènevoortgang', assumptionTitle: 'Opmerking over tijd', assumptionText: 'Geplande tijden gebruiken de klok van je apparaat. De timer is een visueel signaal en synchroniseert OBS, Twitch, chat of encoder niet.', warningTitle: 'Gebruik dit als scènesignaal', warningText: 'Een slapend tabblad, een gewijzigde systeemklok of vertraging in de uitzending kan de zichtbare tijd anders maken dan de stream. Controleer de live scène voor je wisselt.', invalidTime: 'Voer een lokale tijd in met de notatie HH:MM.', clockAria: 'Resterende afteltijd', statusAria: 'Status van de afteltimer',
  },
  faq: [
    { question: 'Verbindt deze aftelklok met OBS of Twitch?', answer: 'Nee. Het is een zelfstandige timer die OBS, Twitch, chat en een streamserver niet aanstuurt. Gebruik Mijn scène tonen om het scherm te vullen en neem die weergave op als Browser Source.' },
    { question: 'Hoe gebruik ik de aftelklok rechtstreeks in OBS?', answer: 'Voeg de URL toe als OBS Browser Source met de streamingparameter en instellingen, bijvoorbeeld ?STREAMING&scene=starting&duration=300&design=aurora&title=Bijna%20live. De bediening verdwijnt en de timer vult de bron.' },
    { question: 'Wat gebeurt er als ik een starttijd plan?', answer: 'De klok wacht tot het gekozen lokale tijdstip en telt daarna de scèneduur af. Een tijdstip dat al voorbij is, wordt als de volgende dag behandeld.' },
    { question: 'Kan ik een eigen bericht gebruiken?', answer: 'Ja. Schrijf als streamer de korte aanwijzing die je kijkers moeten zien, zoals je terugkeertijd, de volgende stap of een raidbericht.' },
    { question: 'Wat veranderen de scènepresets?', answer: 'Ze geven het uitzendmoment een naam, zodat de scène direct herkenbaar is. De timerberekening, duur en platformverbinding veranderen niet.' },
    { question: 'Is de eindtijd exact?', answer: 'Die wordt berekend met de lokale browserklok en de ingevoerde duur. Slaapstand, een gepauzeerd tabblad of een klokwijziging kan de zichtbare update beïnvloeden. Het is een planningssignaal, geen gegarandeerde synchronisatie.' },
  ],
  howTo: [
    { name: 'Kies het scènemoment', text: 'Kies Bijna live, BRB, Raid of Pauze om het moment voor je kijkers te benoemen.' },
    { name: 'Schrijf je streamersignaal', text: 'Voer het korte bericht in dat kijkers lezen terwijl je de volgende scène voorbereidt.' },
    { name: 'Stel duur of tijd in', text: 'Kies een gebruikelijke duur of voer je eigen duur in. Start direct of plan een lokaal tijdstip.' },
    { name: 'Lees de status', text: 'Gebruik de grote klok en het statuslabel om te bepalen wanneer je van scène wisselt.' },
  ],
  seo: [
    { type: 'title', text: 'Maak een scènesignaal dat direct leesbaar is', level: 2 },
    { type: 'paragraph', html: 'Een aftelklok geeft je scène voor bijna live, BRB, raid of pauze een duidelijk moment om terug te keren. Vertel wat je doet, stel de tijd in die je nodig hebt en laat de grote timer zien tijdens de voorbereiding.' },
    { type: 'title', text: 'Wat de scèneklok berekent', level: 3 },
    { type: 'list', items: ['<strong>Direct signaal:</strong> start wanneer je het live zet en telt de gekozen duur af.', '<strong>Gepland signaal:</strong> wacht op je lokale tijd en start daarna de scèneduur.', '<strong>Scènestatus:</strong> onderscheidt klaar, wachten, live en afgelopen, zodat de volgende actie duidelijk is.'] },
    { type: 'title', text: 'Een bruikbare scèneduur kiezen', level: 3 },
    { type: 'paragraph', html: 'Gebruik een korte duur bij het wisselen van bronnen of een korte onderbreking. Kies meer tijd voor een gast, een game of een technische herstart. Je bericht moet informatie geven die de timer alleen niet kan geven.' },
    { type: 'tip', title: 'Maak je terugkeer concreet', html: 'Schrijf niet alleen dat je zo terug bent, maar bijvoorbeeld "Om 20:30 terug voor de finale" of "Raid wordt voorbereid". Zo kennen kijkers de wachttijd en de reden.' },
    { type: 'title', text: 'Waarom de klok offline blijft', level: 3 },
    { type: 'paragraph', html: 'De klok heeft geen toegang nodig tot je kanaal of uitzendsoftware. Tekst en tijd blijven in de browser, waardoor dit een handige voorbereidingsscène is. Controleer voor je live gaat wel de bron en scèneovergang in OBS.' },
    { type: 'title', text: 'De scène naar OBS sturen', level: 3 },
    { type: 'paragraph', html: 'Klik op <strong>OBS-link kopiëren</strong>, voeg een Browser Source toe aan je streamscène, plak de link en pas de canvasresolutie aan. Met <code>?STREAMING</code> opent een schoon scherm zonder bediening en start het vanzelf.' },
    { type: 'title', text: 'Kies een stijl voor je kanaal', level: 3 },
    { type: 'paragraph', html: 'Kies uit vijf verschillende composities: Auroranevel met een atmosferische ring, Kinetische typografie met grote cijfers, Pulserende gloed met uitdijende golven, Glitchsignaal met scherpe uitzendenergie of Zonnevlam met een warme horizon. Kies een voorbeeld en pas de kleuren aan.' },
    { type: 'list', items: ['<strong>Scène:</strong> labelt bijna live, BRB, raid of pauze.', '<strong>Titel:</strong> vervangt de standaardregel door je eigen kop.', '<strong>Bericht:</strong> voegt de aanwijzing voor je kijkers toe.', '<strong>Duur en tijd:</strong> bepalen wanneer de scène start en hoe lang ze zichtbaar is.'] },
    { type: 'paragraph', html: 'Bouw je de URL zelf, gebruik dan <code>?STREAMING&amp;scene=raid&amp;title=Raid%20in%20voorbereiding&amp;design=pulse</code>. De generator voegt duur, bericht en aangepaste kleuren automatisch toe.' },
    { type: 'title', text: 'De eindtijd als planning lezen', level: 3 },
    { type: 'paragraph', html: 'De eindtijd komt uit de apparaatklok en de gekozen duur. Dit garandeert niet dat de uitzending op hetzelfde moment bij iedereen aankomt. Houd wat marge als een gast, verbinding of overgang van de uitzending nodig is.' },
  ],
});
