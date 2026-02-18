"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Impact", href: "/#impact" },
    { name: "Model", href: "/our-model" },
    { name: "Team", href: "/team" },
    { name: "Insights", href: "/insights" },
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
            scrolled ? "bg-[#0B0F19]/90 backdrop-blur-sm border-b border-white/5 py-4" : "bg-transparent py-6"
        )}>
            <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 relative z-50">
                    <div className="relative h-8 w-32 md:h-10 md:w-40">
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
                <div className="hidden lg:flex items-center gap-8 text-sm text-gray-400">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="flex items-center gap-4 ml-6 pl-6 border-l border-white/10">
                        <Link
                            href="/join"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Apply
                        </Link>
                        <Link
                            href="/hire-us"
                            className="bg-white text-[#0B0F19] px-5 py-2 font-semibold text-sm hover:bg-gray-100 transition-colors"
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

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed inset-0 bg-[#0B0F19] z-40 flex flex-col justify-center items-center gap-8 lg:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl text-gray-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <hr className="w-16 border-white/10" />
                        <Link href="/join" onClick={() => setIsOpen(false)} className="text-xl text-white">Apply</Link>
                        <Link
                            href="/hire-us"
                            onClick={() => setIsOpen(false)}
                            className="bg-white text-[#0B0F19] px-8 py-3 text-xl font-semibold"
                        >
                            Partner With Us
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
