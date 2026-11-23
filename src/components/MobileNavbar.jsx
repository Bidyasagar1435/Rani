import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Heart, Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { birthdayPages } from '../data/birthdayPages.js'
import './MobileNavbar.css'

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen])

  return (
    <>
      <button
        className="mobile-nav-trigger"
        type="button"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              role="presentation"
            >
              <motion.nav
                className="mobile-nav-panel"
                id="mobile-navigation"
                aria-label="Birthday pages"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                onClick={(event) => event.stopPropagation()}
              >
              <div className="mobile-nav-panel-heading">
                <div>
                  <span className="eyebrow"><span className="eyebrow-line" /> YOUR BIRTHDAY STORY</span>
                  <h2>Choose a chapter.</h2>
                </div>
                <button
                  type="button"
                  className="mobile-nav-close"
                  aria-label="Close navigation menu"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={19} />
                </button>
              </div>

              <div className="mobile-nav-links">
                {birthdayPages.map((page, index) => (
                  <NavLink
                    key={page.id}
                    to={page.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `mobile-nav-link${isActive ? ' is-active' : ''}`
                    }
                  >
                    <span className="mobile-nav-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="mobile-nav-label">{page.label}</span>
                    <ArrowUpRight size={15} />
                  </NavLink>
                ))}
              </div>

              <Link className="mobile-nav-welcome" to="/" onClick={() => setIsOpen(false)}>
                <Heart size={14} /> Back to the welcome page
              </Link>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  )
}

export default MobileNavbar
