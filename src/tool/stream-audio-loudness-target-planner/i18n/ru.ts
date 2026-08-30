import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import type { StreamAudioLoudnessLocaleContent } from "../entry";
import type { StreamAudioLoudnessUI } from "../ui";
import { bibliography } from "../bibliography";

const title = "Планировщик целевой громкости потокового аудио";
const description =
  "Рассчитайте коррекцию усиления, проверьте запас True Peak и настройте цель громкости для потокового аудио.";
const faq = [
  {
    question: "Что означает коррекция усиления?",
    answer:
      "Это целевой уровень в LUFS минус измеренная интегральная громкость. Положительное значение означает увеличение, отрицательное уменьшение усиления.",
  },
  {
    question: "Зачем показывать LUFS и True Peak вместе?",
    answer:
      "LUFS показывает средний уровень программы, а True Peak максимальный расчётный пик. Вместе они показывают запас после коррекции.",
  },
  {
    question: "Являются ли цели платформ официальными правилами?",
    answer:
      "Нет. Это редактируемые значения для планирования. Всегда проверяйте актуальные требования назначения.",
  },
  {
    question: "Что означает линия минус 1 dBTP?",
    answer:
      "Это осторожный порог предупреждения. Если расчётный пик выше, потребуется ограничение или повторное измерение.",
  },
  {
    question: "Можно ли анализировать аудиофайл в браузере?",
    answer:
      "Да, поддерживаемые файлы анализируются локально. Результат является оценкой и требует проверки подходящим измерителем.",
  },
  {
    question: "Что делать при риске пика?",
    answer:
      "Прослушайте всю программу и при необходимости используйте прозрачный лимитер. Не принимайте решение по короткому фрагменту.",
  },
];
const howTo = [
  {
    name: "Загрузить файл или ввести измерения",
    text: "Перетащите поддерживаемый файл или введите интегральные LUFS и True Peak из полного анализа.",
  },
  {
    name: "Проверить динамику",
    text: "Используйте Loudness Range и предупреждение о пике как подсказки для прослушивания и повторного измерения.",
  },
  {
    name: "Выбрать цель",
    text: "Выберите Web, Broadcast, Game Audio или собственную цель и настройте значения платформ.",
  },
  {
    name: "Проверить результат",
    text: "При необходимости создайте локальный WAV с защитным лимитером и измерьте весь результат заново.",
  },
];
const faqSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};
const howToSchema: WithContext<HowTo> = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: title,
  description,
  step: howTo.map((item) => ({
    "@type": "HowToStep",
    name: item.name,
    text: item.text,
  })),
};
const appSchema: WithContext<SoftwareApplication> = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: title,
  description,
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "RUB" },
};
const ui: StreamAudioLoudnessUI = {
  fileAnalysisLabel: "Анализировать файл локально",
  fileAnalysisHint:
    "Перетащите сюда аудио или видео. Файл останется в этой вкладке браузера.",
  fileDropLabel: "Перетащите WAV, MP3 или MP4",
  fileTypesLabel: "WAV · MP3 · MP4 · WebM",
  fileIdleText: "Файл не загружен. Ручной ввод по-прежнему доступен.",
  fileReadingText: "Читаем {name}...",
  fileReadyText: "Готово: {name}",
  fileErrorText: "Браузер не смог декодировать файл. Попробуйте WAV или MP3.",
  useAnalysisLabel: "Использовать эти измерения",
  analysisSummaryLabel: "Оценка браузера",
  measuredLufsLabel: "Измеренная интегральная громкость",
  measuredLufsHint:
    "Используйте измерение всей программы, а не мгновенный пик.",
  truePeakLabel: "Измеренный True Peak",
  truePeakHint: "Используйте значение dBTP из того же анализа.",
  targetProfileLabel: "Целевой профиль",
  targetWebLabel: "Ориентир Web -14",
  targetBroadcastLabel: "Broadcast -23",
  targetGameLabel: "Игровое аудио -23",
  targetCustomLabel: "Своя цель",
  customTargetLabel: "Целевая громкость",
  contentTypeLabel: "Тип контента",
  contentVoiceLabel: "Голос",
  contentGameplayLabel: "Геймплей",
  contentMusicLabel: "Музыка",
  sceneLabel: "Измеритель выхода",
  currentLabel: "Текущее значение",
  targetLabel: "Цель",
  peakCeilingLabel: "Линия предупреждения пика",
  correctionLabel: "Коррекция усиления",
  projectedPeakLabel: "Расчётный пик",
  headroomLabel: "Запас по пику",
  stateReady: "Готово к проверке",
  stateBoost: "Нужно увеличить",
  stateTrim: "Нужно уменьшить",
  statePeakRisk: "Риск пика",
  stateReadyText: "Цель близка, а расчётный пик ниже линии предупреждения.",
  stateBoostText:
    "Цели нужно больше усиления. Проверьте расчётный пик перед применением коррекции.",
  stateTrimText:
    "Измерение громче цели. Уменьшите усиление перед следующим экспортом.",
  statePeakRiskText:
    "Коррекция пересечёт линию предупреждения. Не применяйте её без проверки.",
  guidanceLabel: "Следующая проверка",
  webGuidance:
    "Цели Web являются ориентиром, а не универсальными правилами платформ.",
  broadcastGuidance:
    "Broadcast является ориентиром громкости, а не тестом приёма потока.",
  gameGuidance:
    "Игровой звук быстро меняется. После коррекции отдельно проверьте эффекты и голос.",
  customGuidance: "Своя цель должна соответствовать спецификации назначения.",
  voiceGuidance:
    "Для голоса снова послушайте взрывные согласные, шум комнаты и работу лимитера.",
  gameplayGuidance: "Для геймплея проверьте резкие эффекты и голосовой чат.",
  musicGuidance:
    "Для музыки проверьте динамику и работу лимитера по всей программе.",
  meterAria:
    "Шкала громкости от минус 36 до 0 LUFS с текущим значением, целью и линией предупреждения минус 1 dBTP.",
  resetLabel: "Восстановить пример",
  noteLabel: "Сохраняйте честность модели.",
  noteText:
    "Анализ и экспорт выполняются в браузере, но оценки не заменяют подходящий измеритель и требуют проверки перед передачей.",
  lraLabel: "Проверка динамики",
  lraWaiting: "Загрузите файл для оценки",
  lraWide: "Широкий: проверьте тихие части",
  lraBalanced: "Умеренный: слушайте в контексте",
  lraNarrow: "Узкий: проверьте ощущение сжатия",
  limiterLabel: "Нужен пиковый лимитер",
  limiterWaiting: "Рассчитано по измерениям",
  limiterNone: "Дополнительное ограничение не нужно",
  limiterRequired: "Ограничьте {amount} dB до безопасного уровня",
  platformPreviewLabel: "Просмотр по платформам",
  platformPreviewHint:
    "Изменяйте цель планирования. Отрицательное значение предсказывает ослабление при воспроизведении, а не изменение файла.",
  platformTargetLabel: "Цель",
  platformTrim: "Ожидаемое ослабление {amount}",
  platformNoTrim: "Ослабление не ожидается",
  outputLabel: "Создать обработанную копию",
  outputHint:
    "Применяет усиление и защитный лимитер браузера, затем экспортирует WAV. Измерьте результат повторно.",
  outputSettingsLabel: "Рекомендуемая цепочка",
  obsPresetLabel: "OBS",
  dawPresetLabel: "DAW",
  outputProcessLabel: "Создать WAV локально",
  outputDownloadLabel: "Скачать обработанный WAV",
  outputProcessing: "Создаём WAV локально...",
  outputWaiting: "Загрузите файл, чтобы включить экспорт.",
  outputReady: "Локальный WAV готов к скачиванию.",
  outputError: "Браузер не смог обработать этот файл.",
  youtubeLabel: "YouTube",
  spotifyLabel: "Spotify",
  twitchLabel: "Twitch",
  tiktokLabel: "TikTok",
};
export const content: StreamAudioLoudnessLocaleContent = {
  slug: "planirovshchik-gromkosti-potokovogo-audio",
  title,
  description,
  ui,
  seo: [
    { type: "title", text: "Как читать LUFS и True Peak вместе", level: 2 },
    {
      type: "paragraph",
      html: "Интегральная громкость описывает средний уровень всей программы. True Peak показывает максимальный расчётный пик между отсчётами. Оба значения нужны, потому что тихий источник может потерять запас после усиления.",
    },
    {
      type: "paragraph",
      html: "Планировщик вычитает измеренные LUFS из цели и добавляет коррекцию к измеренному пику. Это прозрачный первый расчёт, а не сертификация обработанного файла.",
    },
    { type: "title", text: "Выбор цели без ложной точности", level: 2 },
    {
      type: "paragraph",
      html: "Просмотр платформ использует редактируемые цели. Он предсказывает ослабление более громкого источника, но не имитирует каждый кодек или проигрыватель.",
    },
    {
      type: "table",
      headers: ["Измерение", "Коррекция", "Решение"],
      rows: [
        ["-18 LUFS до -14 LUFS", "+4 dB", "Проверить пик после усиления"],
        [
          "-14.5 LUFS до -14 LUFS",
          "+0.5 dB",
          "Сделать сравнительное измерение",
        ],
        ["-10 LUFS до -14 LUFS", "-4 dB", "Уменьшить и измерить снова"],
      ],
    },
    { type: "title", text: "Что означает предупреждение о пике", level: 2 },
    {
      type: "paragraph",
      html: "Если расчётный пик пересекает линию предупреждения, коррекции, вероятно, нужен лимитер или меньшее усиление. После обработки снова измерьте всю программу.",
    },
    {
      type: "tip",
      title: "Используйте коррекцию как инструкцию для теста",
      html: "Примените изменение контролируемо, послушайте голос, эффекты и музыку в контексте, затем проверьте новое измерение.",
    },
    { type: "title", text: "Практическая проверка перед эфиром", level: 2 },
    {
      type: "list",
      items: [
        "Загрузите файл или введите надёжные измерения.",
        "Смотрите на динамику и предупреждение о пике вместе с коррекцией.",
        "Проверьте редактируемые цели каждой платформы.",
        "Экспортируйте WAV и измерьте результат от начала до конца.",
        "Оценивайте голос, музыку и эффекты, а не только одно число.",
      ],
    },
    {
      type: "paragraph",
      html: "Тип контента меняет контроль при прослушивании, но не формулу: для голоса, эффектов и музыки нужны разные проверки.",
    },
    {
      type: "tip",
      title: "Чего планировщик не подтверждает",
      html: "Оценка браузера не заменяет libebur128 или вещательный измеритель. Она не гарантирует поведение кодека и соответствие требованиям назначения.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
};
