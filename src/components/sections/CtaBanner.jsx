import { Link } from 'react-router-dom'
import { FaArrowRight, FaPhone } from 'react-icons/fa6'
import Reveal from '../ui/Reveal'
import { site } from '../../data/site'

export default function CtaBanner({
  title = 'Ready To Transform Your Space?',
  text = 'Get a free, no obligation quote for tiling, painting, carpentry or plumbing.',
}) {
  return (
    <section className="cta-section">
      <div className="container">
        <Reveal className="cta-banner">
          <div className="cta-pattern" />
          <div className="cta-text">
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-dark">
              Get Free Quote <FaArrowRight className="btn-arrow" />
            </Link>
            <a href={site.phoneHref} className="btn btn-light">
              <FaPhone /> {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
