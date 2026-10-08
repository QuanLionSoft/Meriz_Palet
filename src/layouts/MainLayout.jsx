import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TopBar from '../components/TopBar.jsx';
import Header from '../components/Header.jsx';
import ContactSection from '../components/ContactSection.jsx';
import Footer from '../components/Footer.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';
import { QuoteBar, QuoteDrawer } from '../components/QuoteBar.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Header />
      <main>
        <Outlet />
      </main>
      <ContactSection />
      <Footer />
      <QuoteBar />
      <QuoteDrawer />
      <WhatsAppButton />
    </>
  );
}
