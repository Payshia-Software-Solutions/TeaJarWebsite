import React from "react";

const TeaManufacturing = () => {
  return (
    <div className="bg-green-50 min-h-screen md:h-screen flex items-center">
      <section className="flex flex-col-reverse md:flex-row items-center mx-auto w-full h-full">
        {/* Left Content */}
        <div className="md:w-1/2 w-full px-4 py-8 md:px-12 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
            OVER 45 YEARS EXPERIENCE IN TEA MANUFACTURING
          </h2>

          {/* Description */}
          <div className="max-w-screen-md">
            <p className="text-sm md:text-base text-gray-800 mb-6 leading-relaxed">
              Tea remains the primary focus of the entire group, with nine
              state-of-the-art factories in the Sabaragamuwa Province
              contributing to 12 million kilograms of premium quality tea per
              year. The company produces 6% of the country's low grown tea
              production, and nearly 4% of the national tea production.
            </p>
            <p className="text-sm md:text-base text-gray-800 mb-6 leading-relaxed">
              The Company maintains high quality standards and are certified
              with Ethical Tea Partnership, HACCP Food Safety Standard, ISO
              22000 and Rainforest Alliance. Retaining the highest sales
              achievements at the Colombo Tea Auction for a period of 45 years,
              it has received international certifications, including GQC 2 Star
              Award by the Sri Lankan Tea Board.
            </p>
          </div>

          {/* Certification Logos */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 bg-white p-2 rounded-full flex items-center justify-center">
              <img
                src="/api/placeholder/48/48"
                alt="Ethical Tea Partnership"
                className="w-8 h-8"
              />
            </div>
            <div className="w-12 h-12 bg-white p-2 rounded-full flex items-center justify-center">
              <img
                src="/api/placeholder/48/48"
                alt="ISO Certification"
                className="w-8 h-8"
              />
            </div>
            <div className="w-12 h-12 bg-white p-2 rounded-full flex items-center justify-center">
              <img
                src="/api/placeholder/48/48"
                alt="HACCP Certification"
                className="w-8 h-8"
              />
            </div>
            <div className="w-12 h-12 bg-white p-2 rounded-full flex items-center justify-center">
              <img
                src="/api/placeholder/48/48"
                alt="Rainforest Alliance"
                className="w-8 h-8"
              />
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 w-full flex justify-center h-64 md:h-full relative">
          <div className="w-full h-full relative bg-blue-100">
            <img
              src="/api/placeholder/800/600"
              alt="Tea Manufacturing Facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeaManufacturing;
