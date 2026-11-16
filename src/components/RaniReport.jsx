import { motion } from 'motion/react'
import { BarChart3, ClipboardList, Heart, Sparkles } from 'lucide-react'
import Reveal from './Reveal.jsx'

function RaniReport({ content }) {
  return (
    <section className="report-section section-shell">
      <div className="report-masthead">
        <Reveal className="report-intro">
          <span className="eyebrow"><span className="eyebrow-line" /> {content.eyebrow}</span>
          <h2>{content.titleFirst}<br /><em>{content.titleEmphasis}</em></h2>
          <p>{content.description}</p>
        </Reveal>
        <Reveal className="report-summary" delay={0.1}>
          <div className="report-summary-top">
            <ClipboardList size={17} />
            <span>{content.issue}</span>
          </div>
          <small>{content.conclusionLabel}</small>
          <p>{content.conclusion}</p>
          <Heart size={16} className="report-summary-heart" />
        </Reveal>
      </div>

      <Reveal className="report-chart" delay={0.12}>
        <div className="report-chart-heading">
          <span className="report-chart-icon"><BarChart3 size={19} /></span>
          <div>
            <span className="eyebrow">{content.chartLabel}</span>
            <h3>{content.chartTitle}</h3>
            <p>{content.chartDescription}</p>
          </div>
          <span className="report-chart-stamp"><Sparkles size={14} /> 100% FRIEND SCIENCE</span>
        </div>

        <div className="report-chart-rows">
          {content.measurements.map((measurement, index) => (
            <div className="report-chart-row" key={measurement.label}>
              <span className="report-measurement">{measurement.label}</span>
              <div
                className="report-meter"
                role="meter"
                aria-label={measurement.label}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={measurement.score}
              >
                <motion.div
                  className="report-meter-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${measurement.score}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <strong className="report-score">{measurement.score}</strong>
            </div>
          ))}
        </div>
        <div className="report-axis">
          <div className="report-axis-ticks">
            <span>0</span><span>25</span><span>50</span><span>75</span><span>100</span>
          </div>
          <strong>{content.scoreLabel}</strong>
        </div>
        <p className="report-disclaimer">{content.disclaimer}</p>
      </Reveal>

      <div className="report-observations">
        <Reveal className="report-observations-heading">
          <span className="eyebrow"><span className="eyebrow-line" /> {content.observationsLabel}</span>
          <h3>{content.observationsTitle}</h3>
        </Reveal>
        <div className="report-observation-grid">
          {content.observations.map((observation, index) => (
            <Reveal className="report-observation" key={observation.marker} delay={index * 0.08}>
              <span className="report-observation-marker">{observation.marker}</span>
              <h4>{observation.title}</h4>
              <p>{observation.text}</p>
              <span className="report-observation-heart">♡</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RaniReport
