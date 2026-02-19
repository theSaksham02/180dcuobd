"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Impact", href: "/#impact" },
    { name: "Students", href: "/#students" },
    { name: "Clients", href: "/#clients" },
    { name: "Partners", href: "/#partners" },
    { name: "Sign Up", href: "/signup" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 max-w-[1280px] flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 relative z-50">
                    <div className="relative h-8 w-36 sm:h-10 sm:w-44">
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
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 hover:text-[#73B744] transition-colors rounded-md"
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* CTA */}
                    <Link
                        href="/join"
                        className="ml-4 bg-[#73B744] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#5a9636] transition-colors"
                    >
                        Join Us
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-[#333] p-2 relative z-50 -mr-2"
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-300 ease-in-out",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col pt-24 pb-8 px-6 h-full overflow-y-auto">
                    {navLinks.map((link) => (
                        <div key={link.name} className="border-b border-gray-100">
                            <Link
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-4 text-lg text-gray-700 font-medium hover:text-[#73B744] transition-colors"
                            >
                                {link.name}
                            </Link>
                        </div>
                    ))}

                    <div className="mt-8">
                        <Link
                            href="/join"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center bg-[#73B744] text-white px-8 py-3.5 rounded-full text-lg font-semibold hover:bg-[#5a9636] transition-colors"
                        >
                            Join Us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
