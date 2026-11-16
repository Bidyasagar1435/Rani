import { motion } from 'motion/react'
import { ArrowRight, Heart, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import welcomePage from './data/pages/welcome.js'
import MobileNavbar from './components/MobileNavbar.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import './Welcome.css'

function Welcome() {
  const content = welcomePage

  return (
    <main className="welcome-page">
      <div className="welcome-glow welcome-glow-left" aria-hidden="true" />
      <div className="welcome-glow welcome-glow-right" aria-hidden="true" />

      <header className="welcome-header">
        <Link className="welcome-brand" to="/" aria-label="Rani's birthday welcome">
          <span className="welcome-brand-mark">R</span>
          <span>{content.brand}</span>
        </Link>
        <span className="welcome-header-note">{content.headerNote} <Sparkles size={13} /></span>
        <MobileNavbar />
      </header>

      <section className="welcome-hero">
        <motion.div
          className="welcome-copy"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="welcome-eyebrow"><span /> {content.eyebrow}</div>
          <h1>
            {content.heading.map((line) => <span key={line}>{line}<br /></span>)}
            <span>{content.headingLead} <em>{content.headingEmphasis}</em></span>
          </h1>
          <p>
            {content.descriptionFirst}
            <br className="welcome-desktop-break" /> {content.descriptionSecond}
          </p>
          <Link className="welcome-cta" to="/birthday">
            {content.buttonLabel} <ArrowRight size={16} />
          </Link>
          <div className="welcome-signature"><Heart size={13} /> {content.signature}</div>
        </motion.div>

        <motion.div
          className="welcome-portrait"
          initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="welcome-photo">
            <img
              src={content.portrait}
              alt={content.portraitAlt}
              decoding="async"
              fetchPriority="high"
            />
            <div className="welcome-photo-shade" />
            <div className="welcome-photo-caption">
              <span>{content.portraitOverline}</span>
              <strong>{content.portraitCaption}</strong>
            </div>
          </div>
          <motion.div
            className="welcome-floating-note"
            animate={{ y: [0, -7, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles size={14} /> {content.floatingNote}
          </motion.div>
          <div className="welcome-photo-outline" />
          <span className="welcome-side-note">{content.sideNote} <span>✦</span></span>
        </motion.div>

        <div className="welcome-bottom">
          <span>01 <i /> {content.footerLeft}</span>
          <span>{content.footerRight} <Heart size={12} /></span>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}

export default Welcome
