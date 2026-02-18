"use client";

import { motion } from "framer-motion";
import { BrainCircuit, LineChart, Megaphone, Zap, Globe, Rocket, Users } from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Market Entry Strategy",
        desc: "Expansion and local ecosystem frameworks tailored for the UAE non-profit sector.",
    },
    {
        icon: LineChart,
        title: "Financial Sustainability",
        desc: "Revenue modelling, cost optimisation pathways, and long-term funding strategy.",
    },
    {
        icon: Zap,
        title: "Operational Optimisation",
        desc: "Process redesign, resource efficiency transformation, and volunteer management systems.",
    },
    {
        icon: Megaphone,
        title: "Impact Measurement",
        desc: "Quantifying social return on investment (SROI) and performance dashboards.",
    },
    {
        icon: BrainCircuit,
        title: "Digital Transformation",
        desc: "Technology roadmaps for scalable growth and data-driven decision making.",
    },
    {
        icon: Users,
        title: "Human Capital Strategy",
        desc: "Organizational structure design and capability building for sustainable teams.",
    },
];

export default function WhatWeDo() {
    return (
        <section className="py-24 bg-[#0B0F19] relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-20 max-w-3xl">
                    <h2 className="text-sm font-bold text-[#73B744] uppercase tracking-widest mb-4">What We Do</h2>
                    <h3 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
                        Data-driven strategic advisory.
                    </h3>
                    <p className="text-gray-400 text-xl leading-relaxed">
                        We deliver structured engagements for organisations operating at the intersection of impact and sustainability.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="group glass-card p-10 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="w-14 h-14 bg-white/5 text-[#73B744] rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#73B744] group-hover:text-white transition-colors">
                                <s.icon className="w-7 h-7" />
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-4">{s.title}</h4>
                            <p className="text-gray-400 leading-relaxed">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
