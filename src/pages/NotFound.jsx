import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function NotFound() {
  useDocumentTitle('Sayfa bulunamadı');
  return (
    <section className="section container center">
      <h1 className="section__title">Sayfa bulunamadı</h1>
      <p className="section__lead">Aradığın sayfa taşınmış ya da hiç var olmamış olabilir.</p>
      <Link className="btn" to="/">Ana sayfaya dön</Link>
    </section>
  );
}
