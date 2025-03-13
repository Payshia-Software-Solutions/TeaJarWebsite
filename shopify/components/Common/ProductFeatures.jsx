import React from "react";

const features = product.features || [
  { icon: "🌿", label: "Vegan" },
  { icon: "🚫", label: "Paraben Free" },
  { icon: "🐾", label: "Cruelty Free" },
  { icon: "✨", label: "Natural" },
  { icon: "🔥", label: "Paraben Free" },
  { icon: "👍", label: "Non-toxic" },
];

function ProductFeatures() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
      {features.map((feature, idx) => (
        <div key={idx} className="flex flex-col items-center text-center">
          <span className="text-2xl mb-2">{feature.icon}</span>
          <span className="text-xs text-gray-600">{feature.label}</span>
        </div>
      ))}
    </div>
  );
}

export default ProductFeatures;
