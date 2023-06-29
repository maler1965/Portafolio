import React from 'react'

const ImageContainer2 = () => {
    return (
        <div className="relative">
            <img
                src="/images2/bg33.png"
                alt="Imagen 1"
                className="absolute top-0 left-0 w-80 h-auto"
            />
            <img
                src="/images2/bg31.png"
                alt="Imagen 2"
                className="absolute top-8 left-8 w-64 h-auto"
            />
            <img
                src="/images1/ricly.png"
                alt="Imagen 3"
                className="absolute top-16 left-16 w-48 h-auto"
            />
        </div>
    )
}

export default ImageContainer2