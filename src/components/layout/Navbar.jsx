import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FaBars, FaXmark, FaChevronDown, FaArrowRight } from 'react-icons/fa6'
import logo from '../../assets/logo-mark.webp'
import { navLinks } from '../../data/site'
import { services } from '../../data/services'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`navbar ${scrolled || open ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="SK All In One Tradie logo" className="brand-logo" />
          <span className="brand-text">
            <strong>SK</strong> All In One <em>Tradie</em>
          </span>
        </Link>

        <nav className="nav-links">
          {navLinks.map((l) =>
            l.dropdown ? (
              <div key={l.to} className="nav-dropdown">
                <NavLink to={l.to} className="nav-link">
                  {l.label} <FaChevronDown className="caret" />
                </NavLink>
                <div className="dropdown-menu">
                  {services.map((s) => {
                    const Icon = s.icon
                    return (
                      <Link key={s.slug} to={`/services/${s.slug}`} className="dropdown-item">
                        <span className="dropdown-icon">
                          <Icon />
                        </span>
                        <span>
                          <strong>{s.title}</strong>
                          <small>{s.highlights[0]}</small>
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ) : (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className="nav-link">
                {l.label}
              </NavLink>
            ),
          )}
        </nav>

        <Link to="/contact" className="btn btn-primary btn-sm nav-cta">
          Free Quote <FaArrowRight className="btn-arrow" />
        </Link>

        <button className="menu-btn" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.target.closest('a') && setOpen(false)}
          >
            {navLinks.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i }}
              >
                {l.dropdown ? (
                  <>
                    <button className="mobile-link" onClick={() => setMobileServices((v) => !v)}>
                      <span>0{i + 1}</span> {l.label}
                      <FaChevronDown className={`caret ${mobileServices ? 'up' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {mobileServices && (
                        <motion.div
                          className="mobile-sub"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                        >
                          <Link to="/services">All Services</Link>
                          {services.map((s) => (
                            <Link key={s.slug} to={`/services/${s.slug}`}>
                              {s.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <NavLink to={l.to} end={l.to === '/'} className="mobile-link">
                    <span>0{i + 1}</span> {l.label}
                  </NavLink>
                )}
              </motion.div>
            ))}
            <Link to="/contact" className="btn btn-primary">
              Get Free Quote <FaArrowRight />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
