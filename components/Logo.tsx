"use client";

import Lottie from "lottie-react";
import logoAnimation from "@/public/logo.json";

export function Logo() {
  return (
    <a href="#home" className="flex items-center">
      <div className="relative h-15 w-15 hover:scale-[1.1] active:scale-[0.95] transition-transform">
        <Lottie
          animationData={logoAnimation}
          loop
          autoplay
          className="absolute inset-0"
        />

        <div className="absolute inset-0 flex items-center justify-center font-bold tracking-wider text-slate-950 pointer-events-none">
          JR
        </div>
      </div>
    </a>
  );
}
