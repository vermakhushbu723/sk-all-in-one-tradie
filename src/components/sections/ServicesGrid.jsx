import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight, FaCheck } from 'react-icons/fa6'
import { services } from '../../data/services'

export function ServiceCard({ s, i = 0 }) {
  const Icon = s.icon
  return (
    <motion.article
      className="service-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/services/${s.slug}`} className="service-media">
        <img src={s.image} alt={s.title} loading="lazy" />
        <span className="service-icon">
          <Icon />
        </span>
        <span className="card-number">0{i + 1}</span>
      </Link>
      <div className="service-body">
        <h3>
          <Link to={`/services/${s.slug}`}>{s.title}</Link>
        </h3>
        <p>{s.excerpt}</p>
        <ul>
          {s.highlights.map((h) => (
            <li key={h}>
              <FaCheck /> {h}
            </li>
          ))}
        </ul>
        <Link to={`/services/${s.slug}`} className="card-link">
          Explore Service <FaArrowRight />
        </Link>
      </div>
    </motion.article>
  )
}

export default function ServicesGrid() {
  return (
    <div className="services-grid">
      {services.map((s, i) => (
        <ServiceCard key={s.slug} s={s} i={i} />
      ))}
    </div>
  )
}
