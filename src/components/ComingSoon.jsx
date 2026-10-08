import PageHeader from './PageHeader.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

// İçeriği henüz hazır olmayan sayfalar için dürüst yer tutucu.
// Hazır olunca bu bileşeni gerçek içerikle değiştir; hazır değilken menüden kaldırmayı da düşün.
export default function ComingSoon({ title }) {
  useDocumentTitle(title);
  return (
    <>
      <PageHeader title={title} />
      <section className="section container center">
        <p className="section__lead">Bu bölüm hazırlanıyor.</p>
      </section>
    </>
  );
}
