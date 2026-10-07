import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Block = ({ title, children }) => (
  <div>
    <h4 className="font-mono text-xs uppercase tracking-widest text-accent">{title}</h4>
    <div className="mt-1 text-sm leading-relaxed text-mute">{children}</div>
  </div>
)

export default function ProjectCard({ project, onOpen }) {
  return (
    <motion.article whileHover={{ y: -3 }} className="card flex h-full flex-col gap-5 p-6 transition-colors hover:border-mute/60 sm:p-8">
      <div>
        <h3 className="text-2xl font-semibold">{project.name}</h3>
        <p className="mt-2 max-w-3xl text-mute">{project.summary}</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        <Block title="Problem">{project.problem}</Block>
        <Block title="Solution">{project.solution}</Block>
        <Block title="Engineering decisions">
          <ul className="list-disc space-y-1 pl-4 marker:text-accent">{project.decisions.map((d) => <li key={d}>{d}</li>)}</ul>
        </Block>
      </div>
      <ul className="flex flex-wrap gap-2">{project.tech.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
      <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
        <button onClick={() => onOpen(project)} className="btn btn-primary">View Case Study</button>
        <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-ghost"><Github size={16} /> GitHub</a>
        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-ghost"><ExternalLink size={16} /> Live Demo</a>}
      </div>
    </motion.article>
  )
}
