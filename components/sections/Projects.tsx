import React from 'react'
import Grid from '@mui/material/Grid';
import MediaCard from '../cards';


export default function Projects() {
  return (
    <>
          
        <div className='flex flex-col justify-center item-center mx-auto'>
            
            <header className=' flex item-center content-center justify-center text-green-500 font-bold md:pb-5 my-5'>
                <div className='flex text-7xl font-bluu sm:text-9xl ml:text-9.5xl  mx-auto lg:hidden'>
                    <div>
                        <span className='font-bold '>P</span>
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
                    <div className='md:flex hidden text-white text-center text-lg md:text-2xl font-bold pl-10'>
                        <a href="" style={{ writingMode: 'vertical-rl' }}>HELP</a>
                    </div>
                </div>
                <div className='lg:flex text-7xl font-bluu lg:text-10xl  xl:text-12xl  mx-auto hidden'>
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
                    <div className='md:flex hidden text-white text-center text-lg md:text-2xl font-bold pl-10'>
                        <a href="" style={{ writingMode: 'vertical-rl' }}>HELP</a>
                    </div>
                </div>
            </header>
            {/* Thoughts */}
            <div className='hidden md:flex my-4 item-center justify-center '>
                <div className='flex flex-col content-center justify-center  columns-2 w-80 md:w-[45rem] text-xl text-white  p-5'>
                    <span className='flex font-bold text-2xl pb-2'>THOUGHTS</span>
                    <div className=' mx-auto' >
                        <p>This is a very basic blockchain project, which is a short message(thought) sharing app. 
                            This is basically a decentralized twitter-like app, which takes users and allows them to share a short message which is publicly viewable. 
                            The source code for this is available on GitHub on following link: github.com/om2137/Thoughts
                        </p>
                    </div>         
                </div>
                {/* <div className=' md:flex flex-col item-center justify-center ml:ml-20 p-5  hidden'>
                    <MediaCard 
                        image='/card.jpg' 
                        title='Card'
                        description='naruto' 
                        GHlink=''
                        blog=''
                    />
                </div> */}
            </div>
            <div className='md:hidden flex flex-col my-4 item-center justify-center '>
                
                <div className='flex flex-col item-center justify-center  columns-2 w-80 md:w-96 text-xl text-white mx-auto p-5'>
                    
                    <span className='flex font-bold text-2xl pb-2 text-center mx-auto text-center sm:text-left'>THOUGHTS</span>
                    <div className=' mx-auto text-center sm:text-left' >
                        <p>This is a very basic blockchain project, which is a short message(thought) sharing app. 
                            This is basically a decentralized twitter-like app, which takes users and allows them to share a short message which is publicly viewable. 
                            The source code for this is available on GitHub on following link: github.com/om2137/Thoughts
                        </p>
                    </div>         
                </div>
                <div className='flex item-center justify-center mx-2 p-5 '>
                    <MediaCard 
                        image='/card.jpg' 
                        title='Card'
                        description='naruto' 
                        GHlink=''
                        blog=''
                    />
                </div>
            </div>  
            {/* FaceRec */} 
            <div className='hidden md:flex my-4 item-center justify-center '>
                <div className=' md:flex flex-col item-center justify-center ml:mr-20 p-5  hidden'>
                    <MediaCard 
                        image='/goku.jpg' 
                        title='Card'
                        description='naruto' 
                        GHlink=''
                        blog=''
                    />
                </div>
                <div className='flex flex-col content-center justify-center  columns-2 w-80 md:w-96 text-xl text-white  p-5'>
                    <span className='flex font-bold text-2xl pb-2'>FaceRec</span>
                    <div className=' mx-auto' >
                        <p>This is a very basic blockchain project, which is a short message(thought) sharing app. 
                            This is basically a decentralized twitter-like app, which takes users and allows them to share a short message which is publicly viewable. 
                            The source code for this is available on GitHub on following link: github.com/om2137/Thoughts
                        </p>
                    </div>         
                </div>                
            </div>
            <div className='md:hidden flex flex-col my-4 item-center justify-center '>
                <div className='flex item-center justify-center mx-2 p-5 '>
                    <MediaCard 
                        image='/goku.jpg' 
                        title='Card'
                        description='naruto' 
                        GHlink=''
                        blog=''
                    />
                </div>
                <div className='flex flex-col item-center justify-center  columns-2 w-80 md:w-96 text-xl text-white mx-auto p-5'>
                    
                    <span className='flex font-bold text-2xl pb-2 text-center mx-auto text-center sm:text-left'>FaceRec</span>
                    <div className=' mx-auto text-center sm:text-left' >
                        <p>This is a very basic blockchain project, which is a short message(thought) sharing app. 
                            This is basically a decentralized twitter-like app, which takes users and allows them to share a short message which is publicly viewable. 
                            The source code for this is available on GitHub on following link: github.com/om2137/Thoughts
                        </p>
                    </div>         
                </div>
                
            </div>

             {/*  */}
            <div className=' mx-auto md:my-20'>
                <div className='flex content-center justify-center pb-10 sm:hidden mx-5'>
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
                            title='Thoughts' 
                            description='description' 
                            GHlink='https://github.com/om2137/Thoughts'
                            blog='https://easydev.tech/thoughts-decentralized-twitter-like-app-web3'
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} >
                            <MediaCard image='https://easydev.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1655202890460%2FaUgxyVYls.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75'
                            title='DEV' 
                            description='description'
                            GHlink=''
                            blog=''
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} >
                            <MediaCard image='/card.jpg' 
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
        
    </>
  )
}
