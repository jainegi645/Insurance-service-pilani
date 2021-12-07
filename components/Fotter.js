import React from "react";

function Fotter() {
  return (
    <>
      <div className=" lg:text-lg px-5 lg:px-28 lg:py-10  bg-primaryColor goBack text-white lg:flex justify-between">
        <div className="pt-20  lg:pt-0 lg:mt-16">
          <p className='text-xl lg:text-2xl tracking-wider'>Insurance Service Pilani</p>
          <p className = 'pt-2 lg:pt-4 text-gray-300 max-w-xs tracking-wide'>
         
            Celebrate all life moments knowing the one you love are protected
          </p>
          <div className="flex pt-2 pb-1 lg:pt-5 lg:pb-2 space-x-3">
            <img className='w-8 h-2/4 lg:w-10 lg:h-2/4' src="https://img.icons8.com/fluency/40/000000/instagram-new.png" />
            <img className='w-8 h-2/4 lg:w-10 lg:h-2/4 ' src="https://img.icons8.com/fluency/40/000000/facebook.png" />
            <img className='w-8 h-2/4 lg:w-10 lg:h-2/4' src="https://img.icons8.com/color/40/000000/google-maps.png" />{" "}
          </div>
        </div>

        <div className="lg:flex-col lg:mt-16 ">
          <p className='lg:text-2xl pb-4 tracking-wider'>Corporate Office-</p>
          <p className='text-gray-300 tracking-wide'>Nutan Market,Pilani 333031 (JJN) Raj. </p>
          <p className='text-gray-300 tracking-wide'>Prop. Ajeet Singh Shekhawat</p>
          <p className='text-gray-300 tracking-wide'>E-mail: insuranceservicepilani@gmail.com</p>
          <p className='text-gray-300 tracking-wide'>Mobile no- 9540623407, 8696941407</p>
        </div>
      </div>

      <div className=" text-sm  px-5 lg:flex lg:justify-between  py-4 lg:px-24 bg-secondayColor text-white">
        <p className=' w-72 tracking-wider'> Copyright©2021 InsuranceServicePilani. All Rights Reserved </p>
        <div className='tracking-wider'>
          <p >Developed by - Jai Negi</p>
          <p>Need a Website? I Can Help</p>
          <p>Contact-8005619348</p>
        </div>
      </div>
    </>
  );
}

export default Fotter;
