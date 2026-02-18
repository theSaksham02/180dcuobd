"use client";

import { motion } from "framer-motion";
import { Flag, Trophy, Users2 } from "lucide-react";

export default function Vision() {
    return (
        <section id="vision" className="py-24 relative overflow-hidden bg-white">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-50/50 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-[#73B744] uppercase tracking-widest mb-3">Our Ambition</h2>
                    <h3 className="text-3xl md:text-4xl font-bold font-display text-gray-900 leading-tight">
                        Long-Term Vision
                    </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Regional Leader", desc: "Become the leading student consultancy branch in the GCC.", icon: Flag },
                        { title: "High Volume Impact", desc: "Deliver 15–20 high-impact projects annually.", icon: Users2 },
                        { title: "Career Launchpad", desc: "Build an alumni network feeding into MBB & Big 4 firms.", icon: Trophy },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all"
                        >
                            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
                                <item.icon className="w-8 h-8 text-[#73B744]" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                            <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 p-12 rounded-3xl bg-[#414042] text-center relative overflow-hidden">
                    {/* Decorative pattern/gradient */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to make an impact?</h4>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                            Whether you are a student looking to develop elite skills or an organization seeking strategic solutions.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="bg-[#73B744] text-white px-8 py-3 rounded-full font-bold hover:bg-[#63a03a] transition-colors shadow-lg shadow-green-900/20">
                                Join as a Student
                            </button>
                            <button className="bg-transparent border border-white/30 text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
                                Partner With Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
