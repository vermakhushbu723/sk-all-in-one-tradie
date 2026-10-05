import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaLocationDot } from 'react-icons/fa6'
import logo from '../../assets/logo-mark.webp'
import { navLinks, site, whatsappLink } from '../../data/site'
import { services } from '../../data/services'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo-link">
            <img src={logo} alt="SK All In One Tradie" className="footer-logo" />
            <span className="brand-text">
              <strong>SK</strong> All In One <em>Tradie</em>
            </span>
          </Link>
          <p>Trusted local experts in tiling, painting, carpentry and plumbing. Quality craftsmanship on every job.</p>
          <div className="socials">
            <a href={site.socials.facebook} aria-label="Facebook"><FaFacebookF /></a>
            <a href={site.socials.instagram} aria-label="Instagram"><FaInstagram /></a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        <div>
          <h5>Quick Links</h5>
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h5>Services</h5>
          <ul>
            {services.map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>
            ))}
            <li><Link to="/projects">Our Projects</Link></li>
          </ul>
        </div>

        <div>
          <h5>Contact</h5>
          <ul className="footer-contact">
            <li><FaPhone /> <a href={site.phoneHref}>{site.phone}</a></li>
            <li><FaEnvelope /> <a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><FaLocationDot /> {site.address}</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>&copy; {year} {site.name}. All rights reserved.</span>
          <span>{site.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
