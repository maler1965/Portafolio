import React, { useState } from 'react'
import SpanishLanguage from './SpanishLanguage'
import EnglishLanguage from './EnglishLanguage'
import { useSelector } from 'react-redux'

const AboutMe1 = () => {

    const [language, setLanguage] = useState(false)


    const handleOnClick = () => {
        setLanguage(!language)
    }


    const { dark } = useSelector(state => state.darkSlice)
    const darkValue = JSON.parse(dark);

    return (
        <section className={`  ${darkValue ? "text-black" : " text-white"} transition-opacity`}>

            <div className=' bg-stone-700 bg-opacity-30 p-4 m-8 rounded-xl overflow-x-hidden max-w-[1000px]  justify-center inline-flex '>
                <div id='about' className="flex flex-col items-center ms:max-w-[630px]  h-auto  p-2">
                    <h1 className='p-2 m-4 font-bold text-[30px]'>¡Acerca de mí!</h1>

                    <div className="text-3xl">
                        <img className="w-[200px] h-[200px] overflow-hidden rounded-full" src="/images1/foto2.png" alt="" />
                    </div>

                    {language ? <EnglishLanguage /> : <SpanishLanguage />}

                    <div className="flex justify-center p-2 m-4">
                        <button className="border border-white rounded-md p-2" onClick={handleOnClick}>
                            {language ? 'En Español' : 'In English'}
                        </button>
                    </div>


                </div>
            </div>

        </section>
    )
}

export default AboutMe1