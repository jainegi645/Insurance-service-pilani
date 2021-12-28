import React from "react";
import Image from "next/image";
import family1 from "../images/family1.png";
import { motion } from "framer-motion";

function Family() {
  return (
    <div className="lg:flex justify-between lg:px-20 lg:py-10">
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
      </div>

      <div className="px-5 mt-8 max-w-xl lg:mt-14">
        <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} 
        transition={{delay:1}}
        className="text-base lg:text-lg pill tracking-wider bg-blue-100 w-32 lg:w-36 px-4 py-2 rounded-full ">
          Family First
        </motion.p>
        <p className="heading-color font-bold text-4xl pt-3 lg:text-6xl ">
          Where Your Little Family Comes First
        </p>
        <p className="text-gray-600 pt-4 lg:text-xl">
          Over the past decade, our motto has been "Where Your Family Comes
          First." For our clients, this is more than just words. It is the
          commitment of providing individualized service
        </p>
        <motion.button
         whileHover={{
          y:-3
        }}        
        className="bg-yellow-500 text-white font-normal text-xl tracking-wide px-6 py-2 rounded-full shadow-2xl   mt-12 lg:mt-14">
          Learn More
        </motion.button>

        <div className="flex justify-between max-w-xs mt-9">
          <div className="w-20 ">
            <p className=" heading-color font-bold text-4xl lg:text-5xl">
              153+
            </p>
            <p className="text-gray-500 lg:text-lg">Family Protected</p>
          </div>

          <div className="w-28 ">
            <p className="heading-color font-bold text-4xl lg:text-5xl">47+ </p>
            <p className="text-gray-500 lg:text-lg custom-width_newborn-baby">Newborn Baby Protected</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Family;
