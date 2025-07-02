import React from "react";
const BookSix = () => {
  return (
    <>
      <div className=" w-full h-full flex justify-between items-center  px-3  md:px-10  xl:px-36 py-16    ">
        <div className=" w-full flex lg:flex-row flex-col gap-6  ">
          <div className="w-full lg:w-[40%] relative  flex flex-col gap-2">
            <p className="xl:pr-4 xl:text-[1vw] ">
              Reach millions of global readers with your compelling narrative
            </p>
            <h1 className="text-2xl lg:text-[1.7rem] text-[#2E234B] xl:text-3xl 2xl:text-[2.5vw]  2xl:leading-tight xl:pr-7 2xl:pr-8 3xl:pr-12 custom-font">
              Fiction - Non-fiction - Business: Genre Experts You Can Rely On!
            </h1>
                <div className="bg-[#F3F2FA] flex flex-col gap-3 h-full">
            <div className=" pt-8 px-6 flex flex-col gap-3">
              <h1 className="text-2xl text-[#2E234B] lg:text-[1.7rem] xl:text-3xl 2xl:text-[2.5vw] 2xl:leading-tight custom-font">
                Signature Process - Boutique Approach - Personalized for Authors
              </h1>
              <p className="2xl:text-lg">
                Every book project at Fleck Publisher begins with a 1:1
                consultation, where we explore your vision, goals, target
                audience, and genre expectations. Whether you are writing
                fiction, non-fiction, whitepapers or children’s books, we set up
                a team to match your creative intent.
              </p>
              <div>
                <button className="bg-[#2E234B] px-16  py-1 text-white">
                  Live Chat
                </button>
              </div>
            </div>
            <div className=" absolute bottom-0 w-full flex justify-center items-center"><img src={`/threeBooks.png`} alt="" /></div>
            </div>
          </div>
          <div className="w-full lg:w-[60%] 3xl:w-[50%]  flex flex-col gap-4">
                <p className="3xl:text-[1vw]">We craft fiction like thrillers, sci-fi, horror, and romance that captivate; non-fiction like memoirs, self-help, and thought leadership that resonate; and business books including whitepapers, reports, and expert-led content that build authority. Whatever your genre, Fleck Publisher helps you take the lead with a message that matters.</p>
                <div className="grid grid-cols-3 gap-x-4 gap-y-4 3xl:gap-x-0 mt-4">
                    <div><img src={`/bookSix.png`} alt="" /></div>
                    <div><img src={`/bookTwo.png`} alt="" /></div>
                    <div><img src={`/bookThree.png`} alt="" /></div>
                    <div><img src={`/bookFour.png`} alt="" /></div>
                    <div><img src={`/bookFive.png`} alt="" /></div>
                    <div><img src={`/bookSix.png`} alt="" /></div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookSix;