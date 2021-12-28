import React from "react";
import GetQuote from "./GetQuote";
import ContactMap from "./ContactMap";
import Fotter from "./Fotter";
import { motion } from "framer-motion";
import whatsup from "../images/whatsup.png";
import Image from "next/image";


function ContactUs() {
  return (
    <>
    <div className="px-5 lg:flex lg:px-24 lg:mt-9 mt-16  lg:space-x-6 space-x-0">
      <div className=" lg:max-w-lg lg:pt-32">
        <p className="text-base lg:text-lg pill tracking-wider bg-blue-100 w-24 lg:w-24 px-3 py-2 rounded-full">
          Support
        </p>
        <p className="heading-color font-bold text-4xl pt-3 lg:text-4xl  ">
          The help you need at your fingertips
        </p>
        <p className="text-gray-600 pt-4 lg:text-xl">
          We'd love to hear from you, whether you're curious about different
          products or plans-We're ready to answer any and all questions.
        </p>
      </div>

      <motion.div
       whileHover={{
        y:-1,x:-1,scale:1.05,
        boxShadow:" 13px 14px 12px -3px rgba(0,0,0,0.40)",

      }}
      className="border-gray-500 shadow-xl rounded-2xl px-6 py-16 lg:py-20 text-center lg:max-w-xs">
        {/* <img
          className="m-auto  pb-8"
          src="https://img.icons8.com/color/64/000000/service.png"
        /> */}
        <div className="m-auto pb-11"> 
        <Image  alt="whatsup img"  width="48px" height="48px" src = {whatsup} />
        </div>
        <p className="text-primaryColor font-bold text-xl">Drop a Text</p>
        <p className="text-gray-600 pt-4 lg:text-xl">
          An easy and effortless way to know about our services.
        </p>
        <a target='_blank' href="https://api.whatsapp.com/send?phone=919540623407&text=Hi, I came from your website! I wanted to know about the Insurance services you offer. " 
        className="cursor-pointer inline-block bg-green-500  text-white font-normal text-xl tracking-wide px-6 py-2 rounded-full shadow-2xl mt-12 lg:mt-14">
       Whatsup Text 
      </a>
      </motion.div>

      <motion.div
       whileHover={{
        y:-1,x:-1,scale:1.05,
        boxShadow:" 13px 14px 12px -3px rgba(0,0,0,0.40)",
      }}
       className="border-gray-500 shadow-2xl rounded-2xl px-6 py-16 lg:py-20 text-center lg:max-w-xs">
        {/* <img
          className="m-auto  pb-8"
          src="https://img.icons8.com/color/64/000000/service.png"
        /> */}
        <img className="m-auto  pb-8" src="https://img.icons8.com/fluency/64/000000/online-support.png"/>
        <p className="text-primaryColor font-bold text-xl">Contact Us</p>
        <p className="text-gray-600 pt-4 lg:text-xl">
          Get on a call with our insurance expert to find your best suit.
        </p>
        <a target='_blank' href="tel:9540623407" className="cursor-pointer inline-block bg-yellow-500 text-white font-normal text-xl tracking-wide px-6 py-2 rounded-full shadow-2xl mt-12 lg:mt-14">
        Call Now
      </a>
      </motion.div>
    </div>
    <ContactMap/>
    <Fotter/>

    </>
  );
}

export default ContactUs;
