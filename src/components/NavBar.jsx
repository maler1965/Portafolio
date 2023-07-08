import { useDispatch, useSelector } from "react-redux";
import { setdark } from "../store/slices/dark.slice";

function Navbar() {

    const { dark } = useSelector(state => state.darkSlice)
    const darkValue = JSON.parse(dark);
    const dispatch = useDispatch()

    const handleDarkModeToggle = () => {
        dispatch(setdark(!dark));
    };

    return (
        <header className="bg-gray-800 text-white">

            <div className="flex py-2 px-8">
                <div>
                    <img src="/images1/bg15.png" alt="" />
                </div>

                {darkValue ?
                    <div className="flex">
                        <div className=" p-2 ">
                            <button onClick={handleDarkModeToggle}><i className='text-[40px] bx bxs-moon'></i></button>
                        </div>

                        <div>
                            <h2 className="p-2 my-2">Modo Oscuro</h2>
                        </div>
                    </div>
                    :
                    <div className="flex">
                        <div className=" p-2 ">
                            <button onClick={handleDarkModeToggle}><i className=' text-[40px] bx bxs-sun'></i></button>
                        </div>

                        <div>
                            <h2 className="p-2 my-2">Modo Claro</h2>
                        </div>
                    </div>
                }



                <div className="flex justify-center ml-auto">
                    <a href="#home" className="p-2 mr-4 ml-4">Inicio</a>
                    <a href="#projects" className="p-2 mr-4 ml-4">Proyectos</a>
                    <a href="#about" className="p-2 mr-4 ml-4">Acerca de mí</a>
                    <a href="#contact" className="p-2 mr-4 ml-4">Contáctame</a>
                </div>
            </div>

        </header>


    );
}

export default Navbar;
