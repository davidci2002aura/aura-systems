import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

interface NavbarProps {
  onToggleBlueprint: () => void;
  blueprintActive: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleBlueprint, blueprintActive }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Technologie', href: '#technologie' },
    { name: 'Vorteile', href: '#vorteile' },
    { name: 'Prozess', href: '#prozess' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass px-8 py-4 rounded-3xl flex items-center justify-between transition-all duration-500 ${isScrolled ? 'border-[#0077ff]/30 bg-black/40 shadow-[0_0_30px_rgba(0,119,255,0.1)]' : 'border-white/5'}`}>
          <div className="flex items-center space-x-3 group cursor-none">
            <div className="w-10 h-10 bg-[#0077ff] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,119,255,0.4)] group-hover:scale-110 transition-transform">
              <span className="font-black text-white italic text-xl">A</span>
            </div>
            <span className="text-xl font-black italic tracking-tighter uppercase hidden sm:block">AURA SYSTEMS</span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="text-zinc-500 hover:text-[#0077ff] font-black text-[10px] tracking-[0.3em] uppercase italic transition-colors cursor-none"
              >
                {item.name}
              </a>
            ))}

            <button
              onClick={onToggleBlueprint}
              className={`p-2 rounded-xl border transition-all duration-300 flex items-center gap-2 px-4 cursor-none ${blueprintActive ? 'border-[#0077ff] text-[#0077ff] bg-[#0077ff]/10 shadow-[0_0_20px_rgba(0,119,255,0.2)]' : 'border-white/10 text-zinc-500 hover:border-[#0077ff]/50'}`}
            >
              <Terminal size={14} />
              <span className="text-[10px] font-black tracking-widest uppercase italic">Blueprint</span>
            </button>
          </div>

          <button className="md:hidden text-zinc-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/80 backdrop-blur-md border-b border-white/5 py-4">
          <div className="px-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-zinc-300 hover:text-[#0077ff] font-bold text-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => { onToggleBlueprint(); setMobileMenuOpen(false); }}
              className={`w-full text-left p-3 rounded-lg border transition-all duration-300 flex items-center gap-3 ${blueprintActive ? 'border-[#0077ff] text-[#0077ff] bg-[#0077ff]/10 shadow-[0_0_20px_rgba(0,119,255,0.2)]' : 'border-white/10 text-zinc-300 hover:border-[#0077ff]/50'}`}
            >
              <Terminal size={18} />
              <span className="text-base font-bold">Blueprint Mode</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};