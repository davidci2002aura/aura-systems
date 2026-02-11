import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Leistungen', href: '#leistungen' },
    { name: 'Prozess', href: '#prozess' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#030712]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter text-white text-glow">AURA.</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white hover:text-glow transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#kontakt"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Projekt starten
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#030712] border-b border-white/5 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition"
              >
                {link.name}
              </a>
            ))}
             <a
                href="#kontakt"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-md text-base font-medium transition"
              >
                Projekt starten
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};