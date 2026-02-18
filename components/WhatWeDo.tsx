"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "Market Entry strategy",
        desc: "Expansion and local ecosystem frameworks tailored for the UAE non-profit sector.",
    },
    {
        title: "Financial Sustainability",
        desc: "Revenue modelling, cost optimisation pathways, and long-term funding strategy.",
    },
    {
        title: "Operational Efficiency",
        desc: "Process redesign, resource efficiency transformation, and volunteer management systems.",
    },
    {
        title: "Impact Measurement",
        desc: "Quantifying social return on investment (SROI) and performance dashboards.",
    },
    {
        title: "Digital Transformation",
        desc: "Technology roadmaps for scalable growth and data-driven decision making.",
    },
    {
        title: "Human Capital",
        desc: "Organizational structure design and capability building for sustainable teams.",
    },
];

export default function WhatWeDo() {
    return (
        <section className="py-32 bg-[#0B0F19] relative border-t border-white/5">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="grid lg:grid-cols-12 gap-16">

                    {/* Header */}
                    <div className="lg:col-span-4">
                        <h2 className="text-sm font-bold text-[#73B744] uppercase tracking-widest mb-6">Our Expertise</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-medium text-white mb-8 leading-tight">
                            Data-driven <br /> strategic advisory.
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            We deliver structured engagements for organisations operating at the intersection of impact and sustainability.
                        </p>
                        <a href="/our-work" className="inline-flex items-center gap-2 text-white font-bold hover:text-[#73B744] transition-colors border-b border-white/20 pb-1 hover:border-[#73B744]">
                            Explore Our Work <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Grid */}
                    <div className="lg:col-span-8 grid md:grid-cols-2 gap-x-12 gap-y-16">
                        {services.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <h4 className="text-2xl font-display font-medium text-white mb-4 group-hover:text-[#73B744] transition-colors">
                                    {s.title}
                                </h4>
                                <p className="text-gray-400 leading-relaxed font-light text-base border-l border-white/10 pl-4 group-hover:border-[#73B744] transition-all">
                                    {s.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
