import type { SEOSection } from '../../../types';
import { makeContent } from './content';

const faq = [
  { question: 'Comment le calculateur place-t-il une pause publicitaire ?', answer: "Il compare les minutes de contenu à la fréquence choisie et place une pause à la première limite disponible après ce point. Un bloc n'est jamais coupé." },
  { question: 'Quel format utiliser pour les blocs ?', answer: "Saisissez un bloc par ligne sous la forme Nom | minutes, par exemple Ouverture | 15. L'ordre forme votre conducteur." },
  { question: 'Pourquoi la pause arrive-t-elle après la fréquence ?', answer: 'Le calculateur respecte les limites de vos blocs. Si un bloc dépasse la fréquence, la pause est déplacée à la limite suivante et ce décalage est signalé.' },
  { question: 'Le calculateur applique-t-il une règle de plateforme ?', answer: "Non. C'est un modèle de préparation fondé sur votre fréquence, la durée de pause et la structure de l'émission. Vérifiez les règles actuelles de la plateforme, du contrat et du pays." },
  { question: "L'heure de fin inclut-elle les pauses ?", answer: "Oui. Le contenu et le temps publicitaire sont séparés, mais l'heure de fin additionne toutes les pauses prévues." },
];
const howTo = [
  { name: 'Définir le début et les règles', text: "Choisissez l'heure de début, les minutes de contenu, la fréquence et la durée de chaque pause." },
  { name: 'Saisir le conducteur', text: "Écrivez chaque bloc comme Nom | minutes. Placez les limites là où l'animateur peut s'arrêter naturellement." },
  { name: 'Lire la ligne du direct', text: 'Vérifiez les emplacements, le temps ajouté et le décalage éventuel causé par un bloc long.' },
  { name: 'Copier la feuille de conduite', text: 'Relisez les alertes puis copiez la liste horodatée pour la production, la modération ou les scènes.' },
];
const seo: SEOSection[] = [
  { type: 'title', text: "Planifier les pauses autour de l'émission", level: 2 },
  { type: 'paragraph', html: "Un direct possède deux horloges: les minutes consacrées au contenu et l'heure réelle avec les pauses. Ce calculateur les garde visibles et calcule la fin à partir du conducteur, de la fréquence et de la durée des pauses." },
  { type: 'paragraph', html: 'Quand le compteur de contenu atteint la fréquence, la prochaine limite adaptée reçoit une pause. Vous pouvez donc déplacer ou raccourcir un bloc avant le direct, ou accepter le décalage en connaissance de cause.' },
  { type: 'title', text: 'Utiliser les limites comme repères de production', level: 2 },
  { type: 'paragraph', html: "Les bons moments se trouvent après un accueil, un changement de sujet, une partie ou une interruption prévue. Un seul bloc long ne fournit pas de point sûr ; l'alerte transforme ce problème éditorial en décision concrète." },
  { type: 'list', items: ["Séparer une longue interview en accueil, conversation et questions.", 'Garder la conclusion comme dernier bloc.', "Comparer le contenu avec l'heure de fin qui inclut les pauses.", 'Donner la feuille à la personne qui déclenche les pauses.'] },
  { type: 'title', text: 'Lire les trois signaux de temps', level: 2 },
  { type: 'table', headers: ['Signal', 'Signification', 'Action'], rows: [['Contenu', 'Minutes du conducteur', 'Vérifier la durée éditoriale promise'], ['Temps publicitaire', 'Minutes ajoutées par les pauses', "Prévenir l'animateur et la production"], ['Fin du direct', 'Début plus contenu et pauses', 'Réserver le créneau de studio ou de relais']] },
  { type: 'tip', title: "Ce n'est pas une garantie de plateforme", html: "Le résultat est un conducteur local. Il ne déclenche pas de publicité et ne certifie ni la diffusion, ni un contrat, ni la réglementation. Vérifiez les règles actuelles de votre destination." },
  { type: 'title', text: 'Rendre le plan utile en régie', level: 2 },
  { type: 'paragraph', html: 'Copiez le plan après avoir lu les alertes. Les horaires servent à préparer les scènes, prévenir les modérateurs et protéger une séquence importante. Sans pause, créez plutôt une limite éditoriale naturelle.' },
  { type: 'tip', title: "Vérifier l'horloge après la répétition", html: 'Les échanges et les transitions techniques durent souvent plus longtemps. Utilisez ce calcul comme base et actualisez les minutes après la répétition.' },
];
export const content = makeContent({
  slug: 'calculateur-planning-pauses-publicitaires-stream',
  title: 'Calculateur de pauses publicitaires pour stream',
  description: "Transformez votre conducteur de stream en planning de pauses publicitaires et calculez l'heure réelle de fin.",
  ui: {
    startTimeLabel: 'Heure de début du direct', startTimeHint: 'Quand le stream commence', streamDurationLabel: 'Minutes de contenu prévues', streamDurationHint: "Durée de l'émission sans pauses", cadenceLabel: 'Fréquence des pauses', cadenceHint: 'Placer une pause après ces minutes de contenu', breakLengthLabel: 'Durée de la pause', breakLengthHint: "Minutes ajoutées à l'horloge", segmentsLabel: 'Conducteur', segmentsHint: 'Une ligne par bloc: Nom | minutes', presetsLabel: 'Commencer avec une structure', presetQuick: 'Direct de deux heures', presetLong: 'Événement long', presetInterview: 'Stream interview', scheduleLabel: 'Ligne du direct', scheduleHint: 'Les pauses arrivent à la première limite disponible après la fréquence.', contentTotalLabel: 'Contenu', adsTotalLabel: 'Temps publicitaire', plannedEndLabel: 'Fin du direct', breaksLabel: 'Pauses', stateReady: 'Limites disponibles', stateWarning: 'Vérifier la tension horaire', stateEmpty: 'Ajouter un conducteur', stateReadyText: 'Le planning peut servir de première feuille de conduite.', stateWarningText: 'Une ligne est invalide ou la fréquence ne rencontre pas de limite naturelle.', stateEmptyText: 'Ajoutez au moins deux blocs pour placer une pause entre eux.', copyLabel: 'Copier le conducteur', resetLabel: "Restaurer l'exemple", copiedLabel: 'Conducteur copié', copyErrorLabel: 'La copie est bloquée. Sélectionnez le planning et copiez-le manuellement.', segmentKind: 'Contenu', breakKind: 'Pause publicitaire', minutesShort: 'min', noEntriesText: 'Votre ligne du direct apparaîtra ici.', invalidLineText: 'Vérifiez la ligne {lines}. Utilisez Nom | minutes.', plannedMismatchText: 'Le conducteur diffère de la durée prévue de {difference}.', boundaryWarningText: 'Aucune pause: la fréquence est atteinte dans un seul bloc. Ajoutez une limite ou divisez ce bloc.'
  }, seo, faq, howTo,
});
