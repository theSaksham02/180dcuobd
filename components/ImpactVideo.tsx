import Link from "next/link";

export default function ImpactVideo() {
    return (
        <section className="relative py-24 md:py-32 bg-[#2c2c2c] text-white overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: "url('/forest-bg.jpg')" }}
            />

            <div className="relative container mx-auto px-6 max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Our Impact Story
                </h2>

                {/* Video Embed */}
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl mb-12">
                    <iframe
                        src="https://www.youtube.com/embed/BW1iTydJntw"
                        title="180DC Impact Story"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                    />
                </div>

                {/* Description */}
                <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                    180 Degrees Consulting creates a ripple effect of positive change by leveraging the skills of passionate young professionals to help non-profits and social enterprises increase their impact. By offering affordable high-quality consulting services, we are democratising access to expertise and helping organisations achieve greater sustainability and growth.
                </p>

                <Link
                    href="/about"
                    className="inline-block bg-[#73B744] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#5a9636] transition-colors"
                >
                    Find out more about us
                </Link>
            </div>
        </section>
    );
}
