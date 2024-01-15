import { Link } from 'react-scroll'
import React from 'react'

function Analytics() {
  return (
    <div>

      <div className='grid max-w-screen-xl px-4 py-8 mx-auto place-items-center place-content-center lg:gap-20 xl:gap-0 lg:py-16 md:grid-cols-12 '>






        <div className='hidden  md:col-span-5 md:flex  gap-1 md:mt-[2rem] lg:mt-0'>
          <img src="nfts/analitics.png" alt="" className=' w-[23rem] h-[23rem] ' />
        </div>

<div className='md:col-span-1'>

</div>

        <div className='p-8 mr-auto place-self-center md:col-span-6 '>
          <h3 className='font-bold'>GET OUR APP</h3>
          <h1 className='text-5xl font-bold md:text-left lg:text-5xl'> Built-in Analytics <br />
            To Track Your Nfts
          </h1>

          <p className='  text-[22px]  lg:w-[19rem] 
            max-w-sm md:max-w-md lg:max-w-xl   
            leading-3
            mb-2 md:text-lg
            font-thin 
            lg:text-[20px] 
            mt-[1rem]'>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.</p>


                      <button type="button" class=" text-white mt-[1rem] font-medium 
            hover:bg-[#24292F]/90 focus:ring-4 
            focus:outline-none focus:ring-[#24292F]/50  rounded-3xl text-md px-6 py-3 text-center
            items-center dark:focus:ring-gray-500  mr-2 mb-2
            bg-[#908FDB] hidden md:block ">
            <Link to="contact" smooth={true} offset={-200} duration={500}>
              VIEW OUR PRICING     </Link>
          </button>


        </div>
      </div>
    </div>
  )
}

export default Analytics
