import React from "react";
// import Navbar from "../components/Navbar";
// import Drawer from "../components/Drawer";
import Home from "./Home";
import Cards from '../components/Cards'
import Family from "../components/Family";
import WhyUs from '../components/WhyUs';
import ContactUs from "../components/ContactUs";
import Fotter from "../components/Fotter";



export default function Index() {
  return (
    <div>
      <Home />
      <Cards/>
      <Family/>
      <WhyUs/>
      <ContactUs/>
    </div>
  );
}
