import { Link } from 'react-scroll'
import React from 'react'

function Analytics() {
  return (
    <div id='GetApp' className='z-0 flex h-full p-4 '>

        <div className='grid max-w-screen-xl px-4 py-8 mx-auto place-content-center lg:gap-8 xl:gap-0 lg:py-16 md:grid-cols-12 '>
            
            <div className='  md:hidden md:col-span-5   gap-1 md:mt-[2rem] lg:mt-0'>
            <img src="nfts/analitics.png" alt="" className=' w-[15rem] h-[15rem] ' />
          </div>


       



          <div className=' hidden md:visible md:col-span-5 md:flex w-fit h-fit  gap-1 md:mt-[0.5rem]  lg:mt-0'>
            <img src="nfts/analitics.png" alt="" className='md:w-[18rem] md:h-[18rem] lg:w-[23rem] lg:h-[23rem] ' />
          </div>

          <div className='mr-auto place-self-center md:col-span-7 '>
          <h3 className='font-bold w-fit underline1 md:font-bold '> ANALYTICS</h3>
      
      <h1 className='text-xl font-bold md:text-4xl md:text-left lg:text-6xl'> Built-in Analytics <br className='hidden md:visible' />
        To Track Your Nfts
      </h1>

      <p className=' md:text-[23px] lg:text-[29px]  w-full max-w-2xl lg:mt-6   mb-8 text-gray-400 lg:text-gray-200  mx-auto mt-2  text-left'>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.</p>


      <button type="button" class=" text-white rounded-none   font-medium 
            hover:bg-[#24292F]/90 focus:ring-4 text-sm
        focus:outline-none focus:ring-[#24292F]/50  md:rounded-3xl md:text-md p-2 md:px-6 md:py-3 lg:px-4 lg:py-3 text-center
        items-center dark:focus:ring-gray-500  mr-2 mb-2 lg:mb-0
        bg-[#908FDB] ">
        <Link to="contact" smooth={true} offset={-200} duration={500}>
          VIEW OUR PRICING     </Link>
      </button>


    </div>
        </div>

      </div>

  )
}

export default Analytics
