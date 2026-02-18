"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const GlobeHero = dynamic(() => import("@/components/3d/GlobeHero"), { ssr: false });

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

            {/* 3D Background */}
            <GlobeHero />

            {/* Gradient Mesh Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0F19]/50 to-[#0B0F19] z-0 pointer-events-none" />

            <div className="container mx-auto px-6 grid items-center relative z-10 w-full max-w-6xl text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 flex flex-col items-center"
                >
                    {/* Authority Strip */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#73B744] animate-pulse" />
                        Part of the Global 150+ Branch Network
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold font-display text-white leading-[1.1] tracking-tight max-w-4xl mx-auto">
                        Strategy Consulting for <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#73B744] to-[#10B981]">
                            Social Impact
                        </span> in the UAE
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
                        Delivering professional-grade advisory solutions to mission-driven organisations while developing the next generation of strategic leaders.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
                        <Link
                            href="/hire-us"
                            className="px-8 py-4 bg-[#73B744] text-white rounded-xl font-bold text-lg shadow-xl shadow-green-500/20 hover:bg-[#63a03a] hover:-translate-y-1 transition-all flex items-center gap-2"
                        >
                            Partner With Us <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/join"
                            className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all"
                        >
                            Join the Team
                        </Link>
                    </div>

                    {/* Stats Strip */}
                    <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 opacity-80 border-t border-white/5 w-full max-w-5xl mx-auto mt-12">
                        {[
                            { label: "Consultants", value: "10k+" },
                            { label: "Countries", value: "35+" },
                            { label: "Branches", value: "150+" },
                            { label: "Projects", value: "5k+" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
