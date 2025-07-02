// "use client"
// import React, { useState } from "react";

// const faqData = [
//   {
//     question: "How do I get started with Fleck Publisher?",
//     answer:
//       "Getting started is easy! Simply submit your manuscript or book idea through our website or contact our team directly. We'll guide you through the entire publishing process from start to finish.",
//   },
//   {
//     question: "Do I retain the rights to my book?",
//      answer:
//       "Getting started is easy! Simply submit your manuscript or book idea through our website or contact our team directly. We'll guide you through the entire publishing process from start to finish.",
//   },
//   {
//     question: "What services do you offer?",
//      answer:
//       "Getting started is easy! Simply submit your manuscript or book idea through our website or contact our team directly. We'll guide you through the entire publishing process from start to finish.",
//   },
//   {
//     question: "Can you help market my book after it’s published?",
//       answer:
//       "Getting started is easy! Simply submit your manuscript or book idea through our website or contact our team directly. We'll guide you through the entire publishing process from start to finish.",
//   },
//   {
//     question: "How long does the publishing process take?",
//       answer:
//       "Getting started is easy! Simply submit your manuscript or book idea through our website or contact our team directly. We'll guide you through the entire publishing process from start to finish.",
//   },
// ];

// const FaqAccordion = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const toggleIndex = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <div className="bg-[#f0edf3] min-h-screen mt-10 flex items-center justify-center p-6">
//       <div className="max-w-3xl w-full">
//         <h2 className="text-3xl sm:text-4xl custom-font font-semibold text-center text-[#2a1a47] mb-4">
//           Frequently Asked Questions (FAQs)
//         </h2>
//         <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
//           Have questions about publishing your book with Fleck Publisher? You're not alone! We've compiled answers to the most common questions our authors ask—from getting started to launching your book into the world. If you need more help, our team is always here to assist you.
//         </p>

//         <div className="space-y-2">
//           {faqData.map((item, index) => (
//             <div
//               key={index}
//               className={`${
//                 index === activeIndex
//                   ? "bg-[#2a1a47] text-white"
//                   : "bg-gray-200 text-[#2a1a47]"
//               } transition-colors duration-300 rounded`}
//             >
//               <button
//                 onClick={() => toggleIndex(index)}
//                 className="w-full text-left px-5 py-4 font-medium flex justify-between items-center"
//               >
//                 <span>{item.question}</span>
//                 <span className="ml-4">
//                   {/* {index === activeIndex ? "^" : &#9660;} */}
//                 </span>
//               </button>
//               {index === activeIndex && item.answer && (
//                 <div className="px-5 pb-4 text-sm leading-relaxed text-white">
//                   {item.answer}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FaqAccordion;

















"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import OpenArrow from "/public/OpenArrow.png";
import UnOpenArrow from "/public/unOpenArrow.png";

const faqData = [
  {
    question: "How do I get started with Fleck Publisher?",
    answer:
      "Getting started is easy! Simply submit your manuscript or book idea through our website or contact our team directly. We'll guide you through the entire publishing process from start to finish.",
  },
  {
    question: "Do I retain the rights to my book?",
    answer:
      "Yes, you retain full rights to your book. We offer flexible publishing contracts to support your ownership.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We provide editing, cover design, formatting, publishing, distribution, and marketing services tailored to your needs.",
  },
  {
    question: "Can you help market my book after it’s published?",
    answer:
      "Yes! We have several marketing packages to help promote your book through social media, email, and bookstore placements.",
  },
  {
    question: "How long does the publishing process take?",
    answer:
      "It typically takes 4–8 weeks from manuscript approval to publication depending on the services selected.",
  },
];

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-[#f0edf3] py-10 px-4 flex items-start justify-center 3xl:py-16">
      <div className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl w-full">
        <h2 className="text-3xl 3xl:text-[3vw] sm:text-4xl custom-font font-semibold text-center text-[#2a1a47] mb-4 3xl:mb-8 3xl:mt-6">
          Frequently Asked Questions (FAQs)
        </h2>
        <p className="text-center text-gray-600 mb-6 2xl:mb-10 text-sm sm:text-base 3xl:text-xl">
          Have questions about publishing your book with Fleck Publisher? You're not alone! We've compiled answers to the most common questions our authors ask—from getting started to launching your book into the world. If you need more help, our team is always here to assist you.
        </p>

        <div className="space-y-2 3xl:space-y-3">
          {faqData.map((item, index) => {
            const isOpen = index === activeIndex;

            return (
              <div
                key={index}
                className={`transition-colors duration-300 rounded ${
                  isOpen ? "bg-[#2a1a47] text-white" : "bg-gray-200 text-[#2a1a47]"
                }`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-5 py-4 3xl:text-2xl font-medium flex justify-between items-center"
                >
                  <span>{item.question}</span>
                  <Image
                    src={isOpen ? OpenArrow : UnOpenArrow}
                    alt="Arrow"
                    width={20}
                    height={20}
                    className={`transition-opacity duration-300 ${
                      isOpen ? "opacity-70" : "opacity-100"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ clipPath: "inset(0 0 100% 0)" }}
                      animate={{ clipPath: "inset(0 0 0% 0)" }}
                      exit={{ clipPath: "inset(0 0 100% 0)" }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      style={{ willChange: "clip-path" }}
                      className="px-5 xl:pr-24 pb-4 text-sm leading-relaxed origin-top overflow-hidden 3xl:text-xl"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
