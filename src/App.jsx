import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

// Below-the-fold sections load lazily to keep first paint fast.
const Architecture = lazy(() => import('./components/Architecture'))
const Gallery = lazy(() => import('./components/Gallery'))
const Skills = lazy(() => import('./components/Skills'))
const EngineeringNotes = lazy(() => import('./components/EngineeringNotes'))
const GitHub = lazy(() => import('./components/GitHub'))
const Contact = lazy(() => import('./components/Contact'))

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-3 focus:py-2">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Suspense fallback={null}>
          <Gallery />
          <Architecture />
          <Skills />
          <EngineeringNotes />
          <GitHub />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
