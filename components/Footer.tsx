import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020408] border-t border-white/5 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
                <span className="text-2xl font-black tracking-tighter text-white">AURA.</span>
                <p className="mt-4 text-gray-500">
                    Next-Gen AI Agency. <br />Berlin, Germany.
                </p>
            </div>
            
            <div>
                <h4 className="font-bold text-white mb-4">Unternehmen</h4>
                <ul className="space-y-2 text-gray-500">
                    <li><a href="#" className="hover:text-indigo-400 transition">Über uns</a></li>
                    <li><a href="#" className="hover:text-indigo-400 transition">Karriere</a></li>
                    <li><a href="#" className="hover:text-indigo-400 transition">Partner</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-white mb-4">Rechtliches</h4>
                <ul className="space-y-2 text-gray-500">
                    <li><a href="#" className="hover:text-indigo-400 transition">Impressum</a></li>
                    <li><a href="#" className="hover:text-indigo-400 transition">Datenschutz</a></li>
                    <li><a href="#" className="hover:text-indigo-400 transition">AGB</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-white mb-4">Social</h4>
                <ul className="space-y-2 text-gray-500">
                    <li><a href="#" className="hover:text-indigo-400 transition">LinkedIn</a></li>
                    <li><a href="#" className="hover:text-indigo-400 transition">Twitter / X</a></li>
                    <li><a href="#" className="hover:text-indigo-400 transition">GitHub</a></li>
                </ul>
            </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">&copy; {new Date().getFullYear()} AURA AI Services. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-500 font-medium tracking-wide uppercase">Systems Operational</span>
            </div>
        </div>
      </div>
    </footer>
  );
};