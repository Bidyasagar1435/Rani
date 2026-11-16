import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, CakeSlice, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

function BirthdayFinale({ content }) {
  const [celebrating, setCelebrating] = useState(false)

  return (
    <section className={`finale-section ${celebrating ? 'is-celebrating' : ''}`} id="finale">
      <div className="finale-glow" />
      <AnimatePresence>
        {celebrating && (
          <div className="confetti-field" aria-hidden="true">
            {Array.from({ length: 32 }, (_, index) => (
              <motion.span
                key={index}
                initial={{ y: -30, x: `${(index % 8) * 13}%`, opacity: 0, rotate: 0 }}
                animate={{
                  y: ['0vh', '105vh'],
                  x: [`${(index % 8) * 13}%`, `${(index % 8) * 13 + (index % 2 ? 8 : -8)}%`],
                  opacity: [0, 1, 1, 0],
                  rotate: [0, 300 + index * 17],
                }}
                transition={{ duration: 3 + (index % 4) * 0.55, delay: (index % 9) * 0.12, ease: 'easeIn' }}
              >
                {index % 3 === 0 ? '♡' : index % 3 === 1 ? '✦' : '·'}
              </motion.span>
            ))}
          </div>
        )}
      </AnimatePresence>
      <Reveal className="finale-content">
        <span className="eyebrow"><span className="eyebrow-line" /> {content.eyebrow}</span>
        <CakeSlice className="finale-cake" size={27} strokeWidth={1.2} />
        <h2>{content.headingFirst}<br /><em>{content.headingEmphasis}</em></h2>
        <p>{content.messageFirst}<br />{content.messageSecond}</p>
        <button className="primary-button finale-button" onClick={() => setCelebrating((value) => !value)}>
          {celebrating ? content.buttonAgainLabel : content.buttonLabel}
          <Sparkles size={16} />
        </button>
        <Link className="replay-button" to="/birthday/intro">
          <ArrowLeft size={14} /> {content.replayLabel}
        </Link>
      </Reveal>
    </section>
  )
}

export default BirthdayFinale
