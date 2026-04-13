import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SorteoUI } from '../ui';

const slug = 'sorteo';
const title = 'Sorteo Aleatorio de Nombres para Streaming';
const description =
  'Elije un ganador al azar de una lista de nombres. Herramienta de sorteos gratuita, rápida y visual para Twitch, YouTube y eventos.';

const faqData = [
  {
    question: '¿Es realmente aleatorio este sorteo?',
    answer:
      'Sí, utilizamos el algoritmo de aleatoriedad criptográfica del navegador (Web Crypto API) para asegurar que cada participante tenga exactamente las mismas probabilidades de ganar, sin sesgos ni manipulaciones.',
  },
  {
    question: '¿Puedo usar este sorteo en Twitch o YouTube?',
    answer:
      'Totalmente. Al ser una herramienta web, puedes capturar la ventana con OBS o compartir pantalla directamente. El diseño limpio y las animaciones están pensados para que el público vea el proceso con total transparencia.',
  },
  {
    question: '¿Cómo evito que alguien participe dos veces?',
    answer:
      'La herramienta tiene una función de "limpieza de duplicados" automática que detecta nombres idénticos o con pequeñas variaciones de espacios para asegurar que cada persona real cuente solo una vez.',
  },
  {
    question: '¿Puedo sacar varios ganadores a la vez?',
    answer:
      'Sí, puedes configurar el número de ganadores deseados antes de pulsar el botón. La herramienta listará a los afortunados de forma clara para que puedas mencionarlos en tu directo.',
  },
  {
    question: '¿Cuántos nombres puedo añadir a la lista?',
    answer:
      'No hay un límite estricto impuesto por la herramienta. Hemos optimizado el motor para manejar listas de miles de participantes sin problemas de rendimiento, lo que lo hace ideal incluso para sorteos masivos.',
  },
  {
    question: '¿Se guardan mis datos o la lista de participantes?',
    answer:
      'No, nunca. Tu privacidad es lo primero. Todo el proceso del sorteo se ejecuta localmente en tu navegador web. Los nombres que introduces nunca se envían a nuestros servidores ni se almacenan en ninguna base de datos.',
  },
];

const howToData = [
  {
    name: 'Preparar la lista de participantes',
    text: 'Copia la lista de nombres desde tu chat, Excel o red social y pégala en el cuadro de texto.',
  },
  {
    name: 'Configurar opciones de sorteo',
    text: 'Elige cuántos ganadores necesitas y si quieres filtrar duplicados o nombres vacíos.',
  },
  {
    name: 'Lanzar la mano inocente',
    text: 'Haz clic en el botón de sorteo. Una animación visual mantendrá la tensión antes de revelar al ganador.',
  },
  {
    name: 'Anunciar resultados',
    text: 'Copia los nombres de los ganadores para compartirlos en tus redes o chat de streaming.',
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
  inLanguage: 'es',
};

export const content: ToolLocaleContent<SorteoUI> = {
  slug,
  title,
  description,
  faq: faqData,
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
      text: 'Sorteo Aleatorio de Nombres y Lista de Participantes Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '¿Te preguntas cómo hacer un sorteo aleatorio online de forma rápida, segura y totalmente transparente? Nuestra herramienta gratuita de <strong>Sorteo de Nombres</strong> es la solución definitiva para elegir un ganador al azar en cuestión de segundos. Diseñada para ser simple, visual y efectiva, es perfecta para cualquier escenario donde necesites una "mano inocente" digital.',
    },
    {
      type: 'paragraph',
      html: 'Ya sea que estés gestionando un concurso en redes sociales, un sorteo masivo en tu canal de streaming o simplemente decidiendo quién saca la basura hoy, nuestro selector aleatorio garantiza una imparcialidad total gracias a algoritmos criptográficos modernos. <strong>Sin manipulaciones, sin sesgo, solo pura aleatoriedad.</strong>'
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
          title: 'Sorteos en Redes Sociales',
          description: 'Ideal para concursos de Instagram, Twitter (X) o Facebook. Simplemente copia los nombres de los comentarios y pégalos para elegir un ganador justo. La herramienta limpia duplicados automáticamente.',
        },
        {
          title: 'Streaming en Twitch / YouTube',
          description: 'Gracias a nuestro Modo Estudio con animaciones fluidas y sonidos integrados, puedes compartir tu pantalla directamente en OBS y ofrecer un espectáculo visual emocionante a tu audiencia mientras eliges ganadores en directo.',
        },
        {
          title: 'Dinámicas de Clase y Equipos',
          description: 'Profesores y líderes de equipo pueden usarla para formar grupos aleatorios, elegir quién expone primero o asignar tareas al azar con total transparencia y sin favoritismos.',
        },
        {
          title: 'Amigo Invisible y Eventos',
          description: 'Simplifica la organización de eventos familiares, sorteos de oficina o el Amigo Invisible eligiendo nombres al azar de forma instantánea sin necesidad de papeles ni logística complicada.',
        },
      ],
    },
    {
      type: 'title',
      text: '¿Por qué nuestra herramienta es diferente?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Criptografía Real:</strong> Usamos la Web Crypto API del navegador (estándar W3C) en lugar de generadores pseudoaleatorios débiles. Cada sorteo es matemáticamente imparcial.',
        '<strong>Sin Almacenamiento:</strong> Tus datos nunca abandonan tu navegador. No vendemos listas, no hacemos perfilado, no almacenamos nada. Puro procesamiento local.',
        '<strong>Diseño Visual:</strong> El modo cine y las animaciones hacen que cada sorteo sea un evento memorable. Perfecto para captura en OBS o transmisión directa.',
        '<strong>Manejo de Duplicados:</strong> Detecta automáticamente nombres repetidos o variantes (espacios extras, mayúsculas, etc.) para asegurar que cada persona real cuente una sola vez.',
      ],
    },
    {
      type: 'title',
      text: 'Cómo usar el sorteo paso a paso',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Paso 1 - Introduce los participantes:</strong> Pega tu lista de nombres en el cuadro de texto principal. La herramienta detecta automáticamente cada salto de línea como un participante diferente. ¿Tienes duplicados? No hay problema, la herramienta los limpia.',
        '<strong>Paso 2 - Personaliza:</strong> En la pestaña de configuración puedes activar la cuenta atrás para generar tensión, el efecto de confeti para celebrar, o activar la "lista negra" para excluir ciertos nombres.',
        '<strong>Paso 3 - ¡Sortear!</strong> Haz clic en el botón principal y nuestro motor generará una selección aleatoria criptográficamente segura. Los ganadores se mostrarán de forma clara y memorable.',
      ],
    },
    {
      type: 'title',
      text: 'Entradas Ponderadas: Dar Ventaja a Algunos Participantes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '¿Quieres premiar a tus suscriptores más fieles o dar más oportunidades a ciertos participantes? Nuestro sistema de <strong>Entradas Ponderadas</strong> es único y te permite asignar un "peso" o multiplicador a cualquier nombre sin tener que escribirlo varias veces.',
    },
    {
      type: 'tip',
      title: 'Cómo asignar pesos a los nombres',
      html: '<p>Utiliza un asterisco (*) o una "x" seguida del número de participaciones. Ejemplos:</p><ul><li><strong>"Juan * 5"</strong> - Juan compite como si fuera 5 personas</li><li><strong>"María x 10"</strong> - María tiene 10 veces más probabilidades</li><li><strong>"Pedro"</strong> - Sin símbolo = 1 entrada normal</li></ul><p>Esto es perfecto para sorteos donde quieres dar ventaja a suscriptores VIP o usuarios especiales.</p>',
    },
    {
      type: 'title',
      text: 'Privacidad y Seguridad Total',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A diferencia de otras herramientas online, <strong>no almacenamos tus datos</strong>. Todo el procesamiento de los nombres y la ejecución del sorteo ocurre localmente en tu propio navegador. Tus listas de participantes nunca viajan por la red ni se guardan en ningún servidor externo.',
    },
    {
      type: 'paragraph',
      html: '<strong>¿Qué significa esto?</strong> Tu lista de participantes es tuya y solo tuya. Cerrando la pestaña, desaparece. No hay cookies de rastreo, no hay perfiles de usuario, no hay base de datos central. Máxima privacidad garantizada para ti y para quienes participan en tus sorteos.',
    },
    {
      type: 'title',
      text: 'Transparencia Matemática',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Algunos se preguntarán: "¿Y si tú manipulas los resultados?" La respuesta es simple: <strong>no podemos</strong>. El código del sorteo es determinista y criptográfico. No hay variables ocultas, no hay "dedos en la escena".',
    },
    {
      type: 'paragraph',
      html: 'Cada ganador es el resultado directo del algoritmo Fisher-Yates Shuffle aplicado a tu lista exacta, usando entropía criptográfica real. Si quieres auditar el proceso, el código está disponible en GitHub para inspección pública.',
    },
  ],
  ui: {
    faqTitle: 'Preguntas Frecuentes',
    bibliographyTitle: 'Referencias Técnicas',
    title: 'Sorteo Aleatorio',
    totalParticipants: 'Total Participantes Únicos',
    ready: 'LISTO',
    participants: 'Participantes',
    settings: 'Configuración',
    importFile: 'Importar Archivo',
    clearAll: 'Borrar todo',
    placeholder: 'Escribe o pega los nombres aquí...\nJuan Pérez\nMaria García\n@usuario_twitch',
    onePerLine: '1 participante por línea',
    lines: 'líneas',
    filters: 'Filtros',
    allowDuplicates: 'Permitir Duplicados',
    winnerCount: 'Número de Ganadores',
    autoRemove: 'Auto-Eliminar Ganador',
    blacklist: 'Lista Negra (Excluir)',
    blacklistPlaceholder: 'Nombres prohibidos (uno por línea)...',
    blacklistInfo: 'Estos usuarios no entrarán en el sorteo.',
    sceneEffects: 'Efectos de Escena',
    countdown: 'Cuenta Atrás (3s)',
    confetti: 'Confeti de Victoria',
    zenMode: 'Modo Cine (Ocultar Panel)',
    waitingParticipants: 'Esperando participantes...',
    winner: 'GANADOR',
    reroll: 'Repetir Sorteo',
    history: 'Historial de esta sesión',
    noWinnersYet: 'Aún no hay ganadores...',
    startGiveaway: 'Iniciar Sorteo',
    studioHeader: 'LIVE STUDIO v2.0',
  },
};
