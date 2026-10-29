export interface Project {
  id: string;
  title: string;
  description: string;
  description_en: string;
  problem: string;
  problem_en: string;
  role: string;
  role_en: string;
  stack: string[];
  repo?: string;
  internal: boolean;
}

export const projects: Project[] = [
  {
    id: 'psicoapp',
    title: 'Psicoapp',
    description: 'App de gestión de pacientes para psicólogos.',
    description_en: 'Patient management app for psychologists.',
    problem:
      'Los psicólogos gestionan pacientes, citas y notas de sesión en papel o herramientas genéricas. Psicoapp centraliza todo en una sola aplicación.',
    problem_en:
      'Psychologists manage patients, appointments and session notes on paper or generic tools. Psicoapp centralises everything in one app.',
    role: 'Desarrollador full-stack',
    role_en: 'Full-stack developer',
    stack: ['Java', 'React', 'MySQL'],
    repo: 'https://github.com/antsehe-dev/psicoapp',
    internal: false,
  },
  {
    id: 'atlasaitek',
    title: 'AtlasAiTek',
    description: 'Herramienta de generación automática de documentación para repositorios de código mediante IA.',
    description_en: 'AI-powered automatic documentation generator for code repositories.',
    problem:
      'Mantener documentación actualizada de un repositorio es costoso y se abandona con el tiempo. AtlasAiTek analiza el código y genera documentación técnica de forma automática.',
    problem_en:
      'Keeping repository documentation up to date is expensive and often abandoned. AtlasAiTek analyses the codebase and generates technical documentation automatically.',
    role: 'AI Engineer',
    role_en: 'AI Engineer',
    stack: ['Python', 'Claude', 'Agentic stack'],
    internal: true,
  },
  {
    id: 'qa-copilots',
    title: 'Copilotos de IA para QA',
    description:
      'Copilotos personalizados que asisten a equipos de QA en generación de casos de prueba, Gherkin, revisión de planes y documentación de incidencias.',
    description_en:
      'Custom AI copilots that assist QA teams with test case generation, Gherkin scenarios, test plan review and incident documentation.',
    problem:
      'Las tareas repetitivas de QA (escribir casos de prueba, redactar Gherkin, revisar planes) consumen tiempo y ralentizan los ciclos de testing. Los copilotos reducen el trabajo manual y aceleran los sprints.',
    problem_en:
      'Repetitive QA tasks (writing test cases, drafting Gherkin, reviewing plans) consume time and slow down testing cycles. The copilots reduce manual work and speed up sprints.',
    role: 'AI Engineer',
    role_en: 'AI Engineer',
    stack: ['Python', 'Claude', 'Strands Agents', 'Hermes Agent'],
    internal: true,
  },
];
