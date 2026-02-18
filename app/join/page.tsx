"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ArrowRight, UploadCloud } from "lucide-react";

export default function JoinPage() {
    return (
        <main className="min-h-screen bg-[#0B0F19]">
            <Navbar />

            <section className="pt-32 pb-12 px-6 text-center">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-5xl font-bold font-display text-white mb-6">
                        Join the Top Tier of <br /> <span className="text-[#73B744]">Student Consultants</span>
                    </h1>
                    <p className="text-xl text-gray-400">
                        Gain real consulting experience, structured training, and exposure to the UAE impact ecosystem.
                    </p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-3xl mx-auto bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <form className="space-y-8">
                        {/* Section 1: Personal Details */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-[#73B744] border-b border-white/10 pb-2">Personal Details</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <Input label="Full Name" placeholder="John Doe" />
                                <Input label="University Email" placeholder="j.doe@student.bham.ac.uk" />
                                <Input label="Phone Number" placeholder="+971 50 123 4567" />
                                <Input label="Major / Course" placeholder="Computer Science" />
                            </div>
                        </div>

                        {/* Section 2: Motivation */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-[#73B744] border-b border-white/10 pb-2">Application Questions</h3>
                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Why do you want to join 180DC?</label>
                                    <textarea className="w-full h-32 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#73B744] focus:outline-none focus:border-transparent transition-all" placeholder="Tell us about your motivation..." />
                                </div>
                                <Input label="LinkedIn Profile URL" placeholder="https://linkedin.com/in/..." />
                            </div>
                        </div>

                        {/* Section 3: CV Upload */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-[#73B744] border-b border-white/10 pb-2">Resume / CV</h3>
                            <div className="border-2 border-dashed border-white/10 bg-white/5 rounded-xl p-8 text-center hover:border-[#73B744] hover:bg-green-500/5 transition-colors cursor-pointer group">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#73B744] group-hover:text-white transition-colors">
                                    <UploadCloud className="w-6 h-6 text-gray-400 group-hover:text-white" />
                                </div>
                                <p className="text-sm text-gray-300 font-medium">Click to upload or drag and drop</p>
                                <p className="text-xs text-gray-500 mt-1">PDF only (Max 5MB)</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button className="w-full py-4 text-lg font-bold">Submit Application <ArrowRight className="w-5 h-5 ml-2" /></Button>
                        </div>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}
