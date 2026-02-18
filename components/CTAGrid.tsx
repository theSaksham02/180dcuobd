import Link from "next/link";

const ctaBlocks = [
    {
        title: "Join a 180DC branch today!",
        description:
            "Are you a student who wants to make a difference while gaining valuable skills? Join 180 Degrees Consulting and become part of a global network of social impact leaders.",
        link: "/join",
        linkText: "Find a 180DC branch",
    },
    {
        title: "Work with us",
        description:
            "Are you part of an organisation that is interested in working with a team of smart, driven consultants that will help you address key challenges you are facing? Explore our services.",
        link: "/hire-us",
        linkText: "Work with us",
    },
    {
        title: "Become our Partner!",
        description:
            "Are you interested in partnering with 180 Degrees Consulting to further our mission of enabling non-profits and social enterprises to scale their impact?",
        link: "/hire-us",
        linkText: "Partner with us",
    },
    {
        title: "Start a branch at your university!",
        description:
            "Are you a student who wants to develop the next generation of social impact leaders at your university? Start a branch today and be at the forefront of social impact.",
        link: "/about",
        linkText: "Learn more",
    },
];

export default function CTAGrid() {
    return (
        <section className="py-20 md:py-24 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-[1280px]">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {ctaBlocks.map((block, i) => (
                        <div key={i} className="space-y-4">
                            <h3 className="text-xl font-bold text-[#1a1a1a]">
                                {block.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {block.description}
                            </p>
                            <Link
                                href={block.link}
                                className="inline-block text-[#73B744] font-semibold underline underline-offset-4 hover:text-[#5a9636] transition-colors text-sm"
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
