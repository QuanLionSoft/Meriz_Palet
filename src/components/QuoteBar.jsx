import { FaShoppingBasket, FaTimes, FaPlus, FaMinus, FaTrash, FaArrowRight } from 'react-icons/fa';
import { useQuote } from '../contexts/QuoteContext.jsx';
import { Link } from 'react-router-dom';

export function QuoteBar() {
  const { count, items, open } = useQuote();
  if (count === 0) return null;
  return (
    <div className="quote-bar" role="status" aria-live="polite">
      <div className="quote-bar__count">{count}</div>
      <div className="quote-bar__text">
        <strong>{items.length}</strong> çeşit, <strong>{count}</strong> adet palet seçildi
      </div>
      <button className="btn btn--amber btn--sm" onClick={open}>
        Teklif iste <FaArrowRight />
      </button>
    </div>
  );
}

export function QuoteDrawer() {
  const { items, count, isOpen, close, updateQty, remove, clear } = useQuote();

  return (
    <div className={`quote-drawer ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
      <div className="quote-drawer__backdrop" onClick={close} />
      <div className="quote-drawer__panel" role="dialog" aria-modal="true" aria-label="Teklif sepeti">
        <div className="quote-drawer__head">
          <div>
            <div className="quote-drawer__title">Teklif Sepeti</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.78rem', color: 'var(--muted)' }}>
              {count} adet • {items.length} çeşit
            </div>
          </div>
          <button className="btn btn--icon btn--ghost" aria-label="Kapat" onClick={close}>
            <FaTimes />
          </button>
        </div>

        <div className="quote-drawer__body">
          {items.length === 0 ? (
            <div className="quote-drawer__empty">
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
                <FaShoppingBasket />
              </div>
              <p style={{ fontWeight: 700, margin: '0 0 0.35rem' }}>Sepetiniz boş</p>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Ürün kartlarındaki sepet ikonuna tıklayarak palet ekleyin.</p>
              <Link to="/urunler" className="btn btn--ghost btn--sm" style={{ marginTop: '1rem' }} onClick={close}>
                Ürünlere git
              </Link>
            </div>
          ) : (
            items.map((it) => (
              <div key={it.id} className="quote-item">
                <div className="quote-item__media">
                  <img src={it.image} alt={it.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="quote-item__body">
                  <div className="quote-item__title">{it.name}</div>
                  <div className="quote-item__sku">{it.sku}</div>
                  <div className="quote-item__qty">
                    <button aria-label="Azalt" onClick={() => updateQty(it.id, it.qty - 1)}>
                      <FaMinus style={{ fontSize: '0.65rem' }} />
                    </button>
                    <span>{it.qty}</span>
                    <button aria-label="Artır" onClick={() => updateQty(it.id, it.qty + 1)}>
                      <FaPlus style={{ fontSize: '0.65rem' }} />
                    </button>
                    <button
                      aria-label="Sil"
                      onClick={() => remove(it.id)}
                      style={{ marginLeft: 'auto', color: 'var(--danger)', borderColor: '#f5c2be' }}
                    >
                      <FaTrash style={{ fontSize: '0.7rem' }} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="quote-drawer__foot">
            <button className="btn" onClick={() => { close(); document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Teklif formuna git <FaArrowRight />
            </button>
            <button className="btn btn--ghost btn--sm" onClick={clear}>
              Sepeti temizle
            </button>
            <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--muted)', textAlign: 'center', lineHeight: 1.4 }}>
              Teklifiniz iletişim formuna otomatik eklenir. 30 dk içinde dönüş yapıyoruz.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
