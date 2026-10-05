import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaChevronRight, FaHouse } from 'react-icons/fa6'

// crumbs: [{ label, to? }] - the last item is the current page
export default function PageHeader({ title, text, image, crumbs = [] }) {
  return (
    <section className="page-header">
      <motion.div
        className="page-header-bg"
        style={{ backgroundImage: `url(${image})` }}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="page-header-overlay" />
      <div className="container page-header-inner">
        <motion.nav
          className="breadcrumb"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/">
            <FaHouse /> Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <FaChevronRight className="crumb-sep" />
              {c.to ? <Link to={c.to}>{c.label}</Link> : <em>{c.label}</em>}
            </span>
          ))}
        </motion.nav>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {title}
        </motion.h1>
        {text && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {text}
          </motion.p>
        )}
      </div>
    </section>
  )
}
