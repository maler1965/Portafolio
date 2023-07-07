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


    return (
        <section className={`  ${dark ? "text-black" : " text-white"} transition-opacity`}>

            <div className=' bg-stone-700 bg-opacity-30 p-4 m-8 rounded-xl overflow-x-hidden max-w-[1000px]  justify-center inline-flex '>
                <div id='about' className="flex flex-col items-center ms:max-w-[630px]  h-auto  p-2">
                    <h1 className='p-2 m-4 font-bold text-[30px]'>About Me!</h1>

                    <div className="text-3xl">
                        <img className="w-[200px] h-[200px] overflow-hidden rounded-full" src="/images1/foto2.png" alt="" />
                    </div>


                    <div className="flex justify-center p-2 m-4">
                        <button className="border border-white rounded-md p-2" onClick={handleOnClick}>
                            {language ? 'In English' : 'In Spanish'}
                        </button>
                    </div>

                    {language ? <SpanishLanguage /> : <EnglishLanguage />}

                </div>
            </div>

        </section>
    )
}

export default AboutMe1