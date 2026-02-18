"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 bg-gray-50 flex flex-col justify-center">
            <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">

                {/* Contact Info (Left) */}
                <div className="bg-[#414042] p-12 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

                    <div className="relative z-10 space-y-8">
                        <div>
                            <h1 className="text-3xl font-bold font-display mb-2">Get in Touch</h1>
                            <p className="text-gray-400">Have a general question? We'd love to hear from you.</p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-[#73B744] mt-1" />
                                <div>
                                    <h4 className="font-bold text-white">University of Birmingham Dubai</h4>
                                    <p className="text-gray-400 text-sm">Dubai International Academic City,<br />Dubai, UAE</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="w-6 h-6 text-[#73B744]" />
                                <span className="text-gray-300">dubai@180dc.org</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 pt-12">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                            <span className="font-bold">180</span>
                        </div>
                    </div>
                </div>

                {/* Contact Form (Right) */}
                <div className="p-12">
                    <form className="space-y-6">
                        <Input label="Name" placeholder="Your Name" />
                        <Input label="Email" placeholder="your@email.com" />
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Message</label>
                            <textarea className="w-full h-32 rounded-xl border border-gray-200 p-4 text-sm focus:ring-2 focus:ring-[#73B744] focus:outline-none focus:border-transparent transition-all" placeholder="How can we help?" />
                        </div>
                        <Button className="w-full">Send Message</Button>
                    </form>
                </div>

            </div>
        </div>
    );
}
