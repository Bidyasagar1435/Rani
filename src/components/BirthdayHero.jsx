import { motion } from 'motion/react'
import { ArrowDown, ArrowRight, Heart, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const MotionLink = motion(Link)

function BirthdayHero({ content }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <motion.div
          className="eyebrow hero-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <span className="eyebrow-line" />
          {content.eyebrow}
          <Sparkles size={13} strokeWidth={1.5} />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {content.headingFirst}
          <br />
          {content.headingSecond} <em>{content.headingEmphasis}</em>
        </motion.h1>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {content.description}
        </motion.p>
        <MotionLink
          className="primary-button"
          to="/birthday/surprise"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {content.buttonLabel} <ArrowRight size={16} />
        </MotionLink>
        <div className="hero-footnote">
          <span className="tiny-heart">♡</span>
          {content.footnote}
        </div>
      </div>

      <motion.div
        className="hero-art"
        initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="portrait-frame">
          <img
            src={content.portrait}
            alt={content.portraitAlt}
            decoding="async"
            fetchPriority="high"
          />
          <div className="portrait-shade" />
          <div className="portrait-label">
            <span>{content.portraitOverline}</span>
            <strong>{content.portraitCaption}</strong>
          </div>
        </div>
        <motion.div
          className="orbit-note orbit-note-top"
          animate={{ y: [0, -7, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span>✦</span> {content.floatingNote}
        </motion.div>
        <motion.div
          className="orbit-note orbit-note-bottom"
          animate={{ y: [0, 6, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Heart size={14} fill="currentColor" /> {content.floatingNoteSecondary}
        </motion.div>
        <div className="portrait-ring" />
      </motion.div>

      <Link className="scroll-cue" to="/birthday/surprise">
        <span>{content.scrollLabel}</span>
        <ArrowDown size={14} />
      </Link>
      <span className="hero-index">01 — 06</span>
    </section>
  )
}

export default BirthdayHero
