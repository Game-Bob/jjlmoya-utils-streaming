import { makeContent } from './locale-factory';

export const content = makeContent({
  language: 'pt',
  slug: 'contagem-regressiva-cena-stream-obs',
  title: 'Contagem regressiva para cenas de stream',
  description: 'Crie uma tela de contagem regressiva para começar, BRB, raid e pausas na sua transmissão.',
  ui: {
    sceneLabel: 'Que cena você está preparando?', sceneBrb: 'BRB', sceneStarting: 'Começa em breve', sceneRaid: 'Raid', sceneIntermission: 'Pausa', sceneTitleLabel: 'O que deve aparecer acima do contador?', sceneTitlePlaceholder: 'Começa em breve', designLabel: 'Qual clima a sua cena deve ter?', designAurora: 'Névoa aurora', designType: 'Tipografia cinética', designPulse: 'Pulso luminoso', designGlitch: 'Sinal glitch', designSunset: 'Clarão solar', accentColorLabel: 'Cor de destaque', glowColorLabel: 'Cor do brilho', messageLabel: 'O que seus espectadores precisam saber?', messagePlaceholder: 'Volto em 5 minutos', durationLabel: 'De quanto tempo você precisa?', duration60: '1 min', duration300: '5 min', duration600: '10 min', durationCustom: 'Personalizado', secondsLabel: 'segundos', startLabel: 'Quando este aviso deve começar?', startNow: 'Começar agora', scheduleTime: 'Agendar um horário', timeLabel: 'A que hora local deve começar?', startAction: 'Colocar meu aviso no ar', focusAction: 'Mostrar minha cena', exitFocusAction: 'Sair da cena', resetAction: 'Redefinir aviso', flowText: 'Você é o streamer: escolha o momento, defina o tempo necessário e coloque o aviso no ar.', obsTitle: 'Coloque esta cena no OBS', obsText: 'Copie o link, adicione uma Browser Source no OBS, cole o link e use a resolução do seu canvas. STREAMING abre automaticamente uma cena limpa em tela cheia.', obsStepCopy: 'Copiar este link', obsStepAdd: 'Adicionar uma Browser Source no OBS', obsStepPaste: 'Colar e ajustar ao tamanho do canvas', copyUrlAction: 'Copiar link do OBS', copiedUrlText: 'Link do OBS copiado', streamUrlAria: 'URL de streaming do OBS gerada', previewTitle: 'Escolha o visual da cena', previewHint: 'Clique em uma prévia para usar', previewAria: 'Pré-visualizações dos visuais da cena', stageEyebrow: 'Tela da transmissão', stageCaption: 'Sua próxima cena está pronta', readyBadge: 'Pronto', waitingBadge: 'Aguardando', liveBadge: 'Aviso ao vivo', endedBadge: 'Encerrado', readyText: 'Confira a tela e inicie o aviso quando a cena estiver pronta.', waitingText: 'A contagem regressiva ao vivo começa no horário local agendado.', liveText: 'Mantenha esta cena visível até a troca estar pronta.', endedText: 'O aviso terminou. Redefina-o ou prepare uma nova cena.', remainingLabel: 'Tempo na cena', startTimeLabel: 'Início', endTimeLabel: 'Fim', progressLabel: 'Progresso da cena', assumptionTitle: 'Nota sobre o horário', assumptionText: 'Os horários agendados usam o relógio do seu dispositivo. O contador é um aviso visual e não sincroniza OBS, Twitch, chat ou encoder.', warningTitle: 'Use como aviso de cena', warningText: 'Uma aba suspensa, uma mudança no relógio do sistema ou um atraso na transmissão podem fazer o horário visível ficar diferente da live. Confira a cena ao vivo antes da troca.', invalidTime: 'Digite um horário local no formato HH:MM.', clockAria: 'Tempo restante da contagem regressiva', statusAria: 'Status da contagem regressiva',
  },
  faq: [
    { question: 'Esta contagem regressiva se conecta ao OBS ou à Twitch?', answer: 'Não. É um timer independente que não controla OBS, Twitch, chat ou servidor de streaming. Use Mostrar minha cena para preencher a tela e capture essa visualização como Browser Source.' },
    { question: 'Como uso o contador diretamente no OBS?', answer: 'Adicione a URL da ferramenta como Browser Source do OBS com o parâmetro de streaming e as configurações, por exemplo ?STREAMING&scene=starting&duration=300&design=aurora&title=Começa%20em%20breve. Os controles desaparecem e o contador ocupa a área da fonte.' },
    { question: 'O que acontece quando agendo um horário de início?', answer: 'O relógio espera até o horário local escolhido e depois conta a duração da cena. Um horário que já passou é tratado como a próxima ocorrência no dia seguinte.' },
    { question: 'Posso usar uma mensagem personalizada?', answer: 'Sim. Como streamer, escreva o aviso curto que você quer mostrar, como o horário de retorno, o próximo passo ou uma mensagem de raid.' },
    { question: 'O que os presets de cena mudam?', answer: 'Eles identificam o momento da transmissão para que a cena seja entendida rapidamente. O cálculo, a duração e a conexão com plataformas não mudam.' },
    { question: 'O horário de término é exato?', answer: 'Ele é calculado com o relógio local do navegador e a duração informada. Suspensão do navegador, aba pausada ou mudança no relógio podem afetar a atualização visível. É uma referência de planejamento, não uma sincronização garantida.' },
  ],
  howTo: [
    { name: 'Escolha o momento da cena', text: 'Selecione Começa em breve, BRB, Raid ou Pausa para nomear o momento visto pelos espectadores.' },
    { name: 'Escreva seu aviso de streamer', text: 'Digite a mensagem curta que os espectadores devem ler enquanto você prepara a próxima cena.' },
    { name: 'Defina a duração ou o horário', text: 'Escolha uma duração comum ou digite a sua. Comece na hora ou agende um horário local.' },
    { name: 'Leia o status', text: 'Use o relógio grande e o indicador de status para decidir quando trocar a cena da transmissão.' },
  ],
  seo: [
    { type: 'title', text: 'Crie um aviso de cena que seja lido de imediato', level: 2 },
    { type: 'paragraph', html: 'A contagem regressiva dá à sua cena de começo, BRB, raid ou pausa um ponto claro de retorno. Diga o que está fazendo, defina o tempo necessário e deixe o contador grande visível durante a preparação.' },
    { type: 'title', text: 'O que o relógio da cena calcula', level: 3 },
    { type: 'list', items: ['<strong>Aviso imediato:</strong> começa quando você o coloca no ar e conta a duração escolhida.', '<strong>Aviso agendado:</strong> espera o horário local e inicia a duração da cena depois.', '<strong>Status da cena:</strong> separa pronto, aguardando, ao vivo e encerrado para mostrar a próxima ação.'] },
    { type: 'title', text: 'Como escolher uma duração útil', level: 3 },
    { type: 'paragraph', html: 'Use pouco tempo ao trocar fontes ou resolver uma pausa rápida. Escolha mais tempo para preparar um convidado, um jogo ou uma reinicialização técnica. A mensagem deve trazer uma informação que o contador sozinho não mostra.' },
    { type: 'tip', title: 'Seja específico sobre a volta', html: 'Em vez de uma promessa genérica, escreva a próxima ação: "Volto às 20:30 para a final" ou "Preparando o raid". Assim o público entende o tempo e o motivo da espera.' },
    { type: 'title', text: 'Por que o contador fica offline', level: 3 },
    { type: 'paragraph', html: 'O relógio não precisa acessar seu canal ou software de transmissão. O texto e o tempo ficam no navegador, o que torna a cena útil para preparação. Antes da live, confira a fonte e a transição de cena no OBS.' },
    { type: 'title', text: 'Envie a cena pronta para o OBS', level: 3 },
    { type: 'paragraph', html: 'Clique em <strong>Copiar link do OBS</strong>, adicione uma Browser Source à cena da transmissão, cole o link e ajuste a resolução do canvas. O parâmetro <code>?STREAMING</code> abre uma cena limpa, automática e sem controles.' },
    { type: 'title', text: 'Combine o visual com o seu canal', level: 3 },
    { type: 'paragraph', html: 'Escolha entre cinco composições diferentes: Névoa aurora com anel atmosférico, Tipografia cinética com números grandes, Pulso luminoso com ondas expansivas, Sinal glitch com energia de transmissão e Clarão solar com horizonte quente. Escolha uma prévia e ajuste as cores.' },
    { type: 'list', items: ['<strong>Cena:</strong> identifica começo, BRB, raid ou pausa.', '<strong>Título:</strong> troca a linha padrão pelo seu próprio destaque.', '<strong>Mensagem:</strong> adiciona o aviso que o público precisa ler.', '<strong>Duração e horário:</strong> controlam o início e o tempo visível.'] },
    { type: 'paragraph', html: 'Se você montar a URL manualmente, use <code>?STREAMING&amp;scene=raid&amp;title=Raid%20em%20preparação&amp;design=pulse</code>. O gerador inclui automaticamente a duração, a mensagem e as cores personalizadas.' },
    { type: 'title', text: 'Leia o horário final como referência', level: 3 },
    { type: 'paragraph', html: 'O horário final vem do relógio do dispositivo e da duração escolhida. Ele não garante que a live chegue a todos no mesmo instante. Deixe uma margem quando a troca depender de convidado, conexão ou transição de transmissão.' },
  ],
});
