import { Reveal, Section } from './ui'
import { about, philosophy } from '../data/portfolio'

export default function About() {
  return (
    <>
      <Section id="philosophy" label="01 / Principles" title="How I Approach Engineering">
        <div className="grid gap-4 sm:grid-cols-2">
          {philosophy.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article className="card h-full">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section id="about" label="02 / About" title="About Me">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <Reveal className="max-w-prose space-y-4 text-mute">
            {about.text.map((t) => <p key={t}>{t}</p>)}
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-mute">Currently focused on</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {about.focus.map((f) => <li key={f} className="chip">{f}</li>)}
            </ul>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
