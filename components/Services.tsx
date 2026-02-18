"use client";

import { motion } from "framer-motion";
import { BrainCircuit, LineChart, Megaphone, Zap } from "lucide-react";

const services = [
    {
        icon: BrainCircuit,
        title: "Market Entry Strategy",
        desc: "Comprehensive analysis for expansion into new demographics.",
    },
    {
        icon: LineChart,
        title: "Financial Sustainability",
        desc: "Robust modeling to ensure long-term fiscal health.",
    },
    {
        icon: Zap,
        title: "Operational Optimization",
        desc: "Streamlining processes to maximize impact per dollar.",
    },
    {
        icon: Megaphone,
        title: "Impact Measurement",
        desc: "Frameworks to quantify and communicate social return.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-[#0a0a0a] relative">
            {/* Decorative Blob */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-[#73B744] uppercase tracking-widest mb-3">Our Expertise</h2>
                    <h3 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
                        Real Consulting Engagements
                    </h3>
                    <p className="text-gray-400 text-lg">
                        We run structured 12–14 week consulting cycles delivering professional-grade strategic solutions to social impact organizations in the UAE.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="bg-white/5 border border-white/5 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-white/10 transition-all group"
                        >
                            <div className="w-12 h-12 bg-white/5 text-[#73B744] rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                                <s.icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">{s.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
