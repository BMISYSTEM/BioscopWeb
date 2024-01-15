import React from 'react'
import 'animate.css'

// imagenes
import archivo from '../assets/archivo.svg'
import carpetas from '../assets/carpetas.svg'
import grupo from '../assets/grupo.svg'

const SharePoint = () => {
  return (
    <section className='w-full h-full bg-slate-300  rounded-xl animate__animated  animate__fadeIn  flex flex-col overflow-hidden'>
      {/* filtros */}
      <div className='w-full h-10 flex flex-row gap-2 bg-white'>  
        empresas 
        activos 
        Permisos
      </div>
      <main className='w-full h-[99%] p-2 grid grid-cols-5  gap-2 place-items-start bg-white overflow-auto'>
        {/* tarjeta proyecto */}
        <div className='animate__animated  animate__backInUp w-48 h-48 border-2 rounded-xl shadow-xl  hover:scale-105 transition flex flex-col gap-2  items-center justify-center cursor-pointer'>
          <h1 className='text-xl font-bold text-black'>Carmelita</h1>
          <div className='w-full h-1/2 grid grid-cols-2 p-1 items-center place-items-center'>
            <div className='flex flex-row gap-1 items-center'>
              <img src={carpetas} alt="carpetas" className='w-6 h-6' />
              <p className='text-xl font-bold text-black'>3</p>
            </div>
            <div className='flex flex-row gap-1 items-center'>
              <img src={archivo} alt="archivos" className='w-6 h-6' />
              <p className='text-xl font-bold text-black'>20</p>
            </div>
            <div className='flex flex-row gap-1 items-center'>
              <img src={grupo} alt="grupo" className='w-6 h-6' />
              <p className='text-xl font-bold text-black'>10</p>
            </div>
          </div>
        </div>
        <div className='animate__animated  animate__backInUp w-48 h-48 border-2 rounded-xl shadow-xl  hover:scale-105 transition flex flex-col gap-2  items-center justify-center cursor-pointer'>
          <h1 className='text-xl font-bold text-black'>Carmelita</h1>
          <div className='w-full h-1/2 grid grid-cols-2 p-1 items-center place-items-center'>
            <div className='flex flex-row gap-1 items-center'>
              <img src={carpetas} alt="carpetas" className='w-6 h-6' />
              <p className='text-xl font-bold text-black'>3</p>
            </div>
            <div className='flex flex-row gap-1 items-center'>
              <img src={archivo} alt="archivos" className='w-6 h-6' />
              <p className='text-xl font-bold text-black'>20</p>
            </div>
            <div className='flex flex-row gap-1 items-center'>
              <img src={grupo} alt="grupo" className='w-6 h-6' />
              <p className='text-xl font-bold text-black'>10</p>
            </div>
          </div>
        </div>
        <div className='animate__animated  animate__backInUp w-48 h-48 border-2 rounded-xl shadow-xl  hover:scale-105 transition flex flex-col gap-2  items-center justify-center cursor-pointer'>
          <h1 className='text-xl font-bold text-black'>Carmelita</h1>
          <div className='w-full h-1/2 grid grid-cols-2 p-1 items-center place-items-center'>
            <div className='flex flex-row gap-1 items-center'>
              <img src={carpetas} alt="carpetas" className='w-6 h-6' />
              <p className='text-xl font-bold text-black'>3</p>
            </div>
            <div className='flex flex-row gap-1 items-center'>
              <img src={archivo} alt="archivos" className='w-6 h-6' />
              <p className='text-xl font-bold text-black'>20</p>
            </div>
            <div className='flex flex-row gap-1 items-center'>
              <img src={grupo} alt="grupo" className='w-6 h-6' />
              <p className='text-xl font-bold text-black'>10</p>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default SharePoint
