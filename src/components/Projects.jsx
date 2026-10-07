import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'
import { Reveal, Section } from './ui'
import ProjectCard from './ProjectCard'
import { projects } from '../data/portfolio'

// Vertical architecture diagram; nodes animate in, click one to read its role.
function FlowDiagram({ flow }) {
  const [sel, setSel] = useState(0)
  return (
    <div className="grid gap-4 md:grid-cols-[minmax(0,260px)_1fr] md:items-start">
      <ol className="flex flex-col items-center">
        {flow.map((s, i) => (
          <li key={s.label} className="flex w-full flex-col items-center">
            <motion.button
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              onClick={() => setSel(i)} aria-pressed={sel === i}
              className={`w-full rounded-md border px-3 py-2 text-center font-mono text-xs transition ${sel === i ? 'border-accent bg-accent/10 text-ink' : 'border-line bg-panel text-mute hover:border-mute'}`}
            >{s.label}</motion.button>
            {i < flow.length - 1 && <span className="my-1 text-mute" aria-hidden="true">↓</span>}
          </li>
        ))}
      </ol>
      <p className="rounded-md border border-line bg-panel p-4 text-sm text-mute" aria-live="polite">
        <span className="font-mono text-xs text-accent">{flow[sel].label}</span><br />{flow[sel].note}
      </p>
    </div>
  )
}

function CaseStudy({ project, onClose }) {
  const closeRef = useRef(null)
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose])

  const H = ({ children }) => <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">{children}</h3>
  return (
    <motion.div role="dialog" aria-modal="true" aria-label={`${project.name} case study`}
      className="fixed inset-0 z-50 overflow-y-auto bg-bg"
      initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }} transition={{ duration: 0.25 }}>
      <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-14">
        <div className="flex items-start justify-between gap-4">
          <div><p className="label">Case study</p><h2 className="mt-2 text-3xl font-semibold md:text-5xl">{project.name}</h2></div>
          <button ref={closeRef} onClick={onClose} aria-label="Close case study" className="rounded border border-line p-2 text-mute hover:text-ink"><X size={20} /></button>
        </div>
        <div className="mt-10 space-y-10 text-mute">
          <section><H>Problem</H><p>{project.problem}</p></section>
          <section><H>Solution</H><p>{project.solution}</p></section>
          <section><H>Architecture</H><FlowDiagram flow={project.flow} /></section>
          <section><H>Engineering decisions</H><ul className="list-disc space-y-2 pl-5 marker:text-accent">{project.decisions.map((d) => <li key={d}>{d}</li>)}</ul></section>
          <section><H>Challenges</H><p>{project.challenges}</p></section>
          <section>
            <H>Results</H>
            <ul className="list-disc space-y-2 pl-5 marker:text-accent">{project.results.map((r) => <li key={r}>{r}</li>)}</ul>
            {project.resultImages?.length > 0 && (
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {project.resultImages.map((image) => (
                  <figure key={image.src} className="overflow-hidden rounded-lg border border-line bg-panel">
                    <img src={image.src} alt={image.alt} loading="lazy" className="aspect-video w-full object-contain" />
                    {image.caption && <figcaption className="p-3 text-sm text-mute">{image.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            )}
          </section>
          <section><H>Technologies</H><ul className="flex flex-wrap gap-2">{project.tech.map((t) => <li key={t} className="chip">{t}</li>)}</ul></section>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-primary"><Github size={16} /> GitHub</a>
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-ghost"><ExternalLink size={16} /> Live Demo</a>}
          <button onClick={onClose} className="btn btn-ghost">Close</button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [active, setActive] = useState(null)
  return (
    <Section id="projects" label="Projects" title="Selected Engineering Work">
      <div className="grid gap-6">
        {projects.map((p, i) => <Reveal key={p.name} delay={i * 0.05}><ProjectCard project={p} onOpen={setActive} /></Reveal>)}
      </div>
      <AnimatePresence>{active && <CaseStudy project={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </Section>
  )
}
