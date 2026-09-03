import React from "react";
import Image from "next/image";

const FullScreenLayout = () => {
  return (
    <div className="bg-theme flex flex-col">
      <div className="flex-1 grid grid-cols-3 max-h-full">
        <div className="relative max-h-screen overflow-hidden">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source
              src="./assets/videos/recommendation/video.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="col-span-2 p-8 overflow-y-auto">
          <h1 className="text-4xl font-bold mb-6">Recommended Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg">
              <div className="relative h-48">
                <Image
                  src="/product1.jpg"
                  alt="Product 1"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">Product 1</h3>
                <p className="text-gray-600">Description of Product 1</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg">
              <div className="relative h-48">
                <Image
                  src="/product2.jpg"
                  alt="Product 2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">Product 2</h3>
                <p className="text-gray-600">Description of Product 2</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg">
              <div className="relative h-48">
                <Image
                  src="/product3.jpg"
                  alt="Product 3"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">Product 3</h3>
                <p className="text-gray-600">Description of Product 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenLayout;
