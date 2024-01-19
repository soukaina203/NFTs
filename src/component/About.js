import React from "react";
import Header from "./Header";
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import {Link } from 'react-router-dom'

const About = () => {
  return (
    
    <>

        <Header />
    <Zoom>{/*Using Zoom Effect*/}

      <section className="overflow-hidden pt-20 pb-12   lg:pt-[120px] 
      lg:pb-[90px]
        text-white dark:bg-dark">
        <div className="container mx-auto ">
          <div className="flex flex-wrap items-center justify-center -mx-4">
            <div className="w-full px-4 lg:w-4/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-1">
                    <img
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt=""
                      className=" w-full lg:w-[16rem] lg:h-[16rem] rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt=""
                      className=" w-full lg:w-[16rem] lg:h-[16rem] rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4 ">
                    <img
                      src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                      alt=""
                      className="w-full lg:w-[16rem] lg:h-[22rem] rounded-2xl"
                    />
                 
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12 ">
              <div className="mt-10 lg:mt-0 lg:ml-4">
                <span className="block mb-4 text-lg font-semibold w-fit underline1 text-primary">
                  Why Choose Us
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                Elevate your NFT experience with   KRYPTO           </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                  A domain name is one of the first steps to establishing your
                  brand. Secure a consistent brand image with a domain name that
                  matches your business.
                </p>
            
                <button type="button" class=" 
                 text-white  
                 hover:bg-[#24292F]/90 focus:ring-4 
                 focus:outline-none 
                 items-center dark:focus:ring-gray-500 
                  p-2
     border-[#9AD6D6] border-2 lg:text-[20px] md:text-md
      lg:px-5 lg:py-2 text-center lg:font-medium 
      md:block
                focus:ring-[#24292F]/50 ">
                <Link to="contact" smooth={true} offset={-200} duration={500}>
                Get Started
                </Link>
              </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Zoom>
    </>
  );
};

export default About;
