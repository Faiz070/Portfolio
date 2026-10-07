import { ArrowUpRight } from 'lucide-react'
import { Reveal, Section } from './ui'
import { notes } from '../data/portfolio'

export default function EngineeringNotes() {
  return (
    <Section id="notes" label="Writing" title="Engineering Notes">
      <div className="grid gap-4 sm:grid-cols-2">
        {notes.map((n, i) => (
          <Reveal key={n.title} delay={i * 0.05}>
            <a href={n.href} className="card group block h-full transition-colors hover:border-mute/60">
              <div className="flex items-center justify-between font-mono text-xs text-mute">
                <span className="text-accent">{n.tag}</span><span>{n.read}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug">{n.title}</h3>
              <span className="mt-6 inline-flex items-center gap-1 text-sm text-mute group-hover:text-ink">Read note <ArrowUpRight size={14} /></span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
