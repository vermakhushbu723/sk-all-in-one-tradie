import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  FaArrowLeft,
  FaArrowRight,
  FaClock,
  FaCalendar,
  FaLayerGroup,
  FaCheck,
  FaXmark,
  FaExpand,
} from 'react-icons/fa6'
import PageHeader from '../components/ui/PageHeader'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import ProjectCard from '../components/sections/ProjectCard'
import CtaBanner from '../components/sections/CtaBanner'
import { getProject, projects } from '../data/projects'
import { services } from '../data/services'
import NotFound from './NotFound'

// Keyed by slug so gallery state resets when moving between projects
export default function ProjectDetailRoute() {
  const { slug } = useParams()
  return <ProjectDetail key={slug} slug={slug} />
}

function ProjectDetail({ slug }) {
  const p = getProject(slug)
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  useEffect(() => {
    if (!lightbox || !p) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(false)
      if (e.key === 'ArrowRight') setCurrent((c) => (c + 1) % p.images.length)
      if (e.key === 'ArrowLeft') setCurrent((c) => (c - 1 + p.images.length) % p.images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, p])

  if (!p) return <NotFound />

  const service = services.find((s) => s.category === p.category)
  const idx = projects.findIndex((x) => x.slug === p.slug)
  const prev = projects[(idx - 1 + projects.length) % projects.length]
  const next = projects[(idx + 1) % projects.length]
  const related = projects.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3)

  const info = [
    { icon: FaLayerGroup, label: 'Service', value: service.title },
    { icon: FaClock, label: 'Duration', value: p.duration },
    { icon: FaCalendar, label: 'Completed', value: p.year },
  ]

  return (
    <>
      <PageHeader
        title={p.title}
        text={p.summary}
        image={p.cover}
        crumbs={[{ label: 'Projects', to: '/projects' }, { label: p.title }]}
      />

      <section className="section section-light">
        <div className="container detail-layout">
          <div className="detail-main">
            <Reveal className="project-gallery">
              <div className="gallery-main" onClick={() => setLightbox(true)}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={p.images[current]}
                    src={p.images[current]}
                    alt={p.title}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>
                <span className="gallery-expand"><FaExpand /></span>
              </div>
              <div className="gallery-thumbs">
                {p.images.map((img, i) => (
                  <button key={img} className={i === current ? 'active' : ''} onClick={() => setCurrent(i)}>
                    <img src={img} alt={`${p.title} ${i + 1}`} />
                  </button>
                ))}
              </div>
            </Reveal>

            <SectionHeading align="left" eyebrow="Project Overview" title="About This" highlight="Project" />
            <Reveal>
              <p className="body-text">{p.description}</p>
            </Reveal>

            <h4 className="sub-title">Scope of Work</h4>
            <ul className="scope-list">
              {p.scope.map((s, i) => (
                <Reveal as="li" key={s} delay={i * 0.05}>
                  <FaCheck /> {s}
                </Reveal>
              ))}
            </ul>
          </div>

          <aside className="detail-side">
            <Reveal className="side-card">
              <h4>Project Details</h4>
              <ul className="info-list">
                {info.map((it) => {
                  const Icon = it.icon
                  return (
                    <li key={it.label}>
                      <span className="info-list-icon"><Icon /></span>
                      <div>
                        <small>{it.label}</small>
                        <strong>{it.value}</strong>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </Reveal>
            <Reveal className="side-card side-cta" delay={0.1}>
              <h4>Want a similar result?</h4>
              <p>Tell us about your space and we will send a free quote.</p>
              <Link to="/contact" className="btn btn-dark btn-block">
                Get Free Quote <FaArrowRight className="btn-arrow" />
              </Link>
              <Link to={`/services/${service.slug}`} className="btn btn-light btn-block">
                View {service.short} Service
              </Link>
            </Reveal>
          </aside>
        </div>

        <div className="container">
          <div className="project-nav">
            <Link to={`/projects/${prev.slug}`}>
              <FaArrowLeft />
              <span>
                <small>Previous</small>
                {prev.title}
              </span>
            </Link>
            <Link to={`/projects/${next.slug}`} className="next">
              <span>
                <small>Next</small>
                {next.title}
              </span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="More Work" title="Related" highlight="Projects" />
            <div className="projects-grid three">
              {related.map((r, i) => (
                <ProjectCard key={r.slug} p={r} i={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
          >
            <button className="lb-close" aria-label="Close"><FaXmark /></button>
            <button
              className="lb-nav lb-prev"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation()
                setCurrent((c) => (c - 1 + p.images.length) % p.images.length)
              }}
            >
              <FaArrowLeft />
            </button>
            <motion.img
              key={current}
              src={p.images[current]}
              alt={p.title}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="lb-nav lb-next"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation()
                setCurrent((c) => (c + 1) % p.images.length)
              }}
            >
              <FaArrowRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
