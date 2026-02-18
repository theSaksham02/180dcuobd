import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Marquee from "@/components/Marquee";
import ImpactVideo from "@/components/ImpactVideo";
import Testimonials from "@/components/Testimonials";
import Students from "@/components/Students";
import Clients from "@/components/Clients";
import Partners from "@/components/Partners";
import News from "@/components/News";
import CTAGrid from "@/components/CTAGrid";

export default function Home() {
    return (
        <main>
            <Hero />
            <Impact />
            <Marquee />
            <ImpactVideo />
            <Testimonials />
            <Students />
            <Clients />
            <Partners />
            <News />
            <CTAGrid />
        </main>
    );
}
