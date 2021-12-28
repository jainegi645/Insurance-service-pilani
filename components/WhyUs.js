import React from "react";
import Promises from "./Promises";
import Rating from "@mui/material/Rating";
import { motion } from "framer-motion";

function WhyUs() {
  return (
    <div>
      <Promises />

      <div className=" px-5 lg:flex lg:px-24 lg:mt-14">
        <motion.div
          whileHover={{
            y: -3,
            x: -18,
            scale: 1.05,
            boxShadow: " 13px 14px 12px -3px rgba(0,0,0,0.40)",
          }}
          className=" px-6 py-16 lg:py-28 text-center"
        >
          {/* <img
            className="m-auto pb-8"
            src="https://img.icons8.com/color/64/000000/service.png"
          /> */}
          <img className="m-auto pb-8" src="https://img.icons8.com/fluency/64/000000/service.png"/>
          <Rating name="read-only" value={5} size="small" readOnly />
          <p className="text-primaryColor font-bold text-xl">Better Service</p>
          <p className="text-gray-600 pt-4 lg:text-xl">
            Get covered in minutes.Call us and talk to our insurance experts.
            We're haapy to chat through any issues.
          </p>
        </motion.div>

        <motion.div
          whileHover={{
            y: -3,
            scale: 1.05,
            boxShadow: " 13px 14px 12px -3px rgba(0,0,0,0.40)",
          }}
          className="border-gray-500 shadow-2xl rounded-2xl px-6 py-16 lg:py-28 text-center"
        >
          {/* <img className="m-auto  pb-8"  src="https://img.icons8.com/color/64/000000/service.png" /> */}
          <img
            className="m-auto  pb-8"
            src="data:image/png;base64,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"
          />
          <Rating name="read-only" value={5} size="small" readOnly />
          <p className="text-primaryColor font-bold text-xl">Better Value</p>

          <p className="text-gray-600 pt-4 lg:text-xl">
            Sure, cheap is great.But value makes us better. Ask us about our add
            on's, special discounts and our low premiums too.
          </p>
        </motion.div>

        <motion.div
          whileHover={{
            y: -3,
            scale: 1.05,
            x: 18,
            boxShadow: " 13px 14px 12px -3px rgba(0,0,0,0.40)",
          }}
          className="px-6 py-16 lg:py-28 text-center"
        >
          {/* <img
            className="m-auto pb-8"
            src="https://img.icons8.com/color/64/000000/service.png"
          /> */}
          <img className="m-auto pb-8" src="https://img.icons8.com/external-parzival-1997-outline-color-parzival-1997/64/000000/external-experience-human-networking-parzival-1997-outline-color-parzival-1997.png"/>
          <Rating name="read-only" value={5} size="small" readOnly />
          <p className="text-primaryColor font-bold text-xl">
            Better Experience
          </p>

          <p className="text-gray-600 pt-4 lg:text-xl">
            Easy to understand products.Transparent prices. And policies built
            around you. Whatever way you want it.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default WhyUs;
