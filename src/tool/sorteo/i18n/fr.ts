import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SorteoUI } from '../ui';

const slug = 'tirage-au-sort';
const title = 'Tirage au Sort de Noms pour Streaming';
const description =
  'Choisissez un gagnant au hasard dans une liste de noms. Outil de tirage au sort gratuit, rapide et visuel pour Twitch, YouTube et événements.';

const faqData = [
  {
    question: 'Ce tirage au sort est-il vraiment aléatoire ?',
    answer:
      'Oui, nous utilisons l\'algorithme d\'aléa cryptographique du navigateur (Web Crypto API) pour garantir que chaque participant a exactement la même probabilité de gagner, sans biais ni manipulation.',
  },
  {
    question: 'Puis-je utiliser ce tirage sur Twitch ou YouTube ?',
    answer:
      'Absolument. En tant qu\'outil web, vous pouvez capturer la fenêtre avec OBS ou partager votre écran directement. Le design épuré et les animations sont conçus pour que le public voie le processus en toute transparence.',
  },
  {
    question: 'Comment empêcher quelqu\'un de participer deux fois ?',
    answer:
      'L\'outil dispose d\'une fonction de "nettoyage des doublons" automatique qui détecte les noms identiques ou avec de petites variations d\'espacement pour garantir que chaque personne réelle ne compte qu\'une seule fois.',
  },
  {
    question: 'Puis-je tirer plusieurs gagnants à la fois ?',
    answer:
      'Oui, vous pouvez configurer le nombre de gagnants souhaités avant de cliquer sur le bouton. L\'outil listera clairement les heureux élus pour que vous puissiez les mentionner dans votre flux en direct.',
  },
  {
    question: 'Combien de noms puis-je ajouter à la liste ?',
    answer:
      'Il n\'y a pas de limite stricte imposée par l\'outil. Nous avons optimisé le moteur pour gérer des listes de milliers de participants sans problèmes de performance, ce qui le rend idéal même pour les tirages massifs.',
  },
  {
    question: 'Mes données ou la liste des participants sont-elles sauvegardées ?',
    answer:
      'Non, jamais. Votre vie privée est notre priorité. Tout le processus de tirage au sort s\'exécute localement dans votre navigateur web. Les noms que vous saisissez ne sont jamais envoyés à nos serveurs ni stockés dans une base de données.',
  },
];

const howToData = [
  {
    name: 'Préparer la liste des participants',
    text: 'Copiez la liste des noms depuis votre chat, Excel ou réseau social et collez-la dans la zone de texte.',
  },
  {
    name: 'Configurer les options du tirage',
    text: 'Choisissez le nombre de gagnants dont vous avez besoin et si vous souhaitez filtrer les doublons ou les noms vides.',
  },
  {
    name: 'Lancer la main innocente',
    text: 'Cliquez sur le bouton de tirage. Une animation visuelle maintiendra la tension avant de révéler le gagnant.',
  },
  {
    name: 'Annoncer les résultats',
    text: 'Copiez les noms des gagnants pour les partager sur vos réseaux sociaux ou votre chat de streaming.',
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

export const content: ToolLocaleContent<SorteoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquemment Posées',
  faq: faqData,
  bibliographyTitle: 'Références Techniques',
  bibliography: [
    {
      name: 'Web Crypto API: getRandomValues()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues',
    },
    {
      name: 'Fisher-Yates Shuffle Algorithm',
      url: 'https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: 'Tirage au Sort de Noms et Liste de Participants en Ligne',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Vous vous demandez comment faire un tirage au sort en ligne rapidement, en toute sécurité et en toute transparence ? Notre outil gratuit de <strong>Tirage de Noms</strong> est la solution ultime pour choisir un gagnant au hasard en quelques secondes. Conçu pour être simple, visuel et efficace, il est parfait pour tout scénario où vous avez besoin d\'une "main innocente" numérique.',
    },
    {
      type: 'paragraph',
      html: 'Que vous gériez un concours sur les réseaux sociaux, un tirage au sort massif sur votre chaîne de streaming ou que vous décidiez simplement qui sort les poubelles aujourd\'hui, notre sélecteur aléatoire garantit une impartialité totale grâce à des algorithmes cryptographiques modernes. <strong>Aucune manipulation, aucun biais, juste de la pureté aléatoire.</strong>'
    },
    {
      type: 'title',
      text: 'Cas d\'Usage',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Tirages sur les Réseaux Sociaux',
          description: 'Idéal pour les concours Instagram, Twitter (X) ou Facebook. Copiez simplement les noms des commentaires et collez-les pour choisir un gagnant équitable. L\'outil nettoie automatiquement les doublons.',
        },
        {
          title: 'Streaming sur Twitch / YouTube',
          description: 'Grâce à notre Mode Studio avec des animations fluides et des sons intégrés, vous pouvez partager votre écran directement dans OBS et offrir un spectacle visuel passionnant à votre public tout en choisissant les gagnants en direct.',
        },
        {
          title: 'Dynamiques de Classe et d\'Équipe',
          description: 'Les enseignants et les chefs d\'équipe peuvent l\'utiliser pour former des groupes aléatoires, choisir qui expose en premier ou assigner des tâches au hasard en toute transparence et sans favoritisme.',
        },
        {
          title: 'Secret Santa et Événements',
          description: 'Simplifiez l\'organisation d\'événements familiaux, de tirages au sort de bureau ou de Secret Santa en choisissant des noms au hasard instantanément sans avoir besoin de papiers ni de logistique compliquée.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi notre outil est-il différent ?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Cryptographie Réelle :</strong> Nous utilisons la Web Crypto API du navigateur (norme W3C) au lieu de générateurs pseudo-aléatoires faibles. Chaque tirage au sort est mathématiquement impartial.',
        '<strong>Aucun Stockage :</strong> Vos données ne quittent jamais votre navigateur. Nous ne vendons pas de listes, nous ne vous profileurons pas, nous ne stockons rien. Pur traitement local.',
        '<strong>Design Visuel :</strong> Le mode cinéma et les animations rendent chaque tirage au sort mémorable. Parfait pour la capture OBS ou la diffusion en direct.',
        '<strong>Gestion des Doublons :</strong> Détecte automatiquement les noms répétés ou les variantes (espaces supplémentaires, majuscules, etc.) pour assurer que chaque personne réelle ne compte qu\'une seule fois.',
      ],
    },
    {
      type: 'title',
      text: 'Comment utiliser le tirage au sort étape par étape',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Étape 1 - Entrez les participants :</strong> Collez votre liste de noms dans la zone de texte principale. L\'outil détecte automatiquement chaque saut de ligne comme un participant différent. Vous avez des doublons ? Aucun problème, l\'outil les nettoie.',
        '<strong>Étape 2 - Personnalisez :</strong> Dans l\'onglet des paramètres, vous pouvez activer le compte à rebours pour générer de la tension, l\'effet de confettis pour célébrer, ou activer la "liste noire" pour exclure certains noms.',
        '<strong>Étape 3 - Tirez au sort !</strong> Cliquez sur le bouton principal et notre moteur générera une sélection aléatoire sécurisée par cryptographie. Les gagnants seront affichés de manière claire et mémorable.',
      ],
    },
    {
      type: 'title',
      text: 'Entrées Pondérées : Donner un Avantage à Certains Participants',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vous souhaitez récompenser vos abonnés les plus fidèles ou donner plus de chances à certains participants ? Notre système d\'<strong>Entrées Pondérées</strong> est unique et vous permet d\'assigner un "poids" ou un multiplicateur à n\'importe quel nom sans avoir à l\'écrire plusieurs fois.',
    },
    {
      type: 'tip',
      title: 'Comment assigner des poids aux noms',
      html: '<p>Utilisez un astérisque (*) ou un "x" suivi du nombre de participations. Exemples :</p><ul><li><strong>"Jean * 5"</strong> - Jean concourt comme s\'il était 5 personnes</li><li><strong>"Maria x 10"</strong> - Maria a 10 fois plus de chances</li><li><strong>"Pierre"</strong> - Sans symbole = 1 entrée normale</li></ul><p>C\'est parfait pour les tirages au sort où vous voulez donner un avantage aux abonnés VIP ou aux utilisateurs spéciaux.</p>',
    },
    {
      type: 'title',
      text: 'Confidentialité et Sécurité Totales',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Contrairement à d\'autres outils en ligne, <strong>nous ne stockons pas vos données</strong>. Tout le traitement des noms et l\'exécution du tirage au sort se font localement dans votre propre navigateur. Vos listes de participants ne voyagent jamais sur le réseau et ne sont enregistrées sur aucun serveur externe.',
    },
    {
      type: 'paragraph',
      html: '<strong>Qu\'est-ce que cela signifie ?</strong> Votre liste de participants vous appartient et vous seul. En fermant l\'onglet, elle disparaît. Pas de cookies de suivi, pas de profils utilisateur, pas de base de données centrale. Confidentialité maximale garantie pour vous et ceux qui participent à vos tirages au sort.',
    },
    {
      type: 'title',
      text: 'Transparence Mathématique',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Certains se poseront la question : "Et si vous manipuliez les résultats ?" La réponse est simple : <strong>nous ne pouvons pas</strong>. Le code du tirage au sort est déterministe et cryptographique. Pas de variables cachées, pas de "doigts sur la scène".',
    },
    {
      type: 'paragraph',
      html: 'Chaque gagnant est le résultat direct de l\'algorithme Fisher-Yates Shuffle appliqué à votre liste exacte, en utilisant l\'entropie cryptographique réelle. Si vous souhaitez auditer le processus, le code est disponible sur GitHub pour inspection publique.',
    },
  ],
  ui: {
    title: 'Tirage au Sort Aléatoire',
    totalParticipants: 'Total Participants Uniques',
    ready: 'PRÊT',
    participants: 'Participants',
    settings: 'Paramètres',
    importFile: 'Importer Fichier',
    clearAll: 'Tout effacer',
    placeholder: 'Tapez ou collez les noms ici...\nJean Dupont\nMarie Martin\n@utilisateur_twitch',
    onePerLine: '1 participant par ligne',
    lines: 'lignes',
    filters: 'Filtres',
    allowDuplicates: 'Autoriser les Doublons',
    winnerCount: 'Nombre de Gagnants',
    autoRemove: 'Auto-Supprimer le Gagnant',
    blacklist: 'Liste Noire (Exclure)',
    blacklistPlaceholder: 'Noms interdits (un par ligne)...',
    blacklistInfo: 'Ces utilisateurs ne participeront pas au tirage.',
    sceneEffects: 'Effets de Scène',
    countdown: 'Compte à Rebours (3s)',
    confetti: 'Confettis de Victoire',
    zenMode: 'Mode Ciné (Masquer Panel)',
    waitingParticipants: 'En attente de participants...',
    winner: 'GAGNANT',
    reroll: 'Relancer le Tirage',
    history: 'Historique de cette session',
    noWinnersYet: 'Pas encore de gagnants...',
    startGiveaway: 'Démarrer le Tirage',
  },
};
