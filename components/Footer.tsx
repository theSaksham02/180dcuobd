"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#f5f5f5] pt-12 sm:pt-16 pb-8 sm:pb-12">
            <div className="container mx-auto px-4 sm:px-6 max-w-[1280px]">
                {/* Main card */}
                <div className="bg-white rounded-2xl border border-gray-200/60 shadow-sm px-8 sm:px-12 lg:px-16 pt-10 sm:pt-14 pb-8 sm:pb-10">
                    {/* Top section */}
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-10 sm:mb-14">
                        {/* Brand column */}
                        <div className="lg:w-[400px] shrink-0 space-y-5">
                            <Link href="/" className="flex items-center gap-2.5">
                                <div className="relative w-8 h-8">
                                    <Image
                                        src="/trans-logo.png"
                                        alt="180DC"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-[#1a1a1a] font-bold text-lg tracking-tight">
                                    180DC UoBD
                                </span>
                            </Link>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                180 Degrees Consulting empowers non-profits and social enterprises
                                with affordable, high-quality consulting — making impact accessible
                                to organisations that need it most.
                            </p>
                            {/* Social icons */}
                            <div className="flex items-center gap-3 pt-1">
                                {/* X / Twitter */}
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-[#1a1a1a] transition-colors"
                                    aria-label="Twitter"
                                >
                                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                {/* Instagram */}
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-[#1a1a1a] transition-colors"
                                    aria-label="Instagram"
                                >
                                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </a>
                                {/* LinkedIn */}
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-[#1a1a1a] transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                {/* YouTube */}
                                <a
                                    href="https://youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-[#1a1a1a] transition-colors"
                                    aria-label="YouTube"
                                >
                                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Link columns */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12 flex-1">
                            {/* About */}
                            <div>
                                <h4 className="text-[#1a1a1a] font-semibold text-sm mb-5">
                                    About
                                </h4>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/about" className="text-gray-500 hover:text-[#1a1a1a] transition-colors text-sm">
                                            Who We Are
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/our-model" className="text-gray-500 hover:text-[#1a1a1a] transition-colors text-sm">
                                            Our Model
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/team" className="text-gray-500 hover:text-[#1a1a1a] transition-colors text-sm">
                                            Our Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#impact" className="text-gray-500 hover:text-[#1a1a1a] transition-colors text-sm">
                                            Impact
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Get Involved */}
                            <div>
                                <h4 className="text-[#1a1a1a] font-semibold text-sm mb-5">
                                    Get Involved
                                </h4>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/join" className="text-gray-500 hover:text-[#1a1a1a] transition-colors text-sm">
                                            Join a Branch
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/hire-us" className="text-gray-500 hover:text-[#1a1a1a] transition-colors text-sm">
                                            Work With Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/hire-us" className="text-gray-500 hover:text-[#1a1a1a] transition-colors text-sm">
                                            Become a Partner
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="text-gray-500 hover:text-[#1a1a1a] transition-colors text-sm">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Resources */}
                            <div>
                                <h4 className="text-[#1a1a1a] font-semibold text-sm mb-5">
                                    Resources
                                </h4>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/insights" className="text-gray-500 hover:text-[#1a1a1a] transition-colors text-sm">
                                            Insights
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/our-work" className="text-gray-500 hover:text-[#1a1a1a] transition-colors text-sm">
                                            Our Work
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/insights" className="text-gray-500 hover:text-[#1a1a1a] transition-colors text-sm">
                                            Blog
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Divider + bottom bar */}
                    <div className="pt-6 sm:pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <span className="text-gray-400 text-xs">
                            © {new Date().getFullYear()} 180 Degrees Consulting UoBD. All rights reserved.
                        </span>
                        <div className="flex items-center gap-6">
                            <Link href="/privacy" className="text-gray-400 hover:text-[#1a1a1a] transition-colors text-xs underline underline-offset-2">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-gray-400 hover:text-[#1a1a1a] transition-colors text-xs underline underline-offset-2">
                                Terms of Service
                            </Link>
                            <Link href="/privacy" className="text-gray-400 hover:text-[#1a1a1a] transition-colors text-xs underline underline-offset-2">
                                Cookies Settings
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
