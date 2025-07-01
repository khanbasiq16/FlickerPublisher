import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#2E234B] text-[#F3F2FA] w-full h-full flex flex-col  px-3  md:px-10  xl:px-20  pt-36 pb-4 ">
        <section className="flex flex-col lg:flex-row">
          <div className="pr-16    2xl:w-1/2  flex flex-col gap-3 border-b pb-10 lg:pb-0 border-[#F3F2FA] lg:border-b-0 lg:border-r
">
            <div className="relative">
              <img className="h-14 absolute -top-10"  src="/headerLogo.svg" alt="" />
            </div>
            <div className="flex flex-col gap-3 py-14">
              <div className="flex items-center gap-3">
                <span>
                  <img className="h-4" src={`/email.png`} alt="" />
                </span>
                <span className="text-sm">support@fleckpublisher.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span>
                  <img className="h-4" src={`/call.png`} alt="" />
                </span>
                <span className="text-sm">Toll Free: (800) 800-8008</span>
              </div>
              <div className="flex items-center gap-3">
                <span>
                  <img className="h-4" src={`/call.png`} alt="" />
                </span>
                <span className="text-sm">For Sales Inquiry: (800) 800-8008</span>
              </div>
              <div className="flex items-center gap-3">
                <span>
                  <img className="h-4" src={`/call.png`} alt="" />
                </span>
                <span className="text-sm">For Project Inquiry: (800) 800-8008</span>
              </div>
              <div className="flex items-center gap-3">
                <span>
                  <img className="h-4" src={`/location.png`} alt="" />
                </span>
                <span className="text-sm ">445 S.Figuerea Street, Los Angele</span>
              </div>
            </div>
            <div className="relative">
              <div className="flex gap-2 absolute -bottom-0 ">
                <span className="border border-[#F3F2FA] p-[6px] h-7 w-7 flex justify-center items-center">
                  <img className="object-contain" src={`/fb.png`} alt="" />
                </span>
                <span className="border border-[#F3F2FA] p-[6px] h-7 w-7 flex justify-center items-center">
                  <img className="object-contain" src={`/twitter.png`} alt="" />
                </span>
                <span className="border border-[#F3F2FA] p-[6px] h-7 w-7 flex justify-center items-center">
                  <img className="object-contain" src={`/instagram.png`} alt="" />
                </span>
                <span className="border border-[#F3F2FA] p-[6px] h-7 w-7 flex justify-center items-center">
                  <img className="object-contain" src={`/tiktok.png`} alt="" />
                </span>
                <span className="border border-[#F3F2FA] p-[6px] h-7 w-7 flex justify-center items-center">
                  <img className="object-contain" src={`/linkedin.png`} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className=" flex  2xl:w-1/2 flex-col gap-5 pb-10 lg:pb-0 border-b border-[#F3F2FA] lg:border-b-0 lg:border-r">
            <h1 className="custom-font text-2xl  lg:px-16 mt-10 lg:mt-0">Quick Links</h1>
            <div className="flex flex-col gap-3  lg:px-16">
                <div className="text-sm">Home</div>
                <div className="text-sm">Pricing</div>
                <div className="text-sm">Contract</div>
                <div className="text-sm">Faq's</div>
                <div className="text-sm">Let's Get Started</div>
            </div>
          </div>
          <div className="lg:px-16  2xl:w-1/2 flex flex-col gap-5 pb-10 lg:pb-0 border-b border-[#F3F2FA] lg:border-b-0 lg:border-r">
            <h1 className="custom-font text-2xl mt-10 lg:mt-0">Services</h1>
            <div className="flex flex-col gap-3">
                <div className="text-sm">Book Publishing</div>
                <div className="text-sm">Book Writing</div>
                <div className="text-sm">Book Editing</div>
                <div className="text-sm">Book Marketing</div>
                <div className="text-sm">Proofreading Services</div>
                <div className="text-sm">Ghostwriting</div>
                <div className="text-sm">Children Book Publication</div>
            </div>
          </div>
          <div className="lg:pl-16 2xl:w-1/2 flex flex-col gap-5 pb-10 lg:pb-0">
            <h1 className="custom-font text-2xl mt-10 lg:mt-0">Awwards</h1>
            <div className="flex flex-col gap-6">
                    <div><img className="h-24" src={`/Image 10.png`} alt="" /></div>
                    <div><img className="h-20" src={`/Image 9.png`} alt="" /></div>
            </div>
          </div>
        </section>
        <section className="mt-14 w-full  md:px-6 border-b border-t ">
            <div className=" py-1 flex justify-between items-center">
                {/* <div><img src={footerr} alt="" /></div> */}
                <div className=" flex md:gap-3">
                  <span><img className="h-4" src={`/Visa.png`} alt="" /></span>
                  <span><img className="h-4" src={`/MasterCard.png`} alt="" /></span>
                  <span><img className="h-4" src={`/AmericanExpress.png`} alt="" /></span>
                  </div>
                <p className="text-[0.5rem] md:text-xs opacity-60 ">&copy; 2025 - All Rights Reserved</p>
                <p className="text-[0.5rem] md:text-xs opacity-60">Term of Use | Privacy Policy</p>
            </div>
        </section>
      </div>
    </>
  );
};
export default Footer;