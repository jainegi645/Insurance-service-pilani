import React from "react";

function Cards() {
  return (
    <div className="grid text-primaryColor max-w-7xl m-auto rounded-xl text-xl font-bold  md:grid-cols-3  -top-20 relative  overflow-hidden">
      <div className="bg-white border border-gray-300 p-12  md:flex justify-center md:items-center ">
        <img
          className="m-auto md:-m-0 "
          src="https://img.icons8.com/cotton/64/000000/baby.png"
        />
        <p className="text-center">Newborn Insurance</p>
      </div>

      <div className=" bg-white  border border-gray-300  p-12  md:flex justify-center md:items-center">
        <img
          className="m-auto md:-m-0 "
          src="https://img.icons8.com/cotton/64/000000/car--v3.png"
        />
        <p className="text-center">Vehical Protection</p>
      </div>

      <div className="bg-white  border border-gray-300  p-12  md:flex justify-center md:items-center">
        <img
          className="m-auto md:-m-0 "
          src="https://img.icons8.com/cotton/64/000000/student-male--v2.png"
        />
        <p className="text-center">Education Insurance</p>
      </div>

      <div className=" p-12  border border-gray-300 md:flex justify-center md:items-center">
        <img
          className="m-auto md:-m-0 "
          src="https://img.icons8.com/cotton/64/000000/economic-growth-.png"
        />
        <p className="text-center">Finance Protection</p>
      </div>
      <div className=" p-12  border border-gray-300 md:flex justify-center md:items-center">
        <img
          className="m-auto md:-m-0 "
          src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-family-stay-home-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
        />
        <p className="text-center">Family Insurance</p>
      </div>
      <div className=" p-12  border border-gray-300 md:flex justify-center md:items-center">
        <img
          className="m-auto md:-m-0 "
          src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-insurance-online-medicine-wanicon-lineal-color-wanicon.png"
        />
        <p className="text-center">Life Insurance</p>
      </div>
    </div>
  );
}

export default Cards;
