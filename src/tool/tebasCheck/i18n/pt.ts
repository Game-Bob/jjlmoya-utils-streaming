import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TebasCheckUI } from '../types';

const slug = 'detetor-bloqueio-isp';
const title = 'Detetor de Bloqueios ISP Tebas Check';
const description = 'Ferramenta de diagnóstico para detetar bloqueios ilegítimos de IPs partilhados da Cloudflare por parte de operadoras espanholas.';

const faqData = [
  {
    question: 'O que é o Tebas-Check?',
    answer: 'É uma ferramenta de diagnóstico que tenta ligar-se a IPs conhecidos da Cloudflare que foram bloqueados judicialmente em Espanha para impedir o acesso a transmissões piratas. O problema é que, ao bloquear um IP partilhado, milhares de sites legítimos são "quebrados".',
  },
  {
    question: 'Porque é que a minha operadora bloqueia um IP da Cloudflare?',
    answer: 'Devido a medidas cautelares dinâmicas em que as operadoras devem bloquear IPs de servidores que supostamente emitem conteúdo protegido. Ao usar a Cloudflare (CDN), muitos sites partilham o mesmo IP, causando danos colaterais a utilizadores inocentes.',
  },
  {
    question: 'Como funciona o teste?',
    answer: 'Tentamos carregar um pequeno recurso a partir dos IPs sinalizados como bloqueados. Se a ligação falhar devido a "Timeout" ou resets de ligação apenas nesses IPs, é um indicador claro de que a sua operadora está a aplicar uma filtragem de IP.',
  },
  {
    question: 'Posso contornar este bloqueio?',
    answer: 'Os bloqueios de IP são difíceis de contornar apenas mudando o DNS. A solução passa geralmente pelo uso de uma VPN, do navegador Tor, ou esperar que a Cloudflare atribua um novo IP ao serviço legítimo que tenta visitar.',
  },
];

const howToData = [
  {
    name: 'Desativar VPN ou Proxies',
    text: 'Para que o teste seja preciso, deve usar a ligação direta do seu router (Fibra ou 4G/5G) sem camadas intermédias.',
  },
  {
    name: 'Iniciar o scan',
    text: 'Clique no botão de diagnóstico. A ferramenta enviará pacotes de teste para os IPs sob suspeita de bloqueio.',
  },
  {
    name: 'Interpretar os resultados',
    text: 'Se vir resultados a vermelho, significa que esse IP está inacessível. Se estiver a verde, o seu tráfego flui normalmente.',
  },
  {
    name: 'Gerar relatório',
    text: 'Pode usar os resultados para reportar o incidente à sua operadora se estiverem a bloquear serviços legítimos.',
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

export const content: ToolLocaleContent<TebasCheckUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências e Contexto',
  bibliography: [
    {
      name: 'Cloudflare: Compreender o bloqueio de IP',
      url: 'https://www.cloudflare.com/learning/network-layer/what-is-ip-blocking/',
    },
    {
      name: 'Regulamentações espanholas de bloqueio dinâmico',
      url: 'https://www.poderjudicial.es/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: 'Porque é que tudo parou de funcionar?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bem-vindo ao maravilhoso mundo da <strong>"Justiça Preventiva"</strong>. Se está aqui num domingo à tarde e sites legítimos deixaram de carregar enquanto o Twitter funciona perfeitamente, é provavelmente uma vítima colateral da cruzada contra as transmissões de futebol ilegais.',
    },
    {
      type: 'paragraph',
      html: 'Em Espanha, os juízes entregaram um "botão vermelho" a certas entidades desportivas. Este botão permite-lhes bloquear endereços IP em tempo real sem supervisão judicial direta minuto a minuto. O problema é que eles apontam com uma pressão de ar de feira e muitas vezes acertam em servidores partilhados onde, além de "jogos ilegais", residem hospitais, universidades ou o seu blog de culinária favorito.',
    },
    {
      type: 'title',
      text: 'A Teoria do Edifício em Chamas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Imagine que um streaming ilegal é transmitido a partir do apartamento 4B de um arranha-céus. A solução lógica seria bater à porta do 4B e cortar-lhe a luz, certo?',
    },
    {
      type: 'paragraph',
      html: 'Pois não. A solução atual é <strong>explodir as fundações do edifício inteiro</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Ao bloquear o IP de um serviço como a Cloudflare, o fornecedor de internet não só deita abaixo o pirata, mas também os outros 50.000 sites legítimos que partilhavam o mesmo endereço digital. Se estava a trabalhar ou a estudar e o seu site usava esse IP: azar, dano colateral. Reclame com o mestre armeiro.',
    },
    {
      type: 'title',
      text: 'O que faz exatamente esta ferramenta de diagnóstico?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Esta ferramenta realiza uma análise técnica em três passos para identificar se a sua operadora está a aplicar bloqueios seletivos de endereços IP:',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Ping ao Google',
          description: 'Verificamos se tem pulso. Se o Google não carregar, o problema é que não pagou a conta do Wi-Fi. Este é o teste de conectividade base.',
        },
        {
          title: 'Ping à Cloudflare',
          description: 'Tentamos chegar a 1.1.1.1. É o "canário na mina" dos bloqueios em Espanha e o principal alvo dos bloqueios judiciais.',
        },
        {
          title: 'Veredito',
          description: 'Se o Google funciona e a Cloudflare falha, é claríssimo: a sua operadora está a aplicar um bloqueio IP seletivo à Cloudflare.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Impacto do Bloqueio Dinâmico',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Falsos Positivos',
          description: 'Sites de empresas, blogs pessoais e serviços governamentais podem deixar de funcionar se partilharem o IP com um servidor de streaming não autorizado.',
        },
        {
          title: 'Filtragem por IP',
          description: 'Ao contrário do bloqueio por DNS, a filtragem por IP impede a ligação ao nível da rede, o que torna a mudança de DNS insuficiente para resolver o problema.',
        },
        {
          title: 'Falta de Transparência',
          description: 'Muitas vezes, o utilizador apenas vê um erro de "Timeout" sem saber se o problema é da sua ligação ou de um bloqueio ativo da operadora.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Perguntas que ninguém quer responder',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>É ilegal usar isto?</strong> Não. Fazer um ping a um servidor é tão ilegal como olhar para uma montra. Esta ferramenta é um diagnóstico de rede passivo. Não quebra encriptação, não descobre passwords e não acede a conteúdo protegido. Apenas lhe diz porque não consegue aceder aos seus sites habituais.',
        '<strong>Como é que resolvo isto?</strong> Se tiver um bloqueio ativo, mudar os DNS já não ajuda (eles conhecem todos os truques). A única solução real hoje em dia é uma <strong>VPN</strong>. Ao encriptar o seu tráfego, a sua operadora não consegue ver o que está a pedir nem a quem e, por isso, não pode bloqueá-lo "seletivamente" (nem por erro).',
      ],
    },
    {
      type: 'title',
      text: 'Modo Streamer / Widget OBS',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'É streamer e quer mostrar o estado da censura em tempo real na sua transmissão? Criámos um modo especial ultra-minimalista, com fundo transparente (chroma-ready) e atualização automática a cada 5 minutos.',
    },
    {
      type: 'list',
      items: [
        '<strong>Passo 1:</strong> Adicione uma nova fonte de <strong>Navegador</strong> no OBS.',
        '<strong>Passo 2:</strong> Use este URL: <code>https://jjlmoya.es/utilidades/tebas-check/stream/</code>',
        '<strong>Passo 3:</strong> Pronto! Aparecerá um ícone grande (Verde/Vermelho) indicando se a sua ligação está limpa ou sob ataque judicial.',
      ],
    },
    {
      type: 'tip',
      title: 'Aviso Legal',
      html: '<p>Esta ferramenta não tem afiliação com nenhuma entidade desportiva, não facilita o acesso a conteúdo protegido e não contorna medidas tecnológicas de proteção (DRM). Simplesmente informa o utilizador de que a sua ligação à internet está artificialmente degradada.</p>',
    },
  ],
  ui: {
    faqTitle: 'Perguntas Frecuentes',
    bibliographyTitle: 'Referências e Contexto',
    scanning: 'A ler a matrix...',
    seekingBlocks: 'A procurar blocos de betão na sua fibra...',
    blockedTitle: 'A BLOQUEAR...',
    blockedDiagnosis: 'Diagnóstico: "Censura Seletiva"',
    blockedReason: 'Detetámos interferência na sua operadora. A Cloudflare ou os DNS estão a ser manipulados.',
    noInternetTitle: 'SEM LIGAÇÃO',
    noInternetReason: 'Parece que não tem acesso à internet. Verifique o cabo ou a fatura.',
    successTitle: 'ESTÁ LIVRE',
    successReason: 'A sua ligação parece limpa. Se houver bloqueios globais, não o estão a afetar.',
    retryBtn: 'Provocar a justiça novamente',
    authorNoteTitle: 'Nota do Autor:',
    authorNoteText: 'Não pude testar a fundo esta utilidade porque não sou afetado pela "mão negra" de Tebas. Se quiser ajudar-me a melhorar o diagnóstico, contacte-me.',
    consoleHeader: 'TEBAS_OS v3.2.0',
    statusNegotiating: 'A negociar com o seu router...',
    statusDodging: 'A esquivar-se da circular do tribunal...',
    statusCheckingPirate: 'A verificar se é um pirata (piscadela)...',
    statusPinging: 'A fazer ping ao Google para ver se existe...',
    statusConsulting: 'A consultar o oráculo do IP partilhado...',
    statusCheckingFee: 'A rever se o Tebas pagou a quota de trabalhador por conta própria...',
    statusCalculating: 'A calcular a probabilidade de ganhar a lotaria...',
    statusDeciphering: 'A tentar decifrar o contrato com a sua operadora...',
    logStarted: "A INICIAR PROTOCOLO AUTÓNOMO 'TEBAS_WATCH'...",
    logDetecting: '> A detetar operadora e conectividade básica...',
    logIspFound: '> Operadora detetada: ',
    logConnError: '> Erro de ligação básica',
    logDnsCross: '> A executar cruzamento de dados DNS (DoH vs Local)...',
    logDnsGoogle: '> DNS Real (Google): ',
    logDnsPoisoned: '> ALERTA: DNS envenenado detetado.',
    logDnsNoDoh: '> DoH indisponível, a saltar cruzamento DNS.',
    logLaunchingProbes: '> A lançar sondas sobre alvos críticos...',
    logIpBlocked: '> Alvo {ip}: SEM RESPOSTA (Suspeita de bloqueio IP)',
    logIpActive: '> Alvo {ip}: ATIVO',
    logAlertInterference: '!!! ALERTA DE INTERFERÊNCIA JUDICIAL !!!',
    logNoInternet: 'SEM ACESSO À INTERNET',
    logClean: 'LIGAÇÃO LIMPA. DESFRUTE.',
    logDiagError: 'ERRO DE DIAGNÓSTICO',
  },
};
