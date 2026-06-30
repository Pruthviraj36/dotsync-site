import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CtaFooter from "@/components/CtaFooter";

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed inset-0 -z-10 bg-grid" />
      <Nav />
      <Hero />
      <TrustStrip />
      <Features />
      <HowItWorks />
      <CtaFooter />
    </main>
  );
}
