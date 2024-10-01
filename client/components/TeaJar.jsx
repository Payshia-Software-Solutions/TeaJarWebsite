import React from "react";
import ImageCard from "@/components/Common/ImageCard";
import { Italiana, Julius_Sans_One } from "next/font/google";

const italiana = Italiana({
  weight: "400", // Italiana only comes with regular weight (400)
  subsets: ["latin"],
});
const juliusSansOne = Julius_Sans_One({
  weight: "400", // Julius Sans One only has a regular weight
  subsets: ["latin"],
});

function TeaJar() {
  return (
    <section className="mb-0">
      <div className="bg-navC">
        <div className="pb-6">
          <img
            src="/assets/images/home/tea-jar.png"
            className="w-full object-cover"
            alt=""
          />
        </div>

        <div className="text-center text-white p-10 container">
          <div className={juliusSansOne.className}>
            <p className=" font-normal text-[20px] text-center  leading-8 mt-4 ">
              Tea Jar Lounge in Ratnapura offers a cozy retreat for tea lovers,
              serving a wide range of premium Ceylon teas in a relaxing
              ambiance. Enjoy handcrafted brews, delicious snacks, and local
              delicacies while surrounded by the serene beauty of Sri Lanka’s
              gem city. Perfect for unwinding with friends or a quiet solo
              escape.
            </p>
          </div>
          <div className={italiana.className}>
            <h2 className="text-center font-italiana text-[64px] font-normal">
              Tea Jar Lounge
            </h2>
          </div>
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
