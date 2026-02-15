import React, { useRef } from 'react';
import { Bot, Database, Terminal } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ServiceCard: React.FC<{ title: string; desc: string; icon: React.ElementType }> = ({ title, desc, icon: Icon }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-[450px] w-full rounded-[2.5rem] glass p-10 overflow-hidden cursor-none"
    >
      <div
        style={{ transform: "translateZ(75px)" }}
        className="relative z-10 flex flex-col h-full"
      >
        <div className="w-16 h-16 rounded-2xl bg-[#0077ff]/10 flex items-center justify-center mb-8 border border-[#0077ff]/20">
          <Icon className="w-8 h-8 text-[#0ea5e9]" />
        </div>
        <h3 className="mb-6">{title}</h3>
        <p className="text-zinc-500 font-light leading-relaxed mb-8 flex-grow">{desc}</p>
        <div className="pt-6 border-t border-white/5 flex items-center text-[10px] font-black tracking-[0.3em] text-[#0077ff] uppercase italic">
          System Details <span className="ml-2">→</span>
        </div>
      </div>

      {/* Decorative Blueprint Lines */}
      <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-[#0077ff]/10 rounded-tr-[2.5rem]" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-[#0077ff]/10 rounded-bl-[2.5rem]" />
    </motion.div>
  );
};

export const Services: React.FC = () => {
  const services = [
    {
      title: "Frontend Sovereignty",
      desc: "Wir bauen Interfaces, die nicht nur beeindrucken, sondern konvertieren. Pixelfreies Engineering trifft auf intuitive Psychologie.",
      icon: Terminal
    },
    {
      title: "Backend Autonomy",
      desc: "Hochperformante Architekturen, die Ihr Unternehmen tragen. Skalierbar, sicher und bereit für die Ära der Automatisierung.",
      icon: Database
    },
    {
      title: "AI Core Intelligence",
      desc: "Wir integrieren autonome Agenten direkt in Ihren Stack. Echte Intelligenz, die handelt, optimiert und lernt.",
      icon: Bot
    }
  ];

  return (
    <section id="leistungen" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-24">
        <span className="text-[#0077ff] font-black text-[10px] tracking-[0.5em] uppercase mb-4 block italic">
          Infrastructure Insight
        </span>
        <h2 className="mb-8 font-black italic">Die Drei Säulen der Evolution.</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <ServiceCard {...s} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};