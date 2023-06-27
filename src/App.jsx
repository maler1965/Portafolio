

import './App.css'
import DataPortfolio from './components/DataPortfolio'
import Footer from './components/Footer'
//import { screenDetect } from './util/checkScreen'

const smallShades = [
  "/images1/bg6.png",
  "/images1/bg9.png",
  "/images1/bg10.png",
  "/images1/bg11.png",
  "/images1/bg13.png",
  "/images1/bg12.png",
]

const largeShades = [
  "/images2/bg27.png",
  "/images2/bg23.png",
  "/images2/bg22.png",
  "/images2/bg24.png",
  "/images2/bg21.png",
  "/images2/bg22.png",

]

function App() {

  //const imagesBackground = screenDetect(smallShades, largeShades)




  return (
    <main className='  min-h-screen bg-black  relative '>

      <section >
        <div className='sm:grid-cols-[1fr_auto]  mx-auto'>
          <img className='w-20p  h-auto' src={largeShades[0]} alt="" />
        </div>

        <div className='sm:grid-cols-[1fr_auto]  mx-auto'>
          <img className='w-20p  h-auto' src={largeShades[1]} alt="" />
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

        <div className='sm:grid-cols-[1fr_auto]  mx-auto'>
          <img className='w-20p  h-auto' src={largeShades[0]} alt="" />
        </div>

        <div className='sm:grid-cols-[1fr_auto]  mx-auto'>
          <img className='w-20p  h-auto' src={largeShades[1]} alt="" />
        </div>

        <div className='absolute top-0 left-0 w-full h-full flex justify-center'>
          <div className='relative z-10'>
            <DataPortfolio />
            <Footer />
          </div>
        </div>

      </section>

    </main>
  )
}

export default App
