import PageHeader from '../components/PageHeader.jsx';
import FaqList from '../components/FaqList.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function Faq() {
  useDocumentTitle('Sıkça Sorulan Sorular');
  return (
    <>
      <PageHeader title="Sıkça Sorulan Sorular" />
      <FaqList />
    </>
  );
}
