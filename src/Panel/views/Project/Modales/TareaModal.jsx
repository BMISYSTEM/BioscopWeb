import React, { useContext } from 'react'
/**
 * Imagenes
 */
import cerrar from "../Assets/cerrar.svg";
import { GanttContext } from '../context/GanttContext';

export const TareaModal = () => {
    const {modalTareas,setModalTareas} = useContext(GanttContext)
  return (
    <section className='w-1/2 h-2/3 bg-white rounded-xl flex flex-col gap-2 p-2'>
        {/* cerrar y titulo  */}
        <div className="w-full flex justify-between">
          <p className="text-sm font-bold text-slate-400">NewNota</p>
          <button
            className="w-6 hover:scale-110 transition cursor-pointer"
            onClick={() => setModalTareas(!modalTareas)}
          >
            <img src={cerrar} alt="cerrar" title="Cerrar" />
          </button>
        </div>
    </section>
  )
}
