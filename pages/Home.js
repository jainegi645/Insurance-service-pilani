import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import heroCropped from "../images/hero-cropped.jpg";
import { motion } from "framer-motion";
// import { Button } from "@material-ui/core";

function Home() {
  return (
    <div className="hero-bg  h-screen">
      <Navbar />

      <div className="flex  max-h-screen justify-between px-5 mt-9 md:px-24 md:mt-14 border-blue-900">
        <div className=" text-white  max-w-md md:max-w-xl ">
          <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }} 
           transition={{delay:0.5}}
            className="text-base text-gray-100 tracking-wider glass-effect custom-width_we-love p-2 rounded-full ">
            We Love We Care
          </motion.p>
          <motion.p  
          initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} 
        transition={{delay:1}}
        className="text-5xl md:text-6xl font-bold tracking-wide md:leading-tight  pt-4">
            Life Insurance for Your Love Ones
          </motion.p>
          <motion.p initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} 
        transition={{delay:1.2}}
         className="text-lg tracking-wider pt-8 text-gray-200">
            Celebrate all life's moment knowing the ones you love are protected
          </motion.p>
          {/* <motion.button 
          initial={{ x: -250 }}
        animate={{ x:0 }} 
        transition={{delay:1.4, type:'spring', stiffness: 130}} 
        className="bg-yellow-500 font-normal text-xl tracking-wide px-6 py-2 rounded-full shadow-2xl mt-16 md:mt-24">
            Call Now
          </motion.button> */}

          <motion.a 
          initial={{ x: -250,y:0}}
         animate={{ x:0,y:0 }} 
        transition={{delay:1.4, type:'spring', stiffness: 130}}   
        whileHover={{
          y:-3
        }}        
        href="tel:9540623407"
        className="bg-yellow-500 font-normal text-xl tracking-wide px-6 py-2 rounded-full  mt-12 md:mt-24 inline-block shadow-xl "
        >
            Call Now
          </motion.a>
        </div>

        <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }} 
         transition={{delay:1}}
          className="hidden lg:block overflow-hidden hero-borderRadius z-0 ">
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
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
