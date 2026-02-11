import React from 'react';
import { ArrowRight, Cpu, Network, Zap } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Hero: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
        </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center text-center">
        <div 
            ref={elementRef}
            className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-8 backdrop-blur-sm hover:border-indigo-500/50 transition-colors cursor-default">
                <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
                <span className="text-xs font-medium text-indigo-200 tracking-wide uppercase">AI-Native Agency</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-8 text-white">
            Souveräne Intelligenz für <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-gradient-x text-glow">
                Ihr Unternehmen
            </span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed">
            Wir transformieren starre Prozesse in adaptive Systeme. Mit autonomen Agenten und maßgeschneiderter Backend-Architektur schaffen wir den Wettbewerbsvorteil von morgen.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a href="#kontakt" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] flex items-center justify-center group">
                Erstgespräch vereinbaren
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#leistungen" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-lg font-medium text-lg transition-all duration-300 flex items-center justify-center">
                Mehr erfahren
            </a>
            </div>
        </div>

        {/* Feature Grid Mini */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl border-t border-white/5 pt-12">
            {[
                { icon: Cpu, label: "Autonome Agenten", desc: "Selbstlernende Systeme, die handeln." },
                { icon: Network, label: "Backend Optimization", desc: "Skalierbare Infrastruktur für High-Load." },
                { icon: Zap, label: "Echtzeit-Verarbeitung", desc: "Latenzfreie Entscheidungsfindung." }
            ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-4 hover:bg-white/5 rounded-xl transition-colors duration-300">
                    <item.icon className="h-8 w-8 text-indigo-400 mb-3" />
                    <h3 className="font-bold text-white mb-1">{item.label}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};