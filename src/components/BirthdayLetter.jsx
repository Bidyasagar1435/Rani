import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Heart, Star } from 'lucide-react'
import Reveal from './Reveal.jsx'

function BirthdayLetter({ content }) {
  const letterRef = useRef(null)
  const letterInView = useInView(letterRef, { once: true, amount: 0.35 })

  return (
    <section className="letter-section section-shell" id="letter">
      <Reveal className="letter-aside">
        <span className="eyebrow"><span className="eyebrow-line" /> {content.eyebrow}</span>
        <h2>{content.headingFirst}<br />{content.headingSecond} <em>{content.headingEmphasis}</em></h2>
        <div className="letter-aside-mark">♡</div>
        <p>{content.aside}</p>
      </Reveal>
      <motion.article
        className="letter-card"
        ref={letterRef}
        initial={{ opacity: 0, y: 24, rotate: 1 }}
        animate={letterInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="letter-topline">
          <span>{content.label}</span>
          <Heart size={16} strokeWidth={1.5} />
        </div>
        <p className="letter-salutation">{content.salutation}</p>
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="letter-signoff">
          <span>{content.signoff}</span>
          <strong>{content.signature} <span>♡</span></strong>
        </div>
        <div className="letter-stamp"><Star size={15} fill="currentColor" /><span>WITH LOVE</span></div>
      </motion.article>
    </section>
  )
}

export default BirthdayLetter
