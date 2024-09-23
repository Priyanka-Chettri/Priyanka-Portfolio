import React from 'react'

function NavBar() {
  return (
    <>
    <div className="flex py-3 px-2 gap-3 text-[12px] md:gap-20 bg-[#bdaaf0] mt-6 md:py-3 md:px-10 md:text-[18px] rounded-full w-fit text-white shadow-xl">
     <a href="#aboutme">About Me</a>
     <a href="#skills">Skills</a>
     <a href="#exp">Experience</a>
     <a href="#project">Project</a>
     <a href="#contact">Contact Me</a>
    </div>
   
  
    </>
    
  )
}

export default NavBar