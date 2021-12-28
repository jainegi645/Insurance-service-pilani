import React from "react";
import logo from "../images/logo.png";
import Image from "next/image";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center px-4 py-5 lg:px-14 lg:pt-7 pb-4 ">
        <div className="flex items-center text-white">
          <Image className="" src={logo} alt="logo" height="50" width="50" />
          <p className="pl-3 font-normal tracking-wider">
            Insurance Service Pilani
          </p>
        </div>
        <ul className="hidden lg:flex text-white ">
          <motion.li
            whileHover={{
              y: -3,
            }}
            className=" hover:bg-yellow-500 hover:shadow-xl hover:shadow-yellow-300/10 rounded-sm px-5 py-2 cursor-pointer"
          >
            Home
          </motion.li>
          <motion.li
            whileHover={{
              y: -3,
            }}
            className=" hover:bg-yellow-500 hover:shadow-xl hover:shadow-yellow-300/10  rounded-sm px-4 py-2 cursor-pointer"
          >
            About Us
          </motion.li>
          <motion.li
            whileHover={{
              y: -3,
            }}
            className=" hover:bg-yellow-500 hover:shadow-xl hover:shadow-yellow-300/10  rounded-sm px-4 py-2 cursor-pointer"
          >
            Products
          </motion.li>
          <motion.li
            whileHover={{
              y: -3,
            }}
            className=" hover:bg-yellow-500 hover:shadow-xl hover:shadow-yellow-300/10  rounded-sm px-4 py-2 cursor-pointer"
          >
            Contact Us
          </motion.li>
        </ul>

        <img
          src="https://img.icons8.com/cotton/64/000000/menu.png"
          className="w-10 h-10 lg:hidden"
        />
      </nav>

      <div className=" hidden absolute bg-yellow-300 inset-y-0 right-0 h-100 lg:hidden w-56 transform  transition duration-200 ease-in-out">
        <nav className="grid mt-20 ">
          <ul className=" space-x-8 space-y-14 ">
            <li className="pt-12 pl-8">Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
