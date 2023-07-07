
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setdark } from '../store/slices/dark.slice';

const VerticalMenu = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const { dark } = useSelector(state => state.darkSlice)
    const dispatch = useDispatch()

    const handleDarkModeToggle = () => {
        dispatch(setdark(!dark));
    };

    return (
        <div className='bg-black flex justify-between'>

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


            {dark ?
                <div className="flex">
                    <div>
                        <h2 className="p-2 my-2">Dark Mode</h2>
                    </div>

                    <div className=" p-2 ">
                        <button onClick={handleDarkModeToggle}><i className='text-[40px] mt-2 bx bxs-moon'></i></button>
                    </div>
                </div>
                :
                <div className="flex">
                    <div>
                        <h2 className="p-2 my-2">Clear Mode</h2>
                    </div>

                    <div className=" p-2 ">
                        <button onClick={handleDarkModeToggle}><i className=' text-[40px] mt-2 bx bxs-sun'></i></button>
                    </div>
                </div>
            }


            <div className='p-2 m-2'>
                <img src="/images1/bg15.png" alt="" />
            </div>
        </div>
    )
}

export default VerticalMenu