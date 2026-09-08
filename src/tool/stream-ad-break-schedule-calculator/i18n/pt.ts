import type { SEOSection } from '../../../types';
import { makeContent } from './content';

const faq = [
  { question: 'Como a calculadora posiciona uma pausa publicitária?', answer: 'Ela compara os minutos de conteúdo com o intervalo escolhido e coloca a pausa no primeiro limite disponível depois desse ponto. Um bloco nunca é cortado.' },
  { question: 'Qual formato devo usar nos blocos de conteúdo?', answer: 'Digite um bloco por linha no formato Nome | minutos, por exemplo Abertura | 15. A ordem vira a escaleta.' },
  { question: 'Por que a pausa pode acontecer depois do intervalo?', answer: 'A calculadora respeita os limites dos blocos. Se um bloco ultrapassar o intervalo, a pausa passa para o limite seguinte e o desvio é sinalizado.' },
  { question: 'Isso segue uma regra de anúncios de alguma plataforma?', answer: 'Não. É um modelo de planejamento baseado no seu intervalo, na duração da pausa e na estrutura do programa. Confira as regras atuais da plataforma, do contrato e da região.' },
  { question: 'O horário de término inclui as pausas?', answer: 'Sim. O conteúdo e o tempo de anúncios aparecem separados, mas o horário final soma todas as pausas previstas.' },
];
const howTo = [
  { name: 'Defina início e regras de pausa', text: 'Escolha o horário inicial, os minutos de conteúdo, o intervalo entre pausas e a duração de cada pausa.' },
  { name: 'Digite a escaleta', text: 'Escreva cada bloco como Nome | minutos. Use limites onde o apresentador possa parar naturalmente.' },
  { name: 'Leia a linha do tempo', text: 'Confira onde as pausas caem, quanto tempo acrescentam e se um bloco longo adia o objetivo.' },
  { name: 'Copie a folha de produção', text: 'Revise os avisos e copie a lista de horários para produção, moderação ou notas de cena.' },
];
const seo: SEOSection[] = [
  { type: 'title', text: 'Planeje pausas ao redor do programa', level: 2 },
  { type: 'paragraph', html: 'Uma transmissão ao vivo tem dois relógios: os minutos de conteúdo e o horário real com pausas. Esta calculadora mostra os dois e calcula o término com base na escaleta, no intervalo e na duração das pausas.' },
  { type: 'paragraph', html: 'Quando o relógio do conteúdo alcança o intervalo, a próxima fronteira adequada recebe uma pausa. Antes da transmissão, você pode mover ou encurtar um bloco, ou aceitar o atraso conscientemente.' },
  { type: 'title', text: 'Use limites como sinais de produção', level: 2 },
  { type: 'paragraph', html: 'Boas pausas acontecem depois da abertura, de uma mudança de assunto, de uma partida ou de uma interrupção planejada. Um bloco longo não oferece um ponto seguro; o aviso transforma o problema editorial em decisão.' },
  { type: 'list', items: ['Divida uma entrevista longa em abertura, conversa e perguntas.', 'Mantenha o encerramento como último bloco.', 'Compare os minutos de conteúdo com o término que inclui anúncios.', 'Entregue o plano a quem inicia as pausas.'] },
  { type: 'title', text: 'Leia os três sinais de tempo', level: 2 },
  { type: 'table', headers: ['Sinal', 'Significado', 'Ação'], rows: [['Conteúdo', 'Minutos da escaleta', 'Confira se a duração editorial cabe no programa'], ['Tempo de anúncios', 'Minutos adicionados pelas pausas', 'Avise apresentador e produção'], ['Fim no ar', 'Início mais conteúdo e pausas', 'Reserve o horário correto de estúdio ou passagem']] },
  { type: 'tip', title: 'Não é uma garantia da plataforma', html: 'O resultado é uma escaleta local. Não inicia anúncios e não confirma o que cada espectador verá, nem contratos ou leis. Confira as condições atuais do destino.' },
  { type: 'title', text: 'Deixe o plano pronto para a régia', level: 2 },
  { type: 'paragraph', html: 'Copie o plano depois de ler os avisos. Os horários ajudam a preparar cenas, avisar moderadores e proteger um trecho importante. Se não houver pausa, crie um limite editorial natural.' },
  { type: 'tip', title: 'Confira o relógio depois do ensaio', html: 'Conversas e transições técnicas podem aumentar. Use o cálculo como base e atualize os minutos depois do ensaio.' },
];
export const content = makeContent({
  slug: 'calculadora-pausas-publicitarias-stream',
  title: 'Calculadora de pausas publicitárias para stream',
  description: 'Transforme sua escaleta de transmissão em um horário de pausas publicitárias e calcule o término real.',
  ui: {
    startTimeLabel: 'Hora de início da transmissão', startTimeHint: 'Quando a transmissão começa', streamDurationLabel: 'Minutos de conteúdo previstos', streamDurationHint: 'Duração do programa sem pausas', cadenceLabel: 'Intervalo das pausas', cadenceHint: 'Coloque uma pausa depois destes minutos de conteúdo', breakLengthLabel: 'Duração da pausa', breakLengthHint: 'Minutos adicionados ao relógio', segmentsLabel: 'Escaleta', segmentsHint: 'Uma linha por bloco: Nome | minutos', presetsLabel: 'Comece com um formato', presetQuick: 'Transmissão de duas horas', presetLong: 'Evento longo', presetInterview: 'Transmissão com entrevista', scheduleLabel: 'Linha do tempo no ar', scheduleHint: 'As pausas caem no primeiro limite disponível depois do intervalo.', contentTotalLabel: 'Conteúdo', adsTotalLabel: 'Tempo de anúncios', plannedEndLabel: 'Fim no ar', breaksLabel: 'Pausas', stateReady: 'Limites aproveitáveis', stateWarning: 'Revise a tensão de horário', stateEmpty: 'Adicione uma escaleta', stateReadyText: 'Este horário pode ser entregue à produção como uma primeira escaleta.', stateWarningText: 'Há uma linha inválida ou o intervalo não encontra um limite natural.', stateEmptyText: 'Adicione dois ou mais blocos para colocar uma pausa entre eles.', copyLabel: 'Copiar escaleta', resetLabel: 'Restaurar exemplo', copiedLabel: 'Escaleta copiada', copyErrorLabel: 'A cópia foi bloqueada. Selecione o horário e copie manualmente.', segmentKind: 'Conteúdo', breakKind: 'Pausa publicitária', minutesShort: 'min', noEntriesText: 'Sua linha do tempo aparecerá aqui.', invalidLineText: 'Confira a linha {lines}. Use Nome | minutos.', plannedMismatchText: 'A escaleta difere da duração prevista em {difference}.', boundaryWarningText: 'Nenhuma pausa foi colocada porque o intervalo é alcançado dentro de um bloco. Adicione um limite ou divida o bloco.'
  }, seo, faq, howTo,
});
