import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <h1 className="sm:text-5xl text-3xl text-[#dcbccf] text-center sm:text-start leading-20 font-syne font-medium w-full">
        Want to know more about me, tell me about your project.
      </h1>
      <hr className="bg-gray-600 h-[1px] w-full" />
      <div className="grid md:grid-cols-3 grid-cols-1 place-items-start gap-y-5 md:ml-16">
        <div className="font-syne">
          <h1 className="text-white font-bold text-lg">Location</h1>
          <p className="text-gray-400 font-medium text-[15px] before:content-[''] before:absolute relative before:bg-white before:w-0 before:h-[1px] before:bottom-0 md:hover:before:w-full before:duration-500 md:hover:transition-all cursor-pointer">
            Lahore, Pakistan
          </p>
        </div>
        <div>
          <h1 className="text-white font-bold font-syne text-lg">Phone</h1>
          <p className="text-gray-400 font-medium text-[15px] before:content-[''] before:absolute relative before:bg-white before:w-0 before:h-[1px] before:bottom-0 md:hover:before:w-full before:duration-500 md:hover:transition-all cursor-pointer">
            +92 328 410 8216
          </p>
        </div>
        <div className="font-syne">
          <h1 className="text-white font-bold text-lg">Email</h1>
          <p className="text-gray-400 font-medium text-[15px] before:content-[''] before:absolute relative before:bg-white before:w-0 before:h-[1px] before:bottom-0 md:hover:before:w-full before:duration-500 md:hover:transition-all cursor-pointer">
            ahadkhalildev@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
