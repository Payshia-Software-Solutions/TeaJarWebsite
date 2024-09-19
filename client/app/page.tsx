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
import ItemCard from "@/components/Common/ItemCard"
import Shop from "@/components/Shop"
import SideBar from "@/components/SideBar";
import SingleItem from "@/components/SingleItem";


export default function Home() {
  return (
    <div>
      <Hero />

      <About />
      <TopSellers />
      <FinestCeylonTea />
      <Outlet />
      <Happycustormer />
      <SingleItem />
    </div>
  );
}
