"use client";

import { motion } from "framer-motion";
import { ArrowRight, LineChart, Globe, Zap, BarChart3, Binary, Users } from "lucide-react"; // Updated icons

const services = [
    {
        icon: Globe,
        title: "Market Entry",
        desc: "Expansion frameworks and ecosystem mapping for the UAE non-profit sector.",
    },
    {
        icon: LineChart,
        title: "Financial Modelling",
        desc: "Revenue diversification, cost optimisation, and long-term funding strategy.",
    },
    {
        icon: Zap,
        title: "Operational Optimisation",
        desc: "Process redesign, resource efficiency, and volunteer management systems.",
    },
    {
        icon: BarChart3,
        title: "Impact Measurement",
        desc: "SROI quantifying and performance dashboards for stakeholders.",
    },
    {
        icon: Binary,
        title: "Digital Transformation",
        desc: "Technology roadmaps for scalable growth and data-driven decision making.",
    },
    {
        icon: Users,
        title: "Human Capital",
        desc: "Organizational structure design and capability building for sustainable teams.",
    },
];

export default function WhatWeDo() {
    return (
        <section className="py-32 bg-[#0B0F19] relative">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold text-[#73B744] uppercase tracking-widest mb-6">Our Expertise</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-medium text-white leading-tight">
                            Data-driven <br /> strategic advisory.
                        </h3>
                    </div>
                    <a href="/our-work" className="inline-flex items-center gap-2 text-white font-bold hover:text-[#73B744] transition-colors border-b border-white/20 pb-1 hover:border-[#73B744]">
                        Explore Our Work <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group bg-[#111827] border border-white/5 p-8 rounded-sm hover:border-[#73B744]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#73B744]/5 hover:-translate-y-1 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <s.icon className="w-24 h-24 text-white" />
                            </div>

                            <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center mb-6 text-[#73B744] group-hover:bg-[#73B744] group-hover:text-white transition-colors relative z-10">
                                <s.icon className="w-6 h-6" />
                            </div>

                            <h4 className="text-xl font-display font-bold text-white mb-3 relative z-10">
                                {s.title}
                            </h4>
                            <p className="text-gray-400 font-light text-sm leading-relaxed relative z-10">
                                {s.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
