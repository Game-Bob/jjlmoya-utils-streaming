import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TebasCheckUI } from '../types';

const slug = 'detecteur-blocage-isp';
const title = 'Détecteur de Blocages FAI Tebas Check';
const description = 'Outil de diagnostic pour détecter les blocages illégitimes d\'adresses IP partagées Cloudflare par les serveurs espagnols.';

const faqData = [
  {
    question: 'Qu\'est-ce que le Tebas-Check?',
    answer: 'C\'est un outil de diagnostic qui tente de se connecter à des IP Cloudflare connues qui ont été bloquées judiciairement en Espagne pour empêcher l\'accès aux diffusions pirates. Le problème est qu\'en bloquant une IP partagée, des milliers de sites web légitimes sont impactés.',
  },
  {
    question: 'Pourquoi mon fournisseur d\'accès bloque-t-il une IP Cloudflare?',
    answer: 'En raison de mesures conservatoires dynamiques où les FAI doivent bloquer les IP des serveurs diffusant prétendument du contenu protégé. En utilisant Cloudflare (CDN), de nombreux sites partagent la même IP, causant des dommages collatéraux aux utilisateurs innocents.',
  },
  {
    question: 'Comment fonctionne le test?',
    answer: 'Nous tentons de charger une petite ressource depuis les IP signalées comme bloquées. Si la connexion échoue par "Timeout" ou réinitialisation uniquement sur ces IP, c\'est un indicateur clair que votre FAI applique un filtrage IP.',
  },
  {
    question: 'Puis-je contourner ce blocage?',
    answer: 'Les blocages IP sont difficiles à contourner simplement en changeant de DNS. La solution passe généralement par l\'utilisation d\'un VPN, du navigateur Tor, ou l\'attente que Cloudflare assigne une nouvelle IP au service légitime.',
  },
];

const howToData = [
  {
    name: 'Désactiver le VPN ou les Proxys',
    text: 'Pour que le test soit précis, vous devez utiliser la connexion directe de votre routeur (Fibre ou 4G/5G) sans couches intermédiaires.',
  },
  {
    name: 'Démarrer le scan',
    text: 'Cliquez sur le bouton de diagnostic. L\'outil enverra des paquets de test aux IP soupçonnées de blocage.',
  },
  {
    name: 'Interpréter les résultats',
    text: 'Si vous voyez des résultats en rouge, cela signifie que cette IP est injoignable. Si c\'est vert, votre trafic circule normalement.',
  },
  {
    name: 'Générer un rapport',
    text: 'Vous pouvez utiliser les résultats pour signaler l\'incident à votre FAI s\'ils bloquent des services légitimes.',
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
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<TebasCheckUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquemment Posées',
  faq: faqData,
  bibliographyTitle: 'Références et Contexte',
  bibliography: [
    {
      name: 'Cloudflare: Understanding IP Blocking',
      url: 'https://www.cloudflare.com/learning/network-layer/what-is-ip-blocking/',
    },
    {
      name: 'Réglementation espagnole sur les blocages dynamiques',
      url: 'https://www.poderjudicial.es/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: 'Pourquoi tout a-t-il arrêté de fonctionner ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bienvenue dans le merveilleux monde de la <strong>"Justice Préventive"</strong>. Si vous êtes ici un dimanche après-midi et que des sites web légitimes ont cessé de charger tandis que Twitter fonctionne parfaitement, vous êtes probablement une victime collatérale de la croisade contre le football illégal.',
    },
    {
      type: 'paragraph',
      html: 'En Espagne, les juges ont remis un "bouton rouge" à certaines entités sportives. Ce bouton leur permet de bloquer les adresses IP en temps réel sans supervision judiciaire directe minute par minute. Le problème est qu\'ils visent avec un fusil de foire, et ils tirent souvent sur des serveurs partagés où, en plus de "matchs illégaux", vivent des sites web d\'hôpitaux, d\'universités ou votre blog de cuisine préféré.',
    },
    {
      type: 'title',
      text: 'La Théorie du Bâtiment en Feu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Imaginez qu\'une diffusion illégale soit transmise depuis l\'appartement 4B d\'un gratte-ciel. La solution logique serait de frapper à la porte du 4B et de couper son électricité, non ?',
    },
    {
      type: 'paragraph',
      html: 'Eh bien, non. La solution actuelle est de <strong>faire exploser les fondations de tout le bâtiment</strong>.',
    },
    {
      type: 'paragraph',
      html: 'En bloquant l\'IP d\'un service comme Cloudflare, le fournisseur Internet élimine non seulement le pirate, mais aussi les 50 000 autres sites web légitimes qui partageaient cette même adresse numérique. Si vous travailliez ou étudiiez et que votre site utilisait cette IP : malchance, dégâts collatéraux. Déposer plainte auprès du maître armurier.',
    },
    {
      type: 'title',
      text: 'Que fait exactement cet outil de diagnostic ?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cet outil effectue une analyse technique en trois étapes pour identifier si votre FAI applique un blocage sélectif d\'adresses IP :',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Ping Google',
          description: 'Nous vérifions si vous avez un pouls. Si Google ne charge pas, le problème est que vous n\'avez pas payé votre facture Wi-Fi. Il s\'agit du test de connectivité de base.',
        },
        {
          title: 'Ping Cloudflare',
          description: 'Nous essayons de joindre 1.1.1.1. C\'est le "canari dans la mine de charbon" du blocage en Espagne et la cible principale des blocages judiciaires.',
        },
        {
          title: 'Verdict',
          description: 'Si Google fonctionne et Cloudflare échoue, c\'est crystal clear : votre FAI applique un blocage IP sélectif de Cloudflare.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Impact du Blocage Dynamique',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Faux Positifs',
          description: 'Les sites web d\'entreprises, les blogs personnels et les services gouvernementaux peuvent cesser de fonctionner s\'ils partagent une IP avec un serveur de streaming non autorisé.',
        },
        {
          title: 'Filtrage IP',
          description: 'Contrairement au blocage DNS, le filtrage IP empêche la connexion au niveau du réseau, ce qui rend le changement de DNS insuffisant pour résoudre le problème.',
        },
        {
          title: 'Manque de Transparence',
          description: 'Souvent, l\'utilisateur ne voit qu\'une erreur de "Timeout" sans savoir si le problème vient de sa connexion ou d\'un blocage FAI actif.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Les questions que personne ne veut répondre',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Est-il illégal d\'utiliser ceci ?</strong> Non. Faire un "ping" à un serveur est aussi illégal que regarder une vitrine. Cet outil est un diagnostic réseau passif. Il ne casse pas le chiffrement, ne craque pas les mots de passe et n\'accède pas au contenu protégé. Il vous dit simplement pourquoi vous ne pouvez pas accéder à vos sites habituels.',
        '<strong>Comment puis-je le réparer ?</strong> Si vous avez un blocage actif, changer les DNS n\'aide plus (ils connaissent tous les trucs). La seule véritable solution aujourd\'hui est un <strong>VPN</strong>. En chiffrant votre trafic, votre FAI ne peut pas voir ce que vous demandez ou à qui, et par conséquent, ne peut pas vous bloquer "sélectivement" (ou par erreur).',
      ],
    },
    {
      type: 'title',
      text: 'Mode Streamer / OBS Widget',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Êtes-vous un streameur et voulez-vous montrer l\'état de la censure en temps réel sur votre flux ? Nous avons créé un mode spécial ultra-minimaliste, avec arrière-plan transparent (prêt pour chroma) et auto-actualisation toutes les 5 minutes.',
    },
    {
      type: 'list',
      items: [
        '<strong>Étape 1 :</strong> Ajoutez une nouvelle source <strong>Navigateur</strong> dans OBS.',
        '<strong>Étape 2 :</strong> Utilisez cette URL : <code>https://jjlmoya.es/utilidades/tebas-check/stream/</code>',
        '<strong>Étape 3 :</strong> C\'est fait ! Une grande icône (Vert/Rouge) apparaîtra indiquant si votre connexion est propre ou sous attaque judiciaire.',
      ],
    },
    {
      type: 'tip',
      title: 'Notice Légale',
      html: '<p>Cet outil n\'a aucune affiliation avec une entité sportive, ne facilite pas l\'accès au contenu protégé et ne contourne pas les mesures de protection technologique (DRM). Il informe simplement l\'utilisateur que sa connexion Internet est artificiellement dégradée.</p>',
    },
  ],
  ui: {
    scanning: 'Scan de la matrix...',
    seekingBlocks: 'Recherche de blocs de béton dans votre fibre...',
    blockedTitle: 'BLOCAGE...',
    blockedDiagnosis: 'Diagnostic: "Censure Sélective"',
    blockedReason: 'Nous avons détecté une interférence chez votre FAI. Cloudflare ou le DNS sont manipulés.',
    noInternetTitle: 'PAS DE CONNEXION',
    noInternetReason: 'Il semble que vous n\'ayez pas d\'accès internet. Vérifiez votre câble ou la facture.',
    successTitle: 'VOUS ÊTES LIBRE',
    successReason: 'Votre connexion semble propre. Si des blocages globaux existent, ils ne vous affectent pas.',
    retryBtn: 'Provoquer à nouveau la justice',
    authorNoteTitle: 'Note de l\'auteur:',
    authorNoteText: 'Je n\'ai pas pu tester pleinement cet utilitaire car je ne suis pas affecté par la "main noire" de Tebas. Si vous voulez m\'aider, contactez-moi.',
    consoleHeader: 'TEBAS_OS v3.2.0',
    statusNegotiating: 'Négociation avec votre routeur...',
    statusDodging: 'Esquive de la circulaire du tribunal...',
    statusCheckingPirate: 'Vérification si vous êtes un pirate (clin d\'œil, clin d\'œil)...',
    statusPinging: 'Ping vers Google pour voir si vous existez...',
    statusConsulting: 'Consultation de l\'oracle des IP partagées...',
    statusCheckingFee: 'Vérification si Tebas a payé sa cotisation...',
    statusCalculating: 'Calcul de la probabilité de gagner à la loterie...',
    statusDeciphering: 'Tentative de décryptage de votre contrat FAI...',
    logStarted: "LANCEMENT DU PROTOCOLE AUTONOME 'TEBAS_WATCH'...",
    logDetecting: '> Détection du FAI et connectivité de base...',
    logIspFound: '> FAI détecté : ',
    logConnError: '> Erreur de connexion de base',
    logDnsCross: '> Exécution du recoupement DNS (DoH vs Local)...',
    logDnsGoogle: '> DNS Réel (Google) : ',
    logDnsPoisoned: '> ALERTE : DNS empoisonné détecté.',
    logDnsNoDoh: '> DoH indisponible, saut du recoupement DNS.',
    logLaunchingProbes: '> Lancement des sondes sur les objectifs critiques...',
    logIpBlocked: '> Cible {ip} : NE RÉPOND PAS (Blocage IP suspect)',
    logIpActive: '> Cible {ip} : ACTIVE',
    logAlertInterference: '!!! ALERTE D\'INTERFÉRENCE JUDICIAIRE !!!',
    logNoInternet: 'PAS D\'ACCÈS INTERNET',
    logClean: 'CONNEXION PROPRE. PROFITEZ.',
    logDiagError: 'ERREUR DE DIAGNOSTIC',
  },
};
