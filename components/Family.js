import React from "react";
import Image from "next/image";
import family1 from "../images/family1.png";

function Family() {
  return (
    <div className="lg:flex justify-between lg:px-20">
      <div>
        <div>
          <Image
            className="goBack border-8 border-white familyPic-borderRadius"
            src={family1}
            alt="family first"
            width="400%"
            height="600%"
          />
        </div>

       {/* <div className=" hidden z-0 bg-blue-100 lg:w-52 w-32 -right-44 rounded-xl px-3 py-2 relative -top-36  lg:-right-64 ">
          <p className="text-primaryColor text-lg font-bold">
            NewBorn Insurance
          </p>
          <p className=" text-base ">
            make the best decision and get covered today
          </p>
        </div>
         */}
      </div>

      <div className="px-5 mt-8 max-w-xl lg:mt-14">
        <p className="text-base lg:text-lg pill tracking-wider bg-blue-100 w-32 lg:w-36 px-4 py-2 rounded-full ">
          Family First
        </p>
        <p className="heading-color font-bold text-4xl pt-3 lg:text-6xl ">
          Where Your Little Family Comes First
        </p>
        <p className="text-gray-600 pt-4 lg:text-xl">
          Over the past decade, our motto has been "Where Your Family Comes
          First." For our clients, this is more than just words. It is the
          commitment of providing individualized service
        </p>
        <button className="bg-yellow-500 text-white font-normal text-xl tracking-wide px-6 py-2 rounded-full shadow-2xl mt-12 lg:mt-14">
          Learn More
        </button>

        <div className="flex justify-between max-w-xs mt-9">
          <div className="w-20 ">
            <p className=" heading-color font-bold text-4xl lg:text-5xl">
              10+{" "}
            </p>
            <p className="text-gray-500 lg:text-lg">Family Protected</p>
          </div>

          <div className="w-28 ">
            <p className="heading-color font-bold text-4xl lg:text-5xl">30+ </p>
            <p className="text-gray-500 lg:text-lg">Newborn Baby Protected</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Family;
