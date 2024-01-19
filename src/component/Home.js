import React from 'react'
import { Link } from 'react-scroll'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function Home() {
  return (
    <Zoom>{/*Using Zoom Effect*/}

      <div className='z-40 flex p-4 md:h-[26rem] lg:h-full '>

        <div className='z-40 grid max-w-screen-xl px-4 py-8 mx-auto place-content-center lg:gap-8 xl:gap-0 lg:py-16 md:grid-cols-12 '>



          <div className='mr-auto place-self-center md:col-span-7 '>
            <h1 className=' font-bold  mt-[1rem]  z-40
        md:text-left text-5xl 
        lg:text-6xl '> Discover And  <br /> Collect Rare  <br /> NFTs
            </h1>

            <p className='  text-[22px]  lg:w-[19rem] 
                max-w-sm md:max-w-md lg:max-w-xl   
                leading-3 hidden md:visible
                mb-2 md:text-lg
                font-thin 
                lg:text-[20px] 
            mt-[1rem]'>The most secure marketplace for buyingand selling unique
              crypt1o assets.</p>


            <div className='flex flex-row mt-[1rem]'>
              <button type="button" class=" text-white  
                              hover:bg-[#24292F]/90 focus:ring-4 
                              focus:outline-none focus:ring-[#24292F]/50
                              items-center dark:focus:ring-gray-500  mr-2 mb-2
                               p-2
                  lg:rounded-3xl md:text-md lg:px-5 lg:py-2 text-center lg:font-medium 
                  bg-[#908FDB]  md:block
                  ">
                <Link to="contact" smooth={true} offset={-200} duration={500}>
                  BUY NFTS          </Link>
              </button>
              <button type="button" class=" 
                 text-white  
                 hover:bg-[#24292F]/90 focus:ring-4 
                 focus:outline-none 
                 items-center dark:focus:ring-gray-500  mr-2 mb-2
                  p-2
     lg:rounded-3xl border-[#9AD6D6] border-2 md:text-md lg:px-5 lg:py-2 text-center lg:font-medium 
      md:block
                focus:ring-[#24292F]/50 ">
                <Link to="contact" smooth={true} offset={-200} duration={500}>
                  SELL NFTS
                </Link>
              </button>
            </div>

          </div>



          <div className='  md:col-span-5 md:flex  gap-1 md:mt-[2rem] lg:mt-0'>
            <img src="nfts/Home.png" alt="" />


          </div>
        </div>

      </div>
    </Zoom>
  )
}

export default Home
