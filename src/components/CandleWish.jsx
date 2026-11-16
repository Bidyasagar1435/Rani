import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Sparkles, Wind } from 'lucide-react'
import './CandleWish.css'

const message = 'Happy birthday, friend who makes ordinary days brighter and every memory more meaningful. Thank you for your laughter, kindness, loyalty, and all the little moments that feel like home. When i am in my lowelest you make my day stressless and anxityless, so special thank u for that. I hope this year brings you endless joy, brave adventures, and every beautiful thing your heart deserves. May be another universe we will be classmate again. Keep shining bright, always.'

function CandleWish() {
  const [hasBlown, setHasBlown] = useState(false)

  return (
    <section className="candle-wish-section" aria-labelledby="candle-wish-heading">
      <div className="candle-wish-copy">
        <span className="eyebrow"><span className="eyebrow-line" /> ONE LAST LITTLE WISH</span>
        <h1 id="candle-wish-heading">Make a wish, <em>Rani.</em></h1>
        <p>Take a breath, make a wish, and blow out the candle.</p>
      </div>

      <div className={`candle-stage${hasBlown ? ' is-blown' : ''}`}>
        <div className="candle-stage-glow" aria-hidden="true" />
        <div className="wish-candle" aria-label={hasBlown ? 'The candle is out' : 'The candle is lit'}>
          <div className="wish-candle-stick">
            <span className="wish-candle-stripe" />
            <AnimatePresence mode="wait">
              {hasBlown ? (
                <motion.span
                  key="smoke"
                  className="wish-candle-smoke"
                  initial={{ opacity: 0.65, scale: 0.4, y: 7 }}
                  animate={{ opacity: 0, scale: 1.15, y: -31 }}
                  transition={{ duration: 1.05, ease: 'easeOut' }}
                  aria-hidden="true"
                />
              ) : (
                <motion.span
                  key="flame"
                  className="wish-candle-flame-wrap"
                  initial={{ opacity: 0, scale: 0.45 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.2, y: -8 }}
                  transition={{ duration: 0.28 }}
                  aria-hidden="true"
                >
                  <span className="wish-candle-flame" />
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="wish-cake" aria-hidden="true">
          <div className="wish-cake-icing">
            <i />
            <i />
            <i />
          </div>
          <div className="wish-cake-sprinkles" />
          <div className="wish-cake-plate" />
        </div>
        <div className="candle-stage-sparkle candle-stage-sparkle-one" aria-hidden="true">✦</div>
        <div className="candle-stage-sparkle candle-stage-sparkle-two" aria-hidden="true">✧</div>
      </div>

      <button
        className="candle-wish-button"
        type="button"
        onClick={() => setHasBlown((blown) => !blown)}
      >
        {hasBlown ? 'Light it again' : 'Blow out the candle'}
        {hasBlown ? <Sparkles size={16} /> : <Wind size={16} />}
      </button>

      <AnimatePresence>
        {hasBlown && (
          <motion.article
            className="candle-wish-message"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            aria-live="polite"
          >
            <span className="candle-message-sparkle" aria-hidden="true">✦</span>
            <p>{message}</p>
            <span className="candle-message-signature">~BHOLU</span>
          </motion.article>
        )}
      </AnimatePresence>
    </section>
  )
}

export default CandleWish
