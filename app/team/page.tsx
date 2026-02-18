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
    },
    {
        name: "Sarah Jenkins",
        role: "Director of Client Services",
        bio: "Managing relationships with 15+ NGO partners across the MENA region.",
        expertise: ["Client Relations", "Sales"],
        image: "/avatars/sarah-j.jpg"
    },
    {
        name: "Michael Chen",
        role: "Head of Branding",
        bio: "Ensuring 180DC UoBD maintains its position as a thought leader in the sector.",
        expertise: ["Marketing", "Brand Strategy"],
        image: "/avatars/michael.jpg"
    },
    {
        name: "Priya Patel",
        role: "Director of Training",
        bio: "Developing our proprietary consulting curriculum for new analysts.",
        expertise: ["L&D", "Curriculum Design"],
        image: "/avatars/priya.jpg"
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

            {/* Bio Panels - Grayscale to Color */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {leadership.map((member, i) => (
                            <div key={i} className="group relative bg-[#111827] border border-white/5 rounded-sm overflow-hidden hover:border-[#73B744] transition-all duration-500">
                                {/* Image Placeholder */}
                                <div className="h-72 bg-gray-800 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-display text-4xl font-bold bg-[#1F2937]">
                                        {/* In a real app, <Image src={member.image} fill ... /> would be here */}
                                        {member.name.charAt(0)}
                                    </div>

                                    {/* Overlay on Hover - Now more subtle */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                </div>

                                <div className="p-8 relative">
                                    <div className="absolute top-0 right-0 -mt-6 mr-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <a href="#" className="p-2 bg-[#73B744] rounded-full text-white hover:bg-white hover:text-[#0B0F19] transition-colors"><Linkedin className="w-4 h-4" /></a>
                                        <a href="#" className="p-2 bg-[#73B744] rounded-full text-white hover:bg-white hover:text-[#0B0F19] transition-colors"><Mail className="w-4 h-4" /></a>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#73B744] transition-colors">{member.name}</h3>
                                    <p className="text-sm text-gray-400 uppercase tracking-widest mb-4 group-hover:text-white transition-colors">{member.role}</p>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 border-l-2 border-[#73B744]/0 group-hover:border-[#73B744] pl-0 group-hover:pl-3 transition-all duration-300 line-clamp-2 hover:line-clamp-none">
                                        {member.bio}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {member.expertise.map((skill, j) => (
                                            <span key={j} className="text-[10px] uppercase tracking-wider border border-white/10 text-gray-500 px-2 py-1 rounded-sm group-hover:border-[#73B744]/30 group-hover:text-[#73B744] transition-colors">
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
