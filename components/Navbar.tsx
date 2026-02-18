"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

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
            scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        )}>
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative h-10 w-40">
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
                <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-300">
                    <Link href="#about" className="hover:text-white transition-colors">About</Link>
                    <Link href="#services" className="hover:text-white transition-colors">Services</Link>
                    <Link href="#vision" className="hover:text-white transition-colors">Vision</Link>

                    <div className="flex items-center gap-4 ml-4">
                        <Link href="/login" className="hover:text-white transition-colors">Login</Link>
                        <Link
                            href="/join"
                            className="bg-[#73B744] text-white px-5 py-2 rounded-full hover:bg-[#63a03a] transition-colors shadow-md shadow-green-500/20 font-bold"
                        >
                            Join a Branch
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white p-1"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0a0a0a] border-b border-white/10 overflow-hidden shadow-2xl"
                    >
                        <div className="p-6 flex flex-col gap-4">
                            <Link href="#about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-200">About</Link>
                            <Link href="#services" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-200">Services</Link>
                            <Link href="#vision" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-200">Vision</Link>
                            <hr className="border-white/10 my-2" />
                            <Link href="/login" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-200">Login</Link>
                            <Link href="/join" onClick={() => setIsOpen(false)} className="bg-[#73B744] text-white py-3 rounded-xl text-center font-bold">Join a Branch</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
