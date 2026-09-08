import type { SEOSection } from '../../../types';
import { makeContent } from './content';

const faq = [
  { question: 'Jak kalkulator umieszcza przerwę reklamową?', answer: 'Porównuje minuty treści z wybranym odstępem i umieszcza przerwę przy pierwszej dostępnej granicy po tym momencie. Blok nigdy nie jest dzielony.' },
  { question: 'Jaki format mają bloki treści?', answer: 'Wpisz jeden blok w wierszu jako Nazwa | minuty, na przykład Otwarcie | 15. Kolejność tworzy plan emisji.' },
  { question: 'Dlaczego przerwa może wypaść później niż odstęp?', answer: 'Kalkulator respektuje granice bloków. Jeśli długi blok przekroczy odstęp, przerwa zostanie przesunięta do następnej granicy i oznaczona.' },
  { question: 'Czy kalkulator stosuje regułę reklamową platformy?', answer: 'Nie. To model planowania oparty na Twoim odstępie, długości przerwy i układzie programu. Sprawdź aktualne zasady platformy, umowy i regionu.' },
  { question: 'Czy godzina końca uwzględnia przerwy?', answer: 'Tak. Czas treści i reklam jest pokazany osobno, ale godzina końca zawiera wszystkie zaplanowane przerwy.' },
];
const howTo = [
  { name: 'Ustaw początek i zasady przerw', text: 'Wybierz godzinę rozpoczęcia, planowane minuty treści, odstęp między przerwami i długość każdej przerwy.' },
  { name: 'Wpisz plan emisji', text: 'Zapisz każdy blok jako Nazwa | minuty. Ustaw granice tam, gdzie prowadzący może naturalnie przerwać.' },
  { name: 'Odczytaj oś czasu', text: 'Sprawdź miejsca przerw, dodany czas i przesunięcie celu przez długi blok.' },
  { name: 'Skopiuj plan produkcji', text: 'Przejrzyj ostrzeżenia i skopiuj listę godzin dla produkcji, moderatora lub notatek sceny.' },
];
const seo: SEOSection[] = [
  { type: 'title', text: 'Planuj przerwy wokół programu', level: 2 },
  { type: 'paragraph', html: 'Transmisja na żywo ma dwa zegary: minuty przeznaczone na treść i rzeczywistą godzinę z przerwami. Kalkulator pokazuje oba i wylicza koniec na podstawie planu, odstępu oraz długości przerwy.' },
  { type: 'paragraph', html: 'Gdy zegar treści osiągnie odstęp, przerwa trafia na najbliższą odpowiednią granicę bloku. Przed transmisją możesz przesunąć lub skrócić blok albo świadomie zaakceptować opóźnienie.' },
  { type: 'title', text: 'Wykorzystaj granice bloków jako sygnały produkcji', level: 2 },
  { type: 'paragraph', html: 'Dobre momenty to powitanie, zmiana tematu, mecz albo zaplanowana przerwa. Jeden długi blok nie daje bezpiecznego miejsca; ostrzeżenie pokazuje ten wybór redakcyjny.' },
  { type: 'list', items: ['Podziel długi wywiad na powitanie, rozmowę i pytania.', 'Zostaw zakończenie jako ostatni blok.', 'Porównaj minuty treści z końcem uwzględniającym reklamy.', 'Przekaż plan osobie uruchamiającej przerwy.'] },
  { type: 'title', text: 'Odczytaj trzy sygnały czasu', level: 2 },
  { type: 'table', headers: ['Sygnał', 'Znaczenie', 'Działanie'], rows: [['Treść', 'Minuty z planu emisji', 'Sprawdź, czy program mieści się w obiecanym czasie'], ['Czas reklam', 'Minuty dodane przez przerwy', 'Poinformuj prowadzącego i produkcję'], ['Koniec emisji', 'Początek plus treść i przerwy', 'Zarezerwuj studio lub czas przekazania']] },
  { type: 'tip', title: 'To nie jest gwarancja platformy', html: 'Wynik jest lokalnym planem emisji. Nie uruchamia reklam i nie potwierdza widoku odbiorcy, umowy ani prawa reklamowego. Sprawdź aktualne warunki miejsca publikacji.' },
  { type: 'title', text: 'Przygotuj plan do reżyserki', level: 2 },
  { type: 'paragraph', html: 'Skopiuj plan po sprawdzeniu ostrzeżeń. Godziny pomagają przygotować sceny, powiadomić moderatorów i ochronić ważny fragment. Jeśli nie ma przerwy, dodaj sensowną granicę redakcyjną.' },
  { type: 'tip', title: 'Sprawdź rzeczywisty zegar po próbie', html: 'Rozmowy i przejścia techniczne często się wydłużają. Potraktuj wynik jako podstawę i popraw minuty po próbie.' },
];
export const content = makeContent({
  slug: 'kalkulator-przerw-reklamowych-transmisji',
  title: 'Kalkulator przerw reklamowych transmisji na żywo',
  description: 'Zamień plan transmisji na harmonogram przerw reklamowych i oblicz rzeczywistą godzinę zakończenia.',
  ui: {
    startTimeLabel: 'Godzina rozpoczęcia transmisji', startTimeHint: 'Kiedy zaczyna się transmisja', streamDurationLabel: 'Planowane minuty treści', streamDurationHint: 'Czas programu bez przerw', cadenceLabel: 'Odstęp między przerwami', cadenceHint: 'Umieść przerwę po tej liczbie minut treści', breakLengthLabel: 'Długość przerwy', breakLengthHint: 'Minuty dodane do zegara transmisji', segmentsLabel: 'Plan emisji', segmentsHint: 'Jeden blok w wierszu: Nazwa | minuty', presetsLabel: 'Zacznij od układu programu', presetQuick: 'Transmisja dwugodzinna', presetLong: 'Długie wydarzenie', presetInterview: 'Transmisja z wywiadem', scheduleLabel: 'Oś czasu emisji', scheduleHint: 'Przerwy trafiają na pierwszą dostępną granicę po odstępie.', contentTotalLabel: 'Treść', adsTotalLabel: 'Czas reklam', plannedEndLabel: 'Koniec emisji', breaksLabel: 'Przerwy', stateReady: 'Granice są użyteczne', stateWarning: 'Sprawdź napięcie czasu', stateEmpty: 'Dodaj plan emisji', stateReadyText: 'Ten harmonogram może być pierwszym planem dla produkcji.', stateWarningText: 'Wiersz jest nieprawidłowy albo odstęp nie trafia w naturalną granicę.', stateEmptyText: 'Dodaj co najmniej dwa bloki, aby umieścić między nimi przerwę.', copyLabel: 'Kopiuj plan emisji', resetLabel: 'Przywróć przykład', copiedLabel: 'Plan skopiowany', copyErrorLabel: 'Kopiowanie zablokowane. Zaznacz harmonogram i skopiuj go ręcznie.', segmentKind: 'Treść', breakKind: 'Przerwa reklamowa', minutesShort: 'min', noEntriesText: 'Tutaj pojawi się Twoja oś czasu.', invalidLineText: 'Sprawdź wiersz {lines}. Użyj Nazwa | minuty.', plannedMismatchText: 'Plan różni się od zaplanowanego czasu o {difference}.', boundaryWarningText: 'Nie dodano przerwy, ponieważ odstęp wypada wewnątrz jednego bloku. Dodaj granicę albo podziel blok.'
  }, seo, faq, howTo,
});
