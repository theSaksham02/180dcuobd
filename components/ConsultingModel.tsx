"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pipeline = ["Diagnostic", "Analysis", "Solution Design", "Executive Delivery"];

export default function ConsultingModel() {
    return (
        <section className="py-28 bg-[#080B14] border-t border-white/5">
            <div className="container mx-auto px-6 lg:px-12 max-w-6xl">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-[11px] text-gray-600 uppercase tracking-[0.2em] font-medium mb-6">
                        Engagement Model
                    </p>
                    <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight max-w-xl">
                        12-week structured engagement cycle.
                    </h2>
                </motion.div>

                {/* Horizontal Timeline — Desktop */}
                <div className="hidden md:block relative mb-20">
                    {/* Connecting line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute top-6 left-0 right-0 h-px bg-white/10 origin-left"
                    />

                    <div className="grid grid-cols-4 relative">
                        {pipeline.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
                                className="flex flex-col items-start"
                            >
                                <div className="w-3 h-3 rounded-full border border-white/30 bg-[#080B14] mb-8 relative z-10" />
                                <p className="text-[11px] text-gray-600 uppercase tracking-widest mb-2">
                                    Phase {i + 1}
                                </p>
                                <h3 className="text-white font-semibold text-lg">{step}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile */}
                <div className="md:hidden space-y-6 mb-16 pl-6 border-l border-white/10">
                    {pipeline.map((step, i) => (
                        <div key={i} className="relative">
                            <div className="absolute -left-[29px] top-1 w-2 h-2 rounded-full border border-white/30 bg-[#080B14]" />
                            <p className="text-[11px] text-gray-600 uppercase tracking-widest mb-1">Phase {i + 1}</p>
                            <h3 className="text-white font-semibold">{step}</h3>
                        </div>
                    ))}
                </div>

                {/* Details */}
                <div className="grid md:grid-cols-2 gap-12 border border-white/5 p-8 md:p-12">
                    <div className="space-y-6">
                        {[
                            { title: "Diagnostic", desc: "Stakeholder interviews, market mapping, and hypothesis generation." },
                            { title: "Analysis", desc: "Financial modelling, benchmarking, and rigorous data analysis." },
                            { title: "Solution Design", desc: "Framework development and strategic recommendation options." },
                            { title: "Executive Delivery", desc: "Board presentation and implementation roadmap." },
                        ].map((phase, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-4"
                            >
                                <span className="text-gray-700 font-mono text-sm mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">{phase.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{phase.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex flex-col justify-center border-l border-white/5 pl-12">
                        <p className="text-gray-500 text-sm leading-relaxed mb-8">
                            We accept client applications on a semester basis. Each engagement
                            operates under structured advisory supervision with clear performance milestones.
                        </p>
                        <a href="/hire-us" className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-gray-300 transition-colors">
                            Submit a Project Brief <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
