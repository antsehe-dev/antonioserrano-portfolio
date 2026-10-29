export const es = {
  // Nav
  nav: {
    about: 'Sobre mí',
    projects: 'Proyectos',
    stack: 'Stack',
    contact: 'Contacto',
    lang: 'EN',
  },
  // Hero
  hero: {
    name: 'Antonio Serrano Herruzo',
    role: 'AI Engineer',
    location: 'Córdoba, España',
    tagline: 'Especializado en IA agéntica y sistemas backend. Construyo soluciones que llevan la inteligencia artificial a producción.',
    cta_projects: 'Ver proyectos',
    cta_contact: 'Contactar',
  },
  // About
  about: {
    title: 'Sobre mí',
    body: 'AI Engineer de Córdoba especializado en sistemas agénticos, backend e integración de modelos de lenguaje en producción. Me apasiona convertir tecnología emergente en soluciones concretas: desde arquitecturas de agentes hasta pipelines de datos que escalan.',
    experience_title: 'Experiencia & Formación',
  },
  // Projects
  projects: {
    title: 'Proyectos',
    internal_label: 'Proyecto interno',
    view_repo: 'Ver repositorio',
    role_label: 'Mi rol',
    stack_label: 'Stack',
    problem_label: 'Problema que resuelve',
  },
  // Stack
  stack: {
    title: 'Stack & Tecnologías',
  },
  // Contact
  contact: {
    title: 'Contacto',
    copy_email: 'Copiar email',
    copied: '¡Copiado!',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    form: {
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar',
      success: 'Mensaje enviado. Te respondo pronto.',
      error: 'Error al enviar. Inténtalo de nuevo.',
    },
  },
  // Footer
  footer: {
    built: 'Construido con Astro, Three.js y demasiado café.',
  },
  // Terminal easter egg
  terminal: {
    prompt: '$ generate bio --subject=Antonio --format=human',
    lines: [
      'Cargando perfil...',
      'Analizando patrones de comportamiento...',
      'AI Engineer. Backend lover. Nunca se rinde.',
      'Localización: Córdoba, España.',
      'Estado: construyendo cosas que importan.',
      'Listo.',
    ],
  },
} as const;

export type Translations = typeof es;
