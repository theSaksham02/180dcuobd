"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "Market Entry & Expansion",
        desc: "Comprehensive ecosystem mapping and regulatory framework analysis for non-profits entering the MENA region.",
    },
    {
        title: "Financial Sustainability",
        desc: "Long-term revenue diversification strategies, cost structure optimization, and funding model development.",
    },
    {
        title: "Operational Efficiency",
        desc: "Process re-engineering, volunteer management systems, and resource allocation audits to maximize impact.",
    },
    {
        title: "Impact Measurement (SROI)",
        desc: "Rigorous quantification of social value creation using global standard frameworks and custom dashboards.",
    },
    {
        title: "Digital Transformation",
        desc: "Data systems architecture, CRM implementation, and technology roadmaps for scalable growth.",
    },
    {
        title: "Organizational Strategy",
        desc: "Governance structure design, talent capability building, and change management for sustainable teams.",
    },
];

export default function WhatWeDo() {
    return (
        <section className="py-32 bg-[#0B0F19] relative border-t border-white/5">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="grid lg:grid-cols-12 gap-16">

                    {/* Header */}
                    <div className="lg:col-span-4">
                        <h2 className="text-sm font-bold text-[#73B744] uppercase tracking-widest mb-6">Our Capabilities</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-medium text-white mb-8 leading-tight">
                            Strategic Advisory <br /> for the Social Sector.
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            We move beyond standard consulting packages to deliver tailored, evidence-based solutions for complex challenges.
                        </p>
                        <a href="/our-work" className="inline-flex items-center gap-2 text-white font-bold hover:text-[#73B744] transition-colors border-b border-white/20 pb-1 hover:border-[#73B744]">
                            View Case Studies <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* List / Grid Refactor - Analytical Interaction */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        {services.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group border border-white/5 bg-[#111827] p-8 rounded-sm hover:-translate-y-1 hover:shadow-xl hover:border-[#73B744]/30 transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                                    <h4 className="text-2xl font-display font-medium text-white min-w-[280px] group-hover:text-[#73B744] transition-colors">
                                        {s.title}
                                    </h4>
                                    <p className="text-gray-400 font-light text-base leading-relaxed max-w-lg group-hover:text-gray-200 transition-colors">
                                        {s.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
