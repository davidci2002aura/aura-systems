import { useState, lazy, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import SkipLink from './components/SkipLink/SkipLink';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SkeletonLoader from './components/SkeletonLoader/SkeletonLoader';
import Intro from './components/Intro/Intro';
import BackgroundSystem from './components/BackgroundSystem/BackgroundSystem';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';

// Lazy load below-fold components
const Marquee = lazy(() => import('./components/Marquee/Marquee'));
const BentoGrid = lazy(() => import('./components/BentoGrid/BentoGrid'));
const ProcessSection = lazy(() => import('./components/ProcessSection/ProcessSection'));
const PricingSection = lazy(() => import('./components/PricingSection/PricingSection'));
const FAQSection = lazy(() => import('./components/FAQSection/FAQSection'));
const ContactForm = lazy(() => import('./components/ContactForm/ContactForm'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
  const [introGone, setIntroGone] = useState(false);

  return (
    <ErrorBoundary>
      <SkipLink />
      <ScrollToTop />
      {!introGone && <Intro onComplete={() => setIntroGone(true)} />}
      <BackgroundSystem />
      <Navigation />

      <div id="main-content" style={{ position: 'relative', zIndex: 10, background: '#000000', minHeight: '100vh', color: '#f0f4ff' }}>
        <Hero introGone={introGone} />

        <Suspense fallback={<SkeletonLoader />}>
          <Marquee />
          <BentoGrid />
          <ProcessSection />
          <PricingSection />
          <FAQSection />
          <ContactForm />
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
