import { FaFileAlt, FaCertificate, FaAward, FaDownload } from 'react-icons/fa';
import PageHeader from '../components/PageHeader.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';
import { documents } from '../data/site.js';

const typeIcons = {
  Sertifika: FaCertificate,
  Lisans: FaAward,
  Belge: FaFileAlt,
  Rapor: FaFileAlt,
};

export default function Documents() {
  useDocumentTitle('Belgelerimiz');
  return (
    <>
      <PageHeader
        title="Belgelerimiz"
        lead="ISPM-15, EPAL, ISO 9001 ve diğer kalite belgelerimiz. Tüm üretimimiz sertifikalı, izlenebilir ve ihracat uyumlu."
      />
      <section className="section container">
        <div className="docs__grid">
          {documents.map((doc) => {
            const Icon = typeIcons[doc.type] || FaFileAlt;
            return (
              <div key={doc.title} className="doc__card">
                <div className="doc__icon">
                  <Icon aria-hidden="true" />
                </div>
                <div className="doc__body">
                  <h3>{doc.title}</h3>
                  <p>{doc.desc}</p>
                  <div className="doc__meta">
                    <span className="chip chip--ghost">{doc.type}</span>
                    <span className="chip">{doc.year}</span>
                    <span className="chip chip--success">Doğrulanmış</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'var(--amber-soft)', border: '1px solid #f5d79a', borderRadius: '16px', display: 'flex', gap: '1rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ width: 44, height: 44, display: 'grid', placeItems: 'center', background: 'var(--amber)', borderRadius: '12px', flex: 'none' }}>
            <FaCertificate />
          </div>
          <div style={{ flex: 1, minWidth: 260 }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.35rem' }}>Belge doğrulama ve numune talebi</h3>
            <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: '0.93rem', lineHeight: 1.6 }}>
              Tüm belgelerimizin asıllarını üretim tesisimizde görebilir, kopyalarını e-posta ile talep edebilirsiniz. İhracat için gerekli HT damgası ve sertifika, her sevkiyatla birlikte irsaliyeye eklenir.
            </p>
          </div>
          <a href="#iletisim" className="btn btn--sm" style={{ alignSelf: 'center' }}>
            <FaDownload /> Belge talep et
          </a>
        </div>
      </section>
    </>
  );
}
