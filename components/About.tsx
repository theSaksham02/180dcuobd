"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const stats = [
    { label: "Countries", value: "35+" },
    { label: "Branches", value: "150+" },
    { label: "Consultants", value: "10k+" },
    { label: "Projects", value: "5k+" },
];

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-[#050505]">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Visual / Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group text-center"
                            >
                                <h4 className="text-4xl font-bold text-[#73B744] mb-2 group-hover:scale-110 transition-transform">{stat.value}</h4>
                                <p className="text-gray-400 text-sm uppercase tracking-wider font-bold">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-sm font-bold text-[#73B744] uppercase tracking-widest mb-3">Who We Are</h2>
                        <h3 className="text-3xl md:text-4xl font-bold font-display text-white mb-6 leading-tight">
                            Bridging the gap between <span className="text-[#73B744]">high-impact strategy</span> and mission-driven organizations.
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            180 Degrees Consulting (180DC) is the world’s largest university-based consultancy for non-profits and social enterprises. We provide affordable, high-quality consulting services while developing the next generation of social impact leaders.
                        </p>

                        <div className="space-y-4">
                            {["Professional-Grade Strategy", "Student Leadership Development", "Global Impact Network"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                                        <CheckCircle2 className="w-4 h-4 text-[#73B744]" />
                                    </div>
                                    <span className="text-gray-300 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
