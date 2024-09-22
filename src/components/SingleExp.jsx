import React from 'react'


function SingleExp({CompanyName, Position, Period, work, logo}) {
  return (
   
               <div className='flex gap-10'>
                <div className=''> <img src={logo} className='w-[120px] h-[120px]'></img></div>
                <div className='flex flex-col'>
                    <div className='flex gap-[300px]'>
                        <div className='flex flex-col w-[300px]'>
                            <p className='text-[37px] font-bold'>{CompanyName}</p>
                            <p className='text-[33px]'>{Position}</p>
                        </div>
                       
                        <div className='flex items-center justify-center'>
                        <p className='text-[22px] pt-5 text-[#7F7A7A]'>{Period}</p>

                        </div>
                        
                        
                    </div>
                    <div>
                        <ul className='list-disc text-[20px]'>
                        {work[0] && <li>{work[0]}</li>}
                        {work[1] && <li>{work[1]}</li>}
                        {work[2] && <li>{work[2]}</li>}
                        {work[3] && <li>{work[3]}</li>}
                        </ul>
                        
                    </div>
                </div>
             </div>
  )
}

export default SingleExp
