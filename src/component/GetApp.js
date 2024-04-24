import React from "react";
import Zoom from "react-reveal/Zoom"; // Importing Zoom effect
import { Link } from "react-scroll";

function GetApp() {
  return (
    <Zoom>
      {/*Using Zoom Effect*/}
      <div
        id="GetApp"
        className="z-0 flex h-full  p-4 md:p-[4rem] lg:p-[2rem] lg:mt-[1rem] mr-auto ml-auto"
      >
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto place-content-center lg:gap-8 xl:gap-0 lg:py-16 md:grid-cols-12 ">
          <div className="  md:hidden md:col-span-5   gap-1 md:mt-[2rem] lg:mt-0">
            <img
              src="nfts/app.png"
              alt=""
              className=" w-[15rem] h-[15rem] ml-auto mr-auto md:ml-0 md:mr-0"
            />
          </div>

          <div
            className="mr-auto place-self-center md:col-span-7 
          lg:w-[32rem]"
          >
            <h3 className="font-bold w-fit underline1 md:font-bold">
              {" "}
              Get App
            </h3>

            <h2 className="mt-3 text-xl font-bold md:text-4xl md:text-left lg:text-5xl">
         
              Built-in Analytics <br className="hidden md:visible" />
              To Track Your Nfts
            </h2>

            <p
              className=" md:text-[23px] lg:text-xl  w-full  lg:mt-6 
              mb-4 text-gray-400 lg:text-gray-200  mx-auto mt-2  text-left"
            >
              Use our built-in analytics dashboard to pull valuable insights and
              monitor the value of your Krypto portfolio over time.
            </p>

            <button
              type="button"
              className=" text-white rounded-none font-medium 
                  hover:bg-[#24292F]/90 focus:ring-4 text-sm
              focus:outline-none focus:ring-[#24292F]/50   md:text-md p-2 md:px-6 md:py-3 lg:px-4 lg:py-3 text-center
              items-center dark:focus:ring-gray-500  mr-2 mb-2 lg:mb-0
              border-[#7D7ED7] border-2 "
            >
              <Link to="contact" smooth={true} offset={-200} duration={500}>
                VIEW OUR PRICING{" "}
              </Link>
            </button>
          </div>

          <div className=" hidden md:visible   md:col-span-5  md:flex w-fit h-fit  gap-1 md:mt-[0.5rem] lg:ml-[3.5rem] lg:mt-0">
            <img
              src="nfts/app.png"
              alt=""
              className=" md:w-[18rem]  md:h-[18rem] lg:w-[23rem] lg:h-[23rem] "
            />
          </div>
        </div>
      </div>
    </Zoom>
  );
}

export default GetApp;
