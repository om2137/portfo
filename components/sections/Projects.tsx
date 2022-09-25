import React from 'react'
import Grid from '@mui/material/Grid';
import MediaCard from '../cards';


export default function Projects() {
  return (
    <>
          
        <div className='flex flex-col justify-center item-center mx-auto'>
            
            <header className=' flex item-center content-center justify-center text-green-500 font-bold md:pb-5 my-5'>
                <div className='flex text-7.5xl font-bluureg sm:text-9xl ml:text-9.5xl  mx-auto lg:hidden'>
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
                        <a href="/#Projects" style={{ writingMode: 'vertical-rl' }}>HELP</a>
                    </div>
                </div>
                <div className='lg:flex text-7xl font-bluureg lg:text-10xl  xl:text-12xl  mx-auto hidden'>
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
                        <a href="/#Projects" style={{ writingMode: 'vertical-rl' }}>HELP</a>
                    </div>
                </div>
            </header>
            {/* Thoughts */}
            <div className='hidden md:flex my-4 item-center justify-center '>
                <div className='flex flex-col content-center justify-center  columns-2 w-80 md:w-96 text-xl text-white  p-5'>
                    <span className='flex font-bold text-2xl pb-2'>THOUGHTS: A Blockchain App</span>
                    <div className=' mx-auto ' >
                        <p>This is a very basic blockchain project, which is a short message(thought) sharing app. 
                            This is basically a decentralized twitter-like app, which takes users and allows them to share a short message which is publicly viewable. 
                            The source code for this is available on GitHub on following link: github.com/om2137/Thoughts
                        </p>
                    </div>         
                </div>
                <div className=' md:flex flex-col item-center justify-center ml:ml-20 p-5  hidden'>
                <MediaCard image='https://easydev.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1654602293741%2FXEtW0r2im.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75'
                              title='Thoughts-Dapp' 
                              description='A decentralized Dapp on ethereum, built on solidity and NextJs.' 
                              GHlink='https://github.com/om2137/Thoughts'
                              blog='https://easydev.tech/thoughts-decentralized-twitter-like-app-web3'
                            />
                </div>
            </div>
            <div className='md:hidden flex flex-col my-4 item-center justify-center '>
                
                <div className='flex flex-col item-center justify-center  columns-2 w-80 md:w-96 text-xl text-white mx-auto p-5'>
                    
                    <span className='flex font-bold text-2xl pb-2 text-center mx-auto text-center sm:text-left'>THOUGHTS: A Blockchain App</span>
                    <div className=' mx-auto text-center sm:text-left' >
                        <p>This is a very basic blockchain project, which is a short message(thought) sharing app. 
                            This is basically a decentralized twitter-like app, which takes users and allows them to share a short message which is publicly viewable. 
                            The source code for this is available on GitHub on following link: github.com/om2137/Thoughts
                        </p>
                    </div>         
                </div>
                <div className='flex item-center justify-center mx-2 p-5 '>
                <MediaCard image='https://easydev.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1654602293741%2FXEtW0r2im.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75'
                              title='Thoughts-Dapp' 
                              description='A decentralized Dapp on ethereum, built on solidity and NextJs.' 
                              GHlink='https://github.com/om2137/Thoughts'
                              blog='https://easydev.tech/thoughts-decentralized-twitter-like-app-web3'
                            />
                </div>
            </div>  
            {/* gym mgmt */} 
            <div className='hidden md:flex my-4 item-center justify-center '>
                <div className=' md:flex flex-col item-center justify-center ml:mr-20 p-5  hidden'>
                    <MediaCard 
                        image='/gymmgmt.png' 
                        title='Client Management'
                        description='This is a web application for pushing, managing and updating the clients information.' 
                        GHlink='https://github.com/om2137/GymMgmt'
                        blog=''
                    />
                </div>
                <div className='flex flex-col content-center justify-center  columns-2 w-80 md:w-96 text-xl text-white  p-5'>
                    <span className='flex font-bold text-2xl pb-2'>Client Management WebApp</span>
                    <div className=' mx-auto' >
                        <p>This is a web application for pushing, managing and updating the clients information. (very initial thought) 
                            Other features will be added. Techstack used is MERN, NextJS as a react framework and Tailwind.CSS for styling. 
                            MongoDB is used as a database and Cloudinary for storing files.
                        </p>
                    </div>         
                </div>                
            </div>
            <div className='md:hidden flex flex-col my-10 item-center justify-center '>
                <div className='flex flex-col item-center justify-center  columns-2 w-80 md:w-96 text-xl text-white mx-auto p-5'>
                    
                    <span className='flex font-bold text-2xl pb-2 text-center mx-auto text-center sm:text-left'>Client Management WebApp</span>
                    <div className=' mx-auto text-center sm:text-left' >
                        <p>This is a web application for pushing, managing and updating the clients information. (very initial thought) 
                            Other features will be added. Techstack used is MERN, NextJS as a react framework and Tailwind.CSS for styling. 
                            MongoDB is used as a database and Cloudinary for storing files.
                        </p>
                    </div>         
                </div>
                <div className='flex item-center justify-center mx-2 p-5 '>
                    <MediaCard 
                        image='/gymmgmt.png' 
                        title='Client Management'
                        description='This is a web application for pushing, managing and updating the clients information.' 
                        GHlink='https://github.com/om2137/GymMgmt'
                        blog=''
                    />
                </div>
            </div>

             {/*  */}
            {/* <div className="text-white text-center text-4xl p-4 font-semibold">Other Projcets</div> */}
            <div className='flex flex-col  mx-4 md:my-20'>
                {/* mobile */}
                <div className='flex item-center content-center justify-center pb-10  sm:hidden mx-5'>
                    <Grid
                        xs
                        container 
                        spacing="40px"
                        justifyContent="center" 
                        alignItems="center"                
                    >
                        <Grid item xs={12} sm={6} md={3} xl={2} >
                            <MediaCard image='cover-min.png'
                                title='Thoughts' 
                                description='A decentralized Dapp  on ethereum, built on solidity and NextJs.' 
                                GHlink='https://github.com/om2137/Thoughts'
                                blog='https://easydev.tech/thoughts-decentralized-twitter-like-app-web3'
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} xl={2}>
                            <MediaCard image='gymmgmt.png'
                            title='Client Management ' 
                            description='This is a simple ERP system, a MERN web application. that handle the clients information.'
                            GHlink='https://github.com/om2137/GymMgmt'
                            blog=''
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} xl={2}>
                            <MediaCard image='/git.png' 
                            title='Face Recognition'
                            description='This is an AR and face tracking application, that runs on arcore-supported devices.' 
                            GHlink='https://github.com/om2137/FaceRec'
                            blog='https://easydev.tech/face-recognition-with-unity3d'
                            />
                        </Grid>
                    </Grid>
                </div>
                {/* desktop */}
                <div className='flex item-center justify-center pb-4 xsm:hidden sm:flex mx-auto mx-5'>
                    <Grid
                        container 
                        spacing="40px" 
                        marginLeft="10px"
                        marginRight="20px"
                    >
                        <Grid item xs={12} sm={6} md={4}   >
                            <MediaCard image='cover-min.png'
                            title='Thoughts' 
                            description='A decentralized Dapp on ethereum blockchain, built on solidity and NextJs + TailwindCSS.'  
                            GHlink='https://github.com/om2137/Thoughts'
                            blog='https://easydev.tech/thoughts-decentralized-twitter-like-app-web3'
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} >
                            <MediaCard 
                                image='/gymmgmt.png' 
                                title='Client Management '
                                description='This is a simple ERP system, a MERN web application. that handle the clients information.' 
                                GHlink='https://github.com/om2137/GymMgmt'
                                blog=''
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} >
                            <MediaCard image='/facerec.png' 
                            title='Face Recognition'
                            description='This is an AR and face tracking application, that runs on arcore-supported devices. ' 
                            GHlink='https://github.com/om2137/FaceRec'
                            blog='https://easydev.tech/face-recognition-with-unity3d'
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
            
        </div>
        
    </>
  )
}
