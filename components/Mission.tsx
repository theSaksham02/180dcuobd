"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Mission() {
    return (
        <section id="mission" className="py-32 bg-[#080B14] relative border-b border-white/5">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-invert prose-lg"
                    >
                        <h2 className="text-sm font-bold text-[#73B744] uppercase tracking-widest mb-6">Our Mission</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-medium text-white leading-tight mb-8">
                            Bridging the gap between <span className="text-white/50">untapped potential</span> and <span className="text-[#73B744]">social impact</span>.
                        </h3>
                        <p className="text-gray-400 font-light leading-relaxed mb-6">
                            We believe that the future of social impact lies in the intersection of strategic rigour and passionate youth leadership.
                        </p>
                        <p className="text-gray-400 font-light leading-relaxed mb-8">
                            180 Degrees Consulting connects high-potential university students with non-profits and social enterprises. We empower organisations to scale their impact while training the next generation of ethical leaders.
                        </p>

                        <div className="flex gap-12 border-t border-white/10 pt-8">
                            <div>
                                <div className="text-3xl font-bold text-white mb-2">Quality</div>
                                <p className="text-sm text-gray-500">Tier-1 Consulting Standards</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-2">Passion</div>
                                <p className="text-sm text-gray-500">Mission-Driven Talent</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] w-full bg-[#111827] rounded-sm overflow-hidden border border-white/5 p-8 flex flex-col justify-end"
                    >
                        {/* Abstract Visual - Consulting Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent" />

                        <div className="relative z-10">
                            <h4 className="text-2xl font-display font-medium text-white mb-4">The World's Largest Consultancy for Non-Profits</h4>
                            <a href="/" className="inline-flex items-center gap-2 text-[#73B744] font-bold hover:text-white transition-colors">
                                Read Our Story <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
