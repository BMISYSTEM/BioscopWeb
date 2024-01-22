import React, { useContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
/**
 * Imagenes
 */
import cerrar from "../Assets/cerrar.svg";
import { useNota } from '../hooks/useNota';
import { HomePanelContext } from '../Context/HomePanelContext';

export const UpdateNota = () => {
  const {idUpdateNota,setmodalUpdateNota,modalUpdateNota} = useContext(HomePanelContext);
  const {indexNotas,updateNota,mutate} = useNota();
  const [estatus,setEstatus] = useState(null);
  const [text,setText] = useState('');
  const [data,setData] = useState('');
  /**
   * Ejecuta en el input para hacer el update de la nota
   */
  const handleclickUpdate = (e) =>{
    e.preventDefault();
    const datos = {
      'id':idUpdateNota,
      'text':text,
      'data':data
    }
    updateNota(datos,setEstatus)
    toast.success('Actualizando...')
  }
  if(estatus?.data?.succes){
    toast.success(estatus.data.succes,{position:'top-center',autoClose:700})
    setEstatus(null)
    mutate()
  }
  if(estatus?.response?.data?.errors){
    const errores = estatus.response.data.errors;
    errores?.text?.map(error => 
      toast.warning(error)
    )
    errores?.data?.map(error => 
      toast.warning(error)
    )
    setEstatus(null)
  }
  useEffect(()=>{
    const notaUpdate = indexNotas?.succes.filter(nota=> nota.id === idUpdateNota)
    setText(notaUpdate[0].text)
    setData(notaUpdate[0].data)
  },[])
  return (
    <>
    <section className="bg-white md:w-1/3 w-full  md:h-auto h-2/3 rounded-xl shadow-xl border-2 border-indigo-300 p-2 animate__animated animate__fadeInDown">
      <div className="w-full flex justify-between">
        <p className="text-sm font-bold text-slate-400">UpdateNota</p>
        <button
          className="w-6 hover:scale-110 transition cursor-pointer"
          onClick={() => setmodalUpdateNota(!modalUpdateNota)}
        >
          <img src={cerrar} alt="cerrar" title="Cerrar" />
        </button>
      </div>
      <h1 className="text-xl font-mono text-slate-600 font-bold">
        Actualiza tu nota
      </h1>
      <form
        action=""
        onSubmit={handleclickUpdate}
        className="flex flex-col  gap-2 w-full h-full mt-5"
      >
        <label
          htmlFor=""
          className="text-lg font-bold font-mono text-slate-700"
        >
          Descripcion
        </label>
        <input
          type="text"
          min={10}
          max={500}
          placeholder="Que estas pensando?"
          onChange={(e) => setText(e.target.value)}
          value={text}
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
        />
        <label
          htmlFor=""
          className="text-lg font-bold font-mono text-slate-700"
        >
          Fecha
        </label>
        <input
          type="date"
          onChange={(e) => setData(e.target.value)}
          value={data}
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <input
          type="submit"
          value={"Guardar"}
          className="p-2 text-lg font-bold bg-green-500 text-white rounded-xl w-1/2 cursor-pointer hover:scale-105 hover:bg-green-700 transition"
        />
      </form>
    </section>
    <ToastContainer />
  </>
  )
}
