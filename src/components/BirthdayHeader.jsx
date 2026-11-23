import { Link, NavLink } from 'react-router-dom'
import { birthdayPages } from '../data/birthdayPages.js'
import MobileNavbar from './MobileNavbar.jsx'

function BirthdayHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="Return to Rani's birthday welcome">
        <span className="wordmark-mark">R</span>
        <span>FOR RANI, WITH LOVE</span>
      </Link>
      <nav className="top-nav" aria-label="Main navigation">
        {birthdayPages.slice(0, 7).map((page) => (
          <NavLink
            key={page.id}
            to={page.path}
            className={({ isActive }) => (isActive ? 'is-active' : undefined)}
          >
            {page.label}
          </NavLink>
        ))}
      </nav>
      <NavLink className="header-date" to="/birthday/candle">
        HER DAY <span>·</span> {String(birthdayPages.length).padStart(2, '0')}
      </NavLink>
      <MobileNavbar />
    </header>
  )
}

export default BirthdayHeader
