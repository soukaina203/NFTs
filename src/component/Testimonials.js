import React from 'react'

function Testimonials() {
    const reviews=[
        {image:"one",name:"Olivia Cole"},
        {image:"two",name:"Mart Clin"},
        {image:"three",name:"Charlotte Ino"}
    ]
  return (
    <div>
       <div id='mission' className='flex flex-col h-full mt-6 '>

<div class="text-center mb-[4rem] ">
  {/* <h3 class="text-[21px] font-bold  lg:mt-[3.5rem]">TESTIMONIALS</h3> */}
  
  <h2 class="text-xl md:text-2xl lg:text-5xl   "><b>Read What Others <br />Have To Say</b></h2>
</div>

<div className='container grid justify-center w-auto grid-cols-1 p-10 mx-auto ml-auto mr-auto duration-500 transform place-content-center md:p-8 lg:grid-cols-2 2xl:grid-cols-3 gap-x-4 gap-y-4 '>
{reviews.map((e)=>{
    return <div className='max-w-sm md:p-10 md:pb-6 mx-auto bg-[#2F2963] my-auto duration-300 transform shadow-md cursor-pointer relative'>
    <img src={`nfts/${e.image}.png`} key={e.image} alt="" 
         className='absolute top-0 w-[4rem] h-[4rem]  md:w-[6rem] md:h-[6rem] -translate-y-1/2  -translate-x-1/2 rounded-full ml-auto mr-auto' />
    <h3 key={e.image} className='font-bold text-center mt-10 lg:mt-[0.4rem] lg:text-xl'>{e.name}</h3>
    <p key={e.image} className="text-[15px] lg:text-[21px] mb-4 mx-auto mt-1 text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.
    </p>
  </div>
  
})}
</div>

</div>
    </div>
  )
}

export default Testimonials
