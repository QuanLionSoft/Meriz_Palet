import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaCamera,
  FaTimes,
  FaSearch,
  FaShoppingBasket,
  FaEye,
  FaCheck,
  FaTruck,
  FaCertificate,
  FaThLarge,
  FaList,
  FaFilter,
  FaFire,
} from 'react-icons/fa';
import PageHeader from '../components/PageHeader.jsx';
import PalletDrawing, { parseSize } from '../components/PalletDrawing.jsx';
import { products, categories } from '../data/products.js';
import { useQuote } from '../contexts/QuoteContext.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

const items = products.map((p) => ({
  ...p,
  ...(parseSize(p.name) ?? { w: null, h: null, label: null, title: p.name }),
  area: (parseSize(p.name)?.w || p.specs.en) * (parseSize(p.name)?.h || p.specs.boy),
}));
const sizeOptions = [...new Set(items.filter((i) => i.label).sort((a, b) => a.w - b.w || a.h - b.h).map((i) => i.label))];

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

export default function Products() {
  useDocumentTitle('Ürünlerimiz');
  const { add } = useQuote();
  const [category, setCategory] = useState('all');
  const [size, setSize] = useState('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('popular'); // popular | small | big | az
  const [view, setView] = useState('grid'); // grid | list
  const [selected, setSelected] = useState(null);
  const [mobileFilters, setMobileFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = [...items];
    if (category !== 'all') list = list.filter((i) => i.category === category);
    if (size !== 'all') list = list.filter((i) => i.label === size);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((i) => `${i.name} ${i.sku} ${i.desc} ${i.category}`.toLowerCase().includes(q));
    }
    // sorting
    if (sort === 'small') list.sort((a, b) => a.area - b.area);
    else if (sort === 'big') list.sort((a, b) => b.area - a.area);
    else if (sort === 'az') list.sort((a, b) => a.title.localeCompare(b.title, 'tr'));
    else {
      // popular: stokta olanlar + euro önce
      const order = { euro: 0, cp: 1, ozel: 2 };
      list.sort((a, b) => {
        if (a.stock !== b.stock) return a.stock === 'Stokta' ? -1 : 1;
        return (order[a.category] ?? 9) - (order[b.category] ?? 9);
      });
    }
    return list;
  }, [category, size, search, sort]);

  const activeFiltersCount = (category !== 'all' ? 1 : 0) + (size !== 'all' ? 1 : 0) + (search.trim() ? 1 : 0);
  const clearAll = () => {
    setCategory('all');
    setSize('all');
    setSearch('');
    setSort('popular');
  };

  return (
    <>
      <PageHeader
        title="Ürünlerimiz"
        lead="16 çeşit EPAL, CP ve özel ölçü palet. Teknik çizimle orantılı gösterim, gerçek fotoğraf, stok durumu ve tek tıkla teklif sepeti. Samsun OSB'den 81 ile sevkiyat."
      />

      {/* Benefit strip */}
      <section className="container" style={{ marginTop: '-1.5rem', marginBottom: '1.5rem' }}>
        <div className="benefit-strip">
          <div className="benefit-strip__item">
            <span className="benefit-strip__icon">
              <FaTruck />
            </span>
            <div>
              <strong>Stoktan Teslim</strong>
              <span>Samsun içi aynı gün, Türkiye geneli 1-3 gün</span>
            </div>
          </div>
          <div className="benefit-strip__item">
            <span className="benefit-strip__icon">
              <FaCertificate />
            </span>
            <div>
              <strong>ISPM-15 Sertifikalı</strong>
              <span>HT damgalı, ihracat uyumlu, barkodlu</span>
            </div>
          </div>
          <div className="benefit-strip__item">
            <span className="benefit-strip__icon">
              <FaFire />
            </span>
            <div>
              <strong>Tır Bazında Avantaj</strong>
              <span>500+ adette özel fiyat, ücretsiz numune</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container catalog">
          {/* Sidebar */}
          <aside className={`catalog__sidebar ${mobileFilters ? 'is-open' : ''}`}>
            <div className="catalog__sidebar-head">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaFilter /> Filtrele
              </h3>
              <button className="btn btn--icon btn--ghost" style={{ width: 36, height: 36 }} onClick={() => setMobileFilters(false)} aria-label="Kapat">
                <FaTimes />
              </button>
            </div>

            <div className="catalog__filter-group">
              <h4>Kategori</h4>
              <div className="catalog__chips">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    className={`catalog__chip ${category === c.id ? 'is-active' : ''}`}
                    onClick={() => setCategory(c.id)}
                    aria-pressed={category === c.id}
                  >
                    {c.label}
                    <span className="catalog__chip-count">
                      {c.id === 'all' ? items.length : items.filter((i) => i.category === c.id).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="catalog__filter-group">
              <h4>Ölçü</h4>
              <div className="catalog__chips">
                <button className={`catalog__chip ${size === 'all' ? 'is-active' : ''}`} onClick={() => setSize('all')} aria-pressed={size === 'all'}>
                  Tümü <span className="catalog__chip-count">{items.length}</span>
                </button>
                {sizeOptions.map((s) => (
                  <button key={s} className={`catalog__chip ${size === s ? 'is-active' : ''}`} onClick={() => setSize(s)} aria-pressed={size === s}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="catalog__filter-group">
              <h4>Hızlı Bilgi</h4>
              <ul className="catalog__info">
                <li>
                  <FaCheck /> EPAL 80×120 en çok satan
                </li>
                <li>
                  <FaCheck /> CP1 100×120 kimya sektörü favorisi
                </li>
                <li>
                  <FaCheck /> Özel ölçüde 2 günde numune
                </li>
                <li>
                  <FaCheck /> Fırınlanmış çam, düşük nem
                </li>
              </ul>
              <a href="#iletisim" className="btn btn--ghost btn--sm" style={{ width: '100%', marginTop: '0.75rem' }}>
                Özel ölçü için yaz <FaArrowRight />
              </a>
            </div>

            {activeFiltersCount > 0 && (
              <button className="btn btn--ghost btn--sm" onClick={clearAll} style={{ width: '100%' }}>
                Filtreleri temizle ({activeFiltersCount})
              </button>
            )}
          </aside>

          {/* Main */}
          <div className="catalog__main">
            {/* Toolbar */}
            <div className="catalog__toolbar">
              <div className="catalog__toolbar-left">
                <div className="search catalog__search">
                  <FaSearch aria-hidden="true" style={{ color: 'var(--muted)', flex: 'none' }} />
                  <input
                    type="search"
                    placeholder="Ara: 80x120, CP1, Euro, ince tip..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    aria-label="Ürün ara"
                  />
                  {search && (
                    <button type="button" aria-label="Temizle" onClick={() => setSearch('')} className="catalog__search-clear">
                      <FaTimes />
                    </button>
                  )}
                </div>

                <div className="catalog__active-filters hide-mobile">
                  {category !== 'all' && (
                    <span className="chip chip--ghost">
                      {categories.find((c) => c.id === category)?.label}
                      <button aria-label="Kaldır" onClick={() => setCategory('all')} style={{ marginLeft: 6, background: 'none', border: 0, cursor: 'pointer' }}>
                        <FaTimes style={{ fontSize: '0.7rem' }} />
                      </button>
                    </span>
                  )}
                  {size !== 'all' && (
                    <span className="chip chip--ghost">
                      {size}
                      <button aria-label="Kaldır" onClick={() => setSize('all')} style={{ marginLeft: 6, background: 'none', border: 0, cursor: 'pointer' }}>
                        <FaTimes style={{ fontSize: '0.7rem' }} />
                      </button>
                    </span>
                  )}
                  {search.trim() && (
                    <span className="chip chip--ghost">
                      “{search}”
                      <button aria-label="Kaldır" onClick={() => setSearch('')} style={{ marginLeft: 6, background: 'none', border: 0, cursor: 'pointer' }}>
                        <FaTimes style={{ fontSize: '0.7rem' }} />
                      </button>
                    </span>
                  )}
                </div>
              </div>

              <div className="catalog__toolbar-right">
                <span className="catalog__count">
                  <strong>{filtered.length}</strong> ürün
                </span>

                <select className="catalog__sort" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sırala">
                  <option value="popular">Önerilen</option>
                  <option value="small">Ölçü: Küçük → Büyük</option>
                  <option value="big">Ölçü: Büyük → Küçük</option>
                  <option value="az">İsim: A → Z</option>
                </select>

                <div className="catalog__view">
                  <button
                    className={`catalog__view-btn ${view === 'grid' ? 'is-active' : ''}`}
                    onClick={() => setView('grid')}
                    aria-label="Grid görünüm"
                    aria-pressed={view === 'grid'}
                  >
                    <FaThLarge />
                  </button>
                  <button
                    className={`catalog__view-btn ${view === 'list' ? 'is-active' : ''}`}
                    onClick={() => setView('list')}
                    aria-label="Liste görünüm"
                    aria-pressed={view === 'list'}
                  >
                    <FaList />
                  </button>
                </div>

                <button className="btn btn--ghost btn--sm hide-desktop" onClick={() => setMobileFilters(true)}>
                  <FaFilter /> Filtre
                  {activeFiltersCount > 0 && <span className="catalog__filter-badge">{activeFiltersCount}</span>}
                </button>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="empty" style={{ padding: '3rem 1rem', background: 'var(--card)', border: '1px dashed var(--line)', borderRadius: '20px' }}>
                <div className="empty__icon">🔍</div>
                <h3>Ürün bulunamadı</h3>
                <p style={{ color: 'var(--muted)', maxWidth: '36ch', margin: '0.5rem auto 0' }}>
                  “{search}” için sonuç yok. Kategori veya ölçü filtrelerini değiştirmeyi deneyin.
                </p>
                <button className="btn btn--ghost btn--sm" onClick={clearAll} style={{ marginTop: '1rem' }}>
                  Filtreleri temizle
                </button>
              </div>
            ) : (
              <ul className={`grid ${view === 'list' ? 'grid--list' : ''}`}>
                {filtered.map((p) => (
                  <li key={p.id} className="card card--catalog">
                    <div className="card__art">
                      <div className="card__badges">
                        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                          {p.label && <span className="chip">{p.label}</span>}
                          {p.category === 'euro' && <span className="chip chip--amber">Çok Satan</span>}
                        </div>
                        <div className="card__badges-right">
                          <span className={`chip ${p.stock === 'Stokta' ? 'chip--success' : 'chip--ghost'}`}>{p.stock}</span>
                        </div>
                      </div>
                      {p.w ? <PalletDrawing w={p.w} h={p.h} /> : <img src={p.image} alt={p.name} style={{ width: '68%', aspectRatio: '1', objectFit: 'contain' }} />}
                      <div className="card__hover">
                        <button type="button" className="btn btn--sm btn--white" onClick={() => setSelected(p)}>
                          <FaCamera /> Fotoğraf
                        </button>
                        <Link to={`/urunler/${p.id}`} className="btn btn--sm btn--white">
                          <FaEye /> Detay
                        </Link>
                      </div>
                    </div>
                    <div className="card__body">
                      <div className="card__sku">
                        {p.sku} • {p.category.toUpperCase()} • {p.specs.en}×{p.specs.boy}
                      </div>
                      <h3 className="card__title">{p.title}</h3>
                      <p className="card__desc hide-mobile" style={{ margin: 0, fontSize: '0.88rem', color: 'var(--ink-2)', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {p.desc}
                      </p>
                      <div className="card__specs">
                        <span className="card__spec">{p.specs.kapasite.split(' ')[0]} kapasite</span>
                        <span className="card__spec">{p.specs.takoz}</span>
                        <span className="card__spec">{p.specs.agirlik}</span>
                      </div>
                      <div className="card__footer">
                        <div className="card__price">
                          <strong>{p.specs.en}×{p.specs.boy} cm</strong>
                          <span className="hide-mobile"> • {p.priceNote}</span>
                        </div>
                        <div className="card__actions">
                          <button type="button" className="card__action hide-mobile" aria-label="Fotoğrafı gör" onClick={() => setSelected(p)}>
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
            )}

            <div style={{ marginTop: '2rem', padding: '1.25rem', background: 'var(--paper-2)', border: '1px solid var(--line)', borderRadius: '16px', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <div>
                <strong style={{ display: 'block' }}>Özel ölçü mü lazım?</strong>
                <span style={{ fontSize: '0.9rem', color: 'var(--ink-2)' }}>Makinenize, rafınıza veya ürününüze göre 60×40 cm'den 130×130 cm'e kadar üretim yapıyoruz. 2 günde numune.</span>
              </div>
              <a href="#iletisim" className="btn btn--sm">
                Özel ölçü teklifi al <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Lightbox item={selected} onClose={() => setSelected(null)} />
      {mobileFilters && <div className="catalog__backdrop" onClick={() => setMobileFilters(false)} />}
    </>
  );
}
