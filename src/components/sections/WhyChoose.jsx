import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { features } from '../../data/content'

export default function WhyChoose({ image = '/images/level-work.jpg' }) {
  return (
    <section className="section why">
      <div className="container why-inner">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Why Choose Us"
            title="Built On Quality,"
            highlight="Finished With Pride"
            text="No shortcuts, no mess, just honest work and results that last for years."
          />
          <div className="features-grid">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <Reveal key={f.title} delay={i * 0.07} className="feature">
                  <span className="feature-icon">
                    <Icon />
                  </span>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>

        <Reveal className="why-visual" x={50} y={0}>
          <div className="why-img">
            <img src={image} alt="Precision tiling work" loading="lazy" />
          </div>
          <motion.div
            className="why-badge"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <strong>100%</strong>
            <span>Satisfaction
              <br />
              Guaranteed</span>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
