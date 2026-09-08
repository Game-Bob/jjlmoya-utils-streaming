import type { SEOSection } from '../../../types';
import { makeContent } from './content';

const faq = [
  { question: '¿Cómo coloca la calculadora una pausa publicitaria?', answer: 'Compara los minutos de contenido con la frecuencia elegida y coloca una pausa en el primer límite disponible después de ese punto. Nunca corta un bloque.' },
  { question: '¿Qué formato tienen los bloques de contenido?', answer: 'Escribe un bloque por línea como Nombre | minutos, por ejemplo Apertura | 15. El orden es la escaleta.' },
  { question: '¿Por qué la pausa puede llegar después de la frecuencia?', answer: 'La calculadora respeta los límites de tus bloques. Si un bloque supera la frecuencia, desplaza la pausa al siguiente límite y marca esa tensión.' },
  { question: '¿Sigue una regla publicitaria de una plataforma?', answer: 'No. Es un modelo de planificación basado en tu frecuencia, duración de pausa y estructura. Comprueba las reglas actuales de la plataforma, el contrato y la jurisdicción.' },
  { question: '¿La hora final incluye las pausas?', answer: 'Sí. Los minutos de contenido y de publicidad aparecen separados, pero la hora final suma todas las pausas programadas.' },
];
const howTo = [
  { name: 'Define el inicio y las reglas', text: 'Elige la hora de inicio, los minutos de contenido, la frecuencia entre pausas y la duración de cada pausa.' },
  { name: 'Escribe la escaleta', text: 'Introduce cada bloque como Nombre | minutos. Coloca límites donde el presentador pueda detenerse de forma natural.' },
  { name: 'Lee la línea temporal', text: 'Comprueba dónde caen las pausas, cuánto añaden al reloj y si un bloque largo retrasa el objetivo.' },
  { name: 'Copia el plan de producción', text: 'Revisa los avisos y copia la lista de horas para producción, moderación o notas de escena.' },
];
const seo: SEOSection[] = [
  { type: 'title', text: 'Planifica las pausas alrededor del programa', level: 2 },
  { type: 'paragraph', html: 'Un directo tiene dos relojes: los minutos dedicados al contenido y la hora real con pausas. Esta calculadora muestra ambos y calcula el final a partir de la escaleta, la frecuencia y la duración de cada pausa.' },
  { type: 'paragraph', html: 'Cuando el contador de contenido alcanza la frecuencia, la siguiente frontera adecuada recibe una pausa. Así puedes mover o acortar un bloque antes de empezar, o aceptar conscientemente el retraso.' },
  { type: 'title', text: 'Usa los límites como señales de producción', level: 2 },
  { type: 'paragraph', html: 'Los buenos momentos para parar suelen llegar después de una bienvenida, un cambio de tema, una partida o una interrupción prevista. Un bloque único y largo no ofrece un punto seguro; el aviso convierte ese problema editorial en una decisión visible.' },
  { type: 'list', items: ['Divide una entrevista larga en bienvenida, conversación y preguntas.', 'Deja el cierre como último bloque para no colocar una pausa después del final.', 'Compara el contenido con la hora final que incluye publicidad.', 'Entrega el plan a quien vaya a lanzar las pausas.'] },
  { type: 'title', text: 'Interpreta las tres señales de tiempo', level: 2 },
  { type: 'table', headers: ['Señal', 'Qué significa', 'Acción'], rows: [['Contenido', 'Minutos de tu escaleta', 'Comprueba que encaja con la duración prometida'], ['Tiempo publicitario', 'Minutos añadidos por las pausas', 'Avisa al equipo y al presentador de la interrupción prevista'], ['Final en directo', 'Inicio más contenido y pausas', 'Reserva correctamente el estudio o la entrega']] },
  { type: 'tip', title: 'No es una garantía de plataforma', html: 'El resultado es una escaleta local. No lanza anuncios ni sabe qué verá cada audiencia, y tampoco certifica contratos o normativa publicitaria. Revisa siempre las reglas actuales del destino.' },
  { type: 'title', text: 'Haz que el plan sirva en control', level: 2 },
  { type: 'paragraph', html: 'Copia el plan después de revisar los avisos. Las horas ayudan a preparar escenas, avisar a moderadores y proteger una sección importante. Si no aparece una pausa, crea una frontera editorial con sentido en vez de forzarla.' },
  { type: 'tip', title: 'Comprueba el reloj después del ensayo', html: 'Las conversaciones y las transiciones técnicas suelen crecer. Usa el cálculo como base y actualiza los minutos tras ensayar el cambio.' },
];
export const content = makeContent({
  slug: 'calculadora-horario-pausas-publicitarias-stream',
  title: 'Calculadora de pausas publicitarias para directos',
  description: 'Convierte tu escaleta de directo en un horario de pausas publicitarias y calcula la hora final real.',
  ui: {
    startTimeLabel: 'Hora de inicio del directo', startTimeHint: 'Cuándo empieza la emisión', streamDurationLabel: 'Minutos de contenido previstos', streamDurationHint: 'Duración del programa sin pausas', cadenceLabel: 'Frecuencia de pausa', cadenceHint: 'Coloca una pausa después de estos minutos de contenido', breakLengthLabel: 'Duración de la pausa', breakLengthHint: 'Minutos que se suman al reloj', segmentsLabel: 'Escaleta', segmentsHint: 'Una línea por bloque: Nombre | minutos', presetsLabel: 'Empieza con una estructura', presetQuick: 'Directo de dos horas', presetLong: 'Evento largo', presetInterview: 'Directo con entrevista', scheduleLabel: 'Línea temporal en emisión', scheduleHint: 'Las pausas caen en el primer límite disponible después de la frecuencia.', contentTotalLabel: 'Contenido', adsTotalLabel: 'Tiempo publicitario', plannedEndLabel: 'Final en directo', breaksLabel: 'Pausas', stateReady: 'Límites aprovechables', stateWarning: 'Revisa la tensión horaria', stateEmpty: 'Añade una escaleta', stateReadyText: 'Puedes entregar este horario como primera escaleta de producción.', stateWarningText: 'Hay una línea inválida o la frecuencia no coincide con un límite natural.', stateEmptyText: 'Añade dos o más bloques para que la calculadora coloque una pausa entre ellos.', copyLabel: 'Copiar escaleta', resetLabel: 'Restaurar ejemplo', copiedLabel: 'Escaleta copiada', copyErrorLabel: 'El navegador bloqueó la copia. Selecciona el horario y cópialo manualmente.', segmentKind: 'Contenido', breakKind: 'Pausa publicitaria', minutesShort: 'min', noEntriesText: 'Aquí aparecerá tu línea temporal.', invalidLineText: 'Revisa la línea {lines}. Usa Nombre | minutos.', plannedMismatchText: 'La escaleta difiere de la duración prevista en {difference}.', boundaryWarningText: 'No se ha colocado ninguna pausa porque la frecuencia se alcanza dentro de un bloque. Añade un límite o divide ese bloque.'
  }, seo, faq, howTo,
});
