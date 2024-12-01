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
      question: "What types of tea does Tea Jar offer?",
      answer:
        "We offer a wide variety of teas, including black tea, green tea, white tea, herbal tea, artisanal tea, and fruit teas.",
    },
    {
      question: "Why is Tea Jar tea special?",
      answer:
        "Our tea is crafted with 45 years of expertise, offering exceptional quality, directly sourced from lush tea gardens and delivered as factory-fresh teas straight from Sri Lanka",
    },
    {
      question: "What certifications do your teas have?",
      answer:
        "Our teas are certified with ISO 22000, ISO 9001:2015, HACCP, GMP, and Ethical Tea Partnership standards, ensuring quality, safety, and sustainability.",
    },
    {
      question: "Where is Tea Jar tea sourced from?",
      answer:
        "Tea Jar teas are proudly produced in our own tea factories, offering the finest Ceylon tea directly from Sri Lankans lush tea gardens.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact our customer support team via email(marketing@teajarceylon.com) , phone((+94)70 11 98 800) , or by filling out the contact form on our website. We are here to assist you!",
    },
  ];

  return (
    <section className="bg-theme py-10 px-10">
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-white text-center">FAQs</h2>
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
