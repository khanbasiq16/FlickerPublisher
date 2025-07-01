"use client"
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
const SuccessStories = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <div className="bg-[#2E234B] text-white py-16  ">
      {/* Top Section Flex Between */}
     <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 px-4 md:px-16 gap-6">
  {/* Left Heading */}
  <div className="w-full md:w-1/2">
    <div className="flex items-center space-x-2 mb-2">
      <span className="text-yellow-400 text-2xl">★★★★★</span>
      <span className="text-white text-sm">Rated 9.4 Out Of 10</span>
      <img
        src="/logo-white.svg"
        alt="Trustpilot"
        className="w-20 h-10 object-contain"
      />
    </div>
    <h2 className="text-3xl sm:text-4xl 2xl:text-[3vw] my-2 custom-font font-serif">
      Success Stories
    </h2>
    <p className="text-base sm:text-lg mt-2">
      We Are 258 Books Strong – And Still Counting!
    </p>
  </div>

  {/* Right CTA Section */}
  <div className="w-full md:w-auto text-left md:text-right">
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2">
        <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/1.jpg" />
        <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/2.jpg" />
        <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/3.jpg" />
        <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/4.jpg" />
      </div>
      <div>
        <p className="text-sm leading-snug">
          Share Your Experience And<br />Shine As A Fleck Star!
        </p>
        <button className="mt-2 px-4 py-2 bg-[#E9E5F8] text-black rounded hover:bg-[#D2CDEA] text-sm w-full md:w-auto">
          Submit Your Review
        </button>
      </div>
    </div>
  </div>
</div>

      {/* Carousel */}
      <Slider {...settings} className="max-w-7xl xl:px-20 2xl:px-0 mx-auto">
        {testimonials.map((item, index) => (
          <div key={index} className="px-3">
            <div className="border border-white h-full flex flex-col pb-6">
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover mb-4" />
              <div className="px-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm mt-2 min-h-[100px]">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default SuccessStories;