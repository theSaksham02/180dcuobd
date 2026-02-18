import Link from 'next/link';
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#020202] text-gray-400 py-16 border-t border-white/5 relative z-10">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 max-w-6xl text-sm">
                <div className="space-y-4">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative w-32 h-8">
                            <Image
                                src="/trans-logo.png"
                                alt="180DC Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                    </Link>
                    <p className="leading-relaxed text-gray-500 mt-2">
                        University of Birmingham Dubai Branch.
                        <br />
                        Building the next generation of social impact leaders.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 text-base">Explore</h4>
                    <ul className="space-y-3">
                        <li><Link href="#about" className="hover:text-white transition-colors">Mission</Link></li>
                        <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
                        <li><Link href="#vision" className="hover:text-white transition-colors">Vision</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 text-base">Legal</h4>
                    <ul className="space-y-3">
                        <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 text-base">Connect</h4>
                    <ul className="space-y-3">
                        <li><a href="mailto:dubai@180dc.org" className="hover:text-white transition-colors">Email Us</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
                &copy; {new Date().getFullYear()} 180 Degrees Consulting UoBD. All rights reserved.
            </div>
        </footer>
    );
}
