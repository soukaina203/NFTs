import React from 'react'
import { Link } from 'react-scroll'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function Cta() {
  return (
    <Zoom>{/*Using Zoom Effect*/}

    <div className='flex items-center mt-[6rem] mb-[10rem] justify-center w-full h-full '>

      <div className= ' w-full h-[27rem] md:rounded-md  md:w-[61rem] md:h-[24rem]  bg-gradient-to-r from-[#292265]  to-[#87CFD0] flex justify-center flex-col  items-center'>
        <h3 className='text-[19px] md:text-xl font-bold text-black'>ARE YOU READY ?</h3>
        <h1 className='text-3xl font-bold text-center md:text-5xl md:text-left lg:text-5xl'>Be A Part Of The <br />
          Next Big Thing
        </h1>
        <button type="button" class=" text-white px-4 py-2 font-medium  
 text-md md:px-10 md:py-3 text-center
  items-center   mr-2 mb-2 bg-black  mt-[2rem]
  lg:rounded-3xl  md:block">
          <Link to="contact" smooth={true} offset={-200} duration={500}>
            GET STARTED
          </Link>
        </button>
      </div>
    </div>
    </Zoom>

  )
}

export default Cta
