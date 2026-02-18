import Image from "next/image";
import Link from "next/link";

export default function Students() {
    return (
        <section className="bg-white" id="students">
            <div className="grid md:grid-cols-2 min-h-[auto] md:min-h-[600px]">
                {/* Photo Left */}
                <div className="relative h-[280px] sm:h-[350px] md:h-auto">
                    <Image
                        src="/students-group.jpg"
                        alt="180DC students at an event"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Text Right */}
                <div className="flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-20 py-10 sm:py-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 sm:mb-6">
                        Students
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg">
                        Want to make a difference while gaining valuable skills? Join 180 Degrees Consulting and become part of a global network of social impact leaders. Our university branches offer opportunities for students to work with non-profits and social enterprises, making a tangible impact in their communities.
                    </p>
                    <div className="flex flex-wrap items-center gap-6">
                        <Link
                            href="/join"
                            className="text-[#73B744] font-semibold underline underline-offset-4 hover:text-[#5a9636] transition-colors"
                        >
                            Find a 180DC branch near you
                        </Link>
                        <Link
                            href="https://www.youtube.com/watch?v=BW1iTydJntw"
                            target="_blank"
                            className="flex items-center gap-2 text-[#73B744] font-semibold hover:text-[#5a9636] transition-colors"
                        >
                            Watch Video
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                                <polygon points="10,8 16,12 10,16" fill="currentColor" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
