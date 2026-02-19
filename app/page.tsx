import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Marquee from "@/components/Marquee";
import ImpactVideo from "@/components/ImpactVideo";
import Testimonials from "@/components/Testimonials";
import Students from "@/components/Students";
import Clients from "@/components/Clients";
import Partners from "@/components/Partners";
import News from "@/components/News";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Impact />
            <Marquee />
            <ImpactVideo />
            <Testimonials />
            <Students />
            <Clients />
            <Partners />
            <News />
            <Footer />
        </main>
    );
}
