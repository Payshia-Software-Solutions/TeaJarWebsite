import React from "react";
import {
  DropletIcon,
  ThermometerIcon,
  CupSodaIcon,
  BeakerIcon,
  TimerIcon,
} from "lucide-react";

const defaultBrewingSteps = [
  {
    icon: "droplet",
    text: "Recommended to use Spring Water",
  },
  {
    icon: "thermometer",
    text: "95°C – 100°C",
  },
  {
    icon: "cupSoda",
    text: "1 String and Tag Tea Bag per person",
  },
  {
    icon: "beaker",
    text: "220ml of water per person",
  },
  {
    icon: "timer",
    text: "3 - 5 Minutes (5 minutes for a strong cup)",
  },
];

const iconComponents = {
  droplet: DropletIcon,
  thermometer: ThermometerIcon,
  cupSoda: CupSodaIcon,
  beaker: BeakerIcon,
  timer: TimerIcon,
};

const BrewingGuide = ({ steps = defaultBrewingSteps }) => {
  const renderIcon = (iconName) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? (
      <IconComponent className="w-8 h-8 text-gray-600" />
    ) : null;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Brewing Information
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-48"
          >
            <div className="mb-3 p-4 rounded-full bg-gray-100">
              {renderIcon(step.icon)}
            </div>
            <p className="text-sm text-gray-700">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrewingGuide;
