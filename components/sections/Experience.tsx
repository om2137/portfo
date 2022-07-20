import React from 'react'
import Grid from '@mui/material/Grid';
import MediaCard from '../cards';

export default function Projects() {
  return (
    <>  
        <div className='flex flex-col justify-center item-center mx-auto'>
            
            <header className=' flex item-center content-center justify-center text-green-500 font-bold md:pb-5 my-5'>
                
                <div className='flex flex-col text-7xl sm:text-9xl ml:text-9.5xl  mx-auto lg:hidden'>
                    
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
                          <a href="" style={{ writingMode: 'vertical-rl' }}>HELP</a>
                      </div>
                    </div>
                </div>
                <div className='lg:flex flex-col text-7xl lg:text-10xl  xl:text-12xl  mx-auto hidden'>
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
                              <a href="" style={{ writingMode: 'vertical-rl' }}>HELP</a>
                          </div>
                      </div>
                    
                </div>
            </header>

            <div className='hidden md:flex my-4 item-left justify-left  '>
                <div className='flex flex-col content-center justify-center  columns-2 w-80 md:w-96 text-xl text-white ml-60 p-5'>
                    <span className='flex font-bold text-2xl pb-2'>THOUGHTS</span>
                    <div className=' mx-auto' >
                        <p>This is a very basic blockchain project, which is a short message(thought) sharing app. 
                            This is basically a decentralized twitter-like app, which takes users and allows them to share a short message which is publicly viewable. 
                            The source code for this is available on GitHub on following link: github.com/om2137/Thoughts
                        </p>
                    </div>         
                </div>
            </div>
            <div className='md:hidden flex flex-col my-4 item-left justify-center '>
                
                <div className='flex flex-col item-center justify-center  columns-2 w-80 md:w-96 text-xl text-white mx-auto p-5'>
                    
                    <span className='flex font-bold text-2xl pb-2 text-center mx-auto text-center sm:text-left'>THOUGHTS</span>
                    <div className=' mx-auto text-center sm:text-left' >
                        <p>This is a very basic blockchain project, which is a short message(thought) sharing app. 
                            This is basically a decentralized twitter-like app, which takes users and allows them to share a short message which is publicly viewable. 
                            The source code for this is available on GitHub on following link: github.com/om2137/Thoughts
                        </p>
                    </div>         
                </div>
            </div> 
            
            
        </div>
        
    </>
  )
}
