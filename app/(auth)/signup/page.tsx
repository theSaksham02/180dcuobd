"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SignupPage() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gray-50">
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-green-200/30 rounded-full blur-[80px] animate-blob" />

            <div className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-white p-8 md:p-10 rounded-3xl shadow-2xl relative z-10">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
                    <p className="text-gray-500 mt-2">Join the University of Birmingham Dubai branch.</p>
                </div>

                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <Input label="First Name" placeholder="Jane" />
                        <Input label="Last Name" placeholder="Doe" />
                    </div>
                    <Input label="Student Email" type="email" placeholder="j.doe@student.bham.ac.uk" />
                    <Input label="Student ID" placeholder="1234567" />
                    <Input label="Password" type="password" placeholder="••••••••" />

                    <div className="text-xs text-gray-500 leading-relaxed">
                        By creating an account, you agree to our <Link href="/terms" className="text-[#73B744] underline">Terms</Link> and <Link href="/privacy" className="text-[#73B744] underline">Privacy Policy</Link>.
                    </div>

                    <Button className="w-full h-12 text-lg mt-2">
                        Create Account <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    Already a member? <Link href="/login" className="font-bold text-[#73B744] hover:underline">Log In</Link>
                </div>
            </div>
        </div>
    );
}
