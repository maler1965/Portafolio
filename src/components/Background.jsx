import React from 'react'
const largeShades = [
    "/images2/bg27.png",
    "/images2/bg23.png",
    "/images2/bg22.png",
    "/images2/bg24.png",
    "/images2/bg21.png",
    "/images2/bg22.png",
]


const Background = () => {


    return (
        <div>
            <div className='sm:grid-cols-[1fr_auto]  mx-auto'>
                <img className='w-20p  h-auto' src={largeShades[0]} alt="" />
            </div>

            <div className='sm:grid-cols-[1fr_auto]  mx-auto'>
                <img className='w-20p  h-auto' src={largeShades[1]} alt="" />
            </div>

            <div className='sm:grid-cols-[1fr_auto]  mx-auto'>
                <img className='w-20p  h-auto' src={largeShades[2]} alt="" />
            </div>

            <div className='sm:grid-cols-[1fr_auto]  mx-auto'>
                <img className='w-20p  h-auto' src={largeShades[3]} alt="" />
            </div>


            <div className='sm:grid-cols-[1fr_auto]  mx-auto'>
                <img className='w-20p  h-auto' src={largeShades[3]} alt="" />
            </div>

        </div>
    )
}

export default Background