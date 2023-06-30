import React from 'react'

const Contact = () => {


    //bg-opacity-30


    return (
        <section className="flex justify-center">
            <div className='text-black bg-white  p-4 m-8 rounded-xl overflow-x-hidden max-w-[1000px] justify-center inline-flex'>
                <div id='contact' className="flex flex-col items-center ms:max-w-[630px] h-auto p-2">
                    <h1 className='p-2 m-4 text-[#4657da]  font-bold text-[30px]'>Contact me!</h1>
                    <p className='p-2 m-4'>
                        <span className='p-2 m-4   font-bold text-[30px]'>Do not hesitate to contact me for any question or project!</span>
                        <br />
                        <br />
                        Puedes enviarme un correo electrónico a
                        <a href="mailto:tuemail@example.com" className="text-[#4657da] px-2 underline"> tuemail@example.com</a>
                        <br />
                        <br />

                        o llamarme al
                        <a href="tel:+1234567890" className="text-[#4657da] px-2 underline">+1234567890</a>.

                        <br />
                        <br />

                        También puedes encontrarme en mis perfiles de redes sociales:
                        <a href="https://www.linkedin.com/in/tuperfil" className="text-[#4657da] px-2 underline"> LinkedIn</a>



                        y
                        <a href="https://www.twitter.com/tuperfil" className="text-[#4657da] px-2 underline"> Twitter</a>.


                    </p>


                    <button className='flex justify-start p-2'>
                        <a href="/contacto" className='border border-black rounded-md p-2 text-black'>Ready</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Contact