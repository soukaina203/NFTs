import React from 'react'
import { Link } from 'react-scroll'

function Cta() {
  return (
    <div className='flex items-center mt-[6rem] mb-[10rem] justify-center w-full h-full '>

     <div className='rounded-md w-[61rem] h-[24rem]  bg-gradient-to-r from-[#292265] to-[#87CFD0] flex justify-center flex-col  items-center'>
        <h3 className='text-xl font-bold text-black'>ARE YOU READY ?</h3>
        <h1 className='text-6xl font-bold md:text-left lg:text-5xl'>Be A Part Of The <br />
            Next Big Thing
          </h1>
          <button type="button" class=" text-white  font-medium  
 text-md px-10 py-3 text-center
  items-center   mr-2 mb-2 bg-black  mt-[2rem]
  rounded-3xl hidden md:block">
                <Link to="contact" smooth={true} offset={-200} duration={500}>
                GET STARTED
                </Link>
              </button>
     </div>
    </div>
  )
}

export default Cta
