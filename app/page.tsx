import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { WorkTabs } from "@/components/WorkTabs";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WorkTabs />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}