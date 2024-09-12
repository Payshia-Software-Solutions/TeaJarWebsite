import React from "react";
import { Italiana, Julius_Sans_One } from "@next/font/google";


const italiana = Italiana({
  weight: "400", // Italiana only comes with regular weight (400)
  subsets: ["latin"],
});

const juliusSansOne = Julius_Sans_One({
  weight: "400", // Julius Sans One only has a regular weight
  subsets: ["latin"],
});


function Outlets() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-[#353D32] py-16">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className={italiana.className}>
            <h2 className=" text-[32px] sm:text-[48px] text-center text-white mb-8 sm:mb-12">
              Outlets
            </h2>
          </div>

          {/* Main Image and Right Side Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full max-w-full">
            {/* Main Image */}
            <div className="flex justify-center">
              <img
                src="/assets/images/outlet/otmain.png"
                alt="Main Outlet"
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>

            {/* Right Side Images */}
            <div className="flex flex-col justify-between">
              <div className="grid grid-cols-3 gap-2 mb-4">
                <img
                  src="/assets/images/outlet/otmain.png"
                  alt="Thumbnail 1"
                  className="rounded-lg object-cover w-full h-auto"
                />
                <img
                  src="/assets/images/outlet/otmain.png"
                  alt="Thumbnail 2"
                  className="rounded-lg object-cover w-full h-auto"
                />
                <img
                  src="/assets/images/outlet/otmain.png"
                  alt="Thumbnail 3"
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>

              {/* Description */}
              <div className="bg-[#4A5243] p-4 sm:p-6 lg:p-8 rounded-lg text-white">
                <div className={italiana.className}>
                  <h3 className=" text-[22px] sm:text-[28px] mb-4">
                    Tea Jar Lounge
                  </h3>
                </div>
                <div className={juliusSansOne.className}>
                  <p className="leading-7 sm:leading-8">
                    Tea Jar Lounge in Ratnapura offers a cozy retreat for tea
                    lovers, serving a wide range of premium Ceylon teas in a
                    relaxing ambiance. Enjoy handcrafted brews, delicious
                    snacks, and local delicacies while surrounded by the serene
                    beauty of Sri Lanka’s gem city. Perfect for unwinding with
                    friends or a quiet solo escape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Outlets;
