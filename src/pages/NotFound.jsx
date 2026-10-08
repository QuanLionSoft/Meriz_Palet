import { Link } from 'react-router-dom';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function NotFound() {
  useDocumentTitle('Sayfa bulunamadı');
  return (
    <section className="section container center">
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🧭</div>
        <h1 className="section__title">Sayfa bulunamadı</h1>
        <p className="section__lead" style={{ marginInline: 'auto' }}>
          Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir. Ürünlerimize göz atın veya ana sayfaya dönün.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
          <Link className="btn" to="/">
            <FaArrowLeft /> Ana sayfaya dön
          </Link>
          <Link className="btn btn--ghost" to="/urunler">
            <FaSearch /> Ürünleri gör
          </Link>
        </div>
      </div>
    </section>
  );
}
