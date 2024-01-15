import React from 'react'

export const Tooltip = ({mensaje,img}) => {
  return (
    <div class="tooltip w-6 h-6 text-sm">
        <img src={img} alt="imagen" />
        <div class="tooltiptext">{mensaje}</div>
    </div>
  )
}
