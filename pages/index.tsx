import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-900">
      <Head>
        <title>Om Raut</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-top pt-20 px-20 text-center bg-gray-900">
        <h1 className="text-6xl font-bold text-green-500 ">
          Om Raut's <br /> potfolio.
        </h1>


      </main>

      
    </div>
  )
}

export default Home
