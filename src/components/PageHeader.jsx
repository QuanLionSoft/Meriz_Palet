import { Link } from 'react-router-dom';

export default function PageHeader({ title, lead }) {
  return (
    <section className="page-header">
      <div className="container">
        <nav className="crumbs" aria-label="Sayfa yolu">
          <Link to="/">Ana sayfa</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{title}</span>
        </nav>
        <h1 className="page-header__title">{title}</h1>
        {lead && <p className="page-header__lead">{lead}</p>}
      </div>
    </section>
  );
}
