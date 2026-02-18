"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    {
        name: "About",
        href: "/about",
        children: [
            { name: "Who We Are", href: "/about" },
            { name: "Our Team", href: "/team" },
            { name: "Impact Reports", href: "/#impact" },
        ],
    },
    {
        name: "Students",
        href: "/#students",
        children: [
            { name: "Join a Branch", href: "/join" },
            { name: "Find a Branch", href: "/#students" },
        ],
    },
    {
        name: "Clients",
        href: "/#clients",
        children: [
            { name: "Our Services", href: "/#clients" },
            { name: "Work With Us", href: "/hire-us" },
        ],
    },
    {
        name: "Partners",
        href: "/#partners",
        children: [
            { name: "Our Partners", href: "/#partners" },
            { name: "Become a Partner", href: "/hire-us" },
        ],
    },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 max-w-[1280px] flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 relative z-50">
                    <div className="relative h-10 w-44">
                        <Image
                            src="/trans-logo.png"
                            alt="180DC UoBD"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-[#333]">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative"
                            onMouseEnter={() =>
                                link.children && setOpenDropdown(link.name)
                            }
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <Link
                                href={link.href}
                                className="flex items-center gap-1 px-4 py-2 hover:text-[#73B744] transition-colors rounded-md"
                            >
                                {link.name}
                                {link.children && (
                                    <ChevronDown className="w-3.5 h-3.5" />
                                )}
                            </Link>

                            {/* Dropdown */}
                            {link.children && openDropdown === link.name && (
                                <div className="absolute top-full left-0 pt-1 min-w-[200px]">
                                    <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#73B744] hover:bg-gray-50 transition-colors"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* CTA */}
                    <Link
                        href="/hire-us"
                        className="ml-4 bg-[#73B744] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#5a9636] transition-colors"
                    >
                        Work With Us
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-[#333] p-2 relative z-50"
                >
                    {isOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-6 lg:hidden">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl text-gray-700 hover:text-[#73B744] transition-colors font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <hr className="w-16 border-gray-200" />
                    <Link
                        href="/hire-us"
                        onClick={() => setIsOpen(false)}
                        className="bg-[#73B744] text-white px-8 py-3 rounded-full text-xl font-semibold"
                    >
                        Work With Us
                    </Link>
                </div>
            )}
        </nav>
    );
}
