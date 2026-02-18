"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"; // Added Hero import
import WhatWeDo from "@/components/WhatWeDo";
import ConsultingModel from "@/components/ConsultingModel";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";

// Reusing Vision for now as it fits the layout flow, 
// can be renamed to Impact/CTA later if needed.
import Vision from "@/components/Vision";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <ConsultingModel />
      <WhyUs />
      <Vision />
      <Footer />
    </main>
  );
}
