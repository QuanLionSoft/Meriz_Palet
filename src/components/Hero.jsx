import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { hero } from '../data/site.js';
import { products } from '../data/products.js';
import PalletDrawing, { parseSize } from './PalletDrawing.jsx';

export default function Hero() {
  const featured = parseSize(products[0].name); // ilk ürün hero çiziminde gösterilir

  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="eyebrow">Meriz Palet</p>
          <h1 className="hero__title">
            {hero.pre} <mark>{hero.mark}</mark> {hero.post}
          </h1>
          <p className="hero__lead">{hero.lead}</p>
          <div className="hero__actions">
            <Link className="btn btn--primary" to="/urunler">
              Ürünleri incele <FaArrowRight aria-hidden="true" />
            </Link>
            <a className="btn btn--ghost" href="#iletisim">
              İletişim
            </a>
          </div>
        </div>

        {featured && (
          <figure className="hero__figure">
            <PalletDrawing w={featured.w} h={featured.h} />
            <figcaption>
              <span className="chip">{featured.label}</span>
              {featured.title}
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}
