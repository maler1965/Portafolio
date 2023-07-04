
import './App.css'
import AboutMe1 from './components/AboutMe1'
import DataPortfolio from './components/DataPortfolio'
import Footer from './components/Footer'
import Background from './components/Background'


const largeShades = [
  "/images2/bg27.png",
  "/images2/bg23.png",
  "/images2/bg22.png",
  "/images2/bg24.png",
  "/images2/bg21.png",
  "/images2/bg22.png",

]

function App() {



  return (
    <main className='  min-h-screen bg-black  relative '>

      <section >

        <Background />

        <div className='sm:grid-cols-[1fr_auto]  mx-auto'>
          <img className='w-20p  h-auto' src={largeShades[2]} alt="" />
        </div>

        <div className='sm:grid-cols-[1fr_auto]  mx-auto'>
          <img className='w-20p  h-auto' src={largeShades[3]} alt="" />
        </div>

        <div className='sm:grid-cols-[1fr_auto]  mx-auto'>
          <img className='w-20p  h-auto' src={largeShades[2]} alt="" />
        </div>

        <div className='sm:grid-cols-[1fr_auto]  mx-auto'>
          <img className='w-20p  h-auto' src={largeShades[3]} alt="" />
        </div>

        <div className='sm:grid-cols-[1fr_auto]  mx-auto'>
          <img className='w-20p  h-auto' src={largeShades[4]} alt="" />
        </div>

        <div className='sm:grid-cols-[1fr_auto]  mx-auto'>
          <img className='w-20p  h-auto' src={largeShades[5]} alt="" />
        </div>

        <Background />

        <div className='sm:grid-cols-[1fr_auto]  mx-auto'>
          <img className='w-20p  h-auto' src={largeShades[3]} alt="" />
        </div>

        <div className='sm:grid-cols-[1fr_auto]  mx-auto'>
          <img className='w-20p  h-auto' src={largeShades[4]} alt="" />
        </div>

        <div className='sm:grid-cols-[1fr_auto]  mx-auto'>
          <img className='w-20p  h-auto' src={largeShades[5]} alt="" />
        </div>

        <div className='sm:grid-cols-[1fr_auto]  mx-auto'>
          <img className='w-20p  h-auto' src={largeShades[2]} alt="" />
        </div>

        <div className='sm:grid-cols-[1fr_auto]  mx-auto'>
          <img className='w-20p  h-auto' src={largeShades[3]} alt="" />
        </div>


        <Background />

        <div className='absolute top-0 left-0 w-full h-full flex  flex-col items-center'>

          <div className='relative'>
            <DataPortfolio />
          </div>


          <div>
            <AboutMe1 />
          </div>



          <div>
            <Footer />
          </div>

        </div>

      </section>

    </main>
  )
}

export default App
