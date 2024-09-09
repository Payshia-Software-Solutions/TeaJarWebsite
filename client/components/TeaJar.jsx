import React from "react";
import ImageCard from "@/components/Common/ImageCard";

function TeaJar() {
  return (
    <section className="mb-0">
      <div className="bg-navC">
        <div className="py-6">
          <img
            src="/assets/images/home/tea-jar.png"
            className="w-full object-cover"
            alt=""
          />
        </div>

        <div className="text-center text-white p-10 container">
          <p className="font-julius font-normal text-[20px] text-center ">
            Tea Jar Lounge in Ratnapura offers a cozy retreat for tea lovers,
            serving a wide range of premium Ceylon teas in a relaxing ambiance.
            Enjoy handcrafted brews, delicious snacks, and local delicacies
            while surrounded by the serene beauty of Sri Lanka’s gem city.
            Perfect for unwinding with friends or a quiet solo escape.
          </p>

          <h2 className="text-center font-italiana text-[64px] font-normal">
            Tea Jar Lounge
          </h2>
        </div>
      </div>

      {/*images group */}
      <div className="bg-babout">
        <div className="p-10 flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center p-4">
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeaJar;
