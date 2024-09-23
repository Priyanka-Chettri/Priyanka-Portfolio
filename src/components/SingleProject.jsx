import React from 'react'
import Tags from './Tags'

function SingleProject({projectVideo, projectName, projectDescription, projectTags, projectLink}) {
  return (
    <div className="md:mx-[100px] md:my-[50px] rounded-2xl md:flex md:flex-row flex flex-col bg-[#FFFFFF] shadow-lg mx-[30px] my-[10px]">
        <div className='md:w-1/2 w-fit md:m-10 mx-5 mt-8'>
         <video  className="w-full h-auto rounded-lg shadow-lg" controls muted autoPlay loop >
            <source src={projectVideo} type="video/mp4"  >
            </source>
            Your browser doesnot suppport it
         </video>
        </div>
        <div className='flex flex-col justify-start items-center md:mt-[60px] p-5 gap-5 md:w-1/2'>
         <p className='md:text-[41px] text-[20px] font-bold'>{projectName}</p>
         <p className='md:text-[20px]  text-[15px] font-extralight text-center w-full'>{projectDescription}</p>
         <Tags tags={projectTags} proLink={projectLink} /> 
        </div>
    </div>
  )
}

export default SingleProject