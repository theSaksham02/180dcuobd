"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ArrowRight } from "lucide-react";

export default function HireUsPage() {
    return (
        <main className="min-h-screen bg-[#0B0F19]">
            <Navbar />

            <section className="pt-32 pb-12 px-6 text-center">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-5xl font-bold font-display text-white mb-6">
                        Strategic Advisory for <br /> <span className="text-[#73B744]">Impact Organisations</span>
                    </h1>
                    <p className="text-xl text-gray-400">
                        We partner with NGOs, Social Enterprises, and CSR divisions to deliver structured analysis and implementation roadmaps.
                    </p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-3xl mx-auto bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <form className="space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-[#73B744] border-b border-white/10 pb-2">Organization Details</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <Input label="Organization Name" placeholder="Acme Non-Profit" />
                                <Input label="Website" placeholder="https://acme.org" />
                                <Input label="Contact Person" placeholder="Jane Smith" />
                                <Input label="Email Address" placeholder="jane@acme.org" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-[#73B744] border-b border-white/10 pb-2">Project Scope</h3>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Project Description</label>
                                <textarea className="w-full h-32 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#73B744] focus:outline-none focus:border-transparent transition-all" placeholder="Briefly describe the challenge you are facing..." />
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button className="w-full py-4 text-lg font-bold">Submit Inquiry <ArrowRight className="w-5 h-5 ml-2" /></Button>
                        </div>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}
