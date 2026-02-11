import React from 'react';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Step: React.FC<{ number: string; title: string; desc: string; icon: React.ElementType; isLast?: boolean; index: number }> = ({ number, title, desc, icon: Icon, isLast, index }) => {
    const { elementRef, isVisible } = useIntersectionObserver();

    return (
        <div ref={elementRef} className={`relative flex flex-col items-center text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${index * 200}ms` }}>
            {/* Connector Line */}
            {!isLast && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-[2px] bg-gradient-to-r from-indigo-500/50 to-indigo-500/10 -z-10 transform translate-x-1/2" />
            )}
            
            <div className="w-20 h-20 rounded-2xl bg-[#0a0a0a] border border-indigo-500/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(99,102,241,0.15)] z-10">
                <Icon className="h-8 w-8 text-indigo-400" />
            </div>
            
            <div className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-2">Phase {number}</div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-sm text-gray-400 max-w-xs">{desc}</p>
        </div>
    );
};

export const Process: React.FC = () => {
    const steps = [
        {
            number: "01",
            title: "Discovery & Audit",
            desc: "Wir analysieren Ihre bestehende Infrastruktur und identifizieren High-Impact Automatisierungspotenziale.",
            icon: Search
        },
        {
            number: "02",
            title: "Architektur & Strategie",
            desc: "Entwicklung eines maßgeschneiderten Blueprints für die Integration von KI-Agenten in Ihre Workflows.",
            icon: PenTool
        },
        {
            number: "03",
            title: "Entwicklung & Integration",
            desc: "Agile Implementierung der Lösungen mit Fokus auf Code-Qualität, Sicherheit und Performance.",
            icon: Code2
        },
        {
            number: "04",
            title: "Rollout & Skalierung",
            desc: "Begleitete Einführung, Mitarbeiterschulung und kontinuierliche Optimierung der Systeme.",
            icon: Rocket
        }
    ];

  return (
    <section id="prozess" className="py-24 bg-[#050b1a] relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 text-glow">Unser Prozess</h2>
          <p className="text-gray-400 text-lg">Vom Konzept zur autonomen Realität in vier Schritten.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, idx) => (
                <Step 
                    key={idx} 
                    {...step} 
                    index={idx}
                    isLast={idx === steps.length - 1} 
                />
            ))}
        </div>
      </div>
    </section>
  );
};