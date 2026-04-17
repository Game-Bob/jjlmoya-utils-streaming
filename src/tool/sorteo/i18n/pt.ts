import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SorteoUI } from '../ui';

const slug = 'sorteio-nomes';
const title = 'Gerador de Nomes Aleatórios para Streaming';
const description =
  'Escolha um vencedor ao acaso de uma lista de nomes. Ferramenta de sorteio gratuita, rápida e visual para Twitch, YouTube e eventos.';

const faqData = [
  {
    question: 'O sorteio é realmente aleatório?',
    answer:
      'Sim, utilizamos o algoritmo de aleatoriedade criptográfica do navegador (Web Crypto API) para garantir que cada participante tenha exatamente a mesma probabilidade de ganhar, sem enviesamentos ou manipulações.',
  },
  {
    question: 'Posso usar este gerador na Twitch ou no YouTube?',
    answer:
      'Com certeza. Como ferramenta web, pode capturar a janela com o OBS ou partilhar o ecrã diretamente. O design limpo e as animações foram pensados para que a audiência veja o processo com total transparência.',
  },
  {
    question: 'Como posso evitar que alguém participe duas vezes?',
    answer:
      'A ferramenta tem uma função automática de "limpeza de duplicados" que deteta nomes idênticos ou com pequenas variações de espaços para garantir que cada pessoa real conte apenas uma vez.',
  },
  {
    question: 'Posso sortear vários vencedores de uma vez?',
    answer:
      'Sim, pode configurar o número de vencedores desejados antes de clicar no botão. A ferramenta listará os sortudos de forma clara para que os possa mencionar na sua transmissão ao vivo.',
  },
  {
    question: 'Quantos nomes posso adicionar à lista?',
    answer:
      'Não há um limite rigoroso imposto pela ferramenta. Otimizámos o motor para lidar com listas de milhares de participantes sem problemas de desempenho, tornando-o ideal até para sorteios massivos.',
  },
  {
    question: 'Os meus dados ou a lista de participantes são guardados?',
    answer:
      'Não, nunca. A sua privacidade vem em primeiro lugar. Todo o processo de sorteio corre localmente no seu navegador web. Os nomes que introduz nunca são enviados para os nossos servidores nem armazenados em qualquer base de dados.',
  },
];

const howToData = [
  {
    name: 'Prepare a lista de participantes',
    text: 'Copie a lista de nomes do seu chat, Excel ou rede social e cole-a na caixa de texto.',
  },
  {
    name: 'Configure as opções do sorteio',
    text: 'Escolha quantos vencedores precisa e se deseja filtrar duplicados ou nomes vazios.',
  },
  {
    name: 'Lance a "mão inocente"',
    text: 'Clique no botão de sorteio. Uma animação visual manterá a tensão antes de revelar o vencedor.',
  },
  {
    name: 'Anuncie os resultados',
    text: 'Copie os nomes dos vencedores para os partilhar nas suas redes sociais ou no chat da transmissão.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<SorteoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências Técnicas',
  bibliography: [
    {
      name: 'Web Crypto API: getRandomValues()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues',
    },
    {
      name: 'Algoritmo Fisher-Yates Shuffle',
      url: 'https://pt.wikipedia.org/wiki/Algoritmo_de_Fisher-Yates',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: 'Sorteador de Nomes Aleatórios e Lista de Participantes Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pergunta-se como fazer um sorteio online de forma rápida, segura e totalmente transparente? A nossa ferramenta gratuita de <strong>Sorteio de Nomes</strong> é a solução definitiva para escolher um vencedor ao acaso em segundos. Desenhada para ser simples, visual e eficaz, é perfeita para qualquer cenário onde precise de uma "mão inocente" digital.',
    },
    {
      type: 'paragraph',
      html: 'Quer esteja a gerir um concurso nas redes sociais, um sorteio massivo no seu canal de streaming ou simplesmente a decidir quem deita o lixo fora hoje, o nosso seletor aleatório garante total imparcialidade graças aos modernos algoritmos criptográficos. <strong>Sem manipulação, sem enviesamento, apenas pura aleatoriedade.</strong>'
    },
    {
      type: 'title',
      text: 'Casos de Uso',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Sorteios em Redes Sociais',
          description: 'Ideal para concursos no Instagram, Twitter (X) ou Facebook. Basta copiar nomes dos comentários e colar para escolher um vencedor justo. A ferramenta remove automaticamente duplicados.',
        },
        {
          title: 'Streaming na Twitch / YouTube',
          description: 'Graças ao nosso Modo Studio com animações suaves e sons integrados, pode partilhar o seu ecrã diretamente no OBS e oferecer um espetáculo visual excitante à sua audiência enquanto escolhe vencedores ao vivo.',
        },
        {
          title: 'Dinâmicas de Turma e Equipa',
          description: 'Professores e líderes de equipa podem usá-lo para formar grupos aleatórios, escolher quem apresenta primeiro ou atribuir tarefas ao acaso com total transparência e sem favoritismo.',
        },
        {
          title: 'Amigo Oculto e Eventos',
          description: 'Simplifique a organização de eventos familiares, sorteios de escritório ou Amigo Oculto escolhendo nomes ao acaso instantaneamente sem necessidade de papéis ou logística complicada.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Porque é que a nossa ferramenta é diferente?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Criptografia Real:</strong> Utilizamos a Web Crypto API do navegador (padrão W3C) em vez de geradores pseudoaleatórios fracos. Cada sorteio é matematicamente imparcial.',
        '<strong>Sem Armazenamento:</strong> Os seus dados nunca saem do seu navegador. Não vendemos listas, não fazemos perfis, não guardamos nada. Processamento puramente local.',
        '<strong>Design Visual:</strong> O modo cinema e as animações tornam cada sorteio num evento memorável. Perfeito para captura com o OBS ou transmissões ao vivo.',
        '<strong>Gestão de Duplicados:</strong> Deteta automaticamente nomes repetidos ou variantes (espaços extra, maiúsculas, etc.) para garantir que cada pessoa real conte apenas uma vez.',
      ],
    },
    {
      type: 'title',
      text: 'Como usar o sorteio passo a passo',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Passo 1 - Inserir participantes:</strong> Cole a sua lista de nomes na caixa de texto principal. A ferramenta deteta automaticamente cada quebra de linha como um participante diferente. Tem duplicados? Sem problema, a ferramenta remove-os.',
        '<strong>Passo 2 - Personalizar:</strong> No separador de definições pode ativar a contagem decrescente para gerar tensão, o efeito de confetis para celebrar, ou ativar a "lista negra" para excluir certos nomes.',
        '<strong>Passo 3 - Sortear!</strong> Clique no botão principal e o nosso motor gerará uma seleção aleatória criptograficamente segura. Os vencedores serão exibidos de forma clara e memorável.',
      ],
    },
    {
      type: 'title',
      text: 'Entradas Ponderadas: Dê Vantagem a Alguns Participantes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Quer recompensar os seus subscritores mais leais ou dar mais oportunidades a certos participantes? O nosso sistema de <strong>Entradas Ponderadas</strong> é único e permite atribuir um "peso" ou multiplicador a qualquer nome sem ter de o escrever várias vezes.',
    },
    {
      type: 'tip',
      title: 'Como atribuir pesos a nomes',
      html: '<p>Use um asterisco (*) ou um "x" seguido do número de participações. Exemplos:</p><ul><li><strong>"João * 5"</strong> - O João compete como se fosse 5 pessoas</li><li><strong>"Maria x 10"</strong> - A Maria tem 10 vezes mais chances</li><li><strong>"Pedro"</strong> - Sem símbolo = 1 entrada regular</li></ul><p>Isto é perfeito para sorteios onde queira dar vantagem a subscritores VIP ou utilizadores especiais.</p>',
    },
    {
      type: 'title',
      text: 'Privacidade e Segurança Total',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ao contrário de outras ferramentas online, <strong>não guardamos os seus dados</strong>. Todo o processamento de nomes e execução do sorteio ocorre localmente no seu próprio navegador. As suas listas de participantes nunca viajam pela rede nem são guardadas em qualquer servidor externo.',
    },
    {
      type: 'paragraph',
      html: '<strong>O que é que isto significa?</strong> A sua lista de participantes é sua e apenas sua. Ao fechar o separador, ela desaparece. Sem cookies de rastreio, sem perfis de utilizador, sem base de dados central. Privacidade máxima garantida para si e para quem participa nos seus sorteios.',
    },
    {
      type: 'title',
      text: 'Transparência Matemática',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Alguns podem perguntar: "E se manipularem os resultados?" A resposta é simples: <strong>não podemos</strong>. O código do sorteio é determinístico e criptográfico. Sem variáveis ocultas, sem "dedos no palco".',
    },
    {
      type: 'paragraph',
      html: 'Cada vencedor é o resultado direto do algoritmo Fisher-Yates Shuffle aplicado à sua lista exata, utilizando entropia criptográfica real. Se quiser auditar o processo, o código está disponível no GitHub para inspeção pública.',
    },
  ],
  ui: {
    faqTitle: 'Perguntas Frequentes',
    bibliographyTitle: 'Referências Técnicas',
    title: 'Sorteio Aleatório',
    totalParticipants: 'Total de Participantes Únicos',
    ready: 'PRONTO',
    participants: 'Participantes',
    settings: 'Definições',
    importFile: 'Importar Ficheiro',
    clearAll: 'Limpar tudo',
    placeholder: 'Escreva ou cole os nomes aqui...\nJoão Silva\nMaria Rocha\n@utilizador_twitch',
    onePerLine: '1 participante por linha',
    lines: 'linhas',
    filters: 'Filtros',
    allowDuplicates: 'Permitir Duplicados',
    winnerCount: 'Número de Vencedores',
    autoRemove: 'Auto-remover Vencedor',
    blacklist: 'Lista Negra (Excluir)',
    blacklistPlaceholder: 'Nomes proibidos (um por linha)...',
    blacklistInfo: 'Estes utilizadores não entrarão no sorteio.',
    sceneEffects: 'Efeitos de Cena',
    countdown: 'Contagem decrescente (3s)',
    confetti: 'Confetis de Vitória',
    zenMode: 'Modo Zen (Ocultar Painel)',
    waitingParticipants: 'A aguardar participantes...',
    winner: 'VENCEDOR',
    reroll: 'Sortear novamente',
    history: 'Histórico desta sessão',
    noWinnersYet: 'Ainda sem vencedores...',
    startGiveaway: 'Iniciar Sorteio',
    studioHeader: 'LIVE STUDIO v2.0',
  },
};
