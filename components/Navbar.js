import React,{useState} from "react";
import logo from "../images/logoremovebg.png";
import Image from "next/image";
import { motion } from "framer-motion";
import {Link} from 'react-scroll';

function Navbar() {
  const[size,setSize] = useState(`0px`);

  const openNavbar = () =>{
    setSize(`260px`)
  }
  const closeNavbar = () =>{
    setSize(`0px`)
  }

  return (
    <div className="">
      <nav className="flex  top-0 justify-between items-center px-4 py-5 lg:px-14 lg:pt-7 pb-4 ">
        <div className="flex items-center text-white">
          <Image className="" src={logo} alt="logo" height="50" width="50" />
          <p className="pl-3 font-normal tracking-wider">
            Insurance Service Pilani
          </p>
        </div>
        <ul className="hidden md:flex text-white ">
          <Link
            to="home"
            smooth={true}
            duration={1000}
            className=" hover:bg-yellow-500 hover:shadow-xl hover:shadow-yellow-300/10 rounded-sm px-5 py-2 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="products"
            smooth={true}
            duration={1000}
            className=" hover:bg-yellow-500 hover:shadow-xl hover:shadow-yellow-300/10 rounded-sm px-5 py-2 cursor-pointer"
          >
            Products
          </Link>
          
          <Link
            to="whyus"
            smooth={true}
            duration={1000}
            className=" hover:bg-yellow-500 hover:shadow-xl hover:shadow-yellow-300/10  rounded-sm px-4 py-2 cursor-pointer"
          >
            Why Us
          </Link>
          <Link
              to="testimonials"
              smooth={true}
              duration={1000}
            className=" hover:bg-yellow-500 hover:shadow-xl hover:shadow-yellow-300/10  rounded-sm px-4 py-2 cursor-pointer"
          >
            Testimonials
          </Link>
          <Link
           to="about"
           smooth={true}
           duration={1000}
            className=" hover:bg-yellow-500 hover:shadow-xl hover:shadow-yellow-300/10  rounded-sm px-4 py-2 cursor-pointer"
          >
            About Us
          </Link>

          <Link
           to="contact"
           smooth={true}
           duration={1000}
            className=" hover:bg-yellow-500 hover:shadow-xl hover:shadow-yellow-300/10  rounded-sm px-4 py-2 cursor-pointer"
          >
            Contact Us
          </Link>
        </ul>

        <img
          src="https://img.icons8.com/cotton/68/000000/menu.png"
          className="w-10 h-10 md:hidden"
          onClick={openNavbar}
        />
      </nav>

      <div className="fixed z-10 bg-white top-0 right-0 h-screen  ease-in-out" style={{width:size}}>
        <div className="pt-8 pl-3 w-11"  onClick={closeNavbar}>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/long-arrow-right.png"/> 
        </div>
          <div className="mobileNav-header  px-3 font-bold py-1 text-primaryColor">Insurance Service Pilani </div> 
        <nav className=" mt-2 ">
          <ul className="grid space-x-8 space-y-10">
            <Link to="home"  smooth={true}
            duration={1000} className=" ml-8 text-lg border-b-2 border-b-yellow-400 ">Home</Link>
            <Link to="products"  smooth={true}
            duration={1000} className=" ml-8 text-lg border-b-2 border-b-yellow-400 ">Products</Link>
            <Link to="whyus"  smooth={true}
            duration={1000} className="text-lg border-b-2 border-b-yellow-400">why Us</Link>
            <Link to="testimonials"  smooth={true}
            duration={1000} className="text-lg border-b-2 border-b-yellow-400">Testimonials</Link>
            <Link to="about"  smooth={true}
            duration={1000} className="text-lg border-b-2 border-b-yellow-400">About Us</Link>
            <Link to="contact"  smooth={true}
            duration={1000} className="text-lg border-b-2 border-b-yellow-400">Contact Us</Link>
          </ul>
          <div className="flex pt-6 ml-7 space-x-4">
            <a href="https://www.instagram.com/insuranceservicepilani/" className='w-10 h-2/4 lg:w-11 lg:h-2/4 cursor-pointer' target='_blank'> 
            <img src="https://img.icons8.com/fluency/40/000000/instagram-new.png" />
            </a>
            <a href="https://www.facebook.com/insuranceservicepilani/" className='w-10 h-2/4 lg:w-11 lg:h-2/4 cursor-pointer' target='_blank'>
            <img  src="https://img.icons8.com/fluency/40/000000/facebook.png" />
            </a>
            <a href='https://goo.gl/maps/5n3KMaxyvccE9rrGA'  className='w-10 h-1/4 lg:w-10 lg:h-2/4 cursor-pointer' target='_blank' > 
            <img href='https://goo.gl/maps/5n3KMaxyvccE9rrGA'  src="https://img.icons8.com/color/40/000000/google-maps.png" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
