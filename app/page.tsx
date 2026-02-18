"use client";
// ^ Even though page.tsx is a Server Component usually, we might need client features or just keep it simple. 
// Actually, let's keep it Server Component if possible, but our components are client.
// Layout wraps it.

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TargetClients from "@/components/TargetClients";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TargetClients />
      <About />
      <Services />
      <Vision />
      <Footer />
    </main>
  );
}
