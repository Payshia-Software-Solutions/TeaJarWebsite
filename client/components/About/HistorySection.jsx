"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HistorySection = () => {
  return (
    <div className="bg-gray-50 text-gray-800 flex items-center ">
      <section className="flex flex-col md:flex-row items-center mx-auto w-full overflow-hidden">
        {/* Left Content - Image with "Since" Badge */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center bg-gray-200 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full h-64 md:h-screen relative">
            <Image
              src="/assets/about/kdu.jpeg"
              alt="KDU Group Historical Building"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Badge */}
          <motion.div
            className="absolute top-1/2 right-6 -translate-y-1/2 bg-black text-white px-6 py-4 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold">SINCE</h2>
            <div className="text-5xl font-bold">1978</div>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left px-6 md:px-16 mt-6 md:mt-0 mb-6 md:mb-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Logo */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/assets/about/KDU-group.png"
              alt="KDU Group Logo"
              width={120}
              height={120}
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-2xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            HISTORY OF KDU GROUP
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            The KDU Group prides itself on being one of the most successful
            family-owned conglomerates in Sri Lanka. Consisting of 15 thriving
            subsidiaries, including Tea Factories, Hotels and Resorts, Exports,
            Real Estate, Petroleum, and Energy, the tea industry lies at the
            core of our group.
          </motion.p>
          <motion.p
            className="text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            We are now a leading tea manufacturer and exporter, with some of the
            largest cutting-edge factories in Sri Lanka. Over the years, we have
            built a legacy of quality and innovation that has cemented our
            position in the global market.
          </motion.p>

          <div className="flex justify-between items-center w-full mt-5 md:mt-8 lg:mt-10">
            <Image
              src="/assets/about/logos/double-tree.png"
              width={100}
              height={100}
              alt="Double Tree Logo"
              className="h-auto max-w-[15%] object-contain"
            />
            <Image
              src="/assets/about/logos/gsr-logo.png"
              width={100}
              height={100}
              alt="GSR Logo"
              className="h-auto max-w-[15%] object-contain"
            />
            <Image
              src="/assets/about/logos/mimi-hydro.png"
              width={100}
              height={100}
              alt="Mimi Hydro Logo"
              className="h-auto max-w-[15%] object-contain"
            />
            <Image
              src="/assets/about/logos/the-estate.png"
              width={100}
              height={100}
              alt="The Estate Logo"
              className="h-auto max-w-[15%] object-contain"
            />
            <Image
              src="/assets/about/logos/tjl.png"
              width={100}
              height={100}
              alt="TJL Logo"
              className="h-auto max-w-[15%] object-contain"
            />
            <Image
              src="/assets/about/logos/tjbl.png"
              width={100}
              height={100}
              alt="TJBL Logo"
              className="h-auto max-w-[15%] object-contain"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HistorySection;
