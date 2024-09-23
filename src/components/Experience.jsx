import React from 'react'
import SingleExp from './SingleExp'
import dot from "../assets/dot.png"
import ADP from "../assets/ADP.png"
import CRUV from "../assets/CRUV.png"
import SIH from "../assets/SIH.png"


function Experience() {
    const expADP=["Implemented secure authentication for employees and managers.",
                  "Developed responsive UI with ReactJS and Tailwind CSS.",
                  "Enhanced employee-manager interactions with a well-being feature.",
                  "Optimized the leave management system for efficiency and UX."
                ]
    const expCRUV=["Transformed UI prototype into clean, maintainable code.",
                   "Integrated multiple APIs, to scale and enhance the frontend.",
                   "Optimized application performance across devices through testing"

    ]
    const expSIH=["Developed an early flood detection mobile app, which was powered by ML model data, and IoT data.",
        "The machine learning model used Weather API data data and the water level to predict flood.",
        "Optimized application performance across devices through testing."

]
  return (
    <div className='bg-gradient-to-b from-[#F5E9FF] to-[#e6ecfd] relative'>
        <p className='md:text-[41px] text-[25px] text-center pt-20 mb-5 font-bold '>My Journey So Far</p>
        <div className='flex md:gap-12 gap-5'>
          <div className='bg-[#8a6af0] md:h-[900px] md:w-[3px] md:ml-[300px] ml-[40px] text-[#8a6af0] h-[980px] w-[3px]'>
           .
          </div>
          <div className=' md:mt-[100px] mt-[30px] flex flex-col md:gap-[100px] gap-10'>
          <SingleExp CompanyName="ADP" Position="Member Technical" Period="Oct 2023-Present" work={expADP} logo={ADP}/>  
          <img src={dot} className='absolute md:top-[290px] md:left-[293px] top-[180px] left-[34px] w-[15px] h-[15px] z-20'></img> 
          <SingleExp CompanyName="CRUV" Position="Flutter Intern"  Period="Feb 2022-Apr 2022" work={expCRUV} logo={CRUV}/>  
          <img src={dot} className='absolute md:top-[610px] md:left-[293px] top-[520px] left-[34px] w-[15px] h-[15px] z-20'></img> 
          <SingleExp CompanyName="SIH" Position="Hackathon Winner" Period="Mar 2022- Aug 2022" work={expSIH} logo={SIH}/>  
          <img src={dot} className='absolute md:top-[910px] md:left-[293px] top-[800px] left-[34px] w-[15px] h-[15px] z-20'></img> 
          </div>
        </div>
         
         
    </div>
  )
}

export default Experience