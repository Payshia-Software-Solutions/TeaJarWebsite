import Image from "next/image";
import Hero from "@/components/Hero";
import TopSellers from "@/components/TopSellers";

export default function Home() {
  return (
    <div>
      <Hero />
      <TopSellers />
    </div>
  );
}
