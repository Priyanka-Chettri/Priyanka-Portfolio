import React from 'react'
import Marquee from "react-fast-marquee";
import java from "../assets/Java.png"
import tailWind from "../assets/Tailwind.png"
import javaScript from "../assets/JavaScript.png"
import Spring from "../assets/Spring.png"
import python from "../assets/Python.png"
import reactLogo from "../assets/reactLogo.png"
import figma from "../assets/figma.png"
import sql from "../assets/sql.png"
import cplusplus from "../assets/cplusplus.png"


function Skills() {
  return (
<div className='bg-gradient-to-b from-[#e6ecfc] to-[#F5E9FF] ' id="skills" >
    <p className='md:text-[41px] text-[25px] text-center pt-15 mb-5 font-bold'>Skills That Make Things Happen.</p>
    <Marquee className='md:pb-10'>
    <div className='flex md:gap-20 gap-10 align-baseline'>
   <img src={java} className='w-[73px] h-[97px]'></img>
   <img src={tailWind} className='w-[73px] h-[97x] pt-10'></img>
   <img src={javaScript} className='w-[73px] h-[97x] pt-10'></img>
   <img src={Spring} className='w-[73px] h-[97x] pt-10'></img>
   <img src={python} className='w-[73px] h-[97x] pt-10'></img>
   <img src={reactLogo} className='w-[73px] h-[97x] pt-10'></img>
   <img src={figma} className='w-[73px] h-[97x] pt-10'></img>
   <img src={sql} className='w-[73px] h-[97x] pt-10'></img>
   <img src={cplusplus} className='w-[73px] h-[97x] pt-10'></img>







  
  
    </div>
 
</Marquee>
</div>
  )
}

export default Skills