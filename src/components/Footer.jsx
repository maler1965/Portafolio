import React, { useState } from 'react'
import ModalContact from './ModalContact';

const Footer = () => {

    const [modalShow, setModalShow] = useState(false)

    const changeModalShow = () => setModalShow(!modalShow);


    const handleOnClick = () => {
        setModalShow(!modalShow)
    }

    return (
        <section id='contact' className="flex justify-center">
            <div className='text-white bg-stone-700 bg-opacity-30 p-4 m-8 rounded-xl overflow-x-hidden max-w-[1000px]  justify-center inline-flex '>
                <div id='contact' className="flex flex-col items-center ms:max-w-[630px]  h-auto  p-2">
                    <h1 className='p-2 m-4 font-bold text-[30px]'>Contact me!</h1>
                    <p className='p-2 m-4'>Do not hesitate to contact me for any question or project!.</p>
                    <button onClick={handleOnClick} className='flex justify-start p-2'><span className='border border-white rounded-md p-2'>Click Here</span></button>
                </div>

                <ModalContact changeModalShow={changeModalShow} modalShow={modalShow} />

            </div>
        </section>
    )
}

export default Footer