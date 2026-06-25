import { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Lenis from 'lenis';

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Products } from './pages/Products';
import { SpecificProduct } from './pages/SpecificProduct';
import { ProductDetail } from './pages/ProductDetail';

import { Contact } from './pages/Contact';
import { PartnershipVertiv } from './pages/PartnershipVertiv';
import { SolutionsCapitalGoods } from './pages/SolutionsCapitalGoods';
import { SolutionsEpcMepf } from './pages/SolutionsEpcMepf';

function App() {
  const location = useLocation();

  // Smart scroll: go to hash anchor if present, otherwise scroll to top
  useEffect(() => {
    const hash = location.hash; // e.g. "#critical-power"
    if (hash) {
      // Give the new page time to paint its elements before scrolling
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 120);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.hash]);
  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = undefined;
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:categoryId" element={<SpecificProduct />} />
          <Route path="/products/:categoryId/:productId" element={<ProductDetail />} />

          <Route path="/partners/vertiv" element={<PartnershipVertiv />} />
          <Route path="/partnerships/vertiv" element={<PartnershipVertiv />} />
          <Route path="/solutions/capital-goods" element={<SolutionsCapitalGoods />} />
          <Route path="/solutions/epc-mepf" element={<SolutionsEpcMepf />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
