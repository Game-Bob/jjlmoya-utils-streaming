import { createLocalizedContent } from '../locale-content';

export const content = createLocalizedContent({
  language: 'pl',
  slug: 'kalkulator-bitrate-magazynowania-wideo',
  title: 'Planer Bitrate i Pamięci dla Wideo',
  description: 'Oszacuj miejsce na wideo, czas klatki i praktyczne poziomy bitrate dla transmisji lub nagrań.',
  ui: {
    presetLabel: 'Zacznij od sceny', presetFast: 'Szybki stream webowy', presetUpload: 'Codzienny live', presetArchive: 'Archiwum 4K', resolutionLabel: 'Rozdzielczość', frameRateLabel: 'Klatki na sekundę', codecLabel: 'Kodek', bitrateLabel: 'Bitrate wideo', durationLabel: 'Długość sesji', copiesLabel: 'Zachowane kopie', minutesLabel: 'min', copiesShort: 'kopie', h264: 'H.264', h265: 'H.265', av1: 'AV1', codecNote: 'Wydajność kodeka zmienia ocenę jakości, ale nie zmienia obliczenia pamięci.', sceneLabel: 'Od sygnału do pamięci', signalSource: 'Obraz', codecGate: 'Kodowanie', storageReel: 'Pamięć', qualityEstimate: 'Ocena jakości', storageEstimate: 'Szacowana pamięć', perCopy: 'Jedna kopia', allCopies: 'Wszystkie kopie', perHour: 'Na godzinę', frameTime: 'Czas klatki', dataPerFrame: 'Dane na klatkę', comparisonLabel: 'Porównanie pamięci', lean: 'Oszczędny', balanced: 'Zrównoważony', crisp: 'Ostry', qualityLean: 'Lekki i oszczędny', qualityBalanced: 'Zrównoważony sygnał', qualityStrong: 'Mocny detal', qualityExcellent: 'Duży zapas', qualityAggressive: 'Mocna kompresja', qualityGuidance: 'Wizualne przybliżenie do porównywania ustawień.', capacityLight: 'Małe zużycie pamięci', capacityMedium: 'Średnie zużycie pamięci', capacityHeavy: 'Duże zużycie pamięci', capacityNote: 'Status pojemności opiera się na łącznej liczbie kopii powyżej.', reset: 'Przywróć wartości', localNote: 'Działa lokalnie w tej przeglądarce. Nic nie jest wysyłane.', assumptionTitle: 'Przeczytaj założenia', assumptionText: 'Pamięć używa dziesiętnych gigabajtów i podanego bitrate wideo. Dźwięk, narzut kontenera, piki zmiennego bitrate i miejsce systemu plików nie są dodawane.', warningText: 'Poziomy jakości są wskazówkami do planowania. Ruch, ziarno, klatki kluczowe, preset kodera, transkodowanie platformy i zapas sieci mogą zmienić wynik.', readyText: 'Zmień wartość, aby narysować sygnał ponownie.', calculateAria: 'Aktualizuj plan wideo',
  },
  faq: [
    { question: 'Czy planer wysyła lub analizuje mój film?', answer: 'Nie. Korzysta tylko z wartości wpisanych w przeglądarce. Nie wysyła plików, nie sprawdza kamery i nie pyta żadnej usługi streamingowej.' },
    { question: 'Jak obliczana jest pamięć?', answer: 'Bitrate mnoży się przez czas i dzieli przez osiem, aby zamienić bity na bajty. Wynik używa dziesiętnych gigabajtów i jest mnożony przez liczbę kopii.' },
    { question: 'Co oznacza ocena jakości?', answer: 'To praktyczna reguła oparta na pikselach, klatkach na sekundę, bitrate i ogólnym współczynniku wydajności kodeka. Nie jest gwarancją jakości obrazu, bo liczą się też ruch i ustawienia kodera.' },
    { question: 'Dlaczego ten sam bitrate zmienia się przy innej rozdzielczości lub liczbie klatek?', answer: 'Większa rozdzielczość ma więcej pikseli, a wyższa liczba klatek wysyła więcej obrazów na sekundę. Więcej informacji wizualnych musi dzielić ten sam bitrate.' },
    { question: 'Czy mogę użyć wyniku jako wymogu platformy?', answer: 'Użyj go do planowania pojemności i porównywania scenariuszy. Wymagania platform się zmieniają, więc sprawdź aktualne zalecenia kodera i zostaw zapas wysyłania dla transmisji na żywo.' },
  ],
  howTo: [
    { name: 'Wybierz format obrazu', text: 'Wybierz rozdzielczość i liczbę klatek pasujące do planowanej transmisji lub nagrania.' },
    { name: 'Ustaw sygnał kodowania', text: 'Wybierz kodek i wpisz bitrate wideo w megabitach na sekundę. Preset może być dobrym początkiem.' },
    { name: 'Opisz sesję', text: 'Wpisz czas w minutach oraz liczbę kopii, które chcesz zachować, montować lub dostarczyć.' },
    { name: 'Odczytaj kompromis', text: 'Porównaj poziomy oszczędny, zrównoważony i ostry, aby zobaczyć zmianę pamięci przed nagraniem.' },
  ],
  seo: [
    { type: 'title', text: 'Oszacuj pamięć wideo przed transmisją lub nagraniem', level: 2 },
    { type: 'paragraph', html: 'Kalkulator bitrate wideo pomaga przygotować realistyczny plan pamięci dla sesji nagraniowej. Wpisz bitrate, czas i liczbę kopii, a następnie porównaj trzy poziomy sygnału dla tego samego formatu.' },
    { type: 'title', text: 'Co oblicza planer', level: 3 },
    { type: 'list', items: ['<strong>Pamięć:</strong> bitrate pomnożony przez czas, przeliczony z bitów na dziesiętne gigabajty i pomnożony przez kopie.', '<strong>Czas klatki:</strong> milisekundy dostępne na klatkę przy wybranym FPS oraz szacunkowe dane na klatkę.', '<strong>Ocena jakości:</strong> porównanie pikseli na klatkę z uwzględnieniem współczynnika wydajności kodeka.'] },
    { type: 'title', text: 'Jak rozdzielczość i FPS zmieniają kompromis', level: 3 },
    { type: 'paragraph', html: 'Rozdzielczość zwiększa liczbę pikseli w klatce, a FPS zwiększa liczbę klatek na sekundę. Gdy bitrate pozostaje stały, każda klatka dostaje mniej danych i kompresja staje się trudniejsza.' },
    { type: 'tip', title: 'Zostaw zapas dla transmisji na żywo', html: 'Traktuj bitrate wideo jako główne obciążenie, a nie całą przepustowość łącza. Zostaw miejsce na dźwięk, protokół i zmienność sieci oraz przetestuj scenę z podobnym ruchem.' },
    { type: 'title', text: 'Sprawdź zalecenia platformy przed wyborem końcowym', level: 3 },
    { type: 'paragraph', html: 'Ten planer jest niezależny od platformy. YouTube publikuje zakresy bitrate według rozdzielczości i liczby klatek. Użyj aktualnych reguł miejsca docelowego, aby sprawdzić swój scenariusz.' },
    { type: 'title', text: 'Dlaczego wynik pamięci jest przybliżeniem', level: 3 },
    { type: 'paragraph', html: 'Nominalny bitrate nie opisuje każdego bajtu gotowego pliku. Zmienny bitrate, dźwięk, metadane kontenera, klatki kluczowe, transkodowanie i jednostki systemowe mogą zmienić końcowy rozmiar.' },
  ],
});
