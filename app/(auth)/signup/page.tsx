"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#0B0F19]">
            <div className="w-full max-w-md">

                {/* Logo */}
                <Link href="/" className="block mb-12">
                    <div className="relative h-10 w-40">
                        <Image src="/trans-logo.png" alt="180DC UoBD" fill className="object-contain object-left" />
                    </div>
                </Link>

                <h1 className="text-3xl font-semibold text-white mb-2">Create Account</h1>
                <p className="text-gray-500 text-sm mb-10">Apply to join the consulting team.</p>

                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <Input label="First Name" placeholder="Jane" />
                        <Input label="Last Name" placeholder="Doe" />
                    </div>
                    <Input label="University Email" type="email" placeholder="j.doe@student.bham.ac.uk" />
                    <Input label="Student ID" placeholder="1234567" />
                    <Input label="Password" type="password" placeholder="••••••••" />

                    <p className="text-[11px] text-gray-600 leading-relaxed pt-1">
                        By creating an account, you agree to our{" "}
                        <Link href="/terms" className="text-gray-400 underline hover:text-white">Terms</Link> and{" "}
                        <Link href="/privacy" className="text-gray-400 underline hover:text-white">Privacy Policy</Link>.
                    </p>

                    <Button className="w-full h-12 text-base mt-2">
                        Create Account
                    </Button>
                </form>

                <p className="mt-10 text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link href="/login" className="text-white hover:text-gray-300 transition-colors font-semibold">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
