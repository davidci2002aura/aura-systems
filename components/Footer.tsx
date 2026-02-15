import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#050505] border-t border-white/5 py-24 text-sm relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-black italic tracking-tighter text-white uppercase">AURA SYSTEMS.</span>
                        <p className="mt-6 text-zinc-500 font-light italic text-[10px] tracking-widest uppercase uppercase">
                            Architecting Sovereignty. <br />HQ: Berlin // DE
                        </p>
                    </div>

                    <div>
                        <h4 className="font-black text-[10px] tracking-widest uppercase italic text-zinc-300 mb-6">Discovery</h4>
                        <ul className="space-y-4 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                            <li><a href="#" className="hover:text-[#0077ff] transition-colors cursor-none">Origin Story</a></li>
                            <li><a href="#" className="hover:text-[#0077ff] transition-colors cursor-none">Philosophy</a></li>
                            <li><a href="#" className="hover:text-[#0077ff] transition-colors cursor-none">Manifesto</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-[10px] tracking-widest uppercase italic text-zinc-300 mb-6">Protocols</h4>
                        <ul className="space-y-4 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                            <li><a href="#" className="hover:text-[#0077ff] transition-colors cursor-none">Terms of Compute</a></li>
                            <li><a href="#" className="hover:text-[#0077ff] transition-colors cursor-none">Privacy Guard</a></li>
                            <li><a href="#" className="hover:text-[#0077ff] transition-colors cursor-none">Compliance</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-[10px] tracking-widest uppercase italic text-zinc-300 mb-6">Frequencies</h4>
                        <ul className="space-y-4 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                            <li><a href="#" className="hover:text-[#0077ff] transition-colors cursor-none">LinkedIn_CMD</a></li>
                            <li><a href="#" className="hover:text-[#0077ff] transition-colors cursor-none">X_SIGNAL</a></li>
                            <li><a href="#" className="hover:text-[#0077ff] transition-colors cursor-none">GITHUB_REPO</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-black tracking-widest uppercase italic text-zinc-600">
                    <p>&copy; {new Date().getFullYear()} AURA SYSTEMS. ALL RIGHTS TRANSMITTED.</p>
                    <div className="flex items-center space-x-6 mt-6 md:mt-0">
                        <div className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#0077ff] rounded-full mr-2 animate-pulse"></span>
                            <span className="text-[#0077ff]">SYSTEMS_STABLE</span>
                        </div>
                        <div>CORE_VER: 2.1.0</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};