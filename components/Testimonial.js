import React from "react";

function Testimonial() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className=" px-5 mt-12 lg:mt-32 lg:flex justify-between items-center content-center lg:px-20">
          <div className="max-w-2xl">
            <p className="text-base lg:text-lg pill tracking-wider bg-blue-100 w-36 lg:w-36 px-4 py-2 rounded-full">
              Testimonial
            </p>
            <p className="heading-color font-bold text-4xl pt-3 lg:text-6xl ">
              Listen to What Our Clients Say About Us
            </p>
          </div>
          <div>
            <p className="text-gray-600 pt-4 lg:text-xl">
              We are continuously Asking for feedback and improvising every
              moment
            </p>
          </div>
        </div>

        <div className="container px-5 lg:mt-16 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full shadow-xl border-gray-300 p-8 rounded-2xl">
               
                <p className="leading-relaxed mb-6 text-gray-600 pt-4 lg:text-xl">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90's microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://dummyimage.com/106x106"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Holden Caulfield
                    </span>
                    <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full shadow-xl rounded-2xl border-gray-300 p-8 ">
                
                <p className="leading-relaxed mb-6 text-gray-600 pt-4 lg:text-xl">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90's microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://dummyimage.com/107x107"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Alper Kamu
                    </span>
                    <span className="text-gray-500 text-sm">DESIGNER</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
