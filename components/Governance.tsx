"use client";

import { motion } from "framer-motion";

export default function Governance() {
    return (
        <section className="py-28 bg-[#080B14] border-t border-white/5">
            <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-20">

                    {/* Left: Narrative */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-[11px] text-gray-600 uppercase tracking-[0.2em] font-medium mb-6">
                            Governance & Oversight
                        </p>
                        <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-8">
                            Structured advisory supervision at every level.
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Every engagement operates under a layered governance framework — from faculty
                            oversight to executive quality review. We measure success in outcomes delivered,
                            not hours logged.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            Each project concludes with a formal implementation roadmap and executive
                            presentation to client leadership.
                        </p>
                    </motion.div>

                    {/* Right: Structure */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="space-y-8"
                    >
                        {[
                            {
                                title: "Faculty Advisory Board",
                                desc: "Academic oversight ensuring analytical rigour and ethical standards across all engagements.",
                            },
                            {
                                title: "Executive Leadership",
                                desc: "Branch operations managed by a vertically integrated leadership structure with clear accountability.",
                            },
                            {
                                title: "Performance Evaluation Framework",
                                desc: "Consultants assessed on deliverable quality, client satisfaction, and professional development milestones.",
                            },
                            {
                                title: "Advisory Oversight",
                                desc: "Senior consultants provide structured mentorship and quality assurance at each project phase.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="border-l-2 border-white/10 pl-6 hover:border-white/30 transition-colors">
                                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
