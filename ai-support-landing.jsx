import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail, Workflow, Cpu, Sparkles, Brain, Zap, TrendingUp,
  Target, Clock, DollarSign, Users, CheckCircle, ArrowRight,
  BarChart3, Shield, Code, Rocket, ChevronRight, X, Menu
} from "lucide-react";

// ============= CONTACT EMAIL =============
const CONTACT_EMAIL = "davidci2002@gmail.com";

// ============= PARTICLE SYSTEM =============
const ParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = Array.from({ length: 100 }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        // Connect nearby particles
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-40"
      style={{ zIndex: 0 }}
    />
  );
};

// ============= ANIMATED COUNTER =============
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="font-bold">
      {count}{suffix}
    </span>
  );
};

// ============= 3D SERVICE CARD =============
const ServiceCard3D = ({ service, index }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      className="perspective-1000 group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div
        className="relative transition-all duration-300 ease-out"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${isHovered ? 'scale(1.05)' : 'scale(1)'}`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <Card className="relative bg-gradient-to-br from-gray-900/90 to-gray-950/90 border-gray-800 rounded-3xl overflow-hidden backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />

          <CardContent className="p-8 relative z-10">
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />
              <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                {service.icon}
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {service.title}
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              {service.description}
            </p>

            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// ============= ROI CALCULATOR =============
const ROICalculator = () => {
  const [employees, setEmployees] = useState(10);
  const [hoursSaved, setHoursSaved] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(50);

  const monthlySavings = employees * hoursSaved * hourlyRate * 4;
  const yearlySavings = monthlySavings * 12;
  const roi = ((yearlySavings - 15000) / 15000) * 100;

  return (
    <Card className="bg-gradient-to-br from-gray-900/90 to-blue-950/30 border-blue-500/30 rounded-3xl overflow-hidden backdrop-blur-sm">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-green-400" />
          ROI Calculator
        </h3>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Anzahl Mitarbeiter: <span className="text-white font-bold">{employees}</span>
            </label>
            <input
              type="range"
              min="1"
              max="100"
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Stunden gespart pro Woche: <span className="text-white font-bold">{hoursSaved}h</span>
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={hoursSaved}
              onChange={(e) => setHoursSaved(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Stundensatz: <span className="text-white font-bold">{hourlyRate}€</span>
            </label>
            <input
              type="range"
              min="20"
              max="200"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-4 border border-blue-500/20">
            <div className="text-sm text-gray-400 mb-1">Monatlich</div>
            <div className="text-2xl font-bold text-blue-400">
              {monthlySavings.toLocaleString('de-DE')}€
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-4 border border-green-500/20">
            <div className="text-sm text-gray-400 mb-1">Jährlich</div>
            <div className="text-2xl font-bold text-green-400">
              {yearlySavings.toLocaleString('de-DE')}€
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-4 border border-purple-500/20">
            <div className="text-sm text-gray-400 mb-1">ROI</div>
            <div className="text-2xl font-bold text-purple-400">
              {roi.toFixed(0)}%
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// ============= MAIN COMPONENT =============
export default function AIBusinessPage() {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "AI Automation",
      description: "Automatisieren Sie repetitive Workflows und steigern Sie die Produktivität Ihres Teams durch intelligente KI-Lösungen.",
      icon: <Cpu className="w-8 h-8 text-white" />,
      features: [
        "Workflow-Automatisierung",
        "Intelligente Datenverarbeitung",
        "24/7 Kundenservice-Bots",
        "Lead-Generierung & Nurturing"
      ]
    },
    {
      title: "AI Integration",
      description: "Nahtlose Integration von KI in Ihre bestehende Infrastruktur - von CRM bis zu internen Tools.",
      icon: <Sparkles className="w-8 h-8 text-white" />,
      features: [
        "API-Integration",
        "Custom AI-Modelle",
        "Legacy-System-Anbindung",
        "Echtzeit-Datenanalyse"
      ]
    },
    {
      title: "Web-Optimierung",
      description: "Performance, UX und SEO-Optimierung mit KI-gesteuerten Insights und Implementierungen.",
      icon: <Workflow className="w-8 h-8 text-white" />,
      features: [
        "Performance-Audit",
        "AI-powered SEO",
        "Conversion-Optimierung",
        "Progressive Web Apps"
      ]
    },
    {
      title: "Predictive Analytics",
      description: "Nutzen Sie KI für datenbasierte Vorhersagen und strategische Geschäftsentscheidungen.",
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      features: [
        "Markt-Trend-Analyse",
        "Kundenverhalten-Prognose",
        "Risiko-Management",
        "Revenue-Forecasting"
      ]
    },
    {
      title: "Custom AI Solutions",
      description: "Maßgeschneiderte KI-Lösungen für Ihre spezifischen Business-Anforderungen und Prozesse.",
      icon: <Code className="w-8 h-8 text-white" />,
      features: [
        "Bedarfsanalyse",
        "Prototyp-Entwicklung",
        "Skalierbare Architektur",
        "Kontinuierliche Optimierung"
      ]
    },
    {
      title: "AI Training & Support",
      description: "Schulung Ihres Teams und fortlaufender Support für maximale Nutzung der KI-Tools.",
      icon: <Users className="w-8 h-8 text-white" />,
      features: [
        "Team-Workshops",
        "Best Practice Guides",
        "24/7 Technical Support",
        "Monatliche Updates"
      ]
    }
  ];

  const workflowSteps = [
    {
      title: "Discovery",
      subtitle: "Analyse & Strategie",
      description: "Wir analysieren Ihre Prozesse, identifizieren Optimierungspotenziale und entwickeln eine maßgeschneiderte KI-Strategie.",
      icon: <Target className="w-12 h-12" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Design",
      subtitle: "Konzeption & Planung",
      description: "Entwicklung detaillierter Workflows, System-Architektur und User Experience für optimale Integration.",
      icon: <Brain className="w-12 h-12" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Development",
      subtitle: "Implementierung",
      description: "Agile Entwicklung mit regelmäßigen Check-ins, Testing und iterativer Verbesserung der AI-Lösung.",
      icon: <Code className="w-12 h-12" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Deployment",
      subtitle: "Launch & Training",
      description: "Rollout der Lösung, Team-Training und Sicherstellung eines reibungslosen Übergangs.",
      icon: <Rocket className="w-12 h-12" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Scale",
      subtitle: "Optimierung & Wachstum",
      description: "Kontinuierliche Optimierung, Skalierung und Anpassung an neue Anforderungen für langfristigen Erfolg.",
      icon: <TrendingUp className="w-12 h-12" />,
      color: "from-violet-500 to-purple-500"
    }
  ];

  const stats = [
    { value: 87, suffix: "%", label: "Effizienzsteigerung", icon: <TrendingUp className="w-6 h-6" /> },
    { value: 24, suffix: "/7", label: "Verfügbarkeit", icon: <Clock className="w-6 h-6" /> },
    { value: 350, suffix: "%", label: "Durchschnittlicher ROI", icon: <DollarSign className="w-6 h-6" /> },
    { value: 50, suffix: "+", label: "Zufriedene Kunden", icon: <Users className="w-6 h-6" /> }
  ];

  const caseStudies = [
    {
      company: "E-Commerce Unternehmen",
      challenge: "Manuelle Bestellverarbeitung",
      solution: "AI-gesteuerte Automatisierung",
      result: "92% Zeitersparnis, 3x schnellere Abwicklung",
      savings: "€180.000/Jahr"
    },
    {
      company: "B2B SaaS Firma",
      challenge: "Ineffiziente Lead-Qualifizierung",
      solution: "Predictive Lead Scoring AI",
      result: "65% höhere Conversion-Rate",
      savings: "€250.000/Jahr"
    },
    {
      company: "Produktions-Betrieb",
      challenge: "Ungeplante Wartungsausfälle",
      solution: "Predictive Maintenance System",
      result: "78% weniger Ausfallzeiten",
      savings: "€420.000/Jahr"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <ParticleField />

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glow-box {
          box-shadow: 0 0 40px rgba(59, 130, 246, 0.3);
        }
      `}</style>

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">AI Solutions</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#workflow" className="text-gray-300 hover:text-white transition-colors">Workflow</a>
            <a href="#roi" className="text-gray-300 hover:text-white transition-colors">ROI</a>
            <a href="#cases" className="text-gray-300 hover:text-white transition-colors">Cases</a>
            <Button
              onClick={() => window.location = `mailto:${CONTACT_EMAIL}`}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl"
            >
              Kontakt
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800">
            <div className="px-6 py-4 space-y-4">
              <a href="#services" className="block text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#workflow" className="block text-gray-300 hover:text-white transition-colors">Workflow</a>
              <a href="#roi" className="block text-gray-300 hover:text-white transition-colors">ROI</a>
              <a href="#cases" className="block text-gray-300 hover:text-white transition-colors">Cases</a>
              <Button
                onClick={() => window.location = `mailto:${CONTACT_EMAIL}`}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl"
              >
                Kontakt
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `radial-gradient(circle at 50% ${50 + scrollY * 0.1}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
          }}
        />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm">
            🚀 Ihr Partner für die KI-Transformation
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent animate-fadeInUp">
              Revolutionieren Sie
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Ihr Business mit KI
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            Wir bringen Unternehmen die KI-Revolution näher – durch intelligente Automatisierung,
            maßgeschneiderte Integrationen und messbare Ergebnisse.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <Button
              size="lg"
              onClick={() => window.location = `mailto:${CONTACT_EMAIL}`}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-10 py-7 rounded-2xl shadow-2xl shadow-blue-500/30 group"
            >
              <Mail className="mr-2 w-5 h-5" />
              Kostenlose Beratung
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-700 hover:border-blue-500 text-lg px-10 py-7 rounded-2xl backdrop-blur-sm"
              onClick={() => document.getElementById('roi').scrollIntoView({ behavior: 'smooth' })}
            >
              ROI berechnen
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 border-gray-800 rounded-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-3 text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Unsere Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ganzheitliche KI-Lösungen für jede Phase Ihrer digitalen Transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard3D key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section id="workflow" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Unser Workflow
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Von der Analyse bis zur Skalierung - Ihr Weg zur erfolgreichen KI-Integration
            </p>
          </div>

          <div className="flex justify-center gap-3 flex-wrap mb-12">
            {workflowSteps.map((step, index) => (
              <Button
                key={index}
                variant={activeWorkflowStep === index ? "default" : "outline"}
                onClick={() => setActiveWorkflowStep(index)}
                className={`rounded-xl transition-all duration-300 ${activeWorkflowStep === index
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 scale-105'
                    : 'border-gray-700 hover:border-blue-500'
                  }`}
              >
                {step.title}
              </Button>
            ))}
          </div>

          <div className="relative">
            {workflowSteps.map((step, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${activeWorkflowStep === index
                    ? 'opacity-100 relative'
                    : 'opacity-0 absolute inset-0 pointer-events-none'
                  }`}
              >
                <Card className="bg-gradient-to-br from-gray-900/90 to-gray-950/90 border-gray-800 rounded-3xl overflow-hidden backdrop-blur-sm glow-box">
                  <CardContent className="p-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                        <div className="text-white">
                          {step.icon}
                        </div>
                      </div>

                      <div className="flex-1 text-center md:text-left">
                        <div className="text-sm text-gray-400 mb-2">{step.subtitle}</div>
                        <h3 className="text-4xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          {step.title}
                        </h3>
                        <p className="text-lg text-gray-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-8 pt-8 border-t border-gray-800">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Fortschritt</span>
                        <span className="text-sm text-blue-400 font-bold">
                          Phase {index + 1} von {workflowSteps.length}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${step.color} rounded-full transition-all duration-500`}
                          style={{ width: `${((index + 1) / workflowSteps.length) * 100}%` }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR SECTION */}
      <section id="roi" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Berechnen Sie Ihren ROI
            </h2>
            <p className="text-xl text-gray-400">
              Sehen Sie sofort, wie viel Sie durch KI-Automatisierung sparen können
            </p>
          </div>

          <ROICalculator />

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-4">
              *Berechnungen basieren auf durchschnittlichen Werten unserer Kunden
            </p>
            <Button
              onClick={() => window.location = `mailto:${CONTACT_EMAIL}`}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-xl"
            >
              Individuelle Analyse anfordern
            </Button>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="cases" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Wie Unternehmen mit unseren KI-Lösungen messbare Erfolge erzielen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/90 to-gray-950/90 border-gray-800 rounded-3xl overflow-hidden backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="inline-block px-4 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm mb-4">
                      Case Study
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Challenge</div>
                      <div className="text-gray-300">{study.challenge}</div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-400 mb-1">Solution</div>
                      <div className="text-gray-300">{study.solution}</div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-400 mb-1">Result</div>
                      <div className="text-green-400 font-semibold">{study.result}</div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-800">
                    <div className="text-3xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      {study.savings}
                    </div>
                    <div className="text-sm text-gray-400">Jährliche Ersparnis</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <Card className="relative overflow-hidden rounded-3xl border-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
            <div className="absolute inset-0 bg-black/40" />

            <CardContent className="relative z-10 p-16 text-center">
              <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-6 animate-pulse" />

              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Bereit für die KI-Revolution?
              </h2>

              <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10">
                Starten Sie jetzt Ihre digitale Transformation und profitieren Sie von
                maßgeschneiderten KI-Lösungen, die echte Ergebnisse liefern.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => window.location = `mailto:${CONTACT_EMAIL}`}
                  className="bg-white text-black hover:bg-gray-100 text-lg px-10 py-7 rounded-2xl font-bold group"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Jetzt Kontakt aufnehmen
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-black text-lg px-10 py-7 rounded-2xl font-bold"
                  onClick={() => document.getElementById('roi').scrollIntoView({ behavior: 'smooth' })}
                >
                  ROI Calculator
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <div className="mt-10 flex items-center justify-center gap-8 text-sm text-gray-200">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>100% DSGVO-konform</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Kostenlose Erstberatung</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">AI Solutions</span>
          </div>

          <p className="text-gray-400 mb-6">
            Ihr Partner für intelligente Automatisierung und KI-Integration
          </p>

          <div className="text-sm text-gray-500">
            © 2026 AI Solutions. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
}
