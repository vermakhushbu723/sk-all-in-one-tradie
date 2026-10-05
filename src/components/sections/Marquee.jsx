import { marqueeItems } from '../../data/content'

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]
  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span key={i}>
            {t}
            <i className="diamond" />
          </span>
        ))}
      </div>
    </div>
  )
}
