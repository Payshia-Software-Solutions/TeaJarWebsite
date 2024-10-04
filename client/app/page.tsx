import Image from "next/image";
import Hero from "@/components/Hero";
import TopSellers from "@/components/TopSellers";
import CTA from "@/components/CTA";
import ProductRange from "@/components/ProductRange";
import About from "@/components/About/About";
import FinestCeylonTea from "@/components/FinestCeylonTea";
import Outlet from "@/components/Outlets";
import Commentcard from "@/components/CommentCard/Commentcard";
import Happycustormer from "@/components/Happycustormer";
import TeaJar from "@/components/TeaJar";
import ImageCard from "@/components/Common/ImageCard";
import ItemCard from "@/components/Shop/ItemCard";
import Shop from "@/components/Shop/Shop";
import SideBar from "@/components/Shop/SideBar";
import Test from "@/components/Test";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <TopSellers />
      <FinestCeylonTea />
      <Outlet />
      <Happycustormer />
    </div>
  );
}
