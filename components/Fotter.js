import React from "react";

function Fotter() {
  return (
    <>
      <div className=" lg:text-lg px-5 lg:px-28 lg:py-10  bg-primaryColor goBack text-white md:flex justify-between">
        <div className="pt-20 pb-5 md:pb-0  lg:pt-0 lg:mt-16">
          <p className='text-xl lg:text-2xl tracking-wider'>Insurance Service Pilani</p>
          <p className = 'pt-2 lg:pt-4 text-gray-300 max-w-xs tracking-wide'>
         
            Celebrate all life moments knowing the one you love are protected
          </p>
          <div className="flex pt-4  lg:pt-5 lg:pb-2 space-x-4">
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
        </div>

        <div className="md:flex-col md:mt-16 lg:mt-16 justify-center hidden md:block">
        <p className='md:text-2xl text-xl pb-4 tracking-wider'>Our Products</p>
          <nav className="list-none text-gray-300  tracking-wide">
            <li>NewBorn Insurance</li>
            <li>Another Insurance</li>
            <li>Another Insurance</li>
            <li>Another Insurance</li>
          </nav>
         
        </div>

        {/* <div  className="lg:flex-col lg:mt-16 justify-center"> 
        <p className='lg:text-2xl pb-4 tracking-wider'>Corporate Office-</p>
          <p className='text-gray-300 tracking-wide'>Nutan Market,Pilani 333031 (JJN) Raj. </p>
          <p className='text-gray-300 tracking-wide'>Prop. Ajeet Singh Shekhawat</p>
          <p className='text-gray-300 tracking-wide'>E-mail: insuranceservicepilani@gmail.com</p>
          <p className='text-gray-300 tracking-wide'>Mobile no- 9540623407, 8696941407</p>
        </div> */}
      </div>

    <div>
      
      </div> 
      <div className=" text-xs md:text-sm px-5 md:flex md:justify-between py-2 lg:px-24 bg-secondayColor text-white">
        <p className=' w-72 tracking-wider'> Copyright©2021 InsuranceServicePilani. All Rights Reserved </p>
        <div className='tracking-wider'>
          <p >Developed by - Jai Negi</p>
          <p>Need a Website? I Can Help:8005619348</p>
        </div>
      
      </div>
    </>
  );
}

export default Fotter;




