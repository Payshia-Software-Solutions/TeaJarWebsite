import React from "react";

const content = {
  TeaJarStory:
    "Sri Lanka's iconic Ceylon tea, gifted from generation to generation. Two of the freshest leaves and bud are handpicked and manufactured at the state-of-the-art tea factories in Sri Lanka. Tea Jar, which was founded in 1978, produces some of the finest Ceylon tea to date. Ranging from the simplest black tea to the most renowned flavours, we offer a wide variety of elixirs to suit tea lovers across the globe.",
};

import Image from "next/image";

const KduGroup = () => {
  return (
    <div className="bg-beige text-brown h-screen flex items-center">
      <section className="flex flex-col md:flex-row items-center mx-auto">
        {/* Left Image */}
        <div className="md:w-1/2 flex justify-center bg-slate-900 h-screen">
          <div className="w-full h-full relative">
            <Image
              src="/assets/about/tea-jar-story-side.jpeg"
              alt="Woman holding a cup of tea"
              layout="fill" // Use the `fill` layout to make the image cover the container
              objectFit="cover" // Ensures the image behaves as a background cover
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          {/* Logo */}
          <div className="flex justify-center mb-10">
            <Image
              src="/assets/tea-jar-logo.png"
              alt="Woman holding a cup of tea"
              className="rounded-lg"
              width={200}
              height={400}
            />
          </div>

          <div className="md:px-52">
            {/* Description */}
            <p className="text-lg mb-4 leading-relaxed text-center">
              Sri Lanka's iconic Ceylon tea, gifted from generation to
              generation. Two of the freshest leaves and bud are handpicked and
              manufactured at the state-of-the-art tea factories in Sri Lanka.
            </p>
            <p className="text-lg leading-relaxed text-center">
              Tea Jar, which was founded in 1978, produces some of the finest
              Ceylon tea to date. Ranging from the simplest black tea to the
              most renowned flavours, we offer a wide variety of elixirs to suit
              tea lovers across the globe.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KduGroup;
