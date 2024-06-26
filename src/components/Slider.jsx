import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import Testimonial1 from "../images/Testimonial1.webp";
import Testimonial2 from "../images/Testimonial2.webp";
import { FaDiamond } from "react-icons/fa6";

const Slider = () => {
  return (
    <div className="flex flex-col gap-y-7">
      <div className="flex flex-col gap-y-4">
        <p className=" text-gray-200 text-sm font-syne font-semibold border border-[#303033] rounded-3xl px-5 py-2 text-nowrap w-min flex justify-center items-center gap-x-2">
          <FaDiamond className="text-[#dcbccf]" />
          Testimonials
        </p>
        <h1 className=" text-2xl sm:text-6xl  text-[#dcbccf] leading-20 font-syne font-medium w-full">
          Clients say about me
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-y-3">
        <div className="border border-[#303033] px-6 py-10 rounded-3xl">
          <div className="flex sm:flex-row  flex-col items-center gap-x-5">
            <img src={Testimonial1} className="h-24 w-24 rounded-3xl" alt="" />
            <div>
              <h1 className="text-white text-center sm:text-start text-2xl font-syne font-bold">
                Alex Tomanto
              </h1>
              <p className="text-white text-center sm:text-start text-sm font-syne font-medium">
                Brand Manager in Instant Design
              </p>
              <div className="text-[#dcbccf] pt-3 flex justify-center sm:justify-start text-xl gap-x-2">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
            </div>
          </div>
          <p className="text-gray-300 font-syne font-medium w-[95%] text-lg pt-3">
            "Ahad is exceptional! Their skills in HTML, CSS, JavaScript, and
            Tailwind CSS brought our vision to life flawlessly. Responsive,
            talented, and passionate, Ahad delivers outstanding results. We
            highly recommend their services!"
          </p>
        </div>
        <div className="border border-[#303033] px-6 py-10 rounded-3xl">
          <div className="flex sm:flex-row flex-col items-center gap-x-5">
            <img src={Testimonial2} className="h-24 w-24 rounded-3xl" alt="" />
            <div>
              <h1 className="text-white text-2xl sm:text-start text-center font-syne font-bold">
                Jenny Pineapple
              </h1>
              <p className="text-white text-sm sm:text-start text-center font-syne font-medium">
                SEO in Creative people
              </p>
              <div className="text-[#dcbccf] justify-center sm:justify-start pt-3 flex text-xl gap-x-2">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
            </div>
          </div>
          <p className="text-gray-300 font-syne font-medium w-[95%] text-lg pt-3">
            "He is a gem! Their proficiency Tailwind CSS brought our project to
            life seamlessly. Their commitment, creativity, and promptness
            exceeded our expectations. We're incredibly impressed and grateful
            for their expertise!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
