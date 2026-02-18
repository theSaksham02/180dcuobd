"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        quote: "180DC provided a level of strategic clarity we typically expect from established advisory firms. Their market analysis was instrumental in our regional expansion.",
        author: "Sarah Al-Amiri",
        role: "CEO, GreenFuture Foundation",
    },
    {
        quote: "The analytical rigour and professionalism exceeded our expectations. They delivered an actionable implementation roadmap — not just a slide deck.",
        author: "James Sterling",
        role: "Director, Social Impact Fund",
    },
    {
        quote: "What sets 180DC apart is their structured engagement model. Every phase had clear deliverables and measurable outcomes.",
        author: "Dr. Amira Hassan",
        role: "Programme Director, Dubai Cares",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-28 bg-[#0B0F19] border-t border-white/5">
            <div className="container mx-auto px-6 lg:px-12 max-w-4xl">

                <p className="text-[11px] text-gray-600 uppercase tracking-[0.2em] font-medium mb-16">
                    Partner Perspectives
                </p>

                <div className="relative min-h-[240px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <blockquote className="text-2xl md:text-3xl font-serif text-white leading-relaxed italic mb-10">
                                "{testimonials[current].quote}"
                            </blockquote>
                            <div>
                                <p className="text-white font-semibold">{testimonials[current].author}</p>
                                <p className="text-gray-600 text-sm mt-1">{testimonials[current].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Indicators */}
                <div className="flex gap-3 mt-12">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-px transition-all duration-500 ${i === current ? 'w-8 bg-white/60' : 'w-4 bg-white/10'}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
