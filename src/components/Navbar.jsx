import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Github, Linkedin, Menu, X } from 'lucide-react'
import { nav, profile } from '../data/portfolio'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    nav.forEach((n) => { const el = document.getElementById(n.toLowerCase()); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  const icon = 'rounded p-2 text-mute transition hover:text-ink'
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors ${
        scrolled || open ? 'border-line bg-bg/80 backdrop-blur-md' : 'border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#top" className="font-semibold tracking-tight">{profile.name}</a>
        <ul className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <li key={item}><a
              href={`#${item.toLowerCase()}`}
              aria-current={active === item.toLowerCase() ? 'true' : undefined}
              className={`border-b pb-1 text-sm transition ${active === item.toLowerCase() ? 'border-accent text-ink' : 'border-transparent text-mute hover:text-ink'}`}
            >{item}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-1">
          <a className={`${icon} hidden sm:block`} href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={18} /></a>
          <a className={`${icon} hidden sm:block`} href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
          <a href={profile.resume} className="btn btn-ghost ml-2 hidden !py-1.5 md:inline-flex">Resume</a>
          <button className={`${icon} md:hidden`} onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden px-5 pb-4 md:hidden"
          >
            {[...nav, 'Resume'].map((item) => (
              <li key={item}>
                <a
                  href={item === 'Resume' ? profile.resume : `#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3 text-mute hover:text-ink"
                >{item}</a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
