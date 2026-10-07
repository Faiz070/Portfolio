import { Reveal, Section } from './ui'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <Section id="experience" label="03 / Experience" title="Where I’ve built things.">
      <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-8">
        {experience.map((job) => (
          <Reveal key={job.company + job.duration}>
            <li className="relative">
              <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent sm:-left-[37px]" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold">{job.role} <span className="text-mute">· {job.company}</span></h3>
                <p className="font-mono text-xs text-mute">{job.duration} · {job.location}</p>
              </div>
              <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-mute marker:text-accent">
                {job.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              {job.metrics.length > 0 && (
                <dl className="mt-5 flex flex-wrap gap-3">
                  {job.metrics.map((m) => (
                    <div key={m.label} className="rounded-lg border border-line px-3 py-2">
                      <dt className="font-mono text-sm text-accent">{m.value}</dt>
                      <dd className="text-xs text-mute">{m.label}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
