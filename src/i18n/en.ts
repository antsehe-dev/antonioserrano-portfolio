export const en = {
  // Nav
  nav: {
    about: 'About',
    projects: 'Projects',
    stack: 'Stack',
    contact: 'Contact',
    lang: 'ES',
  },
  // Hero
  hero: {
    name: 'Antonio Serrano Herruzo',
    role: 'AI Engineer',
    location: 'Córdoba, Spain',
    tagline: 'Specialised in agentic AI and backend systems. I build solutions that take artificial intelligence into production.',
    cta_projects: 'View projects',
    cta_contact: 'Get in touch',
  },
  // About
  about: {
    title: 'About me',
    body: 'AI Engineer from Córdoba specialised in agentic systems, backend architecture, and LLM integration in production. I turn emerging technology into concrete solutions — from agent architectures to data pipelines that scale.',
    experience_title: 'Experience & Education',
  },
  // Projects
  projects: {
    title: 'Projects',
    internal_label: 'Internal project',
    view_repo: 'View repository',
    role_label: 'My role',
    stack_label: 'Stack',
    problem_label: 'Problem it solves',
  },
  // Stack
  stack: {
    title: 'Stack & Technologies',
  },
  // Contact
  contact: {
    title: 'Contact',
    copy_email: 'Copy email',
    copied: 'Copied!',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      success: 'Message sent. I\'ll get back to you soon.',
      error: 'Failed to send. Please try again.',
    },
  },
  // Footer
  footer: {
    built: 'Built with Astro, Three.js and too much coffee.',
  },
  // Terminal easter egg
  terminal: {
    prompt: '$ generate bio --subject=Antonio --format=human',
    lines: [
      'Loading profile...',
      'Analyzing behavioral patterns...',
      'AI Engineer. Backend lover. Never gives up.',
      'Location: Córdoba, Spain.',
      'Status: building things that matter.',
      'Done.',
    ],
  },
} as const;
