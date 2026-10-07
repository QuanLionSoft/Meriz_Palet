import Hero from '../components/Hero.jsx';
import Facts from '../components/Facts.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import About from '../components/About.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function Home() {
  useDocumentTitle('');
  return (
    <>
      <Hero />
      <Facts />
      <ProductGrid limit={8} showAllLink />
      <About />
    </>
  );
}
