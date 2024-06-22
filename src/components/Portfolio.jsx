import React from "react";
import cocacola from "../images/coca-cola.jpg";
import portfolio from "../images/portfolio.webp";
import sheildpro from "../images/sheildpro.jpg";
import softson from "../images/softson.jpg";
import { FaDiamond } from "react-icons/fa6";

const Portfolio = () => {
  return (
    <div id="portfolio" className="flex flex-col w-full gap-y-5">
      <p className=" text-gray-200 text-sm font-syne font-semibold border border-[#303033] rounded-3xl px-5 py-2 text-nowrap w-min flex justify-center items-center gap-x-2">
        <FaDiamond className="text-[#dcbccf]" /> Portfolio
      </p>
      <h1 className="sm:text-6xl text-2xl text-[#dcbccf] font-syne font-medium lg:w-[70%] w-full">
        Check out my featured projects
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 place-items-center  ">
        <div className="relative">
          <img
            src={sheildpro}
            className="md:h-80 h-64 w-[500px] object-cover transition-all hover:scale-95 duration-200  rounded-[40px]"
            alt=""
          />
          <div>
            <p className="h-8 w-24 bg-white flex items-center justify-center rounded-full font-syne absolute bottom-7 left-7 port-1 ">
              HTML
            </p>
            <p className="h-8 w-24 bg-white flex items-center justify-center rounded-full font-syne absolute bottom-7 left-36 port-2">
              Tailwind
            </p>
          </div>
        </div>
        <div className="relative">
          <a href="https://tailwind1.softsons.com/" target="_blank">
            <img
              src={softson}
              className=" md:h-80 h-64 w-[500px] object-cover rounded-[40px] transition-all hover:scale-95 duration-200 "
              alt=""
            />
          </a>
          <p className="h-8 w-24 bg-black text-white flex items-center justify-center rounded-full font-syne absolute bottom-7 left-7 port-1">
            HTML
          </p>
          <p className="h-8 w-24 bg-black text-white flex items-center justify-center rounded-full font-syne absolute bottom-7 left-36 port-2 ">
            Tailwind
          </p>
        </div>
        <div className="relative">
          <a href="">
            <img
              src={cocacola}
              className=" md:h-80 h-64 w-[500px] object-cover rounded-[40px] transition-all hover:scale-95 duration-200 "
              alt=""
            />
          </a>
          <p className="h-8 w-24 bg-black text-white flex items-center justify-center rounded-full font-syne absolute bottom-7 left-7 port-1">
            HTML
          </p>
          <p className="h-8 w-24 bg-black text-white flex items-center justify-center rounded-full font-syne absolute bottom-7 left-36 port-2 ">
            CSS
          </p>
        </div>
        <div className="relative">
          <a href="https://abdulahad.vercel.app/" target="_blank">
            <img
              src={portfolio}
              className=" md:h-80 h-64 w-[500px] object-cover rounded-[40px] transition-all hover:scale-95 duration-200 "
              alt=""
            />
          </a>
          <p className="h-8 w-24 bg-white flex items-center justify-center rounded-full font-syne absolute bottom-7 left-7 port-3">
            HTML
          </p>
          <p className="h-8 w-28 bg-white flex items-center justify-center rounded-full font-syne absolute bottom-7 left-36 port-4">
            Bootstrap
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
