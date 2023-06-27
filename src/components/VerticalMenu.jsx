//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa el componente FontAwesomeIcon si estás utilizando Font Awesome
//import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const VerticalMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    // <FontAwesomeIcon icon={faBars} />

    return (
        <div className='p-8 flex justify-start'>

            <div className='p-2'>
                <img src="/images1/bg15.png" alt="" />
            </div>

            <div className='relative p-2 '>
                <button className=" text-2xl menu-toggle" onClick={toggleMenu}>
                    <i class='bx bx-menu'></i>
                </button>

                {isOpen ?
                    <div className="flex flex-col px-8 pb-8 justify-start absolute rounded-sm bg-white text-black " >
                        <a href="#home" className="p-2 mx-4">Home</a>
                        <hr />
                        <a href="#projects" className=" p-2 mx-4">Projects</a>
                        <hr />
                        <a href="#about" className=" p-2 mx-auto">About Me</a>
                        <hr />
                        <a href="#contact" className=" p-2 mx-auto">Contact Me</a>
                        <hr />
                    </div> : <div></div>}
            </div>

        </div>
    )
}

export default VerticalMenu