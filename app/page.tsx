import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { WorkTabs } from "@/components/WorkTabs";

import photo1 from "@/public/photos/P6186218.jpg";
import photo2 from "@/public/photos/P6206228.jpg";
import photo3 from "@/public/photos/P6206233.jpg";
import photo4 from "@/public/photos/P6216106_01.jpg";
import photo5 from "@/public/photos/P6216341.jpg";
import photo6 from "@/public/photos/P6236107_01.jpg";
import photo7 from "@/public/photos/P6250040_01.jpg";
import photo8 from "@/public/photos/P6250124.jpg";
import photo9 from "@/public/photos/P6270217_01.jpg";
import photo10 from "@/public/photos/P6270279_01.jpg";
import photo11 from "@/public/photos/P6270317.jpg";
import photo12 from "@/public/photos/P6270372.jpg";
import photo13 from "@/public/photos/P6300376.jpg";
import photo14 from "@/public/photos/P6300402.jpg";
import photo15 from "@/public/photos/P6300417_01.jpg";
import photo16 from "@/public/photos/P7070545.jpg";
import photo17 from "@/public/photos/P7070576_01.jpg";
import photo18 from "@/public/photos/P7100617.jpg";
import photo19 from "@/public/photos/P7100773_01.jpg";
import photo20 from "@/public/photos/P7100777_01.jpg";

const photographyImages = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo19,
  photo20,
];

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WorkTabs photographyImages={photographyImages} />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}