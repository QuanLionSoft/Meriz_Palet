import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCamera, FaTimes, FaShoppingBasket, FaEye } from 'react-icons/fa';
import { products } from '../data/products.js';
import PalletDrawing, { parseSize } from './PalletDrawing.jsx';
import { useQuote } from '../contexts/QuoteContext.jsx';

const items = products.map((p) => ({ ...p, ...(parseSize(p.name) ?? { w: null, h: null, label: null, title: p.name }) }));

function Lightbox({ item, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (item && !d.open) d.showModal();
    if (!item && d.open) d.close();
  }, [item]);
  return (
    <dialog
      ref={ref}
      className="lightbox"
      aria-label={item ? item.name : 'Ürün fotoğrafı'}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      {item && (
        <figure className="lightbox__figure">
          <img src={item.image} alt={item.name} />
          <figcaption>
            <span>{item.name}</span>
            <Link to={`/urunler/${item.id}`} className="btn btn--sm" onClick={onClose}>
              Detay <FaArrowRight />
            </Link>
          </figcaption>
        </figure>
      )}
      <button type="button" className="lightbox__close" aria-label="Kapat" onClick={onClose}>
        <FaTimes />
      </button>
    </dialog>
  );
}

export default function ProductGrid({ limit, heading = 'Ürünlerimiz', showAllLink = false }) {
  const [selected, setSelected] = useState(null);
  const { add } = useQuote();

  const visible = useMemo(() => {
    let list = items;
    if (limit) list = list.slice(0, limit);
    return list;
  }, [limit]);

  return (
    <section className="section container" id="urunlerimiz">
      {heading && (
        <div className="section__head">
          <p className="eyebrow">Ürünler</p>
          <h2 className="section__title">{heading}</h2>
          <p className="section__lead">16 çeşit standart ve özel ölçü palet. Teknik çizimler orantılıdır, gerçek fotoğraf için fotoğraf butonuna tıklayın.</p>
        </div>
      )}

      <ul className="grid">
        {visible.map((p) => (
          <li key={p.id} className="card">
            <div className="card__art">
              <div className="card__badges">
                <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                  {p.label && <span className="chip">{p.label}</span>}
                </div>
                <div className="card__badges-right">
                  <span className={`chip ${p.stock === 'Stokta' ? 'chip--success' : 'chip--ghost'}`}>{p.stock}</span>
                  {p.priceNote && <span className="chip chip--amber">{p.priceNote}</span>}
                </div>
              </div>
              {p.w ? <PalletDrawing w={p.w} h={p.h} /> : <img src={p.image} alt={p.name} style={{ width: '70%', aspectRatio: '1', objectFit: 'contain' }} />}
            </div>
            <div className="card__body">
              <div className="card__sku">
                {p.sku} • {p.category.toUpperCase()}
              </div>
              <h3 className="card__title">{p.title}</h3>
              <div className="card__specs">
                <span className="card__spec">{p.specs.kapasite.split(' ')[0]} kapasite</span>
                <span className="card__spec">{p.specs.takoz}</span>
                <span className="card__spec">{p.specs.agirlik}</span>
              </div>
              <div className="card__footer">
                <div className="card__price">
                  <strong>
                    {p.specs.en}×{p.specs.boy} cm
                  </strong>
                </div>
                <div className="card__actions">
                  <button type="button" className="card__action" aria-label="Fotoğrafı gör" onClick={() => setSelected(p)}>
                    <FaCamera />
                  </button>
                  <Link to={`/urunler/${p.id}`} className="card__action" aria-label="Detayı gör">
                    <FaEye />
                  </Link>
                  <button type="button" className="card__action card__action--primary" aria-label="Teklif sepetine ekle" onClick={() => add(p, 1)}>
                    <FaShoppingBasket />
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {showAllLink && (
        <p className="center">
          <Link className="btn btn--ghost" to="/urunler">
            Tüm ürünleri gör <FaArrowRight />
          </Link>
        </p>
      )}

      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
