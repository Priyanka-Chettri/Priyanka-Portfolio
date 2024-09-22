import React from 'react'
import Tags from './Tags'

function SingleProject({projectVideo, projectName, projectDescription, projectTags}) {
  return (
    <div className="mx-[100px] my-[50px] rounded-2xl flex bg-[#F6F4FF] shadow-lg">
        <div className='w-1/2 m-10'>
         <video  className="w-full h-auto rounded-lg shadow-lg" controls muted autoPlay loop >
            <source src={projectVideo} type="video/mp4"  >
            </source>
            Your browser doesnot suppport it
         </video>
        </div>
        <div className='flex flex-col justify-start items-center mt-[60px] p-5 gap-5 w-1/2'>
         <p className='text-[41px] font-bold'>{projectName}</p>
         <p className='text-[20px] font-extralight text-center w-full'>{projectDescription}</p>
         <Tags tags={projectTags}/> 
        </div>
    </div>
  )
}

export default SingleProject