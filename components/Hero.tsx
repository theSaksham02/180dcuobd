"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
            {/* Content */}
            <div className="container mx-auto px-6 lg:px-16 max-w-[1280px] relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left — Headline */}
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-[#1a1a1a] leading-[1.15] tracking-tight">
                            The world&apos;s{" "}
                            <span className="text-[#73B744] italic">largest</span>{" "}
                            university-based consultancy for non-profits and socially-conscious organisations
                        </h1>
                    </div>

                    {/* Right — Circular Photos */}
                    <div className="relative hidden lg:flex justify-center items-center h-[500px]">
                        {/* Large circle */}
                        <div className="absolute top-0 right-0 w-[340px] h-[340px] rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
                            <Image
                                src="/team-hands.jpg"
                                alt="Team collaboration"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Small circle */}
                        <div className="absolute bottom-0 right-20 w-[220px] h-[220px] rounded-full overflow-hidden border-4 border-white shadow-xl z-20">
                            <Image
                                src="/team-meeting.jpg"
                                alt="Team meeting"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Green Wave Divider */}
            <div className="absolute bottom-0 left-0 right-0 z-0">
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[200px] md:h-[280px]">
                    <path
                        fill="#73B744"
                        d="M0,160 C360,280 720,60 1080,180 C1260,240 1380,200 1440,160 L1440,320 L0,320 Z"
                    />
                    <path
                        fill="#5a9636"
                        d="M0,220 C360,300 720,140 1080,240 C1260,280 1380,260 1440,220 L1440,320 L0,320 Z"
                        opacity="0.7"
                    />
                </svg>
            </div>
        </section>
    );
}
