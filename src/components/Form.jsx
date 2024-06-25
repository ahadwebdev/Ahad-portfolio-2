import React, { useRef } from "react";
import { FaDiamond } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(`service_4x7m3gq`, `template_a9d398w`, form.current, {
        publicKey: `34-WVnqYhycTMjLRg`,
      })
      .then(
        () => {
          console.log("Email Send!!!");
        },
        (error) => {
          console.log(`Failed....`, error.text);
        }
      );
  };
  return (
    <div>
      <div className="flex flex-col gap-y-4">
        <p className=" text-gray-200 text-sm font-syne font-semibold border border-[#303033] rounded-3xl px-5 py-2 text-nowrap w-min flex justify-center items-center gap-x-2">
          <FaDiamond className="text-[#dcbccf]" /> Contact
        </p>
        <h1 className="sm:text-5xl text-xl  text-[#dcbccf] font-syne font-bold w-full">
          Let's make something awesome together!
        </h1>
      </div>
      <form action="" ref={form} onSubmit={sendEmail}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 pt-10">
          <div class="relative">
            <input
              id="username"
              name="username"
              type="text"
              class="border-b border-gray-300 py-2 focus:border-b-2 focus:border-gray-300 transition-colors focus:outline-none peer bg-inherit text-white font-syne font-semibold w-full"
            />
            <label
              for="username"
              class="absolute left-0 top-1 cursor-text text-gray-300 font-syne font-bold text-xl peer-focus:hidden peer-focus:-top-4 transition-all peer-focus:text-gray-300"
            >
              Your Name*
            </label>
          </div>
          <div class="relative">
            <input
              id="email"
              name="email"
              type="email"
              class="border-b border-gray-300 py-2 focus:border-b-2 focus:border-gray-300 transition-colors focus:outline-none peer bg-inherit text-white font-syne font-semibold w-full"
            />
            <label
              for="email"
              class="absolute left-0 top-1 cursor-text text-gray-300 font-syne font-bold text-xl peer-focus:hidden peer-focus:-top-4 transition-all peer-focus:text-gray-300"
            >
              Your Email*
            </label>
          </div>
          <div class="relative">
            <input
              id="Companyname"
              name="Companyname"
              type="text"
              class="border-b border-gray-300 py-2 focus:border-b-2 focus:border-gray-300 transition-colors focus:outline-none peer bg-inherit text-white font-syne font-semibold w-full"
            />
            <label
              for="Companyname"
              class="absolute left-0 top-1 cursor-text text-gray-300 font-syne font-bold text-xl peer-focus:hidden peer-focus:-top-4 transition-all peer-focus:text-gray-300"
            >
              Company Name*
            </label>
          </div>
          <div class="relative">
            <input
              id="Phone"
              name="Phone"
              type="tel"
              class="border-b border-gray-300 py-2 focus:border-b-2 focus:border-gray-300 transition-colors focus:outline-none peer bg-inherit text-white font-syne font-semibold w-full"
            />
            <label
              for="Phone"
              class="absolute left-0 top-1 cursor-text text-gray-300 font-syne font-bold text-xl peer-focus:hidden peer-focus:-top-4 transition-all peer-focus:text-gray-300"
            >
              Phone Number*
            </label>
          </div>
        </div>
        <div class="relative mt-10">
          <textarea
            name="textarea"
            id="textarea"
            cols="10"
            rows="6"
            className="border-b border-gray-300 focus:border-b-2 focus:border-gray-300 transition-colors focus:outline-none peer bg-inherit text-white font-syne font-semibold w-full"
          ></textarea>
          <label
            for="textarea"
            class="absolute left-0 top-1 cursor-text text-gray-300 font-syne font-bold text-xl peer:hidden peer-focus:-top-4 transition-all peer-focus:text-gray-300"
          >
            A Few Words
          </label>
        </div>
        <button class="button2 bg-gradient-to-r from-violet-300 to-fuchsia-300 w-[200px] font-syne font-bold mt-3">
          <span class="label-up2 bg-gradient-to-r from-violet-300 to-fuchsia-300 font-syne font-bold">
            Send Message
          </span>
          <span class="label-up2 bg-gradient-to-r from-violet-300 to-fuchsia-300 font-syne font-bold">
            Send Message
          </span>
        </button>
      </form>
    </div>
  );
};
export default Form;
