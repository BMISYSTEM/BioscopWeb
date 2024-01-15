import React from 'react'
/**
 * Imagenes
 */

import cargando from '../Assets/cargandosinfondo.gif'
export const Loading = () => {
  return (
    <div className='w-full h-auto overflow-hidden flex flex-col gap-2 justify-center content-center items-center'>

        <img src={cargando} alt="Cargando" className='w-40 h-40'/>
        <h1>Cargando...</h1>
    </div>
  )
}
