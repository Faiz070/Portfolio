import { Github, Linkedin, Mail } from 'lucide-react'
import { Reveal, Section } from './ui'
import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <Section id="contact" label="09 / Contact" title="Let’s Build Something Useful.">
      <Reveal>
        <p className="max-w-xl text-mute">Open to software engineering opportunities, technical collaborations, and interesting problems.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}><Mail size={16} /> Email Me</a>
          <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
        </div>
        <p className="mt-5 font-mono text-sm text-mute">{profile.email}</p>
      </Reveal>
    </Section>
  )
}
