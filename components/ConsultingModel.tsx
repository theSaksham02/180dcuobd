"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const pipeline = [
    { id: 1, title: "Recruit", desc: "Top-tier talent selection" },
    { id: 2, title: "Train", desc: "Consulting bootcamp" },
    { id: 3, title: "Deploy", desc: "Team assignment" },
    { id: 4, title: "Deliver", desc: "12-week analysis" },
    { id: 5, title: "Measure", desc: "Impact quantification" },
    { id: 6, title: "Report", desc: "Executive presentation" },
];

export default function ConsultingModel() {
    return (
        <section className="py-32 bg-[#080B14] relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-sm font-bold text-[#73B744] uppercase tracking-widest mb-4">Our Methodology</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
                        Institutional Grade Execution
                    </h3>
                    <p className="text-gray-400 text-lg">
                        We follow a rigorous 12-week engagement cycle mirroring top-tier strategy firms.
                    </p>
                </div>

                {/* Visual Pipeline */}
                <div className="relative mb-24 hidden md:block">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-6 relative z-10">
                        {pipeline.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-4 h-4 rounded-full bg-[#0B0F19] border-2 border-[#73B744] mb-6 relative z-20 group-hover:scale-125 transition-transform duration-300">
                                    <div className="absolute inset-0 bg-[#73B744] rounded-full opacity-0 group-hover:animate-ping" />
                                </div>
                                <h4 className="text-white font-bold font-display text-lg mb-2">{step.title}</h4>
                                <p className="text-gray-500 text-xs uppercase tracking-wider">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile Pipeline */}
                <div className="md:hidden space-y-8 mb-16 pl-4 border-l border-white/10">
                    {pipeline.map((step, i) => (
                        <div key={i} className="relative pl-8">
                            <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[#73B744]" />
                            <h4 className="text-white font-bold font-display text-lg">{step.title}</h4>
                            <p className="text-gray-500 text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Engagement Phases */}
                <div className="grid md:grid-cols-2 gap-12 bg-[#111827]/50 border border-white/5 p-8 md:p-12 rounded-sm">
                    <div>
                        <h4 className="text-2xl font-display font-bold text-white mb-6">The 12-Week Cycle</h4>
                        <div className="space-y-6">
                            {[
                                { title: "Phase 1: Diagnostic", desc: "Stakeholder interviews, market mapping, and hypothesis generation." },
                                { title: "Phase 2: Analysis", desc: "Financial modelling, benchmarking, and rigorous data analysis." },
                                { title: "Phase 3: Solution Design", desc: "Framework development and strategic recommendation options." },
                                { title: "Phase 4: Executive Delivery", desc: "Final board presentation and implementation roadmap." },
                            ].map((phase, i) => (
                                <div key={i} className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-[#73B744] flex-shrink-0 mt-1" />
                                    <div>
                                        <h5 className="text-white font-bold">{phase.title}</h5>
                                        <p className="text-gray-400 text-sm">{phase.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-[#0B0F19] p-8 border border-white/5 flex flex-col justify-center items-center text-center">
                        <h4 className="text-white font-bold mb-4">Ready to Launch a Project?</h4>
                        <p className="text-gray-400 text-sm mb-8">
                            We accept client applications for the upcoming semester cycle.
                        </p>
                        <a href="/hire-us" className="inline-flex items-center gap-2 bg-[#73B744] text-white px-6 py-3 rounded-sm font-bold hover:bg-[#63a03a] transition-all">
                            Apply as a Client <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
