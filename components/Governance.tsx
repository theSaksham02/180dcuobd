"use client";

import { Building2, ShieldCheck, Users } from "lucide-react";

export default function Governance() {
    return (
        <section className="py-24 bg-[#080B14] border-t border-white/5">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-sm font-bold text-[#73B744] uppercase tracking-widest mb-6">Governance & Oversight</h2>
                        <h3 className="text-3xl md:text-4xl font-display font-medium text-white mb-6">
                            Structured Institutional Accountability.
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            180 Degrees Consulting UoBD operates under a strict three-tier governance model, ensuring professional fidelity, ethical alignment, and strategic continuity. We are not just a student body; we are a supervised advisory unit.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <ShieldCheck className="w-6 h-6 text-[#73B744] flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-bold">Faculty Advisory Board</h4>
                                    <p className="text-sm text-gray-500">Oversight from UoB Dubai Business School leadership.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Building2 className="w-6 h-6 text-[#73B744] flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-bold">Global 180DC Compliance</h4>
                                    <p className="text-sm text-gray-500">Adherence to international consulting standards & ethics.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Users className="w-6 h-6 text-[#73B744] flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-bold">Executive Council</h4>
                                    <p className="text-sm text-gray-500">Selected leadership team with verified industry experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#111827] border border-white/5 p-8 rounded-sm">
                        <h4 className="text-xl font-display font-medium text-white mb-6">Faculty Advisors</h4>
                        <div className="space-y-4">
                            <div className="pb-4 border-b border-white/5">
                                <div className="text-white font-bold">Dr. Humaid Al-Shamsi</div>
                                <div className="text-[#73B744] text-xs uppercase tracking-wide">Associate Professor of Strategy</div>
                            </div>
                            <div className="pb-4 border-b border-white/5">
                                <div className="text-white font-bold">Prof. Sarah Jenkins</div>
                                <div className="text-[#73B744] text-xs uppercase tracking-wide">Head of Social Enterprise Lab</div>
                            </div>
                            <div className="pb-4 border-b border-white/5">
                                <div className="text-white font-bold">Dr. Amina Khalil</div>
                                <div className="text-[#73B744] text-xs uppercase tracking-wide">Director of External Relations</div>
                            </div>
                            <div className="pt-2">
                                <span className="text-gray-500 text-xs uppercase tracking-widest">
                                    * Advisors provide quarterly strategic review.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
