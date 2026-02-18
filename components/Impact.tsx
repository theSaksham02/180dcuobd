"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

const metrics = [
    { label: "Students Trained", value: 250, suffix: "+" },
    { label: "Consulting Hours", value: 5000, suffix: "+" },
    { label: "Projects Delivered", value: 45, suffix: "+" },
    { label: "Social Value Created (AED)", value: 2, suffix: "M+" },
];

export default function Impact() {
    return (
        <section className="py-24 bg-[#0B0F19] border-t border-white/5 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#73B744]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-[#73B744] uppercase tracking-widest mb-4">Our Impact</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-medium text-white">
                        Measuring What Matters
                    </h3>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {metrics.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }} // TranslateY 24px -> 0
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }} // 30% Viewport Trigger
                            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }} // 150ms staggered delay
                            className="bg-[#111827] border border-white/5 p-8 rounded-sm text-center hover:border-[#73B744] transition-colors group"
                        >
                            <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tabular-nums group-hover:text-[#73B744] transition-colors">
                                <CountUp end={m.value} suffix={m.suffix} duration={2.5} />
                            </div>
                            <p className="text-gray-400 font-medium tracking-wide uppercase text-xs">{m.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
