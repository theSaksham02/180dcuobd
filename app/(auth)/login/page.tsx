"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
            <div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-100 p-8 md:p-10">

                {/* Logo */}
                <Link href="/" className="block mb-10">
                    <div className="relative h-10 w-40">
                        <Image src="/trans-logo.png" alt="180DC UoBD" fill className="object-contain object-left" />
                    </div>
                </Link>

                <h1 className="text-2xl font-bold text-[#1a1a1a] mb-1">Sign in</h1>
                <p className="text-gray-500 text-sm mb-8">Access your consultant portal.</p>

                <form className="space-y-5">
                    <Input label="Email" type="email" placeholder="name@180dc.org" />
                    <Input label="Password" type="password" placeholder="••••••••" />

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 text-gray-500 cursor-pointer">
                            <input type="checkbox" className="accent-[#73B744] w-3.5 h-3.5" />
                            Remember me
                        </label>
                        <a href="#" className="text-gray-500 hover:text-[#73B744] transition-colors">Forgot password?</a>
                    </div>

                    <Button className="w-full h-12 text-base mt-2 rounded-md">
                        Sign In
                    </Button>
                </form>

                <p className="mt-8 text-sm text-gray-500 text-center">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="text-[#73B744] hover:text-[#5a9636] transition-colors font-semibold">
                        Create one
                    </Link>
                </p>
            </div>
        </div>
    );
}
