"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-28 bg-[#080B14] border-t border-white/5">
            <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-[11px] text-gray-600 uppercase tracking-[0.2em] font-medium mb-6">
                            Why 180DC UoBD
                        </p>
                        <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-8">
                            Professional consulting infrastructure, built inside a university.
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            180 Degrees Consulting is the world's largest university-based consulting
                            organisation, operating across 35+ countries. UoBD is the University of Birmingham
                            Dubai branch — bringing structured advisory to mission-driven organisations
                            across the UAE and wider GCC.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            We don't deliver slide decks. We deliver implementation roadmaps, financial
                            models, and strategic frameworks that organisations can act on.
                        </p>
                    </motion.div>

                    {/* Right — Differentiators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="space-y-6 lg:pt-12"
                    >
                        {[
                            {
                                title: "Structured Engagement",
                                desc: "Every project follows a 12–14 week engagement model with defined phases, milestones, and deliverables.",
                            },
                            {
                                title: "Global Network Access",
                                desc: "Part of a 150+ branch network, giving clients access to cross-border insights and methodology.",
                            },
                            {
                                title: "Outcome-Driven",
                                desc: "We measure success in client outcomes delivered — not hours logged or presentations given.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="border-l border-white/10 pl-6">
                                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
