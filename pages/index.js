import React from "react";
// import Navbar from "../components/Navbar";
// import Drawer from "../components/Drawer";
import Home from "./Home";
import Family from "../components/Family";
import WhyUs from '../components/WhyUs';
import ContactUs from "../components/ContactUs";
import Fotter from "../components/Fotter";
import ContactMap from "../components/ContactMap";
import AboutUs from "../components/AboutUs";
import Testimonial from "../components/Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "../components/Products";
import Head from "next/head";
// import Example from "../components/Example"



export default function Index() {
  return (
    <div>
     
      <Home />
      {/* <Example/> */}
      <Family/>
      <Products/>
      <WhyUs/>
      <Testimonial/>
      <AboutUs/>
      <ContactUs/>
   
    </div>
  );
}
