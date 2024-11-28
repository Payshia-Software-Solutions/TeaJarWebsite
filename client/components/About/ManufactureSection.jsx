"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ManufactureSection = () => {
  return (
    <div className="bg-[#ede5df] min-h-screen md:h-screen flex items-center">
      <section className="flex flex-col-reverse md:flex-row items-center mx-auto w-full h-full overflow-hidden">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 w-full px-4 py-8 md:px-12 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Description */}
          <motion.div
            className="max-w-screen-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-sm md:text-base text-gray-800 mb-4 leading-relaxed">
              Tea remains the primary focus of the entire group, with nine
              state-of-the-art factories in the Sabaragamuwa Province
              contributing to 12 million kilograms of premium quality tea per
              year. The company produces 6% of the country’s low grown tea
              production, and nearly 4% of the national tea production. The
              Company maintains high quality standards and are certified with
              Ethical Tea Partnership, HACCP Food Safety Standard, ISO 22000 and
              Rainforest Alliance. Retaining the highest sales achievements at
              the Colombo Tea Auction for a period of 45 years, it has received
              international certifications, including CQC 2 Star Award by the
              Sri Lankan Tea Board.
            </p>
          </motion.div>

          <motion.div
            className="mt-6 space-y-4 "
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Bottom Row - Image */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/assets/tea-partnership.jpeg"
                alt="Ceylon Tea Symbol of Quality"
                width={400}
                height={50}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        {/* Right Image */}
        <motion.div
          className="flex flex-col h-screen relative md:w-1/2 w-full"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Top Row - Text Content */}
          <div className="flex items-center justify-center h-[50vh] bg-[#4480ae] z-10">
            <p className="text-center uppercase text-[30px] md:text-[50px] text-white mx-5 md:mx-28 leading-[50px]">
              Over 45 Years Experience in Tea Manufacturing
            </p>
          </div>

          {/* Bottom Row - Full Cover Image */}
          <div className="h-[50vh] w-full absolute bottom-0 left-0">
            <Image
              src="/assets/tea-factory.jpeg"
              alt="Ceylon Tea Symbol of Quality"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ManufactureSection;
