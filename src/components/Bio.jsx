import React from "react";
import bioimg from "../images/Ahad.jpeg";
import insta from "../svg/instagram-svgrepo-com.svg";
import github from "../svg/github-outline-svgrepo-com.svg";
import fb from "../svg/facebook-176-svgrepo-com.svg";
import linkedin from "../svg/linkedin-161-svgrepo-com.svg";

const Bio = () => {
  return (
    <div className="md:mx-12 mx-2 lg:fixed static lg:mx-0 lg:w-[23%]">
      <div className="border bg-[#161616] relative px-7 py-10 border-[#303033] w-full rounded-3xl flex flex-col justify-between items-center lg:ml-14">
        <div>
          <h1 className="text-white pb-1 lg:text-2xl text-3xl text-center font-syne font-bold">
            Ahad Khalil
          </h1>
          <img
            src={bioimg}
            className="lg:h-[240px] sm:h-[588px] h-[320px] lg:w-[240px] sm:w-[588px] object-cover rounded-3xl"
            alt=""
          />
        </div>
        <div className="mt-3 flex flex-col self-start gap-y-5">
          <div>
            <p className="text-[#636368] text-sm font-syne font-medium leading-[15px]">
              Specialization:
            </p>
            <p className="text-[#e9e9f1] text-[16px] font-syne font-semibold">
              Front-end Developer
            </p>
          </div>
          <div>
            <p className="text-[#636368] text-sm font-syne leading-[15px]">
              Based in:
            </p>
            <p className="text-[#e9e9f1] text-[16px] font-syne font-semibold">
              Pakistan, Lahore
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <ul className="flex justify-center mt-3 lg:gap-x-3 md:gap-x-20 gap-x-8 w-full icons-gap bg cursor-pointer">
            <a
              href="https://www.facebook.com/profile.php?id=100069254975472"
              target="_blank"
              className="border border-[#636368] h-10 w-10 flex justify-center items-center rounded-full hover:bg-gradient-to-r from-violet-400 to-fuchsia-400"
            >
              <img src={fb} alt="" />
            </a>
            <a
              href="https://www.instagram.com/itx.ahad.official/"
              target="_blank"
              className="border border-[#636368] h-10 w-10 flex justify-center items-center rounded-full hover:bg-gradient-to-r from-violet-400 to-fuchsia-400"
            >
              <img src={insta} alt="" />
            </a>
            <a
              href="https://github.com/ahadwebdev"
              target="_blank"
              className="border border-[#636368] h-10 w-10 flex justify-center items-center rounded-full hover:bg-gradient-to-r from-violet-400 to-fuchsia-400"
            >
              <img src={github} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-ahad-khalil/"
              target="_blank"
              className="border border-[#636368] h-10 w-10 flex justify-center items-center rounded-full hover:bg-gradient-to-r from-violet-400 to-fuchsia-400"
            >
              <img src={linkedin} alt="" />
            </a>
          </ul>
          <a
            href="#contactform"
            class="button bg-gradient-to-r from-violet-300 to-fuchsia-300 lg:w-[220px] xl:w-[240px] w-full font-syne font-semibold mt-3"
          >
            <a class="label-up bg-gradient-to-r from-violet-300 to-fuchsia-300 font-syne font-semibold">
              Let's Work Together!
            </a>
            <a class="label-up bg-gradient-to-r from-violet-300 to-fuchsia-300 font-syne font-semibold">
              Let's Work Together!
            </a>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bio;
