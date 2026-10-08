import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaAward, FaTruck } from 'react-icons/fa';
import { hero } from '../data/site.js';
import { products } from '../data/products.js';
import PalletDrawing, { parseSize } from './PalletDrawing.jsx';

export default function Hero() {
  const featured = parseSize(products[0].name);

  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <div className="hero__badge reveal">
            <span className="hero__badge-dot">
              <FaAward />
            </span>
            EPAL & ISPM-15 Sertifikalı Üretim • Samsun OSB
          </div>

          <h1 className="hero__title reveal reveal-d1">
            {hero.pre} <mark>{hero.mark}</mark> {hero.post}
          </h1>

          <p className="hero__lead reveal reveal-d1">{hero.lead}</p>

          <div className="hero__bullets reveal reveal-d2">
            {hero.bullets.map((b) => (
              <span key={b} className="hero__bullet">
                <FaCheckCircle aria-hidden="true" /> {b}
              </span>
            ))}
          </div>

          <div className="hero__actions reveal reveal-d2">
            <Link className="btn btn--lg" to="/urunler">
              Ürünleri incele <FaArrowRight aria-hidden="true" />
            </Link>
            <a className="btn btn--ghost btn--lg" href="#iletisim">
              Hızlı teklif al
            </a>
          </div>

          <div className="hero__trust reveal reveal-d3">
            <div className="hero__avatars" aria-hidden="true">
              <img src="https://i.pravatar.cc/100?img=12" alt="" />
              <img src="https://i.pravatar.cc/100?img=32" alt="" />
              <img src="https://i.pravatar.cc/100?img=15" alt="" />
            </div>
            <div className="hero__trust-text">
              <strong>500+ firma</strong> bize güveniyor<br />
              Son 30 günde 127 olumlu geri bildirim
            </div>
          </div>
        </div>

        {featured && (
          <figure className="hero__figure reveal reveal-d2">
            <div className="hero__figure-badge">
              <FaTruck style={{ marginRight: 6 }} />
              Stoktan Teslim
            </div>
            <PalletDrawing w={featured.w} h={featured.h} />
            <figcaption>
              <span className="chip">{featured.label}</span>
              {featured.title}
              <span className="chip chip--amber">Çok Satan</span>
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}
