"use client";
import React from 'react';

const Formdata = () => {
  return (
    <div className="w-full bg-[#F3F2FA] border-2 border-[#261e3e] p-6 md:p-10 drop-shadow-2xl 3xl:p-10">
      {/* Heading */}
      <h2 className="flex items-center justify-center gap-2 text-center text-2xl md:text-3xl 2xl:text-[2.5vw] font-serif text-[#2C2546] 2xl:mb-10">
  <img
    src="/miniLogo.png"
    alt="Mini Logo"
    className="w-6 md:w-8 2xl:w-[2vw] h-auto"
  />
  Spring Sale: Launch Your Book at <span className="text-red-600 ml-2">50% Off!</span>
</h2>

      {/* Form */}
      <form className="mt-6 space-y-2 md:space-y-4 ">
        <div className="flex flex-col lg:flex-row gap-3  2xl:mb-10">
          <input
            type="text"
            placeholder="Full Name*"
            className="w-full lg:w-1/4 h-9 md:h-12 bg-[#D2CFDD] rounded px-4 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone*"
            className="w-full lg:w-1/4 h-9 md:h-12 bg-[#D2CFDD] rounded px-4 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email*"
            className="w-full lg:w-1/4 h-9 md:h-12 bg-[#D2CFDD] rounded px-4 focus:outline-none"
          />
          <input
            type="text"
            placeholder="I’m in search of..."
            className="w-full lg:w-1/4 h-9 md:h-12 bg-[#D2CFDD] rounded px-4 focus:outline-none"
          />
        </div>

        {/* Checkbox & Text */}
        <div className="flex items-start flex-col md:flex-row px-3 2xl:px-0 gap-2 text-sm text-[#2C2546]">
            <div className='w-full'>

          <input
            type="checkbox"
            className="mt-1 accent-[#2C2546]"
            id="consent"
            />
          <label htmlFor="consent" className="leading-snug text-xs md:text-base">
            Please check the box to allow communication via SMS or email (see our{" "}
            <a href="#" className="underline font-medium ">Privacy Policy</a> and{" "}
            <a href="#" className="underline font-medium">Terms & Conditions</a>).
            Standard carrier rates may apply for SMS. You may unsubscribe at any time
            by replying STOP or UNSUBSCRIBE.
          </label>
            </div>
        <div className="flex justify-end  lg:w-1/2">
         <button
  type="submit"
  className="w-full sm:w-auto  2xl:w-[72.5%] bg-[#2C2546] text-white px-6 sm:px-8 md:px-16 py-2 sm:py-3 rounded text-xs sm:text-base md:text-lg hover:bg-[#1c1833] transition-all"
>
  Let's Get Started
</button>

        </div>
        </div>

        {/* Submit Button */}
      </form>
    </div>
  );
};

export default Formdata;
