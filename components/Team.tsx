"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";

const teamMembers = [
    {
        name: "Saksham M.",
        role: "Branch Director",
        bio: "Leading the UoBD branch with a vision for impactful consulting.",
        image: "/team-1.png",
        linkedin: "#",
    },
    {
        name: "Aarya P.",
        role: "Vice President",
        bio: "Driving operational excellence and strategic partnerships.",
        image: "/team-2.png",
        linkedin: "#",
    },
    {
        name: "Riya S.",
        role: "Head of Consulting",
        bio: "Overseeing all client engagements and project delivery.",
        image: "/team-hands.jpg",
        linkedin: "#",
    },
    {
        name: "Ayaan K.",
        role: "Head of Marketing",
        bio: "Building the 180DC UoBD brand across all channels.",
        image: "/team-meeting.jpg",
        linkedin: "#",
    },
    {
        name: "Zara N.",
        role: "Head of Recruitment",
        bio: "Attracting and selecting top-tier student talent.",
        image: "/team-1.png",
        linkedin: "#",
    },
];

export default function Team() {
    return (
        <section id="team" className="py-16 sm:py-24 bg-[#fafafa]">
            <div className="container mx-auto px-4 sm:px-6 max-w-[1280px]">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <p className="text-[#73B744] font-semibold text-sm uppercase tracking-wider mb-3">
                        Our creative team
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 leading-tight">
                        The Team Behind 180DC<br className="hidden sm:block" /> UoBD&apos;s Impact
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        Meet the dedicated professionals driving our success and delivering
                        exceptional consulting solutions to organisations that need it most.
                    </p>
                </div>

                {/* Team Grid — mobile 1 col, sm 2, lg top row 3 + bottom row 2 centered */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    {teamMembers.slice(0, 3).map((member, i) => (
                        <TeamCard key={i} member={member} />
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
                    {teamMembers.slice(3, 5).map((member, i) => (
                        <TeamCard key={i} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TeamCard({ member }: { member: typeof teamMembers[0] }) {
    return (
        <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-gray-200">
            {/* Photo */}
            <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Arrow icon */}
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full backdrop-blur-md bg-white/15 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
            </div>

            {/* Glassmorphism info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4 sm:p-5">
                    <h3 className="text-white font-bold text-base sm:text-lg">
                        {member.name}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm font-medium mb-2">
                        {member.role}
                    </p>
                    <p className="text-white/60 text-xs leading-relaxed mb-3">
                        {member.bio}
                    </p>
                    {/* Social */}
                    <div className="flex items-center gap-2">
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 rounded-full bg-white/15 border border-white/20 flex items-center justify-center hover:bg-[#73B744]/40 transition-colors"
                        >
                            <Linkedin className="w-3.5 h-3.5 text-white" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
