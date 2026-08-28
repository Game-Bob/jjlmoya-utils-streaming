import { makeContent } from './locale-factory';

export const content = makeContent({
  language: 'sv',
  slug: 'nedrakning-streamscen-obs',
  title: 'Nedräkning för streamscen',
  description: 'Skapa en nedräkningsbild för streamers vid snart live, BRB, raids och pauser.',
  ui: {
    sceneLabel: 'Vilken scen förbereder du?', sceneBrb: 'BRB', sceneStarting: 'Snart live', sceneRaid: 'Raid', sceneIntermission: 'Paus', sceneTitleLabel: 'Vad ska visas ovanför timern?', sceneTitlePlaceholder: 'Snart live', designLabel: 'Vilken känsla ska scenen ha?', designAurora: 'Auroradis', designType: 'Kinetisk typografi', designPulse: 'Pulserande glöd', designGlitch: 'Glitchsignal', designSunset: 'Solflamma', accentColorLabel: 'Accentfärg', glowColorLabel: 'Glödfärg', messageLabel: 'Vad behöver tittarna veta?', messagePlaceholder: 'Tillbaka om 5 minuter', durationLabel: 'Hur mycket tid behöver du?', duration60: '1 min', duration300: '5 min', duration600: '10 min', durationCustom: 'Anpassad', secondsLabel: 'sekunder', startLabel: 'När ska signalen börja?', startNow: 'Starta nu', scheduleTime: 'Schemalägg en tid', timeLabel: 'Vilken lokal tid ska den börja?', startAction: 'Lägg ut min signal', focusAction: 'Visa min scen', exitFocusAction: 'Lämna scenvisning', resetAction: 'Återställ signal', flowText: 'Du är streamern: välj vad som händer, ställ in tiden du behöver och lägg ut din signal.', obsTitle: 'Lägg scenen i OBS', obsText: 'Kopiera länken, lägg till en Browser Source i OBS, klistra in den och använd din canvasstorlek. STREAMING öppnar automatiskt en ren scen i helskärm.', obsStepCopy: 'Kopiera länken', obsStepAdd: 'Lägg till en Browser Source i OBS', obsStepPaste: 'Klistra in och anpassa canvasstorleken', copyUrlAction: 'Kopiera OBS-länk', copiedUrlText: 'OBS-länken kopierades', streamUrlAria: 'Skapad OBS-streaming-URL', previewTitle: 'Välj scenens utseende', previewHint: 'Klicka på en förhandsvisning för att använda den', previewAria: 'Förhandsvisningar av scenutseenden', stageEyebrow: 'Utsändningsbild', stageCaption: 'Nästa scen är klar', readyBadge: 'Klar', waitingBadge: 'Väntar', liveBadge: 'Livesignal', endedBadge: 'Avslutad', readyText: 'Kontrollera scenen och starta signalen när scenen är klar.', waitingText: 'Live-nedräkningen börjar vid den schemalagda lokala tiden.', liveText: 'Låt scenen visas tills scenbytet är klart.', endedText: 'Signalen är slut. Återställ den eller skapa en ny scen.', remainingLabel: 'Tid på scenen', startTimeLabel: 'Start', endTimeLabel: 'Slut', progressLabel: 'Scenens förlopp', assumptionTitle: 'Om tidtagningen', assumptionText: 'Schemalagda tider använder enhetens klocka. Timern är en visuell signal och synkroniserar inte OBS, Twitch, chatten eller kodaren.', warningTitle: 'Använd som scenens signal', warningText: 'En vilande flik, ändrad systemtid eller fördröjning i sändningen kan göra att tiden på skärmen skiljer sig från streamen. Kontrollera livescenen före bytet.', invalidTime: 'Ange lokal tid i formatet HH:MM.', clockAria: 'Återstående nedräkningstid', statusAria: 'Nedräkningens status',
  },
  faq: [
    { question: 'Ansluter nedräkningen till OBS eller Twitch?', answer: 'Nej. Det är en fristående timer som inte styr OBS, Twitch, chatten eller en streamserver. Använd Visa min scen för att fylla skärmen och fånga vyn som Browser Source.' },
    { question: 'Hur använder jag nedräkningen direkt i OBS?', answer: 'Lägg till verktygets URL som Browser Source i OBS med streamingflaggan och inställningarna, till exempel ?STREAMING&scene=starting&duration=300&design=aurora&title=Snart%20live. Kontrollerna försvinner och nedräkningen fyller källans yta.' },
    { question: 'Vad händer när jag schemalägger en starttid?', answer: 'Klockan väntar till den valda lokala tiden och räknar sedan ner scenens längd. En tid som redan passerat behandlas som nästa förekomst följande dag.' },
    { question: 'Kan jag använda ett eget meddelande?', answer: 'Ja. Skriv som streamer den korta signal du vill visa, till exempel när du kommer tillbaka, nästa steg eller ett raidmeddelande.' },
    { question: 'Vad ändrar scenpresets?', answer: 'De namnger sändningens ögonblick så att scenen känns igen direkt. Timerberäkning, längd och plattformskoppling ändras inte.' },
    { question: 'Är sluttiden exakt?', answer: 'Den räknas fram från webbläsarens lokala klocka och den angivna tiden. Viloläge, pausad flik eller ändrad klocka kan påverka den synliga uppdateringen. Se den som ett planeringsstöd, inte en sändningssynkronisering.' },
  ],
  howTo: [
    { name: 'Välj scenens ögonblick', text: 'Välj Snart live, BRB, Raid eller Paus för att namnge det tittarna ser.' },
    { name: 'Skriv din streamersignal', text: 'Ange det korta meddelande tittarna ska läsa medan du förbereder nästa scen.' },
    { name: 'Ställ in längd eller tid', text: 'Välj en vanlig längd eller skriv en egen. Starta direkt eller schemalägg lokal tid.' },
    { name: 'Läs statusen', text: 'Använd den stora klockan och statusetiketten för att avgöra när scenen ska bytas.' },
  ],
  seo: [
    { type: 'title', text: 'Skapa en scen signal som går att läsa direkt', level: 2 },
    { type: 'paragraph', html: 'En nedräkning ger scenen Snart live, BRB, raid eller paus en tydlig tid att komma tillbaka. Berätta vad du gör, ställ in tiden du behöver och låt den stora timern synas medan du förbereder sändningen.' },
    { type: 'title', text: 'Det här beräknar scenklockan', level: 3 },
    { type: 'list', items: ['<strong>Direktsignal:</strong> startar när du lägger ut den och räknar ner vald längd.', '<strong>Schemalagd signal:</strong> väntar på lokal tid och startar sedan scenens längd.', '<strong>Scenstatus:</strong> skiljer mellan klar, väntar, live och avslutad så att nästa steg blir tydligt.'] },
    { type: 'title', text: 'Välj en användbar scenlängd', level: 3 },
    { type: 'paragraph', html: 'Använd kort tid när du byter källa eller löser ett snabbt avbrott. Välj längre tid när du förbereder en gäst, ett spel eller en teknisk omstart. Meddelandet ska ge information som timern ensam inte kan ge.' },
    { type: 'tip', title: 'Gör återkomsten konkret', html: 'Skriv nästa handling i stället för ett allmänt löfte: "Tillbaka 20:30 för finalen" eller "Förbereder raid". Då förstår tittarna både väntan och anledningen.' },
    { type: 'title', text: 'Varför klockan fungerar offline', level: 3 },
    { type: 'paragraph', html: 'Klockan behöver inte tillgång till din kanal eller sändningsprogramvara. Text och tid stannar i webbläsaren, vilket gör den användbar som förberedelsescen. Kontrollera ändå källa och scenövergång i OBS före sändning.' },
    { type: 'title', text: 'Skicka den färdiga scenen till OBS', level: 3 },
    { type: 'paragraph', html: 'Klicka på <strong>Kopiera OBS-länk</strong>, lägg till en Browser Source i streamscenen, klistra in länken och anpassa canvasupplösningen. <code>?STREAMING</code> öppnar en ren scen utan kontroller och startar automatiskt.' },
    { type: 'title', text: 'Matcha utseendet med din kanal', level: 3 },
    { type: 'paragraph', html: 'Välj mellan fem olika kompositioner: Auroradis med en atmosfärisk ring, Kinetisk typografi med stora siffror, Pulserande glöd med vågor som växer, Glitchsignal med skarp sändningsenergi och Solflamma med varm horisont. Välj en förhandsvisning och justera färgerna.' },
    { type: 'list', items: ['<strong>Scen:</strong> visar Snart live, BRB, raid eller paus.', '<strong>Titel:</strong> ersätter standardraden med din egen rubrik.', '<strong>Meddelande:</strong> lägger till signalen tittarna behöver läsa.', '<strong>Längd och tid:</strong> styr när scenen börjar och hur länge den visas.'] },
    { type: 'paragraph', html: 'Om du bygger URL:en själv kan du använda <code>?STREAMING&amp;scene=raid&amp;title=Raid%20förbereds&amp;design=pulse</code>. Generatorn lägger automatiskt till längd, meddelande och färger.' },
    { type: 'title', text: 'Läs sluttiden som ett planeringsstöd', level: 3 },
    { type: 'paragraph', html: 'Sluttiden bygger på enhetens klocka och den valda längden. Den garanterar inte att sändningen når alla samtidigt. Lägg in marginal om bytet beror på en gäst, en anslutning eller en övergång.' },
  ],
});
