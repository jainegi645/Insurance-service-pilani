import React from "react";
import logo from "../images/logo.png";
import Image from "next/image";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center px-14 pt-7 pb-4 bg-primaryColor ">
        <div className="flex items-center text-white">
          <Image src={logo} alt="logo" height="50" width="50" />
          <p className="pl-3 font-bold"> Insurance Service Pilani</p>
        </div>
        <ul className="hidden md:flex text-white space-x-7">
          <li className=" hover:text-red-500 cursor-pointer">Home11</li>
          <li className=" hover:text-red-500 cursor-pointer">About Us</li>
          <li className=" hover:text-red-500 cursor-pointer">Services</li>
          <li className=" hover:text-red-500 cursor-pointer">Contact Us</li>
        </ul>
      </nav>

      {/* Mobile Navbar  */}
      <div className="md:hidden w-60 min-h-screen  bg-yellow-400 absolute inset-y-0 right-0 transform translate-x-full md:absolute transition duration-200 ease-in-out">
        <img
          src="https://img.icons8.com/cotton/64/000000/menu.png"
          className="w-10 h-10 absolute"
        />
        <nav className="grid ">
          <ul className=" space-x-8 space-y-14">
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
