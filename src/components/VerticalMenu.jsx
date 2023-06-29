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
        <div className=' flex justify-between'>

            <div className='  relative p-2 '>
                <button className=" text-3xl menu-toggle" onClick={toggleMenu}>
                    <i className='bx bx-menu'></i>
                </button>

                {isOpen ?
                    <div className="flex flex-col px-4 pb-4 justify-start absolute rounded-sm bg-white text-black " >
                        <div className=' flex justify-end'>
                            <button className=" text-2xl" onClick={toggleMenu}>
                                <i className='bx bx-message-square-x'  ></i>
                            </button>
                        </div>
                        <a href="#home" className="p-2 px-4 mx-8">Home</a>
                        <hr />
                        <a href="#projects" className=" p-2 px-4 mx-8">Projects</a>
                        <hr />
                        <a href="#about" className=" p-2 mx-auto">About Me</a>
                        <hr />
                        <a href="#contact" className=" p-2 mx-auto">Contact Me</a>
                        <hr />
                    </div> : <div></div>}
            </div>

            <div className='p-2 m-2'>
                <img src="/images1/bg15.png" alt="" />
            </div>
        </div>
    )
}

export default VerticalMenu