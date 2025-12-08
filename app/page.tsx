import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function HomePage() {
  return (
    <div id="home" className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main>
        <div className="min-h-screen flex flex-col justify-center">
          <Hero />
          <About />
        </div>
        <div className="min-h-screen flex flex-col justify-center">
          <Skills />
          <Projects />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
