import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { profile } from '../data/portfolio'

const stages = ['Client', 'REST API', 'Service Layer', 'PostgreSQL']

// Minimal terminal-style panel; cycles a highlight through the request path.
function SystemPanel() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % stages.length), 1400)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="rounded-xl border border-line bg-panel font-mono text-sm shadow-2xl shadow-black/40" aria-hidden="true">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3 text-xs text-mute">
        <span className="h-2.5 w-2.5 rounded-full bg-line" /><span className="h-2.5 w-2.5 rounded-full bg-line" /><span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-2">production.system</span>
      </div>
      <ol className="space-y-2 p-5">
        {stages.map((s, i) => (
          <li key={s} className={`flex items-center gap-3 rounded-md border px-3 py-2 transition-colors duration-500 ${
            i === active ? 'border-accent/60 bg-accent/10 text-ink' : 'border-line text-mute'
          }`}>
            <span className="text-xs opacity-60">{String(i + 1).padStart(2, '0')}</span>{s}
            {i < stages.length - 1 && <span className="ml-auto opacity-40">↓</span>}
          </li>
        ))}
      </ol>
      <div className="flex items-center gap-2 border-t border-line px-4 py-3 text-xs text-mute">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> SYSTEM OPERATIONAL
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-32 sm:px-8 md:pt-40 lg:grid-cols-[1.3fr_.7fr]">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="label">{profile.label}</p>
        <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight min-[400px]:text-5xl md:text-7xl">Building reliable software<br className="hidden sm:block" /> for real-world problems.</h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-mute md:text-lg">{profile.intro}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#projects" className="btn btn-primary">View Projects <ArrowRight size={16} /></a>
          <a href={profile.resume} className="btn btn-ghost" download><Download size={16} /> Download Resume</a>
        </div>
        <div className="mt-6 flex gap-6 text-sm text-mute">
          <a className="underline-offset-4 hover:text-ink hover:underline" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="underline-offset-4 hover:text-ink hover:underline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="underline-offset-4 hover:text-ink hover:underline" href={`mailto:${profile.email}`}>Email</a>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
        <SystemPanel />
      </motion.div>
    </section>
  )
}
