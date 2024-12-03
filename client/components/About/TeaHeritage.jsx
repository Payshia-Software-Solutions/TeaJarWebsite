"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const TeaHeritage = () => {
  return (
    <div className="bg-yellow-50 min-h-screen  flex items-center">
      <section className="flex flex-col-reverse md:flex-row items-center mx-auto w-full h-full overflow-hidden">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 w-full px-4 py-8 md:px-12 flex flex-col items-center md:items-start text-center md:mt-24 md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-yellow-800 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            CEYLON TEA HERITAGE
          </motion.h2>

          {/* Description */}
          <motion.div
            className="max-w-screen-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-sm md:text-base text-gray-800 mb-4 leading-relaxed">
              Ceylon tea, known for its distinct flavor and aroma, has a rich
              history that dates back to the 19th century. The story of Ceylon
              tea begins with its introduction to Sri Lanka, then known as
              Ceylon, by the British. In 1824, the British brought the first tea
              plant to Ceylon from China and planted it in the Royal Botanical
              Gardens in Peradeniya. However, it wasn't until the disastrous
              coffee blight of the 1860s that tea became a significant crop in
              the region.
            </p>
            <p className="text-sm md:text-base text-gray-800 mb-4 leading-relaxed">
              James Taylor, a Scottish planter, is often credited with
              pioneering the tea industry in Ceylon. In 1867, he established the
              first tea plantation on the Loolecondera estate, laying the
              foundation for what would become one of the world's most renowned
              tea industries. Taylor's innovative techniques in cultivation and
              processing set the standard for tea production in Ceylon.
            </p>
            <p className="text-sm md:text-base text-gray-800 mb-4 leading-relaxed">
              By the late 19th century, the success of Ceylon tea was evident.
              The country began exporting tea to London, and by the early 20th
              century, Ceylon tea had gained international acclaim for its
              superior quality. The island's unique climate and fertile soil,
              particularly in regions like Nuwara Eliya, Kandy, and Uva,
              contribute to the distinctive flavors and characteristics of
              Ceylon tea.
            </p>

            <p className="text-sm md:text-base text-gray-800 mb-4 leading-relaxed">
              At Tea Jar, we honor this rich legacy by sourcing our teas from
              the finest estates across Sri Lanka. Our commitment to quality
              ensures that every sip of Tea Jar tea carries the tradition and
              excellence established over a century ago. By working closely with
              local tea growers, we continue to uphold the standards set by
              pioneers like James Taylor, delivering the authentic taste of
              Ceylon tea to tea lovers worldwide.
            </p>

            <p className="text-sm md:text-base text-gray-800 mb-4 leading-relaxed">
              Whether you are savoring a robust black tea from the highlands or
              a delicate green tea from the lowlands, each cup of Tea Jar tea is
              a tribute to the enduring heritage of Ceylon tea. Join us on this
              journey through time and experience the legacy of one of the
              world's most beloved teas.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        {/* Right Image */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center bg-slate-900 h-[400px] md:h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="w-full  md:h-screen relative">
            <Image
              src="/assets/heritage-image-optimized.webp"
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

export default TeaHeritage;
