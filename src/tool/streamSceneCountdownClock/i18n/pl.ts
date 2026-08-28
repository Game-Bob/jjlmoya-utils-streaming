import { makeContent } from './locale-factory';

export const content = makeContent({
  language: 'pl',
  slug: 'odliczanie-sceny-streama-obs',
  title: 'Odliczanie sceny streama',
  description: 'Stwórz ekran odliczania dla streamera przed rozpoczęciem, podczas BRB, raidu i przerwy.',
  ui: {
    sceneLabel: 'Jaką scenę przygotowujesz?', sceneBrb: 'BRB', sceneStarting: 'Zaraz zaczynamy', sceneRaid: 'Raid', sceneIntermission: 'Przerwa', sceneTitleLabel: 'Co ma pojawić się nad licznikiem?', sceneTitlePlaceholder: 'Zaraz zaczynamy', designLabel: 'Jaki klimat ma mieć scena?', designAurora: 'Mgła zorzy', designType: 'Kinetic type', designPulse: 'Pulsująca poświata', designGlitch: 'Sygnał glitch', designSunset: 'Słoneczny rozbłysk', accentColorLabel: 'Kolor akcentu', glowColorLabel: 'Kolor poświaty', messageLabel: 'Co widzowie powinni wiedzieć?', messagePlaceholder: 'Wracam za 5 minut', durationLabel: 'Ile czasu potrzebujesz?', duration60: '1 min', duration300: '5 min', duration600: '10 min', durationCustom: 'Własny czas', secondsLabel: 'sekund', startLabel: 'Kiedy ma zacząć się ten komunikat?', startNow: 'Zacznij teraz', scheduleTime: 'Zaplanuj godzinę', timeLabel: 'O której lokalnej godzinie ma się zacząć?', startAction: 'Włącz mój komunikat', focusAction: 'Pokaż moją scenę', exitFocusAction: 'Wyjdź z widoku sceny', resetAction: 'Zresetuj komunikat', flowText: 'To Ty jesteś streamerem: wybierz sytuację, ustaw potrzebny czas i włącz komunikat.', obsTitle: 'Dodaj tę scenę do OBS', obsText: 'Skopiuj link, dodaj Browser Source w OBS, wklej go i ustaw rozmiar płótna. STREAMING automatycznie otwiera czystą scenę na pełnym ekranie.', obsStepCopy: 'Skopiuj ten link', obsStepAdd: 'Dodaj Browser Source w OBS', obsStepPaste: 'Wklej link i dopasuj rozmiar płótna', copyUrlAction: 'Kopiuj link OBS', copiedUrlText: 'Link OBS skopiowany', streamUrlAria: 'Wygenerowany adres streamingu OBS', previewTitle: 'Wybierz wygląd sceny', previewHint: 'Kliknij podgląd, aby go użyć', previewAria: 'Podglądy wyglądu sceny', stageEyebrow: 'Ekran transmisji', stageCaption: 'Następna scena jest gotowa', readyBadge: 'Gotowe', waitingBadge: 'Oczekiwanie', liveBadge: 'Komunikat na żywo', endedBadge: 'Zakończone', readyText: 'Sprawdź ekran i uruchom komunikat, gdy scena będzie gotowa.', waitingText: 'Odliczanie na żywo zacznie się o zaplanowanej lokalnej godzinie.', liveText: 'Pozostaw tę scenę widoczną, aż zmiana będzie gotowa.', endedText: 'Komunikat się zakończył. Zresetuj go albo przygotuj nową scenę.', remainingLabel: 'Czas na scenie', startTimeLabel: 'Start', endTimeLabel: 'Koniec', progressLabel: 'Postęp sceny', assumptionTitle: 'Uwaga o czasie', assumptionText: 'Zaplanowane godziny korzystają z zegara urządzenia. Licznik jest wizualnym komunikatem i nie synchronizuje OBS, Twitcha, czatu ani enkodera.', warningTitle: 'Użyj jako komunikatu sceny', warningText: 'Uśpiona karta, zmiana zegara systemowego lub opóźnienie transmisji mogą sprawić, że widoczny czas będzie różnił się od streama. Sprawdź scenę na żywo przed zmianą.', invalidTime: 'Wpisz lokalną godzinę w formacie HH:MM.', clockAria: 'Pozostały czas odliczania', statusAria: 'Stan odliczania',
  },
  faq: [
    { question: 'Czy ten licznik łączy się z OBS albo Twitchem?', answer: 'Nie. To niezależny timer, który nie steruje OBS, Twitchem, czatem ani serwerem streamingu. Użyj Pokaż moją scenę, aby wypełnić ekran, i przechwyć widok jako Browser Source.' },
    { question: 'Jak użyć licznika bezpośrednio w OBS?', answer: 'Dodaj adres narzędzia jako Browser Source w OBS wraz z parametrem streamingu i ustawieniami, na przykład ?STREAMING&scene=starting&duration=300&design=aurora&title=Zaraz%20zaczynamy. Kontrolki znikną, a licznik wypełni obszar źródła.' },
    { question: 'Co się stanie po zaplanowaniu godziny startu?', answer: 'Zegar poczeka do wybranej lokalnej godziny, a potem odliczy czas sceny. Godzina, która już minęła, zostanie potraktowana jako następne wystąpienie kolejnego dnia.' },
    { question: 'Czy mogę użyć własnego komunikatu?', answer: 'Tak. Jako streamer wpisz krótką informację dla widzów, na przykład godzinę powrotu, kolejny krok albo wiadomość o raidzie.' },
    { question: 'Co zmieniają presety sceny?', answer: 'Nazywają moment transmisji, dzięki czemu scena jest czytelna na pierwszy rzut oka. Obliczenia, czas i połączenie z platformą się nie zmieniają.' },
    { question: 'Czy godzina zakończenia jest dokładna?', answer: 'Jest obliczana na podstawie lokalnego zegara przeglądarki i podanego czasu. Uśpienie przeglądarki, wstrzymana karta lub zmiana zegara mogą wpłynąć na widoczne odświeżanie. To wskazówka planowania, a nie gwarancja synchronizacji.' },
  ],
  howTo: [
    { name: 'Wybierz moment sceny', text: 'Wybierz Zaraz zaczynamy, BRB, Raid albo Przerwa, aby nazwać moment widoczny dla widzów.' },
    { name: 'Napisz komunikat streamera', text: 'Wpisz krótką wiadomość, którą widzowie przeczytają podczas przygotowywania następnej sceny.' },
    { name: 'Ustaw czas lub godzinę', text: 'Wybierz popularny czas albo wpisz własny. Uruchom od razu lub zaplanuj lokalną godzinę.' },
    { name: 'Odczytaj stan', text: 'Korzystaj z dużego zegara i etykiety stanu, aby zdecydować, kiedy zmienić scenę transmisji.' },
  ],
  seo: [
    { type: 'title', text: 'Przygotuj czytelny komunikat sceny streama', level: 2 },
    { type: 'paragraph', html: 'Odliczanie wyznacza jasny moment powrotu dla sceny Zaraz zaczynamy, BRB, raid lub przerwa. Napisz, co robisz, ustaw potrzebny czas i zostaw duży licznik na ekranie podczas przygotowań.' },
    { type: 'title', text: 'Co oblicza zegar sceny', level: 3 },
    { type: 'list', items: ['<strong>Komunikat natychmiastowy:</strong> startuje po włączeniu i odlicza wybrany czas.', '<strong>Komunikat zaplanowany:</strong> czeka na lokalną godzinę, a potem uruchamia czas sceny.', '<strong>Stan sceny:</strong> rozróżnia gotowe, oczekiwanie, na żywo i zakończone, aby pokazać następne działanie.'] },
    { type: 'title', text: 'Jak wybrać użyteczny czas sceny', level: 3 },
    { type: 'paragraph', html: 'Wybierz krótki czas przy zmianie źródeł lub szybkiej przerwie. Ustaw dłuższy, gdy przygotowujesz gościa, grę albo restart techniczny. Wiadomość powinna dodać informację, której sam licznik nie przekazuje.' },
    { type: 'tip', title: 'Opisz powrót konkretnie', html: 'Zamiast ogólnej obietnicy napisz: "Wracam o 20:30 na finał" albo "Przygotowuję raid". Widzowie poznają czas oczekiwania i jego powód.' },
    { type: 'title', text: 'Dlaczego zegar działa offline', level: 3 },
    { type: 'paragraph', html: 'Zegar nie potrzebuje dostępu do kanału ani oprogramowania transmisji. Tekst i czas pozostają w przeglądarce, więc scena nadaje się do przygotowań. Przed transmisją sprawdź jednak źródło i przejście scen w OBS.' },
    { type: 'title', text: 'Przenieś gotową scenę do OBS', level: 3 },
    { type: 'paragraph', html: 'Kliknij <strong>Kopiuj link OBS</strong>, dodaj Browser Source do sceny streama, wklej link i dopasuj rozdzielczość płótna. Parametr <code>?STREAMING</code> otwiera czystą scenę bez kontrolek i uruchamia ją automatycznie.' },
    { type: 'title', text: 'Dopasuj wygląd do swojego kanału', level: 3 },
    { type: 'paragraph', html: 'Do wyboru jest pięć różnych kompozycji: Mgła zorzy z atmosferycznym pierścieniem, Kinetic type z dużymi cyframi, Pulsująca poświata z rozszerzającymi się falami, Sygnał glitch z ostrą energią transmisji oraz Słoneczny rozbłysk z ciepłym horyzontem. Wybierz podgląd i ustaw kolory.' },
    { type: 'list', items: ['<strong>Scena:</strong> oznacza Zaraz zaczynamy, BRB, raid albo przerwę.', '<strong>Tytuł:</strong> zastępuje domyślny tekst własnym nagłówkiem.', '<strong>Wiadomość:</strong> dodaje informację dla widzów.', '<strong>Czas i godzina:</strong> określają start oraz długość sceny.'] },
    { type: 'paragraph', html: 'Jeśli tworzysz adres ręcznie, użyj <code>?STREAMING&amp;scene=raid&amp;title=Raid%20w%20przygotowaniu&amp;design=pulse</code>. Generator automatycznie doda czas, wiadomość i wybrane kolory.' },
    { type: 'title', text: 'Traktuj godzinę końca jako wskazówkę', level: 3 },
    { type: 'paragraph', html: 'Godzina końca wynika z zegara urządzenia i wybranego czasu. Nie gwarantuje, że transmisja dotrze do wszystkich w tej samej chwili. Zostaw zapas, jeśli zmiana zależy od gościa, połączenia lub przejścia transmisji.' },
  ],
});
