import React from "react";
import Html from "../svg/html.svg";
import Css from "../svg/css.svg";
import Js from "../svg/javascript.svg";
import SCSS from "../svg/scss-svgrepo-com.svg";
import Bootstrap from "../svg/bootstrap.svg";
import Tailwindcss from "../svg/tailwindcss.svg";
import ReactJs from "../svg/React.svg";

const Tools = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <h1 className="text-4xl text-white font-syne font-bold">My Expertise</h1>
      <div className="grid lg:grid-cols-5 gap-x-5 sm:grid-cols-3 md:grid-cols-4 grid-cols-2  gap-y-5 Icons">
        <div className="border border-[#303033] flex flex-col justify-center items-center gap-y-2 rounded-3xl py-4 ">
          <img src={Html} alt="" />
          <p className="text-white text-lg font-syne font-bold">HTML</p>
        </div>
        <div className="border border-[#303033] flex flex-col justify-center items-center gap-y-2 rounded-3xl py-4 ">
          <img src={Css} alt="" />
          <p className="text-white text-lg font-syne font-bold">CSS</p>
        </div>
        <div className="border border-[#303033] flex flex-col justify-center items-center gap-y-2 rounded-3xl py-4 ">
          <img src={SCSS} alt="" />
          <p className="text-white text-lg font-syne font-bold">SCSS</p>
        </div>
        <div className="border border-[#303033] flex flex-col justify-center items-center gap-y-2 rounded-3xl py-4">
          <img src={Bootstrap} alt="" />
          <p className="text-white text-lg font-syne font-bold">Bootstrap</p>
        </div>
        <div className="border border-[#303033] flex flex-col justify-center items-center gap-y-2 rounded-3xl py-4 ">
          <img src={Js} alt="" />
          <p className="text-white text-lg font-syne font-bold">JavaScript</p>
        </div>
        <div className="border border-[#303033] flex flex-col justify-center items-center gap-y-2 rounded-3xl  py-4">
          <img src={Tailwindcss} alt="" />
          <p className="text-white text-lg font-syne font-bold">TailwindCSS</p>
        </div>
        <div className="border border-[#303033] flex flex-col justify-center items-center gap-y-2 rounded-3xl  py-4">
          <img src={ReactJs} alt="" />
          <p className="text-white text-lg font-syne font-bold">React</p>
        </div>
      </div>
    </div>
  );
};

export default Tools;
