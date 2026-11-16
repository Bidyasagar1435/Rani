import { Heart, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { birthdayPages } from '../data/birthdayPages.js'
import './SiteFooter.css'

function SiteFooter() {
  const storyPages = birthdayPages.slice(0, 3)
  const heartfeltPages = birthdayPages.slice(3)

  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="site-footer-about">
          <Link className="site-footer-brand" to="/">
            <span className="site-footer-mark">R</span>
            <span>FOR RANI, WITH LOVE</span>
          </Link>
          <p>A little birthday story, made just for you.</p>
          <span className="site-footer-made"><Heart size={12} /> Made with 🖤 by BHOLU</span>
        </div>

        <nav className="site-footer-nav" aria-label="Birthday story pages">
          <span className="site-footer-nav-title">THE STORY</span>
          {storyPages.map((page) => (
            <Link key={page.id} to={page.path}>{page.label}</Link>
          ))}
        </nav>

        <nav className="site-footer-nav" aria-label="More birthday pages">
          <span className="site-footer-nav-title">THE LITTLE EXTRAS</span>
          {heartfeltPages.map((page) => (
            <Link key={page.id} to={page.path}>{page.label}</Link>
          ))}
        </nav>

        <div className="site-footer-signoff">
          <Sparkles size={17} />
          <p>Today, tomorrow,<br />and all the days after.</p>
        </div>
      </div>

      <div className="site-footer-bottom">
        <span>A LITTLE DIGITAL GIFT FOR RANI</span>
        <span>WITH LOVE, ALWAYS <Heart size={12} fill="currentColor" /></span>
      </div>
    </footer>
  )
}

export default SiteFooter
