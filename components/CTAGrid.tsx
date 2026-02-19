import Link from "next/link";

const ctaBlocks = [
    {
        title: "Join a 180DC branch today!",
        description:
            "Are you a student who wants to make a difference while gaining valuable skills? Join 180 Degrees Consulting and become part of a global network of social impact leaders.",
        link: "/join",
        linkText: "Join us",
    },
    {
        title: "Sign up for updates",
        description:
            "Stay informed about our latest projects, events, and opportunities. Create an account to get started with 180 Degrees Consulting UoBD.",
        link: "/signup",
        linkText: "Sign up",
    },
];

export default function CTAGrid() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-[1280px]">
                {/* Top divider */}
                <div className="border-t border-gray-200 mb-12 sm:mb-16" />

                <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-3xl">
                    {ctaBlocks.map((block, i) => (
                        <div key={i} className="space-y-4">
                            <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug">
                                {block.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {block.description}
                            </p>
                            <Link
                                href={block.link}
                                className="inline-block text-[#73B744] font-semibold underline underline-offset-4 decoration-[#73B744]/60 hover:decoration-[#73B744] hover:text-[#5a9636] transition-colors text-sm"
                            >
                                {block.linkText}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
