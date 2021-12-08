import React from "react";
import GetQuote from "./GetQuote";
import ContactMap from "./ContactMap";
import Fotter from "./Fotter";


function ContactUs() {
  return (
    <>
    <div className="px-5 lg:flex lg:px-24 lg:mt-20 lg:space-x-6 space-x-0">
      <div className=" lg:max-w-lg lg:pt-28">
        <p className="text-base lg:text-lg pill tracking-wider bg-blue-100 w-20 lg:w-24 px-3 py-2 rounded-full">
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

      <div className="border-gray-500 shadow-xl rounded-2xl px-6 py-16 lg:py-16 text-center lg:max-w-xs">
        <img
          className="m-auto  pb-8"
          src="https://img.icons8.com/color/64/000000/service.png"
        />
        <p className="text-primaryColor font-bold text-xl">Drop a mail</p>
        <p className="text-gray-600 pt-4 lg:text-xl">
          An easy and effortless way to know about our services.
        </p>
        <button className="bg-yellow-500 text-white font-normal text-xl tracking-wide px-6 py-2 rounded-full shadow-2xl mt-12 lg:mt-14">
        Learn More
      </button>
      </div>

      <div className="border-gray-500 shadow-2xl rounded-2xl px-6 py-16 lg:py-16 text-center lg:max-w-xs">
        <img
          className="m-auto  pb-8"
          src="https://img.icons8.com/color/64/000000/service.png"
        />
        <p className="text-primaryColor font-bold text-xl">Contact Us</p>
        <p className="text-gray-600 pt-4 lg:text-xl">
          Get on a call with our insurance expert to find your best suit.
        </p>
        <button className="bg-yellow-500 text-white font-normal text-xl tracking-wide px-6 py-2 rounded-full shadow-2xl mt-12 lg:mt-14">
        Learn More
      </button>
      </div>
    </div>
    <ContactMap/>
    <Fotter/>

    </>
  );
}

export default ContactUs;
