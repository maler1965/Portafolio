
import { useSelector } from 'react-redux'

const Footer = () => {

   

    const { dark } = useSelector(state => state.darkSlice)
    const darkValue = JSON.parse(dark);




    return (
        
        <section id='contact' className={`flex justify-center  ${darkValue ? "text-black" : " text-white"} transition-opacity`}>




  {/*  =============================*/}

  


            <section id="projects" className="flex justify-center">
 

<div className='text-white bg-stone-700 bg-opacity-30 p-4 rounded-xl overflow-x-hidden max-w-[1000px]  justify-center inline-flex '>

        

    <div >

       <div>
        <h1 className='p-2 m-2 font-bold text-[#495def] text-[20px] flex justify-center'>¡Contáctame!</h1>
            <p className='p-2 m-4'>¡No dudes en contactarme para cualquier consulta o proyecto!.</p>
        </div>
    
<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 p-4">


        <div className='bg-stone-900 bg-opacity-50 rounded-xl shadow-md gap-4 flex flex-col justify-between w-[202px] h-[100px] m-2 p-2'>
            <a href="mailto:tuemail@example.com" target="_blank" rel="noopener noreferrer" >
                <p className='px-4 flex justify-center text-[40px] text-center'><i className='bx bx-envelope'></i> </p>
                <p className='px-4 flex justify-center bg-white rounded-xl text-[#495def]  text-center'> pevallos1965@gmail.com</p>
                
            </a>
        </div>

        <div className='bg-stone-900 bg-opacity-50 rounded-xl shadow-md gap-4 flex flex-col justify-between w-[202px] h-[100px] m-2 p-2'>
            <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" >
                <p className='px-4 flex justify-center text-[40px] text-center'><i className='bx bxl-whatsapp'></i> </p>
                <p className='px-4 flex justify-center bg-white rounded-xl text-[#495def] font-bold text-center'> +593 994449692 (WhatsApp)</p>
                
            </a>
        </div>

        <div className='bg-stone-900 bg-opacity-50 rounded-xl shadow-md gap-4 flex flex-col justify-between w-[202px] h-[100px] m-2 p-2'>
            <a href="https://www.linkedin.com/in/peter-maler-239259272" target="_blank" rel="noopener noreferrer" >
                <p className='px-4 flex justify-center text-[40px] text-center'><i className='bx bxl-linkedin-square'></i> </p>
                <p className='px-4 flex justify-center bg-white rounded-xl text-[#495def] font-bold text-center'> LinkedIn</p>
                
            </a>
        </div>

        <div className='bg-stone-900 bg-opacity-50 rounded-xl shadow-md gap-4 flex flex-col justify-between w-[202px] h-[100px] m-2 p-2'>
            <a href="https://www.facebook.com/Christopher_Cevallos/" target="_blank" rel="noopener noreferrer" >
                <p className='px-4 flex justify-center text-[40px] text-center'><i className='bx bxl-facebook-circle'></i> </p>
                <p className='px-4 bg-white rounded-xl flex justify-center text-[#495def] font-bold text-center'> Facebook</p>
                
            </a>
        </div>

  


</div>

    </div>


</div>


</section>

 {/*  =============================*/}

        </section>

        
    )
}

export default Footer