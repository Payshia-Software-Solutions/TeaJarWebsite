import React from "react";

function Outlets() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-[#353D32] py-16">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-italiana text-[32px] sm:text-[48px] text-center text-white mb-8 sm:mb-12">
            Outlets
          </h2>

          {/* Main Image and Right Side Images */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 w-full max-w-[1024px]">
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
                <h3 className="font-italiana text-[22px] sm:text-[28px] mb-4">
                  Tea Jar Lounge
                </h3>
                <p className="leading-7 sm:leading-8">
                  Tea Jar Lounge in Ratnapura offers a cozy retreat for tea
                  lovers, serving a wide range of premium Ceylon teas in a
                  relaxing ambiance. Enjoy handcrafted brews, delicious snacks,
                  and local delicacies while surrounded by the serene beauty of
                  Sri Lanka’s gem city. Perfect for unwinding with friends or a
                  quiet solo escape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Outlets;
