"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Trajectory() {
    return (
        <section className="py-28 bg-[#0B0F19] border-t border-white/5">
            <div className="container mx-auto px-6 lg:px-12 max-w-6xl">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-[11px] text-gray-600 uppercase tracking-[0.2em] font-medium mb-6">
                        Institutional Trajectory
                    </p>
                    <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight max-w-2xl">
                        Building the GCC's leading student advisory platform.
                    </h2>
                </motion.div>

                {/* Roadmap */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            year: "2025",
                            label: "Foundation",
                            items: [
                                "3–5 client engagements",
                                "Core consulting team established",
                                "12-week delivery model validated",
                            ],
                        },
                        {
                            year: "2026",
                            label: "Scale",
                            items: [
                                "8–12 projects annually",
                                "Annual Impact Report launched",
                                "Cross-functional advisory teams",
                            ],
                        },
                        {
                            year: "2027–28",
                            label: "Institutional Capital",
                            items: [
                                "15–20 engagements per cycle",
                                "GCC regional expansion",
                                "Corporate partnership pipeline",
                            ],
                        },
                    ].map((phase, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="border border-white/5 p-8 hover:border-white/10 transition-colors"
                        >
                            <div className="text-sm text-gray-600 uppercase tracking-widest mb-1">{phase.label}</div>
                            <div className="text-3xl font-semibold text-white mb-6">{phase.year}</div>
                            <ul className="space-y-3">
                                {phase.items.map((item, j) => (
                                    <li key={j} className="text-gray-400 text-sm leading-relaxed flex items-start gap-3">
                                        <span className="w-1 h-1 rounded-full bg-white/20 mt-2 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Institutional Signals */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="border border-white/5 p-8">
                        <p className="text-[11px] text-gray-600 uppercase tracking-[0.2em] font-medium mb-3">
                            Coming 2026
                        </p>
                        <h3 className="text-xl font-semibold text-white mb-3">Annual Impact Report</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            A comprehensive audit of social value created, consulting hours delivered,
                            and organisational outcomes achieved across all engagements.
                        </p>
                    </div>
                    <div className="border border-white/5 p-8">
                        <p className="text-[11px] text-gray-600 uppercase tracking-[0.2em] font-medium mb-3">
                            Regional Alignment
                        </p>
                        <h3 className="text-xl font-semibold text-white mb-3">UAE Vision 2031</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Our advisory work is strategically aligned with the UAE's national development
                            priorities — empowering social enterprises that contribute to sustainable economic growth.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
