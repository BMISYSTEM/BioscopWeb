import React from 'react'
import { toast } from 'react-toastify';

export const Tableros = () => {
    // registrar el arrastre 
    const arrastrando = (e) =>{
        e.dataTransfer.setData("text/plain",e.target.id);
    }
    // permite soltar elemento
    const gestionSoltar = (e) =>{
        e.preventDefault();
    }
    // Función para soltar el elemento
    const  soltar = (e) => {
       e.preventDefault();
       /**
        * Captura el elemento que se movio
        */
       const idElementoArrastrado = e.dataTransfer.getData("text/plain");
        /**
        * Captura el id del elemento
        */
       const elementoArrastrado = document.getElementById(idElementoArrastrado);
         /**
        * Agrgo el elemento que se movio
        */
       document.getElementById(e.target.id).appendChild(elementoArrastrado);
       Toast.succes('Guardando en bad');
    }
  return (
    <section className='w-full h-full flex flex-row gap-2'>
        {/* projectos */}
        <div className='w-2/3 h-full flex flex-col gap-3 p-2' >
            <h1 className='text-black font-bold text-xl'>Tareas</h1>
            <p className='text-black border p-2 rounded-sm shadow-sm text-sm' draggable={true} onDragStart={(e)=>arrastrando(e)} id='1'>Tarea 1 </p>
            <p className='text-black border p-2 rounded-sm shadow-sm text-sm' draggable={true} onDragStart={(e)=>arrastrando(e)} id='2'>Tarea 2 </p>
            <p className='text-black border p-2 rounded-sm shadow-sm text-sm' draggable={true} onDragStart={(e)=>arrastrando(e)} id='3'>Tarea 3 </p>
            <p className='text-black border p-2 rounded-sm shadow-sm text-sm' draggable={true} onDragStart={(e)=>arrastrando(e)} id='4'>Tarea 4 </p>
            <p className='text-black border p-2 rounded-sm shadow-sm text-sm' draggable={true} onDragStart={(e)=>arrastrando(e)} id='5'>Tarea 5 </p>
            <p className='text-black border p-2 rounded-sm shadow-sm text-sm' draggable={true} onDragStart={(e)=>arrastrando(e)} id='6'>Tarea 6 </p>
            <p className='text-black border p-2 rounded-sm shadow-sm text-sm' draggable={true} onDragStart={(e)=>arrastrando(e)} id='7'>Tarea 7 </p>
        </div>
        {/* estados  */}
        <div className='w-full  p-2 h-full flex flex-col gap-2' id='pendiente' onDrop={(e)=>soltar(e)} onDragOver={(e)=>gestionSoltar(e)}>
            <div className='w-full bg-amber-600 text-white font-bold  text-center rounded-xl flex flex-row gap-2 items-center px-3'>
                <div className='w-2 h-2 rounded-full bg-amber-800'>
                </div>
                <p className='text-sm'>Pendientes</p>
            </div>
        </div>
        <div className='w-full  p-2 h-full flex flex-col gap-2' id='proceso' onDrop={(e)=>soltar(e)} onDragOver={(e)=>gestionSoltar(e)}>
            <div className='w-full bg-sky-600 text-white font-bold  text-center rounded-xl flex flex-row gap-2 items-center px-3'>
                <div className='w-2 h-2 rounded-full bg-sky-800'>
                </div>
                <p className='text-sm'>En Proceso</p>
            </div>
        </div>
        <div className='w-full  p-2 h-full flex flex-col gap-2' id='aplazado' onDrop={(e)=>soltar(e)} onDragOver={(e)=>gestionSoltar(e)}>
            <div className='w-full bg-red-600 text-white font-bold  text-center rounded-xl flex flex-row gap-2 items-center px-3'>
                <div className='w-2 h-2 rounded-full bg-red-800'>
                </div>
                <p className='text-sm'>Aplazados</p>
            </div>
        </div>
        <div className='w-full  p-2 h-full flex flex-col gap-2' id='completado' onDrop={(e)=>soltar(e)} onDragOver={(e)=>gestionSoltar(e)}>
            <div className='w-full bg-green-600 text-white font-bold  text-center rounded-xl flex flex-row gap-2 items-center px-3'>
                <div className='w-2 h-2 rounded-full bg-green-800'>
                </div>
                <p className='text-sm'>Completado</p>
            </div>
        </div>
    </section>
  )
}
