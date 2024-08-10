import React from "react";

function SectionHeader({ sectionTitle, sectionHighlight }) {
  return (
    <header>
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center">
        {sectionTitle}
      </h2>

      <p className="mt-4  text-gray-500 text-center">{sectionHighlight}</p>
    </header>
  );
}

export default SectionHeader;
