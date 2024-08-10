import React from "react";
import ProductRangeCard from "@/components/Product/ProductRangeCard";

import SectionHeader from "@/components/Common/SectionHeader";
function ProductRange() {
  return (
    <section className="transition-all duration-500 lg:min-h-screen lg:flex lg:items-center bg-gray-100">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          sectionTitle="Our Range"
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
