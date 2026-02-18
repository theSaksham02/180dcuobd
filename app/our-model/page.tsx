"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const timeline = [
    { phase: "Phase 1: Recruit", desc: "Rigorous selection of top-tier student consultants through case interviews." },
    { phase: "Phase 2: Train", desc: "Intensive bootcamp on consulting frameworks (MECE), financial modelling, and slide design." },
    { phase: "Phase 3: Deploy", desc: "Teams of 5 consultants assigned to a client, led by an experienced Project Manager." },
    { phase: "Phase 4: Deliver", desc: "12 weeks of structured analysis, research, and strategy development." },
    { phase: "Phase 5: Measure", desc: "Quantitative assessment of project outcomes and social return." },
    { phase: "Phase 6: Report", desc: "Final executive presentation to client leadership and stakeholders." },
];

export default function OurModel() {
    return (
        <main className="min-h-screen bg-[#0B0F19]">
            <Navbar />

            <section className="pt-32 pb-20 px-6 text-center">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-bold font-display text-white mb-6">
                        A Structured <span className="text-[#73B744]">Consulting Institution</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        We don't simulate consulting. We practice it. Our branch operates with the rigour, processes, and oversight of a professional professional services firm.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#73B744]/30 to-transparent hidden md:block" />

                <div className="container mx-auto max-w-5xl space-y-16 relative z-10">
                    {timeline.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className="md:w-1/2 text-center md:text-left">
                                <div className={`p-8 rounded-2xl border border-white/5 bg-[#111827] hover:border-[#73B744] transition-colors relative group ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                                    {/* Connector Dot */}
                                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0B0F19] border-2 border-[#73B744] ${i % 2 === 0 ? '-right-[50px]' : '-left-[50px]'}`} />

                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#73B744] transition-colors">{item.phase}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </div>
                            <div className="md:w-1/2" /> {/* Spacer */}
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
