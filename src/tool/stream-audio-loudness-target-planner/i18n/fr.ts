import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import type { StreamAudioLoudnessLocaleContent } from "../entry";
import type { StreamAudioLoudnessUI } from "../ui";
import { bibliography } from "../bibliography";

const title = "Planificateur de cibles de loudness pour le streaming";
const description =
  "Calculez une correction de gain, vérifiez la marge de True Peak et préparez une cible de loudness pour le streaming audio.";
const faq = [
  {
    question: "Que signifie la correction de gain ?",
    answer:
      "C est la cible en LUFS moins le loudness intégré mesuré. Une valeur positive suggère une hausse et une valeur négative une baisse du gain.",
  },
  {
    question: "Pourquoi afficher LUFS et True Peak ensemble ?",
    answer:
      "Les LUFS décrivent le niveau moyen du programme et le True Peak son pic maximal estimé. Les deux indiquent si une correction garde assez de marge.",
  },
  {
    question: "Les cibles de plateforme sont-elles officielles ?",
    answer:
      "Non. Ce sont des références de planification modifiables. Vérifiez toujours la consigne actuelle de votre destination.",
  },
  {
    question: "Que signifie la ligne à moins 1 dBTP ?",
    answer:
      "C est un seuil d alerte prudent. Si le pic projeté la dépasse, prévoyez une limitation ou une nouvelle mesure.",
  },
  {
    question: "Puis-je analyser un fichier dans le navigateur ?",
    answer:
      "Oui. Les fichiers audio et vidéo compatibles sont analysés localement, mais le résultat reste une estimation à confirmer avec un mesureur conforme.",
  },
  {
    question: "Que faire en cas de risque de pic ?",
    answer:
      "Réécoutez le programme complet et utilisez un limiteur transparent si nécessaire. Ne décidez pas sur un extrait court.",
  },
];
const howTo = [
  {
    name: "Charger un fichier ou saisir les mesures",
    text: "Déposez un fichier compatible ou saisissez les LUFS intégrés et le True Peak d une analyse complète.",
  },
  {
    name: "Observer la dynamique",
    text: "Utilisez le Loudness Range et l alerte de pic comme signaux pour écouter puis mesurer à nouveau.",
  },
  {
    name: "Choisir la cible",
    text: "Sélectionnez Web, Broadcast, Game Audio ou une cible personnalisée, puis ajustez les valeurs de plateforme.",
  },
  {
    name: "Contrôler la sortie",
    text: "Si besoin, créez une WAV locale avec limiteur de sécurité et mesurez-la entièrement avant livraison.",
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
  fileAnalysisLabel: "Analyser un fichier localement",
  fileAnalysisHint:
    "Déposez un fichier audio ou vidéo. Il reste dans cet onglet.",
  fileDropLabel: "Déposez un fichier WAV, MP3 ou MP4",
  fileTypesLabel: "WAV · MP3 · MP4 · WebM",
  fileIdleText: "Aucun fichier chargé. La saisie manuelle reste disponible.",
  fileReadingText: "Lecture de {name}...",
  fileReadyText: "Prêt: {name}",
  fileErrorText:
    "Ce navigateur ne peut pas décoder ce fichier. Essayez WAV ou MP3.",
  useAnalysisLabel: "Utiliser ces mesures",
  analysisSummaryLabel: "Estimation du navigateur",
  measuredLufsLabel: "Loudness intégré mesuré",
  measuredLufsHint: "Utilisez un programme complet, pas un pic instantané.",
  truePeakLabel: "True Peak mesuré",
  truePeakHint: "Utilisez la valeur dBTP de la même analyse.",
  targetProfileLabel: "Profil cible",
  targetWebLabel: "Référence Web -14",
  targetBroadcastLabel: "Broadcast -23",
  targetGameLabel: "Audio de jeu -23",
  targetCustomLabel: "Cible personnalisée",
  customTargetLabel: "Loudness cible",
  contentTypeLabel: "Type de contenu",
  contentVoiceLabel: "Voix",
  contentGameplayLabel: "Gameplay",
  contentMusicLabel: "Musique",
  sceneLabel: "Mesure d émission",
  currentLabel: "Lecture actuelle",
  targetLabel: "Cible",
  peakCeilingLabel: "Ligne d alerte de pic",
  correctionLabel: "Correction de gain",
  projectedPeakLabel: "Pic projeté",
  headroomLabel: "Marge de pic",
  stateReady: "Prêt à vérifier",
  stateBoost: "Gain à augmenter",
  stateTrim: "Gain à réduire",
  statePeakRisk: "Risque de pic",
  stateReadyText:
    "La cible est proche et le pic projeté reste sous la ligne d alerte.",
  stateBoostText:
    "La cible demande plus de gain. Vérifiez le pic projeté avant d appliquer la correction.",
  stateTrimText:
    "La lecture est plus forte que la cible. Réduisez le gain avant le prochain export.",
  statePeakRiskText:
    "La correction franchirait la ligne d alerte. Ne l appliquez pas sans vérification.",
  guidanceLabel: "Prochaine vérification",
  webGuidance:
    "Les cibles Web sont des repères de planification, pas des règles universelles.",
  broadcastGuidance:
    "Broadcast est une référence de loudness, pas un test d acceptation du stream.",
  gameGuidance:
    "Le son de jeu change vite. Vérifiez séparément les effets et la voix après le réglage.",
  customGuidance:
    "Une cible personnalisée doit venir de la spécification de destination.",
  voiceGuidance:
    "Pour la voix, réécoutez les plosives, le bruit de salle et la respiration du limiteur.",
  gameplayGuidance:
    "Pour le gameplay, vérifiez les effets soudains et le chat vocal.",
  musicGuidance:
    "Pour la musique, vérifiez la dynamique et l action du limiteur sur tout le programme.",
  meterAria:
    "Échelle de loudness de moins 36 à 0 LUFS montrant la lecture, la cible et la ligne d alerte à moins 1 dBTP.",
  resetLabel: "Rétablir les valeurs d exemple",
  noteLabel: "Garder le modèle honnête.",
  noteText:
    "L analyse et l export restent dans le navigateur, mais les estimations ne remplacent pas un mesureur conforme et doivent être vérifiées avant livraison.",
  lraLabel: "Contrôle de dynamique",
  lraWaiting: "Chargez un fichier pour estimer",
  lraWide: "Large: vérifiez les passages faibles",
  lraBalanced: "Modérée: écoutez en contexte",
  lraNarrow: "Étroite: vérifiez la compression",
  limiterLabel: "Limiteur de pic nécessaire",
  limiterWaiting: "Calculé avec les mesures",
  limiterNone: "Aucune coupe supplémentaire",
  limiterRequired: "Limitez {amount} dB pour atteindre le plafond",
  platformPreviewLabel: "Aperçu par plateforme",
  platformPreviewHint:
    "Modifiez la cible de planification. Un résultat négatif prédit une baisse à la lecture, pas une réécriture du fichier.",
  platformTargetLabel: "Cible",
  platformTrim: "Baisse prévue {amount}",
  platformNoTrim: "Aucune baisse prévue",
  outputLabel: "Créer une copie traitée",
  outputHint:
    "Applique le gain et un limiteur de sécurité du navigateur, puis exporte une WAV. Mesurez-la à nouveau.",
  outputSettingsLabel: "Chaîne suggérée",
  obsPresetLabel: "OBS",
  dawPresetLabel: "DAW",
  outputProcessLabel: "Rendre la WAV localement",
  outputDownloadLabel: "Télécharger la WAV traitée",
  outputProcessing: "Rendu local de la WAV...",
  outputWaiting: "Chargez un fichier pour activer l export.",
  outputReady: "Votre WAV locale est prête à télécharger.",
  outputError: "Le navigateur n a pas pu rendre ce fichier.",
  youtubeLabel: "YouTube",
  spotifyLabel: "Spotify",
  twitchLabel: "Twitch",
  tiktokLabel: "TikTok",
};
export const content: StreamAudioLoudnessLocaleContent = {
  slug: "planificateur-cible-loudness-audio-streaming",
  title,
  description,
  ui,
  seo: [
    { type: "title", text: "Lire ensemble les LUFS et le True Peak", level: 2 },
    {
      type: "paragraph",
      html: "Le loudness intégré décrit le niveau moyen d un programme complet. Le True Peak montre le pic maximal estimé entre les échantillons. Les deux mesures sont utiles car une source faible peut manquer de marge après une hausse.",
    },
    {
      type: "paragraph",
      html: "Le planificateur soustrait les LUFS mesurés de la cible puis ajoute cette correction au pic. C est un premier calcul explicable, pas une certification du fichier traité.",
    },
    {
      type: "title",
      text: "Choisir une cible sans fausse précision",
      level: 2,
    },
    {
      type: "paragraph",
      html: "L aperçu par plateforme utilise des cibles modifiables. Il indique une baisse attendue pour une source plus forte et ne reproduit pas chaque codec ou lecteur.",
    },
    {
      type: "table",
      headers: ["Lecture", "Correction", "Décision"],
      rows: [
        ["-18 LUFS vers -14 LUFS", "+4 dB", "Vérifier le pic après la hausse"],
        [
          "-14.5 LUFS vers -14 LUFS",
          "+0.5 dB",
          "Faire une mesure de comparaison",
        ],
        ["-10 LUFS vers -14 LUFS", "-4 dB", "Réduire puis mesurer à nouveau"],
      ],
    },
    { type: "title", text: "Ce que dit vraiment l alerte de pic", level: 2 },
    {
      type: "paragraph",
      html: "Si le pic projeté dépasse la ligne d alerte, la correction demande probablement un limiteur ou moins de gain. Mesurez toujours le programme complet après traitement.",
    },
    {
      type: "tip",
      title: "Traiter la correction comme une consigne de test",
      html: "Appliquez le réglage de façon contrôlée, écoutez ensuite la voix, les effets et la musique en contexte, puis vérifiez la nouvelle mesure.",
    },
    { type: "title", text: "Vérification pratique avant le direct", level: 2 },
    {
      type: "list",
      items: [
        "Chargez le fichier ou saisissez des mesures fiables.",
        "Regardez la dynamique et l alerte de pic avec la correction.",
        "Vérifiez les cibles modifiables de chaque plateforme.",
        "Exportez une WAV et mesurez le résultat du début à la fin.",
        "Évaluez la voix, la musique et les effets, pas seulement un chiffre.",
      ],
    },
    {
      type: "paragraph",
      html: "Le type de contenu change l écoute finale, pas le calcul: la voix, les effets et la musique demandent des contrôles différents.",
    },
    {
      type: "tip",
      title: "Ce que le planificateur ne certifie pas",
      html: "L estimation du navigateur ne remplace pas libebur128 ni un mesureur broadcast. Elle ne garantit ni le codec ni la conformité de la destination.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
};
