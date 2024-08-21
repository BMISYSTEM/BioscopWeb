import React, { useContext } from 'react'
import Modal from 'react-modal'
import { GanttContext } from '../context/GanttContext'
import { TareaModal } from '../Modales/TareaModal';
import { NewProjectModal } from '../Modales/NewProjectModal';

export const Modales = () => {
    const {modalTareas,newProject} = useContext(GanttContext);
    console.log(newProject)

  return (
    <>
      <Modal isOpen={modalTareas} 
      className={
      "bg-slate-800/40 backdrop-blur-sm w-full h-screen grid place-items-center "
    } >
          <TareaModal/>
    </Modal>
      <Modal isOpen={newProject} 
      className={
      "bg-slate-800/40 backdrop-blur-sm w-full h-screen grid place-items-center "
    } >
          <NewProjectModal/>
    </Modal>
    </>
  )
}
