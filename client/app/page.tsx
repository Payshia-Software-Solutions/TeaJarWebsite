import Image from "next/image";
import Hero from "@/components/Hero";
import TopSellers from "@/components/TopSellers";
import CTA from "@/components/CTA";
import ProductRange from "@/components/ProductRange";

export default function Home() {
  return (
    <div>
      <Hero />
      <TopSellers />
      <CTA />
      <ProductRange />
    </div>
  );
}
