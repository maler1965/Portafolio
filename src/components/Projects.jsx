

const Projects = () => {

    //justify-center inline-flex
    return (

        <section id="projects" className="flex justify-center">


            <div className='text-white bg-stone-700 bg-opacity-30 p-4 rounded-xl overflow-x-hidden max-w-[1000px]  justify-center inline-flex '>


                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 p-4">


                    <div className='bg-stone-900 bg-opacity-50 rounded-xl shadow-md gap-4 flex flex-col justify-between w-[202px] h-[176px] mx-auto p-2'>
                        <p className='px-4 flex justify-center text-[40px] text-center'><i className='bx bx-cart-alt'></i> </p>
                        <p className='px-4 flex justify-center text-center'> SHOPPING CART</p>
                        <p className='px-4 flex justify-center text-center'> Project with products exposed to the user and placed in the cart</p>
                    </div>
                    {/**/}
                    <div className='bg-stone-900 bg-opacity-50 rounded-xl shadow-md gap-4 flex flex-col justify-between w-[202px] h-[176px] mx-auto p-2'>
                        <p className='px-4 flex justify-center text-[40px] text-center'><i className='bx bx-cloud-light-rain'></i> </p>
                        <p className='px-4 flex justify-center text-center'> WEATHER STATE</p>
                        <p className='px-4 flex justify-center text-center'>Show information about the weather of the place</p>
                    </div>

                    <div className='bg-stone-900 bg-opacity-50 rounded-xl shadow-md gap-4 flex flex-col justify-between w-[202px] h-[176px] mx-auto p-2'>
                        <p className='px-4 flex justify-center text-[40px] text-center'><i className='bx bxs-user-account'></i> </p>
                        <p className='px-4 flex justify-center text-center'> MANAGE API</p>
                        <p className='px-4 flex justify-center text-center'> Manage users through a CRUD using an API</p>
                    </div>

                    <div className='bg-stone-900 bg-opacity-50 rounded-xl shadow-md gap-4 flex flex-col justify-between w-[202px] h-[176px] mx-auto p-2'>
                        <p className='px-4 flex justify-center text-[40px] text-center'><i className='bx bx-book-reader'></i> </p>
                        <p className='px-4 flex justify-center text-center'> PHRASE RANDOMLY</p>
                        <p className='px-4 flex justify-center text-center'> Randomly show a phrase and background when clicked</p>
                    </div>


                </div>


            </div>


        </section>

    )
}

export default Projects