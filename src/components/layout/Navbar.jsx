import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FaBars, FaXmark, FaChevronDown, FaArrowRight } from 'react-icons/fa6'
import logo from '../../assets/logo-mark.webp'
import { navLinks } from '../../data/site'
import { services } from '../../data/services'
import SocialLinks from '../ui/SocialLinks'

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

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open)
    return () => document.documentElement.classList.remove('menu-open')
  }, [open])

  // Close the menu if the screen grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 992px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`navbar ${scrolled || open ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <Link to="/" className="brand" onClick={close}>
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

          <button
            type="button"
            className="menu-btn"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Rendered outside the header: the header's backdrop blur would otherwise
          trap this fixed panel inside the header box on mobile browsers */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            {navLinks.map((l, i) =>
              l.dropdown ? (
                <div key={l.to}>
                  <button type="button" className="mobile-link" onClick={() => setMobileServices((v) => !v)}>
                    <span>0{i + 1}</span> {l.label}
                    <FaChevronDown className={`caret ${mobileServices ? 'up' : ''}`} />
                  </button>
                  {mobileServices && (
                    <div className="mobile-sub">
                      <Link to="/services" onClick={close}>All Services</Link>
                      {services.map((s) => (
                        <Link key={s.slug} to={`/services/${s.slug}`} onClick={close}>
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink key={l.to} to={l.to} end={l.to === '/'} className="mobile-link" onClick={close}>
                  <span>0{i + 1}</span> {l.label}
                </NavLink>
              ),
            )}
            <Link to="/contact" className="btn btn-primary" onClick={close}>
              Get Free Quote <FaArrowRight />
            </Link>
            <SocialLinks className="mobile-socials" />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
