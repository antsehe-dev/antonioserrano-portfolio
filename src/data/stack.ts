export interface StackCategory {
  label: string;
  label_en: string;
  items: string[];
}

export const stackCategories: StackCategory[] = [
  {
    label: 'Lenguajes & Frontend/Backend',
    label_en: 'Languages & Frontend/Backend',
    items: ['Java', 'Python', 'React', 'JavaScript', 'HTML', 'CSS', 'Next.js'],
  },
  {
    label: 'IA & Agentes',
    label_en: 'AI & Agents',
    items: ['AI-DLC', 'Spec-Driven Development', 'Strands Agents', 'Hermes Agent'],
  },
  {
    label: 'Modelos & Herramientas IA',
    label_en: 'AI Models & Tools',
    items: ['Claude', 'OpenAI / ChatGPT', 'Gemini', 'NotebookLM', 'OpenCode'],
  },
  {
    label: 'Bases de datos',
    label_en: 'Databases',
    items: ['PostgreSQL', 'Redis', 'Oracle', 'MySQL', 'Firebase'],
  },
  {
    label: 'Otros',
    label_en: 'Other',
    items: ['Entrenamiento de modelos con Python'],
  },
];

// Flat list for the marquee
export const marqueeItems = [
  'Java', 'Python', 'React', 'JavaScript', 'Next.js',
  'Claude', 'OpenAI', 'Gemini', 'Strands Agents',
  'PostgreSQL', 'Redis', 'Firebase', 'MySQL',
  'HTML', 'CSS', 'Three.js', 'Astro',
];
