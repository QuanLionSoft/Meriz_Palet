import PageHeader from '../components/PageHeader.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function Products() {
  useDocumentTitle('Ürünlerimiz');
  return (
    <>
      <PageHeader title="Ürünlerimiz" />
      <ProductGrid heading={null} filterable />
    </>
  );
}
