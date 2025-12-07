import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main>
        <div className="min-h-screen flex flex-col justify-center">
          <Hero />
          <About />
        </div>
      </main>
    </div>
  );
}
