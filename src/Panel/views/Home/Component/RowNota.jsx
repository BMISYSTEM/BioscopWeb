import React, { useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { HomePanelContext } from '../Context/HomePanelContext';
import { useNota } from '../hooks/useNota';
/**
 * Imagenes
 */
import borrar from "../Assets/borrar.svg";
import editar from "../Assets/editar.svg";
import completo from "../Assets/completo.svg"
import { Tooltip } from '../../../component/Tooltip';

export const RowNota = ({text,data,id,completado}) => {
  const {verMensaje,SetVerMensaje,modalUpdateNota,setmodalUpdateNota,idUpdateNota,setidUpdateNota,
    setmodalOkNota,modalOkNota,idOkNota,setidOkNota} = useContext(HomePanelContext);
  const {deleteNota} = useNota();
  const [estatus,setEstatus] = useState();
  /**
   *  seleccion : guarda la descrpcion y la fecha en variables globales para respresentar en el recuadro de VerMensaje.jsx
   * @param {'Descripcion de texto'} text 
   * @param {'Fecha para recordar'} data 
   */
  const seleccion = (text,data) => {
    SetVerMensaje({text,data})
  }/**
   * Elimina la nota
   * @param {int} id codigo de nota
   */
  const handleDeleteNota = async(id) =>{
    toast.warning('Eliminando...')
    await deleteNota(id,setEstatus)
  }
  /**
   * Muestra la modal de actualizar
   * @param {*} id codigo de nota 
   */
  const handleUpdateNota = (id) =>{
    setidUpdateNota(id);
    setmodalUpdateNota(!modalUpdateNota);
  }
  const handleClickOkNota = (id) =>
  {
    console.log(id)
    setidOkNota(id)
    setmodalOkNota(!modalOkNota)
  }
  
  if(estatus?.data?.succes){
    toast.success(estatus?.data?.succes,{position:'top-center'});
    setEstatus(null);
  }
  return (
    <>
      <button 
      onClick={()=>seleccion(text,data)}
      className={` ${ completado ? 'bg-green-300 text-green-800 font-bold' : ''} w-full h-10 border-2 rounded-xl flex flex-row gap-2 justify-between  items-center p-1 text-slate-700 hover:text-sky-700 hover:border-indigo-600  transition cursor-pointer`}>
        <div className='w-full flex justify-between'>
          <span className="text-sm font-bold">
            {text}
          </span>
          <span>
            {data}
          </span>
        </div>
      <div className="flex flex-row gap-4">
        <button className="flex flex-row gap-2 hover:scale-110" onClick={()=>handleDeleteNota(id)}>
          <Tooltip img={borrar} mensaje={'Borrar'} key={1}/>
        </button>
        <button className="flex flex-row gap-2 hover:scale-110" onClick={()=>handleUpdateNota(id)}>
          <Tooltip img={editar} mensaje={'Editar'} key={2}/>
        </button>
        {/* confirmar la nota y gerenar apuntamiento si viene 1 es por que ya se marco completado*/}
        {completado ?
          ''        
        : 
          <button className="flex flex-row gap-2 hover:scale-110" onClick={()=>handleClickOkNota(id)}>
            <Tooltip img={completo} mensaje={'Realizado'} key={3}/>
          </button>
        }
      </div>
      </button>
      <ToastContainer/>
    </>
  )
}
