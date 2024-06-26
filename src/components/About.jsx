import React from "react";
import { FaDiamond } from "react-icons/fa6";
const About = () => {
  const handleDownload = () => {
    const resumeUrl = "/resume.pdf";
    const downloadLink = document.createElement("a");
    downloadLink.href = resumeUrl;
    downloadLink.download = "/resume.pdf";
    downloadLink.click();
  };
  return (
    <div id="about" className="flex flex-col gap-y-7">
      <p className=" text-gray-200 text-sm font-syne font-semibold border border-[#303033] rounded-3xl px-5 py-2 text-nowrap w-min flex justify-center items-center gap-x-2">
        <FaDiamond className="text-[#dcbccf]" /> About me
      </p>
      <h1 className="text-2xl sm:text-6xl  text-[#dcbccf] font-syne font-medium lg:w-[90%] w-full">
        Turning complex problems into simple code
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-x-7 gap-y-5">
        <div className="flex flex-col justify-center items-center border border-[#303033] px-8  py-5 rounded-3xl">
          <h1 className="text-7xl font-syne font-bold text-[#dcbccf]">40+</h1>
          <p className="text-xl font-syne font-semibold text-center text-gray-200">
            Happy Clients
          </p>
        </div>
        <div className="flex flex-col justify-center items-center border border-[#303033] px-8  py-5 rounded-3xl">
          <h1 className="text-7xl font-syne font-bold text-[#dcbccf]">2+</h1>
          <p className="text-xl font-syne font-semibold text-center  text-gray-200">
            Years of experience
          </p>
        </div>
        <div className="flex flex-col justify-center items-center border border-[#303033] px-8 py-5 rounded-3xl">
          <h1 className="text-7xl font-syne font-bold text-[#dcbccf]">50+</h1>
          <p className="text-xl font-syne text-center font-semibold  text-gray-200">
            Projects done
          </p>
        </div>
      </div>
      {/* Myself */}
      <div className="flex md:flex-row flex-col justify-center md:gap-x-10 gap-y-10">
        <div>
          <p className="text-xl text-gray-400 font-syne font-medium w-full ">
            I'm a web developer with 1.5 yearsof experience. I know HTML, CSS,
            JavaScript, Tailwind CSS and also React well. Making websites is my
            thing. I enjoy turning designs into real websites. I work hard to
            make sure everything looks great and works smoothly. I like figuring
            out coding problems and learning new things. I pay attention to
            small details and always try to do my best. My goal is to make
            websites that not only look good but also make people happy to use
            them.
          </p>
          <div
            onClick={handleDownload}
            class="button2 bg-gradient-to-r from-violet-300 to-fuchsia-300 w-[180px] font-syne font-semibold mt-3 cursor-pointer"
          >
            <span class="label-up2 bg-gradient-to-r from-violet-300 to-fuchsia-300 font-syne font-semibold">
              Download CV
            </span>
            <span class="label-up2 bg-gradient-to-r from-violet-300 to-fuchsia-300 font-syne font-semibold">
              Download CV
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div>
            <p className="text-sm text-gray-400 font-syne font-semibold">
              Name
            </p>
            <h1 className="text-lg  text-[#dcbccf] font-syne font-semibold before:content-[''] before:absolute relative before:bg-white before:w-0 before:h-[1px] before:bottom-0 hover:before:w-[45%] before:duration-700 hover:transition-all cursor-pointer">
              Ahad Khalil
            </h1>
          </div>
          <div>
            <p className="text-sm text-gray-400 font-syne font-semibold">
              Phone
            </p>
            <a
              href="tel:+923284108216"
              className="text-lg text-[#dcbccf] font-semibold before:content-[''] before:absolute relative before:bg-white before:w-0 before:h-[1px] before:bottom-0 hover:before:w-full before:duration-700 hover:transition-all cursor-pointer"
            >
              +92 328-410-8216
            </a>
          </div>
          <div>
            <p className="text-sm text-gray-400 font-syne font-semibold">
              Email
            </p>
            <a
              href="mailto:ahadkhalildev@gmail.com"
              className="text-lg text-[#dcbccf] font-syne font-semibold before:content-[''] before:absolute relative before:bg-white before:w-0 before:h-[1px] before:bottom-0 hover:before:w-full before:duration-700 hover:transition-all cursor-pointer"
            >
              ahadkhalildev@gmail.com
            </a>
          </div>
          <div>
            <p className="text-sm text-gray-400 font-syne font-semibold">
              Location
            </p>
            <h1 className="text-lg text-[#dcbccf] font-syne font-semibold before:content-[''] before:absolute relative before:bg-white before:w-0 before:h-[1px] before:bottom-0 hover:before:w-[65%] before:duration-700 hover:transition-all cursor-pointer">
              Lahore, Pakistan
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
