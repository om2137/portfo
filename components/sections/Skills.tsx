import React from 'react'
import Grid from '@mui/material/Grid';
import MediaCard from '../cards';

export default function Projects() {
  return (
    <>

        
          
        <div className='flex flex-col justify-center item-center mx-auto'>
            
            <header className=' flex item-center content-center justify-center text-green-500 font-bold md:pb-5 my-5'>
                
                <div className='flex text-7xl  sm:text-9.5xl ml:text-10.5xl  mx-auto lg:hidden'>
                    <div>
                        <span className='font-bold'>S</span>
                    </div>
                    <div>
                        <span className='font-bold'>K</span>
                    </div>
                    <div>
                        <span className='font-bold'>I</span>
                    </div>
                    <div>
                        <span className='font-bold'>L</span>
                    </div>
                    <div>
                        <span className='font-bold'>L</span>
                    </div>
                    <div>
                        <span className='font-bold'>S</span>
                    </div>
                    <div className='md:flex hidden text-white text-center text-lg md:text-2xl font-bold pl-10'>
                        <a href="" style={{ writingMode: 'vertical-rl' }}>HELP</a>
                    </div>
                </div>
                <div className='lg:flex text-7xl lg:text-11xl  xl:text-15xl  mx-auto hidden'>
                        <div>
                            <span className='font-bold'>S</span>
                        </div>
                        <div>
                            <span className='font-bold'>K</span>
                        </div>
                        <div>
                            <span className='font-bold'>I</span>
                        </div>
                        <div>
                            <span className='font-bold'>L</span>
                        </div>
                        <div>
                            <span className='font-bold'>L</span>
                        </div>
                        <div>
                            <span className='font-bold'>S</span>
                        </div>
                        <div className='md:flex hidden text-white text-center text-lg md:text-2xl font-bold pl-10 2xl:pl-20'>
                            <a href="" style={{ writingMode: 'vertical-rl' }}>HELP</a>
                        </div>
                </div>
            </header>

            <div className='flex my-4'>
                <div className='flex flex-col columns-2 w-80 md:w-96 text-xl text-white md:ml-20 p-5'>
                    <span className='flex font-bold text-2xl pb-2'>THOUGHTS</span>
                    <div className=' mx-auto' >
                        <p>This is a very basic blockchain project, which is a short message(thought) sharing app. 
                            This is basically a decentralized twitter-like app, which takes users and allows them to share a short message which is publicly viewable. 
                            The source code for this is available on GitHub on following link: github.com/om2137/Thoughts
                        </p>
                    </div>         
                </div>
                <div className=' md:flex flex-col item-center justify-center ml-20 p-5 hidden'>
                    
                </div>
            </div>  
            
            
        </div>
        
    </>
  )
}
