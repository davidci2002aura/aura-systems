import React from 'react';
import { Bot, Database, Workflow, ShieldCheck, Terminal, LineChart } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ServiceCard: React.FC<{ title: string; desc: string; icon: React.ElementType; delay: number; gradient: string }> = ({ title, desc, icon: Icon, delay, gradient }) => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={elementRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} relative overflow-hidden backdrop-blur-xl`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
      <div className="relative z-10 flex flex-col h-full">
        <div className="h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-indigo-500/50 group-hover:scale-110 transition-all duration-500">
          <Icon className="h-8 w-8 text-indigo-400" />
        </div>
        <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight group-hover:text-indigo-300 transition-colors">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-lg font-light mb-8 flex-grow">{desc}</p>
        <div className="pt-6 border-t border-white/5 flex items-center text-sm font-bold text-indigo-400 tracking-widest uppercase group-hover:gap-3 gap-2 transition-all">
          Details <span className="text-lg">→</span>
        </div>
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  const services = [
    {
      title: "Frontend Sovereignty",
      desc: "Wir bauen Interfaces, die nicht nur beeindrucken, sondern konvertieren. Pixelfreies Engineering trifft auf intuitive Psychologie.",
      icon: Terminal,
      gradient: "from-indigo-600/20 to-transparent"
    },
    {
      title: "Backend Autonomy",
      desc: "Hochperformante Architekturen, die Ihr Unternehmen tragen. Skalierbar, sicher und bereit für die Ära der Automatisierung.",
      icon: Database,
      gradient: "from-purple-600/20 to-transparent"
    },
    {
      title: "AI Core Intelligence",
      desc: "Wir integrieren autonome Agenten direkt in Ihren Stack. Echte Intelligenz, die handelt, optimiert und lernt.",
      icon: Bot,
      gradient: "from-blue-600/20 to-transparent"
    }
  ];

  return (
    <section id="leistungen" className="py-32 relative overflow-hidden">
      {/* Subtle Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <span className="text-indigo-500 font-black text-xs tracking-[0.4em] uppercase mb-4 block">Core Capabilities</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 text-glow tracking-tighter">DIE DREI SÄULEN.</h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-xl font-light">
            Wir transformieren Unternehmen durch die perfekte Symbiose aus Visual Power, stabiler Struktur und autonomer Intelligenz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <ServiceCard key={idx} {...s} delay={idx * 200} />
          ))}
        </div>
      </div>
    </section>
  );
};