import React, { useContext } from 'react'
import Modal from 'react-modal'
import { GanttContext } from '../context/GanttContext'
import { TareaModal } from '../Modales/TareaModal';

export const Modales = () => {
    const {modalTareas} = useContext(GanttContext);
  return (
    <Modal isOpen={modalTareas} 
    className={
     "bg-slate-800/40 backdrop-blur-sm w-full h-screen grid place-items-center "
   } >
         <TareaModal/>
   </Modal>
  )
}
