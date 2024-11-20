import Image from "next/image";
import Hero from "@/components/Hero";
import TopSellers from "@/components/TopSellers";
import CTA from "@/components/CTA";
import ProductRange from "@/components/ProductRange";
import About from "@/components/About/About";
import FinestCeylonTea from "@/components/FinestCeylonTea";
import Outlet from "@/components/Outlets";
import MiniWording from "@/components/Common/MiniWording";
import Subscribe from "@/components/Common/Subscribe";
import DiscountModel from "@/components/Common/DiscountModel";
import FAQ from "@/components/Common/FAQ";
import SectionHeader from "@/components/Common/SectionHeader";
import RecommendedCategories from "@/components/Recommendation/RecommendedCategories";

export default function Home() {
  return (
    <div>
      {/* <DiscountModel /> */}
      <Hero />
      <About />
      <TopSellers />
      <FinestCeylonTea />

      {/* Start of the Recommendation */}
      <section className="bg-theme py-16">
        <div className="container mx-auto">
          <div className="px-8 py-4 sm:px-6">
            <SectionHeader
              sectionTitle="Recommended Categories"
              sectionHighlight={""}
            />
            <RecommendedCategories />
          </div>
        </div>
      </section>
      {/* End of the Recommendation */}

      <Outlet />
      <MiniWording />
      <FAQ />
      <Subscribe />
    </div>
  );
}
