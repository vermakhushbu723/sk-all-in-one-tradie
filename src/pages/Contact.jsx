import { useSearchParams } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaClock, FaWhatsapp, FaCircleCheck } from 'react-icons/fa6'
import PageHeader from '../components/ui/PageHeader'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import ContactForm from '../components/sections/ContactForm'
import FaqAccordion from '../components/sections/FaqAccordion'
import SocialLinks from '../components/ui/SocialLinks'
import { site, whatsappLink } from '../data/site'
import { getService, services } from '../data/services'

const info = [
  { icon: FaPhone, label: 'Call Us', value: site.phone, href: site.phoneHref },
  { icon: FaEnvelope, label: 'Email Us', value: site.email, href: `mailto:${site.email}` },
  { icon: FaClock, label: 'Working Hours', value: site.hours },
]

export default function Contact() {
  const [params] = useSearchParams()
  const preset = getService(params.get('service'))?.title || ''

  return (
    <>
      <PageHeader
        title="Contact Us"
        text="Tell us about your project and get a free, no obligation quote within 24 hours."
        image="/images/kitchen-island.jpg"
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="section section-light">
        <div className="container">
          <div className="info-grid">
            {info.map((c, i) => {
              const Icon = c.icon
              const body = (
                <>
                  <span className="info-icon"><Icon /></span>
                  <div>
                    <small>{c.label}</small>
                    <strong>{c.value}</strong>
                  </div>
                </>
              )
              return (
                <Reveal key={c.label} delay={i * 0.08}>
                  {c.href ? (
                    <a href={c.href} className="info-card">{body}</a>
                  ) : (
                    <div className="info-card">{body}</div>
                  )}
                </Reveal>
              )
            })}
          </div>

          <div className="contact-inner">
            <Reveal className="contact-form-wrap" x={-40} y={0}>
              <SectionHeading align="left" eyebrow="Get In Touch" title="Request A" highlight="Free Quote" />
              <ContactForm defaultService={preset} />
            </Reveal>

            <Reveal className="contact-side" x={40} y={0}>
              <div className="contact-visual">
                <img src="/images/consult.jpg" alt="Tradie arriving for a free quote" loading="lazy" />
                <div className="contact-visual-card">
                  <strong>One call, four trades</strong>
                  <ul>
                    {services.map((s) => (
                      <li key={s.slug}><FaCircleCheck /> {s.title}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="wa-card">
                <span className="wa-card-icon"><FaWhatsapp /></span>
                <div>
                  <strong>Prefer WhatsApp?</strong>
                  <span>Send photos of your space for a faster quote.</span>
                </div>
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-wa btn-sm">
                  Chat Now
                </a>
              </div>
              <div className="follow-card">
                <div>
                  <strong>Follow Us</strong>
                  <span>See our latest projects on Facebook &amp; Instagram.</span>
                </div>
                <SocialLinks />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqAccordion />
    </>
  )
}
