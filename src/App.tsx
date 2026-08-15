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
import LegalPage from './pages/LegalPage';
import AtlasPage from './pages/AtlasPage';
import AtlasDemoPage from './pages/AtlasDemoPage';

// Lazy load below-fold components
const Marquee = lazy(() => import('./components/Marquee/Marquee'));
const BentoGrid = lazy(() => import('./components/BentoGrid/BentoGrid'));
const ProcessSection = lazy(() => import('./components/ProcessSection/ProcessSection'));
const PricingSection = lazy(() => import('./components/PricingSection/PricingSection'));
const FAQSection = lazy(() => import('./components/FAQSection/FAQSection'));
const ContactForm = lazy(() => import('./components/ContactForm/ContactForm'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const AtlasShowcase = lazy(() => import('./components/AtlasShowcase/AtlasShowcase'));
const BrandStory = lazy(() => import('./components/BrandStory/BrandStory'));

function App() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0, behavior: 'auto' });

    const pageTitles: Record<string, string> = {
      '/': 'Aura Systems | Websites, KI & Automatisierung aus Ravensburg',
      '/websites': 'Websites & Webanwendungen | Aura Systems',
      '/automatisierung': 'AI-native Automatisierung | Aura Systems',
      '/vorgehensweise': 'Vorgehen & Preise | Aura Systems',
      '/kontakt': 'Projekt anfragen | Aura Systems',
      '/impressum': 'Impressum | Aura Systems',
      '/datenschutz': 'Datenschutz | Aura Systems',
      '/atlas': 'ATLAS Inbox · AI-native Produktprojekt | Aura Systems',
      '/projekte/atlas': 'ATLAS Inbox · AI-native Produktprojekt | Aura Systems',
      '/atlas/demo': 'ATLAS Inbox · Interaktive Produktdemo | Aura Systems',
    };

    document.title = pageTitles[location.pathname] ?? pageTitles['/'];

    const descriptions: Record<string, string> = {
      '/atlas': 'ATLAS bereitet operative Anfragen vor, macht Entscheidungsgrundlagen sichtbar und dokumentiert menschliche Freigaben.',
      '/projekte/atlas': 'ATLAS bereitet operative Anfragen vor, macht Entscheidungsgrundlagen sichtbar und dokumentiert menschliche Freigaben.',
      '/atlas/demo': 'Öffentliche interaktive Demo der ATLAS Approval Inbox von Aura Systems.',
    };
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', descriptions[location.pathname] ?? 'Websites, KI-Assistenten und kontrollierte Geschäftsautomatisierungen für lokale Unternehmen in Ravensburg und Umgebung.');
  }, [location.pathname, location.hash]);

  const home = (
    <>
      <Hero />
      <Suspense fallback={<SkeletonLoader />}>
        <Marquee />
        <AtlasShowcase />
        <BentoGrid />
        <BrandStory />
        <ProcessSection />
        <PricingSection />
        <FAQSection />
        <ContactForm />
        <Footer />
      </Suspense>
      <a className="aura-mobile-cta" href="/kontakt">Projekt besprechen <span>→</span></a>
    </>
  );

  if (location.pathname === '/atlas/demo') {
    return (
      <ErrorBoundary>
        <AtlasDemoPage />
      </ErrorBoundary>
    );
  }

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
          <Route path="/atlas" element={<AtlasPage />} />
          <Route path="/projekte/atlas" element={<AtlasPage />} />
          <Route path="/impressum" element={<LegalPage type="impressum" />} />
          <Route path="/datenschutz" element={<LegalPage type="datenschutz" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
