
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MediaCard from '../components/cards';
import Navbar from '../components/Navbar';
import Grid from '@mui/material/Grid';
import { CenterFocusStrong, FormatAlignJustify } from '@mui/icons-material';

const Home: NextPage = () => {

  return (
    <div className="flex  min-h-screen flex-col items-center justify-center  dark:bg-slate-900 ">
      <Head>
        <title>Om Raut</title>
        <link rel="icon" href="/dev.png" />
      </Head>
      {/* navbar component */}
      <Navbar/>
      
      
      {/* main page */}
      <main className="flex w-full flex-1 flex-col justify-top px-10 pt-10">
        <div>
            <div className='flex items-center justify-center  pb-4'>
              <div className=' relative mb-4'>
                  <div className="absolute inset-0 bg-white rounded-full blur-md"></div>
                  <img src="https://avatars.githubusercontent.com/u/33827410?s=400&u=d7fa33a6aba54a8748942939d48217d9ba0fcf84&v=4" 
                   className="relative flex flex-col rounded-full mx-auto md:hidden md:object-scale-down " 
                   width="250" />
              </div>
            </div>
            <div className='flex items-center justify-center  pb-8'>
                <div className='relative ml-auto '>
                  <div className="absolute inset-x-1 inset-y-1 bg-white rounded-full blur-md xsm:hidden md:flex"></div>
                    <img src="https://avatars.githubusercontent.com/u/33827410?s=400&u=d7fa33a6aba54a8748942939d48217d9ba0fcf84&v=4" 
                     className="relative flex flex-col rounded-full ml-auto  xsm:hidden md:flex" 
                     width="250" />
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
            
          <div className=''></div>
          <div className='flex w-full flex-1 flex-col xsm:text-center md:text-left items-left text-4xl justify-center w-100 pb-4 pt-6 3xl:px-40 xl:ml-10 md:pr-10'>
            <span className='text-green-500 font-bold mx-auto sm:ml-10  pb-2 '>Introduction</span>
              <p className='text-white text-2xl sm:ml-12 pb-5'>introduction paragraph Professional information.</p>

            <span className='text-green-500 font-bold mx-auto sm:ml-10 pb-5' id='project'>Projects</span>
            {/* <p className='text-white text-xl sm:ml-12 py-5'>These are the projects I have made.</p> */}
            <div className='flex content-center justify-center pb-10 sm:hidden'>
              <Grid
                xs
                container 
                spacing="40px"
                justifyContent="center" 
                alignItems="center"
                
              >
                  <Grid item xs={12} sm={6} md={3} xl={2} >
                    <MediaCard image='https://easydev.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1654602293741%2FXEtW0r2im.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75'
                      title='Thoughts' 
                      description='description' 
                      GHlink='https://github.com/om2137/Thoughts'
                      blog='https://easydev.tech/thoughts-decentralized-twitter-like-app-web3'
                      />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} xl={2}>
                    <MediaCard image='https://easydev.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1655202890460%2FaUgxyVYls.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75'
                    title='DEV' 
                    description='description'
                    GHlink=''
                    blog=''
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} xl={2}>
                    <MediaCard image='/card.jpg' 
                      title='Card'
                      description='naruto' 
                      GHlink=''
                      blog=''
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} xl={2}>
                    <MediaCard 
                      image='/goku.jpg'
                      title='Goku'
                      description='description' 
                      GHlink=''
                      blog=''
                    />
                  </Grid>
              </Grid>
            </div>
            
            <div className='flex content-center justify-center pb-10 xsm:hidden sm:flex'>
              <Grid
                container 
                spacing="40px" 
                marginLeft="10px"
                marginRight="20px"
              >
                  <Grid item xs={12} sm={6} md={3} xl={2} >
                    <MediaCard image='https://easydev.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1654602293741%2FXEtW0r2im.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75'
                      title='Thoughts' 
                      description='description' 
                      GHlink='https://github.com/om2137/Thoughts'
                      blog='https://easydev.tech/thoughts-decentralized-twitter-like-app-web3'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} xl={2}>
                    <MediaCard image='https://easydev.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1655202890460%2FaUgxyVYls.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75'
                      title='DEV' 
                      description='description'
                      GHlink=''
                      blog=''
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} xl={2}>
                    <MediaCard image='/card.jpg' 
                      title='Card'
                      description='naruto' 
                      GHlink=''
                      blog=''
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} xl={2}>
                    <MediaCard 
                      image='/goku.jpg'
                      title='Goku'
                      description='description'
                      GHlink=''
                      blog=''
                    />
                  </Grid>
              </Grid>
            </div>
            <span className='text-green-500 font-bold mx-auto sm:ml-10  pb-2 text-center'>Work<br className='sm:hidden' /> Experience</span>
            <p className='text-white text-xl sm:ml-12 pb-5'>internships and description</p>
            <span className='text-green-500 font-bold mx-auto sm:ml-10  pb-2 '>Skill</span>
            <p className='text-white text-2xl sm:ml-12 pb-5'>tech stack, devops, languages and non technical skills</p>
            <span id="blog" className='text-green-500 font-bold mx-auto sm:ml-10  pb-2 '>Blogs</span>
            <p className='text-white text-2xl sm:ml-12 pb-5'>blogs and newsletter</p>
            <div className='flex content-center justify-center pb-10 sm:hidden'>
              <Grid
                xs
                container 
                spacing="40px"
                justifyContent="center" 
                alignItems="center"
                
              >
                  <Grid item xs={12} sm={6} md={3} xl={2} >
                    <MediaCard image='https://easydev.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1654602293741%2FXEtW0r2im.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75'
                      title='Thoughts' 
                      description='description' 
                      GHlink='https://github.com/om2137/Thoughts'
                      blog='https://easydev.tech/thoughts-decentralized-twitter-like-app-web3'
                      />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} xl={2}>
                    <MediaCard image='https://easydev.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1655202890460%2FaUgxyVYls.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75'
                    title='DEV' 
                    description='description'
                    GHlink=''
                    blog=''
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} xl={2}>
                    <MediaCard image='https://easydev.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1657304559926%2FE4ZFRel9v.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75' 
                      title='Card'
                      description='naruto' 
                      GHlink=''
                      blog=''
                    />
                  </Grid>
              </Grid>
            </div>
            
            <div className='flex content-center justify-center pb-10 xsm:hidden sm:flex'>
              <Grid
                container 
                spacing="40px" 
                marginLeft="10px"
                marginRight="20px"
              >
                  <Grid item xs={12} sm={6} md={3} xl={2} >
                    <MediaCard image='https://easydev.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1654602293741%2FXEtW0r2im.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75'
                      title='Thoughts' 
                      description='description' 
                      GHlink='https://github.com/om2137/Thoughts'
                      blog='https://easydev.tech/thoughts-decentralized-twitter-like-app-web3'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} xl={2}>
                    <MediaCard image='https://easydev.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1655202890460%2FaUgxyVYls.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75'
                      title='DEV' 
                      description='description'
                      GHlink=''
                      blog=''
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} xl={2}>
                    <MediaCard image='https://easydev.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1657304559926%2FE4ZFRel9v.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75' 
                      title='Card'
                      description='naruto' 
                      GHlink=''
                      blog=''
                    />
                  </Grid>
              </Grid>
            </div>

          </div>     
                
        </div>
      </main>

      
    </div>
  )
}

export default Home

