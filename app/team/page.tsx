"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Team() {
    return (
        <main className="min-h-screen bg-[#0B0F19]">
            <Navbar />

            <section className="pt-32 pb-12 px-6">
                <div className="container mx-auto max-w-7xl">
                    <h1 className="text-5xl font-bold font-display text-white mb-6">Our Leadership</h1>
                    <p className="text-xl text-gray-400 max-w-2xl">
                        Meet the executive team driving 180 Degrees Consulting UoBD forward.
                    </p>
                </div>
            </section>

            <section className="py-12 px-6">
                <div className="container mx-auto max-w-7xl grid md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="glass-card p-6 rounded-2xl text-center group hover:bg-white/5 transition-colors">
                            <div className="w-32 h-32 rounded-full bg-white/10 mx-auto mb-6 overflow-hidden">
                                {/* Placeholder for Headshot */}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">Team Member</h3>
                            <p className="text-[#73B744] text-sm font-medium uppercase tracking-wide mb-4">Position Title</p>
                            <div className="flex justify-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                                <div className="w-8 h-8 rounded-full bg-white/5" />
                                <div className="w-8 h-8 rounded-full bg-white/5" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
