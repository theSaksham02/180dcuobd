"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

const metrics = [
    { value: 150, suffix: "+", label: "Global Branches" },
    { value: 35, suffix: "+", label: "Countries" },
    { value: 10000, suffix: "+", label: "Consultants Worldwide" },
    { value: 12, suffix: "–14", label: "Week Engagement Cycle" },
];

export default function Impact() {
    return (
        <section className="py-28 bg-[#0B0F19] border-t border-white/5">
            <div className="container mx-auto px-6 lg:px-12 max-w-6xl">

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-[11px] text-gray-600 uppercase tracking-[0.2em] font-medium mb-16"
                >
                    Global Network
                </motion.p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                    {metrics.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                        >
                            <div className="text-4xl md:text-5xl font-semibold text-white tabular-nums mb-3">
                                <CountUp end={m.value} suffix={m.suffix} duration={2.5} />
                            </div>
                            <p className="text-gray-500 text-sm">{m.label}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
