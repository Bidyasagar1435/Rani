import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Camera, X } from 'lucide-react'
import Reveal from './Reveal.jsx'

function MemoryGallery({ content }) {
  const [selectedMemory, setSelectedMemory] = useState(null)

  useEffect(() => {
    if (!selectedMemory) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedMemory(null)
    }

    window.addEventListener('keydown', closeOnEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      document.body.style.overflow = ''
    }
  }, [selectedMemory])

  return (
    <section className="memories-section section-shell" id="memories">
      <div className="memories-top">
        <Reveal className="section-heading">
          <span className="eyebrow"><span className="eyebrow-line" /> {content.eyebrow}</span>
          <h2>{content.headingFirst}<br />{content.headingSecond} <em>{content.headingEmphasis}</em></h2>
        </Reveal>
        <Reveal className="memories-intro" delay={0.12}>
          <Camera size={19} strokeWidth={1.4} />
          <p>{content.intro}</p>
          <span>{content.introFooter}</span>
        </Reveal>
      </div>
      <div className="memory-grid">
        {content.memories.map((memory, index) => (
          <Reveal className={`memory-card ${memory.className}`} delay={index * 0.08} key={memory.image}>
            <button
              className="memory-image-button"
              onClick={() => setSelectedMemory(memory)}
              aria-label={`View photo: ${memory.caption}`}
            >
              <img src={memory.image} alt={memory.alt} loading="lazy" decoding="async" />
              <span className="memory-open"><ArrowUpRight size={17} /></span>
              <span className="memory-caption">{memory.caption}</span>
            </button>
          </Reveal>
        ))}
      </div>
      <div className="gallery-note"><span>✦</span> {content.galleryFooter}</div>

      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMemory(null)}
            role="presentation"
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.94, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 10 }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={selectedMemory.caption}
            >
              <button className="lightbox-close" onClick={() => setSelectedMemory(null)} aria-label="Close photo">
                <X size={20} />
              </button>
              <img src={selectedMemory.image} alt={selectedMemory.alt} decoding="async" />
              <p>{selectedMemory.caption} <span>♡</span></p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default MemoryGallery
