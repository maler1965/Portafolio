import { Link } from 'react-router-dom';

function Navbar() {

    /*
    
    <div className={"flex justify-center ml-auto "} >
                    <a href="#" className="p-2 mr-4 ml-4">Home</a>
                    <a href="#" className=" p-2 mr-4 ml-4">Projects</a>
                    <a href="#" className=" p-2 mr-4 ml-4">About Me</a>
                    <a href="#" className=" p-2 mr-4 ml-4">Contact Me</a>
                </div>
    */

    return (
        <header className="bg-gray-800 text-white">
            <div className="flex py-4 px-8">
                <div>
                    <img src="/images1/bg15.png" alt="" />
                </div>

                <div className="flex justify-center ml-auto">
                    <a href="#home" className="p-2 mr-4 ml-4">Home</a>
                    <a href="#projects" className="p-2 mr-4 ml-4">Projects</a>
                    <a href="#about" className="p-2 mr-4 ml-4">About Me</a>
                    <a href="#contact" className="p-2 mr-4 ml-4">Contact Me</a>
                </div>



            </div>
        </header>


    );
}

export default Navbar;
