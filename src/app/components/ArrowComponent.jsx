"use client"
import LeftArrow from "/public/LeftArrow.png";
import RightArrow from "/public/RightArrow.png";
import Image from "next/image";

const CustomPrevArrow = ({ className, onClick }) => (
  <div
    className={`${className} z-10 left-0 w-10 h-10 bg-white rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition`}
    onClick={onClick}
    style={{ left: "-15px" }} // tweak position if needed
  >
    <Image src={LeftArrow} alt="Prev" width={20} height={20} />
  </div>
);

const CustomNextArrow = ({ className, onClick }) => (
  <div
    className={`${className} z-10 right-0 w-10 h-10 bg-white rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition`}
    onClick={onClick}
    style={{ right: "-15px" }} // tweak position if needed
  >
    <Image src={RightArrow} alt="Next" width={20} height={20} />
  </div>
);
