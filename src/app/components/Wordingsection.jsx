import React from 'react'
const Wordingsection = () => {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center py-16  px-5 md:px-24 bg-white font-sans text-[#2E234B]">
  <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
    <p className="text-sm mb-2 3xl:text-[1.2vw]">Ready to become an acclaimed writer?</p>
    <h2 className="text-3xl custom-font md:text-4xl 2xl:text-[2.5vw] text-[#2E234B] 2xl:leading-tight leading-snug mb-4">
      Have an amazing idea?<br />
      We have the roadmap to<br />
      make it happen!
    </h2>
    <p className="text-base leading-relaxed 2xl:text-[1.2vw]">
      Working with Fleck Publisher gives you access to 1:1 coaching and support sessions with expert ghostwriters, experienced literary agents and beta testing readers who’ll navigate the publishing maze for you by refining your ideas, preserving your tone of voice, highlighting your ORIGINAL message and strategize your overall process so you can focus on developing authorship globally with full control, creativity, confidence and credit! Ready to launch an ebook that’s yet to make an impact?
    </p>
  </div>
  <div className="w-full lg:w-1/2 border-2 border-[#2E234B] bg-[#F7F5FF] p-6 px-3 md:px-12  md:p-10 rounded-lg shadow-2xl ">
    <h3 className="text-xl font-medium mb-6">
      <span className="inline-block mb-1 text-[3vw] gap-4 leading-tight custom-font text-center md:text-start">
        <img src="/miniLogo.png" alt="Logo" className=" h-10 inline-block mr-2" />
        Spring Sale: Launch Your Book at
        <span className="text-red-600 font-bold"> 50% Off!</span>
      </span>
    </h3>
    <form className="space-y-4 3xl:space-y-8">
      <input type="text" placeholder="Full Name*" className="w-full px-4 py-3 bg-[#D2CFDD] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E234B]" />
      <input type="text" placeholder="Phone*" className="w-full px-4 py-3 bg-[#D2CFDD] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E234B]" />
      <input type="email" placeholder="Email*" className="w-full px-4 py-3 bg-[#D2CFDD] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E234B]" />
      <input type="text" placeholder="I’m in search of…" className="w-full bg-[#D2CFDD] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E234B]" />
      <label className="text-xs md:text-xs 2xl:text-sm flex items-start space-x-2">
        <input type="checkbox" className="mt-1" />
        <span>
          Please check the box to allow communication via SMS or email (see our
          <a href="#" className="underline">Privacy Policy</a> and
          <a href="#" className="underline">Terms & Conditions</a>). Standard carrier rates may apply for SMS. You may unsubscribe at any time by replying STOP or UNSUBSCRIBE.
        </span>
      </label>
      <button type="submit" className="w-full py-3 bg-[#2E234B] text-white rounded-md hover:bg-[#1E1932] transition">
        Submit
      </button>
    </form>
  </div>
</div>
    </>
  )
}
export default Wordingsection