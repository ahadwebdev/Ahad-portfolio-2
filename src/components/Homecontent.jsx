import React from "react";
import { FaDiamond } from "react-icons/fa6";
import { IoCloudDownloadOutline } from "react-icons/io5";

const Homecontent = () => {
  const handleDownload = () => {
    const resumeUrl = "/CV.jpeg";
    const downloadLink = document.createElement("a");
    downloadLink.href = resumeUrl;
    downloadLink.download = "/CV.jpeg";
    downloadLink.click();
  };
  return (
    <div className="flex flex-col justify-end gap-y-5 h-[500px]">
      <p className=" text-gray-200 text-sm font-syne font-semibold border border-[#303033] rounded-3xl px-5 py-2 text-nowrap w-min flex items-center gap-x-2 justify-center">
        <FaDiamond className="text-[#dcbccf]" /> Let's connect!
      </p>
      <h1 className="lg:text-7xl text-4xl sm:text-6xl text-[#dcbccf] font-syne font-medium lg:w-[70%] w-[80%]">
        I'm Ahad Khalil Frontend Web Developer.
      </h1>
      <div className="flex sm:flex-row flex-col gap-y-5 gap-x-5">
        <a href="#portfolio" class="mywork px-5 border border-[#303033] font-syne font-semibold mt-3">
          <a class="label-up1  font-syne font-semibold text-gray-200">
            My Works
          </a>
          <a class="label-up1 font-syne font-semibold text-gray-200">
            My Works
          </a>
        </a>
        <button
          onClick={handleDownload}
          className=" mt-2 text-gray-300 text-lg font-syne font-semibold  flex justify-center items-center gap-x-2 before:content-[''] before:absolute relative before:bg-white before:w-0 before:h-[1px] before:bottom-0 md:hover:before:w-[100%] before:duration-500 md:hover:transition-all cursor-pointer "
        >
          Download CV
          <IoCloudDownloadOutline className="text-xl mt-1" />
        </button>
      </div>
    </div>
  );
};
export default Homecontent;
