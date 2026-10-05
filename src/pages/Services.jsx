import { Link } from 'react-router-dom'
import { FaArrowRight, FaShower, FaKitchenSet, FaCouch, FaUmbrellaBeach, FaStore, FaHelmetSafety } from 'react-icons/fa6'
import PageHeader from '../components/ui/PageHeader'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import ProcessSteps from '../components/sections/ProcessSteps'
import FaqAccordion from '../components/sections/FaqAccordion'
import CtaBanner from '../components/sections/CtaBanner'
import { services } from '../data/services'

const areas = [
  { icon: FaShower, title: 'Bathrooms', desc: 'Walls, floors and showers' },
  { icon: FaKitchenSet, title: 'Kitchens', desc: 'Splashbacks, floors, walls' },
  { icon: FaCouch, title: 'Living Areas', desc: 'Floors, feature walls, ceilings' },
  { icon: FaUmbrellaBeach, title: 'Outdoor', desc: 'Patios, alfresco, exteriors' },
  { icon: FaStore, title: 'Commercial', desc: 'Shops, offices and cafes' },
  { icon: FaHelmetSafety, title: 'New Builds', desc: 'Builder and owner builder jobs' },
]

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        text="Expert wall & floor tiling and professional painting, delivered by one trusted team."
        image="/images/floor-marble.jpg"
        crumbs={[{ label: 'Services' }]}
      />

      <section className="section section-light">
        <div className="container">
          <SectionHeading
            eyebrow="What We Offer"
            title="Two Trades,"
            highlight="One Standard"
            text="Whether you are renovating a bathroom or refreshing the whole house, we handle it from start to finish."
          />
          <div className="service-rows">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={s.slug} className={`service-row ${i % 2 ? 'reverse' : ''}`}>
                  <Reveal className="service-row-media" x={i % 2 ? 50 : -50} y={0}>
                    <img src={s.image} alt={s.title} loading="lazy" />
                    <span className="service-row-num">0{i + 1}</span>
                  </Reveal>
                  <Reveal className="service-row-body" delay={0.1}>
                    <span className="service-row-icon"><Icon /></span>
                    <h3>{s.title}</h3>
                    <p>{s.intro}</p>
                    <div className="tag-list">
                      {s.subServices.map((sub) => (
                        <span key={sub.title}>{sub.title}</span>
                      ))}
                    </div>
                    <Link to={`/services/${s.slug}`} className="btn btn-primary">
                      View Details <FaArrowRight className="btn-arrow" />
                    </Link>
                  </Reveal>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Where We Work" title="Spaces We" highlight="Transform" />
          <div className="areas-grid">
            {areas.map((a, i) => {
              const Icon = a.icon
              return (
                <Reveal key={a.title} delay={i * 0.06} className="area-card">
                  <span className="area-icon"><Icon /></span>
                  <h4>{a.title}</h4>
                  <p>{a.desc}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <ProcessSteps light />
      <FaqAccordion image="/images/kitchen-island.jpg" />
      <CtaBanner />
    </>
  )
}
