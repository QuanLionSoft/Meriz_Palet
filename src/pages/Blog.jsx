import { Link } from 'react-router-dom';
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import PageHeader from '../components/PageHeader.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import { blogPosts } from '../data/site.js';

export default function Blog() {
  useDocumentTitle('Blog');
  return (
    <>
      <PageHeader
        title="Blog"
        lead="Palet seçimi, ihracat, ISPM-15 ve lojistik maliyetlerini düşürme üzerine rehberler. Uzmanından ipuçları."
      />
      <section className="section container">
        <div className="blog__grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog__card">
              <div className="blog__media">
                <img src={post.image} alt={post.title} loading="lazy" />
                <span className="chip blog__media-cat">{post.category}</span>
              </div>
              <div className="blog__body">
                <div className="blog__meta">
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <FaCalendarAlt /> {new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                </div>
                <h2 className="blog__title">{post.title}</h2>
                <p className="blog__excerpt">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="blog__link">
                  Devamını oku <FaArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="center" style={{ marginTop: '2.5rem' }}>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Yakında daha fazla rehber eklenecek. Sorunuz mu var? İletişime geçin.</p>
          <a href="#iletisim" className="btn btn--ghost" style={{ marginTop: '0.75rem' }}>
            Bize sor
          </a>
        </div>
      </section>
    </>
  );
}
