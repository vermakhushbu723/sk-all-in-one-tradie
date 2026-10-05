import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaPaperPlane, FaCircleCheck } from 'react-icons/fa6'
import { services } from '../../data/services'
import { whatsappLink } from '../../data/site'

const empty = { name: '', phone: '', email: '', service: '', suburb: '', message: '' }

// No backend yet: the enquiry is sent to the business WhatsApp with all details prefilled.
export default function ContactForm({ defaultService = '' }) {
  const [form, setForm] = useState({ ...empty, service: defaultService })
  const [sent, setSent] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const text = [
      'New quote request',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      `Service: ${form.service}`,
      form.suburb && `Suburb: ${form.suburb}`,
      `Details: ${form.message}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(whatsappLink(text), '_blank', 'noopener')
    setSent(true)
    setForm(empty)
    setTimeout(() => setSent(false), 6000)
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label className="field">
          <input name="name" value={form.name} onChange={update} placeholder=" " required />
          <span>Full Name</span>
        </label>
        <label className="field">
          <input name="phone" type="tel" value={form.phone} onChange={update} placeholder=" " required />
          <span>Phone Number</span>
        </label>
      </div>
      <div className="form-row">
        <label className="field">
          <input name="email" type="email" value={form.email} onChange={update} placeholder=" " />
          <span>Email Address</span>
        </label>
        <label className="field">
          <input name="suburb" value={form.suburb} onChange={update} placeholder=" " />
          <span>Suburb</span>
        </label>
      </div>
      <label className="field">
        <select name="service" value={form.service} onChange={update} required>
          <option value="" disabled hidden />
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
          <option>Tiling & Painting</option>
        </select>
        <span>Select Service</span>
      </label>
      <label className="field">
        <textarea name="message" rows="4" value={form.message} onChange={update} placeholder=" " required />
        <span>Tell us about your project</span>
      </label>

      <button type="submit" className="btn btn-primary btn-block">
        Send Request <FaPaperPlane className="btn-arrow" />
      </button>

      <AnimatePresence>
        {sent && (
          <motion.div
            className="form-success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <FaCircleCheck /> Thank you! Your request is ready to send on WhatsApp.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}
