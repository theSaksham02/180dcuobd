"use client";

import { motion } from "framer-motion";

export default function Roadmap() {
    return (
        <section className="py-24 bg-[#080B14] border-t border-white/5">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-sm font-bold text-[#73B744] uppercase tracking-widest mb-4">Strategic Vision</h2>
                        <h3 className="text-3xl md:text-4xl font-display font-medium text-white">
                            2025–2028 Roadmap
                        </h3>
                    </div>
                    <div className="text-right hidden md:block">
                        <div className="text-xs text-gray-500 uppercase tracking-widest">Status</div>
                        <div className="text-white font-bold flex items-center gap-2 justify-end">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            On Track
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line */}
                    <div className="absolute top-8 left-0 right-0 h-px bg-white/10 hidden md:block" />

                    {[
                        { year: "2025", title: "Foundation", desc: "Establish UoBD governance, secure initial 5 NGO partnerships, operationalise training pipeline.", status: "current" },
                        { year: "2026", title: "Expansion", desc: "Launch 'GCC Social Impact Report', expand consultant intake to 50+, secure 2 corporate sponsors.", status: "future" },
                        { year: "2027", title: "Integration", desc: "Full integration with 180DC Global data systems, launch cross-border consulting engagements.", status: "future" },
                        { year: "2028", title: "Leadership", desc: "Recognised as the premier student-led advisory body for social enterprise in the Middle East.", status: "future" }
                    ].map((item, i) => (
                        <div key={i} className={`relative pt-8 ${item.status === 'current' ? 'opacity-100' : 'opacity-60'}`}>
                            <div className="absolute top-[30px] left-0 w-3 h-3 bg-[#0B0F19] border-2 border-[#73B744] rounded-full z-10" />

                            <div className="text-3xl font-display font-bold text-white mb-2">{item.year}</div>
                            <div className="text-[#73B744] text-xs font-bold uppercase tracking-widest mb-4">{item.title}</div>
                            <p className="text-sm text-gray-400 leading-relaxed border-l border-white/10 pl-4 md:border-0 md:pl-0">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
