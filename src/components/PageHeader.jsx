import { Link } from 'react-router-dom';

// İç sayfaların üst başlığı: sayfa yolu + büyük başlık, teknik çizim kâğıdı zemini.
export default function PageHeader({ title }) {
  return (
    <section className="page-header">
      <div className="container">
        <nav className="crumbs" aria-label="Sayfa yolu">
          <Link to="/">Ana sayfa</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{title}</span>
        </nav>
        <h1 className="page-header__title">{title}</h1>
      </div>
    </section>
  );
}
