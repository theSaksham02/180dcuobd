"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const focusAreas = [
    "Education", "Sustainability", "Healthcare", "Social Entrepreneurship", "Government Initiatives"
];

const projects = [
    {
        client: "Global NGO",
        sector: "Education",
        title: "Market Entry & Expansion Strategy",
        desc: "Developed a 5-year roadmap for entering the MENA region, identifying key partnerships and regulatory frameworks.",
    },
    {
        client: "Local Foundation",
        sector: "Sustainability",
        title: "Operational Efficiency Audit",
        desc: "Streamlined volunteer management processes, reducing administrative overhead by 40%.",
    },
    {
        client: "Social Enterprise",
        sector: "Healthcare",
        title: "Financial Sustainability Model",
        desc: "Built a diversified revenue model to reduce reliance on single-source donor funding.",
    }
];

export default function OurWork() {
    return (
        <main className="min-h-screen bg-[#0B0F19]">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-7xl">
                    <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-6">
                        Delivering Measurable <br />
                        <span className="text-[#73B744]">Strategic Outcomes</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                        We partner with high-impact organisations to solve their most critical challenges. Our engagements are structured, data-driven, and designed for implementation.
                    </p>
                </div>
            </section>

            <section className="py-12 border-y border-white/5 bg-[#05080F]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h3 className="text-sm font-bold text-[#73B744] uppercase tracking-widest mb-8">Role Focus Areas</h3>
                    <div className="flex flex-wrap gap-4">
                        {focusAreas.map((area, i) => (
                            <span key={i} className="px-6 py-3 rounded-full border border-white/10 text-gray-300 bg-white/5 font-medium">
                                {area}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6">
                <div className="container mx-auto max-w-7xl">
                    <h2 className="text-3xl font-bold text-white mb-12">Recent Engagements</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-8 rounded-2xl group hover:border-[#73B744] transition-colors"
                            >
                                <div className="text-xs font-bold text-[#73B744] uppercase tracking-wider mb-2">{p.sector}</div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:underline decoration-[#73B744]">{p.title}</h3>
                                <p className="text-gray-400 leading-relaxed mb-6">{p.desc}</p>
                                <div className="flex items-center gap-2 text-white font-bold text-sm">
                                    Read Case Study <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#05080F] border-t border-white/5 text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Scale Your Impact?</h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Applications for our next consulting cycle are now open for prospective clients.
                    </p>
                    <a href="/hire-us" className="inline-block bg-[#73B744] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-green-900/20 hover:bg-[#63a03a] transition-all">
                        Apply for a Project
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
