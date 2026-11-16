import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

function FriendshipSection({ content }) {
  return (
    <section className="friendship-section section-shell" id="friendship">
      <Reveal className="section-heading centered-heading">
        <span className="eyebrow"><span className="eyebrow-line" /> {content.eyebrow}</span>
        <h2>{content.headingFirst} <em>{content.headingEmphasis}</em></h2>
        <p>{content.description}</p>
      </Reveal>
      <div className="friendship-grid">
        {content.notes.map((note, index) => (
          <Reveal className="friendship-card" key={note.title} delay={index * 0.1}>
            <span className="friendship-icon">{note.icon}</span>
            <span className="friendship-number">0{index + 1}</span>
            <h3>{note.title}</h3>
            <p>{note.text}</p>
            <span className="friendship-heart">♡</span>
          </Reveal>
        ))}
      </div>
      <Link className="friendship-report-link" to="/birthday/report">
        {content.reportCta} <ArrowRight size={15} />
      </Link>
    </section>
  )
}

export default FriendshipSection
