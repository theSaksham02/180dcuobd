"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function WhyUs() {
    return (
        <section className="py-24 bg-[#0B0F19] border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl text-center">

                <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-16">
                    Why 180DC UoBD?
                </h2>

                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        "Institutionally Structured",
                        "Performance-Tracked",
                        "Advisor-Supervised",
                        "Outcome-Oriented"
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#111827] border border-white/5 p-8 rounded-2xl flex flex-col items-center gap-4 hover:border-[#73B744] transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full bg-[#73B744]/10 flex items-center justify-center">
                                <CheckCircle2 className="w-6 h-6 text-[#73B744]" />
                            </div>
                            <h4 className="text-lg font-bold text-white">{item}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
