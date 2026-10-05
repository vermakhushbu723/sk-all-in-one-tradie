import { Link, useParams } from 'react-router-dom'
import { FaArrowRight, FaCircleCheck, FaCheck, FaPhone, FaWhatsapp } from 'react-icons/fa6'
import PageHeader from '../components/ui/PageHeader'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import ProcessSteps from '../components/sections/ProcessSteps'
import ProjectCard from '../components/sections/ProjectCard'
import FaqAccordion from '../components/sections/FaqAccordion'
import CtaBanner from '../components/sections/CtaBanner'
import { getService, services } from '../data/services'
import { projects } from '../data/projects'
import { site, whatsappLink } from '../data/site'
import NotFound from './NotFound'

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = getService(slug)
  if (!s) return <NotFound />

  const related = projects.filter((p) => p.category === s.category).slice(0, 3)
  const others = services.filter((o) => o.slug !== s.slug)

  return (
    <>
      <PageHeader
        title={s.title}
        text={s.excerpt}
        image={s.banner}
        crumbs={[{ label: 'Services', to: '/services' }, { label: s.title }]}
      />

      {/* Overview */}
      <section className="section section-light">
        <div className="container detail-layout">
          <div className="detail-main">
            <Reveal className="detail-hero-img">
              <img src={s.image} alt={s.title} />
            </Reveal>
            <SectionHeading align="left" eyebrow="Service Overview" title={`Professional ${s.title}`} />
            <Reveal>
              <p className="body-text">{s.intro}</p>
              <p className="body-text">{s.body}</p>
            </Reveal>
            <div className="mini-stats">
              {s.stats.map((st, i) => (
                <Reveal key={st.label} delay={i * 0.1} className="mini-stat">
                  <strong>{st.value}</strong>
                  <span>{st.label}</span>
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="detail-side">
            <Reveal className="side-card">
              <h4>Our Services</h4>
              <div className="side-links">
                {services.map((o) => (
                  <Link key={o.slug} to={`/services/${o.slug}`} className={o.slug === s.slug ? 'active' : ''}>
                    {o.title} <FaArrowRight />
                  </Link>
                ))}
              </div>
            </Reveal>
            <Reveal className="side-card" delay={0.1}>
              <h4>Why Choose Us</h4>
              <ul className="side-list">
                {s.highlights.map((h) => (
                  <li key={h}><FaCircleCheck /> {h}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="side-card side-cta" delay={0.2}>
              <h4>Need {s.short}?</h4>
              <p>Get a free, no obligation quote within 24 hours.</p>
              <a href={site.phoneHref} className="btn btn-dark btn-block">
                <FaPhone /> {site.phone}
              </a>
              <a
                href={whatsappLink(`${site.whatsappText} ${s.title}`)}
                target="_blank"
                rel="noreferrer"
                className="btn btn-light btn-block"
              >
                <FaWhatsapp /> WhatsApp Us
              </a>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Sub services */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What's Included"
            title={`Our ${s.short}`}
            highlight="Solutions"
            text={`Every ${s.short.toLowerCase()} job is tailored to your space, style and budget.`}
          />
          <div className="sub-grid">
            {s.subServices.map((sub, i) => {
              const Icon = sub.icon
              return (
                <Reveal key={sub.title} delay={i * 0.07} className="sub-card">
                  <span className="sub-icon"><Icon /></span>
                  <h4>{sub.title}</h4>
                  <p>{sub.desc}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits + gallery */}
      <section className="section section-light">
        <div className="container split">
          <Reveal className="gallery-grid" x={-50} y={0}>
            {s.gallery.map((g, i) => (
              <img key={g} src={g} alt={`${s.title} example ${i + 1}`} loading="lazy" />
            ))}
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="The SK Difference"
              title="Quality You Can"
              highlight="See & Feel"
            />
            <ul className="benefit-list">
              {s.benefits.map((b, i) => (
                <Reveal as="li" key={b} delay={i * 0.06}>
                  <span><FaCheck /></span> {b}
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.2}>
              <Link to="/contact" className="btn btn-primary">
                Book a Free Quote <FaArrowRight className="btn-arrow" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <ProcessSteps steps={s.process} title={`Our ${s.short}`} highlight="Process" />

      {related.length > 0 && (
        <section className="section section-light">
          <div className="container">
            <div className="heading-row">
              <SectionHeading align="left" eyebrow="Recent Work" title={`${s.short}`} highlight="Projects" />
              <Reveal>
                <Link to={`/projects?category=${s.category}`} className="btn btn-outline-dark">
                  See All <FaArrowRight className="btn-arrow" />
                </Link>
              </Reveal>
            </div>
            <div className="projects-grid three">
              {related.map((p, i) => (
                <ProjectCard key={p.slug} p={p} i={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <FaqAccordion faqs={s.faqs} image={s.gallery[0]} />

      <section className="section section-light">
        <div className="container">
          <SectionHeading eyebrow="Also Available" title="Our Other" highlight="Services" />
          <div className="other-grid">
            {others.map((o, i) => {
              const Icon = o.icon
              return (
                <Reveal key={o.slug} delay={i * 0.1}>
                  <Link to={`/services/${o.slug}`} className="other-card">
                    <div className="other-img">
                      <img src={o.image} alt={o.title} loading="lazy" />
                      <span className="other-icon"><Icon /></span>
                    </div>
                    <div className="other-body">
                      <h4>{o.title}</h4>
                      <p>{o.excerpt}</p>
                      <span className="card-link">
                        Learn More <FaArrowRight />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner title={`Ready For ${s.title}?`} />
    </>
  )
}
