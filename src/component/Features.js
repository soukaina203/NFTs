import React from 'react'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function Features() {
  return (
    <Zoom>
      <div id='about' className='flex flex-col h-full mt-10 '>
        <div className='flex flex-row items-center justify-center w-full lg:flex-col '>


          <div className='flex flex-col items-start lg:flex-col '>



            <div class="flex flex-col md:flex-row items-center gap-[2.5rem] md:gap-[1rem]
            lg:gap-[6rem] p-[3rem] lg:p-8 md:m-4 border-[#87CFD0]  border-2 rounded-md 
            
            md:pl-10 md:pr-10 flex-wrap">

              <img src="nfts/techCrunch.png" alt="" className='w-[10rem] h-[5rem] lg:w-[14rem] lg:h-[6rem]' />
              <img src="nfts/fastCompany.png" className='w-[8rem]  h-[2rem]  md:h-[1.5rem]     lg:w-[12rem] lg:h-full  lg:p-2' alt="" />
              <img src="nfts/mit.png" alt="" className=' w-[5rem]  h-[2rem] md:h-[1.5rem] md:w-[4rem] lg:w-[6rem] lg:h-[3.5rem]  lg:p-2' />
              <img src="nfts/forbes.png" alt="" className=' w-[6rem]  h-[2rem] md:h-[1.5rem] lg:w-[8rem] lg:h-[3.7rem] lg:p-2' />
            </div>
          </div>

        </div>

      </div>
    </Zoom>
  )
}

export default Features
