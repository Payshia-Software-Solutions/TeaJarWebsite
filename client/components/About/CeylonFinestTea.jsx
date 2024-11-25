"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const CeylonFinestTea = () => {
  return (
    <div className="bg-green-50 min-h-screen md:h-screen flex items-center ">
      <section className="flex flex-col-reverse md:flex-row items-center mx-auto w-full  h-full overflow-hidden">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 w-full px-4 py-8 md:px-12 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-green-800 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            CEYLON’S FINEST TEA
          </motion.h2>
          <motion.h3
            className="text-base md:text-lg font-semibold text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Mastering the Art of World Renowned, Single Origin Ceylon Tea Since
            1978
          </motion.h3>

          {/* Description */}
          <motion.div
            className="max-w-screen-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-sm md:text-base text-gray-800 mb-4 leading-relaxed">
              Tea Jar possesses unique and specific characteristics of quality
              and taste which are attributed by the passion and provenance of
              the unique manufacturing practices, that have been mastered over
              the years, infused with contemporary creativity and imagination to
              satisfy the most devoted tea lovers.
            </p>
            <p className="text-sm md:text-base text-gray-800 leading-relaxed">
              From harvesting the freshest bud along with its two leaves, to
              withering, rolling, drying, sorting, and packing, we take utmost
              care in conducting the entire process in line with international
              standards of quality and hygiene. Over the years, the reputation
              of "Tea Jar" has grown tremendously due to the consistency in
              quality, and the eminence in the richly aromatic and flavourful
              characters, being the obvious certainty in the journey of our
              success.
            </p>
          </motion.div>

          {/* Certification Logo */}
          <motion.div
            className="mt-6 flex justify-center md:justify-start"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Image
              src="/assets/about/ceylon-tea-logo.png"
              alt="Ceylon Tea Symbol of Quality"
              width={100}
              height={50}
            />
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center bg-slate-900 h-[400px] md:h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="w-full h-[full] relative">
            <Image
              src="/assets/about/ceylon-finest-tea.jpg"
              alt="Tea bag over a cup of tea"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CeylonFinestTea;
