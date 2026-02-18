"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

// Keep the 3D element but make it very subtle foundation
const GlobeHero = dynamic(() => import("@/components/3d/GlobeHero"), { ssr: false });

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">

            {/* Subtle Background */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen">
                <GlobeHero />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    {/* Authority Strip */}
                    <div className="inline-flex items-center gap-3 mb-8 border-l-2 border-[#73B744] pl-4">
                        <span className="text-gray-400 text-sm font-medium tracking-widest uppercase">
                            University of Birmingham Dubai
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-white leading-[1.05] tracking-tight mb-8">
                        Strategy Consulting <br />
                        <span className="text-gray-500 italic font-serif">for Social Impact.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-light mb-10">
                        Delivering professional-grade advisory solutions to mission-driven organisations while developing the next generation of strategic leaders.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start gap-6">
                        <Link
                            href="/hire-us"
                            className="px-8 py-4 bg-[#F5F7FA] text-[#0B0F19] rounded-sm font-bold text-lg hover:bg-white transition-all flex items-center gap-2"
                        >
                            Partner With Us <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/join"
                            className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-sm font-bold text-lg hover:bg-white/5 hover:border-white/40 transition-all"
                        >
                            Join the Team
                        </Link>
                    </div>

                    {/* Minimal Stats */}
                    <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 mt-20 max-w-3xl">
                        {[
                            { label: "Consultants", value: "10k+" },
                            { label: "Global Network", value: "35 Countries" },
                            { label: "Strategy", value: "High Impact" },
                            { label: "Projects", value: "5k+ Delivered" }
                        ].map((stat, i) => (
                            <div key={i} className="text-left">
                                <div className="text-2xl md:text-3xl font-display font-medium text-white">{stat.value}</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest mt-2">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
