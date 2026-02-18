"use client";

import { motion } from "framer-motion";

export default function ConsultingModel() {
    return (
        <section className="py-32 bg-[#080B14]">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

                <div className="mb-20">
                    <h2 className="text-sm font-bold text-[#73B744] uppercase tracking-widest mb-4">Engagement Model</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
                        A 12-Week Strategic Cycle
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { title: "01. Diagnostic", desc: "Deep stakeholder interviews, market mapping, and problem definition." },
                        { title: "02. Analysis", desc: "Financial modelling, benchmarking, and hypothesis testing." },
                        { title: "03. Solution", desc: "Framework development and scenario planning for viable outcomes." },
                        { title: "04. Delivery", desc: "Board-level final presentation and implementation roadmap." },
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative group pt-8 border-t border-white/10 hover:border-[#73B744] transition-colors"
                        >
                            <h4 className="text-xl font-display font-medium text-white mb-4">{step.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
