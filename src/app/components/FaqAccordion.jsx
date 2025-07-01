"use client"
import React, { useState } from "react";

const faqData = [
  {
    question: "How do I get started with Fleck Publisher?",
    answer:
      "Getting started is easy! Simply submit your manuscript or book idea through our website or contact our team directly. We'll guide you through the entire publishing process from start to finish.",
  },
  {
    question: "Do I retain the rights to my book?",
     answer:
      "Getting started is easy! Simply submit your manuscript or book idea through our website or contact our team directly. We'll guide you through the entire publishing process from start to finish.",
  },
  {
    question: "What services do you offer?",
     answer:
      "Getting started is easy! Simply submit your manuscript or book idea through our website or contact our team directly. We'll guide you through the entire publishing process from start to finish.",
  },
  {
    question: "Can you help market my book after it’s published?",
      answer:
      "Getting started is easy! Simply submit your manuscript or book idea through our website or contact our team directly. We'll guide you through the entire publishing process from start to finish.",
  },
  {
    question: "How long does the publishing process take?",
      answer:
      "Getting started is easy! Simply submit your manuscript or book idea through our website or contact our team directly. We'll guide you through the entire publishing process from start to finish.",
  },
];

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-[#f0edf3] min-h-screen mt-10 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl sm:text-4xl custom-font font-semibold text-center text-[#2a1a47] mb-4">
          Frequently Asked Questions (FAQs)
        </h2>
        <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
          Have questions about publishing your book with Fleck Publisher? You're not alone! We've compiled answers to the most common questions our authors ask—from getting started to launching your book into the world. If you need more help, our team is always here to assist you.
        </p>

        <div className="space-y-2">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`${
                index === activeIndex
                  ? "bg-[#2a1a47] text-white"
                  : "bg-gray-200 text-[#2a1a47]"
              } transition-colors duration-300 rounded`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left px-5 py-4 font-medium flex justify-between items-center"
              >
                <span>{item.question}</span>
                <span className="ml-4">
                  {/* {index === activeIndex ? "^" : &#9660;} */}
                </span>
              </button>
              {index === activeIndex && item.answer && (
                <div className="px-5 pb-4 text-sm leading-relaxed text-white">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
