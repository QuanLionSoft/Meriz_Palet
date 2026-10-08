import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt } from 'react-icons/fa';
import PageHeader from '../components/PageHeader.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import { blogPosts } from '../data/site.js';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = useMemo(() => blogPosts.find((p) => p.slug === slug), [slug]);

  useDocumentTitle(post ? post.title : 'Yazı bulunamadı');

  if (!post) {
    return (
      <>
        <PageHeader title="Yazı bulunamadı" />
        <section className="section container center">
          <p className="section__lead">Aradığınız yazı taşınmış veya kaldırılmış olabilir.</p>
          <Link className="btn" to="/blog" style={{ marginTop: '1rem' }}>
            <FaArrowLeft /> Bloga dön
          </Link>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader title={post.title} lead={post.excerpt} />
      <section className="section container">
        <div className="blog-detail">
          <div className="blog-detail__meta">
            <span className="chip">{post.category}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--mono)', fontSize: '0.82rem', color: 'var(--muted)' }}>
              <FaCalendarAlt /> {new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>

          <img src={post.image} alt={post.title} style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', borderRadius: '20px', marginBottom: '1.75rem', border: '1px solid var(--line)' }} />

          <div className="blog-detail__content">
            {post.content.trim().split('\n\n').map((para, i) => (
              <p key={i}>{para.trim()}</p>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--line)', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link to="/blog" className="btn btn--ghost btn--sm">
              <FaArrowLeft /> Tüm yazılar
            </Link>
            <a href="#iletisim" className="btn btn--sm">
              Teklif al
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
