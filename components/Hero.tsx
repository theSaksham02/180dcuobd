"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, PlayCircle } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

            {/* Background Organic Blobs (Dark Mode) */}
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[120px] animate-blob" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full max-w-7xl">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-green-400 text-xs font-bold tracking-wide uppercase">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        University of Birmingham Dubai
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white leading-[1.1] tracking-tight">
                        The World's Largest <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#73B744] to-[#a3e635]">
                            University-Based
                        </span> <br />
                        Consultancy.
                    </h1>

                    <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-light">
                        We provide socially conscious organizations with very high quality, extremely affordable consulting services.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                        <Link
                            href="/hire-us"
                            className="px-8 py-4 bg-[#73B744] text-white rounded-full font-bold text-lg shadow-lg shadow-green-500/20 hover:bg-[#63a03a] hover:scale-105 transition-all flex items-center gap-2"
                        >
                            Work With Us <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/join"
                            className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2"
                        >
                            <PlayCircle className="w-5 h-5 text-gray-400" />
                            Student Application
                        </Link>
                    </div>
                </motion.div>

                {/* Right Content - Glass Stack */}
                <div className="relative h-[600px] w-full hidden lg:flex items-center justify-center">
                    <div className="relative w-full max-w-md aspect-square">
                        {/* Decorative Circle Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent shadow-2xl overflow-hidden border border-white/10"
                        >
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop')] bg-cover bg-center opacity-60 hover:scale-105 transition-transform duration-[2s]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
                        </motion.div>

                        {/* Floating Glass Card 1 */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-10 -left-10 bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl max-w-[200px]"
                        >
                            <div className="text-3xl font-bold text-white mb-1">15+ Years</div>
                            <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Of Global Impact</div>
                        </motion.div>

                        {/* Floating Glass Card 2 */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-10 -right-10 bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                    <ArrowRight className="-rotate-45 w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white">High Impact</div>
                                    <div className="text-xs text-gray-400">Projects Delivered</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <ChevronDown className="w-6 h-6 text-gray-500 animate-bounce" />
            </motion.div>
        </section>
    );
}
