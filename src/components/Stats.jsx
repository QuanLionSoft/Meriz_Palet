import { site } from '../data/site.js';

export default function Stats() {
  return (
    <section className="stats container">
      <div className="stats__list">
        {site.stats.map((s) => (
          <div key={s.label} className="stats__item">
            <div className="stats__value">{s.value}</div>
            <div className="stats__label">{s.label}</div>
            <div className="stats__sub">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
