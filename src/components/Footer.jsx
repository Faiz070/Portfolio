import { profile } from '../data/portfolio'

export default function Footer() {
  const link = 'hover:text-ink'
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-mute sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div><p className="font-semibold text-ink">{profile.name}</p><p>{profile.title}</p></div>
        <nav className="flex gap-5" aria-label="Footer">
          <a className={link} href={profile.github}>GitHub</a>
          <a className={link} href={profile.linkedin}>LinkedIn</a>
          <a className={link} href={`mailto:${profile.email}`}>Email</a>
        </nav>
        <p>© 2026 {profile.name}</p>
      </div>
    </footer>
  )
}
