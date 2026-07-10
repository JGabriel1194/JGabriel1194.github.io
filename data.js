/* ============================================================
   CONTENIDO DEL SITIO — edita este archivo para cambiar textos,
   proyectos, experiencia, certificados, etc.
   No necesitas tocar index.html ni main.js.
   ============================================================ */

const DATOS = {

  // ---------- CONFIGURACIÓN GENERAL ----------
  config: {
    temaInicial: 'light',           // 'light' o 'dark'
    whatsapp: '593998463093',       // número con código de país, sin '+'
  },

  // ---------- PERFIL ----------
  perfil: {
    nombre: 'Gabriel Soto',
    iniciales: 'GS',
    subtituloNav: 'DEV · SYSADMIN',
    subtituloFooter: 'Desarrollador Web · Administrador de Sistemas',
    badgeDisponible: 'Disponible para proyectos',
    // Frases del efecto de escritura del hero:
    roles: ['Desarrollador Web', 'Administrador de Sistemas', 'Científico de Datos', 'Docente en Tecnología'],
    // Descripción del hero (admite HTML como <b>):
    descripcion: 'Ingeniero en Ciencias de la Computación y Máster en Ingeniería del Software. Construyo <b>sitios y aplicaciones web</b>, administro <b>servidores y plataformas educativas</b> (Moodle) y aplico <b>ciencia de datos e IA</b> para resolver problemas reales.',
    badgeFoto1: 'Full-Stack',
    badgeFoto2: 'SysAdmin',
  },

  // ---------- ESTADÍSTICAS DEL HERO ----------
  stats: [
    { numero: '6+',  etiqueta: 'años exp.' },
    { numero: '5',   etiqueta: 'proyectos' },
    { numero: '10+', etiqueta: 'certificados' },
    { numero: '2',   etiqueta: 'títulos' },
  ],

  // ---------- FILA DE TECNOLOGÍAS (bajo el hero) ----------
  stack: ['React.js', 'Node.js', 'Supabase', 'Linux', 'Coolify', 'Moodle', 'Python · ML', 'AWS'],

  // ---------- SOBRE MÍ ----------
  sobreMi: {
    // Párrafos (admiten HTML como <b> e <i>):
    parrafos: [
      'Soy <b>Juan Gabriel Soto Peñafiel</b>, de El Ángel (Carchi, Ecuador). Combino el desarrollo de software con la administración de sistemas y la ciencia de datos. Diseño y despliego sitios web, mantengo servidores Linux y gestiono plataformas educativas Moodle para instituciones y centros de formación.',
      'Como docente en el área de tecnología, integro inteligencia artificial y análisis de datos en contextos reales. Soy autor de una publicación científica indexada sobre modelos predictivos con <i>machine learning</i>.',
    ],
    chips: ['📍 El Ángel · Carchi', '🎓 Ing. + Máster', '🌐 Español · Inglés técnico'],
    enfoque: {
      titulo: 'Enfoque',
      descripcion: 'Soluciones web y de sistemas confiables, con documentación clara y despliegue reproducible.',
    },
    miniCards: [
      { titulo: 'Big Data', subtitulo: 'CRISP‑DM · Python' },
      { titulo: 'Cloud',    subtitulo: 'AWS · Coolify' },
    ],
    cardAncha: { titulo: 'Plataformas educativas', subtitulo: 'Moodle a medida para instituciones' },
  },

  // ---------- SERVICIOS ----------
  // icono disponible: 'code', 'server', 'edu', 'chart'
  servicios: [
    { icono: 'code',   titulo: 'Desarrollo Web',              descripcion: 'Sitios y aplicaciones modernas con React.js, Node.js y Supabase. Desde landing pages hasta sistemas a medida.' },
    { icono: 'server', titulo: 'Administración de Sistemas',  descripcion: 'Despliegue y gestión de servidores Linux, contenedores con Coolify y arquitectura en la nube con AWS.' },
    { icono: 'edu',    titulo: 'Plataformas Educativas',      descripcion: 'Implementación, personalización y soporte de Moodle para instituciones y centros de formación.' },
    { icono: 'chart',  titulo: 'Ciencia de Datos e IA',       descripcion: 'Modelos de Machine Learning y análisis de datos con Python aplicados a la toma de decisiones.' },
  ],

  // ---------- FILTROS DE PROYECTOS ----------
  // 'id' debe coincidir con la propiedad 'categoria' de los proyectos.
  filtros: [
    { id: 'all',        etiqueta: 'Todos' },
    { id: 'Web',        etiqueta: 'Web' },
    { id: 'Educativo',  etiqueta: 'Educativo' },
    { id: 'E-commerce', etiqueta: 'E‑commerce' },
  ],

  // ---------- PROYECTOS ----------
  // Para añadir una imagen: guarda el archivo en assets/proyectos/ y pon
  // la ruta en 'imagen' (ej. 'assets/proyectos/istah.png'). Si se deja
  // vacío se muestra un recuadro con el texto de 'placeholder'.
  proyectos: [
    {
      titulo: 'Sitio Web Institucional',
      organizacion: 'I.S.T. Alfonso Herrera',
      categoria: 'Web',
      etiquetaCategoria: 'Desarrollo Web',
      anio: '2023',
      descripcion: 'Sitio web institucional del instituto: oferta académica, noticias y servicios en línea.',
      tags: ['Web', 'Linux', 'Coolify'],
      url: 'https://istah.edu.ec/',
      imagen: '',
      placeholder: 'Captura del sitio institucional',
    },
    {
      titulo: 'Entorno Virtual (EVA) Moodle',
      organizacion: 'I.S.T. Alfonso Herrera',
      categoria: 'Educativo',
      etiquetaCategoria: 'Plataforma Educativa',
      anio: '2023',
      descripcion: 'Campus virtual Moodle para carreras tecnológicas: cursos, evaluaciones y gestión de usuarios.',
      tags: ['Moodle', 'Linux', 'Coolify'],
      url: 'https://eva.istah.edu.ec/',
      imagen: '',
      placeholder: 'Captura del campus EVA',
    },
    {
      titulo: 'Sitio Web Institucional',
      organizacion: 'Sindicato de Choferes de Espejo',
      categoria: 'Web',
      etiquetaCategoria: 'Desarrollo Web',
      anio: '2022',
      descripcion: 'Sitio institucional con noticias, trámites y servicios para socios, desplegado en servidor propio.',
      tags: ['React.js', 'Node.js', 'Linux'],
      url: 'https://sindicatoespejo.com.ec/',
      imagen: '',
      placeholder: 'Captura del sitio web',
    },
    {
      titulo: 'Entorno Virtual (EVA) Moodle',
      organizacion: 'Sindicato de Choferes de Espejo',
      categoria: 'Educativo',
      etiquetaCategoria: 'Plataforma Educativa',
      anio: '2022',
      descripcion: 'Campus Moodle para cursos de conducción: matrículas, evaluaciones y certificados en línea.',
      tags: ['Moodle', 'Coolify', 'Linux'],
      url: 'https://eva.sindicatoespejo.com.ec/',
      imagen: '',
      placeholder: 'Captura del campus EVA',
    },
    {
      titulo: 'Tienda Virtual',
      organizacion: 'El Mayorista EC',
      categoria: 'E-commerce',
      etiquetaCategoria: 'E‑commerce',
      anio: '2024',
      descripcion: 'Tienda en línea con catálogo, carrito y pagos, orientada a venta mayorista y gestión de inventario.',
      tags: ['React.js', 'Node.js', 'Supabase'],
      url: 'https://elmayoristaec.com/',
      imagen: '',
      placeholder: 'Captura de la tienda',
    },
  ],

  // ---------- HABILIDADES ----------
  // icono disponible: 'frontend', 'backend', 'devops', 'ia'
  habilidades: [
    { icono: 'frontend', titulo: 'Frontend',          tags: ['JavaScript', 'React.js', 'Angular', 'HTML · CSS'] },
    { icono: 'backend',  titulo: 'Backend & Datos',   tags: ['Node.js', 'Supabase', 'Python', 'PostgreSQL'] },
    { icono: 'devops',   titulo: 'Sistemas & DevOps', tags: ['Linux', 'Coolify', 'AWS', 'Docker'] },
    { icono: 'ia',       titulo: 'Plataformas & IA',  tags: ['Moodle', 'Machine Learning', 'CRISP‑DM', 'IA Generativa'] },
  ],

  // ---------- EXPERIENCIA ----------
  // 'actual: true' resalta el badge del período.
  experiencia: [
    { puesto: 'Docente – Área de Tecnología', organizacion: 'SENESCYT · Secretaría de Educación Superior', periodo: 'Jul 2023 – Actualidad', actual: true,  descripcion: 'Docencia superior en tecnología y análisis de datos; acompañamiento académico e integración de herramientas digitales e IA aplicada.' },
    { puesto: 'Desarrollador / Técnico TIC',  organizacion: 'Sindicato de Choferes Profesionales de Espejo', periodo: '2020 – 2023', actual: false, descripcion: 'Desarrollo del sitio web y campus Moodle, administración de servidores y soporte técnico integral a la institución.' },
    { puesto: 'Docente Suplente',             organizacion: 'Escuela de Capacitación para Conductores Profesionales', periodo: '2020 – 2023', actual: false, descripcion: 'Formación técnica y manejo de plataformas virtuales de aprendizaje.' },
    { puesto: 'Técnico de Apoyo a Municipios', organizacion: 'SERESCO', periodo: 'Ene – Mar 2016', actual: false, descripcion: 'Soporte técnico y mantenimiento de sistemas informáticos municipales.' },
    { puesto: 'Técnico de Redes',             organizacion: 'AIRTIFICIAL', periodo: '2014 – 2015', actual: false, descripcion: 'Instalación, configuración y mantenimiento de infraestructura de redes.' },
  ],

  // ---------- TÍTULOS ----------
  // 'destacado: true' muestra la tarjeta con fondo de color.
  titulos: [
    { destacado: true,  meta: '2025 · ESPAÑA',  titulo: 'Máster en Ingeniería del Software y Sistemas Informáticos', organizacion: 'Universidad Internacional de La Rioja (UNIR)' },
    { destacado: false, meta: '2023 · ECUADOR', titulo: 'Ingeniero en Ciencias de la Computación', organizacion: 'Universidad Politécnica Estatal del Carchi (UPEC)' },
  ],

  // ---------- CERTIFICACIONES ----------
  certificaciones: [
    { titulo: 'AWS Cloud Practitioner',                   organizacion: 'UNIR · España',            meta: '50 horas',                 anio: '2024' },
    { titulo: 'IA Generativa Aplicada a la Educación',    organizacion: 'UNIR · España',            meta: 'Sobresaliente (10) · 150 h', anio: '2024' },
    { titulo: 'Angular: de cero a experto',               organizacion: 'Udemy',                    meta: 'Desarrollo web',           anio: '2024' },
    { titulo: 'Digital Project Management',               organizacion: 'MIU City University · Miami', meta: '160 horas',             anio: '2025' },
    { titulo: 'Cultura de la Investigación',              organizacion: 'UNIR · España',            meta: 'Notable · 100 h',          anio: '2024' },
    { titulo: 'Neurodidáctica',                           organizacion: 'Profuturo · F. Telefónica', meta: '40 horas',                anio: '2023' },
  ],

  // ---------- PUBLICACIONES ----------
  publicaciones: [
    {
      titulo: 'Modelo para la predicción de precios de productos agrícolas de Carchi mediante técnicas de aprendizaje automático',
      badges: ['Revista indexada', 'Machine Learning'],
      anio: '2025',
      // Cita (admite HTML como <i>):
      cita: 'Soto, J. G., Obando, V. M., &amp; Oñate, A. N. (2025). <i>Revista Tierra Infinita</i>, (11), 71–89. Aplicación de Random Forest y XGBoost bajo metodología CRISP‑DM para el análisis predictivo de precios.',
      url: 'https://revistasdigitales.upec.edu.ec/index.php/tierrainfinita/article/view/1414/4059',
    },
  ],

  // ---------- CONTACTO ----------
  contacto: [
    { tipo: 'email',     etiqueta: 'Email',               valor: 'juanga_esp@outlook.es',           enlace: 'mailto:juanga_esp@outlook.es' },
    { tipo: 'whatsapp',  etiqueta: 'WhatsApp · Teléfono', valor: '0998463093',                      enlace: 'https://wa.me/593998463093' },
    { tipo: 'ubicacion', etiqueta: 'Ubicación',           valor: 'El Ángel · Carchi, Ecuador',      enlace: '' },
  ],

  // ---------- MENÚ DE NAVEGACIÓN ----------
  menu: [
    { id: 'inicio',      etiqueta: 'Inicio' },
    { id: 'sobre',       etiqueta: 'Sobre mí' },
    { id: 'servicios',   etiqueta: 'Servicios' },
    { id: 'portafolio',  etiqueta: 'Proyectos' },
    { id: 'experiencia', etiqueta: 'Experiencia' },
  ],
  menuMovil: [
    { id: 'sobre',       etiqueta: 'Sobre mí' },
    { id: 'servicios',   etiqueta: 'Servicios' },
    { id: 'portafolio',  etiqueta: 'Proyectos' },
    { id: 'habilidades', etiqueta: 'Habilidades' },
    { id: 'experiencia', etiqueta: 'Experiencia' },
    { id: 'formacion',   etiqueta: 'Formación' },
  ],
};
