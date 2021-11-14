import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import heroImg from "../images/hero-img.png";
import hero from "../images/hero.jpg";
// import { Button } from "@material-ui/core";

function Home() {
  return (
    <div className="hero-bg  h-screen">
      <Navbar />

      <div className="flex items-center content-center max-h-screen justify-between px-5 mt-9 md:p-10 border-blue-900">
        <div className=" text-white  max-w-md ">
          <p className="text-base tracking-wider glass-effect custom-width p-2 rounded-full ">
            We Love We Care
          </p>
          <p className="text-5xl font-bold tracking-wide pt-4">
            Life Insurance for Ones You Love
          </p>
          <p className="text-lg tracking-wider pt-6">
            Celebrate all life's moment knowing the ones you love are protected
          </p>
          <button className="bg-yellow-500 font-normal tracking-wide px-6 py-2 rounded-full shadow-2xl mt-11">
            Call Now
          </button>
        </div>
        <div className="hidden border-yellow-400">
          <Image
            className="self-start  border-yellow-400"
            src={hero}
            alt="Hero-img"
            height="800px"
            width="500px"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
