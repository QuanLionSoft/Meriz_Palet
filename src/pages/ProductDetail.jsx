import { useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaShoppingBasket, FaWhatsapp, FaCheck, FaPhoneAlt, FaRulerCombined } from 'react-icons/fa';
import { products } from '../data/products.js';
import PalletDrawing, { parseSize } from '../components/PalletDrawing.jsx';
import PageHeader from '../components/PageHeader.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import { useQuote } from '../contexts/QuoteContext.jsx';
import { site } from '../data/site.js';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { add } = useQuote();
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('drawing'); // drawing | photo

  const product = useMemo(() => products.find((p) => String(p.id) === String(id)), [id]);
  const parsed = useMemo(() => (product ? parseSize(product.name) : null), [product]);

  useDocumentTitle(product ? product.name : 'Ürün bulunamadı');

  if (!product) {
    return (
      <>
        <PageHeader title="Ürün bulunamadı" />
        <section className="section container center">
          <p className="section__lead">Aradığınız ürün taşınmış veya kaldırılmış olabilir.</p>
          <Link className="btn" to="/urunler" style={{ marginTop: '1rem' }}>
            <FaArrowLeft /> Ürünlere dön
          </Link>
        </section>
      </>
    );
  }

  const waNumber = site.whatsapp.replace(/\D/g, '');
  const waText = encodeURIComponent(`Merhaba, ${product.name} (${product.sku}) için ${qty} adet teklif almak istiyorum.`);

  return (
    <>
      <PageHeader title={product.name} lead={product.desc} />

      <section className="section container">
        <Link to="/urunler" className="btn btn--ghost btn--sm" style={{ marginBottom: '1.5rem' }}>
          <FaArrowLeft /> Tüm ürünler
        </Link>

        <div className="pd-detail">
          <div className="pd-detail__media">
            <div style={{ display: 'flex', gap: '0.5rem', padding: '0.75rem', borderBottom: '1px solid var(--line)' }}>
              <button
                className={`filters__btn ${activeTab === 'drawing' ? '' : ''}`}
                aria-pressed={activeTab === 'drawing'}
                onClick={() => setActiveTab('drawing')}
                style={{ flex: 1 }}
              >
                <FaRulerCombined style={{ marginRight: 6 }} /> Teknik Çizim
              </button>
              <button
                className="filters__btn"
                aria-pressed={activeTab === 'photo'}
                onClick={() => setActiveTab('photo')}
                style={{ flex: 1 }}
              >
                Fotoğraf
              </button>
            </div>

            {activeTab === 'drawing' ? (
              <div className="pd-detail__art">
                {parsed ? <PalletDrawing w={parsed.w} h={parsed.h} /> : <div style={{ padding: '2rem', textAlign: 'center' }}>Çizim yok</div>}
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                  <span className="chip">{parsed?.label || `${product.specs.en}×${product.specs.boy} cm`}</span>
                  <span className="chip chip--amber">{product.priceNote}</span>
                  <span className={`chip ${product.stock === 'Stokta' ? 'chip--success' : 'chip--ghost'}`}>{product.stock}</span>
                </div>
              </div>
            ) : (
              <img className="pd-detail__img" src={product.image} alt={product.name} />
            )}

            <div className="pd-detail__thumbs">
              <button className={`pd-detail__thumb ${activeTab === 'drawing' ? 'is-active' : ''}`} onClick={() => setActiveTab('drawing')}>
                <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', background: '#fbf6ee' }}>
                  <FaRulerCombined />
                </div>
              </button>
              <button className={`pd-detail__thumb ${activeTab === 'photo' ? 'is-active' : ''}`} onClick={() => setActiveTab('photo')}>
                <img src={product.image} alt={product.name} />
              </button>
            </div>
          </div>

          <div className="pd-detail__info">
            <div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                <span className="chip chip--ghost">{product.sku}</span>
                <span className="chip">{product.category.toUpperCase()}</span>
              </div>
              <h1 className="pd-detail__title">{product.name}</h1>
              <p className="pd-detail__desc" style={{ marginTop: '0.85rem' }}>
                {product.desc} Fırınlanmış çam kerestesinden, {product.specs.takoz} ve {product.specs.tahta} ile üretilmiştir. İsteğe bağlı ISPM-15 ısıl işlemli olarak ihracat paleti olarak hazırlanır.
              </p>
            </div>

            <div className="pd-detail__features">
              {product.features.map((f) => (
                <span key={f} className="chip chip--ghost">
                  <FaCheck style={{ color: 'var(--success)', fontSize: '0.7rem' }} /> {f}
                </span>
              ))}
            </div>

            <div className="pd-detail__specs">
              {Object.entries(product.specs).map(([k, v]) => (
                <div key={k} className="pd-detail__spec">
                  <dt>
                    {k === 'en' ? 'En' : k === 'boy' ? 'Boy' : k === 'yukseklik' ? 'Yükseklik' : k === 'agirlik' ? 'Ağırlık' : k === 'kapasite' ? 'Kapasite' : k === 'takoz' ? 'Takoz' : k === 'tahta' ? 'Tahta' : k}
                  </dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap', padding: '1rem', background: 'var(--paper-2)', borderRadius: '14px', border: '1px solid var(--line)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button className="btn btn--icon btn--ghost" aria-label="Azalt" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                  −
                </button>
                <span style={{ minWidth: 48, textAlign: 'center', fontWeight: 800, fontFamily: 'var(--mono)', fontSize: '1.1rem' }}>{qty}</span>
                <button className="btn btn--icon btn--ghost" aria-label="Artır" onClick={() => setQty((q) => q + 1)}>
                  +
                </button>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>adet</span>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <button className="btn" onClick={() => add(product, qty)}>
                  <FaShoppingBasket /> Sepete ekle
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gap: '0.75rem' }}>
              <a href="#iletisim" className="btn btn--ghost">
                <FaPhoneAlt /> Hızlı teklif al
              </a>
              {waNumber && (
                <a
                  href={`https://wa.me/${waNumber}?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ background: '#25d366', borderColor: '#25d366', color: '#fff' }}
                >
                  <FaWhatsapp /> WhatsApp ile sor
                </a>
              )}
            </div>

            <div style={{ padding: '1rem', background: 'var(--card)', border: '1px dashed var(--line)', borderRadius: '12px', fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--ink-2)' }}>
              <strong style={{ color: 'var(--ink)' }}>Bilgi:</strong> Fiyatlar adet, teslim yeri ve ısıl işlem durumuna göre değişir. Tır bazında (500+ adet) özel indirim. Samsun içi aynı gün teslimat mümkün. Numune gönderiyoruz.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
