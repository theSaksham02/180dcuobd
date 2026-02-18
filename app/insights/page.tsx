"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Insights() {
    return (
        <main className="min-h-screen bg-[#0B0F19]">
            <Navbar />

            <section className="pt-32 pb-12 px-6">
                <div className="container mx-auto max-w-7xl">
                    <h1 className="text-5xl font-bold font-display text-white mb-6">Insights & Research</h1>
                    <p className="text-xl text-gray-400 max-w-2xl">
                        Thought leadership and analysis on the evolving landscape of social impact in the GCC.
                    </p>
                </div>
            </section>

            <section className="py-12 px-6">
                <div className="container mx-auto max-w-7xl grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Measuring Social ROI in the GCC", date: "Oct 2025", tag: "Methodology" },
                        { title: "Strategic Growth for Early-Stage NGOs", date: "Sep 2025", tag: "Strategy" },
                        { title: "Impact Investing Trends in the UAE", date: "Aug 2025", tag: "Finance" }
                    ].map((post, i) => (
                        <div key={i} className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                            <div className="h-48 bg-white/5 relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent opacity-60" />
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-xs font-bold text-[#73B744] uppercase tracking-wider">{post.tag}</span>
                                    <span className="text-xs text-gray-500">{post.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#73B744] transition-colors leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6">
                                    An in-depth analysis of current frameworks and their applicability to local market conditions.
                                </p>
                                <span className="text-white font-bold text-sm underline decoration-white/30 hover:decoration-[#73B744]">Read Article</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
