import React from 'react'
import 'animate.css'



const SharePoint = () => {
  return (
    <section className='w-full h-full bg-slate-300  rounded-xl animate__animated  animate__fadeIn  flex flex-col overflow-hidden'>
      <div className='w-full h-20 bg-white flex flex-row items-center p-2'>
          <button className='p-2 text-sm font-bold text-white bg-green-500 rounded-xl hover:scale-110 hover:bg-green-700 transition-all'
          onClick={()=>alert('hola jesica')}
          >Nueva carpeta</button>
      </div>
    </section>
  )
}

export default SharePoint
