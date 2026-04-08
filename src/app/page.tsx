import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Features from "@/components/Features";
import WhyUs from "@/components/WhyUs";
import Audience from "@/components/Audience";
import Waitlist from "@/components/Waitlist";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <WhyUs />
        <Audience />
        <Waitlist />
        <About />
      </main>
      <Footer />
    </>
  );
}
