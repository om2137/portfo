import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex  min-h-screen flex-col items-center justify-center py-2 dark:bg-slate-900 ">
      <Head>
        <title>Om Raut</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/dev.png" />
      </Head>

      <main className="flex w-full flex-1 flex-col justify-top px-10 pt-10">
        <div>
            <div className='flex items-center justify-center  pb-4'>
              <div className=' relative'>
                  <div className="absolute inset-0 bg-white rounded-full blur-md"></div>
                  <img src="https://avatars.githubusercontent.com/u/33827410?s=400&u=d7fa33a6aba54a8748942939d48217d9ba0fcf84&v=4"  className="relative flex flex-col rounded-full mx-auto  xsm:flex md:hidden md:object-scale-down" width="250" />
              </div>
            </div>
            <div className='flex items-center justify-center  pb-4 '>
                <div className='relative ml-auto '>
                  <div className="absolute inset-x-1 inset-y-1 bg-white rounded-full blur-md xsm:hidden md:flex"></div>
                    <img src="https://avatars.githubusercontent.com/u/33827410?s=400&u=d7fa33a6aba54a8748942939d48217d9ba0fcf84&v=4"  className="relative flex flex-col rounded-full ml-auto  xsm:hidden md:flex" width="250" />
                </div>
                
                <div className='flex flex-col justify-start mr-auto md:ml-10'>
                  <div className='relative xsm:text-center md:text-left'>
                    <span className="absolute inset-x-1 inset-y-1 text-center text-6xl sm:text-8xl text-left md:text-left md:ml-6 font-bold text-yellow-500 blur-xs">Om Raut </span>
                    <span className='relative text-6xl sm:text-8xl md:text-left md:ml-6 font-bold text-green-500 '>Om Raut</span>
                  </div>
                  <span className='text-sm text-white text-left  ml-7 pt-4'>github, twitter, linkedin, hashnode, gmail</span> {/* all socials */}
                  <span className='text-left text-xl md:text-3xl ml-7 pt-2 text-gray-300'>Hi, my name is Om Raut. <br /> I’m a software engineer from Navi Mumbai, India. <br/>I develope features and fix bugs in software.</span>  
                </div>
            </div>
          
          <div className='flex flex-col items-left text-4xl justify-center w-100 pb-4 pt-6 '>
            <span className='text-green-500 font-bold mx-auto sm:ml-10  pb-2 '>Projects</span>
            <p className='text-white text-xl ml-12 pb-5'>These are the projects i have made</p>
            <span className='text-green-500 font-bold mx-auto sm:ml-10  pb-2 text-center'>Work<br className='sm:hidden' /> Experience</span>
            <p className='text-white text-xl ml-12 pb-5'>internships and description</p>
            <span className='text-green-500 font-bold mx-auto sm:ml-10  pb-2 '>Skill</span>
            <p className='text-white text-2xl ml-12 pb-5'>tech stack, devops, languages and non technical skills</p>
            <span className='text-green-500 font-bold mx-auto sm:ml-10  pb-2 '>Blogs</span>
            
          </div>    
        </div>
        

      </main>

      
    </div>
  )
}

export default Home

