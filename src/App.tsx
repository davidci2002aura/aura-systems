import { useEffect, lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import SkipLink from './components/SkipLink/SkipLink';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SkeletonLoader from './components/SkeletonLoader/SkeletonLoader';
import BackgroundSystem from './components/BackgroundSystem/BackgroundSystem';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import WebsitesPage from './pages/WebsitesPage';
import AutomationPage from './pages/AutomationPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';

// Lazy load below-fold components
const Marquee = lazy(() => import('./components/Marquee/Marquee'));
const SolutionFinder = lazy(() => import('./components/SolutionFinder/SolutionFinder'));
const BentoGrid = lazy(() => import('./components/BentoGrid/BentoGrid'));
const ProcessSection = lazy(() => import('./components/ProcessSection/ProcessSection'));
const PricingSection = lazy(() => import('./components/PricingSection/PricingSection'));
const FAQSection = lazy(() => import('./components/FAQSection/FAQSection'));
const ContactForm = lazy(() => import('./components/ContactForm/ContactForm'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0, behavior: 'auto' });

    const pageTitles: Record<string, string> = {
      '/': 'Aura Systems | Websites & Automatisierung aus Ravensburg',
      '/websites': 'Websites & Webanwendungen | Aura Systems',
      '/automatisierung': 'Geschäftsautomatisierung | Aura Systems',
      '/vorgehensweise': 'Vorgehen & Preise | Aura Systems',
      '/kontakt': 'Projekt anfragen | Aura Systems',
    };

    document.title = pageTitles[location.pathname] ?? pageTitles['/'];
  }, [location.pathname, location.hash]);

  const home = (
    <>
      <Hero />
      <Suspense fallback={<SkeletonLoader />}>
        <Marquee />
        <SolutionFinder />
        <BentoGrid />
        <ProcessSection />
        <PricingSection />
        <FAQSection />
        <ContactForm />
        <Footer />
      </Suspense>
    </>
  );

  return (
    <ErrorBoundary>
      <SkipLink />
      <ScrollToTop />
      <BackgroundSystem />
      <Navigation />

      <div id="main-content" style={{ position: 'relative', zIndex: 10, minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={home} />
          <Route path="/websites" element={<WebsitesPage />} />
          <Route path="/automatisierung" element={<AutomationPage />} />
          <Route path="/vorgehensweise" element={<ProcessPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
