import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TebasCheckUI } from '../types';

const slug = 'tebas-check';
const title = 'Detector de Bloqueos Judiciales Tebas Check';
const description = 'Herramienta de diagnóstico para detectar bloqueos ilegítimos de IPs compartidas de Cloudflare por parte de operadoras españolas.';

const faqData = [
  {
    question: '¿Qué es el Tebas-Check?',
    answer: 'Es una herramienta de diagnóstico que intenta conectar con IPs conocidas de Cloudflare que han sido bloqueadas judicialmente en España para impedir el acceso a retransmisiones piratas. El problema es que al bloquear una IP compartida, se "rompen" miles de sitios web legítimos.',
  },
  {
    question: '¿Por qué mi operadora bloquea una IP de Cloudflare?',
    answer: 'Debido a medidas cautelares dinámicas donde las operadoras deben bloquear IPs de servidores que supuestamente emiten contenido protegido. Al usar Cloudflare (CDN), muchas webs comparten la misma IP, causando daños colaterales a usuarios inocentes.',
  },
  {
    question: '¿Cómo funciona el test?',
    answer: 'Intentamos cargar un pequeño recurso desde las IPs señaladas como bloqueadas. Si la conexión falla por "Timeout" o reset de la conexión solo en esas IPs, es un indicador claro de que tu operadora está aplicando un filtrado por IP.',
  },
  {
    question: '¿Puedo saltarme este bloqueo?',
    answer: 'Los bloqueos por IP son difíciles de saltar solo con cambio de DNS. La solución suele pasar por usar una VPN, el navegador Tor, o esperar a que Cloudflare asigne una nueva IP al servicio legítimo que intentas visitar.',
  },
];

const howToData = [
  {
    name: 'Desactivar VPN o Proxies',
    text: 'Para que el test sea real, debes usar la conexión directa de tu router (Fibra o 4G/5G) sin capas intermedias.',
  },
  {
    name: 'Iniciar el escaneo',
    text: 'Pulsa el botón de diagnóstico. La herramienta enviará paquetes de prueba a las IPs bajo sospecha de bloqueo.',
  },
  {
    name: 'Interpretar los resultados',
    text: 'Si ves resultados en rojo, significa que esa IP es inalcanzable. Si es verde, tu tráfico fluye con normalidad.',
  },
  {
    name: 'Generar reporte',
    text: 'Puedes usar los resultados para reportar la incidencia a tu operadora si están bloqueando servicios legítimos.',
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

export const content: ToolLocaleContent<TebasCheckUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography: [
    {
      name: 'Cloudflare: Understanding IP Blocking',
      url: 'https://www.cloudflare.com/learning/network-layer/what-is-ip-blocking/',
    },
    {
      name: 'Jurisprudencia sobre bloqueos dinámicos en España',
      url: 'https://www.poderjudicial.es/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  seo: [
    {
      type: 'title',
      text: '¿Por qué ha dejado de funcionar todo?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bienvenido al maravilloso mundo de la <strong>"Justicia Preventiva"</strong>. Si estás aquí un domingo por la tarde y sitios web legítimos han dejado de cargar mientras Twitter funciona perfectamente, probablemente eres una víctima colateral de la cruzada contra el fútbol pirata.',
    },
    {
      type: 'paragraph',
      html: 'En España, los jueces han entregado un "botón rojo" a ciertas entidades deportivas. Este botón les permite bloquear direcciones IP en tiempo real sin supervisión judicial directa minuto a minuto. El problema es que apuntan con escopeta de feria, y a menudo disparan a servidores compartidos donde, además de "partidos ilegales", viven webs de hospitales, universidades o tu blog de cocina favorito.',
    },
    {
      type: 'title',
      text: 'La Teoría del Edificio en Llamas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Imagina que un streaming ilegal se emite desde el piso 4ºB de un rascacielos. La solución lógica sería llamar a la puerta del 4ºB y cortarle la luz, ¿verdad?',
    },
    {
      type: 'paragraph',
      html: 'Pues no. La solución actual es <strong>dinamitar los cimientos del edificio entero</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Al bloquear la IP de un servicio como Cloudflare, el proveedor de internet no solo tira al pirata, sino a las otras 50.000 webs legítimas que compartían esa misma dirección postal digital. Si estabas trabajando o estudiando y tu web usaba esa IP: mala suerte, daño colateral. Reclama al maestro armero.',
    },
    {
      type: 'title',
      text: '¿Qué hace exactamente este diagnóstico?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Esta herramienta realiza un análisis técnico en tres pasos para identificar si tu operadora está aplicando bloqueos selectivos de IP:',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Ping a Google',
          description: 'Comprobamos si tienes pulso. Si Google no carga, el problema es que no has pagado el Wi-Fi. Este es el test base de conectividad.',
        },
        {
          title: 'Ping a Cloudflare',
          description: 'Intentamos tocar la puerta de 1.1.1.1. Es el "canario en la mina" de los bloqueos en España y el principal objetivo de los bloqueos judiciales.',
        },
        {
          title: 'Veredicto',
          description: 'Si Google funciona y Cloudflare falla, blanco y en botella: tu operadora está aplicando un bloqueo IP selectivo de Cloudflare.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Impacto de los bloqueos dinámicos',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Falsos Positivos',
          description: 'Sitios web de empresas, blogs personales y servicios gubernamentales pueden dejar de funcionar si comparten IP con un servidor de streaming no autorizado.',
        },
        {
          title: 'Filtrado por IP',
          description: 'A diferencia del bloqueo por DNS, el filtrado por IP impide la conexión a nivel de red, lo que hace que cambiar los DNS no sea suficiente para resolver el problema.',
        },
        {
          title: 'Falta de Transparencia',
          description: 'A menudo, el usuario solo ve un error de "Timeout" sin saber si el problema es su conexión o un bloqueo activo de su ISP.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Preguntas que nadie quiere responder',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>¿Es ilegal usar esto?</strong> No. Hacer un "ping" a un servidor es tan ilegal como mirar un escaparate. Esta herramienta es un diagnóstico de red pasivo. No rompe encriptación, no salta contraseñas y no accede a contenido protegido. Solo te dice por qué no puedes entrar a tus webs habituales.',
        '<strong>¿Cómo lo arreglo?</strong> Si tienes un bloqueo activo, cambiar las DNS ya no sirve (se las saben todas). La única solución real hoy en día es una <strong>VPN</strong>. Al encriptar tu tráfico, tu operador no puede ver qué pides ni a quién, y por tanto, no puede bloquearte "selectivamente" (ni por error).',
      ],
    },
    {
      type: 'title',
      text: 'Modo Streamer / OBS Widget',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '¿Eres streamer y quieres mostrar el estado de la censura en tiempo real en tu directo? Hemos creado un modo especial ultra-minimalista, con fondo transparente (chroma-ready) y auto-refresco cada 5 minutos.',
    },
    {
      type: 'list',
      items: [
        '<strong>Paso 1:</strong> Añade una nueva fuente de <strong>Navegador</strong> en OBS.',
        '<strong>Paso 2:</strong> Usa esta URL: <code>https://jjlmoya.es/utilidades/tebas-check/stream/</code>',
        '<strong>Paso 3:</strong> ¡Listo! Aparecerá un icono grande (Verde/Rojo) indicando si tu conexión está limpia o bajo ataque judicial.',
      ],
    },
    {
      type: 'tip',
      title: 'Nota Legal',
      html: '<p>Esta herramienta no tiene afiliación con ninguna entidad deportiva, no facilita el acceso a contenido protegido y no elude medidas tecnológicas de protección (DRM). Simplemente informa al usuario de que su conexión a internet está degradada artificialmente.</p>',
    },
  ],
  ui: {
    faqTitle: 'Preguntas Frecuentes',
    bibliographyTitle: 'Referencias y Contexto',
    scanning: 'Escaneando la matrix...',
    seekingBlocks: 'Buscando bloques de hormigón en tu fibra...',
    blockedTitle: 'BLOQUEANDO...',
    blockedDiagnosis: 'Diagnóstico: "Censura Selectiva"',
    blockedReason: 'Detectamos interferencia en tu ISP. Cloudflare o los DNS están siendo manipulados.',
    noInternetTitle: 'SIN CONEXIÓN',
    noInternetReason: 'Parece que no tienes acceso a internet. Comprueba tu cable o el recibo.',
    successTitle: 'SOIS LIBRES',
    successReason: 'Tu conexión parece limpia. Si hay bloqueos globales, a ti no te están afectando.',
    retryBtn: 'Provocar a la justicia otra vez',
    authorNoteTitle: 'Nota del autor:',
    authorNoteText: 'No he podido testear a fondo esta utilidad porque no estoy afectado por la "mano negra" de Tebas. Si quieres ayudarme a mejorar el diagnóstico, contacta conmigo.',
    consoleHeader: 'TEBAS_OS v3.2.0',
    statusNegotiating: 'Negociando con tu router...',
    statusDodging: 'Esquivando la circular del juzgado...',
    statusCheckingPirate: 'Comprobando si eres pirata (guiño, guiño)...',
    statusPinging: 'Pingueando a Google para ver si existes...',
    statusConsulting: 'Consultando el oráculo de la IP compartida...',
    statusCheckingFee: 'Revisando si Tebas ha pagado la cuota de autónomos...',
    statusCalculating: 'Calculando la probabilidad de que te toque la lotería...',
    statusDeciphering: 'Intentando descifrar el contrato de tu operadora...',
    logStarted: "INICIANDO PROTOCOLO AUTÓNOMO 'TEBAS_WATCH'...",
    logDetecting: '> Detectando ISP y conectividad básica...',
    logIspFound: '> ISP detectado: ',
    logConnError: '> Error de conexión básica',
    logDnsCross: '> Ejecutando cruce de datos DNS (DoH vs Local)...',
    logDnsGoogle: '> DNS Real (Google): ',
    logDnsPoisoned: '> ALERTA: DNS envenenado detectado.',
    logDnsNoDoh: '> DoH no disponible, saltando cruce DNS.',
    logLaunchingProbes: '> Lanzando sondas sobre objetivos críticos...',
    logIpBlocked: '> Objetivo {ip}: NO RESPONDE (Bloqueo IP sospechoso)',
    logIpActive: '> Objetivo {ip}: ACTIVO',
    logAlertInterference: '!!! ALERTA DE INTERFERENCIA JUDICIAL !!!',
    logNoInternet: 'SIN ACCESO A INTERNET',
    logClean: 'CONEXIÓN LIMPIA. DISFRUTA.',
    logDiagError: 'ERROR DE DIAGNÓSTICO',
  },
};
