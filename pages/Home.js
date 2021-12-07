import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import heroImg from "../images/hero-img.png";
import hero from "../images/hero.jpg";
import heroimg from "../images/hero-img2.gif";
import family1 from "../images/family1.png";
import HeroImg from "../images/HeroImg.png";
import HeroImgCopy from "../images/HeroImg-copy.png";
import heroCropped from "../images/hero-cropped.jpg";
import herofinal from "../images/herofinal.jpg";
// import { Button } from "@material-ui/core";

function Home() {
  return (
    <div className="hero-bg  h-screen">
      <Navbar />

      <div className="flex  max-h-screen justify-between px-5 mt-9 md:px-24 md:mt-14 border-blue-900">
        <div className=" text-white  max-w-md md:max-w-xl ">
          <p className="text-base text-gray-100 tracking-wider glass-effect custom-width p-2 rounded-full ">
            We Love We Care
          </p>
          <p className="text-5xl md:text-6xl font-bold tracking-wide md:leading-tight  pt-4">
            Life Insurance for Ones You Love
          </p>
          <p className="text-lg tracking-wider pt-6 text-gray-200">
            Celebrate all life's moment knowing the ones you love are protected
          </p>
          <button className="bg-yellow-500 font-normal text-xl tracking-wide px-6 py-2 rounded-full shadow-2xl mt-11 md:mt-14">
            Call Now
          </button>
        </div>

        <div className="hidden lg:block overflow-hidden border-8  hero-borderRadius z-0 ">
          <div className="pill bg-white px-4 py-2 rounded-xl lg:w-16 lg:h-16  z-0 absolute -ml-10 mt-8">
            <img
              className="mt-2"
              src="https://img.icons8.com/ios/40/000000/defend-family--v2.png"
            />
          </div>

          <div className='-mb-2'>
          <Image
          className="goBack object-cover "
          src={heroCropped}
          width="360px"
          height="480px"
          alt="hero img"
        />       
          </div>
         
          <p className="z-0 absolute px-5 py-3 top-3/4 right-8 bg-white rounded-xl ">
            We've got you covered with Insurance
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
