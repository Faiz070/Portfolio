import { useState } from 'react'
import { motion } from 'framer-motion'
import { Reveal, Section } from './ui'
import { systemConcerns, systemLayers } from '../data/portfolio'

export default function Architecture() {
  const [sel, setSel] = useState(null)
  const concern = systemConcerns[sel]
  return (
    <Section id="architecture" label="Architecture" title="System Thinking">
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <ol className="mx-auto max-w-sm">
            {systemLayers.map((l, i) => {
              const lit = concern?.layers.includes(i)
              return (
                <li key={l.name} className="flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                    className={`w-full rounded-lg border px-4 py-3 text-center transition-colors ${lit ? 'border-accent bg-accent/10' : 'border-line bg-panel'}`}
                  >
                    <p className="font-mono text-sm uppercase tracking-wide">{l.name}</p>
                    <p className="text-xs text-mute">{l.sub}</p>
                  </motion.div>
                  {i < systemLayers.length - 1 && <span className="my-1 text-mute" aria-hidden="true">↓</span>}
                </li>
              )
            })}
          </ol>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-mute">Select a concern to see where it applies in the stack.</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {systemConcerns.map((c, i) => (
              <li key={c.name}>
                <button onClick={() => setSel(sel === i ? null : i)} aria-pressed={sel === i}
                  className={`chip transition ${sel === i ? '!border-accent !text-ink' : 'hover:!border-mute'}`}>{c.name}</button>
              </li>
            ))}
          </ul>
          <p className="mt-5 min-h-[3rem] text-sm text-mute" aria-live="polite">{concern?.text}</p>
        </Reveal>
      </div>
    </Section>
  )
}
