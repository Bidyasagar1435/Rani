import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import './PageNavigation.css'

function PageNavigation({ previous, next, pageNumber, totalPages }) {
  return (
    <nav className="page-navigation" aria-label="Birthday pages">
      <Link to={previous.path} className="page-navigation-link page-navigation-previous">
        <ArrowLeft size={15} />
        <span>
          <small>PREVIOUS</small>
          <strong>{previous.title}</strong>
        </span>
      </Link>
      <span className="page-navigation-count">
        {String(pageNumber).padStart(2, '0')} <i /> {String(totalPages).padStart(2, '0')}
      </span>
      <Link to={next.path} className="page-navigation-link page-navigation-next">
        <span>
          <small>{pageNumber === totalPages ? 'RETURN TO' : 'UP NEXT'}</small>
          <strong>{next.title}</strong>
        </span>
        <ArrowRight size={15} />
      </Link>
    </nav>
  )
}

export default PageNavigation
