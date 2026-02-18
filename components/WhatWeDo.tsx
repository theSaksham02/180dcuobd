"use client";

import { motion } from "framer-motion";

const capabilities = [
    {
        title: "Market Entry & Expansion",
        desc: "Ecosystem mapping and regulatory framework analysis for organisations entering the MENA region.",
    },
    {
        title: "Financial Sustainability",
        desc: "Revenue diversification, cost structure optimisation, and long-term funding model development.",
    },
    {
        title: "Operational Efficiency",
        desc: "Process re-engineering, resource allocation audits, and volunteer management systems.",
    },
    {
        title: "Impact Measurement",
        desc: "Quantification of social value using global standard frameworks and custom reporting dashboards.",
    },
    {
        title: "Digital Transformation",
        desc: "Data systems architecture, CRM implementation, and technology roadmaps for scalable growth.",
    },
    {
        title: "Organisational Strategy",
        desc: "Governance design, talent capability building, and change management for sustainable teams.",
    },
];

export default function WhatWeDo() {
    return (
        <section className="py-28 bg-[#0B0F19] border-t border-white/5">
            <div className="container mx-auto px-6 lg:px-12 max-w-6xl">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-[11px] text-gray-600 uppercase tracking-[0.2em] font-medium mb-6">
                        Advisory Capabilities
                    </p>
                    <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight max-w-xl">
                        Structured advisory for complex challenges.
                    </h2>
                </motion.div>

                <div className="space-y-0">
                    {capabilities.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06, duration: 0.5 }}
                            className="group grid md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-white/5 last:border-0 hover:bg-white/[0.01] transition-colors -mx-4 px-4"
                        >
                            <h3 className="md:col-span-4 text-white font-semibold text-lg group-hover:text-gray-200 transition-colors">
                                {s.title}
                            </h3>
                            <p className="md:col-span-8 text-gray-500 text-base leading-relaxed group-hover:text-gray-400 transition-colors">
                                {s.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
