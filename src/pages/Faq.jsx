import PageHeader from '../components/PageHeader.jsx';
import FaqList from '../components/FaqList.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function Faq() {
  useDocumentTitle('Sıkça Sorulan Sorular');
  return (
    <>
      <PageHeader
        title="Sıkça Sorulan Sorular"
        lead="Palet ölçüleri, taşıma kapasitesi, ISPM-15, minimum sipariş ve sevkiyat hakkında en çok sorulanlar."
      />
      <FaqList />
      <section className="section container center">
        <p className="section__lead">Sorunuz listede yok mu? Bize yazın, aynı gün içinde yanıtlayalım.</p>
        <a href="#iletisim" className="btn" style={{ marginTop: '1rem' }}>
          İletişime geç
        </a>
      </section>
    </>
  );
}
