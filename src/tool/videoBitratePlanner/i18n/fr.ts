import { createLocalizedContent } from '../locale-content';

export const content = createLocalizedContent({
  language: 'fr',
  slug: 'calculateur-debit-stockage-video',
  title: 'Calculateur de Débit et de Stockage Vidéo',
  description: 'Estimez le stockage vidéo, le temps par image et des niveaux de débit pratiques pour le streaming ou l enregistrement.',
  ui: {
    presetLabel: 'Commencer avec une scène', presetFast: 'Stream web rapide', presetUpload: 'Direct quotidien', presetArchive: 'Archive 4K',
    resolutionLabel: 'Résolution', frameRateLabel: 'Images par seconde', codecLabel: 'Codec', bitrateLabel: 'Débit vidéo', durationLabel: 'Durée de session', copiesLabel: 'Copies conservées', minutesLabel: 'minutes', copiesShort: 'copies',
    h264: 'H.264', h265: 'H.265', av1: 'AV1', codecNote: 'L efficacité du codec modifie la lecture de qualité, pas le calcul du stockage.', sceneLabel: 'Du signal au stockage', signalSource: 'Image', codecGate: 'Encodage', storageReel: 'Stockage', qualityEstimate: 'Lecture de qualité', storageEstimate: 'Stockage estimé', perCopy: 'Une copie', allCopies: 'Toutes les copies', perHour: 'Par heure', frameTime: 'Temps par image', dataPerFrame: 'Données par image', comparisonLabel: 'Comparaison du stockage', lean: 'Léger', balanced: 'Équilibré', crisp: 'Net', qualityLean: 'Léger et compact', qualityBalanced: 'Signal équilibré', qualityStrong: 'Détails solides', qualityExcellent: 'Marge généreuse', qualityAggressive: 'Compression forte', qualityGuidance: 'Une estimation visuelle pour comparer les réglages.', capacityLight: 'Faible empreinte de stockage', capacityMedium: 'Empreinte moyenne', capacityHeavy: 'Forte empreinte de stockage', capacityNote: 'Le statut dépend du total de copies affiché ci-dessus.', reset: 'Réinitialiser les valeurs', localNote: 'Fonctionne localement dans ce navigateur. Rien n est envoyé.', assumptionTitle: 'Lire les hypothèses', assumptionText: 'Le stockage utilise des gigaoctets décimaux et le débit vidéo saisi. L audio, la surcharge du conteneur, les pics de débit variable et le remplissage du système ne sont pas ajoutés.', warningText: 'Les niveaux de qualité sont des repères de planification. Le mouvement, le grain, les images clés, le preset d encodeur, la transcodification et le réseau peuvent changer le résultat réel.', readyText: 'Modifiez une valeur pour redessiner le signal.', calculateAria: 'Mettre à jour le plan vidéo',
  },
  faq: [
    { question: 'Ce planificateur charge-t-il ou inspecte-t-il ma vidéo ?', answer: 'Non. Il utilise uniquement les valeurs saisies dans le navigateur. Il n envoie aucun fichier, n inspecte pas de caméra et ne consulte aucun service de streaming.' },
    { question: 'Comment le stockage est-il calculé ?', answer: 'Le débit est multiplié par la durée puis divisé par huit pour convertir les bits en octets. Le résultat utilise des gigaoctets décimaux et le nombre de copies multiplie l estimation.' },
    { question: 'Que signifie la lecture de qualité ?', answer: 'C est une règle indicative fondée sur les pixels, les images par seconde, le débit et un facteur général d efficacité du codec. Elle ne garantit pas la qualité car le mouvement, le grain et l encodeur comptent aussi.' },
    { question: 'Pourquoi le même débit change-t-il avec une autre résolution ou fréquence ?', answer: 'Une résolution supérieure contient plus de pixels et une fréquence supérieure envoie plus d images chaque seconde. Davantage d informations visuelles se disputent donc le même débit.' },
    { question: 'Puis-je utiliser le résultat comme exigence de plateforme ?', answer: 'Utilisez-le pour planifier la capacité et comparer des scénarios. Les exigences changent, vérifiez donc les recommandations actuelles de la destination et gardez une marge réseau pour un direct.' },
  ],
  howTo: [
    { name: 'Choisir le format de l image', text: 'Sélectionnez la résolution et la fréquence qui correspondent au stream ou à l enregistrement prévu.' },
    { name: 'Régler le signal', text: 'Choisissez le codec et saisissez le débit vidéo en mégabits par seconde. Utilisez un preset pour commencer rapidement.' },
    { name: 'Décrire la session', text: 'Saisissez la durée en minutes et le nombre de copies à conserver, monter ou livrer.' },
    { name: 'Lire le compromis', text: 'Comparez les niveaux léger, équilibré et net pour voir l évolution du stockage avant la session.' },
  ],
  seo: [
    { type: 'title', text: 'Estimer le stockage vidéo avant de diffuser ou enregistrer', level: 2 },
    { type: 'paragraph', html: 'Un calculateur de débit vidéo aide à préparer un stockage réaliste pour une session. Saisissez le débit, la durée et les copies, puis comparez trois niveaux de signal pour le même format d image.' },
    { type: 'title', text: 'Ce que le planificateur calcule', level: 3 },
    { type: 'list', items: ['<strong>Stockage :</strong> débit multiplié par le temps, converti des bits en gigaoctets décimaux et multiplié par les copies.', '<strong>Temps par image :</strong> les millisecondes disponibles selon la fréquence et une estimation des données par image.', '<strong>Lecture de qualité :</strong> une comparaison des pixels par image ajustée par un facteur d efficacité du codec.'] },
    { type: 'title', text: 'Comment la résolution et la fréquence changent le compromis', level: 3 },
    { type: 'paragraph', html: 'La résolution augmente les pixels de chaque image et la fréquence augmente le nombre d images par seconde. Si le débit reste fixe, chaque image reçoit moins de données et la compression devient plus exigeante.' },
    { type: 'tip', title: 'Garder une marge pour le direct', html: 'Considérez le débit vidéo comme la charge principale, pas comme toute la capacité de la connexion. Gardez de la place pour l audio, le protocole et les variations du réseau, puis testez une scène similaire.' },
    { type: 'title', text: 'Utiliser les recommandations de la plateforme', level: 3 },
    { type: 'paragraph', html: 'Ce planificateur reste indépendant des plateformes. YouTube publie des plages de débit selon la résolution et la fréquence. Vérifiez les règles actuelles de votre destination pour valider le scénario.' },
    { type: 'title', text: 'Pourquoi le résultat reste une estimation', level: 3 },
    { type: 'paragraph', html: 'Un débit nominal ne décrit pas chaque octet du fichier final. Le débit variable, l audio, les métadonnées, les images clés, la transcodification et les unités du système peuvent modifier la taille.' },
  ],
});
