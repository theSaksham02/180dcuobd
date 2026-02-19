"use client";

import Image from "next/image";

const currentProjects = [
    {
        title: "Social Impact Strategy for EcoVentures",
        image: "/news-1.jpg",
        tag: "In Progress",
    },
    {
        title: "Market Entry Analysis for GreenTech Foundation",
        image: "/news-2.jpg",
        tag: "In Progress",
    },
    {
        title: "Digital Transformation for Youth Empowerment NGO",
        image: "/news-3.jpg",
        tag: "In Progress",
    },
];

const previousProjects = [
    {
        title: "Growth Strategy for Community Health Initiative",
        image: "/news-4.jpg",
        tag: "Completed",
    },
    {
        title: "Fundraising Roadmap for Education Non-Profit",
        image: "/news-5.jpg",
        tag: "Completed",
    },
    {
        title: "Operational Review for Sustainable Agriculture Org",
        image: "/news-6.jpg",
        tag: "Completed",
    },
];

function ProjectCard({ project }: { project: { title: string; image: string; tag: string } }) {
    return (
        <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
            {/* Background image */}
            <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Glassmorphism info card */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4 sm:p-5">
                    <span className={`inline-block text-[10px] sm:text-xs uppercase tracking-wider font-bold px-2.5 py-1 rounded-full mb-2.5 ${project.tag === "In Progress"
                            ? "bg-[#73B744]/20 text-[#73B744]"
                            : "bg-white/20 text-white/80"
                        }`}>
                        {project.tag}
                    </span>
                    <h3 className="text-white font-semibold text-sm sm:text-base leading-snug">
                        {project.title}
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-[1280px]">
                {/* Current Projects */}
                <div className="mb-16 sm:mb-24">
                    <p className="text-[#73B744] font-semibold text-sm uppercase tracking-wider mb-3">
                        What we&apos;re working on
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8 sm:mb-12">
                        Our Projects
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {currentProjects.map((project, i) => (
                            <ProjectCard key={i} project={project} />
                        ))}
                    </div>
                </div>

                {/* Previous Projects */}
                <div>
                    <p className="text-gray-400 font-semibold text-sm uppercase tracking-wider mb-3">
                        Past engagements
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8 sm:mb-12">
                        Previous Projects
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {previousProjects.map((project, i) => (
                            <ProjectCard key={i} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
