import { createLocalizedContent } from '../locale-content';

export const content = createLocalizedContent({
  language: 'sv',
  slug: 'video-bitrate-lagringsplanerare',
  title: 'Planerare för videobitrate och lagring',
  description: 'Uppskatta videolagring, bildtid och praktiska bitrate nivåer för streaming eller inspelning.',
  ui: {
    presetLabel: 'Börja med en scen', presetFast: 'Snabb webbstream', presetUpload: 'Vardaglig livesändning', presetArchive: '4K arkiv', resolutionLabel: 'Upplösning', frameRateLabel: 'Bildfrekvens', codecLabel: 'Kodek', bitrateLabel: 'Videobitrate', durationLabel: 'Sessionens längd', copiesLabel: 'Sparade kopior', minutesLabel: 'minuter', copiesShort: 'kopior', h264: 'H.264', h265: 'H.265', av1: 'AV1', codecNote: 'Kodekens effektivitet ändrar kvalitetsbedömningen, inte lagringsberäkningen.', sceneLabel: 'Signal till lagring', signalSource: 'Bild', codecGate: 'Kodning', storageReel: 'Lagring', qualityEstimate: 'Kvalitetsbedömning', storageEstimate: 'Uppskattad lagring', perCopy: 'En kopia', allCopies: 'Alla kopior', perHour: 'Per timme', frameTime: 'Bildtid', dataPerFrame: 'Data per bild', comparisonLabel: 'Jämförelse av lagring', lean: 'Snål', balanced: 'Balanserad', crisp: 'Skarp', qualityLean: 'Lätt och snål', qualityBalanced: 'Balanserad signal', qualityStrong: 'Starka detaljer', qualityExcellent: 'Gott om marginal', qualityAggressive: 'Kraftig komprimering', qualityGuidance: 'En visuell uppskattning för att jämföra inställningar.', capacityLight: 'Litet lagringsavtryck', capacityMedium: 'Medelstort lagringsavtryck', capacityHeavy: 'Stort lagringsavtryck', capacityNote: 'Kapacitetsstatusen baseras på det totala antalet kopior ovan.', reset: 'Återställ värden', localNote: 'Kör lokalt i webbläsaren. Ingenting laddas upp.', assumptionTitle: 'Läs antagandena', assumptionText: 'Lagringen använder decimala gigabyte och den angivna videobitraten. Ljud, containeröverhead, toppar i variabel bitrate och filsystemets utrymme läggs inte till.', warningText: 'Kvalitetsnivåerna är planeringsriktlinjer. Rörelse, korn, nyckelbilder, kodarpreset, plattformens omkodning och nätverksmarginal kan ändra det verkliga resultatet.', readyText: 'Ändra ett värde för att rita om signalen.', calculateAria: 'Uppdatera videoplanen',
  },
  faq: [
    { question: 'Laddar eller granskar planeraren min video?', answer: 'Nej. Den använder bara värdena du anger i webbläsaren. Inga filer laddas upp, ingen kamera granskas och ingen streamingtjänst kontaktas.' },
    { question: 'Hur beräknas lagringen?', answer: 'Bitrate multipliceras med tiden och delas med åtta för att omvandla bitar till byte. Resultatet använder decimala gigabyte och multipliceras med antalet kopior.' },
    { question: 'Vad betyder kvalitetsbedömningen?', answer: 'Det är en tumregel baserad på pixlar, bilder per sekund, bitrate och en bred kodekeffektivitetsfaktor. Det är inget löfte om bildkvalitet eftersom rörelse och kodarinställningar också spelar roll.' },
    { question: 'Varför ändras samma bitrate med annan upplösning eller bildfrekvens?', answer: 'En högre upplösning beskriver fler pixlar och en högre bildfrekvens skickar fler bilder per sekund. Mer visuell information måste dela samma bitrate.' },
    { question: 'Kan resultatet användas som ett plattformskrav?', answer: 'Använd det för kapacitetsplanering och jämförelser. Plattformskrav ändras, så kontrollera den aktuella kodarguiden och lämna uppladdningsmarginal för en livesändning.' },
  ],
  howTo: [
    { name: 'Välj bildformat', text: 'Välj upplösning och bildfrekvens som passar streamen eller inspelningen du planerar.' },
    { name: 'Ställ in kodningssignalen', text: 'Välj kodek och ange videobitrate i megabit per sekund. Ett preset fungerar som startpunkt.' },
    { name: 'Beskriv sessionen', text: 'Ange längden i minuter och hur många kopior du vill spara, redigera eller leverera.' },
    { name: 'Läs avvägningen', text: 'Jämför snåla, balanserade och skarpa nivåer innan du börjar spela in.' },
  ],
  seo: [
    { type: 'title', text: 'Uppskatta videolagring före streaming eller inspelning', level: 2 },
    { type: 'paragraph', html: 'En videobitrate kalkylator hjälper när en inspelningssession behöver en realistisk lagringsplan. Ange bitrate, längd och kopior och jämför tre signalnivåer för samma bildformat.' },
    { type: 'title', text: 'Det här beräknar planeraren', level: 3 },
    { type: 'list', items: ['<strong>Lagring:</strong> bitrate gånger tid, omvandlad från bitar till decimala gigabyte och multiplicerad med kopiorna.', '<strong>Bildtid:</strong> millisekunder per bild vid vald FPS och en uppskattning av data per bild.', '<strong>Kvalitetsbedömning:</strong> en jämförelse av pixlar per bild med en kodekeffektivitetsfaktor.'] },
    { type: 'title', text: 'Så påverkar upplösning och FPS avvägningen', level: 3 },
    { type: 'paragraph', html: 'Upplösningen ökar antalet pixlar i varje bild och FPS ökar antalet bilder per sekund. Om bitraten är oförändrad får varje bild mindre data och komprimeringen blir mer krävande.' },
    { type: 'tip', title: 'Lämna marginal för live', html: 'Se videobitraten som huvudlasten, inte som hela anslutningens kapacitet. Lämna plats för ljud, protokoll och nätverksvariationer och testa en scen med liknande rörelse.' },
    { type: 'title', text: 'Använd plattformens riktlinjer för slutvärdet', level: 3 },
    { type: 'paragraph', html: 'Planeraren är plattformsneutral. YouTube publicerar bitrateintervall efter upplösning och bildfrekvens. Kontrollera aktuella regler för destinationen innan du låser inställningen.' },
    { type: 'title', text: 'Varför lagringsresultatet är en uppskattning', level: 3 },
    { type: 'paragraph', html: 'En nominell bitrate beskriver inte varje byte i den färdiga filen. Variabel bitrate, ljud, containermetadata, nyckelbilder, omkodning, systemenheter och vald inspelningsprofil kan ändra slutstorleken.' },
  ],
});
