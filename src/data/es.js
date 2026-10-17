// Contenido del sitio en español.
// Para agregar inglés más adelante, crea `en.js` con la misma estructura.
// Las fotos van en `public/images/`; deja `image: null` para mostrar un espacio reservado.

const content = {
  nav: [
    { id: 'inicio', label: 'Inicio' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'trayectoria', label: 'Trayectoria' },
    { id: 'contacto', label: 'Contacto' },
  ],

  ticker: [
    'Disponible para mi primer empleo',
    'Full-stack · TypeScript · React · Spring Boot',
    'Abierta a prácticas y puestos junior',
    'Programación funcional con Haskell',
  ],

  hero: {
    eyebrow: 'Desarrolladora de Software',
    name: 'Sara Quispe Choque',
    bio: 'Estudiante de Ingeniería Informática en la UMSS. Construyo aplicaciones web full-stack, he liderado equipos de desarrollo y hoy investigo herramientas para enseñar programación funcional junto a KU Leuven.',
    photo: null, // ej. 'images/sara.jpg'
    stats: [
      { value: 6, suffix: '+', label: 'proyectos' },
      { value: 6, suffix: '', label: 'lenguajes' },
      { value: 3, suffix: '', label: 'experiencias laborales' },
    ],
  },

  projects: [
    {
      title: 'Proskell',
      year: '2026',
      role: 'Desarrolladora e investigadora',
      description:
        'Sistema interactivo para enseñar Programación Funcional, desarrollado en alianza con la Universidad KU Leuven de Bélgica, enfocado en mejorar el aprendizaje de Haskell.',
      tags: ['TypeScript', 'Haskell', 'Docker'],
      image: null,
      link: null,
      featured: true,
    },
    {
      title: 'Bebras Bolivia',
      year: '2026',
      role: 'Líder de desarrollo',
      description:
        'Plataforma educativa implementada en la UMSS para promover el pensamiento computacional en colegios. Lideré el equipo, definí la arquitectura y realicé las revisiones de código.',
      tags: ['TypeScript', 'JavaScript', 'Docker'],
      image: null,
      link: null,
      featured: true,
    },
    {
      title: 'Servineo',
      year: '2025',
      role: 'Desarrolladora full-stack',
      description:
        'Aplicación web que conecta a trabajadores técnicos con clientes. Implementé el frontend y el backend de los módulos de búsqueda, paginación y filtrado de resultados.',
      tags: ['TypeScript', 'Next.js', 'React', 'Node.js', 'Express', 'MongoDB'],
      image: null,
      link: null,
    },
    {
      title: 'Microservicios',
      year: '2025',
      role: 'Arquitecta de software',
      description:
        'Ecosistema de microservicios escalables orquestados con Spring Cloud Gateway, con la infraestructura desplegada en contenedores mediante Docker Compose.',
      tags: ['Java', 'Spring Boot', 'Spring Cloud', 'Docker'],
      image: null,
      link: null,
    },
    {
      title: 'TDD LAB',
      year: '2025',
      role: 'Desarrolladora full-stack',
      description:
        'Integración de un agente inteligente que analiza en tiempo real el código de los estudiantes y evalúa la correcta aplicación de Test-Driven Development.',
      tags: ['TypeScript', 'React', 'Neon', 'IA', 'LLM'],
      image: null,
      link: null,
    },
    {
      title: 'Cashbock',
      year: '2025',
      role: 'Desarrolladora frontend',
      description:
        'Interfaz de una aplicación descentralizada que conecta React con contratos inteligentes en blockchain para simular un banco descentralizado.',
      tags: ['Solidity', 'React'],
      image: null,
      link: null,
    },
  ],

  skills: [
    { group: 'Lenguajes', items: ['Java', 'Python', 'C++', 'TypeScript', 'JavaScript', 'Haskell'] },
    { group: 'Frameworks y Web', items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Spring Boot'] },
    { group: 'Bases de datos y herramientas', items: ['PostgreSQL', 'MongoDB', 'Neon', 'Git', 'Docker', 'GitHub Actions'] },
    { group: 'Idiomas', items: ['Español (nativo)', 'Inglés (intermedio B1)'] },
  ],

  experience: [
    {
      title: 'Auxiliar de Laboratorio de Mantenimiento',
      place: 'Laboratorio de Informática y Sistemas, UMSS',
      date: 'Gestión II/2024',
      points: [
        'Mantenimiento preventivo y correctivo de equipos informáticos y ensamblaje de computadoras.',
        'Asistencia a estudiantes y docentes en las prácticas de laboratorio de Informática y Sistemas.',
      ],
    },
    {
      title: 'Soporte Técnico',
      place: 'Instituto Preuniversitario PRAUS',
      date: 'Sept. 2023 – Dic. 2023',
      points: [
        'Soporte especializado en el sistema de registro de estudiantes, agilizando la resolución de problemas y mejorando la experiencia de los usuarios.',
      ],
    },
    {
      title: 'Auxiliar de Laboratorio de Cómputo',
      place: 'Laboratorio de Informática y Sistemas, UMSS',
      date: 'Gestión I/2023',
      points: [
        'Instalación y configuración del software de las computadoras del laboratorio y asistencia directa durante las clases.',
      ],
    },
  ],

  education: [
    {
      title: 'Licenciatura en Ingeniería Informática',
      place: 'Universidad Mayor de San Simón (UMSS)',
      date: '2020 – Presente',
    },
    {
      title: 'Ingeniería de Sistemas',
      place: 'Universidad Católica Boliviana (UCB)',
      date: 'Febrero – Junio 2025',
    },
  ],

  contact: {
    title: '¿Trabajamos juntos?',
    text: 'Busco mi primera oportunidad como desarrolladora de software. Si tienes un puesto, una práctica o un proyecto en mente, escríbeme.',
    email: 'quispechoquesara@gmail.com',
    github: 'https://github.com/Saraqch',
    linkedin: null, // ej. 'https://www.linkedin.com/in/tu-usuario'
    cv: 'cv-sara-quispe.pdf',
  },

  labels: {
    sectionProjects: 'Proyectos destacados',
    sectionSkills: 'Habilidades técnicas',
    sectionPath: 'Trayectoria',
    experience: 'Experiencia',
    education: 'Educación',
    photoSoon: 'Foto próximamente',
    viewProject: 'Ver proyecto',
    email: 'Escríbeme',
    downloadCv: 'Descargar CV',
    themeDark: 'Modo oscuro',
    themeLight: 'Modo claro',
    footer: 'Hecho con React y desplegado en GitHub Pages.',
  },
}

export default content
