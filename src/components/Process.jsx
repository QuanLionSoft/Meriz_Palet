import { processSteps } from '../data/site.js';

export default function Process() {
  return (
    <section className="section process">
      <div className="container">
        <div className="section__head center">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>
            Nasıl Çalışıyoruz?
          </p>
          <h2 className="section__title">3 adımda paletiniz hazır</h2>
        </div>

        <div className="process__grid">
          {processSteps.map((p) => (
            <div key={p.step} className="process__step">
              <div className="process__num">{p.step}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
