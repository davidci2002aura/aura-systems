import React, { useState, useEffect } from 'react';
import './index.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { TransformationBlueprint } from './components/TransformationBlueprint';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SystemHandshake } from './components/SystemHandshake';
import { CustomCursor } from './components/CustomCursor';

const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const [blueprintMode, setBlueprintMode] = useState(false);

  useEffect(() => {
    if (blueprintMode) {
      document.body.classList.add('blueprint-active');
    } else {
      document.body.classList.remove('blueprint-active');
    }
  }, [blueprintMode]);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-[#0077ff]/30">
      <CustomCursor />

      {!isReady && <SystemHandshake onComplete={() => setIsReady(true)} />}

      <div className={`transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar onToggleBlueprint={() => setBlueprintMode(!blueprintMode)} blueprintActive={blueprintMode} />
        <main className="flex-grow">
          <Hero />
          <Services />
          <TransformationBlueprint />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Blueprint Grid Overlay */}
      <div className={`fixed inset-0 pointer-events-none transition-opacity duration-700 blueprint-grid z-[5] ${blueprintMode ? 'opacity-20' : 'opacity-0'}`} />
    </div>
  );
};

export default App;