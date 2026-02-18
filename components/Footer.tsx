"use client";

import Link from 'next/link';
import Image from "next/image";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#05080F] text-gray-400 py-20 border-t border-white/5 relative z-10">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 max-w-7xl">

                {/* Brand Column */}
                <div className="space-y-6">
                    <Link href="/" className="block relative w-40 h-10">
                        <Image
                            src="/trans-logo.png"
                            alt="180DC Logo"
                            fill
                            className="object-contain object-left"
                        />
                    </Link>
                    <p className="leading-relaxed text-gray-500 text-sm max-w-xs">
                        The world’s largest university-based branch consulting strategy.
                        Building the next generation of social impact leaders.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://linkedin.com" target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-[#73B744] hover:text-white transition-all">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="mailto:dubai@180dc.org" className="p-2 bg-white/5 rounded-full hover:bg-[#73B744] hover:text-white transition-all">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Sitemap */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
                    <ul className="space-y-4 text-sm">
                        <li><Link href="/#about" className="hover:text-white transition-colors">Our Mission</Link></li>
                        <li><Link href="/our-model" className="hover:text-white transition-colors">Consulting Model</Link></li>
                        <li><Link href="/our-work" className="hover:text-white transition-colors">Our Work</Link></li>
                        <li><Link href="/team" className="hover:text-white transition-colors">Leadership</Link></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Resources</h4>
                    <ul className="space-y-4 text-sm">
                        <li><Link href="/insights" className="hover:text-white transition-colors">Insights</Link></li>
                        <li><span className="text-gray-600 cursor-not-allowed">Impact Report 2025 (Coming Soon)</span></li>
                        <li><Link href="/join" className="hover:text-white transition-colors">Analyst Application</Link></li>
                        <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>

                {/* Contact / CTA */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Partner</h4>
                    <p className="text-sm mb-6">Ready to scale your impact? Let's discuss your strategic needs.</p>
                    <Link href="/hire-us" className="inline-flex items-center gap-2 text-[#73B744] font-bold hover:text-white transition-colors group">
                        Start a Project <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
                <span>&copy; {new Date().getFullYear()} 180 Degrees Consulting UoBD.</span>
                <span>Part of the Global 180 Degrees Consulting Network.</span>
            </div>
        </footer>
    );
}
