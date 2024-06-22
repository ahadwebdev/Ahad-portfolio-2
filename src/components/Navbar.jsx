import React from "react";
import { RiHomeLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { PiUserDuotone } from "react-icons/pi";
import { LuMenuSquare } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="z-[999999]">
      <div className="lg:flex justify-between w-full hidden fixed">
        <nav className="mt-3 w-[65%]">
          <ul className="flex items-center w-full justify-between font-syne font-semibold text-lg  cursor-pointer ">
            <a
              href="#home"
              className="active:border px-3 py-2 rounded-2xl flex items-center backdrop-blur-md bg-black/10 text-white"
            >
              <li>Home</li>
            </a>
            <a
              href="#portfolio"
              className="active:border px-3 py-2 rounded-2xl flex items-center backdrop-blur-lg bg-black/0 text-[#8b8a91] hover:text-white"
            >
              <li>Portfolio</li>
            </a>
            <a
              href="#about"
              className="active:border px-3 py-2 rounded-2xl flex items-center backdrop-blur-lg bg-black/0 text-[#8b8a91] hover:text-white"
            >
              <li>About me</li>
            </a>
            <a
              href="#resume"
              className="active:border px-3 py-2 rounded-2xl flex items-center backdrop-blur-lg bg-black/0 text-[#8b8a91] hover:text-white"
            >
              <li>Resume</li>
            </a>
            <a
              href="#contactform"
              className="active:border px-3 py-2 flex items-center rounded-2xl backdrop-blur-lg bg-black/0 text-[#8b8a91] hover:text-white"
            >
              <li>Contact</li>
            </a>
            <a
              href="#contactform"
              class="button h-12 w-[150px] bg-gradient-to-r from-violet-300 to-fuchsia-300 lg:w-[240px]font-syne font-normal"
            >
              <a class="label-up bg-gradient-to-r from-violet-300 to-fuchsia-300 font-syne normal">
                Let's Talk
              </a>
              <a class="label-up bg-gradient-to-r from-violet-300 to-fuchsia-300 font-syne font-normal">
                Let's Talk
              </a>
            </a>
          </ul>
        </nav>
      </div>
      {/* Responsive Nav */}
      <nav class="flex justify-center items-center lg:hidden">
        <ul className="text-white text-2xl flex w-[350px] rounded-3xl justify-between items-center  px-5 backdrop-blur-sm bg-black/10 h-12 fixed bottom-12 ">
          <a
            href="#home"
            className="active:bg-white active:text-black active:rounded-full h-8 w-8 flex justify-center items-center"
          >
            <RiHomeLine className="text-[#76747C]" />
          </a>
          <a
            href="#portfolio"
            className="active:bg-white active:text-black active:rounded-full h-8 w-8 flex justify-center items-center"
          >
            <RxDashboard className="text-[#76747C]" />
          </a>
          <a
            href="#about"
            className="active:bg-white active:text-black active:rounded-full h-8 w-8 flex justify-center items-center"
          >
            <PiUserDuotone className="text-[#76747C]" />
          </a>
          <a
            href="#resume"
            className="active:bg-white active:text-black active:rounded-full h-8 w-8 flex justify-center items-center"
          >
            <LuMenuSquare className="text-[#76747C]" />
          </a>
          <a
            href="#contactform"
            className="active:bg-white active:text-black active:rounded-full h-8 w-8 flex justify-center items-center"
          >
            <MdOutlineMailOutline className="text-[#76747C]" />
          </a>
          <a
            href="mailto:ahadkhalildev@gmail.com"
            className="active:bg-white active:text-black active:rounded-full h-10 w-10 flex justify-center items-center bg-gradient-to-r from-violet-300 to-fuchsia-300 rounded-full"
          >
            <RiMessage2Line className="text-black" />
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
