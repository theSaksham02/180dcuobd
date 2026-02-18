"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Linkedin, Mail } from "lucide-react";

const leadership = [
    {
        name: "Aarav Sharma",
        role: "President",
        bio: "Leading branch strategy, client partnerships, and global network alignment.",
        image: "/avatars/aarav.jpg"
    },
    {
        name: "Fatima Al-Sayed",
        role: "Director of Consulting",
        bio: "Overseeing project quality assurance across all client engagements.",
        image: "/avatars/fatima.jpg"
    },
    {
        name: "John Doe",
        role: "Head of Recruitment",
        bio: "Managing consultant selection and onboarding pipeline.",
        image: "/avatars/john.jpg"
    },
    {
        name: "Sarah Jenkins",
        role: "Director of Client Services",
        bio: "Managing relationships with NGO and social enterprise partners across MENA.",
        image: "/avatars/sarah-j.jpg"
    },
    {
        name: "Michael Chen",
        role: "Head of Communications",
        bio: "Institutional brand positioning and thought leadership content.",
        image: "/avatars/michael.jpg"
    },
    {
        name: "Priya Patel",
        role: "Director of Training",
        bio: "Developing the consulting curriculum and professional development programme.",
        image: "/avatars/priya.jpg"
    }
];

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-[#0B0F19]">
            <Navbar />

            {/* Header */}
            <section className="pt-36 pb-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <p className="text-[11px] text-gray-600 uppercase tracking-[0.2em] font-medium mb-6">
                        Leadership
                    </p>
                    <h1 className="text-4xl md:text-5xl font-semibold text-white max-w-xl">
                        The people behind the platform.
                    </h1>
                </div>
            </section>

            {/* Team Grid */}
            <section className="pb-28 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
                        {leadership.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06, duration: 0.5 }}
                                className="group bg-[#0B0F19] p-8 hover:bg-[#0E1220] transition-colors"
                            >
                                {/* Portrait placeholder */}
                                <div className="h-56 bg-[#111827] mb-6 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-700 text-4xl font-semibold">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                </div>

                                <h3 className="text-white font-semibold text-lg mb-1">{member.name}</h3>
                                <p className="text-gray-600 text-sm uppercase tracking-widest mb-4">{member.role}</p>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">{member.bio}</p>

                                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href="#" className="text-gray-600 hover:text-white transition-colors">
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-white transition-colors">
                                        <Mail className="w-4 h-4" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
