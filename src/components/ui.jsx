import { motion } from 'framer-motion'

export const Reveal = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
)

export const Section = ({ id, label, title, children }) => (
  <section id={id} className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-20">
    <Reveal>
      <p className="label">{label}</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
    </Reveal>
    <div className="mt-10">{children}</div>
  </section>
)
