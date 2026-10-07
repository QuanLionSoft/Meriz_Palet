import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCamera, FaTimes } from 'react-icons/fa';
import { products } from '../data/products.js';
import PalletDrawing, { parseSize } from './PalletDrawing.jsx';

// Her ürüne ölçü bilgisini ekle (adı "80 X 120 cm ..." biçiminde olanlar için).
const items = products.map((p) => ({ ...p, ...(parseSize(p.name) ?? { w: null, h: null, label: null, title: p.name }) }));

// Mevcut ölçüler, küçükten büyüğe
const sizeOptions = [...new Set(items.filter((i) => i.label).sort((a, b) => a.w - b.w || a.h - b.h).map((i) => i.label))];

/** Fotoğraf penceresi: gerçek ürün fotoğrafı sadece istenince yüklenir. */
function Lightbox({ item, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (item && !dialog.open) dialog.showModal();
    if (!item && dialog.open) dialog.close();
  }, [item]);

  return (
    <dialog
      ref={ref}
      className="lightbox"
      aria-label={item ? item.name : 'Ürün fotoğrafı'}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose(); // arka plana tıklayınca kapat
      }}
    >
      {item && (
        <figure className="lightbox__figure">
          <img src={item.image} alt={item.name} />
          <figcaption>{item.name}</figcaption>
        </figure>
      )}
      <button type="button" className="lightbox__close" aria-label="Kapat" onClick={onClose}>
        <FaTimes />
      </button>
    </dialog>
  );
}

export default function ProductGrid({ limit, heading = 'Ürünlerimiz', filterable = false, showAllLink = false }) {
  const [size, setSize] = useState('all');
  const [selected, setSelected] = useState(null);

  const visible = useMemo(() => {
    let list = filterable && size !== 'all' ? items.filter((i) => i.label === size) : items;
    if (limit) list = list.slice(0, limit);
    return list;
  }, [filterable, size, limit]);

  return (
    <section className="section container" id="urunlerimiz">
      <div className="section__head">
        {heading && (
          <>
            <p className="eyebrow">Ürünler</p>
            <h2 className="section__title">{heading}</h2>
          </>
        )}
        <p className="section__lead">Ürünlerimizin boyutları standarttır. Çizimler şematiktir; ölçüler orantılıdır.</p>
      </div>

      {filterable && (
        <div className="filters" role="group" aria-label="Ölçüye göre filtrele">
          <button type="button" className="filters__btn" aria-pressed={size === 'all'} onClick={() => setSize('all')}>
            Tümü
          </button>
          {sizeOptions.map((s) => (
            <button key={s} type="button" className="filters__btn" aria-pressed={size === s} onClick={() => setSize(s)}>
              {s}
            </button>
          ))}
        </div>
      )}

      <ul className="grid">
        {visible.map((p) => (
          <li key={p.id} className="card reveal">
            <div className="card__art">
              {p.w ? <PalletDrawing w={p.w} h={p.h} /> : null}
              {p.label && <span className="chip card__size">{p.label}</span>}
            </div>
            <div className="card__body">
              <h3 className="card__title">{p.title}</h3>
              <div className="card__actions">
                <a className="card__link" href="#iletisim" aria-label={`${p.name} hakkında bilgi al`}>
                  Bilgi al <FaArrowRight aria-hidden="true" />
                </a>
                {p.image && (
                  <button type="button" className="card__photo" onClick={() => setSelected(p)}>
                    <FaCamera aria-hidden="true" /> Fotoğraf
                  </button>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {showAllLink && (
        <p className="center">
          <Link className="btn btn--ghost" to="/urunler">
            Tüm ürünleri gör
          </Link>
        </p>
      )}

      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
