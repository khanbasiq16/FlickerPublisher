import React from "react";
import Formdata from "./Formdata";

const Hero = () => {
  return (
    <>

    {/* <div className="relative flex flex-col"> */}

    
      <section className="w-full min-h-screen absolute top-0 bg-[#2E234B] flex justify-start items-center z-10 pt-0 md:pt-36 overflow-hidden">
        {/* Video Background */}
        <video
          src="/Bg-Video.mp4"
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover mix-blend-overlay opacity-70 z-0"
        ></video>

        {/* Content goes here */}
        <div className="w-full relative flex items-end addgradient mb-10">
          <div className="w-full md:w-full lg:w-3/5   relative z-10     text-white px-2  sm:px-4  lg:px-14 xl:px-24 flex flex-col md:justify-center  justify-start mb-20 ">
            <div className="w-full flex flex-col gap-0 md:gap-5 lg:gap-0 ">
              <h2 className="custom-font  text-xl sm:text-3xl  lg:text-2xl xl:text-3xl xl:pr-20 2xl:text-3xl   2xl:mr-16     3xl:text-7xl  text-center px-2 md:px-0 lg:px-0 md:text-center lg:text-start !leading-snug mt-20  ">
                Expert Book Publishing Services
              </h2>
              <h2 className="custom-font text-3xl sm:text-5xl  lg:text-6xl xl:text-6xl  2xl:text-6xl   2xl:mr-16     3xl:text-7xl  text-center px-2 md:px-0 lg:px-0 md:text-center lg:text-start !leading-snug   ">
                for Aspiring Authors{" "}
              </h2>

              <p className=" text-sm text-[#F3F2FA] my-3 pr-5 text-center  md:text-center lg:text-start">
                Fleck Publisher is an ebook ghostwriting and publishing company
                helping new and established authors, agencies and businesses
                launch their book ideas and manuscripts into compelling
                bestsellers. We plan outlines and coach authors, edit and
                proofread drafts, design covers, format and publish for print
                and digital, register ISBNs, create promotion plans and
                teleport your book to readers.
              </p>

              <div className="w-full my-3 flex justify-center md:justify-start ">
                <button className="px-8  py-2 bg-white bg-[#F3F2FA] text-[#2E234B] transiton-all duration-300 hover:bg-transparent hover:text-[#F3F2FA]">
                  Get a FREE 11 ebook coaching sessions
                </button>
              </div>


                <div className=" w-full flex  my-2 md:flex-row md:justify-center lg:justify-start lg:flex-row flex-col text-xl gap-2 items-center ">
              <p className="text-base addregfont lg:text-xs xl:text-sm 2xl:text-xl 3xl:text-2xl">
                4.6/5 Stars{" "}
              </p>
              <p className="text-base addregfont lg:text-xs xl:text-sm 2xl:text-xl 3xl:text-2xl">
                | Trusted by 35+ Authors |
              </p>
              <span className="text-base addregfont lg:text-xs xl:text-sm 2xl:text-xl 3xl:text-2xl">
                15+ Publishing Partners
              </span>
            </div>

              <div className="w-full  "></div>
            </div>
          </div>
          <div
            className="w-1/2 xl:h-[100vh]  top-5  absolute right-20  2xl:h-[70vh]    lg:flex hidden z-10 mb-20"
            style={{
              backgroundImage: `url('/Layer 1-1.png')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>

        </div>
      </section>


          <div className="w-full  flex justify-center   absolute bottom-[-32%]  md:bottom-[-70%]   lg:bottom-[-34%] xl:bottom-[-60%]   2xl:bottom-[-30%] 3xl:bottom-[-37%] z-20   bg-transparent px-4  lg:px-14 xl:px-24">
          <Formdata />
        </div>

    </>
  );
};

export default Hero;
