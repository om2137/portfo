import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 dark:bg-slate-900 ">
      <Head>
        <title>Om Raut</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-top pt-10 px-20 text-center  ">
        <div>
          <div className='flex items-center justify-center w-100 pb-4'>
              <img src="https://avatars.githubusercontent.com/u/33827410?s=400&u=d7fa33a6aba54a8748942939d48217d9ba0fcf84&v=4"  className="flex rounded-full " width="300" height="170" />
              <div className='flex flex-col justify-start '>
                <h1 className='flex flex-col text-left text-9xl font-bold text-green-500 pl-8 text-shadow-yellow'>Om Raut</h1>
                
                {/*  */}
                <span className='text-sm text-gray-400 text-left text-2xl pl-10 pt-1'>@Elevate.ai</span>
                <span className='text-left pl-10 pt-2 text-white'>paragraph about introduction</span>
              </div>
            </div>
        </div>
        
        

      </main>

      
    </div>
  )
}

export default Home

{/* <h1 className="text-6xl font-bold text-green-500 ">
            <img className='rounded-full  h-32 w-32 m' src="https://avatars.githubusercontent.com/u/33827410?s=400&u=d7fa33a6aba54a8748942939d48217d9ba0fcf84&v=4" alt="" /> Om Raut
          </h1> */}