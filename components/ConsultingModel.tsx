"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ConsultingModel() {
    return (
        <section className="py-24 bg-[#05080F] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-start">

                    <div className="md:w-1/3">
                        <h2 className="text-sm font-bold text-[#73B744] uppercase tracking-widest mb-4">Our Methodology</h2>
                        <h3 className="text-4xl font-bold font-display text-white mb-6">
                            A 12-Week Strategic Cycle
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            We operate on a semester-based engagement model, mirroring top-tier consulting firms to deliver executive-level results.
                        </p>
                        <a href="/our-model" className="inline-flex items-center gap-2 text-white font-bold hover:text-[#73B744] transition-colors">
                            View Detailed Process <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "Diagnostic", desc: "Deep stakeholder interviews, market mapping, and problem definition." },
                            { title: "Strategic Analysis", desc: "Financial modelling, benchmarking, and hypothesis testing." },
                            { title: "Solution Design", desc: "Framework development and scenario planning for viable outcomes." },
                            { title: "Executive Delivery", desc: "Board-level final presentation and implementation roadmap." },
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="border-l-2 border-white/10 pl-6 py-2 hover:border-[#73B744] transition-colors"
                            >
                                <span className="text-xs font-bold text-gray-500 mb-2 block">PHASE 0{i + 1}</span>
                                <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                                <p className="text-gray-400 text-sm">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
