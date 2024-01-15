import React from 'react'
import Trajetas from './Trajetas'

const Servicios = () => {
  return (
   <section className='w-full h-full flex flex-row gap-2 items-center justify-center'>
    {/* tarjetas con los servicios  */}
        <Trajetas/>
        <Trajetas/>
        <Trajetas/>
        <Trajetas/>
   </section>
  )
}

export default Servicios
