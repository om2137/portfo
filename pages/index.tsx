
import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar';;
import Projects from '../components/sections/Projects';
// import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Blogs from '../components/sections/Blogs';

const Home: NextPage = () => {

  return (
    <div className="flex  min-h-screen flex-col items-center justify-center bg-slate-900 ">
      <Head>
        <title>Om Raut</title>
        <link rel="icon" href="/dev.png" />
      </Head>
      {/* navbar component */}
      <Navbar/>
      
      {/* All sub divisions */}
      
      {/* intro page */}
      <main className="flex w-full flex-1 flex-col justify-center px-10 py-10">
        <div >
            <div className='flex items-center justify-center  py-4 md:hidden '>
              <div className=' relative mb-4'>
                  <div className="absolute inset-0 bg-white rounded-full blur-md"></div>
                  <img src="https://avatars.githubusercontent.com/u/33827410?s=400&u=d7fa33a6aba54a8748942939d48217d9ba0fcf84&v=4" 
                   className="relative flex flex-col rounded-full mx-auto md:hidden md:object-scale-down " 
                   width="250" />
              </div>
            </div>
            <div className='flex items-center justify-center py-8'>
                <div className='hidden md:block relative ml-auto mr-12'>
                  <div className="absolute inset-x-1 inset-y-1 bg-white rounded-full blur-md xsm:hidden md:flex"></div>
                    <img src="https://avatars.githubusercontent.com/u/33827410?s=400&u=d7fa33a6aba54a8748942939d48217d9ba0fcf84&v=4" 
                     className="relative flex flex-col rounded-full ml-auto  xsm:hidden md:flex" 
                     width="250" />
                </div>
                
                <div className='md:w-1/2 flex flex-col justify-start text-center mr-auto md:ml-10'>
                  <div className='relative xsm:text-center md:text-left'>
                    <span className="absolute inset-x-0.5 inset-y-0.5 text-center text-7.5xl font-bluureg sm:text-8xl md:text-9.5xl text-left md:text-left  font-bold text-white">Om Raut </span>
                    <span className='relative text-7.5xl font-bluureg sm:text-8xl md:text-9.5xl md:text-left font-bold text-green-500 '>Om Raut</span>
                  </div>
                  <span className='text-sm text-white text-left  ml-7 pt-4'>github, twitter, linkedin, hashnode, gmail</span> {/* all socials */}
                  {/* <span className='text-left text-lg md:text-3xl ml-7 pt-2 text-gray-300'>Hi, my name is Om Raut. <br /> I’m a software engineer from Navi Mumbai, India. <br/>I develope features and fix bugs in software.</span>   */}
                  <span className='w-fit text-left text-lg md:text-3xl ml-7 pt-2 text-gray-300'>Hi, I am Om – A Computer Science student and development enthusiast who likes to work with different frameworks, projects,<br/> and platforms.</span> 
                </div>
            </div>
            
                 
                
        </div>
      </main>
      {/* intro */}
      <main id='Projects' className="flex w-full flex-1 flex-col justify-top px-5 md:px-10 ">
      <Projects/>
      </main>
      <main id='Skills' className="flex w-full flex-1 flex-col justify-top px-5 md:px-10 ">
        <Skills />
      </main>
      <main id='Experience' className="flex w-full flex-1 flex-col justify-top px-5 md:px-10 ">
        <Experience />
      </main>
      <main  id='blogs' className="flex w-full flex-1 flex-col justify-top px-5 md:px-10 ">
        <Blogs/>
      </main>
      


      
    </div>
  )
}

export default Home

