"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-[#050505]">

            {/* Background Blobs */}
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] animate-blob" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />

            <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left: Login Form */}
                <div className="bg-[#111]/80 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
                    <div className="mb-8 text-center">
                        <div className="w-12 h-12 bg-white/5 rounded-xl mx-auto flex items-center justify-center text-green-500 font-bold mb-4 shadow-lg shadow-green-900/20 border border-white/5">
                            180
                        </div>
                        <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
                        <p className="text-gray-400 mt-2">Sign in to your consultant portal</p>
                    </div>

                    <form className="space-y-5">
                        <Input label="Email Address" type="email" placeholder="name@180dc.org" />
                        <Input label="Password" type="password" placeholder="••••••••" />

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-gray-400">
                                <input type="checkbox" className="rounded border-gray-600 bg-white/5 text-[#73B744] focus:ring-[#73B744]" />
                                Remember me
                            </label>
                            <a href="#" className="font-semibold text-[#73B744] hover:text-[#a3e635]">Forgot password?</a>
                        </div>

                        <Button className="w-full h-12 text-lg shadow-xl shadow-green-900/20 font-bold">
                            Sign In
                        </Button>
                    </form>

                    <div className="mt-8 text-center text-sm text-gray-400">
                        Don't have an account? <Link href="/signup" className="font-bold text-[#73B744] hover:text-[#a3e635]">Apply to Join</Link>
                    </div>
                </div>

                {/* Right: Feature/Info (Hidden on mobile) */}
                <div className="hidden lg:block space-y-8">
                    <h2 className="text-4xl font-bold font-display text-white leading-tight">
                        Empowering the Next Generation of <span className="text-[#73B744]">Social Impact Leaders.</span>
                    </h2>
                    <div className="space-y-4">
                        {[
                            "Access exclusive training resources",
                            "Track project milestones",
                            "Connect with global alumni"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shadow-sm border border-white/5">
                                    <CheckCircle2 className="w-5 h-5 text-[#73B744]" />
                                </div>
                                <span className="text-lg text-gray-300 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
