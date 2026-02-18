import Image from "next/image";
import Link from "next/link";

const newsItems = [
    {
        title: "Amplifying Impact by Using 'A Tool To Sell More' to Win More Projects",
        category: "180 Newsroom",
        image: "/news-1.jpg",
        href: "#",
    },
    {
        title: "180DC Indonesia Foundation Takes Shape at Summit 2025",
        category: "Branch Spotlights",
        image: "/news-2.jpg",
        href: "#",
    },
    {
        title: "The Feedback Night: Unleashing Innovation at Mid-Semester Event",
        category: "Branch Spotlights",
        image: "/news-3.jpg",
        href: "#",
    },
    {
        title: "Why the World Needs the Next Generation of Social Impact Leaders",
        category: "180 Newsroom",
        image: "/news-4.jpg",
        href: "#",
    },
    {
        title: "2024 Impact Report",
        category: "Impact Reports",
        image: "/news-5.jpg",
        href: "#",
    },
    {
        title: "Strategic Evolution at Scale: 180DC GLT Summit in Budapest",
        category: "180 Newsroom",
        image: "/news-6.jpg",
        href: "#",
    },
];

export default function News() {
    return (
        <section className="py-16 sm:py-24 md:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-[1280px]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8 sm:mb-12">
                    The Latest News
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item, i) => (
                        <Link
                            key={i}
                            href={item.href}
                            className="group block"
                        >
                            <div className="relative h-[180px] sm:h-[220px] rounded-lg overflow-hidden mb-4 bg-gray-100">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <span className="text-xs uppercase tracking-wider text-[#73B744] font-semibold">
                                {item.category}
                            </span>
                            <h3 className="text-lg font-semibold text-[#1a1a1a] mt-2 group-hover:text-[#73B744] transition-colors leading-snug">
                                {item.title}
                            </h3>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/insights"
                        className="text-[#73B744] font-semibold underline underline-offset-4 hover:text-[#5a9636] transition-colors"
                    >
                        See All Resources
                    </Link>
                </div>
            </div>
        </section>
    );
}
