"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-gray-400 py-16">
            <div className="container mx-auto px-6 max-w-[1280px]">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-5">
                        <Link href="/" className="block relative w-40 h-10">
                            <Image
                                src="/trans-logo.png"
                                alt="180DC UoBD"
                                fill
                                className="object-contain object-left brightness-0 invert"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs">
                            The world&apos;s largest university-based consulting organisation, turning good organisations into great organisations.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                className="p-2 bg-white/10 rounded-full hover:bg-[#73B744] transition-colors"
                            >
                                <Linkedin className="w-4 h-4 text-white" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                className="p-2 bg-white/10 rounded-full hover:bg-[#73B744] transition-colors"
                            >
                                <Instagram className="w-4 h-4 text-white" />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                className="p-2 bg-white/10 rounded-full hover:bg-[#73B744] transition-colors"
                            >
                                <Youtube className="w-4 h-4 text-white" />
                            </a>
                        </div>
                    </div>

                    {/* About */}
                    <div>
                        <h4 className="text-white font-semibold mb-5 text-sm">
                            About
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors">
                                    Who We Are
                                </Link>
                            </li>
                            <li>
                                <Link href="/team" className="hover:text-white transition-colors">
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/#impact" className="hover:text-white transition-colors">
                                    Impact
                                </Link>
                            </li>
                            <li>
                                <Link href="/insights" className="hover:text-white transition-colors">
                                    Resources
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Get Involved */}
                    <div>
                        <h4 className="text-white font-semibold mb-5 text-sm">
                            Get Involved
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/join" className="hover:text-white transition-colors">
                                    Join a Branch
                                </Link>
                            </li>
                            <li>
                                <Link href="/hire-us" className="hover:text-white transition-colors">
                                    Work With Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/hire-us" className="hover:text-white transition-colors">
                                    Become a Partner
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-semibold mb-5 text-sm">
                            Legal
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/privacy" className="hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-white transition-colors">
                                    Terms of Use
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-white transition-colors">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                    <span>© {new Date().getFullYear()} 180 Degrees Consulting UoBD</span>
                    <span>Part of the 180 Degrees Consulting Global Network</span>
                </div>
            </div>
        </footer>
    );
}
