import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

function GiftSurprise({ content, giftOpened, onOpen }) {
  return (
    <section className="surprise-section section-shell" id="surprise">
      <Reveal className="section-heading centered-heading">
        <span className="eyebrow"><span className="eyebrow-line" /> {content.eyebrow}</span>
        <h2>{content.title} <em>{content.titleEmphasis}</em> {content.titleEnding}</h2>
        <p>{content.description}</p>
      </Reveal>

      <div className="gift-stage">
        <div className="gift-halo" />
        <motion.div
          className={`gift-wrap ${giftOpened ? 'is-open' : ''}`}
          onClick={onOpen}
          role="button"
          tabIndex={0}
          aria-label={giftOpened ? 'Birthday gift opened' : 'Open your birthday gift'}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') onOpen()
          }}
          whileHover={!giftOpened ? { y: -7, rotate: -1 } : undefined}
          whileTap={!giftOpened ? { scale: 0.97 } : undefined}
        >
          <motion.div
            className="gift-lid"
            animate={giftOpened ? { y: -82, rotate: -13, opacity: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="gift-ribbon gift-ribbon-lid" />
            <span className="gift-bow"><i /><i /></span>
          </motion.div>
          <div className="gift-box">
            <span className="gift-ribbon gift-ribbon-box" />
            <span className="gift-heart">♡</span>
          </div>
          <div className="gift-shadow" />
        </motion.div>
        <AnimatePresence>
          {giftOpened && (
            <motion.div
              className="gift-message"
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.28, duration: 0.65 }}
            >
              <span className="eyebrow">{content.wishEyebrow}</span>
              <h3>{content.wishFirst} <em>{content.wishEmphasis}</em> {content.wishEnding}</h3>
              <p>{content.wishDescription}</p>
              <Link to="/birthday/memories" className="text-link">{content.nextLabel} <ArrowRight size={15} /></Link>
            </motion.div>
          )}
        </AnimatePresence>
        {!giftOpened && <p className="gift-prompt">{content.giftPrompt}</p>}
      </div>
    </section>
  )
}

export default GiftSurprise
