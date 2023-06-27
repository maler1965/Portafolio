//import React, { useEffect, useState } from 'react'
import Navbar from './NavBar'
import VerticalMenu from './VerticalMenu';
import Projects from './Projects';


const largeCircles = [
    "/images2/bg25.png",
    "/images2/bg26.png",
    "/images2/bg28.png",
    "/images2/bg29.png",
    "/images2/bg35.png",
]


const DataPortfolio = () => {


    /*
    
    <div className='hidden md:block' >
                            <div className='p-4 flex justify-center'>
                                <img src="/images2/bg33.png" alt="" />
                            </div>
                        </div>
    
                        <div className='block md:hidden' >
                            <div className='p-4 flex justify-center'>
                                <img src="/images1/bg17.png" alt="" />
                            </div>
                        </div>
    
    
    
    */




    return (
        <section className=' text-white' >

            <div className='hidden md:block' >
                <Navbar />
            </div>

            <div className='block md:hidden' >
                <VerticalMenu />
            </div>

            <div className='flex flex-col md:flex-row'>

                <article className='flex flex-col justify-center w-full md:w-1/2 order-2 md:order-1'>
                    <h1 className='text-white flex pr-4 py-4 text-2xl font-bold'>
                        <span className='text-[#9BA4ED] mx-4'>Hi!</span> I am a backend developer.
                    </h1>
                    <p className='p-4'>
                        I’m probably the most passionate developer you will ever get to work with.
                        If you have a great project that needs some amazing skills, I’m your guy.
                    </p>
                    <button className='flex justify-start p-4'><span className='border border-white rounded-md p-2'>Click Here</span></button>
                </article>

                <section className='w-full md:w-1/2 order-1 md:order-2'>
                    <div className='flex gap-4 pt-8'>
                        <div className='p-2 mx-auto'>
                            <img className='w-20p h-auto' src={largeCircles[1]} alt='' />
                        </div>
                        <div className='p-4 mx-auto'>
                            <img className='w-20p h-auto' src={largeCircles[0]} alt='' />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex flex-col justify-between p-2'>
                            <div className='p-2'>
                                <img className='w-20p h-auto' src={largeCircles[2]} alt='' />
                            </div>
                            <div className='pb-8'>
                                <img className='w-20p h-auto' src={largeCircles[3]} alt='' />
                            </div>
                        </div>
                        <div className='w-auto ms:max-w-[450px]'>
                            <img className='object-contain' src={largeCircles[4]} alt='' />
                        </div>
                    </div>
                </section>

            </div>

            <Projects />



            <div className='p-4 m-8 flex flex-col md:flex-row justify-center '>

                <div className='p-4 m-8 flex items-center max-w-[350px]  md:w-1/2 order-1 md:order-2'>
                    <p className='p-4'>
                        I’m probably the most passionate developer you will ever get to work with.
                        If you have a great project that needs some amazing skills, I’m your guy.
                    </p>
                </div>
                <div className='p-4 flex justify-center  md:w-1/2 order-2 md:order-1'>
                    <img src="/images2/bg33.png" alt="" />
                </div>

            </div>



            <div className='p-4 m-8 flex flex-col md:flex-row justify-center '>

                <div id='projects' className='p-4 m-8 flex items-center max-w-[350px] '>
                    <p className='p-4'>
                        I’m probably the most passionate developer you will ever get to work with.
                        If you have a great project that needs some amazing skills, I’m your guy.
                    </p>
                </div>
                <div className='p-4 flex justify-center '>
                    <img src="/images2/bg33.png" alt="" />
                </div>

            </div>

        </section>
    )
}

export default DataPortfolio