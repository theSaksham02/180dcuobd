"use client";

import { useEffect, useRef, useState } from "react";

function CountUpNumber({ end, suffix = "" }: { end: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const duration = 2000;
                    const steps = 60;
                    const increment = end / steps;
                    let current = 0;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, duration / steps);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end]);

    return (
        <span ref={ref} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#73B744]">
            {count.toLocaleString()}{suffix}
        </span>
    );
}

const stats = [
    { label: "Countries", value: 40, suffix: "+" },
    { label: "Branches", value: 190, suffix: "+" },
    { label: "Consulting Projects", value: 7800, suffix: "" },
    { label: "Social Impact Leaders To Date", value: 60000, suffix: "+" },
];

export default function Impact() {
    return (
        <section className="py-16 sm:py-24 md:py-32 bg-white" id="impact">
            {/* Founder Quote */}
            <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center mb-12 sm:mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6 sm:mb-8 leading-tight">
                    More Than A Decade Of Social Impact
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                    &lsquo;Why are we called 180 Degrees?&rsquo; It&apos;s because we work to turn good organisations into great organisations, challenges into opportunities, ideas into reality. We&apos;re focused on positive transformation. Transforming organisations, and, in turn, transforming lives.&rdquo;
                </p>
                <p className="text-gray-500 text-sm mt-4 italic">
                    — Nat Ware (Founder of 180 Degrees Consulting)
                </p>
            </div>

            {/* Stats Row */}
            <div className="container mx-auto px-4 sm:px-6 max-w-[1280px]">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 text-center">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                                {stat.label === "Consulting Projects" ? "Successfully Completed" :
                                    stat.label === "Countries" ? "Operating In" :
                                        stat.label === "Branches" ? "Working From" : "Trained"}
                            </p>
                            <CountUpNumber end={stat.value} suffix={stat.suffix} />
                            <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
