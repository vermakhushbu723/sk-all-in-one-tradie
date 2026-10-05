import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight, FaCircleCheck } from 'react-icons/fa6'
import PageHeader from '../components/ui/PageHeader'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import StatsBand from '../components/sections/StatsBand'
import WhyChoose from '../components/sections/WhyChoose'
import Testimonials from '../components/sections/Testimonials'
import CtaBanner from '../components/sections/CtaBanner'
import { values } from '../data/content'

const skills = [
  { label: 'Wall Tiling', value: 98 },
  { label: 'Floor Tiling', value: 97 },
  { label: 'Interior Painting', value: 96 },
  { label: 'Exterior Painting', value: 94 },
]

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        text="Honest tradies, quality workmanship and a finish we are proud to put our name on."
        image="/images/interior-lounge.jpg"
        crumbs={[{ label: 'About Us' }]}
      />

      <section className="section section-light">
        <div className="container split">
          <Reveal className="collage" x={-50} y={0}>
            <img src="/images/consult.jpg" alt="Inspecting a home before a project" className="collage-main" loading="lazy" />
            <img src="/images/tiles-grey.jpg" alt="Grey mosaic tiles" className="collage-sub" loading="lazy" />
            <div className="collage-badge">
              <strong>550+</strong>
              <span>Projects
                <br />
                Completed</span>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Crafting Better Homes"
              highlight="Since Day One"
              text="SK All In One Tradie started with a simple idea: homeowners deserve one reliable tradie who can tile and paint to a high standard, turn up on time and leave the place spotless."
            />
            <Reveal delay={0.1}>
              <p className="body-text">
                Over the past decade we have tiled hundreds of bathrooms, kitchens and floors and painted homes inside
                and out across the city. Today we are still owner operated, so the person who quotes your job is the
                person who makes sure it is done right.
              </p>
            </Reveal>
            <Reveal className="check-list" delay={0.15}>
              {['Owner operated business', 'Fully licensed & insured', 'Written workmanship warranty', 'Free on-site quotes'].map((t) => (
                <span key={t}><FaCircleCheck /> {t}</span>
              ))}
            </Reveal>
            <Reveal delay={0.2}>
              <Link to="/services" className="btn btn-primary">
                Our Services <FaArrowRight className="btn-arrow" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="What Drives Us" title="Mission, Vision" highlight="& Values" />
          <div className="values-grid">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <Reveal key={v.title} delay={i * 0.12} className="value-card">
                  <span className="value-icon"><Icon /></span>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <StatsBand />

      <section className="section section-light">
        <div className="container split">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Expertise"
              title="Skilled In Every"
              highlight="Detail"
              text="Years of hands on experience mean we know how to get the best result from every tile and every tin of paint."
            />
            <div className="skills">
              {skills.map((s, i) => (
                <div key={s.label} className="skill">
                  <div className="skill-top">
                    <span>{s.label}</span>
                    <span>{s.value}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.3, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Reveal className="image-stack" x={50} y={0}>
            <img src="/images/painter-1.jpg" alt="Painter rolling a wall" loading="lazy" />
            <img src="/images/bathroom-green.jpg" alt="Tiled green bathroom" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <WhyChoose image="/images/worker-floor.jpg" />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
