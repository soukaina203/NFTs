import React from 'react'
import { Link } from 'react-scroll'
import { GiFilmSpool, GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <nav className="fixed top-0 z-50 w-full h-[3rem] bg-black ">
      <div className="container flex items-center justify-between m-auto relative w-[content]">
        <h1 className="z-40 p-3 md:p-5 lg:p-0 flex text-[22px] lg:text-2xl font-bold cursor-pointer md:ml-0 flew-row">
          KRYPTO
        </h1>
        {/* Add the image below */}
     
        <ul className="items-center hidden pr-10 font-normal cursor-pointer lg:flex">
          <li className="px-6 py-4 duration-500 underlineHover hover:pointer-auto">
            <Link to="home" smooth={true} offset={-100} duration={500}>
              About
            </Link>
          </li>
          <li className="px-6 py-4 duration-500 underlineHover hover:pointer-auto">
            <Link to="about" smooth={true} offset={-100} duration={500}>
              Pricing
            </Link>
          </li>
          <li className="px-6 py-4 duration-500 underlineHover">
            <Link to="mission" smooth={true} offset={-100} duration={500}>
              Contact
            </Link>
          </li>
          <li className="px-6 py-4 duration-500 underlineHover">
            <Link to="team" smooth={true} offset={-100} duration={500}>
              Buy Nfts
            </Link>
          </li>
        </ul>
   
  

     {/* phone & tablet */}
     <button className=" lg:hidden group">
       <GiHamburgerMenu className="mr-5 text-2xl" />



       <div class="absolute top-0 w-8/12 h-screen ml-auto mr-auto transition-all flex items-center duration-500 bg-indigo-900 text-white opacity-0 md:w-5/12 right-full group-focus:right-0 group-focus:opacity-100">
<ul class="flex flex-col items-center justify-center w-[98%]  font-semibold  m-2">
 <li class=" px-6 py-4 w-full duration-500 uppercase rounded-lg  hover:bg-purple-700">
   <Link to="home" smooth={true} duration={400}>
   About
   </Link>
 </li>

 <li class="w-full px-6 py-4 duration-500 uppercase hover:bg-purple-700 rounded-lg">
   <Link to="about" smooth={true} duration={400}>
   Pricing
   </Link>
 </li>

 <li class="w-full px-6 py-4 duration-500 uppercase hover:bg-purple-700 rounded-lg">
   <Link to="mission" smooth={true} offset={-200} duration={400}>
   Contact
   </Link>
 </li>

 <li class="w-full px-6 py-4 uppercase duration-500 hover:bg-purple-700 rounded-lg">
   <Link to="team" smooth={true} offset={-200} duration={400}>
   Buy Nfts
   </Link>
 </li>

</ul>
</div>


     </button>

   </div>
 </nav>
  )
}

export default Header
