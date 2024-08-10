import React from "react";
import ProductRangeCard from "@/components/Product/ProductRangeCard";
import SectionHeader from "@/components/Common/SectionHeader";

function ProductRange() {
  return (
    <section className="relative transition-all duration-500 lg:min-h-screen lg:flex lg:items-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#393c23] via-green-700 to-[#393c23] bg-cover bg-center">
      <video
        className={`absolute inset-0 w-full h-screen lg:h-full object-cover transition-all duration-500 ease-in-out`}
        src="/assets/videos/clip-3.mp4" // Replace with the path to your video file
        autoPlay
        loop
        muted
      ></video>
      {/* Green shading overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#1d1f11] via-green-900 to-[#1d1f11] opacity-50"></div>

      <div className="relative mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          sectionTitle="Our Range"
          textColor="white"
          sectionHighlight="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum similique quos fugit nobis labore est voluptate in aliquam voluptates quod nulla, odio repudiandae fugiat, alias eos consectetur, repellendus exercitationem earum!"
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-8 mt-16 pl-8 lg:pl-0">
          <ProductRangeCard
            coverImg="/assets/products/1/apple.jpg"
            rangeName="Flavoured"
          />

          <ProductRangeCard
            coverImg="/assets/products/1/apple.jpg"
            rangeName="Exceptional"
          />

          <ProductRangeCard
            coverImg="/assets/products/1/apple.jpg"
            rangeName="Gift"
          />

          <ProductRangeCard
            coverImg="/assets/products/1/apple.jpg"
            rangeName="Tea Ware"
          />
        </div>
      </div>
    </section>
  );
}

export default ProductRange;
