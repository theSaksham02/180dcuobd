"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        quote: "The 180DC team are professionals at their jobs. At first, I thought that young university students would not be able to deliver such solutions. Their report reminds me of the work of 'The Big 3' consulting firms!",
        client: "UNICEF",
    },
    {
        quote: "The team was amazing, they went the extra mile to do additional analysis which we will apply to other regions outside the initial scope. They were highly motivated and professional and I'm keen to work with them again on the next phase of work.",
        client: "Make a Wish International",
    },
    {
        quote: "Thank you 180DC, for all that you have done, and are doing, to support SolarBuddy's mission. Our experience working with you has been phenomenal! To all the numerous amazing students I've personally worked with, you are leading the way! Keep going!",
        client: "SolarBuddy",
    },
    {
        quote: "I was so impressed with the detail, the approach, the regular communication, and most of all, that the team really listened. I am your biggest fan. Your support has been terrific through what was quite a challenging time for mySircles.",
        client: "mySircles",
    },
    {
        quote: "The 180DC project managers bring real professionalism to their communication, which made working with them really easy. The thing we love the most is that they are curious and engaged, they ask great questions which prompted us to think differently.",
        client: "Community Partner",
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) =>
            prev + 1 >= testimonials.length ? 0 : prev + 1
        );
    };

    const prev = () => {
        setCurrentIndex((prev) =>
            prev - 1 < 0 ? testimonials.length - 1 : prev - 1
        );
    };

    // Get visible cards depending on viewport (we always render 3, but show 1 on mobile via CSS)
    const getVisible = () => {
        const result = [];
        for (let i = 0; i < 3; i++) {
            result.push(testimonials[(currentIndex + i) % testimonials.length]);
        }
        return result;
    };

    return (
        <section className="py-16 sm:py-24 md:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-[1280px]">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a]">
                        What our clients say
                    </h2>
                    <div className="flex gap-2">
                        <button
                            onClick={prev}
                            className="p-2.5 border border-gray-300 hover:border-[#73B744] rounded-full transition-colors active:bg-gray-50"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        <button
                            onClick={next}
                            className="p-2.5 border border-gray-300 hover:border-[#73B744] rounded-full transition-colors active:bg-gray-50"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>
                </div>

                {/* Cards — 1 on mobile, 2 on md, 3 on lg */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {getVisible().map((t, i) => (
                        <div
                            key={`${currentIndex}-${i}`}
                            className={`bg-gradient-to-br from-[#73B744] to-[#5a9636] rounded-xl p-6 sm:p-8 text-white flex flex-col justify-between min-h-[280px] sm:min-h-[320px] ${i === 1 ? "hidden md:flex" : ""
                                } ${i === 2 ? "hidden lg:flex" : ""}`}
                        >
                            {/* Quote Mark */}
                            <div>
                                <svg
                                    className="w-8 h-8 sm:w-10 sm:h-10 text-white/40 mb-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
                                </svg>
                                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                                    {t.quote}
                                </p>
                            </div>
                            <p className="text-white font-semibold mt-6 text-xs sm:text-sm uppercase tracking-wide">
                                {t.client}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Dot indicators on mobile */}
                <div className="flex justify-center gap-2 mt-6 md:hidden">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? "bg-[#73B744]" : "bg-gray-300"
                                }`}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
