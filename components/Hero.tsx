"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe2, Building2, Users2 } from "lucide-react"; // Added icons for logos
import dynamic from "next/dynamic";
import CountUp from "@/components/ui/CountUp";

const GlobeHero = dynamic(() => import("@/components/3d/GlobeHero"), { ssr: false });

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-[#0B0F19]">

            {/* Subtle Background */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-screen">
                <GlobeHero />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl flex-grow flex flex-col justify-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl"
                >
                    {/* Authority Strip */}
                    <div className="inline-flex items-center gap-3 mb-8 border-l-2 border-[#73B744] pl-4">
                        <span className="text-gray-400 text-sm font-bold tracking-widest uppercase">
                            University of Birmingham Dubai
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-white leading-[1.05] tracking-tight mb-8">
                        Strategy Consulting <br />
                        <span className="text-gray-500 italic font-serif">for Social Impact in the UAE.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-light mb-10">
                        Delivering professional-grade advisory services to mission-driven organisations while developing the next generation of strategic leaders.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start gap-6">
                        <Link
                            href="/hire-us"
                            className="px-8 py-4 bg-[#F5F7FA] text-[#0B0F19] rounded-sm font-bold text-lg hover:bg-white transition-all flex items-center gap-2"
                        >
                            Work With Us <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/join"
                            className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-sm font-bold text-lg hover:bg-white/5 hover:border-white/40 transition-all"
                        >
                            Join the Team
                        </Link>
                    </div>

                    {/* Animated Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 mt-20 pt-8 max-w-4xl">
                        {[
                            { label: "Consultants", value: 10000, suffix: "+" },
                            { label: "Global Network", value: 35, suffix: " Countries" },
                            { label: "Branches", value: 150, suffix: "+" },
                            { label: "Social Value", value: 100, suffix: "M+ Impact" }
                        ].map((stat, i) => (
                            <div key={i} className="text-left">
                                <div className="text-3xl md:text-4xl font-display font-medium text-white tabular-nums">
                                    <CountUp end={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-xs text-[#73B744] font-bold uppercase tracking-widest mt-2">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Credibility Layer */}
            <div className="border-t border-white/5 bg-[#080B14]/50 backdrop-blur-sm py-8 relative z-10">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl flex flex-wrap items-center justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-3">
                        <Building2 className="w-8 h-8 text-white" />
                        <span className="text-white font-serif text-lg font-bold">University of Birmingham</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Globe2 className="w-8 h-8 text-white" />
                        <span className="text-white font-display text-lg font-bold">180 Degrees Global</span>
                    </div>
                    <div className="h-8 w-px bg-white/10 hidden md:block" />
                    <div className="text-sm text-gray-500 font-medium uppercase tracking-widest">
                        Supported By Industry Leaders
                    </div>
                </div>
            </div>
        </section>
    );
}
