"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatWeDo from "@/components/WhatWeDo";
import ConsultingModel from "@/components/ConsultingModel";
import WhyUs from "@/components/WhyUs";
import Link from "next/link"; // Added missing import

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <ConsultingModel />
      <WhyUs />
      {/* Reusing existing components for now where appropriate */}
      <Footer />
    </main>
  );
}
