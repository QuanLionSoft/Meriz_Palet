import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { navLinks, site } from '../data/site.js';
import Logo from './Logo.jsx';

export default function Footer() {
  const waNumber = site.whatsapp.replace(/\D/g, '');

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
          <p style={{ marginTop: '1rem', maxWidth: '34ch', lineHeight: 1.6, fontSize: '0.95rem' }}>
            {site.slogan}. Samsun OSB’de EPAL ve CP standartlarında palet üretimi. Türkiye geneli sevkiyat, ihracat uyumlu ısıl işlemli paletler.
          </p>
          <div style={{ marginTop: '1.25rem', display: 'grid', gap: '0.6rem' }}>
            {site.phone && (
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                <FaPhoneAlt /> {site.phoneDisplay}
              </a>
            )}
            {site.email && (
              <a href={`mailto:${site.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaEnvelope /> {site.email}
              </a>
            )}
            <span style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', lineHeight: 1.5 }}>
              <FaMapMarkerAlt style={{ marginTop: 3, flex: 'none' }} /> {site.address}
            </span>
          </div>
        </div>

        <nav aria-label="Alt menü">
          <p className="footer__heading">Sayfalar</p>
          <ul className="footer__links">
            <li><Link to="/">Ana Sayfa</Link></li>
            {navLinks.map((l) => (
              <li key={l.label}>{l.to ? <Link to={l.to}>{l.label}</Link> : <a href={l.href}>{l.label}</a>}</li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Ürünler">
          <p className="footer__heading">Ürünler</p>
          <ul className="footer__links">
            <li><Link to="/urunler">Tüm Ürünler</Link></li>
            <li><Link to="/urunler">Euro Paletler</Link></li>
            <li><Link to="/urunler">CP Paletler</Link></li>
            <li><Link to="/urunler">Özel Ölçü Palet</Link></li>
            <li><Link to="/urunler">İhracat Paleti (ISPM-15)</Link></li>
            <li><Link to="/urunler">İnce / Orta / Kalın Tip</Link></li>
          </ul>
        </nav>

        <div>
          <p className="footer__heading">Bize ulaşın</p>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 1rem' }}>
            30 dakikada net fiyat ve teslim tarihi. Tır bazında özel indirim.
          </p>
          <div style={{ display: 'grid', gap: '0.6rem' }}>
            <a href="#iletisim" className="btn btn--amber btn--sm" style={{ justifySelf: 'start' }}>
              Teklif al <FaArrowRight />
            </a>
            {waNumber && (
              <a
                href={`https://wa.me/${waNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--sm"
                style={{ justifySelf: 'start', background: '#25d366', borderColor: '#25d366', color: '#fff' }}
              >
                <FaWhatsapp /> WhatsApp
              </a>
            )}
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <p className="footer__heading" style={{ marginBottom: '0.6rem' }}>
              Takip edin
            </p>
            <ul className="footer__social">
              {site.instagram && (
                <li>
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                </li>
              )}
              {site.facebook && (
                <li>
                  <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                </li>
              )}
              {waNumber && (
                <li>
                  <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <FaWhatsapp />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        <div className="container">
          <span>© {new Date().getFullYear()} {site.name} • Tüm hakları saklıdır.</span>
          <span style={{ display: 'inline-flex', gap: '1rem' }}>
            <span>EPAL • ISPM-15 • ISO 9001</span>
            <span className="hide-mobile">Samsun / Türkiye</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
