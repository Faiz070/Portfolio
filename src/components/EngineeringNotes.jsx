import { ArrowUpRight } from 'lucide-react'
import { Reveal, Section } from './ui'
import { notes } from '../data/notes'

export default function EngineeringNotes() {
  return (
    <Section id="notes" label="Writing" title="Engineering Notes">
      <div className="grid gap-4 sm:grid-cols-2">
        {notes.map((n, i) => (
          <Reveal key={n.title} delay={i * 0.05}>
            <details className="card group h-full transition-colors open:border-mute/60">
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between font-mono text-xs text-mute">
                  <span className="text-accent">{n.tag}</span>
                  <span>{Math.max(1, Math.ceil(n.sections.flatMap((s) => s.paragraphs).join(' ').split(/\s+/).length / 200))} min read</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug">{n.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{n.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm text-mute group-hover:text-ink">
                  Read article <ArrowUpRight size={14} />
                </span>
              </summary>
              <article className="mt-6 space-y-6 border-t border-line pt-6 text-sm leading-relaxed text-mute">
                {n.sections.map((section) => (
                  <section key={section.heading}>
                    <h4 className="mb-2 font-semibold text-ink">{section.heading}</h4>
                    {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-2">{paragraph}</p>)}
                  </section>
                ))}
              </article>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
