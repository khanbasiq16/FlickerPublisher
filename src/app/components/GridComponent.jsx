import React from "react";
const services = [
  {
    title: "eBook Writing",
    description:
      "We help you take your epic idea to its final chapter! We offer outline creation, chapter planning, content development, and 1:1 book coaching services.",
  },
  {
    title: "eBook Design",
    description:
      "Fleck Publisher designs custom book covers, illustrations for children’s books and poetry, and interior layouts that appeal to your genre and audience.",
  },
  {
    title: "Editing & Formatting",
    description:
      "We provide top-tier proofreading, development and copy-editing services to strengthen compliance with Kindle Direct Publishing (KDP) and other platform standards.",
  },
  {
    title: "eBook Publishing",
    description:
      "We publish ebooks on Amazon KDP, Apple Books, and other leading platforms, and handle ISBNs, metadata, and upload requirements with complete technical support.",
  },
  {
    title: "eBook Marketing",
    description:
      "We help authors and their masterpieces become the next bestseller with visibility via social media and email campaigns, Amazon ads, TikTok marketing, and influencer outreach.",
  },
  {
    title: "Ghostwriting",
    description:
      "We write your book in your voice—based on detailed interviews, notes, and references—while you remain the sole author in credit, tone, and control.",
  },
];
const GridComponent = () => {
  return (
    <div className="bg-[#F3F2FA] w-full py-16 px-3 md:px-10 xl:px-20 ">
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl 3xl:text-[3vw]  mb-5 3xl:mb-10  text-[#2E234B] custom-font">
          Premium Self-Publishing Services
        </h1>
        <p className="text-[#2E234B] mt-4 max-w-2xl 3xl:max-w-5xl 3xl:text-[1.2vw] 3xl:leading-tight mx-auto text-sm md:text-base">
          We do collaborative and independent writing and editing workshops,
          execute from planning to publishing and everything in between.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white group transition-all duration-300 hover:bg-[#2E234B] px-7 py-10  3xl:px-10 3xl:py-16 flex flex-col justify-between text-[#2E234B] hover:text-white"
          >
            <h3 className="text-lg xl:text-xl 3xl:text-[1.5vw] mb-2 group-hover:text-white custom-font">
              {service.title}
            </h3>
            <p className="md:text-[1vw] mb-4 group-hover:text-white">
              {service.description}
            </p>
            <button  className="self-start text-[1vw] mt-3 border py-2 border-[#2E234B] group-hover:border-white bg-[#2E234B] group-hover:bg-white text-white group-hover:text-[#2E234B] px-8   text-sm transition-all duration-300">
              Share you project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default GridComponent;