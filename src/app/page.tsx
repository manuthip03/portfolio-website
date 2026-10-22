import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";

export default function HomePage() {
  return (
    <>
      <Navbar />
      {/* Lets keyboard users skip the nav. Visible only when focused. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-accent-contrast"
      >
        Skip to content
      </a>
      <main id="main" className="flex-1">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
