import Image from "next/image";
import Link from "next/link";

export default function Partners() {
    return (
        <section className="bg-[#f8f8f8]" id="partners">
            <div className="grid md:grid-cols-2 min-h-[auto] md:min-h-[600px]">
                {/* Photo Left */}
                <div className="relative h-[280px] sm:h-[350px] md:h-auto">
                    <Image
                        src="/partners-collab.jpg"
                        alt="Partnership collaboration"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Text Right */}
                <div className="flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-20 py-10 sm:py-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
                        Partners
                    </h2>
                    <p className="text-gray-500 font-medium mb-6">
                        Join our mission of transforming lives.
                    </p>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg">
                        Are you a corporation, foundation or government entity wishing to support the mission of 180 Degrees Consulting to empower non-profits and cultivate the next generation of social impact leaders? We would love to hear from you and discuss how we can work together!
                    </p>
                    <Link
                        href="/join"
                        className="text-[#73B744] font-semibold underline underline-offset-4 hover:text-[#5a9636] transition-colors"
                    >
                        Learn more
                    </Link>
                </div>
            </div>
        </section>
    );
}
