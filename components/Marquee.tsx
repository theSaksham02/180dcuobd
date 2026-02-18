export default function Marquee() {
    return (
        <section className="relative py-0 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/forest-bg.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Diagonal Bands */}
            <div className="relative py-16 md:py-24 space-y-4 -rotate-3 scale-110">
                {/* Band 1 */}
                <div className="bg-[#73B744] py-4 overflow-hidden">
                    <div className="flex whitespace-nowrap animate-marquee">
                        {[...Array(10)].map((_, i) => (
                            <span
                                key={i}
                                className="text-white text-xl md:text-2xl font-bold mx-8 tracking-wide"
                            >
                                Unlock your organisation&apos;s potential &nbsp;·&nbsp;
                            </span>
                        ))}
                    </div>
                </div>

                {/* Band 2 */}
                <div className="bg-[#5a9636] py-4 overflow-hidden">
                    <div className="flex whitespace-nowrap animate-marquee" style={{ animationDirection: "reverse" }}>
                        {[...Array(10)].map((_, i) => (
                            <span
                                key={i}
                                className="text-white text-xl md:text-2xl font-bold mx-8 tracking-wide"
                            >
                                Work with the brightest minds worldwide &nbsp;·&nbsp;
                            </span>
                        ))}
                    </div>
                </div>

                {/* Band 3 */}
                <div className="bg-[#73B744]/80 py-4 overflow-hidden">
                    <div className="flex whitespace-nowrap animate-marquee">
                        {[...Array(10)].map((_, i) => (
                            <span
                                key={i}
                                className="text-white text-xl md:text-2xl font-bold mx-8 tracking-wide"
                            >
                                Unlock your organisation&apos;s potential &nbsp;·&nbsp;
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
