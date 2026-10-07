import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Reveal, Section } from './ui'
import { fallbackRepos, profile } from '../data/portfolio'

const isConfigured = profile.githubUser && !profile.githubUser.includes('your')

// Swap-in point for live data; only runs when a real username is configured.
async function fetchRepos(user) {
  const res = await fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=6`)
  if (!res.ok) throw new Error(`GitHub API ${res.status}`)
  return (await res.json()).filter((r) => !r.fork)
    .map((r) => ({ name: r.name, description: r.description, language: r.language, url: r.html_url }))
}

export default function GitHub() {
  const [repos, setRepos] = useState(fallbackRepos)
  useEffect(() => {
    if (!isConfigured) return
    fetchRepos(profile.githubUser).then((r) => r.length && setRepos(r)).catch((e) => console.warn(e))
  }, [])

  return (
    <Section id="github" label="Open source" title="GitHub">
      <div className="grid gap-4 md:grid-cols-3">
        {repos.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.05}>
            <a href={r.url} target="_blank" rel="noreferrer" className="card group block h-full transition-colors hover:border-mute/60">
              <h3 className="font-mono text-sm font-medium">{r.name}</h3>
              <p className="mt-2 text-sm text-mute">{r.description || 'No description.'}</p>
              <div className="mt-5 flex items-center justify-between font-mono text-xs text-mute">
                <span>{r.language}</span>
                <span className="inline-flex items-center gap-1 group-hover:text-ink">GitHub <ArrowUpRight size={12} /></span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
