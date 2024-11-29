"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function DeelakaMessage() {
  return (
    <div className="bg-green-50 min-h-screen md:h-screen flex items-center ">
      <section className="flex flex-col-reverse md:flex-row items-center mx-auto w-full  h-full overflow-hidden">
        {/* Left Content */}
        <motion.div
          className="md:w-2/3 w-full px-4 py-8 md:px-12 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Description */}
          <motion.div
            className="max-w-screen-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h1 className="text-[25px] md:text-[40px] mb-4">
              Managing Director's Message
            </h1>
            <p className="text-sm md:text-lg mb-4 leading-relaxed">
              Under my leadership as Managing Director of KDU Group, Tea Jar has
              evolved into a brand that seamlessly blends tradition with
              modernity. Building on the strong foundation laid by my father, I
              have envisioned Tea Jar as a global ambassador for Ceylon tea,
              delivering premium-quality blends to discerning tea lovers across
              the world.
            </p>

            <p className="text-sm md:text-lg mb-4  leading-relaxed">
              With deep roots in Sri Lanka, Tea Jar operates as a local treasure
              and an international icon. Our boutiques in Ella and at the
              DoubleTree by Hilton Weerawila Rajawarana Resort offer
              personalized tea experiences, while our lounges in Ratnapura and
              Colombo create spaces where guests can immerse themselves in the
              culture of Ceylon tea. On the global stage, Tea Jar’s reach
              extends to markets in the USA, UK, UAE, Russia, China, and beyond.
            </p>

            <p className="text-sm md:text-lg leading-relaxed">
              Our success lies in our dedication to authenticity,
              sustainability, and innovation. By combining centuries-old tea
              traditions with cutting-edge production techniques and
              eco-friendly practices, we ensure that every cup of Tea Jar tea is
              exceptional.
            </p>
            <p className="text-sm md:text-lg leading-relaxed">
              Looking ahead, my vision for Tea Jar is to solidify its position
              as a global brand synonymous with luxury, quality, and heritage.
              Through innovation, strategic partnerships, and unwavering
              commitment, we aim to make Tea Jar the go-to choice for tea
              connoisseurs worldwide.
            </p>
            <p className="text-sm md:text-lg leading-relaxed mt-8">
              <div className="flex justify-center md:justify-start">
                <Image
                  src={`/assets/about/deelaka-sign.png`}
                  width={100}
                  height={100}
                  alt="Chairman Signature"
                />
              </div>
              With gratitude and determination,
              <br />
              Deelaka Upasena <br />
              Tea Taster
            </p>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/3 w-full flex justify-center h-[800px] md:h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="w-full h-[full] relative">
            <Image
              src="/assets/about/deelaka_nbg.png"
              alt="Photo of Deelaka Upasena"
              layout="fill"
              objectFit="cover"
              className="w-full object-top"
              priority={true}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default DeelakaMessage;
