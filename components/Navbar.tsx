"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Our Work", href: "/our-work" },
    { name: "Our Model", href: "/our-model" },
    { name: "Impact", href: "/#impact" },
    { name: "Insights", href: "/insights" },
    { name: "Team", href: "/team" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            scrolled ? "glass py-4" : "bg-transparent py-6"
        )}>
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group relative z-50">
                    <div className="relative h-8 w-32 md:h-10 md:w-40">
                        <Image
                            src="/trans-logo.png"
                            alt="180DC Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#73B744] transition-all group-hover:w-full" />
                        </Link>
                    ))}

                    <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/10">
                        <Link
                            href="/join"
                            className="text-white hover:text-[#73B744] transition-colors"
                        >
                            Join Us
                        </Link>
                        <Link
                            href="/hire-us"
                            className="bg-[#73B744] text-white px-5 py-2.5 rounded-lg hover:bg-[#63a03a] transition-all shadow-lg shadow-green-900/20 font-bold tracking-wide"
                        >
                            Partner With Us
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-white p-2 relative z-50"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-[#0B0F19] z-40 flex flex-col justify-center items-center gap-8 lg:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-medium text-gray-200 hover:text-[#73B744]"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <hr className="w-24 border-white/10" />
                        <Link href="/join" onClick={() => setIsOpen(false)} className="text-xl text-white">Join Us</Link>
                        <Link
                            href="/hire-us"
                            onClick={() => setIsOpen(false)}
                            className="bg-[#73B744] text-white px-8 py-3 rounded-xl text-xl font-bold"
                        >
                            Partner With Us
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
