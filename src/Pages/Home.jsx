import React from "react";
import Bio from "../components/Bio";
import Navbar from "../components/Navbar";
import Homecontent from "../components/Homecontent";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Design from "../components/Design";
import Education from "../components/Education";
import Tools from "../components/Tools";
import Slider from "../components/Slider";
import Form from "../components/Form";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-[#111111] flex lg:flex-row justify-between w-full flex-col">
      <div className="lg:w-[25%]">
        <Bio />
      </div>
      <div className="flex flex-col lg:w-[73%] px-10">
        <Navbar />
        <div className="lg:space-y-40 space-y-32">
          <Homecontent />
          <Portfolio />
          <About />
          <Design />
          <Education />
          <Tools />
          <Slider />
          <Form />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
