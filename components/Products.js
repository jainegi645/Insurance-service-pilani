import React from "react";
import { motion } from "framer-motion";
import { Head, Html } from "next/head";

function Products() {
  return (
    <div>
      <div
        id="products"
        className=" px-5 mt-16 lg:mt-20 lg:flex  justify-between items-center content-center lg:px-20"
      >
        <div className="max-w-2xl">
          <p className="text-base lg:text-lg pill tracking-wider bg-blue-100 w-36 lg:w-40 px-4 py-2 rounded-full">
            Our Products
          </p>
          <p className="heading-color font-bold text-4xl pt-3 lg:text-6xl ">
            Our Most Recognised Products
          </p>
        </div>
        <div>
          <p className="text-gray-600 max-w-xl pt-4 lg:text-xl">
            Here are our most recommended products. 75% of our Clients admire
            these products
          </p>
        </div>
      </div>

      {/*Cards start here  */}
      <div className=" px-5 md:flex  lg:px-24 lg:mt-14 md:space-x-4">
        <motion.div
          whileHover={{
            y: -3,
            x: -18,
            scale: 1.05,
            boxShadow: " 13px 14px 12px -3px rgba(0,0,0,0.40)",
          }}
          className=" px-6 py-16 lg:py-28 text-center w-full shadow-xl md:shadow-none rounded-xl"
        >
          <img
            className="m-auto pb-8"
            src="https://img.icons8.com/external-becris-lineal-color-becris/60/000000/external-education-literary-genres-becris-lineal-color-becris.png"
          />

          <h1 className="ribbon mb-6 py-3">
            <strong className="ribbon-content text-white">
              Get 20 Lakhs for Education
            </strong>
          </h1>
          <p className="text-primaryColor font-bold text-xl">
            Children Education Plan
          </p>
          <p className="text-gray-600 pt-4 lg:text-xl">
            Get 20 lacks for children education Planning just investing 189/-*
            Approx Per day
          </p>
        </motion.div>

        <motion.div
          whileHover={{
            y: -3,
            scale: 1.05,
            boxShadow: " 13px 14px 12px -3px rgba(0,0,0,0.40)",
          }}
          className="border-gray-500 w-full rounded-2xl px-6 py-16 lg:py-24 text-center md:shadow-2xl shadow-xl"
        >
          <img
            className="m-auto pb-4"
            src="https://img.icons8.com/external-flat-chattapat-/64/000000/external-insurance-insurance-flat-chattapat-.png"
          />
          <h1 className="ribbon mb-6 py-3">
            <strong
              className="ribbon-content text-white
            "
            >
              Get 24 Lakhs After Retirement
            </strong>
          </h1>
          <p className="text-primaryColor font-bold text-xl">
            Premium Retirement plan
          </p>

          <p className="text-gray-600 pt-4 lg:text-xl">
            Guranteed Life Fund for Next Generation Rs.24 Lakhs. Increaseing
            Life Cover From Rs.31 Lakhs to 65Lakhs. Investment Only 7900/-
            Monthly
          </p>
        </motion.div>

        <motion.div
          whileHover={{
            y: -3,
            scale: 1.05,
            x: 18,
            boxShadow: " 13px 14px 12px -3px rgba(0,0,0,0.40)",
          }}
          className="px-6 py-16 lg:py-28 text-center w-full shadow-xl md:shadow-none rounded-xl"
        >
         <img className="m-auto pb-8" src="https://img.icons8.com/fluency/60/000000/young-prince.png"/>
          <h1 className="ribbon mb-6 py-3">
            <strong className="ribbon-content text-white">
            Get Total Benefit up to 7.40Cr
            </strong>
          </h1>
          <p className="text-primaryColor font-bold text-xl">
            Wealthy Prince Plan
          </p>

          <p className="text-gray-600 pt-4 lg:text-xl">
            After 25 Years, 80 Lakhs Maturity. 
            Life Long Life Cover from 1Cr. to 4Cr. Premium Stop After 25 Years.
            After 25 Years Guaranteed 4 Lakhs Life Time.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;

//  <div className="md:flex  border border-amber-300 mt-8  md:space-x-8 px-5 lg:px-20">

// <motion.div
// whileHover={{
//   y: -3,
//   scale: 1.05,
//   boxShadow: " 13px 14px 12px -3px rgba(0,0,0,0.40)",
// }}
// className=" border-gray-500  rounded-2xl w-full px-6 py-16 lg:py-28 text-center"
// >
// <img
//   className="m-auto pb-8"
//   src="https://img.icons8.com/external-becris-lineal-color-becris/64/000000/external-education-literary-genres-becris-lineal-color-becris.png"
// />

// <h1 className="ribbon">
//   <strong className="ribbon-content">Get 20 Lakhs for Education </strong>
// </h1>

// <p className="text-primaryColor font-bold text-xl">
//   Children Education Plan
// </p>

// <p className="text-gray-600 pt-4 lg:text-xl">
//   Get 20 lacks for children education Plannig just investing 189/-* Approx Per day
// </p>
// </motion.div>

// <motion.div
// whileHover={{
//   y: -3,
//   scale: 1.05,
//   boxShadow: " 13px 14px 12px -3px rgba(0,0,0,0.40)",
// }}
// className="border-gray-500 shadow-2xl rounded-2xl  w-full px-6 md:px-20 py-16 lg:py-28 text-center"
// >
// <img
//   className="m-auto pb-8"
//   src="https://img.icons8.com/external-becris-lineal-color-becris/64/000000/external-education-literary-genres-becris-lineal-color-becris.png"
// />

// {/* <h1 className="ribbon ">
//   <strong className="ribbon-content ">Everybody loves ribbons</strong>
// </h1> */}
// <p className="text-primaryColor font-bold text-xl">
//   Premium Retirement Plannig
// </p>

// <p className="text-gray-600 pt-4 lg:text-xl">
//   Guranteed Life Fund for Next Generation Rs.24 Lakhs.
//   Increaseing Life Cover From Rs.31 Lakhs to 65Lakhs.
//   Investment Only 7900/- Monthly
// </p>
// </motion.div>
// <motion.div
// whileHover={{
//   y: -3,
//   scale: 1.05,
//   boxShadow: " 13px 14px 12px -3px rgba(0,0,0,0.40)",
// }}
// className="border-gray-500  rounded-2xl  w-full px-6 py-16 lg:py-28 text-center"
// >
// <img
//   className="m-auto pb-8"
//   src="https://img.icons8.com/external-becris-lineal-color-becris/64/000000/external-education-literary-genres-becris-lineal-color-becris.png"
// />

// {/* <h1 className="ribbon">
//   <strong className="ribbon-content">Everybody loves ribbons</strong>
// </h1> */}
// <p className="text-primaryColor font-bold text-xl">
//   Wealthy Prince Plan
// </p>

// <p className="text-gray-600 pt-4 lg:text-xl">
//   After 25 Years, 80 Lakhs Maturity.
//   Get Total Benefit up to 7.40Cr.
//   Life Long Life Cover from 1Cr. to 4Cr.
//   Premium Stop After 25 Years.
//   After 25 Years Guaranteed 4 Lakhs Life Time.
// </p>
// </motion.div>
// </div>
