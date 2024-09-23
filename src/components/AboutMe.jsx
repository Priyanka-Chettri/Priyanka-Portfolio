import React from 'react'
import Profile from "../assets/Profile.png"
import { TypewriterEffectSmooth } from './ui/TypewriterEffectSmooth'
import Profile2 from "../assets/Profile2.png"



function AboutMe() {
  const words = [
    {
      text: "Software",
      className: "text-[#bdaaf0] dark:text-[#bdaaf0]",
    },
    {
      text: "engineer",
      className: "text-black-500 dark:text-black-500",

    },
    
  
  ];
  
  return (
    <>
    <div className=" bg-gradient-to-b from-white to-[#e6ecfd]" >
      <div className='md:flex md:flex-row md:p-24 flex flex-col p-24'>
       
        <img src={Profile2} className="md:h-[379px] md:w-[376px] md:p-5 p-5 object-contain w-full h-full"></img>
        
      <div className="flex flex-col items-center justify-center w-full">
            <p className='font-extrabold md:text-[45px] text-[25px] text-center'>
                Hi, I am Priyanka ✋!
            </p>
            <div>
            <div className='flex text-center justify-center'>
            <TypewriterEffectSmooth words={words}/>
            </div>
            
            <p className='md:text-2xl text-xl text-center'>I have a knack for problem-solving and building products. Loves tackling challenges with a smile!</p> 
            </div> 
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutMe