import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import type { Project } from '../../data/projects';

interface Props {
  projects: Project[];
  lang: string;
  labels: {
    internal_label: string;
    view_repo: string;
    modal_problem: string;
    modal_role: string;
  };
}

function BentoCard({
  project,
  lang,
  labels,
  featured,
  index,
  onOpen,
}: {
  project: Project;
  lang: string;
  labels: Props['labels'];
  featured: boolean;
  index: number;
  onOpen: (p: Project) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);

  const desc = lang === 'en' ? project.description_en : project.description;

  return (
    <motion.article
      ref={ref}
      className={`relative rounded-xl overflow-hidden cursor-pointer group focus-visible:outline-none${featured ? ' bento-card-featured' : ''}`}
      style={{
        background: featured ? 'linear-gradient(135deg, #0d1520 0%, #0a1028 100%)' : '#0d1219',
        border: hovered ? '1px solid #2e4060' : '1px solid #192438',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        boxShadow: featured
          ? hovered
            ? '0 0 0 1px rgba(139,159,255,0.2), inset 0 1px 0 rgba(139,159,255,0.25), 0 8px 40px rgba(0,0,0,0.4)'
            : 'inset 0 1px 0 rgba(139,159,255,0.15), 0 4px 20px rgba(0,0,0,0.3)'
          : hovered ? '0 0 0 1px rgba(139,159,255,0.08), 0 8px 32px rgba(0,0,0,0.3)' : 'none',
      }}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onOpen(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={project.title}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen(project); }}
    >
      <div className="p-6 md:p-8 flex flex-col gap-4 h-full">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            {project.internal && (
              <span
                className="self-start font-mono text-xs uppercase tracking-widest"
                style={{ color: '#3d5070' }}
              >
                internal
              </span>
            )}
            <h3
              className="font-black leading-tight"
              style={{
                fontSize: featured ? 'clamp(1.5rem, 2.5vw, 2.25rem)' : '1.125rem',
                color: '#cdd2dc',
                letterSpacing: '-0.03em',
              }}
            >
              {project.title}
            </h3>
          </div>

          <motion.span
            aria-hidden="true"
            style={{ color: '#8b9fff', fontSize: '1rem', flexShrink: 0, marginTop: '4px' }}
            animate={{ x: hovered ? 0 : -4, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.18 }}
          >
            ↗
          </motion.span>
        </div>

        <p className="text-sm leading-relaxed flex-1" style={{ color: '#8b9ccc' }}>
          {desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2 py-0.5 rounded"
              style={{ background: '#0d1828', color: '#5a7090', border: '1px solid #1e2e48' }}
            >
              {tech}
            </span>
          ))}
        </div>

        {project.repo && !project.internal && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs hover:underline"
            style={{ color: '#8b9fff' }}
            onClick={(e) => e.stopPropagation()}
          >
            {labels.view_repo} →
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function ProjectsBento({ projects, lang, labels }: Props) {
  const [selected, setSelected] = useState<Project | null>(null);

  const desc = selected ? (lang === 'en' ? selected.description_en : selected.description) : '';
  const problem = selected ? (lang === 'en' ? selected.problem_en : selected.problem) : '';
  const role = selected ? (lang === 'en' ? selected.role_en : selected.role) : '';

  return (
    <>
      <div className="bento-grid">
        {projects.map((p, i) => (
          <BentoCard
            key={p.id}
            project={p}
            lang={lang}
            labels={labels}
            featured={i === 0}
            index={i}
            onOpen={setSelected}
          />
        ))}
      </div>

      {selected && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.85)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
        >
          <motion.div
            className="relative rounded-xl p-8 max-w-xl w-full"
            style={{ background: '#0d1219', border: '1px solid #1e2a3a', color: '#cdd2dc' }}
            initial={{ scale: 0.96, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 font-mono text-sm transition-colors hover:text-white"
              style={{ color: '#4e6080' }}
              aria-label="Close"
            >
              esc
            </button>

            {selected.internal && (
              <span className="font-mono text-xs uppercase tracking-widest block mb-3" style={{ color: '#3d5070' }}>
                internal
              </span>
            )}

            <h2
              className="font-black mb-6"
              style={{ fontSize: '1.75rem', letterSpacing: '-0.03em' }}
            >
              {selected.title}
            </h2>

            <p className="text-sm leading-relaxed mb-5" style={{ color: '#8b9ccc' }}>{desc}</p>

            <p className="font-mono text-xs uppercase tracking-widest mb-1" style={{ color: '#4e6080' }}>
              {labels.modal_problem}
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#8b9ccc' }}>{problem}</p>

            <p className="font-mono text-xs uppercase tracking-widest mb-1" style={{ color: '#4e6080' }}>
              {labels.modal_role}
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#8b9ccc' }}>{role}</p>

            <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: '#4e6080' }}>Stack</p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {selected.stack.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-2 py-0.5 rounded"
                  style={{ background: '#0d1828', color: '#5a7090', border: '1px solid #1e2e48' }}
                >
                  {t}
                </span>
              ))}
            </div>

            {selected.repo && !selected.internal && (
              <a
                href={selected.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs hover:underline"
                style={{ color: '#8b9fff' }}
              >
                {labels.view_repo} →
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
