import React from 'react'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import Header from './Header';

function Pricing() {
    const Plans = [
        { id:1, plan: "BASIC", price: "Free", method: "No credit card requires" },
        { id:2, plan: "STANDARD", price: "$19/mo", method: "Billed Annually" },
        { id:3, plan: "PRO", price: "$49/mo", method: "Billed Annually" },
    ]

    return (
        <>
            <Header />
            <Zoom>{/*Using Zoom Effect*/}

            <div id='mission' className='flex flex-col h-full mt-6 '>


            <h1 className='mx-auto mt-8 mb-1 text-xl font-semibold text-center w-fit md:text-2xl lg:text-4xl'>Our Pricing Plans</h1>
            
            <div className='container grid justify-center w-auto grid-cols-1 p-10 mx-auto ml-auto mr-auto duration-500 transform place-content-center md:p-8 lg:grid-cols-2 2xl:grid-cols-3 gap-x-4 gap-y-4 '>

            {Plans.map((e) => {
    return (
        <div className='flex flex-col h-full max-w-sm p-4 pb-6 mx-auto transition-all bg-[#1a1a1a]
         duration-300 transform shadow-md cursor-pointer lg:p-12 lg:pb-6 hover:-translate-y-1n hover:shadow-xl hover:scale-110 '>
{/* bg-[#1E2028] */}
        <span className='mb-2 text-[13px] font-medium text-[#9AD6D6]'>{e.plan}</span>
        <h1 className='text-3xl font-bold text-white'>{e.price}</h1>
        <p className='mb-4 text-[12px]'>{e.method}</p>
        <p className='mb-4 text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Nihil cupiditate minima nisi, quibusdam, ut animi non
          voluptas aliquam tenetur ducimus facilis veniam nulla tempora.
        </p>
        <button className='mb-0 p-2 px-5 border-2 border-[#9AD6D6]  hover:bg-[#7fb7b7] hover:text-white'>Get Started Now</button>
      </div>
    );
  })}
</div>
</div>


            </Zoom>
        </>
    )
}

export default Pricing
