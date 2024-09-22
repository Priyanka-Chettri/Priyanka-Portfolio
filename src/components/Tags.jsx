import React from 'react'

function Tags({tags}) {
  return (
    <div  className='flex flex-col gap-5 text-white text-center'>
        <div className=' font-bold flex gap-10'>
        <div className='rounded-2xl bg-[#A99CE7] w-fit px-3 hover:scale-105 transition-all cursor-pointer' > 
           {tags[0]}
        </div>
        <div className='rounded-2xl bg-[#A99CE7] w-fit px-3 hover:scale-105 transition-all cursor-pointer'> 
        {tags[1]}
        </div>
        <div className='rounded-2xl bg-[#A99CE7] w-fit px-3 hover:scale-105 transition-all cursor-pointer'> 
        {tags[2]}
        </div>
        </div>
       <div className='flex justify-center items-center font-bold'>
       <button className='rounded-2xl bg-[#B3C8FF] w-fit px-8 hover:scale-105 transition-all cursor-pointer'>
         <a href="https://git-insight-x-6fke.vercel.app/" target="_blank">
         <span>Link</span>
         </a>
         
        </button>
       </div>
        
    
       
    </div>
  )
}

export default Tags