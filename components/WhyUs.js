import React from "react";
import Promises from "./Promises";
import Rating from "@mui/material/Rating";

function WhyUs() {
  return (
    <div>
      <Promises />

      <div className=' px-5 lg:flex lg:px-24 lg:mt-4'>

        <div className ='px-6 py-16 lg:py-28 text-center'>
          <img className="m-auto pb-8" src="https://img.icons8.com/color/64/000000/service.png" />
          <Rating name="read-only" value={5} size="small" readOnly />
          <p className= 'text-primaryColor font-bold text-xl'>Better Service</p>
          <p className="text-gray-600 pt-4 lg:text-xl">
            Get covered in minutes.Call us and talk to our insurance experts.
            We're haapy to chat through any issues.
          </p>
        </div>

        <div className ='border-gray-500 shadow-2xl rounded-2xl px-6 py-16 lg:py-28 text-center'>
        <img className="m-auto  pb-8"  src="https://img.icons8.com/color/64/000000/service.png" />
        <Rating name="read-only" value={5} size="small" readOnly />
        <p className= 'text-primaryColor font-bold text-xl'>Better Value</p>

          <p className="text-gray-600 pt-4 lg:text-xl">         
            Sure, cheap is great.But value makes us better. Ask us about our add
            on's, special discounts and our low premiums too.
          </p>
        </div>

        <div className ='px-6 py-16 lg:py-28 text-center'>
        <img className="m-auto pb-8" src="https://img.icons8.com/color/64/000000/service.png" />
        <Rating name="read-only" value={5} size="small" readOnly />
        <p className= 'text-primaryColor font-bold text-xl'>Better Experience</p>

          <p className="text-gray-600 pt-4 lg:text-xl">
            Easy to understand products.Transparent prices. And policies built
            around you. Whatever way you want it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
