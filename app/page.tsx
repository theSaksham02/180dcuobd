"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Impact from "@/components/Impact";
import WhatWeDo from "@/components/WhatWeDo";
import ConsultingModel from "@/components/ConsultingModel";
import SelectionCriteria from "@/components/SelectionCriteria"; // NEW
import Governance from "@/components/Governance"; // NEW
import Roadmap from "@/components/Roadmap"; // NEW
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

// CTA Component (ReadyToPartner) added inline or imported if complex
import { ArrowRight } from "lucide-react";

function CTA() {
  return (
    <section className="py-32 bg-[#73B744] text-[#0B0F19]">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Ready to Scale Your Impact?</h2>
        <p className="text-xl font-medium mb-10 max-w-2xl mx-auto opacity-90">
          Partner with the world's most capable student consultants. Applications for the next cycle are now open.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/hire-us" className="bg-[#0B0F19] text-white px-8 py-4 rounded-sm font-bold hover:bg-gray-900 transition-all flex items-center justify-center gap-2">
            Partner With Us <ArrowRight className="w-5 h-5" />
          </a>
          <a href="/join" className="bg-white text-[#0B0F19] px-8 py-4 rounded-sm font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
            Consultant Applications
          </a>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19]">
      <Navbar />
      <Hero />
      <Mission />
      <Impact />
      <WhatWeDo />
      <ConsultingModel />
      <SelectionCriteria /> {/* Rigor */}
      <Governance /> {/* Oversight */}
      <Roadmap /> {/* Vision */}
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
