import React from "react";
import { Coffee, Sunrise } from "lucide-react";

const TeaDetails = ({
  tastingNote,
  ingredients,
  teaGrade,
  netWeight,
  caffeine,
  timeOfDay,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <section>
        <h2 className="text-xl font-semibold text-amber-700 mb-2">
          Tasting Note & Distinctive Features
        </h2>
        <p className="text-gray-700">{tastingNote}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-amber-700 mb-2">
          Ingredients
        </h2>
        <p className="text-gray-700">{ingredients}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-amber-700 mb-2">Tea Grade</h2>
        <p className="text-gray-700">{teaGrade}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-amber-700 mb-2">
          Net Weight
        </h2>
        <p className="text-gray-700">{netWeight}</p>
      </section>

      <div className="flex gap-12 mt-8">
        <div className="flex flex-col items-center">
          <h3 className="text-gray-700 mb-2">Caffeine</h3>
          <div className="p-3 bg-amber-50 rounded-lg mb-2">
            <Coffee className="w-6 h-6 text-amber-700" />
          </div>
          <p className="text-gray-700">{caffeine}</p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-gray-700 mb-2">Time of Day</h3>
          <div className="p-3 bg-amber-50 rounded-lg mb-2">
            <Sunrise className="w-6 h-6 text-amber-700" />
          </div>
          <p className="text-gray-700">{timeOfDay}</p>
        </div>
      </div>
    </div>
  );
};

// Add prop types for better documentation and type checking
TeaDetails.defaultProps = {
  tastingNote:
    "The Dimbula Valley consists of estates in and around Talawakelle, around 1,500 meters elevation. Tea from this region is known for the combination of strength, character, and brightness, the perfect Breakfast Tea.",
  ingredients: "Pure Ceylon Black tea, no additives",
  teaGrade: "Broken Orange Pekoe Fannings",
  netWeight: "100g",
  caffeine: "Medium",
  timeOfDay: "Morning",
};

export default TeaDetails;
