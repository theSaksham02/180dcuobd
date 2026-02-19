"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, GraduationCap, Building2 } from "lucide-react";

export default function JoinPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <p className="text-[#73B744] font-semibold text-sm uppercase tracking-wider mb-4">
                        Get involved
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-5 leading-tight">
                        Join 180 Degrees<br /> Consulting UoBD
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                        Whether you&apos;re a student looking to make a real-world impact or an
                        organisation seeking high-quality consulting — there&apos;s a place for you.
                    </p>
                </div>
            </section>

            {/* Two Cards */}
            <section className="pb-24 sm:pb-32 px-4 sm:px-6">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">

                        {/* Student Card — White glassmorphism */}
                        <div className="relative group rounded-3xl overflow-hidden border border-gray-200/60 bg-white/60 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            {/* Subtle gradient bg */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-80" />

                            <div className="relative p-8 sm:p-10 flex flex-col h-full min-h-[380px] sm:min-h-[420px]">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-2xl bg-[#73B744]/10 flex items-center justify-center mb-6">
                                    <GraduationCap className="w-7 h-7 text-[#73B744]" />
                                </div>

                                <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-4">
                                    Join as a Student
                                </h2>
                                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 flex-1">
                                    Gain real consulting experience working with non-profits and social
                                    enterprises. Build your skills, expand your network, and create
                                    measurable impact while still at university.
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Work on live client projects",
                                        "Tier-1 consulting training",
                                        "Global network of 10,000+ members",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <div className="w-5 h-5 rounded-full bg-[#73B744]/15 flex items-center justify-center shrink-0 mt-0.5">
                                                <svg className="w-3 h-3 text-[#73B744]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#apply"
                                    className="inline-flex items-center justify-center gap-2 w-full bg-[#1a1a1a] text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#333] transition-colors"
                                >
                                    Apply as Student <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Partner Card — Green glassmorphism */}
                        <div className="relative group rounded-3xl overflow-hidden border border-[#73B744]/30 bg-[#73B744]/5 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            {/* Green gradient bg */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#73B744]/10 to-[#73B744]/5 opacity-80" />

                            <div className="relative p-8 sm:p-10 flex flex-col h-full min-h-[380px] sm:min-h-[420px]">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-2xl bg-[#73B744]/20 flex items-center justify-center mb-6">
                                    <Building2 className="w-7 h-7 text-[#73B744]" />
                                </div>

                                <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-4">
                                    Join as a Partner
                                </h2>
                                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 flex-1">
                                    Partner with us to access affordable, high-quality consulting
                                    from a team of motivated and trained students. We work with
                                    non-profits, social enterprises, and impact-driven organisations.
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Affordable consulting solutions",
                                        "Fresh perspectives and innovation",
                                        "Structured delivery with oversight",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <div className="w-5 h-5 rounded-full bg-[#73B744]/20 flex items-center justify-center shrink-0 mt-0.5">
                                                <svg className="w-3 h-3 text-[#73B744]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#apply"
                                    className="inline-flex items-center justify-center gap-2 w-full bg-[#73B744] text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#5a9636] transition-colors"
                                >
                                    Partner With Us <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application CTA */}
            <section id="apply" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#fafafa]">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-4">
                        Ready to Get Started?
                    </h3>
                    <p className="text-gray-500 mb-8 text-sm sm:text-base">
                        Applications for the upcoming cycle are currently closed. Join our
                        waitlist to be notified when they open.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:border-[#73B744] focus:ring-1 focus:ring-[#73B744] text-sm"
                        />
                        <button className="bg-[#73B744] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#5a9636] transition-colors whitespace-nowrap">
                            Notify Me
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
