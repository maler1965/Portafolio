import React, { useState } from 'react'
import ModalContact from './ModalContact';
import { useSelector } from 'react-redux'

const Footer = () => {

    const [modalShow, setModalShow] = useState(false)

    const changeModalShow = () => setModalShow(!modalShow);

    const { dark } = useSelector(state => state.darkSlice)
    const darkValue = JSON.parse(dark);

    const handleOnClick = () => {
        setModalShow(!modalShow)
    }



    return (
        <section id='contact' className={`flex justify-center  ${darkValue ? "text-black" : " text-white"} transition-opacity`}>

            <div className=' bg-stone-700 bg-opacity-30 p-4 m-8 rounded-xl overflow-x-hidden max-w-[1000px]  justify-center inline-flex '>

                <div id='contact' className="flex flex-col items-center ms:max-w-[630px]  h-auto  p-2">
                    {/*  */}
                    <h1 className='p-2 m-2 font-bold text-[#495def] text-[20px]'>¡Contáctame!</h1>

                    <p className='p-2 m-4'>¡No dudes en contactarme para cualquier consulta o proyecto!.</p>
                    <button onClick={handleOnClick} className='flex justify-start p-2'><span className='border border-white rounded-md p-2'>clic aquí</span></button>

                </div>

                <ModalContact changeModalShow={changeModalShow} modalShow={modalShow} />

            </div>

        </section>
    )
}

export default Footer