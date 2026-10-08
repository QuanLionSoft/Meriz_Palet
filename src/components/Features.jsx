import { FaShieldAlt, FaRulerCombined, FaTruck, FaLeaf, FaCertificate, FaHeadset } from 'react-icons/fa';
import { features } from '../data/site.js';

const icons = {
  shield: FaShieldAlt,
  ruler: FaRulerCombined,
  truck: FaTruck,
  leaf: FaLeaf,
  badge: FaCertificate,
  support: FaHeadset,
};

export default function Features() {
  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Neden Meriz Palet?</p>
          <h2 className="section__title">Kaliteyi standart haline getirdik</h2>
          <p className="section__lead">
            15 yıllık tecrübe, sertifikalı üretim ve Türkiye geneli sevkiyat ağımızla sadece palet değil, lojistikte güven satıyoruz.
          </p>
        </div>

        <div className="features__grid">
          {features.map((f) => {
            const Icon = icons[f.icon] || FaShieldAlt;
            return (
              <div key={f.title} className="features__card reveal-on-scroll">
                <div className="features__icon">
                  <Icon aria-hidden="true" />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
