import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Reveal, Section } from './ui'
import { galleryPhotos } from '../data/portfolio'

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  useEffect(() => {
    if (!selectedPhoto) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedPhoto(null)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedPhoto])

  return (
    <Section id="gallery" label="Gallery" title="A Few Moments">
      <p className="mb-8 max-w-2xl text-mute">
        A visual collection from beyond the screen. Select a photo to view it up close.
      </p>
      <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
        {galleryPhotos.map((photo, index) => (
          <Reveal key={photo.src} delay={index * 0.05}>
            <button
              type="button"
              onClick={() => setSelectedPhoto(photo)}
              aria-label={`View photo: ${photo.caption}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-line bg-panel text-left"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-10 text-sm font-medium text-white">
                {photo.caption}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={selectedPhoto.caption}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close photo"
              className="absolute right-4 top-4 rounded border border-white/30 bg-black/40 p-2 text-white transition hover:bg-white/15"
            >
              <X size={22} />
            </button>
            <motion.figure
              onClick={(event) => event.stopPropagation()}
              initial={{ scale: 0.96, y: 8 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 8 }}
              className="max-h-full max-w-6xl"
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-h-[82vh] w-auto rounded-lg object-contain"
              />
              <figcaption className="mt-3 text-center text-sm text-white/80">
                {selectedPhoto.caption}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
