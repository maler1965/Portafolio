
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




    return (

        <div>

            <section className=' text-white' >

                <div className='hidden md:block' >
                    <Navbar />
                </div>

                <div className='block md:hidden' >
                    <VerticalMenu />
                </div>



                <div className='flex flex-col md:flex-row'>

                    <article className='flex flex-col justify-center w-full md:w-1/2 order-2 md:order-1'>
                        <h1 className='text-white pr-4 py-4 text-2xl font-bold'>
                            <span className='text-[#9BA4ED] mx-4'>Hi!</span>
                        </h1>
                        <p className='text-white p-2 text-2xl font-bold'>I am a <span className='text-[#9BA4ED] mx-2'>Front-End</span> Development with <span className='text-[#9BA4ED] mx-2'>React</span>. </p>
                        <a href="https://api.sertifier.com/userdata/08da1809-42d0-7f2f-99a4-35d57f729e7c/00c55182-f314-4c89-88b2-5cba5dcd1e0a.jpg" target="_blank" rel="noopener noreferrer" className='text-[#9BA4ED] mx-4'>See certificate</a>

                        <br />
                        <br />

                        <h2 className='text-white  p-2 text-2xl font-bold'>
                            Specialized in:
                        </h2>
                        <h2 className='text-white  p-2 text-2xl font-bold'>
                            <span className='text-[#9BA4ED] '>Javascript, HTML and CSS.</span>
                        </h2>
                        <a href="https://certificates.academlo.com/en/verify/84616548519602" target="_blank" rel="noopener noreferrer" className='text-[#9BA4ED] mx-4'>See certificate</a>

                        <br />
                        <br />
                        <p id='home' className='p-4'>
                            I’m probably the most passionate developer you will ever get to work with.
                        </p>
                        <button className='flex justify-start p-4'><h2 className='p-2'>If you want to know more about me </h2> <a href="#about" className="border border-white text-[#9BA4ED] rounded-md p-2">Click Here</a> </button>
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

                <br />
                <br />
                <br />
                <br />

                <div className='flex justify-center'>
                    <h1 className='text-[#9BA4ED] mx-2 p-2 text-center text-2xl font-bold'>SEE MY PROJECTS</h1>
                </div>


                <Projects />



                <br />
                <br />
                <br />
                <br />

                <div className='p-2 m-2 flex flex-col md:flex-row justify-center '>

                    <div id='projects' className='p-2 m-2 flex items-center max-w-[350px] md:w-1/2 order-1 md:order-2'>
                        <p className='p-4'>
                            Get to know the <span className='text-[#9BA4ED]'> crazy universe of “Rick and Morty”</span>. A site where the user can see information about the locations of the "Rick and Morty" universe and learn about the various characters in the series.
                        </p>
                    </div>

                    <br />
                    <br />

                    <div className='relative  md:w-1/2 order-2 md:order-1'>

                        <a href="https://rainbow-gecko-d06cfb.netlify.app/" target="_blank" rel="noopener noreferrer" >

                            <div className='p-2  relative flex flex-col justify-end '>
                                <div>
                                    <img src="/images2/bg33.png" alt="" />
                                </div>

                                <div className='absolute flex justify-end m-2 p-2'>
                                    <div className='bg-black/05 w-[90px] h-[20px] p-2 m-4'></div>
                                    <img style={{ maxWidth: '70%', minWidth: '30%' }} src="/images2/bg31.png" alt="" />
                                </div>
                            </div>


                            <div className='hidden md:block' >
                                <div className="absolute p-2 m-2 top-0 left-0 right-0 flex justify-center">
                                    <img className="rounded-lg overflow-hidden" src="/images1/ricly.png" alt="" style={{ maxWidth: '60%', minWidth: '40%' }} />
                                    <div className='bg-black/05 w-[100px] h-[209px] p-2 m-4'></div>
                                </div>
                            </div>

                            <div className='block md:hidden' >
                                <div className="absolute p-4 m-2 top-0 left-0 right-0 flex justify-center">
                                    <img className="rounded-lg overflow-hidden" src="/images1/ricly.png" alt="" style={{ maxWidth: '70%', minWidth: '20%' }} />
                                    <div className='bg-black/05 w-[20px] h-[20px] p-2 m-4'></div>
                                </div>
                            </div>
                        </a>

                    </div>


                </div>


                <br />
                <br />
                <br />
                <br />


                <div className='p-2 m-2 flex flex-col md:flex-row justify-center '>

                    <div id='projects' className='p-2 m-2 flex items-center max-w-[350px] '>
                        <p className='p-4'>
                            See the <span className='text-[#9BA4ED]'>pokemons brought from the pokeapi</span>. Each card has information about each pokemon, you can search for information using the pokemon id or using its name
                        </p>
                    </div>


                    <div className='relative'>
                        <a href="https://jocular-sopapillas-633df9.netlify.app/" target="_blank" rel="noopener noreferrer" >


                            <div className='p-2  relative flex flex-col justify-end '>
                                <div>
                                    <img src="/images2/bg33.png" alt="" />
                                </div>

                                <div className='absolute flex justify-center m-2 p-2'>
                                    <img style={{ maxWidth: '80%', minWidth: '50%' }} src="/images2/bg30.png" alt="" />
                                </div>
                            </div>

                            <div className='hidden md:block' >
                                <div className="absolute p-2 m-2 top-0 left-0 right-0 flex justify-center">
                                    <img className="rounded-lg overflow-hidden" src="/images1/poke.png" alt="" style={{ maxWidth: '60%', minWidth: '40%' }} />
                                </div>
                            </div>

                            <div className='block md:hidden' >
                                <div className="absolute p-2 m-2 top-0 left-0 right-0 flex justify-center">
                                    <img className="rounded-lg overflow-hidden" src="/images1/poke.png" alt="" style={{ maxWidth: '60%', minWidth: '40%' }} />
                                </div>
                            </div>
                        </a>

                    </div>


                </div>



                <br />
                <br />
                <br />
                <br />


            </section>


        </div>
    )
}

export default DataPortfolio