"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function SamansMessage() {
  return (
    <div className="bg-beige text-brown min-h-screen md:h-screen flex items-center">
      <section className="flex flex-col md:flex-row items-center mx-auto w-full h-full overflow-hidden">
        {/* Left Image */}
        <motion.div
          className="md:w-1/3 w-full flex justify-center h-[800px] md:h-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full h-[full] relative">
            <Image
              src="/assets/about/saman_nbgv1.png"
              alt="Photo of Saman Upasena"
              layout="fill"
              objectFit="cover"
              className="w-full object-top"
              priority={true}
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="md:w-2/3 w-full px-4 py-8 md:px-12 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Description */}
          <motion.div
            className="max-w-screen-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-[25px] md:text-[40px] mb-4">
              Founder's Message
            </h1>
            <p className="text-sm md:text-lg mb-4 leading-relaxed">
              As the founder of Tea Jar and Chairman of KDU Group, I take
              immense pride in the journey that began with a single vision: to
              share the unparalleled richness of Ceylon tea with the world.
              Since 1978, our commitment has been to uphold the legacy of Sri
              Lanka’s tea heritage, ensuring every sip reflects the passion,
              dedication, and authenticity that our family business stands for.
            </p>
            <p className="text-sm md:text-lg mb-4 leading-relaxed">
              Tea Jar is more than just a brand; it is a testament to our
              pursuit of excellence. From our state-of-the-art factories to the
              carefully curated blends that embody the essence of Ceylon, Tea
              Jar showcases our relentless efforts to maintain the highest
              standards. Through Tea Jar, we connect with tea lovers globally
              while preserving the traditions and values that make Ceylon tea
              truly special.
            </p>

            <p className="text-sm md:text-lg leading-relaxed">
              I am grateful to see how Tea Jar has grown into a boutique tea
              brand appreciated locally and internationally, and I remain
              committed to driving innovation while cherishing our roots.
              Together, let us continue to celebrate the artistry and heritage
              of Ceylon tea.
            </p>

            <p className="text-sm md:text-lg leading-relaxed mt-8">
              <div className="flex justify-center md:justify-start">
                <Image
                  src={`/assets/images/chairman-sig.png`}
                  width={100}
                  height={100}
                  alt="Chairman Signature"
                />
              </div>
              Warm regards, <br />
              Saman Upasena <br /> Founder, Tea Taster
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default SamansMessage;
