import React from 'react'
import Grid from '@mui/material/Grid';
import MediaCard from '../cards';

const txtStyle = {
    transform: 'scale(1, 1)',
  };

export default function Skills() {
  return (
    <>   
        <div className='flex flex-col justify-center item-center mx-auto'>
            
            <header className=' flex item-center content-center justify-center text-green-500 font-bold md:pb-5 my-5'>
                
                <div className='flex text-7xl font-bluu sm:text-9.5xl ml:text-10.5xl  mx-auto lg:hidden'>
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
                <div className='lg:flex text-7xl font-bluu lg:text-11xl  xl:text-15xl  mx-auto hidden'>
                    <h2 className='flex'>
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
                    </h2>
                        
                </div>
            </header>

            <div className='hidden md:flex flex-col my-4 item-start justify-center '>
                <div className='flex item-start justify-start mx-auto'>
                    <div className='hidden md:flex flex-col w-64 ml:ml-4 p-5'>
                        <span className='font-bold text-white text-4xl pb-2 mr-auto'>Language</span>
                    </div>
                    <div className=' md:flex flex-col w-[32rem] item-center justify-center text-white ml:ml-4 p-5 hidden '>
                        <span className='flex font-semibold text-3xl pb-2 mr-8'>
                            Solidity, Java, Python, C, C++, C#, JavaScript, Typescript
                        </span>
                    </div>
                </div>
                <div className='flex item-center justify-center mx-auto'>
                    <div className='hidden md:flex flex-col w-64 ml:ml-4 p-5'>
                        <span className='font-bold text-white text-4xl pb-2 mr-auto'>
                            Web technologies
                        </span>
                    </div>
                    <div className=' md:flex flex-col w-[32rem] item-center justify-center text-white ml:ml-4 p-5 hidden '>
                        <span className='flex font-semibold text-3xl pb-2 mr-8'>
                            HTML5, CSS3, Tailwind.css, Nextjs
                        </span>
                    </div>
                </div>
                <div className='flex item-center justify-center mx-auto'>
                    <div className='hidden md:flex flex-col w-64 ml:ml-4 p-5'>
                        <span className='font-bold text-white text-4xl pb-2 mr-auto'>
                            Database
                        </span>
                    </div>
                    <div className=' md:flex flex-col w-[32rem] item-center justify-center text-white ml:ml-4 p-5 hidden '>
                        <span className='flex font-semibold text-3xl pb-2 mr-8'>
                        SQL, MySQL, PostgreSQL, MongoDB
                        </span>
                    </div>
                </div>
                <div className='flex item-center justify-center mx-auto'>
                    <div className='hidden md:flex flex-col w-64 ml:ml-4 p-5'>
                        <span className='font-bold text-white text-4xl pb-2 mr-auto'>
                            Platforms
                        </span>
                    </div>
                    <div className=' md:flex flex-col w-[32rem] item-center justify-center text-white ml:ml-4 p-5 hidden '>
                        <span className='flex font-semibold text-3xl pb-2 mr-8'>
                        GIT, GitHub, Unity(GameEngine), Eclipse, Visual Studio code, .net
                        Adobe suite: Photoshop, PremierPro, AfterEffects, Illustrator, XD.
                        </span>
                    </div>
                </div>
            </div>

            <div className='md:hidden flex flex-col my-4 item-center justify-center '>
                
                <div className='flex flex-col item-start justify-start mx-auto'>
                    <div className='md:hidden flex flex-col text-center w-64 ml:ml-4 p-5'>
                        <span className='font-bold text-white text-2xl pb-2 mr-auto'>Language</span>
                    </div>
                    <div className=' flex flex-col w-72 item-center justify-center text-white ml:ml-4 p-5  '>
                        <span className='flex font-semibold text-xl pb-2 mr-8'>
                            Solidity, Java, Python, C, C++, C#, JavaScript, Typescript
                        </span>
                    </div>
                </div>
                <div className='flex flex-col item-center justify-center mx-auto'>
                    <div className='md:hidden flex flex-col w-64 ml:ml-4 p-5'>
                        <span className='font-bold text-white text-2xl pb-2 mr-auto'>
                            Web technologies
                        </span>
                    </div>
                    <div className=' flex flex-col w-72 item-center justify-center text-white ml:ml-4 p-5  '>
                        <span className='flex font-semibold text-xl pb-2 mr-8'>
                            HTML5, CSS3, Tailwind.css, Nextjs
                        </span>
                    </div>
                </div>
                <div className='flex flex-col item-center justify-center mx-auto'>
                    <div className='md:hidden flex flex-col w-64 ml:ml-4 p-5'>
                        <span className='font-bold text-white text-2xl pb-2 mr-auto'>
                            Database
                        </span>
                    </div>
                    <div className=' flex flex-col w-72 item-center justify-center text-white ml:ml-4 p-5  '>
                        <span className='flex font-semibold text-xl pb-2 mr-8'>
                        SQL, MySQL, PostgreSQL, MongoDB
                        </span>
                    </div>
                </div>
                <div className='flex flex-col item-center justify-center mx-auto'>
                    <div className='md:hidden flex flex-col w-64 ml:ml-4 p-5'>
                        <span className='font-bold text-white text-2xl pb-2 mr-auto'>
                            Platforms
                        </span>
                    </div>
                    <div className=' flex flex-col w-72 item-center justify-center text-white ml:ml-4 p-5  '>
                        <span className='flex font-semibold text-xl pb-2 mr-8'>
                        GIT, GitHub, Unity(GameEngine), Eclipse, Visual Studio code, .net
                        Adobe suite: Photoshop, PremierPro, AfterEffects, Illustrator, XD.
                        </span>
                    </div>
                </div>
            </div> 
            
            
        </div>
        
    </>
  )
}
