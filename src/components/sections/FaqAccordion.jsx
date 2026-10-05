import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaPlus } from 'react-icons/fa6'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { faqs as defaultFaqs } from '../../data/content'

export default function FaqAccordion({ faqs = defaultFaqs, image = '/images/consult.jpg', light }) {
  const [open, setOpen] = useState(0)

  return (
    <section className={`section faq ${light ? 'section-light' : ''}`}>
      <div className="container faq-inner">
        <Reveal className="faq-visual" x={-40} y={0}>
          <img src={image} alt="Talking with a client about their project" loading="lazy" />
          <div className="faq-visual-card">
            <strong>Still have questions?</strong>
            <span>Call or message us any time, we are happy to help.</span>
          </div>
        </Reveal>

        <div>
          <SectionHeading align="left" eyebrow="FAQ" title="Frequently Asked" highlight="Questions" />
          <div className="faq-list">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.06} className={`faq-item ${open === i ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  {f.q}
                  <span className="faq-icon">
                    <FaPlus />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      className="faq-a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
