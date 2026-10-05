import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { testimonials } from '../../data/content'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const total = testimonials.length

  const go = (step) => {
    setDir(step)
    setIndex((i) => (i + step + total) % total)
  }

  useEffect(() => {
    const id = setInterval(() => {
      setDir(1)
      setIndex((i) => (i + 1) % total)
    }, 6000)
    return () => clearInterval(id)
  }, [index, total])

  const t = testimonials[index]

  return (
    <section className="section reviews">
      <div className="container reviews-inner">
        <div className="reviews-left">
          <SectionHeading
            align="left"
            eyebrow="Testimonials"
            title="What Our"
            highlight="Clients Say"
            text="Real feedback from homeowners who trusted us with their spaces."
          />
          <Reveal className="rating-box">
            <strong>4.9</strong>
            <div>
              <span className="stars">
                {[...Array(5)].map((_, k) => <FaStar key={k} />)}
              </span>
              <small>Average rating from 200+ reviews</small>
            </div>
          </Reveal>
        </div>

        <Reveal className="review-slider" x={40} y={0}>
          <FaQuoteLeft className="quote-icon" />
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={index}
              className="review-slide"
              custom={dir}
              initial={{ opacity: 0, x: dir * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -50 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="stars">
                {[...Array(5)].map((_, k) => <FaStar key={k} />)}
              </div>
              <p>{t.text}</p>
              <div className="reviewer">
                <span className="avatar">{t.name.charAt(0)}</span>
                <div>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="slider-controls">
            <div className="dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={i === index ? 'active' : ''}
                  aria-label={`Review ${i + 1}`}
                  onClick={() => {
                    setDir(i > index ? 1 : -1)
                    setIndex(i)
                  }}
                />
              ))}
            </div>
            <div className="arrows">
              <button onClick={() => go(-1)} aria-label="Previous review"><FaChevronLeft /></button>
              <button onClick={() => go(1)} aria-label="Next review"><FaChevronRight /></button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
