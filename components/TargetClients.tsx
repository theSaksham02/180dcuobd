"use client";

import { motion } from "framer-motion";

const areas = [
    "Education NGOs",
    "Sustainability Startups",
    "Healthcare Orgs",
    "Govt-Linked Entities",
    "Social Enterprises",
];

export default function TargetClients() {
    return (
        <section className="py-12 border-y border-gray-100 bg-gray-50/50 overflow-hidden">
            <div className="container mx-auto px-6">
                <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
                    Trusted By Sectors Including
                </p>

                <div className="flex justify-center flex-wrap gap-4 md:gap-12 opacity-80">
                    {areas.map((area, i) => (
                        <span key={i} className="text-lg md:text-xl font-bold text-gray-600 cursor-default">
                            {area}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
