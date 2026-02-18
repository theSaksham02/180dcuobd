"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
    {
        quote: "180DC provided us with a level of strategic clarity we typically expect from top-tier firms. Their market entry analysis was instrumental in our Dubai expansion.",
        author: "Sarah Al-Amiri",
        role: "CEO, GreenFuture NGO",
        image: "/avatars/sarah.jpg" // Placeholder
    },
    {
        quote: "The rigorous training 180DC consultants undergo is evident. They didn't just analyse the data; they provided actionable implementation roadmaps.",
        author: "James Sterling",
        role: "Director, Social Impact Fund",
        image: "/avatars/james.jpg"
    },
    {
        quote: "Joining 180DC was the turning point in my career. The mentorship and real-world project experience verified my passion for strategy consulting.",
        author: "Ahmed Khan",
        role: "Alumni, Now at McK",
        image: "/avatars/ahmed.jpg"
    }
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-32 bg-[#0B0F19] relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 max-w-5xl relative z-10">

                <div className="mb-16 text-center">
                    <h2 className="text-sm font-bold text-[#73B744] uppercase tracking-widest mb-4">What Partners Say</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-medium text-white">Trusted by Leaders</h3>
                </div>

                <div className="relative min-h-[400px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-center max-w-4xl"
                        >
                            <Quote className="w-12 h-12 text-[#73B744]/20 mx-auto mb-8" />

                            <p className="text-2xl md:text-4xl font-display leading-tight text-white mb-10 italic">
                                "{testimonials[current].quote}"
                            </p>

                            <div>
                                <h4 className="text-xl font-bold text-white">{testimonials[current].author}</h4>
                                <p className="text-[#73B744] text-sm uppercase tracking-widest mt-2">{testimonials[current].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <button onClick={prev} className="absolute left-0 p-4 hover:text-[#73B744] transition-colors text-white/20 hover:bg-white/5 rounded-full">
                        <ArrowLeft className="w-8 h-8" />
                    </button>
                    <button onClick={next} className="absolute right-0 p-4 hover:text-[#73B744] transition-colors text-white/20 hover:bg-white/5 rounded-full">
                        <ArrowRight className="w-8 h-8" />
                    </button>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-1 rounded-full transition-all duration-300 ${i === current ? 'w-12 bg-[#73B744]' : 'w-4 bg-white/10 hover:bg-white/30'}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
