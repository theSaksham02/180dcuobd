"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight, Building2, Briefcase } from "lucide-react";

const testimonials = [
    {
        quote: "180DC provided us with a level of strategic clarity we typically expect from top-tier firms. Their market entry analysis was instrumental in our Dubai expansion.",
        author: "Sarah Al-Amiri",
        role: "CEO, GreenFuture NGO",
    },
    {
        quote: "The rigorous training 180DC consultants undergo is evident. They didn't just analyse the data; they provided actionable implementation roadmaps.",
        author: "James Sterling",
        role: "Director, Social Impact Fund",
    },
    {
        quote: "Joining 180DC was the turning point in my career. The mentorship and real-world project experience verified my passion for strategy consulting.",
        author: "Ahmed Khan",
        role: "Alumni, Now at McK",
    }
];

// Placeholder logos - in prod use SVGs
const partners = [
    "United Nations UNDP", "Dubai Cares", "Red Crescent", "Local NGOs", "Social Enterprises"
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(next, 8000); // Slower for reading
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-32 bg-[#0B0F19] relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10">

                <div className="mb-20 text-center">
                    <h2 className="text-sm font-bold text-[#73B744] uppercase tracking-widest mb-4">Partner Perspectives</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-medium text-white">Trusted by Changemakers</h3>
                </div>

                {/* Logos Strip */}
                <div className="flex justify-center gap-8 md:gap-16 mb-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-500 flex-wrap">
                    {partners.map((p, i) => (
                        <div key={i} className="flex items-center gap-2 font-display font-medium text-xl text-white">
                            <Building2 className="w-6 h-6" /> {p}
                        </div>
                    ))}
                </div>

                <div className="relative min-h-[300px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-center max-w-4xl"
                        >
                            <Quote className="w-10 h-10 text-[#73B744] mx-auto mb-8 opacity-80" />

                            <p className="text-2xl md:text-3xl font-serif leading-relaxed text-white mb-10 italic">
                                "{testimonials[current].quote}"
                            </p>

                            <div>
                                <h4 className="text-lg font-bold text-white uppercase tracking-wider">{testimonials[current].author}</h4>
                                <p className="text-gray-500 text-sm mt-2">{testimonials[current].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Subtle Controls */}
                    <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 p-4 text-gray-600 hover:text-[#73B744] transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-gray-600 hover:text-[#73B744] transition-colors">
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? 'w-8 bg-[#73B744]' : 'w-2 bg-gray-800 hover:bg-gray-600'}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
