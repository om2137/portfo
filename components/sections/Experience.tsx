import React from 'react'
import Grid from '@mui/material/Grid';
import MediaCard from '../cards';

export default function Experience() {
  return (
    <>  
        <div className='flex flex-col justify-center item-center mx-auto'>
            
            <header className=' flex item-center content-center justify-center text-green-500 font-bold md:pb-5 my-5'>
                
                <div className='flex flex-col text-7.5xl font-bluureg sm:text-9xl ml:text-9.5xl  mx-auto lg:hidden'>
                    
                    <div className='relative inset-y-2 sm:inset-y-4 flex flex-col sm:pl-2 '>
                        <span className=' font-bold text-4xl sm:text-6xl ml:text-8xl text-white '>work</span>
                    </div>
                    <div className='flex'>
                      <div>
                        <span className='font-bold justify-start'>H</span>
                      </div>
                      <div>
                          <span className='font-bold'>I</span>
                      </div>
                      <div>
                          <span className='font-bold'>S</span>
                      </div>
                      <div>
                          <span className='font-bold'>T</span>
                      </div>
                      <div>
                          <span className='font-bold'>O</span>
                      </div>
                      <div>
                          <span className='font-bold'>R</span>
                      </div>
                      <div>
                          <span className='font-bold'>Y</span>
                      </div>
                      <div className='md:flex hidden text-white text-center text-lg md:text-2xl font-bold pl-10 2xl:pl-20'>
                          <a href="/#Experience" style={{ writingMode: 'vertical-rl' }}>HELP</a>
                      </div>
                    </div>
                </div>
                <div className='lg:flex flex-col text-7xl font-bluureg lg:text-10xl  xl:text-12xl  mx-auto hidden'>
                    <div className='relative inset-y-6 xl:inset-y-10 flex flex-col pl-3 xl:pl-5 '>
                        <span className=' font-bold text-8xl text-white '>work</span>
                    </div>
                    <div className='flex'>
                      <div>
                        <span className='font-bold justify-start'>H</span>
                      </div>
                      <div>
                          <span className='font-bold'>I</span>
                      </div>
                      <div>
                          <span className='font-bold'>S</span>
                      </div>
                      <div>
                          <span className='font-bold'>T</span>
                      </div>
                      <div>
                          <span className='font-bold'>O</span>
                      </div>
                      <div>
                          <span className='font-bold'>R</span>
                      </div>
                      <div>
                          <span className='font-bold'>Y</span>
                      </div>
                          <div className='md:flex hidden text-white text-center text-lg md:text-2xl font-bold pl-10 2xl:pl-20'>
                              <a href="/#Experience" style={{ writingMode: 'vertical-rl' }}>HELP</a>
                          </div>
                      </div>
                    
                </div>
            </header>
            {/* elevate */}
            <div className='hidden md:flex my-4 item-center justify-center '>
                <div className='flex flex-col content-center justify-center  columns-2 w-80 md:w-96 text-xl text-white  p-5'>
                    <span className='flex font-bold text-2xl pb-2'>ELEVATE AI</span>
                    <span className='flex font-semibold text-2xl pb-2'>Software developer</span>
                    <div className=' mx-auto ml-10' >
                        <ul className='list-disc '>
                            <li>worked on various unity SDKs of the company.</li>
                            <li>such as emotion SDK, gender SDK and ethnicity SDK etc.</li>
                            <li>Tested the old SDKs and also on going.</li>
                        </ul>
                    </div>         
                </div>
                <div className='flex flex-col content-center justify-center  columns-2 w-80 md:w-96 text-xl text-white  p-5'>
                    <span className='flex font-bold text-2xl pb-2'>MoodMe</span>
                    <span className='flex font-semibold text-2xl pb-2'>Software developer</span>
                    <div className='mx-auto pl-10' >
                        <ul className='list-disc'>
                            <li>worked on various unity SDKs of the company.</li>
                            <li>such as emotion SDK, gender SDK and ethnicity SDK etc.</li>
                            <li>Tested the old SDKs and also on going.</li>
                        </ul>
                    </div>         
                </div>
            </div>
            {/* moodme */}           
            <div className='md:hidden flex flex-col my-4 item-center justify-center '>
                
                <div className='flex flex-col item-center justify-center  columns-2 w-80 md:w-96 text-xl text-white mx-auto p-5'>
                    
                    <span className='flex font-bold text-2xl pb-2 text-center mx-auto text-center sm:text-left'>ELEVATE AI</span>
                    <span className='flex font-semibold text-2xl pb-2 text-center mx-auto text-center sm:text-left'>Software developer</span>
                    <div className=' mx-auto  sm:text-left' >
                        <ul className='list-disc '>
                            <li>worked on various unity SDKs of the company.</li>
                            <li>such as emotion SDK, gender SDK and ethnicity SDK etc.</li>
                            <li>Tested the old SDKs and also on going.</li>
                        </ul>
                    </div>         
                </div>
                <div  className='flex flex-col item-center justify-center  columns-2 w-80 md:w-96 text-xl text-white mx-auto p-5'>
                    <span className='flex font-bold text-2xl pb-2 text-center mx-auto text-center sm:text-left'>MoodMe</span>
                    <span className='flex font-semibold text-2xl pb-2 text-center mx-auto text-center sm:text-left'>Software developer</span>
                    <div className=' mx-auto  sm:text-left' >
                        <ul className='list-disc '>
                            <li>worked on various unity SDKs of the company.</li>
                            <li>such as emotion SDK, gender SDK and ethnicity SDK etc.</li>
                            <li>Tested the old SDKs and also on going.</li>
                        </ul>
                    </div>    
                </div>
            </div>  
            
            
        </div>
        
    </>
  )
}
