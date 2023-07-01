


const ModalContact = ({ changeModalShow, modalShow }) => {





    const handleCloseModal = () => {
        changeModalShow()
    }


    return (
        <section className={`fixed top-0 left-0 right-0 h-screen bg-black/80 grid place-content-center ${modalShow ? "opacity-100 visible" : "invisible opacity-0"} transition-opacity`}>

            <div className="bg-white  rounded-md m-2  flex-col items-center p-4  grid gap-6 relative">
                <h1 className='p-2 m-2 text-[#4657da] flex justify-center  font-bold text-[30px]'>Contact me!</h1>
                <p className='p-2 m-2  text-black'>



                    You can email me at:
                    <a href="mailto:tuemail@example.com" className="text-[#4657da] px-2 underline"> pevallos1965@gmail.com</a>

                    <br />
                    <br />

                    or call me at:
                    <a href="tel:+994449692" className="text-[#4657da] px-2 underline">+593 994449692</a>.
                    This number has WhatsApp.
                    <br />
                    <br />

                    You can also find me on social networks:
                    <a href="https://www.linkedin.com/" className="text-[#4657da] px-2 underline"> LinkedIn</a>

                    as Peter Maler  and in
                    <a href="https://www.facebook.com/" className="text-[#4657da] px-2 underline"> Facebook</a>

                    as Christopher Cevallos and in
                    <a href="https://www.Instagram.com/" className="text-[#4657da] px-2 underline"> Instagram </a>
                    as peter_ventanas


                </p>


                <button onClick={handleCloseModal} type="button" className='absolute bg-blue-500 top-2 right-2 text-2xl hover:bg-red-500 rounded-full hover:text-secondary'><i className='bx bx-x'></i></button>

                <div className="bg-blue-500 rounded-md mb-4 h-[3px]"> </div>
            </div>

        </section>
    )
}

export default ModalContact