import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa6'
import { services } from '../../data/services'

const categoryLabel = (cat) => services.find((s) => s.category === cat)?.title

export default function ProjectCard({ p, i = 0 }) {
  return (
    <motion.article
      layout
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: i * 0.06 }}
    >
      <Link to={`/projects/${p.slug}`}>
        <div className="project-img">
          <img src={p.cover} alt={p.title} loading="lazy" />
          <span className="project-tag">{categoryLabel(p.category)}</span>
          <span className="project-arrow">
            <FaArrowRight />
          </span>
        </div>
        <div className="project-info">
          <h4>{p.title}</h4>
          <span>
            View Project <FaArrowRight />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
