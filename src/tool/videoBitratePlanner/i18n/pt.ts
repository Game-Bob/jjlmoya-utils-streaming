import { createLocalizedContent } from '../locale-content';

export const content = createLocalizedContent({
  language: 'pt',
  slug: 'calculadora-bitrate-armazenamento-video',
  title: 'Planejador de Bitrate e Armazenamento de Vídeo',
  description: 'Estime o armazenamento de vídeo, o tempo por fotograma e níveis práticos de bitrate para streaming ou gravação.',
  ui: {
    presetLabel: 'Comece com uma cena', presetFast: 'Stream web rápido', presetUpload: 'Live diário', presetArchive: 'Arquivo 4K', resolutionLabel: 'Resolução', frameRateLabel: 'Fotogramas por segundo', codecLabel: 'Codec', bitrateLabel: 'Bitrate de vídeo', durationLabel: 'Duração da sessão', copiesLabel: 'Cópias guardadas', minutesLabel: 'minutos', copiesShort: 'cópias', h264: 'H.264', h265: 'H.265', av1: 'AV1', codecNote: 'A eficiência do codec muda a leitura de qualidade, não o cálculo do armazenamento.', sceneLabel: 'Do sinal ao armazenamento', signalSource: 'Imagem', codecGate: 'Codificação', storageReel: 'Armazenamento', qualityEstimate: 'Leitura de qualidade', storageEstimate: 'Armazenamento estimado', perCopy: 'Uma cópia', allCopies: 'Todas as cópias', perHour: 'Por hora', frameTime: 'Tempo por fotograma', dataPerFrame: 'Dados por fotograma', comparisonLabel: 'Comparação de armazenamento', lean: 'Leve', balanced: 'Equilibrado', crisp: 'Nítido', qualityLean: 'Leve e compacto', qualityBalanced: 'Sinal equilibrado', qualityStrong: 'Bom detalhe', qualityExcellent: 'Grande margem', qualityAggressive: 'Compressão agressiva', qualityGuidance: 'Uma estimativa visual para comparar definições.', capacityLight: 'Pegada de armazenamento leve', capacityMedium: 'Pegada de armazenamento média', capacityHeavy: 'Pegada de armazenamento elevada', capacityNote: 'O estado de capacidade usa o total de cópias mostrado acima.', reset: 'Repor valores', localNote: 'Funciona localmente neste navegador. Nada é enviado.', assumptionTitle: 'Ler os pressupostos', assumptionText: 'O armazenamento usa gigabytes decimais e o bitrate de vídeo indicado. Não inclui áudio, sobrecarga do contentor, picos de bitrate variável nem espaço do sistema de ficheiros.', warningText: 'Os níveis de qualidade são referências de planeamento. Movimento, grão, fotogramas-chave, predefinições do codificador, transcodificação e margem de rede podem alterar o resultado real.', readyText: 'Altere um valor para redesenhar o sinal.', calculateAria: 'Atualizar o plano de vídeo',
  },
  faq: [
    { question: 'Este planeador envia ou inspeciona o meu vídeo?', answer: 'Não. Usa apenas os valores introduzidos no navegador. Não envia ficheiros, não inspeciona uma câmara nem consulta um serviço de streaming.' },
    { question: 'Como é calculado o armazenamento?', answer: 'O bitrate é multiplicado pela duração e dividido por oito para converter bits em bytes. O resultado usa gigabytes decimais e é multiplicado pelo número de cópias.' },
    { question: 'O que significa a leitura de qualidade?', answer: 'É uma regra indicativa baseada em píxeis, fotogramas por segundo, bitrate e um fator amplo de eficiência do codec. Não promete qualidade porque o movimento e o codificador também contam.' },
    { question: 'Por que motivo o mesmo bitrate muda com outra resolução ou taxa de fotogramas?', answer: 'Uma resolução maior tem mais píxeis e uma taxa maior envia mais fotogramas por segundo. Mais informação visual tem de partilhar o mesmo bitrate.' },
    { question: 'Posso usar o resultado como requisito de uma plataforma?', answer: 'Use-o para planear capacidade e comparar cenários. Os requisitos mudam, por isso consulte a orientação atual do destino e deixe margem de envio para uma transmissão ao vivo.' },
  ],
  howTo: [
    { name: 'Escolha o formato da imagem', text: 'Selecione a resolução e a taxa de fotogramas que correspondem ao stream ou gravação que pretende criar.' },
    { name: 'Defina o sinal', text: 'Escolha o codec e introduza o bitrate de vídeo em megabits por segundo. Um preset é um bom ponto de partida.' },
    { name: 'Descreva a sessão', text: 'Indique a duração em minutos e o número de cópias que quer conservar, editar ou entregar.' },
    { name: 'Leia a compensação', text: 'Compare os níveis leve, equilibrado e nítido para perceber a mudança de armazenamento antes da sessão.' },
  ],
  seo: [
    { type: 'title', text: 'Estime o armazenamento de vídeo antes de transmitir ou gravar', level: 2 },
    { type: 'paragraph', html: 'Uma calculadora de bitrate de vídeo ajuda a preparar um plano de armazenamento realista para uma sessão. Introduza bitrate, duração e cópias e compare três níveis de sinal para o mesmo formato de imagem.' },
    { type: 'title', text: 'O que calcula o planeador', level: 3 },
    { type: 'list', items: ['<strong>Armazenamento:</strong> bitrate multiplicado pelo tempo, convertido de bits para gigabytes decimais e multiplicado pelas cópias.', '<strong>Tempo por fotograma:</strong> milissegundos disponíveis por fotograma na FPS escolhida e uma estimativa de dados por fotograma.', '<strong>Leitura de qualidade:</strong> comparação de píxeis por fotograma ajustada por um fator de eficiência do codec.'] },
    { type: 'title', text: 'Como a resolução e a FPS mudam a compensação', level: 3 },
    { type: 'paragraph', html: 'A resolução aumenta os píxeis de cada fotograma e a FPS aumenta a quantidade de fotogramas por segundo. Se o bitrate ficar igual, cada fotograma recebe menos dados e a compressão fica mais exigente.' },
    { type: 'tip', title: 'Deixe margem para uma transmissão ao vivo', html: 'Considere o bitrate de vídeo como a carga principal, não como toda a capacidade da ligação. Reserve espaço para áudio, protocolo e variações da rede e teste uma cena com movimento semelhante.' },
    { type: 'title', text: 'Use as orientações da plataforma no ajuste final', level: 3 },
    { type: 'paragraph', html: 'Este planeador é independente da plataforma. O YouTube publica intervalos de bitrate por resolução e taxa de fotogramas. Consulte as regras atuais do destino para validar o cenário.' },
    { type: 'title', text: 'Por que motivo o resultado é uma estimativa', level: 3 },
    { type: 'paragraph', html: 'Um bitrate nominal não descreve todos os bytes do ficheiro final. Bitrate variável, áudio, metadados do contentor, fotogramas-chave, transcodificação e unidades do sistema podem alterar o tamanho.' },
  ],
});
