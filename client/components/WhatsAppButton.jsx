import React from "react";
import { Phone } from "lucide-react";

const WhatsAppButton = ({
  phoneNumber,
  message = "Hello! I'm interested in your services.",
  position = "bottom-right",
  customStyles = {},
}) => {
  // Remove any non-numeric characters from phone number
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, "");

  // Create WhatsApp API URL
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // Position styles
  const positionStyles = {
    "bottom-right": { bottom: "20px", right: "20px" },
    "bottom-left": { bottom: "20px", left: "20px" },
    "top-right": { top: "20px", right: "20px" },
    "top-left": { top: "20px", left: "20px" },
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
      style={{
        ...positionStyles[position],
        ...customStyles,
      }}
      aria-label="Chat on WhatsApp"
    >
      <Phone className="text-white" size={24} />
    </a>
  );
};

export default WhatsAppButton;
