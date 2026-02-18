import Image from "next/image";
import Link from "next/link";

export default function Clients() {
    return (
        <section className="bg-white" id="clients">
            <div className="grid md:grid-cols-2 min-h-[auto] md:min-h-[600px]">
                {/* Text Left */}
                <div className="flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-20 py-10 sm:py-16 order-2 md:order-1">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-2">
                        Clients
                    </h2>
                    <p className="text-gray-500 font-medium mb-6">
                        Scale your impact with us.
                    </p>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg">
                        At 180 Degrees Consulting, we understand the unique challenges facing non-profits and social enterprises. Our team of dedicated consultants provides tailored solutions to help you achieve your mission and make a positive impact in your community. Some of our previous clients include UNICEF, the Red Cross, UNHCR, World Vision and One Acre Fund, among others.
                    </p>
                    <div className="flex flex-wrap items-center gap-6">
                        <Link
                            href="/hire-us"
                            className="text-[#73B744] font-semibold underline underline-offset-4 hover:text-[#5a9636] transition-colors"
                        >
                            Our services
                        </Link>
                        <Link
                            href="https://www.youtube.com/watch?v=yfWwaUF6lDE"
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

                {/* Photo Right */}
                <div className="relative h-[280px] sm:h-[350px] md:h-auto order-1 md:order-2">
                    <Image
                        src="/clients-meeting.jpg"
                        alt="Consulting meeting with clients"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
