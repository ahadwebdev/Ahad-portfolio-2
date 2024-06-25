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
          <div class="relative z-0">
            <input
              id="username"
              name="username"
              type="text"
              class="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-blue-200 peer"
              placeholder=" "
            />
            <label
              for="username"
              class="absolute text-xl font-syne font-bold text-gray-300 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gray-200 peer-focus:dark:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Your Name*
            </label>
          </div>
          <div class="relative z-0">
            <input
              id="email"
              name="email"
              type="email"
              class="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-blue-200 peer"
              placeholder=" "
            />
            <label
              for="email"
              class="absolute text-xl font-syne font-bold text-gray-300 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gray-200 peer-focus:dark:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Your Email*
            </label>
          </div>
          <div class="relative z-0">
            <input
              id="Companyname"
              name="Companyname"
              type="text"
              class="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-blue-200 peer"
              placeholder=" "
            />
            <label
              for="Companyname"
              class="absolute text-xl font-syne font-bold text-gray-300 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gray-200 peer-focus:dark:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Company Name*
            </label>
          </div>
          <div class="relative z-0">
            <input
              id="Phone"
              name="Phone"
              type="tel"
              class="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-blue-200 peer"
              placeholder=" "
            />
            <label
              for="Phone"
              class="absolute text-xl font-syne font-bold text-gray-300 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gray-200 peer-focus:dark:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Phone Name*
            </label>
          </div>
        </div>
        <div class="relative mt-10 z-0">
          <textarea
            id="textarea"
            name="textarea"
            cols="10"
            rows="6"
            class="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-blue-200 peer"
            placeholder=" "
          ></textarea>
          <label
            for="textarea"
            class="absolute text-xl font-syne font-bold text-gray-300 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gray-200 peer-focus:dark:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            A Few Lines
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
