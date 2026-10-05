import { useSearchParams } from 'react-router-dom'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import PageHeader from '../components/ui/PageHeader'
import SectionHeading from '../components/ui/SectionHeading'
import ProjectCard from '../components/sections/ProjectCard'
import StatsBand from '../components/sections/StatsBand'
import Testimonials from '../components/sections/Testimonials'
import CtaBanner from '../components/sections/CtaBanner'
import { projectFilters, projects } from '../data/projects'

export default function Projects() {
  const [params, setParams] = useSearchParams()
  const active = params.get('category') || 'all'
  const list = active === 'all' ? projects : projects.filter((p) => p.category === active)

  const select = (key) => setParams(key === 'all' ? {} : { category: key }, { replace: true })

  return (
    <>
      <PageHeader
        title="Our Projects"
        text="A look at some of the tiling and painting work we are proud of."
        image="/images/bathroom-green.jpg"
        crumbs={[{ label: 'Projects' }]}
      />

      <section className="section section-light">
        <div className="container">
          <SectionHeading
            eyebrow="Portfolio"
            title="Recent"
            highlight="Transformations"
            text="Browse by service to see the quality and finish you can expect in your home."
          />

          <LayoutGroup>
            <div className="filter-tabs">
              {projectFilters.map((f) => (
                <button key={f.key} className={active === f.key ? 'active' : ''} onClick={() => select(f.key)}>
                  {active === f.key && <motion.span layoutId="filter-pill" className="filter-pill" />}
                  <span>{f.label}</span>
                  <small>{f.key === 'all' ? projects.length : projects.filter((p) => p.category === f.key).length}</small>
                </button>
              ))}
            </div>
          </LayoutGroup>

          <motion.div layout className="projects-grid">
            <AnimatePresence mode="popLayout">
              {list.map((p, i) => (
                <ProjectCard key={p.slug} p={p} i={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <StatsBand />
      <Testimonials />
      <CtaBanner title="Want Results Like These?" />
    </>
  )
}
