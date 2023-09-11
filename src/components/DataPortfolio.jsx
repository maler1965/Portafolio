
import Navbar from './NavBar'
import VerticalMenu from './VerticalMenu';
import Projects from './Projects';
import { useSelector } from 'react-redux'

const largeCircles = [
    "/images2/bg25.png",
    "/images2/bg26.png",
    "/images2/bg28.png",
    "/images2/bg29.png",
    "/images2/bg35.png",
]


const DataPortfolio = () => {

    const { dark } = useSelector(state => state.darkSlice)
    const darkValue = JSON.parse(dark);


return (

        <div>

            <section  >

                <div className='text-white'>
                    <div className='hidden md:block' >
                        <Navbar />
                    </div>

                    <div className='block md:hidden' >
                        <VerticalMenu />
                    </div>
                </div>

                <section className={`  ${darkValue ? "text-black" : " text-white"} transition-opacity`}>
                    <div className='flex flex-col md:flex-row'>

                        <article className='flex flex-col justify-center text-center w-full md:w-1/2 order-2 md:order-1'>
                            <h1 className=' pr-4 py-4 text-2xl font-bold'>
                                <span className='text-[#495def] mx-4'>¡HOLA!</span>
                            </h1>
                            <p className=' p-2 text-2xl font-bold'>Soy un programador<span className='text-[#495def] mx-2'>full-stack</span> usando la tecnologia <span className='text-[#495def] mx-2'>React</span> </p>
                            <p className=' p-2 text-2xl font-bold' >Con habilidades en el uso de: <span className='text-[#495def] mx-2' >Redux, React-Router,</span></p>
                            <p className=' p-2 text-2xl font-bold' ><span className='text-[#495def] mx-2' >Axios, React-Hook-Form, TailwindCSS</span> y otros.</p>
                            <a href="https://certificates.academlo.com/en/verify/48476009899155" target="_blank" rel="noopener noreferrer" className='text-[#495def] mx-4'>Ver Certificado de React</a>

                            <p className=' p-2 text-2xl font-bold'>Ademas utilizo<span className='text-[#495def] mx-2'>NODEJS</span> usando tecnologias como <span className='text-[#495def] mx-2'>Express</span> </p>
                            <p className=' p-2 text-2xl font-bold' >Con habilidades en el uso de: <span className='text-[#495def] mx-2' >Routers, Base de Datos PostgreSQL, con Sequelize.</span></p>
                            <a href="https://certificates.academlo.com/en/verify/20382813966572?ref=email" target="_blank" rel="noopener noreferrer" className='text-[#495def] mx-4'>Ver Certificado de Nodejs</a>

                            <br />
                            <br />
                            <br />

                            <h2 className='  p-2 text-2xl font-bold'>
                                Utilizo los siguientes lenguajes:
                            </h2>
                            <h2 className='  p-2 text-2xl font-bold'>
                                <span className='text-[#495def] '>Javascript, HTML and CSS.</span>
                            </h2>
                            <a href="https://certificates.academlo.com/en/verify/84616548519602" target="_blank" rel="noopener noreferrer" className='text-[#495def] mx-4'>Ver Certificado</a>

                            <br />
                            <br />
                            <br />


                        <div  >

                            <div className='bg-stone-700 bg-opacity-30 p-4 m-8 rounded-xl overflow-x-hidden'>

                            <h2 className='p-2'>Soy <span className='font-bold' >PEDRO CEVALLOS </span> </h2>
                                <a href="/CV_Resume.pdf" target="_blank" rel="noopener noreferrer" >
                                <p className='px-4 flex justify-center text-[40px] text-center'><i className='bx bxl-facebook-circle'></i> </p>
                                          
                               <div className="flex justify-center">
                                <div className="bg-white rounded-xl px-4">
                                   <p className="text-[#495def] font-bold text-center">Mira mi CV</p>
                                 </div>
                                </div>

                                </a>
                           

                            <br />
                            <br />

                                <p id='home' className='p-2'>
                                    Con dedicación y entrega en el trabajo, es posible alcanzar grandes logros,
                                </p>

                                <p className='p-2'>
                                    y esta mentalidad impulsa mi trayectoria profesional.
                                </p>
                                <h2 className='p-2'> Si deseas conocer mas detalles de mi, </h2>
                                <div className='flex justify-center'>
                                    <button className='flex justify-center p-4'> <a href="#about" className=" border border-white text-[#495def] rounded-md p-2">clic aquí</a> </button>
                                </div>
                            </div>

                              


                            </div>

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
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />

                            <div className="flex justify-center">               
                                 <div className=" rounded-full overflow-hidden w-[350px] h-[350px]">
                                     <img src="/images2/espacio1.jpg" alt="" className="flex justify-center w-full h-full object-cover" />
                                </div>
                             </div>

                        </section>

                    </div>

                    <br />
                    <br />
                    <br />
                    <br />

                    <div className='flex justify-center'>
                        <h1 className='text-[#495def] mx-2 p-2 text-center text-2xl font-bold'>MIRA MIS PROYECTOS</h1>
                    </div>

                    <div className='flex justify-center'>
                        <h2 className='text-[#495def] mx-2 p-2 text-center text-2xl font-bold'>UTILIZANDO LAS TECNOLOGIAS ANTES MENCIONADAS</h2>
                    </div>

                    <Projects />



                    <br />
                    <br />
                    <br />
                    <br />

                    <div className='p-2 m-2 flex flex-col md:flex-row justify-center '>

                        <div id='projects' className='p-2 m-2 flex items-center max-w-[350px] md:w-1/2 order-1 md:order-2'>
                            <p className='p-4'>
                                Conozca el  <span className='text-[#495def]'> loco univerzo de “Rick and Morty”</span>. Un sitio donde el usuario puede ver información sobre los universos de la serie de caricatura de "Rick and Morty" y aprender sobre los distintos personajes de la serie..
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
                                Vea los <span className='text-[#495def]'>pokemons traidos de la base de datos de pokeapi</span>. Cada tarjeta tiene información de cada pokemon, puedes buscar información usando el id del pokemon o usando su nombre
                            </p>
                        </div>


                        <div className='relative'>
                            <a href="https://rococo-crepe-45147b.netlify.app/" target="_blank" rel="noopener noreferrer" >


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

            </section>


        </div>
    )
}

export default DataPortfolio