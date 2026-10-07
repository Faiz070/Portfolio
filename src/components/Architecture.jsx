import { useState } from 'react'
import { motion } from 'framer-motion'
import { Reveal, Section } from './ui'
import { projects } from '../data/portfolio'

export default function Architecture() {
  const [projectIndex, setProjectIndex] = useState(0)
  const [stepIndex, setStepIndex] = useState(0)
  const project = projects[projectIndex]
  const step = project.flow[stepIndex]
  return (
    <Section id="architecture" label="Architecture" title="How I Build Systems">
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <ol className="mx-auto max-w-sm">
            {project.flow.map((node, i) => (
              <li key={node.label} className="flex flex-col items-center">
                <motion.button
                  type="button"
                  initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                  onClick={() => setStepIndex(i)} aria-pressed={stepIndex === i}
                  className={`w-full rounded-lg border px-4 py-3 text-center transition-colors ${stepIndex === i ? 'border-accent bg-accent/10' : 'border-line bg-panel hover:border-mute'}`}
                >
                  <p className="font-mono text-sm uppercase tracking-wide">{node.label}</p>
                </motion.button>
                {i < project.flow.length - 1 && <span className="my-1 text-mute" aria-hidden="true">↓</span>}
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-mute">Select a project to follow its actual data and request flow.</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {projects.map((item, i) => (
              <li key={item.name}>
                <button type="button" onClick={() => { setProjectIndex(i); setStepIndex(0) }} aria-pressed={projectIndex === i}
                  className={`chip transition ${projectIndex === i ? '!border-accent !text-ink' : 'hover:!border-mute'}`}>{item.name}</button>
              </li>
            ))}
          </ul>
          <p className="mt-5 min-h-[3rem] text-sm text-mute" aria-live="polite">
            <span className="font-mono text-xs text-accent">{step.label}</span><br />{step.note}
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
