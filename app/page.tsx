import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import WhatWeDo from "@/components/WhatWeDo";
import ConsultingModel from "@/components/ConsultingModel";
import Governance from "@/components/Governance";
import Testimonials from "@/components/Testimonials";
import Trajectory from "@/components/Trajectory";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            {/* 0–15% | Authority */}
            <Hero />

            {/* 15–30% | Global Scale */}
            <Impact />

            {/* 30–50% | Capabilities */}
            <WhatWeDo />

            {/* 50–65% | Process */}
            <ConsultingModel />

            {/* 65–75% | Institutional Structure */}
            <Governance />

            {/* 75–85% | Human Trust */}
            <Testimonials />

            {/* 85–95% | Trajectory */}
            <Trajectory />

            {/* 95–100% | Conversion */}
            <section className="py-32 bg-[#080B14] border-t border-white/5">
                <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                        Ready to work with us?
                    </h2>
                    <p className="text-gray-500 leading-relaxed mb-10">
                        We partner with mission-driven organisations to deliver measurable strategic impact.
                        Each engagement concludes with an actionable implementation roadmap.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/hire-us"
                            className="px-8 py-4 bg-white text-[#0B0F19] font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
                        >
                            Submit a Project Brief <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/join"
                            className="px-8 py-4 border border-white/15 text-white font-semibold hover:border-white/40 transition-colors inline-flex items-center justify-center"
                        >
                            Join as Consultant
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
