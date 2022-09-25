import React from 'react'
import Grid from '@mui/material/Grid';
import MediaCard from '../cards';

export default function Blog() {
  return (
    <>
        <div className='flex flex-col justify-center item-center mx-auto'>
            <header className=' flex item-center content-center justify-center text-green-500 font-bold md:pb-5 my-5'>
              <div className='flex text-8.5xl font-bluureg sm:text-9.5xl ml:text-10.5xl  mx-auto lg:hidden'>
                  <div>
                    <span className='font-bold'>B</span>
                  </div>
                  <div>
                    <span className='font-bold'>L</span>
                  </div>
                  <div>
                    <span className='font-bold'>O</span>
                  </div>
                  <div>
                    <span className='font-bold'>G</span>
                  </div>
                  <div>
                    <span className='font-bold'>S</span>
                  </div>
                  <div className='md:flex hidden text-white text-center text-lg md:text-2xl font-bold pl-10'>
                    <a href="/#blogs" style={{ writingMode: 'vertical-rl' }}>HELP</a>
                  </div>
              </div>
              <div className='lg:flex text-7xl font-bluureg lg:text-11xl xl:text-15xl  mx-auto hidden' >
                    <div className=''>
                      <span className='font-bold'>B</span>
                    </div>
                    <div>
                      <span className='font-bold'>L</span>
                    </div>
                    <div>
                      <span className='font-bold'>O</span>
                    </div>
                    <div>
                      <span className='font-bold'>G</span>
                    </div>
                    <div>
                      <span className='font-bold'>S</span>
                    </div>
                    <div className='md:flex hidden text-white text-center text-lg md:text-2xl font-bold pl-10 2xl:pl-20'>
                      <a href="/#blogs" style={{ writingMode: 'vertical-rl' }}>HELP</a>
                    </div>
              </div>
            </header>
          
          <div className=' mx-auto md:my-20'>
                  <div className='flex flex-wrap content-center justify-center pb-10 sm:hidden mx-5'>
                      <Grid
                          xs
                          container 
                          spacing="40px"
                          justifyContent="center" 
                          alignItems="center"                
                      >
                          <Grid item xs={12} sm={6} md={3} xl={2} >
                              
                          </Grid>
                          <Grid item xs={12} sm={6} md={3} xl={2}>
                            <MediaCard image='https://easydev.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1654602293741%2FXEtW0r2im.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75'
                              title='Thoughts-Dapp' 
                              description='A decentralized Dapp on ethereum, built on solidity and NextJs.' 
                              GHlink='https://github.com/om2137/Thoughts'
                              blog='https://easydev.tech/thoughts-decentralized-twitter-like-app-web3'
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={4} >
                              <MediaCard image='https://easydev.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1655202890460%2FaUgxyVYls.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75'
                              title='All about CS Degree' 
                              description='Everything to know about CS Degree.' 
                              blog='https://easydev.tech/computer-science-in-mumbai-university-r19-scheme'
                              />
                          </Grid>
                          <Grid item xs={12} sm={6} md={3} xl={2}>
                              <MediaCard image='https://easydev.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1657304559926%2FE4ZFRel9v.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75' 
                              title='Git for beginners'
                              description='most used basic Git commands for beginners' 
                              GHlink=''
                              blog='https://easydev.tech/git-for-beginners-and-10-git-commands'
                              youtube=''
                              />
                          </Grid>
                      </Grid>
                  </div>
                      
                  <div className='flex item-center justify-center pb-4 xsm:hidden sm:flex mx-auto mx-5'>
                      <Grid
                          container 
                          spacing="40px" 
                          marginLeft="10px"
                          marginRight="20px"
                      >
                          <Grid item xs={12} sm={6} md={4}   >
                              <MediaCard image='https://easydev.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1654602293741%2FXEtW0r2im.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75'
                              title='Thoughts-Dapp' 
                              description='A decentralized Dapp on ethereum, built on solidity and NextJs.' 
                              GHlink='https://github.com/om2137/Thoughts'
                              blog='https://easydev.tech/thoughts-decentralized-twitter-like-app-web3'
                              youtube='https://www.youtube.com/watch?v=BbcPDPcfD-8'
                              />
                          </Grid>
                          <Grid item xs={12} sm={6} md={4} >
                              <MediaCard image='https://easydev.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1655202890460%2FaUgxyVYls.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75'
                              title='All about CS Degree' 
                              description='Everything to know about CS Degree.'
                              GHlink=''
                              blog='https://easydev.tech/computer-science-in-mumbai-university-r19-scheme'
                              />
                          </Grid>
                          <Grid item xs={12} sm={6} md={4} >
                              <MediaCard image='https://easydev.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1657304559926%2FE4ZFRel9v.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75' 
                              title='Git for beginners'
                              description='most used basic Git commands for beginners' 
                              GHlink=''
                              blog='https://easydev.tech/git-for-beginners-and-10-git-commands'
                              />
                          </Grid>
                          
                      </Grid>
                  </div>
          </div>
        </div>
        
        
    </>
  )
}


