"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const GlobeHero = dynamic(() => import("@/components/3d/GlobeHero"), { ssr: false });

export default function Hero() {
    const { scrollY } = useScroll();
    const backgroundY = useTransform(scrollY, [0, 600], [0, 120]);

    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0B0F19]">
            {/* Globe — barely visible, always present */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"
            >
                <GlobeHero />
            </motion.div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold text-white leading-[1.08] tracking-tight max-w-4xl">
                        Strategy Consulting<br />
                        for Social Impact
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    className="text-xl text-gray-400 max-w-xl leading-relaxed mt-8"
                >
                    We deliver professional-grade advisory services to mission-driven
                    organisations across the UAE and wider GCC.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                    className="flex items-center gap-6 mt-12"
                >
                    <Link
                        href="/hire-us"
                        className="px-8 py-4 bg-white text-[#0B0F19] font-semibold text-base hover:bg-gray-100 transition-colors flex items-center gap-2"
                    >
                        Partner With Us <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        href="/join"
                        className="px-8 py-4 border border-white/15 text-white font-semibold text-base hover:border-white/40 transition-colors"
                    >
                        Apply as Consultant
                    </Link>
                </motion.div>
            </div>

            {/* Institutional anchor — bottom of hero */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="absolute bottom-12 left-0 right-0 z-10"
            >
                <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
                    <p className="text-[11px] text-gray-600 uppercase tracking-[0.2em] font-medium">
                        University of Birmingham Dubai &nbsp;·&nbsp; 180 Degrees Consulting Global Network
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
