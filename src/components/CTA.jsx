import { FaArrowRight, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { site } from '../data/site.js';

export default function CTA() {
  const waNumber = site.whatsapp.replace(/\D/g, '');
  return (
    <section className="section">
      <div className="container">
        <div className="cta">
          <div className="cta__grid">
            <div>
              <h2 className="cta__title">Doğru paleti birlikte bulalım. 30 dakikada net teklif.</h2>
              <p className="cta__lead">
                Ölçü, adet ve teslim yerini iletin. Tır bazında özel fiyat ve aynı gün sevkiyat imkanı sunalım. Ücretsiz numune ve teknik danışmanlık.
              </p>
              <div className="cta__actions">
                <a href="#iletisim" className="btn btn--amber btn--lg">
                  Teklif al <FaArrowRight aria-hidden="true" />
                </a>
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="btn btn--white btn--lg">
                  <FaPhoneAlt aria-hidden="true" /> {site.phoneDisplay}
                </a>
              </div>
            </div>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div style={{ padding: '1.25rem', background: 'rgb(255 255 255 / 0.06)', border: '1px solid rgb(255 255 255 / 0.12)', borderRadius: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ width: 36, height: 36, display: 'grid', placeItems: 'center', background: '#25d366', borderRadius: '50%', color: '#fff' }}>
                    <FaWhatsapp />
                  </span>
                  <strong>WhatsApp ile hızlı teklif</strong>
                </div>
                <p style={{ margin: 0, color: 'rgb(246 240 231 / 0.7)', fontSize: '0.92rem' }}>
                  Fotoğraf ve ölçüleri gönderin, 15 dakikada dönüş yapalım.
                </p>
                {waNumber && (
                  <a
                    href={`https://wa.me/${waNumber}?text=Merhaba, palet teklifi almak istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--sm"
                    style={{ marginTop: '0.85rem', background: '#25d366', borderColor: '#25d366', color: '#fff' }}
                  >
                    <FaWhatsapp /> WhatsApp’a yaz
                  </a>
                )}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span className="chip" style={{ background: 'rgb(255 255 255 / 0.1)', color: '#fff', border: '1px solid rgb(255 255 255 / 0.15)' }}>
                  ✓ Ücretsiz keşif
                </span>
                <span className="chip" style={{ background: 'rgb(255 255 255 / 0.1)', color: '#fff', border: '1px solid rgb(255 255 255 / 0.15)' }}>
                  ✓ Aynı gün kargo
                </span>
                <span className="chip" style={{ background: 'rgb(255 255 255 / 0.1)', color: '#fff', border: '1px solid rgb(255 255 255 / 0.15)' }}>
                  ✓ Tır bazında indirim
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
