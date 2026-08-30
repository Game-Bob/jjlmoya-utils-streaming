import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import type { StreamAudioLoudnessLocaleContent } from "../entry";
import type { StreamAudioLoudnessUI } from "../ui";
import { bibliography } from "../bibliography";

const title = "Planificador de objetivos de sonoridad para streaming";
const description =
  "Calcula una corrección de ganancia, revisa el margen de True Peak y planifica objetivos de sonoridad para audio en streaming.";
const faq = [
  {
    question: "¿Qué significa la corrección de ganancia?",
    answer:
      "Es el objetivo en LUFS menos la sonoridad integrada medida. Un valor positivo sugiere subir la ganancia y uno negativo bajarla.",
  },
  {
    question: "¿Por qué se muestran LUFS y True Peak juntos?",
    answer:
      "LUFS describe la sonoridad media del programa y True Peak la cresta máxima estimada. Juntos indican si el cambio de nivel conserva margen.",
  },
  {
    question: "¿Son oficiales los objetivos de plataforma?",
    answer:
      "No. Son referencias editables para planificar. Comprueba siempre la especificación vigente del destino.",
  },
  {
    question: "¿Qué significa la línea de menos 1 dBTP?",
    answer:
      "Es un umbral de aviso conservador. Si el pico proyectado la supera, la corrección necesita limitación o una nueva medición.",
  },
  {
    question: "¿Puede medir un archivo de audio?",
    answer:
      "Sí. El navegador puede analizar localmente archivos compatibles, pero el resultado es una estimación y debe verificarse con un medidor conforme.",
  },
  {
    question: "¿Qué hago cuando aparece riesgo de pico?",
    answer:
      "Revisa el programa completo y usa un limitador transparente si procede. No decidas solo con un fragmento corto.",
  },
];
const howTo = [
  {
    name: "Cargar un archivo o introducir lecturas",
    text: "Arrastra un archivo compatible o escribe los LUFS integrados y el True Peak obtenidos en un análisis completo.",
  },
  {
    name: "Revisar la dinámica",
    text: "Usa el rango de sonoridad y el aviso de pico como señales para escuchar y volver a medir.",
  },
  {
    name: "Elegir el objetivo",
    text: "Selecciona Web, Broadcast, Game Audio o un objetivo propio y ajusta las referencias de cada plataforma.",
  },
  {
    name: "Comprobar la salida",
    text: "Si lo necesitas, genera una WAV local con limitador de seguridad y vuelve a medirla de principio a fin.",
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
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
};
const ui: StreamAudioLoudnessUI = {
  fileAnalysisLabel: "Analizar un archivo localmente",
  fileAnalysisHint:
    "Suelta audio o vídeo aquí. El archivo permanece en esta pestaña.",
  fileDropLabel: "Suelta un archivo WAV, MP3 o MP4",
  fileTypesLabel: "WAV · MP3 · MP4 · WebM",
  fileIdleText: "No hay archivo cargado. La entrada manual sigue disponible.",
  fileReadingText: "Leyendo {name}...",
  fileReadyText: "Listo: {name}",
  fileErrorText:
    "Este navegador no pudo decodificar el archivo. Prueba con WAV o MP3.",
  useAnalysisLabel: "Usar estas lecturas",
  analysisSummaryLabel: "Estimación del navegador",
  measuredLufsLabel: "Sonoridad integrada medida",
  measuredLufsHint:
    "Usa la lectura de un programa completo, no un pico momentáneo.",
  truePeakLabel: "True Peak medido",
  truePeakHint: "Usa el valor dBTP de la misma pasada de análisis.",
  targetProfileLabel: "Perfil objetivo",
  targetWebLabel: "Referencia web -14",
  targetBroadcastLabel: "Broadcast -23",
  targetGameLabel: "Audio de juegos -23",
  targetCustomLabel: "Objetivo personalizado",
  customTargetLabel: "Sonoridad objetivo",
  contentTypeLabel: "Tipo de contenido",
  contentVoiceLabel: "Voz",
  contentGameplayLabel: "Gameplay",
  contentMusicLabel: "Música",
  sceneLabel: "Medidor de emisión",
  currentLabel: "Lectura actual",
  targetLabel: "Objetivo",
  peakCeilingLabel: "Línea de aviso de pico",
  correctionLabel: "Corrección de ganancia",
  projectedPeakLabel: "Pico proyectado",
  headroomLabel: "Margen de pico",
  stateReady: "Listo para revisar",
  stateBoost: "Necesita subir",
  stateTrim: "Necesita bajar",
  statePeakRisk: "Riesgo de pico",
  stateReadyText:
    "El objetivo está cerca y el pico proyectado queda bajo la línea de aviso.",
  stateBoostText:
    "El objetivo necesita más ganancia. Revisa el pico proyectado antes de aplicar la corrección.",
  stateTrimText:
    "La lectura es más alta que el objetivo. Baja la ganancia antes de exportar.",
  statePeakRiskText:
    "La corrección cruzaría la línea de aviso. No la apliques sin comprobar el resultado.",
  guidanceLabel: "Siguiente comprobación",
  webGuidance:
    "Los objetivos web son referencias de planificación, no reglas universales.",
  broadcastGuidance:
    "Broadcast es una referencia de sonoridad, no una prueba de aceptación del stream.",
  gameGuidance:
    "El audio de juegos cambia rápido. Revisa efectos y voz por separado después del ajuste.",
  customGuidance:
    "Los objetivos propios deben venir de la especificación del destino.",
  voiceGuidance:
    "En voz, vuelve a escuchar plosivas, ruido de sala y respiración del limitador.",
  gameplayGuidance: "En gameplay, revisa efectos repentinos y chat de voz.",
  musicGuidance:
    "En música, revisa dinámica y movimiento del limitador en todo el programa.",
  meterAria:
    "Escala de sonoridad de menos 36 a 0 LUFS con lectura actual, objetivo y línea de aviso de menos 1 dBTP.",
  resetLabel: "Restaurar valores de ejemplo",
  noteLabel: "Mantén el modelo honesto.",
  noteText:
    "El análisis y la exportación permanecen en el navegador, pero las estimaciones no sustituyen un medidor conforme y deben verificarse antes de entregar.",
  lraLabel: "Revisión de rango dinámico",
  lraWaiting: "Carga un archivo para estimarlo",
  lraWide: "Amplio: revisa partes bajas",
  lraBalanced: "Moderado: escucha en contexto",
  lraNarrow: "Estrecho: revisa la compresión",
  limiterLabel: "Limitador de pico necesario",
  limiterWaiting: "Calculado con las lecturas",
  limiterNone: "No hace falta recorte extra",
  limiterRequired: "Limita {amount} dB para llegar al techo",
  platformPreviewLabel: "Vista por plataforma",
  platformPreviewHint:
    "Edita el objetivo de planificación. Un resultado negativo predice atenuación en reproducción, no reescribe el archivo.",
  platformTargetLabel: "Objetivo",
  platformTrim: "Atenuación prevista {amount}",
  platformNoTrim: "Sin atenuación prevista",
  outputLabel: "Crear una copia procesada",
  outputHint:
    "Aplica ganancia y un limitador de seguridad del navegador y exporta una WAV. Vuelve a medirla.",
  outputSettingsLabel: "Cadena sugerida",
  obsPresetLabel: "OBS",
  dawPresetLabel: "DAW",
  outputProcessLabel: "Renderizar WAV local",
  outputDownloadLabel: "Descargar WAV procesada",
  outputProcessing: "Renderizando la WAV localmente...",
  outputWaiting: "Carga un archivo para activar la exportación.",
  outputReady: "La WAV local está lista para descargar.",
  outputError: "El navegador no pudo renderizar este archivo.",
  youtubeLabel: "YouTube",
  spotifyLabel: "Spotify",
  twitchLabel: "Twitch",
  tiktokLabel: "TikTok",
};
export const content: StreamAudioLoudnessLocaleContent = {
  slug: "planificador-objetivo-sonoridad-audio-streaming",
  title,
  description,
  ui,
  seo: [
    { type: "title", text: "Cómo leer LUFS y True Peak juntos", level: 2 },
    {
      type: "paragraph",
      html: "La sonoridad integrada describe el nivel medio de un programa completo. True Peak muestra el pico máximo estimado entre muestras. Se necesitan ambos porque una mezcla silenciosa puede quedarse sin margen después de subirla.",
    },
    {
      type: "paragraph",
      html: "El planificador resta los LUFS medidos del objetivo y suma esa corrección al pico medido. Es un primer paso transparente, no una certificación del archivo procesado.",
    },
    { type: "title", text: "Elegir objetivos sin falsa precisión", level: 2 },
    {
      type: "paragraph",
      html: "La vista por plataforma usa referencias editables. Muestra la atenuación prevista de una fuente más alta y no intenta emular todos los códecs ni reproductores.",
    },
    {
      type: "table",
      headers: ["Lectura", "Corrección", "Decisión"],
      rows: [
        ["-18 LUFS a -14 LUFS", "+4 dB", "Revisar el pico tras subir"],
        [
          "-14.5 LUFS a -14 LUFS",
          "+0.5 dB",
          "Hacer una medición de comparación",
        ],
        ["-10 LUFS a -14 LUFS", "-4 dB", "Bajar y medir de nuevo"],
      ],
    },
    { type: "title", text: "Qué dice realmente el aviso de pico", level: 2 },
    {
      type: "paragraph",
      html: "Si el pico proyectado supera la línea de aviso, la corrección necesita probablemente un limitador o menos ganancia. Después de procesar, mide siempre el programa completo otra vez.",
    },
    {
      type: "tip",
      title: "Trata la corrección como una instrucción de prueba",
      html: "Aplica primero el ajuste de forma controlada. Después escucha voz, efectos y música en contexto y verifica la nueva medición.",
    },
    { type: "title", text: "Comprobación práctica antes de emitir", level: 2 },
    {
      type: "list",
      items: [
        "Carga el archivo o introduce lecturas fiables.",
        "Mira el rango dinámico y el aviso de pico junto a la corrección.",
        "Revisa los objetivos editables de cada plataforma.",
        "Exporta una WAV y mide el resultado de principio a fin.",
        "Evalúa voz, música y efectos, no solo una cifra.",
      ],
    },
    {
      type: "paragraph",
      html: "El tipo de contenido cambia la escucha posterior, no la fórmula: voz, efectos y música necesitan comprobaciones diferentes.",
    },
    {
      type: "tip",
      title: "Lo que no puede certificar",
      html: "La estimación del navegador no sustituye a libebur128 ni a un medidor de broadcast. No garantiza el comportamiento del códec ni el cumplimiento del destino.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
};
