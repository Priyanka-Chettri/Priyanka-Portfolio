import React from 'react'

function Tags({tags, proLink}) {
  return (
    <div  className='flex flex-col gap-5 text-white text-center'>
        <div className='font-bold flex md:gap-10 gap-4'>
        <div className='rounded-2xl bg-[#A99CE7] md:w-fit md:px-3 px-4 hover:scale-105 transition-all cursor-pointer md:text-[15px] text-[10px]' > 
        {tags[0]}
        </div>
        <div className='rounded-2xl bg-[#A99CE7] md:w-fit md:px-3 px-4 hover:scale-105 transition-all cursor-pointer md:text-[15px] text-[10px]'> 
        {tags[1]}
        </div>
        <div className='rounded-2xl bg-[#A99CE7] md:w-fit md:px-3 px-4  hover:scale-105 transition-all cursor-pointer md:text-[15px] text-[10px]'> 
        {tags[2]}
        </div>
        </div>
       <div className='flex justify-center items-center font-bold'>
       <button className='rounded-2xl bg-[#B3C8FF] md:w-fit px-8 hover:scale-105 transition-all cursor-pointer md:text-[15px] text-[10px]'>
         <a href={proLink} target="_blank">
         <span>Link</span>
         </a>
         
        </button>
       </div>
        
    
       
    </div>
  )
}

export default Tags