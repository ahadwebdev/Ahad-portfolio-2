import React from "react";
import { FaDiamond } from "react-icons/fa6";

const Education = () => {
  return (
    <div className="flex flex-col gap-y-20">
      <div className="flex flex-col gap-y-5">
        <p
          id="resume"
          className=" text-gray-200 text-sm font-syne font-semibold border border-[#303033] rounded-3xl px-5 py-2 text-nowrap w-min flex justify-center items-center gap-x-2"
        >
          <FaDiamond className="text-[#dcbccf]" />
          Resume
        </p>
        <h1 className=" text-2xl sm:text-6xl text-[#dcbccf] leading-20 font-syne font-medium w-full">
          Education and practical experience
        </h1>
        <p className="text-[#BEBCC8] text-lg font-syne font-medium w-[96%] pt-7 ">
          I'm a hands-on web developer who embarked on my coding journey Govt,
          Rangers-high school. Through practical experience, I've mastered{" "}
          <span className="font-extrabold before:content-[''] before:absolute relative before:bg-white before:w-0 before:h-[1px] before:bottom-0 hover:before:w-full before:duration-700 hover:transition-all cursor-pointer">
            HTML, CSS, and JavaScript
          </span>
          , creating immersive websites that captivate users with seamless
          functionality.
        </p>
      </div>
      <div className="flex flex-col gap-y-5">
        <h1 className="sm:text-4xl text-3xl text-[#c9c9d0] font-syne font-bold before:content-[''] before:absolute relative before:bg-white before:w-0 before:h-[1px] before:bottom-0 lg:hover:before:w-[33%] before:duration-700 hover:transition-all cursor-pointer">
          My education
        </h1>
        <hr className="bg-gray-600 h-[1px] w-full" />
        <div className="text-white flex md:flex-row flex-col justify-between items-start gap-y-5 w-full py-5">
          <h1 className="text-sm  font-medium w-[60%]">2019 - 2021</h1>
          <div className="w-full font-syne">
            <h1 className="font-bold text-lg">Matriculation</h1>
            <h1 className="text-sm">Computer Science</h1>
          </div>
          <p className="md:w-full font-syne text-[15px]">
            Passed by Govt, Rangers High School, Lahore Cantt.
          </p>
        </div>
        <hr className="bg-gray-600 h-[1px] w-full" />
        <div className="text-white flex md:flex-row flex-col justify-between items-start gap-y-5 w-full py-5 ">
          <h1 className="text-sm font-medium w-[60%]">2021 - 2023</h1>
          <div className="w-full  font-syne">
            <h1 className="font-bold text-lg">Intermediate</h1>
            <h1 className="text-sm">Computer Science (ICS)</h1>
          </div>
          <p className="w-full font-syne text-[15px]">
            Passed by Govt, Islamia College, Lahore Cantt.
          </p>
        </div>
        <hr className="bg-gray-600 h-[1px] w-full" />
        <div className="text-white flex md:flex-row flex-col justify-between items-start gap-y-5 w-full py-5 ">
          <h1 className="text-sm font-medium w-[60%]">2023 - Continue</h1>
          <div className="w-full  font-syne">
            <h1 className="font-bold text-lg">Graduation</h1>
            <h1 className="text-sm">BSCS</h1>
          </div>
          <p className="w-full font-syne text-[15px]">
            Lahore institute of Science & Technology
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <h1 className="sm:text-4xl text-2xl text-[#c9c9d0] font-syne font-bold before:content-[''] before:absolute relative before:bg-white before:w-0 before:h-[1px] before:bottom-0 lg:hover:before:w-[40%] before:duration-700 hover:transition-all cursor-pointer">
          Work Experience
        </h1>
        <hr className="bg-gray-600 h-[1px] w-full" />
        <div className="text-white flex md:flex-row flex-col justify-between items-start gap-y-5 w-full py-5 ">
          <h1 className="text-sm font-medium w-[60%]">2023 - Continue</h1>
          <div className="w-full  font-syne">
            <h1 className="font-bold text-lg">Web Development</h1>
            <h1 className="text-sm">1.5 years Experience</h1>
          </div>
          <p className="w-full font-syne text-[15px]">
            Web Developer proficient in Tailwind and React, with 1.5 years of
            hands-on expertise. Skilled in crafting dynamic, user-centric
            websites that marry functionality with sleek design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
