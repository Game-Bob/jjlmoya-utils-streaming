import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import type { StreamAudioLoudnessLocaleContent } from "../entry";
import type { StreamAudioLoudnessUI } from "../ui";
import { bibliography } from "../bibliography";

const title = "Planejador de alvos de loudness para áudio em streaming";
const description =
  "Calcule a correção de ganho, verifique a margem de True Peak e planeje o alvo de loudness para áudio em streaming.";
const faq = [
  {
    question: "O que significa a correção de ganho?",
    answer:
      "É o alvo em LUFS menos o loudness integrado medido. Um valor positivo sugere aumentar o ganho e um valor negativo sugere reduzi-lo.",
  },
  {
    question: "Por que LUFS e True Peak aparecem juntos?",
    answer:
      "LUFS descreve o nível médio do programa e True Peak o pico máximo estimado. Juntos mostram se a correção preserva margem suficiente.",
  },
  {
    question: "Os alvos das plataformas são regras oficiais?",
    answer:
      "Não. São referências editáveis para planejamento. Verifique sempre a especificação atual do destino.",
  },
  {
    question: "O que significa a linha de menos 1 dBTP?",
    answer:
      "É um limite de alerta conservador. Se o pico projetado ultrapassá-lo, será preciso limitar ou medir novamente.",
  },
  {
    question: "Posso analisar um arquivo no navegador?",
    answer:
      "Sim. Arquivos compatíveis são analisados localmente, mas o resultado é uma estimativa que deve ser confirmada com um medidor adequado.",
  },
  {
    question: "O que fazer quando aparece risco de pico?",
    answer:
      "Escute o programa completo novamente e use um limiter transparente se necessário. Não decida com base em um trecho curto.",
  },
];
const howTo = [
  {
    name: "Carregar um arquivo ou inserir medições",
    text: "Arraste um arquivo compatível ou informe os LUFS integrados e o True Peak de uma análise completa.",
  },
  {
    name: "Verificar a dinâmica",
    text: "Use o Loudness Range e o alerta de pico como sinais para escutar e medir novamente.",
  },
  {
    name: "Escolher o alvo",
    text: "Selecione Web, Broadcast, Game Audio ou um alvo personalizado e ajuste os valores das plataformas.",
  },
  {
    name: "Conferir a saída",
    text: "Se necessário, crie uma WAV local com limiter de segurança e meça o resultado inteiro novamente.",
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
  offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
};
const ui: StreamAudioLoudnessUI = {
  fileAnalysisLabel: "Analisar um arquivo localmente",
  fileAnalysisHint:
    "Solte áudio ou vídeo aqui. O arquivo fica nesta aba do navegador.",
  fileDropLabel: "Solte um arquivo WAV, MP3 ou MP4",
  fileTypesLabel: "WAV · MP3 · MP4 · WebM",
  fileIdleText:
    "Nenhum arquivo carregado. A entrada manual continua disponível.",
  fileReadingText: "Lendo {name}...",
  fileReadyText: "Pronto: {name}",
  fileErrorText:
    "Este navegador não conseguiu decodificar o arquivo. Tente WAV ou MP3.",
  useAnalysisLabel: "Usar estas medições",
  analysisSummaryLabel: "Estimativa do navegador",
  measuredLufsLabel: "Loudness integrado medido",
  measuredLufsHint:
    "Use a leitura de um programa completo, não um pico momentâneo.",
  truePeakLabel: "True Peak medido",
  truePeakHint: "Use o valor dBTP da mesma análise.",
  targetProfileLabel: "Perfil de destino",
  targetWebLabel: "Referência Web -14",
  targetBroadcastLabel: "Broadcast -23",
  targetGameLabel: "Áudio de jogo -23",
  targetCustomLabel: "Alvo personalizado",
  customTargetLabel: "Loudness alvo",
  contentTypeLabel: "Tipo de conteúdo",
  contentVoiceLabel: "Voz",
  contentGameplayLabel: "Gameplay",
  contentMusicLabel: "Música",
  sceneLabel: "Medidor de emissão",
  currentLabel: "Leitura atual",
  targetLabel: "Alvo",
  peakCeilingLabel: "Linha de alerta de pico",
  correctionLabel: "Correção de ganho",
  projectedPeakLabel: "Pico projetado",
  headroomLabel: "Margem de pico",
  stateReady: "Pronto para conferir",
  stateBoost: "Precisa aumentar",
  stateTrim: "Precisa reduzir",
  statePeakRisk: "Risco de pico",
  stateReadyText:
    "O alvo está próximo e o pico projetado fica abaixo da linha de alerta.",
  stateBoostText:
    "O alvo precisa de mais ganho. Confira o pico projetado antes de aplicar a correção.",
  stateTrimText:
    "A leitura está acima do alvo. Reduza o ganho antes da próxima exportação.",
  statePeakRiskText:
    "A correção cruzaria a linha de alerta. Não a aplique sem conferir o resultado.",
  guidanceLabel: "Próxima conferência",
  webGuidance:
    "Alvos Web são referências de planejamento, não regras universais de plataforma.",
  broadcastGuidance:
    "Broadcast é uma referência de loudness, não um teste de aceitação do stream.",
  gameGuidance:
    "O áudio de jogos muda rapidamente. Confira efeitos e voz separadamente após o ajuste.",
  customGuidance: "Alvos personalizados devem vir da especificação do destino.",
  voiceGuidance:
    "Para voz, escute novamente plosivas, ruído da sala e respiração do limiter.",
  gameplayGuidance: "Para gameplay, confira efeitos repentinos e chat de voz.",
  musicGuidance:
    "Para música, confira dinâmica e movimento do limiter em todo o programa.",
  meterAria:
    "Escala de loudness de menos 36 a 0 LUFS mostrando leitura atual, alvo e linha de alerta de menos 1 dBTP.",
  resetLabel: "Restaurar valores de exemplo",
  noteLabel: "Mantenha o modelo honesto.",
  noteText:
    "A análise e a exportação ficam no navegador, mas as estimativas não substituem um medidor compatível e devem ser verificadas antes da entrega.",
  lraLabel: "Verificação de dinâmica",
  lraWaiting: "Carregue um arquivo para estimar",
  lraWide: "Ampla: confira partes baixas",
  lraBalanced: "Moderada: escute no contexto",
  lraNarrow: "Estreita: confira a compressão",
  limiterLabel: "Limiter de pico necessário",
  limiterWaiting: "Calculado com as medições",
  limiterNone: "Nenhum corte extra",
  limiterRequired: "Limite {amount} dB para chegar ao teto",
  platformPreviewLabel: "Prévia por plataforma",
  platformPreviewHint:
    "Edite o alvo de planejamento. Um resultado negativo prevê atenuação na reprodução, não altera o arquivo.",
  platformTargetLabel: "Alvo",
  platformTrim: "Atenuação prevista {amount}",
  platformNoTrim: "Nenhuma atenuação prevista",
  outputLabel: "Criar uma cópia processada",
  outputHint:
    "Aplica ganho e limiter de segurança do navegador e exporta uma WAV. Meça o resultado novamente.",
  outputSettingsLabel: "Cadeia sugerida",
  obsPresetLabel: "OBS",
  dawPresetLabel: "DAW",
  outputProcessLabel: "Renderizar WAV localmente",
  outputDownloadLabel: "Baixar WAV processada",
  outputProcessing: "Renderizando a WAV localmente...",
  outputWaiting: "Carregue um arquivo para ativar a exportação.",
  outputReady: "Sua WAV local está pronta para baixar.",
  outputError: "O navegador não conseguiu renderizar este arquivo.",
  youtubeLabel: "YouTube",
  spotifyLabel: "Spotify",
  twitchLabel: "Twitch",
  tiktokLabel: "TikTok",
};
export const content: StreamAudioLoudnessLocaleContent = {
  slug: "planejador-alvo-loudness-audio-streaming",
  title,
  description,
  ui,
  seo: [
    { type: "title", text: "Como ler LUFS e True Peak juntos", level: 2 },
    {
      type: "paragraph",
      html: "O loudness integrado descreve o nível médio de um programa completo. True Peak mostra o pico máximo estimado entre amostras. Os dois são necessários porque uma fonte baixa pode perder margem depois de ser elevada.",
    },
    {
      type: "paragraph",
      html: "O planejador subtrai os LUFS medidos do alvo e soma a correção ao pico medido. É um primeiro cálculo claro, não uma certificação do arquivo processado.",
    },
    { type: "title", text: "Escolher um alvo sem falsa precisão", level: 2 },
    {
      type: "paragraph",
      html: "A prévia por plataforma usa alvos editáveis. Ela mostra a atenuação prevista de uma fonte mais alta e não simula cada codec ou reprodutor.",
    },
    {
      type: "table",
      headers: ["Leitura", "Correção", "Decisão"],
      rows: [
        ["-18 LUFS para -14 LUFS", "+4 dB", "Confira o pico depois de elevar"],
        [
          "-14.5 LUFS para -14 LUFS",
          "+0.5 dB",
          "Faça uma medição de comparação",
        ],
        ["-10 LUFS para -14 LUFS", "-4 dB", "Reduza e meça novamente"],
      ],
    },
    { type: "title", text: "O que o alerta de pico realmente diz", level: 2 },
    {
      type: "paragraph",
      html: "Se o pico projetado passar da linha de alerta, a correção provavelmente precisa de limiter ou de menos ganho. Depois do processamento, meça o programa inteiro novamente.",
    },
    {
      type: "tip",
      title: "Trate a correção como instrução de teste",
      html: "Aplique a mudança de forma controlada, escute voz, efeitos e música no contexto e confira a nova medição.",
    },
    {
      type: "title",
      text: "Conferência prática antes de entrar ao vivo",
      level: 2,
    },
    {
      type: "list",
      items: [
        "Carregue o arquivo ou informe medições confiáveis.",
        "Observe dinâmica e alerta de pico junto com a correção.",
        "Confira os alvos editáveis de cada plataforma.",
        "Exporte uma WAV e meça o resultado do início ao fim.",
        "Avalie voz, música e efeitos, não apenas um número.",
      ],
    },
    {
      type: "paragraph",
      html: "O tipo de conteúdo muda a conferência de escuta, não o cálculo: voz, efeitos e música exigem verificações diferentes.",
    },
    {
      type: "tip",
      title: "O que o planejador não certifica",
      html: "A estimativa do navegador não substitui libebur128 nem um medidor de broadcast. Ela não garante o comportamento do codec ou a conformidade do destino.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
};
