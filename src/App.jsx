import { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Lenis from "lenis";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";

// Lazy load pages for dynamic code-splitting
const Home = lazy(() => import("./pages/Home").then(m => ({ default: m.Home })));
const About = lazy(() => import("./pages/About").then(m => ({ default: m.About })));
const Services = lazy(() => import("./pages/Services").then(m => ({ default: m.Services })));
const Products = lazy(() => import("./pages/Products").then(m => ({ default: m.Products })));
const SpecificProduct = lazy(() => import("./pages/SpecificProduct").then(m => ({ default: m.SpecificProduct })));
const ProductDetail = lazy(() => import("./pages/ProductDetail").then(m => ({ default: m.ProductDetail })));
const Contact = lazy(() => import("./pages/Contact").then(m => ({ default: m.Contact })));
const PartnershipVertiv = lazy(() => import("./pages/PartnershipVertiv").then(m => ({ default: m.PartnershipVertiv })));
const SolutionsCapitalGoods = lazy(() => import("./pages/SolutionsCapitalGoods").then(m => ({ default: m.SolutionsCapitalGoods })));
const SolutionsEpcMepf = lazy(() => import("./pages/SolutionsEpcMepf").then(m => ({ default: m.SolutionsEpcMepf })));

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
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 120);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
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
        <Suspense fallback={
          <div className="min-h-[60vh] flex items-center justify-center bg-background text-primary">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:categoryId" element={<SpecificProduct />} />
            <Route
              path="/products/:categoryId/:productId"
              element={<ProductDetail />}
            />

            <Route path="/partners/vertiv" element={<PartnershipVertiv />} />
            <Route path="/partnerships/vertiv" element={<PartnershipVertiv />} />
            <Route
              path="/solutions/capital-goods"
              element={<SolutionsCapitalGoods />}
            />
            <Route path="/solutions/epc-mepf" element={<SolutionsEpcMepf />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
