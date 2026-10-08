import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { services } from '../data/site.js';

export default function Services() {
  return (
    <section className="section section--paper2" id="hizmetler">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Hizmetlerimiz</p>
          <h2 className="section__title">İhtiyacınıza göre palet çözümleri</h2>
          <p className="section__lead">Euro, CP ve özel ölçü paletlerin yanı sıra tamir, geri alım ve danışmanlık hizmetleri.</p>
        </div>

        <div className="services__grid">
          {services.map((s) => (
            <div key={s.title} className="services__card">
              <div className="services__media">
                <img src={s.image} alt={s.title} loading="lazy" />
                <span className="chip services__media-badge">{s.title.split(' ')[0]}</span>
              </div>
              <div className="services__body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to="/urunler" className="services__link">
                  Ürünleri gör <FaArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
