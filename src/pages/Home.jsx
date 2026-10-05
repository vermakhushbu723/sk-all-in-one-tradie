import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FaArrowRight, FaCircleCheck, FaStar, FaPhone } from 'react-icons/fa6'
import logo from '../assets/logo-mark.webp'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import Marquee from '../components/sections/Marquee'
import ServicesGrid from '../components/sections/ServicesGrid'
import StatsBand from '../components/sections/StatsBand'
import WhyChoose from '../components/sections/WhyChoose'
import ProcessSteps from '../components/sections/ProcessSteps'
import ProjectCard from '../components/sections/ProjectCard'
import Testimonials from '../components/sections/Testimonials'
import FaqAccordion from '../components/sections/FaqAccordion'
import CtaBanner from '../components/sections/CtaBanner'
import { projects } from '../data/projects'
import { site } from '../data/site'

const slides = ['/images/bathroom-dark.jpg', '/images/interior-living.jpg', '/images/kitchen-floor.jpg']
const words = ['Wall Tiling', 'Floor Tiling', 'Painting']

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

function Hero() {
  const [slide, setSlide] = useState(0)
  const [word, setWord] = useState(0)

  useEffect(() => {
    const a = setInterval(() => setSlide((i) => (i + 1) % slides.length), 6000)
    const b = setInterval(() => setWord((i) => (i + 1) % words.length), 2600)
    return () => {
      clearInterval(a)
      clearInterval(b)
    }
  }, [])

  return (
    <section className="hero">
      <AnimatePresence>
        <motion.div
          key={slide}
          className="hero-slide"
          style={{ backgroundImage: `url(${slides[slide]})` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: 7, ease: 'linear' } }}
        />
      </AnimatePresence>
      <div className="hero-overlay" />

      <div className="container hero-inner">
        <div className="hero-content">
          <motion.span className="hero-badge" {...fadeUp(0.1)}>
            <span className="pulse-dot" />
            Trusted Tiling &amp; Painting Experts
          </motion.span>

          <motion.h1 {...fadeUp(0.2)}>
            One Tradie For
            <span className="word-rotator">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[word]}
                  className="text-gradient"
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  {words[word]}
                </motion.span>
              </AnimatePresence>
            </span>
            Done Right.
          </motion.h1>

          <motion.p className="hero-text" {...fadeUp(0.3)}>
            Precision wall &amp; floor tiling and premium painting for homes and businesses. Honest pricing, clean
            worksites and a finish you will love.
          </motion.p>

          <motion.ul className="hero-points" {...fadeUp(0.4)}>
            <li><FaCircleCheck /> Free Quotes</li>
            <li><FaCircleCheck /> Licensed &amp; Insured</li>
            <li><FaCircleCheck /> Written Warranty</li>
          </motion.ul>

          <motion.div className="hero-actions" {...fadeUp(0.5)}>
            <Link to="/contact" className="btn btn-primary">
              Get Free Quote <FaArrowRight className="btn-arrow" />
            </Link>
            <a href={site.phoneHref} className="btn btn-outline">
              <FaPhone /> {site.phone}
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero-glow" />
          <img src={logo} alt="SK All In One Tradie" className="hero-logo" />

          <motion.div
            className="float-card fc-1"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="fc-stars">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </span>
            <strong>4.9 Rated</strong>
            <small>200+ happy clients</small>
          </motion.div>

          <motion.div
            className="float-card fc-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <strong>10+ Years</strong>
            <small>of craftsmanship</small>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button key={i} className={i === slide ? 'active' : ''} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  )
}

function AboutIntro() {
  return (
    <section className="section section-light about-intro">
      <div className="container split">
        <Reveal className="collage" x={-50} y={0}>
          <img src="/images/painter-2.jpg" alt="Painter at work" className="collage-main" loading="lazy" />
          <img src="/images/shower-marble.jpg" alt="Marble shower tiling" className="collage-sub" loading="lazy" />
          <div className="collage-badge">
            <strong>10+</strong>
            <span>Years of
              <br />
              Experience</span>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="Your Local"
            highlight="All In One Tradie"
            text="SK All In One Tradie is an owner operated business specialising in wall & floor tiling and painting. We treat every home like our own and take pride in finishing every job to the highest standard."
          />
          <Reveal className="check-list" delay={0.1}>
            {['Tiling and painting under one roof', 'Fixed quotes with no hidden costs', 'Owner on site for every project', 'Premium materials and tools'].map((t) => (
              <span key={t}><FaCircleCheck /> {t}</span>
            ))}
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/about" className="btn btn-primary">
              More About Us <FaArrowRight className="btn-arrow" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />

      <section className="section services">
        <div className="container">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Expert"
            highlight="Services"
            text="Two specialised trades, one dependable team. From the first tile to the final coat of paint."
          />
          <ServicesGrid />
        </div>
      </section>

      <AboutIntro />
      <StatsBand />
      <WhyChoose />

      <section className="section section-light">
        <div className="container">
          <div className="heading-row">
            <SectionHeading align="left" eyebrow="Our Work" title="Recent" highlight="Projects" />
            <Reveal>
              <Link to="/projects" className="btn btn-outline-dark">
                View All Projects <FaArrowRight className="btn-arrow" />
              </Link>
            </Reveal>
          </div>
          <div className="projects-grid">
            {projects.slice(0, 4).map((p, i) => (
              <ProjectCard key={p.slug} p={p} i={i} />
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />
      <Testimonials />
      <FaqAccordion light />
      <CtaBanner />
    </>
  )
}
