"use client";
import React from "react";



const Blogrightsidebar = () => {
  return (
    <section className="w-full  flex flex-col lg:flex-row min-h-[60vh] px-4 lg:px-24 py-16   bg-[#F3F2FA]">
      <div className="w-full lg:w-1/2 text-[#2E234B] flex flex-col gap-3 2xl:gap-5  3xl:gap-7 py-4 xl:justify-start 3xl:justify-center">
        <h2 className="text-2xl custom-font md:text-3xl lg:text-3xl  xl:text-3xl  2xl:text-3xl 3xl:text-3xl !leading-tight Dmseridisplay">
         Why Choose Fleck Publisher
        </h2>
        <h2 className="text-2xl custom-font md:text-4xl lg:text-4xl  xl:text-4xl  2xl:text-5xl 3xl:text-6xl !leading-tight Dmseridisplay">
      Bring your epic idea to an NYTimes Bestseller – 2X faster!
        </h2>
        <div className="flex flex-col ">
          <p className="text-xs md:text-lg  lg:text-xs xl:text-sm 2xl:text-base 3xl:text-xl leading-5 pr-2 addregfont  lg:pr-3">
         At Fleck Publisher, we turn powerful ideas into bestselling books with unmatched speed and quality.
Our team of industry experts helps polish your manuscript to perfection.
From editing to marketing, we handle everything so you can focus on writing.
          </p>
          <p className="text-xs md:text-lg  lg:text-xs xl:text-sm 2xl:text-base 3xl:text-xl leading-5 pr-2 addregfont  lg:pr-3">
         At Fleck Publisher, we turn powerful ideas into bestselling books with unmatched speed and quality.
Our team of industry experts helps polish your manuscript to perfection.
From editing to marketing, we handle everything so you can focus on writing.
          </p>
        </div>

        <div className="w-full  flex flex-col lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row gap-3  ">
         <button className="px-16 py-2 bg-[#F3F2FA] border border-[#2E234B]  text-[#2E234B] transition-all duration-300 hover:bg-[#2E234B] hover:text-[#F3F2FA]">
    Let's Discuss
  </button>

  <button className="px-16 py-2 bg-[#2E234B] border border-[#2E234B] text-[#F3F2FA] transition-all duration-300 hover:bg-[#F3F2FA] hover:text-[#2E234B]">
    (123) 456-7890
  </button>
        </div>
      </div>
      {/* <div className="w-1/2 h-full border border-red-500">
          <div>
            <img className="h-[60vh] " src={`/DangerBook.png`} alt="" />
          </div>
      </div> */}
     {/* <div
  className="w-full lg:w-1/2 h-64 md:h-96 lg:h-[32rem] xl:h-[28rem] border border-red-500"
  style={{
    backgroundImage: "url('/DangerBook.png')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  }}
></div> */}
<div className="w-full lg:w-1/2 relative h-64 md:h-96 lg:h-[32rem] xl:h-[28rem] 3xl:h-[40rem] ">
  <div
    className=" absolute inset-0 2xl:w-full 2xl:h-full  xl:left-20 2xl:left-20 bg-no-repeat bg-contain bg-center"
    style={{
      backgroundImage: "url('/DangerBook.png')",
    }}
  ></div>
</div>

    </section>
  );
};

export default Blogrightsidebar;
