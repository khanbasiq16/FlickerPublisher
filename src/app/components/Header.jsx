"use client";

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

const Header = () => {
    const router = useRouter()
  const pathname = usePathname();
  
    return (
       <header className=" h-1/4 w-full flex justify-center items-center  relative z-20 py-7  ">
      <div className=" w-full h-full flex justify-between items-center  px-3  md:px-10  xl:px-20   ">
        <div className=" h-14       2xl:h-20  3xl:h-24  md:mr-6 ">
          <img
            // onClick={NavigateToHome}
            className="h-full w-full object-contain"
            src="/headerLogo.svg"
            alt=""
          />
        </div>

          <div className=" hidden sm:flex md:flex lg:flex xl:flex 2xl:flex 3xl:flex  items-center gap-1 xl:gap-10 text-[#F6EFE8]">
  <div className="flex   text-xs  xl:text-sm 2xl:text-sm list-none">
            <li className="relative group">
              <Link
                href="/"
             
              className={`cursor-pointer px-2 py-2 custom-reg-font transition-all origin-center duration-300 hover:text-gray-300 rounded-md flex items-center 2xl:text-base 3xl:text-xl ${
                pathname === "/" ? "text-[#F6EFE8] " : "text-gray-400"
              }`}>
                Home
              </Link>

              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#F6EFE8] group-hover:origin-center transition-all duration-300 group-hover:w-full"></span>
            </li>


            <li className="relative group">
              <Link
                href="/About"
                className=
                  { `cursor-pointer px-2 py-2 custom-reg-font transition-all origin-center duration-300 hover:text-gray-300 rounded-md flex items-center 2xl:text-base 3xl:text-xl ${pathname === "/Blogs" ? "text-[#F6EFE8] " : "text-gray-400"}`}
              
              
              >
              
                About
              </Link>

              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#F6EFE8] transition-all duration-300 group-hover:w-full"></span>
            </li>


            
            <li
           
              className="relative"
            >
              <Link
                href="#"
                className=
                  "cursor-pointer px-2 py-2 custom-reg-font transition-all origin-center duration-300 text-gray-400  hover:text-gray-300 rounded-md flex items-center 2xl:text-base 3xl:text-xl"
              
              >
                <span className="3xl:mr-1">Services</span>
                {/* <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  width="16"
                  height="16"
                  fill="currentColor"
                  animate={{ rotate: isHoveredServices ? -180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l7.1-7.1c9.4-9.4 24.6-9.4 33.9 0L160 288l112-112c9.4-9.4 24.6-9.4 33.9 0l7.1 7.1c9.4 9.4 9.4 24.6 0 33.9L177 352.3c-9.4 9.4-24.6 9.4-34 0z" />
                </motion.svg> */}
              </Link>
              {/* {isHoveredServices && <MenuNavigate sethoverredmenu={setIsHoveredServices} />} */}
            </li>
         
            <li className="relative group">
              <Link
                href="/Pricing"
                className=
                { `cursor-pointer px-2 py-2 custom-reg-font transition-all origin-center duration-300 hover:text-gray-300 rounded-md flex items-center 2xl:text-base 3xl:text-xl ${pathname === "/industries" ? "text-[#F6EFE8] " : "text-gray-400"}`}
            >
                Pricing
              </Link>

              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#F6EFE8] transition-all duration-300 group-hover:w-full"></span>
            </li>


            <li className="relative group">
             

              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#F6EFE8] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link
                href="/pricing"
                className=
                { `cursor-pointer px-2 py-2 custom-reg-font transition-all origin-center duration-300 hover:text-gray-300 rounded-md flex items-center 2xl:text-base 3xl:text-xl ${pathname === "/pricing" ? "text-[#F6EFE8] " : "text-gray-400"}`}
            >
                Faqs
              </Link>

              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#F6EFE8] transition-all duration-300 group-hover:w-full"></span>
            </li>
           
            <li className="relative group">
              <Link
                href="/Blogs"
                className=
                { `cursor-pointer px-2 py-2 custom-reg-font transition-all origin-center duration-300 hover:text-gray-300 rounded-md flex items-center 2xl:text-base 3xl:text-xl ${pathname === "/pricing" ? "text-[#F6EFE8] " : "text-gray-400"}`}
            >
                Blogs
              </Link>

              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#F6EFE8] transition-all duration-300 group-hover:w-full"></span>
            </li>
           
            <li className="relative group">
              <Link
                href="/contactus"
                className=
                { `cursor-pointer px-2 py-2 custom-reg-font transition-all origin-center duration-300 hover:text-gray-300 rounded-md flex items-center 2xl:text-base 3xl:text-xl ${pathname === "/pricing" ? "text-[#F6EFE8] " : "text-gray-400"}`}
            >
                Contact us
              </Link>

              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#F6EFE8] transition-all duration-300 group-hover:w-full"></span>
            </li>

            <div className=' flex gap-3 ml-2'>

            <button className='px-16 py-2 bg-white bg-[#F3F2FA] text-[#2E234B] transiton-all duration-300 hover:bg-transparent hover:text-[#F3F2FA]'>
                lets Discuss
            </button>
           <button className="px-16 py-2 bg-transparent border transition-all duration-300 text-[#F3F2FA] hover:bg-[#F3F2FA] hover:text-[#2E234B]">
  (123) 456-7890
</button>

           
            </div>
          </div>


          </div>


        </div>

        </header>
  )
}

export default Header