"use client";

import { motion } from "framer-motion";

export default function SelectionCriteria() {
    return (
        <section className="py-24 bg-[#0B0F19] relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-[#73B744] uppercase tracking-widest mb-4">Talent Selection</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-medium text-white mb-6">
                        The Top 10% of Talent.
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                        We accept consultants based on a rigorous 3-stage process involving aptitude tests, case interviews, and behavioural assessments. We do not recruit members; we select future leaders.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Analytical Rigor",
                            desc: "Demonstrated ability to deconstruct complex problems and model quantitative solutions.",
                            stat: "85th Percentile"
                        },
                        {
                            title: "Structured Thinking",
                            desc: "Proficiency in hypothesis-led problem solving (Pyramid Principle) and communication.",
                            stat: "Framework Mastery"
                        },
                        {
                            title: "Commitment to Impact",
                            desc: "Verifiable history of social enterprise engagement or community leadership.",
                            stat: "Mission Driven"
                        }
                    ].map((c, i) => (
                        <div key={i} className="bg-[#111827] border border-white/5 p-8 relative group hover:border-[#73B744]/50 transition-colors duration-300">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="text-6xl font-display font-bold text-white">{i + 1}</span>
                            </div>

                            <div className="text-[#73B744] text-xs font-bold uppercase tracking-widest mb-4">{c.stat}</div>
                            <h4 className="text-xl font-bold text-white mb-4">{c.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
