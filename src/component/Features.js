import React from 'react'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function Features() {
  return (
    <Zoom>
      <div id='about' className='flex flex-col h-full mt-10 '>
        <div className='flex flex-row items-center justify-center w-full lg:flex-col '>


          <div className='flex flex-col items-start lg:flex-col '>

            <h3 className='mb-3 font-bold lg:mb-0'>FEATURED ON </h3>


            <div class="flex flex-col md:flex-row items-center gap-[2.5rem] 
            lg:gap-[6rem] lg:p-8 md:m-4 bg-[#2F2963] rounded-md p-2 md:pl-10 md:pr-10 flex-wrap">

              <img src="nfts/techCrunch.png" alt="" className='' />
              <img src="nfts/fastCompany.png" className='w-[12rem] h-full  p-2' alt="" />
              <img src="nfts/mit.png" alt="" className='w-[5rem] h-[3rem]  p-2' />
              <img src="nfts/forbes.png" alt="" className='w-[8rem] h-[3rem]  p-2' />
            </div>
          </div>

        </div>

      </div>
    </Zoom>
  )
}

export default Features
