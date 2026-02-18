"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const leadership = [
    {
        name: "Aarav Sharma",
        role: "President",
        bio: "Ex-BCG Summer Associate. Leading the branch strategy and global partnerships.",
        expertise: ["Strategy", "Private Equity"],
        image: "/avatars/aarav.jpg"
    },
    {
        name: "Fatima Al-Sayed",
        role: "Director of Consulting",
        bio: "Specialist in social impact measurement. Overseeing project quality assurance.",
        expertise: ["Impact Measurement", "ESG"],
        image: "/avatars/fatima.jpg"
    },
    {
        name: "John Doe",
        role: "Head of Recruitment",
        bio: "Focused on talent acquisition from top engineering and business programs.",
        expertise: ["Talent Management", "Operations"],
        image: "/avatars/john.jpg"
    }
];

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-[#0B0F19]">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-20 px-6 bg-[#080B14] border-b border-white/5">
                <div className="container mx-auto max-w-5xl text-center">
                    <h1 className="text-5xl md:text-6xl font-bold font-display text-white mb-6">
                        Our Leadership
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        A diverse team of high-potential students driven by a shared vision of social impact.
                    </p>
                </div>
            </section>

            {/* Bio Panels */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {leadership.map((member, i) => (
                            <div key={i} className="group relative bg-[#111827] border border-white/5 rounded-sm overflow-hidden hover:border-[#73B744] transition-all duration-300">
                                {/* Image Placeholder */}
                                <div className="h-64 bg-gray-800 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-display text-4xl font-bold bg-[#1F2937]">
                                        {member.name.charAt(0)}
                                    </div>
                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-[#73B744]/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-6 text-center">
                                        <p className="text-[#0B0F19] font-medium mb-4 italic">"{member.bio}"</p>
                                        <div className="flex gap-4">
                                            <a href="#" className="p-2 bg-[#0B0F19] rounded-full text-white hover:bg-white hover:text-[#0B0F19] transition-colors"><Linkedin className="w-4 h-4" /></a>
                                            <a href="#" className="p-2 bg-[#0B0F19] rounded-full text-white hover:bg-white hover:text-[#0B0F19] transition-colors"><Mail className="w-4 h-4" /></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#73B744] transition-colors">{member.name}</h3>
                                    <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">{member.role}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {member.expertise.map((skill, j) => (
                                            <span key={j} className="text-xs border border-white/10 text-gray-400 px-2 py-1 rounded-full">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
