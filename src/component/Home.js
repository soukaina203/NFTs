import React from 'react'
import { Link } from 'react-scroll'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function Home() {
  return (
    <Zoom>{/*Using Zoom Effect*/}

      <div className=' flex p-4 md:h-[26rem]  lg:h-fit '>

      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">


      

          <div className="p-4 mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-5xl font-extrabold leading-none tracking-tight text-transparent
             md:text-5xl  md:text-left lg:text-6xl bg-clip-text
              bg-gradient-to-r from-[#87CFD0] via-[#7D7ED7] to-[#2F2963]"> Discover And   Collect Rare   NFTs
             </h1>
            <p className="max-w-xl mb-6 font-normal text-gray-400 lg:mb-8 md:text-lg lg:text-xl ">
            The most secure marketplace for buyingand selling unique
              crypt1o assets.
            </p>
            <div className='flex flex-row mt-[1rem]'>
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
              <button type="button" class=" text-white  
                              hover:bg-[#24292F]/90 focus:ring-4 
                              focus:outline-none focus:ring-[#24292F]/50
                              items-center dark:focus:ring-gray-500  mr-2 mb-2
                               p-2
                  md:text-md lg:px-5 lg:py-2 text-center lg:font-medium 
                  border-[#7D7ED7] border-2  md:block
                  ">
                <Link to="contact" smooth={true} offset={-200} duration={500}>
                  BUY NFTS          </Link>
              </button>
            </div>
          </div>

          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="nfts/hero.jpg" alt="" className='rounded-full'/>
          </div>


        </div>

      </div>
    </Zoom>
  )
}

export default Home
