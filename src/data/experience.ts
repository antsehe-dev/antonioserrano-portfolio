export interface TimelineItem {
  type: 'work' | 'education';
  title: string;
  title_en: string;
  org: string;
  period: string;
  period_en: string;
  description: string;
  description_en: string;
}

export const timeline: TimelineItem[] = [
  {
    type: 'work',
    title: 'AI Engineer',
    title_en: 'AI Engineer',
    org: 'Softtek · Innovation Labs',
    period: 'Mayo 2026 – actualidad',
    period_en: 'May 2026 – present',
    description:
      'Laboratorio dedicado a buscar soluciones con IA: testeo y evaluación de modelos, desarrollo de aplicaciones apoyadas en IA que a mano llevarían 3-4 meses, análisis de herramientas de IA e investigación aplicada con stacks agénticos y harnesses.',
    description_en:
      'R&D lab focused on AI-driven solutions: model testing and evaluation, development of AI-assisted applications (cutting 3-4 months of manual work), AI tool analysis, and applied research with agentic stacks and harnesses.',
  },
  {
    type: 'education',
    title: 'Ingeniería Informática',
    title_en: 'Computer Science Engineering',
    org: 'Universidad de Córdoba',
    period: 'En curso',
    period_en: 'In progress',
    description: 'Compaginado con el trabajo en Softtek.',
    description_en: 'Pursued alongside full-time work at Softtek.',
  },
  {
    type: 'education',
    title: 'Técnico Superior en DAM',
    title_en: 'Higher Technician in Multiplatform App Development',
    org: 'Formación Profesional',
    period: 'Completado',
    period_en: 'Completed',
    description: 'Desarrollo de Aplicaciones Multiplataforma.',
    description_en: 'Multiplatform Application Development.',
  },
];
