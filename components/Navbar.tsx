import Link from "next/link";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[var(--border)] bg-[rgba(13,13,11,0.82)] backdrop-blur-xl">
      <nav className="container flex h-16 items-center justify-between text-sm">
      <Link href="/" className="flex items-center gap-3">
        <Logo className="h-7 w-7" />
        <span className="text-sm font-medium tracking-tight">
          João Francisco Reis
        </span>
      </Link>

        <div className="hidden gap-6 text-[var(--muted)] sm:flex">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}