import { motion } from 'framer-motion'

// Sideways slide-ins push content past the screen edge on phones, so small
// screens always reveal from below instead.
const isSmallScreen = () => typeof window !== 'undefined' && window.innerWidth < 992

export default function Reveal({ children, delay = 0, y = 40, x = 0, className, as = 'div' }) {
  const Tag = motion[as]
  const small = isSmallScreen()
  const fromX = small ? 0 : x
  const fromY = small ? 24 : y
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: fromY, x: fromX }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
