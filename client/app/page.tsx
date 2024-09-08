import Image from "next/image";
import Hero from "@/components/Hero";
import TopSellers from "@/components/TopSellers";
import CTA from "@/components/CTA";
import ProductRange from "@/components/ProductRange";
import About from "@/components/About/About";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
    </div>
  );
}
