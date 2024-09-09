import React from "react";

function SectionHeader({
  sectionTitle,
  sectionHighlight,
  textColor = "gray-900 ",
}) {
  return (
    <header>
      <h2
        className={`text-3xl lg:text-4xl font-italiana font-bold  text-white text-${textColor} text-center`}
      >
        {sectionTitle}
      </h2>

      <p className={`mt-4  text-${textColor} text-center text-white font-italiana`}>
        {sectionHighlight}
      </p>

      
    </header>
  );
}

export default SectionHeader;
