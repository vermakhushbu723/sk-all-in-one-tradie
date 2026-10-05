import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { steps as defaultSteps } from '../../data/content'

export default function ProcessSteps({ steps = defaultSteps, title = 'Simple', highlight = '4 Step Process', light }) {
  return (
    <section className={`section process ${light ? 'section-light' : ''}`}>
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title={title}
          highlight={highlight}
          text="A smooth, stress free experience from your first call to the final walkthrough."
        />
        <div className="process-grid">
          <motion.span
            className="process-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          />
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                className="step"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
              >
                <div className="step-icon">
                  <Icon />
                  <span className="step-num">{i + 1}</span>
                </div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
