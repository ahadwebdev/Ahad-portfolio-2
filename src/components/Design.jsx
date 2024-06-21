import React from "react";
import Design1 from "../images/Design1.webp";
import Design2 from "../images/Design2.webp";
import Design3 from "../images/Design3.webp";
import Design4 from "../images/Design4.webp";
const Design = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-7 place-items-center">
      <div className="border border-[#303033] w-full flex flex-col gap-y-2 rounded-3xl justify-center md:items-center items-start pt-4 overflow-hidden">
        <div className="px-6 flex flex-col w-full gap-y-5">
          <h1 className="sm:text-3xl text-2xl text-gray-200 w-full font-syne font-bold">
            Unique Design
          </h1>
          <div className="flex sm:flex-row flex-col gap-y-2 sm:gap-x-4">
            <p className="h-8 w-36 border border-gray-600 text-gray-300 flex items-center justify-center rounded-full font-syne ">
              Adobe Photoshop
            </p>
            <p className="h-8 w-28 border border-gray-600 text-gray-300 flex items-center justify-center rounded-full font-syne ">
              Figma
            </p>
          </div>
          <p className="text-[16px] font-syne font-medium text-gray-300">
            Deliver bespoke solutions and designs for your business and
            projects.
          </p>
        </div>
        <img
          src={Design1}
          className="md:w-[400px] w-full md:-mb-10 sm:-mb-40"
          alt=""
        />
      </div>
      <div className="border border-[#303033] w-full flex flex-col gap-y-2 rounded-3xl justify-center items-center pt-4 overflow-hidden">
        <div className="px-5 flex flex-col w-full gap-y-5">
          <h1 className="text-3xl text-gray-200 font-syne font-bold">
            Different Layouts
          </h1>
          <div className="flex sm:flex-row flex-col gap-y-2 sm:gap-x-4">
            <p className="h-8 w-32 border border-gray-600 text-gray-300 flex items-center justify-center rounded-full font-syne ">
              Learn to code
            </p>
            <p className="h-8 w-32 border border-gray-600 text-gray-300 flex items-center justify-center rounded-full font-syne ">
              Learn to design
            </p>
          </div>
          <p className="text-[16px] md:w-[100%] font-syne font-medium text-gray-300">
            Consistently provide tailored solutions for your business and
            projects.
          </p>
        </div>
        <img
          src={Design2}
          className="md:w-[400px] w-full md:-mb-10 sm:-mb-40 -mb-10"
          alt=""
        />
      </div>
      <div className="border border-[#303033] w-full flex flex-col gap-y-3 rounded-3xl justify-center items-center pt-4 overflow-hidden">
        <div className="px-5 flex flex-col w-full gap-y-5">
          <h1 className="text-2xl w-full text-gray-200 font-syne font-bold">
            Make it simple
          </h1>
          <div className="flex sm:flex-row flex-col gap-y-2 sm:gap-x-4">
            <p className="h-8 w-32 border border-gray-600 text-gray-300 flex items-center justify-center rounded-full font-syne ">
              Layouts
            </p>
            <p className="h-8 w-32 border border-gray-600 text-gray-300 flex items-center justify-center rounded-full font-syne ">
              Design
            </p>
          </div>
          <p className="text-[16px] font-syne font-medium text-gray-300">
            Maintain regular, transparent communication to keep you informed of
            progress.
          </p>
        </div>
        <img
          src={Design3}
          className="md:w-[400px] w-full md:-mb-10 sm:-mb-40 -mb-10"
          alt=""
        />
      </div>
      <div className="border border-[#303033] w-full flex flex-col gap-y-3 rounded-3xl justify-center items-center pt-4 overflow-hidden">
        <div className="px-5 flex flex-col w-full gap-y-5">
          <h1 className="text-3xl w-full text-gray-200 font-syne font-bold">
            24/7 response
          </h1>
          <div className="flex sm:flex-row flex-col gap-y-2 sm:gap-x-4">
            <p className="h-8 w-32 border border-gray-600 text-gray-300 flex items-center justify-center rounded-full font-syne ">
              24 hours
            </p>
            <p className="h-8 w-32 border border-gray-600 text-gray-300 flex items-center justify-center rounded-full font-syne ">
              7 days
            </p>
          </div>
          <p className="text-[16px] font-syne font-medium text-gray-300">
            Providing prompt responses for efficient communication and expedited
            task completion
          </p>
        </div>
        <img
          src={Design4}
          className="md:w-[400px] w-full md:-mb-10 sm:-mb-40 -mb-10"
          alt=""
        />
      </div>
    </div>
  );
};
export default Design;
