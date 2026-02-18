"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, Calendar, Target, Award, Users } from "lucide-react"; // Added Users

export default function JoinPage() {
    return (
        <main className="min-h-screen bg-[#0B0F19]">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 px-6 bg-[#080B14] border-b border-white/5">
                <div className="container mx-auto max-w-5xl text-center">
                    <h1 className="text-5xl md:text-6xl font-bold font-display text-white mb-6">
                        Join the Top Tier of <br /> <span className="text-[#73B744]">Future Strategy Leaders</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
                        180 Degrees Consulting is the world's most prestigious university-based strategy unit.
                        We select high-potential analysts and train them to deliver executive-level strategy.
                    </p>
                    <a href="#apply" className="inline-flex items-center gap-2 bg-[#F5F7FA] text-[#0B0F19] px-8 py-4 rounded-sm font-bold hover:bg-white transition-all">
                        Start Application <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>

            {/* Why Join */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <Target className="w-12 h-12 text-[#73B744] mb-2" />
                            <h3 className="text-2xl font-display font-bold text-white">Real Impact</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Work on live projects for non-profits and social enterprises. Your strategies will face real-world implementation, not just grading.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <Award className="w-12 h-12 text-[#73B744] mb-2" />
                            <h3 className="text-2xl font-display font-bold text-white">Tier-1 Training</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Undergo rigorous training in problem solving, financial modelling, and pyramid principle communication, led by alumni from top firms.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <Users className="w-12 h-12 text-[#73B744] mb-2" />
                            <h3 className="text-2xl font-display font-bold text-white">Global Network</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Connect with 10,000+ consultants across 35 countries. Gain exclusive access to recruitment events and mentorship.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recruitment Timeline (Funnel) */}
            <section className="py-24 bg-[#111827] border-y border-white/5">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-[#73B744] uppercase tracking-widest mb-4">Selection Process</h2>
                        <h3 className="text-4xl font-display font-bold text-white">The Recruitment Funnel</h3>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

                        {[
                            { step: "01", title: "Online Application", desc: "Submit CV and motivational answers.", date: "Sept 1 - 15" },
                            { step: "02", title: "Case Check", desc: "A written business case assessment to test logic.", date: "Sept 18 - 20" },
                            { step: "03", title: "Interview", desc: "Behavioural and case interview with leadership.", date: "Sept 25 - 28" },
                            { step: "04", title: "Offer", desc: "Final selection and onboarding bootcamp.", date: "Oct 1" }
                        ].map((item, i) => (
                            <div key={i} className={`relative flex flex-col md:flex-row gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="md:w-1/2 flex items-start gap-4 md:gap-0 md:block md:text-right pl-12 md:pl-0 md:pr-12">
                                    <div className={`
                                  absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-[#0B0F19] border-2 border-[#73B744] flex items-center justify-center text-[#73B744] font-bold text-xs z-10
                              `}>
                                        {item.step}
                                    </div>
                                    <div className={i % 2 !== 0 ? 'md:text-left md:pl-12' : ''}>
                                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                        <p className="text-gray-400 text-sm mb-2">{item.desc}</p>
                                        <div className="inline-flex items-center gap-2 text-[#73B744] text-xs font-bold uppercase tracking-wide bg-[#73B744]/10 px-3 py-1 rounded-full">
                                            <Calendar className="w-3 h-3" /> {item.date}
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form Placeholder (ID apply) */}
            <section id="apply" className="py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto glass-matte p-12 rounded-sm">
                    <h3 className="text-3xl font-display font-bold text-white mb-6">Ready to Apply?</h3>
                    <p className="text-gray-400 mb-8">
                        Applications for the upcoming cycle are currently closed. Join our waitlist to be notified when they open.
                    </p>
                    <div className="flex gap-4 max-w-md mx-auto">
                        <input type="email" placeholder="Enter your university email" className="flex-1 bg-[#0B0F19] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#73B744]" />
                        <button className="bg-[#73B744] text-white px-6 py-3 rounded-sm font-bold hover:bg-[#63a03a]">Notify Me</button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
