"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TeaJarSection = () => {
  return (
    <div className="bg-beige text-brown h-screen flex items-center">
      <section className="flex flex-col md:flex-row items-center mx-auto w-full h-full overflow-hidden">
        {/* Left Image */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center h-1/2 md:h-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full h-full relative">
            <Image
              src="/assets/about/tea-jar-story-side.webp"
              alt="Woman holding a cup of tea"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="md:w-1/2 w-full px-4 py-8 md:px-12 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/assets/gold-logo.png"
              alt="Tea Jar Logo"
              className=""
              width={250}
              height={240}
            />
          </motion.div>

          {/* Description */}
          <motion.div
            className="max-w-screen-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-sm md:text-lg mb-4 leading-relaxed">
              Sri Lanka's iconic Ceylon tea, gifted from generation to
              generation. Two of the freshest leaves and bud are handpicked and
              manufactured at the state-of-the-art tea factories in Sri Lanka.
            </p>
            <p className="text-sm md:text-lg leading-relaxed">
              Tea Jar, which was founded in 1978, produces some of the finest
              Ceylon tea to date. Ranging from the simplest black tea to the
              most renowned flavours, we offer a wide variety of elixirs to suit
              tea lovers across the globe.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default TeaJarSection;
