import { Reveal, Section } from './ui'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <Section id="skills" label="06 / Stack" title="Tools I work with.">
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([group, items], i) => (
          <Reveal key={group} delay={i * 0.04}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-mute">{group}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">{items.map((s) => <li key={s} className="chip">{s}</li>)}</ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
