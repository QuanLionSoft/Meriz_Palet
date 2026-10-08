import Hero from '../components/Hero.jsx';
import Stats from '../components/Stats.jsx';
import Features from '../components/Features.jsx';
import Services from '../components/Services.jsx';
import Process from '../components/Process.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import About from '../components/About.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CTA from '../components/CTA.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function Home() {
  useDocumentTitle('');
  return (
    <>
      <Hero />
      <Stats />
      <ProductGrid limit={8} showAllLink />
      <Features />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <CTA />
    </>
  );
}
