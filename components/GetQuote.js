import React from "react";
import Fotter from "./Fotter";
import { motion } from "framer-motion";


function GetQuote() {
  return (
    <>
    
    <div className='px-5 lg:px-24 lg:mt-24 relative -bottom-14 '> 

    <div className="shadow-2xl text-center lg:text-left bg-white border-gray-300 rounded-lg px-5 py-12 lg:px-16 lg:flex lg:items-center mt-8 lg:mt-20 lg:space-x-96 space-x-0 z-0">
      <div>
        <p className="heading-color font-bold text-4xl pt-3 lg:text-4xl  ">
          Lets get your insurance now
        </p>
        <p className="text-gray-600 pt-4 lg:text-xl">
          Getting a quote is quick and simple
        </p>
      </div>
      
      <button className="bg-yellow-500 text-white font-normal text-xl tracking-wide px-6 py-2 rounded-full shadow-2xl mt-24 lg:mt-0">
        Learn More
      </button>
    </div>

    </div>
    <Fotter/>
    </>
  );
}

export default GetQuote;
