import Counter from '../ui/Counter'
import Reveal from '../ui/Reveal'
import { stats } from '../../data/content'

export default function StatsBand() {
  return (
    <section className="stats-band">
      <div className="container stats-grid">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="stat-item">
            <strong>
              <Counter value={s.value} suffix={s.suffix} />
            </strong>
            <span>{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
