"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Marcus T.",
    image: "https://img.freepik.com/free-photo/young-businessman-desk-talking_23-2147662513.jpg",
    text: "Fleck Publisher brought my historical fiction novel to life with depth and emotion. Their ghostwriting team captured my voice perfectly. From outline to Amazon launch, I felt supported every step of the way.",
  },
  {
    name: "Daniel M.",
    image: "https://img.freepik.com/premium-photo/handsome-businessman-sitting-office_67155-15458.jpg",
    text: "I needed a fast turnaround on proofreading my non-fiction manuscript, and Fleck’s editors were flawless. Sharp, efficient, and detail-oriented—their polish made my book feel instantly more professional and ready to publish.",
  },
  {
    name: "James H.",
    image: "https://img.freepik.com/premium-photo/smiling-businessman-working-desk_67155-19784.jpg",
    text: "My children's book needed vibrant, cartoon-style illustrations—and Fleck delivered beyond expectations. Every character was expressive and fun! The design team worked closely with me and made the entire process truly magical.",
  },
];

// ✅ Custom Arrows
const CustomPrevArrow = ({ className, style, onClick }) => (
  <button
    onClick={onClick}
    className="absolute z-10 -left-16 top-1/2 transform -translate-y-1/2 bg-[#2E234B] text-black px-4 py-3   shadow border border-white"
    style={{ ...style }}
  >
    <img src="/LeftArrow.png" alt="" />
  </button>
);

const CustomNextArrow = ({ className, style, onClick }) => (
  <button
    onClick={onClick}
    className="absolute z-10  -right-16 top-1/2 transform -translate-y-1/2 bg-[#2E234B] text-black px-4 py-3  shadow border border-white"
    style={{ ...style }}
  >
    <img src="/RightArrow.png" alt="" />
  </button>
);

const SuccessStories = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-[#2E234B] text-white py-16">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 px-4 md:px-16 gap-6">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <div className="flex items-start gap-3 mb-2 3xl:mb-4">
            <div className="flex flex-col">
              <span className="text-yellow-400 text-2xl 3xl:text-3xl leading-none">★★★★★</span>
              <span className="text-white text-sm 3xl:text-base mt-1">Rated 9.4 Out Of 10</span>
            </div>
            <div className="border-l border-white h-[2.8rem] opacity-50"></div>
            <div className="flex items-center">
              <img
                src="/trust.png"
                alt="Trustpilot"
                className="w-20 h-[2.8rem] 3xl:h-[3.2rem] 3xl:w-36 object-contain"
              />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl 2xl:text-[3vw] 3xl:text-[4vw] my-2 3xl:mb-4 custom-font font-serif">
            Success Stories 
          </h2>
          <p className="text-base sm:text-lg mt-2">
            We Are 258 Books Strong – And Still Counting!
          </p>
        </div>

        {/* Right CTA Section */}
        <div className="w-full md:w-auto text-left md:text-right">
          <div className="flex -space-x-2 mb-3">
            <img className="w-10 h-10 3xl:w-16 3xl:h-16 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/1.jpg" />
            <img className="w-10 h-10 3xl:w-16 3xl:h-16 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/2.jpg" />
            <img className="w-10 h-10 3xl:w-16 3xl:h-16 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/3.jpg" />
            <img className="w-10 h-10 3xl:w-16 3xl:h-16 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/4.jpg" />
          </div>
          <div>
            <p className="text-sm leading-snug 3xl:text-xl">
              Share Your Experience And<br />Shine As A Fleck Star!
            </p>
            <button className="mt-2 px-4 py-2 bg-[#E9E5F8] text-black rounded hover:bg-[#D2CDEA] text-sm 3xl:text-xl w-full md:w-auto">
              Submit Your Review
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Carousel with custom arrows inside a relative wrapper */}
      <div className="relative max-w-7xl xl:px-20 2xl:px-0 mx-auto 3xl:max-w-[80%]">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-3">
              <div className="border border-white h-full flex flex-col pb-6">
                <img src={item.image} alt={item.name} className="w-full h-64 object-cover mb-4" />
                <div className="px-4 3xl:h-64">
                  <h3 className="text-lg 3xl:text-2xl 3xl:mt-6">{item.name}</h3>
                  <p className="text-sm 3xl:text-lg mt-2 3xl:mt-4 min-h-[100px]">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SuccessStories;
