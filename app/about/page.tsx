"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

export default function About() {
    return (
        <main className="min-h-screen bg-[#0B0F19]">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-5xl text-center">
                    <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-8">
                        Building Strategic Leaders. <br />
                        <span className="text-[#73B744]">Driving Measurable Impact.</span>
                    </h1>
                </div>
            </section>

            <section className="py-20 px-6 bg-[#05080F]">
                <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-6">A High-Performance Institution</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            180 Degrees Consulting at UoBD operates as a high-performance consulting institution embedded within the University of Birmingham Dubai.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Our mission is to bridge the gap between professional advisory services and social impact organisations in the UAE. We operate with structured recruitment, formal training, and corporate advisory oversight.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {["Structured Recruitment", "Formal Training", "Performance Reviews", "Corporate Oversight"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-[#73B744]" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[500px] w-full bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
                        {/* Image Placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#73B744]/20 to-transparent" />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
