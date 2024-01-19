import React from 'react'
import { Link } from 'react-scroll'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function Home() {
  return (
    <Zoom>{/*Using Zoom Effect*/}

      <div className=' flex p-4 md:h-[26rem]  lg:h-fit '>

        <div className='grid max-w-screen-xl px-4 py-8 mx-auto place-content-center lg:gap-8 xl:gap-0 lg:py-16 md:grid-cols-12'>


          <div className=' place-self-center md:col-span-7'>
            <h1 className='text-5xl font-bold md:text-left lg:text-7xl'> Discover And  <br /> Collect Rare  <br /> NFTs
            </h1>
          <img src="nfts/purple.png" id='25' alt="" className='absolute hidden lg:visible top-[-18rem] lg:z-[-1] left-[-10rem] ' />

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
                  md:text-md lg:px-5 lg:py-2 text-center lg:font-medium 
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
     border-[#9AD6D6] border-2 md:text-md lg:px-5 lg:py-2 text-center lg:font-medium 
      md:block
                focus:ring-[#24292F]/50 ">
                <Link to="contact" smooth={true} offset={-200} duration={500}>
                  SELL NFTS
                </Link>
              </button>
            </div>

          </div>



          <div className='  md:col-span-5 md:flex  gap-1 md:mt-[2rem] lg:mt-0 '>
            <img src="nfts/Home.png" alt="" />


          {/* <img src="nfts/circleGreen.png" alt="" id='hds' className='relative ' /> */}
          </div>


        </div>

      </div>
    </Zoom>
  )
}

export default Home
