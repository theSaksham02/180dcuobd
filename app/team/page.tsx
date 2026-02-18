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
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <section className="pt-36 pb-16 px-6">
                <div className="container mx-auto max-w-[1280px]">
                    <p className="text-xs text-[#73B744] uppercase tracking-[0.2em] font-semibold mb-4">
                        Leadership
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] max-w-xl">
                        The people behind the platform.
                    </h1>
                </div>
            </section>

            {/* Team Grid */}
            <section className="pb-28 px-6">
                <div className="container mx-auto max-w-[1280px]">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {leadership.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06, duration: 0.5 }}
                                className="group bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                            >
                                {/* Portrait placeholder */}
                                <div className="h-56 bg-gray-100 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-4xl font-bold">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-[#1a1a1a] font-semibold text-lg mb-1">{member.name}</h3>
                                    <p className="text-[#73B744] text-sm font-medium mb-3">{member.role}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{member.bio}</p>

                                    <div className="flex gap-3">
                                        <a href="#" className="text-gray-400 hover:text-[#73B744] transition-colors">
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                        <a href="#" className="text-gray-400 hover:text-[#73B744] transition-colors">
                                            <Mail className="w-4 h-4" />
                                        </a>
                                    </div>
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
