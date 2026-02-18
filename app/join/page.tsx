"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { UploadCloud } from "lucide-react";

export default function JoinPage() {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 bg-gray-50">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold font-display text-gray-900 mb-4">Student Recruitment</h1>
                    <p className="text-gray-600 text-lg">Apply to become a consultant for the upcoming cycle.</p>
                </div>

                <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">
                    <form className="space-y-8">
                        {/* Section 1: Personal Details */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-[#73B744] border-b border-gray-100 pb-2">Personal Details</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <Input label="Full Name" placeholder="John Doe" />
                                <Input label="University Email" placeholder="j.doe@student.bham.ac.uk" />
                                <Input label="Phone Number" placeholder="+971 50 123 4567" />
                                <Input label="Major / Course" placeholder="Computer Science" />
                            </div>
                        </div>

                        {/* Section 2: Motivation */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-[#73B744] border-b border-gray-100 pb-2">Application Questions</h3>
                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Why do you want to join 180DC?</label>
                                    <textarea className="w-full h-32 rounded-xl border border-gray-200 p-4 text-sm focus:ring-2 focus:ring-[#73B744] focus:outline-none focus:border-transparent transition-all" placeholder="Tell us about your motivation..." />
                                </div>
                                <Input label="LinkedIn Profile URL" placeholder="https://linkedin.com/in/..." />
                            </div>
                        </div>

                        {/* Section 3: CV Upload */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-[#73B744] border-b border-gray-100 pb-2">Resume / CV</h3>
                            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-[#73B744] hover:bg-green-50/50 transition-colors cursor-pointer group">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white group-hover:text-[#73B744] transition-colors">
                                    <UploadCloud className="w-6 h-6 text-gray-400 group-hover:text-[#73B744]" />
                                </div>
                                <p className="text-sm text-gray-600 font-medium">Click to upload or drag and drop</p>
                                <p className="text-xs text-gray-400 mt-1">PDF only (Max 5MB)</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button className="w-full py-4 text-lg">Submit Application</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
