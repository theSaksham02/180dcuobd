"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#0B0F19]">
            <div className="w-full max-w-md">

                {/* Logo */}
                <Link href="/" className="block mb-12">
                    <div className="relative h-10 w-40">
                        <Image src="/trans-logo.png" alt="180DC UoBD" fill className="object-contain object-left" />
                    </div>
                </Link>

                <h1 className="text-3xl font-semibold text-white mb-2">Sign in</h1>
                <p className="text-gray-500 text-sm mb-10">Access your consultant portal.</p>

                <form className="space-y-5">
                    <Input label="Email" type="email" placeholder="name@180dc.org" />
                    <Input label="Password" type="password" placeholder="••••••••" />

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 text-gray-500 cursor-pointer">
                            <input type="checkbox" className="border-white/10 bg-white/5 accent-white w-3.5 h-3.5" />
                            Remember me
                        </label>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Forgot password?</a>
                    </div>

                    <Button className="w-full h-12 text-base mt-2">
                        Sign In
                    </Button>
                </form>

                <p className="mt-10 text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-white hover:text-gray-300 transition-colors font-semibold">
                        Create one
                    </Link>
                </p>
            </div>
        </div>
    );
}
