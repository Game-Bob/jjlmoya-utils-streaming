import { createLocalizedContent } from '../locale-content';

export const content = createLocalizedContent({
  language: 'es',
  slug: 'calculadora-bitrate-almacenamiento-video',
  title: 'Calculadora de Bitrate y Almacenamiento de Video',
  description: 'Estima el almacenamiento de video, el tiempo por fotograma y niveles prácticos de bitrate para streaming o grabación.',
  ui: {
    presetLabel: 'Empieza con una escena', presetFast: 'Stream web rápido', presetUpload: 'Directo diario', presetArchive: 'Archivo 4K',
    resolutionLabel: 'Resolución', frameRateLabel: 'Fotogramas por segundo', codecLabel: 'Códec', bitrateLabel: 'Bitrate de video', durationLabel: 'Duración de la sesión', copiesLabel: 'Copias guardadas', minutesLabel: 'minutos', copiesShort: 'copias',
    h264: 'H.264', h265: 'H.265', av1: 'AV1', codecNote: 'La eficiencia del códec cambia la lectura de calidad, no el cálculo del almacenamiento.', sceneLabel: 'De la señal al almacenamiento', signalSource: 'Imagen', codecGate: 'Codificación', storageReel: 'Almacenamiento', qualityEstimate: 'Lectura de calidad', storageEstimate: 'Almacenamiento estimado', perCopy: 'Una copia', allCopies: 'Todas las copias', perHour: 'Por hora', frameTime: 'Tiempo por fotograma', dataPerFrame: 'Datos por fotograma', comparisonLabel: 'Comparativa de almacenamiento', lean: 'Ligero', balanced: 'Equilibrado', crisp: 'Nítido', qualityLean: 'Ligero y compacto', qualityBalanced: 'Señal equilibrada', qualityStrong: 'Buen detalle', qualityExcellent: 'Mucho margen', qualityAggressive: 'Compresión agresiva', qualityGuidance: 'Una estimación visual para comparar ajustes.', capacityLight: 'Huella de almacenamiento ligera', capacityMedium: 'Huella de almacenamiento media', capacityHeavy: 'Huella de almacenamiento alta', capacityNote: 'El estado depende del total de copias mostrado arriba.', reset: 'Restablecer valores', localNote: 'Funciona localmente en este navegador. No se sube nada.', assumptionTitle: 'Leer los supuestos', assumptionText: 'El almacenamiento usa gigabytes decimales y el bitrate de video introducido. No añade audio, sobrecarga del contenedor, picos de bitrate variable ni relleno del sistema de archivos.', warningText: 'Los niveles de calidad son heurísticas de planificación. El movimiento, el grano, los fotogramas clave, el preset del codificador, la transcodificación y la red pueden cambiar el resultado real.', readyText: 'Cambia un valor para redibujar la señal.', calculateAria: 'Actualizar el plan de video',
  },
  faq: [
    { question: '¿Este planificador sube o inspecciona mi video?', answer: 'No. Solo usa los valores que introduces en el navegador. No sube archivos, no inspecciona una cámara ni consulta ningún servicio de streaming.' },
    { question: '¿Cómo se calcula el almacenamiento?', answer: 'Se multiplica el bitrate por la duración y se divide entre ocho para convertir bits en bytes. El resultado usa gigabytes decimales y el campo de copias multiplica la estimación individual.' },
    { question: '¿Qué significa la lectura de calidad?', answer: 'Es una regla orientativa basada en píxeles, fotogramas por segundo, bitrate y un factor amplio de eficiencia del códec. No promete calidad visual porque también importan el movimiento, el grano y los ajustes del codificador.' },
    { question: '¿Por qué cambia el mismo bitrate con otra resolución o FPS?', answer: 'Una resolución mayor tiene más píxeles y una frecuencia mayor envía más fotogramas cada segundo. Más información visual compite así por el mismo bitrate.' },
    { question: '¿Puedo usar el resultado como requisito de una plataforma?', answer: 'Úsalo para planificar capacidad y comparar escenarios. Los requisitos cambian, así que revisa la guía actual del destino y deja margen de subida para un directo.' },
  ],
  howTo: [
    { name: 'Elige el formato de imagen', text: 'Selecciona la resolución y los fotogramas por segundo que correspondan al directo o grabación que vas a crear.' },
    { name: 'Configura la señal', text: 'Elige el códec e introduce el bitrate de video en megabits por segundo. Usa un preset si necesitas un punto de partida.' },
    { name: 'Describe la sesión', text: 'Indica la duración en minutos y cuántas copias quieres conservar, editar o entregar.' },
    { name: 'Lee la compensación', text: 'Compara los niveles ligero, equilibrado y nítido para ver cómo cambia el almacenamiento antes de grabar.' },
  ],
  seo: [
    { type: 'title', text: 'Calcula el almacenamiento de video antes de emitir o grabar', level: 2 },
    { type: 'paragraph', html: 'Una calculadora de bitrate de video resulta útil cuando una sesión necesita un plan de almacenamiento realista. Introduce bitrate, duración y copias para conocer la capacidad necesaria y compara tres niveles para el mismo formato de imagen.' },
    { type: 'title', text: 'Qué calcula el planificador', level: 3 },
    { type: 'list', items: ['<strong>Almacenamiento:</strong> bitrate por tiempo, convertido de bits a gigabytes decimales y multiplicado por las copias.', '<strong>Tiempo por fotograma:</strong> los milisegundos disponibles según los FPS y una estimación de datos por fotograma.', '<strong>Lectura de calidad:</strong> una comparación de píxeles por fotograma ajustada con un factor de eficiencia del códec.'] },
    { type: 'title', text: 'Cómo cambian la compensación la resolución y los FPS', level: 3 },
    { type: 'paragraph', html: 'La resolución aumenta los píxeles de cada fotograma y los FPS aumentan la cantidad de fotogramas por segundo. Si el bitrate no cambia, cada fotograma recibe menos datos y la compresión tiene más trabajo.' },
    { type: 'tip', title: 'Deja margen en un directo', html: 'Trata el bitrate de video como la carga principal, no como toda la capacidad de conexión. Reserva espacio para audio, protocolo y variaciones de red, y prueba una escena con movimiento parecido.' },
    { type: 'title', text: 'Usa la guía de la plataforma para el ajuste final', level: 3 },
    { type: 'paragraph', html: 'Este planificador es neutral respecto a plataformas. YouTube publica rangos por resolución y frecuencia de fotogramas. Comprueba esas reglas actuales para validar el escenario que has modelado aquí.' },
    { type: 'title', text: 'Por qué el resultado de almacenamiento es una estimación', level: 3 },
    { type: 'paragraph', html: 'Un bitrate nominal no describe todos los bytes del archivo final. El bitrate variable, el audio, los metadatos del contenedor, los fotogramas clave, la transcodificación y las unidades del sistema pueden cambiar el tamaño.' },
  ],
});
