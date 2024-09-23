import React from 'react'


function SingleExp({CompanyName, Position, Period, work, logo}) {
    return (
     
                 <div className='flex md:gap-10 gap-2 pr-10'>
                <img src={logo} className='md:w-[120px] md:h-[120px] w-[40px] h-[40px] object-contain'></img>
                  <div className='flex flex-col'>
                      <div className='flex flex-col md:gap-[300px] md:flex md:flex-row'>
                          <div className='flex flex-col md:w-[300px]'>
                              <p className='md:text-[37px] text-[18px] font-bold'>{CompanyName}</p>
                              <p className='md:text-[33px] text-[16px]'>{Position}</p>
                          </div>
                          <div className='flex md:items-center md:justify-center'>
                          <p className='md:text-[22px] text-[10px] pt-5 text-[#7F7A7A] mb-2'>{Period}</p>
  
                          </div>
                          
                          
                      </div>
                      <div>
                          <ul className='list-disc md:text-[20px] text-[14px]'>
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