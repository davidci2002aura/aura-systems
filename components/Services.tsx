import React from 'react';
import { Bot, Database, Workflow, ShieldCheck, Terminal, LineChart } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ServiceCard: React.FC<{ title: string; desc: string; icon: React.ElementType; delay: number }> = ({ title, desc, icon: Icon, delay }) => {
    const { elementRef, isVisible } = useIntersectionObserver();

    return (
        <div 
            ref={elementRef}
            style={{ transitionDelay: `${delay}ms` }}
            className={`group p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-indigo-500/30 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} relative overflow-hidden`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
                <div className="h-12 w-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-indigo-500/20 group-hover:border-indigo-500/50">
                    <Icon className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">{title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
            </div>
        </div>
    );
};

export const Services: React.FC = () => {
  const services = [
    {
      title: "KI-Agenten Entwicklung",
      desc: "Maßgeschneiderte autonome Agenten, die Kundensupport, Vertrieb und interne Prozesse rund um die Uhr übernehmen.",
      icon: Bot
    },
    {
      title: "Backend-Optimierung",
      desc: "Modernisierung Ihrer Legacy-Systeme und Integration von High-Performance APIs für nahtlose KI-Anbindung.",
      icon: Database
    },
    {
      title: "Workflow Automation",
      desc: "End-to-End Automatisierung komplexer Geschäftsabläufe durch intelligente Orchestrierung verschiedener Tools.",
      icon: Workflow
    },
    {
        title: "Souveräne Datensicherheit",
        desc: "On-Premise oder Private Cloud Lösungen, die garantieren, dass Ihre Daten Ihr Unternehmen nie verlassen.",
        icon: ShieldCheck
    },
    {
        title: "Custom LLM Training",
        desc: "Fine-Tuning von Open-Source Modellen auf Ihre spezifischen Unternehmensdaten und Terminologien.",
        icon: Terminal
    },
    {
        title: "Predictive Analytics",
        desc: "Nutzung von KI zur Vorhersage von Markttrends und Kundenverhalten für proaktive Entscheidungen.",
        icon: LineChart
    }
  ];

  return (
    <section id="leistungen" className="py-24 relative bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 text-glow">Unsere Expertise</h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Wir bieten nicht nur Technologie, sondern strategische Vorteile. Unsere Lösungen sind modular, skalierbar und auf maximale Effizienz getrimmt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, idx) => (
                <ServiceCard key={idx} {...s} delay={idx * 100} />
            ))}
        </div>
      </div>
    </section>
  );
};