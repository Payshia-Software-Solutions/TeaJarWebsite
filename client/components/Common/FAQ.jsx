"use client";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are the payment methods available?",
      answer: "Payment methods available are...",
    },
    {
      question: "How long does it take to deliver an online order?",
      answer: "Delivery time is...",
    },
    {
      question:
        "Do you offer international shipping for orders outside of Sri Lanka?",
      answer: "Yes, we offer international shipping...",
    },
    {
      question: "How can I obtain a skin and wellness consultation?",
      answer: "To obtain a consultation, please...",
    },
  ];

  return (
    <section className="bg-theme py-16 ">
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-white text-center mt-10">
          FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                className="w-full flex justify-between items-center bg-gray-100 p-4 rounded-md"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDownIcon
                  className={`h-6 w-6 transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-gray-100 rounded-b-md">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
