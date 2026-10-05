import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, highlight, text, align = 'center' }) {
  return (
    <Reveal className={`section-heading ${align}`}>
      <span className="eyebrow">
        <span className="eyebrow-line" />
        {eyebrow}
      </span>
      <h2>
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {text && <p>{text}</p>}
    </Reveal>
  )
}
