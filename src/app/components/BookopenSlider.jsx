"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HiddenArrow = () => <div style={{ display: "none" }} />;
const BookopenSlider = () => {
  const sliderRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const books = [
    {
      url: "/1book.png",
    },
    {
      url: "/2book.png",
    },
    {
      url: "/3book.png",
    },
    {
      url: "/4book.png",
    },
    {
      url: "/5book.png",
    },
    {
      url: "/1book.png",
    },
    {
      url: "/2book.png",
    },
    {
      url: "/3book.png",
    },
    {
      url: "/4book.png",
    },
    {
      url: "/5book.png",
    },
    {
      url: "/1book.png",
    },
    {
      url: "/2book.png",
    },
    {
      url: "/3book.png",
    },
    {
      url: "/4book.png",
    },
    {
      url: "/5book.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
    prevArrow: <HiddenArrow />,
    nextArrow: <HiddenArrow />,
  };

  return (
    <section className="w-full mt-[280%] sm:mt-[50%] lg:mt-[60%] mb-20 xl:mt-[70%] 2xl:mt-[60%] 3xl:mt-[60%] ">
      <div className="w-full flex   flex-col sm:flex-row lg:flex-row  justify-between px-2 sm:px-10 lg:px-24 ">
        <div className="w-full  flex flex-col gap-4">
          <h2 className="text-[#2E234B] text-5xl custom-font text-center  lg:text-4xl  xl:text-4xl  2xl:text-5xl  3xl:text-7xl 3xl:mb-3 ">
            Celebrating Your Success
          </h2>
          <p className="text-center  text-[#2E234B] px-0 md:px-60 addregfont lg:text-xs xl:text-sm 2xl:text-lg 3xl:text-2xl 3xl:mb-3 ">
            Experience the power of professional publishing with Fleck Publisher
            where your work is elevated to its highest potential.
          </p>
        </div>
      </div>

      <div className="w-full relative  px-20 md:px-0 ">
        <div className="w-full relative z-10">
          <Slider ref={sliderRef} {...settings}>
            {books.map((book, index) => (
              <div
                key={index}
                className="w-44 flex justify-center  gap-10 items-center relative "
              >
                <div className="relative p-4 h-auto md:mt-10 lg:mt-4 xl:mt-12 2xl:mt-4 ">
                  <img
                    src={book.url}
                    alt={`Book page ${index + 1}`}
                    className="w-full h-full transition-opacity duration-500 ease-in-out"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>


        <div className="w-full  flex  gap-3 justify-center my-5 flex-col md:flex-row md:gap-6">
 <button className="px-16 py-2 3xl:text-lg bg-[#F3F2FA] border border-[#2E234B]  text-[#2E234B] transition-all duration-300 hover:bg-[#2E234B] hover:text-[#F3F2FA]">
    Let's Discuss
  </button>

  <button className=" px-10 xl:px-16 py-2 3xl:text-lg bg-[#2E234B] border border-[#2E234B] text-[#F3F2FA] transition-all duration-300 hover:bg-[#F3F2FA] hover:text-[#2E234B]">
    (123) 456-7890
  </button>
        </div>
      </div>
    </section>
  );
};

export default BookopenSlider;
