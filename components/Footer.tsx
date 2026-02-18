"use client";

import Link from 'next/link';
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#05080F] text-gray-500 py-20 border-t border-white/5">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 max-w-6xl">

                {/* Brand */}
                <div className="space-y-6">
                    <Link href="/" className="block relative w-40 h-10">
                        <Image
                            src="/trans-logo.png"
                            alt="180DC UoBD"
                            fill
                            className="object-contain object-left"
                        />
                    </Link>
                    <p className="text-sm leading-relaxed max-w-xs">
                        The world's largest university-based consulting institution.
                        Building long-term institutional capital through structured advisory.
                    </p>
                    <div className="flex gap-3">
                        <a href="https://linkedin.com" target="_blank" className="p-2 border border-white/5 hover:border-white/20 transition-colors">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="mailto:dubai@180dc.org" className="p-2 border border-white/5 hover:border-white/20 transition-colors">
                            <Mail className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Institution */}
                <div>
                    <h4 className="text-white font-semibold mb-6 text-[11px] uppercase tracking-[0.2em]">Institution</h4>
                    <ul className="space-y-4 text-sm">
                        <li><Link href="/our-model" className="hover:text-white transition-colors">Engagement Model</Link></li>
                        <li><Link href="/our-work" className="hover:text-white transition-colors">Case Studies</Link></li>
                        <li><Link href="/team" className="hover:text-white transition-colors">Leadership</Link></li>
                        <li><Link href="/insights" className="hover:text-white transition-colors">Insights</Link></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h4 className="text-white font-semibold mb-6 text-[11px] uppercase tracking-[0.2em]">For Consultants</h4>
                    <ul className="space-y-4 text-sm">
                        <li><Link href="/join" className="hover:text-white transition-colors">Application Process</Link></li>
                        <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-semibold mb-6 text-[11px] uppercase tracking-[0.2em]">Partner</h4>
                    <p className="text-sm mb-6 leading-relaxed">
                        Submit a project brief to explore how structured advisory can accelerate your impact.
                    </p>
                    <Link href="/hire-us" className="text-white font-semibold text-sm hover:text-gray-300 transition-colors">
                        Start a Project →
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-700 gap-4 max-w-6xl">
                <span>© {new Date().getFullYear()} 180 Degrees Consulting UoBD</span>
                <span>Part of the 180 Degrees Consulting Global Network</span>
            </div>
        </footer>
    );
}
