import React from "react";

function Cards() {
  return (
    <div className=" hidden grid text-primaryColor max-w-6xl m-auto rounded-xl text-xl font-bold  lg:grid-cols-3  -top-20 relative  overflow-hidden">
      <div className="bg-white border border-gray-300 px-16 py-20  lg:flex justify-center lg:items-center hover:bg-primaryColor hover:text-white cursor-pointer">
        <img src="data:image/png;base64,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"/>
        <p className="text-center">Newborn Insurance</p>
      </div>

      <div className=" bg-white  border border-gray-300  px-16 py-20  lg:flex justify-center lg:items-center hover:bg-primaryColor hover:text-white cursor-pointer">
        <img
          className="m-auto lg:-m-0 "
          src="https://img.icons8.com/cotton/64/000000/car--v3.png"
        />
        <p className="text-center lg:pl-2">Vehical Protection</p>
      </div>

      <div className="bg-white  border border-gray-300  px-16 py-20  lg:flex justify-center lg:items-center hover:bg-primaryColor hover:text-white cursor-pointer">
        <img
          className="m-auto lg:-m-0 "
          src="https://img.icons8.com/external-becris-flat-becris/64/000000/external-education-literary-genres-becris-flat-becris.png"
        />
        <p className="text-center lg:pl-2">Education Insurance</p>
      </div>

      <div className=" px-16 py-20 border border-gray-300 lg:flex justify-center lg:items-center hover:bg-primaryColor hover:text-white cursor-pointer">
        <img
          className="m-auto lg:-m-0 "
          src="https://img.icons8.com/cotton/64/000000/economic-growth-.png"
        />
        <p className="text-center">Finance Protection</p>
      </div>
      <div className=" px-16 py-20  border border-gray-300 lg:flex justify-center lg:items-center hover:bg-primaryColor hover:text-white cursor-pointer">
        <img
          className="m-auto lg:-m-0 "
          src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-family-stay-home-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
        />
        <p className="text-center lg:pl-2">Family Insurance</p>
      </div>
      <div className=" px-16 py-20  border border-gray-300 lg:flex justify-center lg:items-center hover:bg-primaryColor hover:text-white cursor-pointer">
        <img
          className="m-auto lg:-m-0 "
          src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-insurance-online-medicine-wanicon-lineal-color-wanicon.png"
        />
        <p className="text-center lg:pl-2">Life Insurance</p>
      </div>
    </div>
  );
}

export default Cards;
