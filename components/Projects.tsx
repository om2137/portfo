import React from 'react'
import Grid from '@mui/material/Grid';
import MediaCard from '../components/cards';

export default function Projects() {
  return (
    <>
        {/* <span className='text-green-500 font-bold mx-auto sm:ml-10 pb-5' id='project'>Projects</span> */}
        <div className='flex flex-col justify-center item-center mx-auto'>
            <div className='justify-center text-green-500 font-bold mx-auto sm:ml-10 pb-5 hidden md:flex '>
                <div className='flex text-12xl justify-center'>
                    <div>
                    <span className='font-bold'>P</span>
                    </div>
                    <div>
                    <span className='font-bold'>R</span>
                    </div>
                    <div>
                    <span className='font-bold'>O</span>
                    </div>
                    <div>
                    <span className='font-bold'>J</span>
                    </div>
                    <div>
                    <span className='font-bold'>E</span>
                    </div>
                    <div>
                    <span className='font-bold'>C</span>
                    </div>
                    <div>
                    <span className='font-bold'>T</span>
                    </div>
                </div>
                
                <div className='flex text-white text-center text-2xl font-bold'>
                    <a href="text-3xl" style={{ writingMode: 'vertical-rl' }}>HELP</a>
                </div>
            </div>
            <div>
                
            </div>
            <div className=' mx-auto'>
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
                    
                <div className='flex item-center justify-center pb-10 xsm:hidden sm:flex mx-auto'>
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
            </div>
            
        </div>
        
    </>
  )
}
