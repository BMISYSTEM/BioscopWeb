import React from 'react'

export const Tooltip = ({mensaje,img,className, posicionMesaje = 'l',visible = false}) => {
  return (
    <div class="tooltip w-6 h-6 text-sm  ">
        <img src={img} alt="imagen" className={`${className ? className : 'rounded-full w-6 h-6'}`}/>
        <div className={` ${posicionMesaje === 'l' ? ` tooltiptextL`: 'tooltiptextR' }`}>{mensaje}</div>
    </div>
  )
}
