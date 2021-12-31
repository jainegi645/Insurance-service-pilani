import React from "react";

function AboutUs() {
  return (
    <div id="about">
      <section  className="text-gray-600 body-font">
        <div className="container px-5 mt-14 lg:mt-20 mx-auto flex flex-col">
          <div className="lg:w-full mx-auto">
          

            <div className=" px-5 mt-12 lg:mt-32 lg:flex justify-between items-center content-center lg:px-10">
          <div className="max-w-2xl">
            <p className="text-base lg:text-lg pill tracking-wider bg-blue-100 w-36 lg:w-36 px-4 py-2 rounded-full">
              About Us
            </p>
            <p className="heading-color font-bold text-4xl pt-3 lg:text-6xl ">
              Know Us More 
            </p>
          </div>
          <div className="max-w-xl">
            <p className="text-gray-600 pt-4 lg:pt-10 lg:text-xl ">
              We beleive in forming good relationship with our customers, let's start with knowing us  
            </p>
          </div>
        </div>

            <div className="flex flex-col sm:flex-row mt-12 lg:mt-16">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Mr. Ajeet Singh Shekhawat
                  </h2>
                  <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4"></div>
                  <p className="text-base text-gray-600  ">
                      Director Insurance Service Pilani
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed  mb-4 text-gray-600  lg:text-xl">
                He has served in the Indian army for 19 years and now serving society by providing insurance services to protect people and their families.
                Its been 5 years of continuous hustle and dedication that we have been in the market. Our motive has always been to serve people around us. Building trust and good relationships is always been our first underlying priority.
                We have assured insurance protection of 153+ family and 47+ newborn babies and still counting. Protection of your love ones is in your own hands, let's ensure that today.
                 
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
