import React, { useContext, useState } from 'react'
import 'animate.css';
/**
 * Imagenes
 */
import cerrar from "../Assets/cerrar.svg";
import { HomePanelContext } from '../Context/HomePanelContext';
import { useOkNota } from '../hooks/useOkNota';
import { Loading } from '../../../component/Loading';
import { toast } from 'react-toastify';
export const OkNota = () => {
    const {setmodalOkNota,modalOkNota,idOkNota} = useContext(HomePanelContext);
    /**carga la informacion de las os para asignar apunte */
    const {dataOs,loadingOs,mutateOs,confirmarNota,dataEstado,loadingEstado,} = useOkNota()
    /**Definicion de variables de los campos del form */
    const [comentario,setComentario] = useState('');
    const [fecha,setFecha] = useState('');
    const [horaI,sethoraI] = useState('');
    const [horaF,sethoraF] = useState('');
    const [osSelect,setosSelect] = useState('');
    const [estadoSelect,setestadoSelect] = useState('');
    /** Stado de las repuestas http */
    const [estatus,setEstatus]= useState(null);
    const [erroresHttp,seterroresHttp] = useState(null)
    /**Si eta algun proceso cargando mostrara un loading de espera */
    if (loadingOs | loadingEstado){
      return (
        <Loading/>
      )
    }
    /**Asignacion de la respuesta de las os disponibles */
    const os = dataOs?.data?.succes
    const estados = dataEstado?.data?.succes
    /**Envio de informacion para confirmarnota */
    const handleClicConfirmaNota = (e) =>
    {
      e.preventDefault();
      const data ={
        comentario:comentario,
        data:fecha,
        horai:horaI,
        horaf:horaF,
        os:osSelect,
        id_nota:idOkNota,
        id_estado:estadoSelect
      }
      confirmarNota(data,setEstatus)
    }
    /**estar pendiente de el estado de la variable status paraleer las respuestas http */
    if(estatus?.data?.succes)
    {
      toast.success(estatus?.data?.succes)
      setmodalOkNota(false)
      setEstatus(null)
    }
    if(estatus?.response?.data?.errors)
    {
      seterroresHttp(Object.values(estatus?.response?.data?.errors));
      setEstatus(null)
    }
    
  return (
    <section className='w-1/3 h-auto bg-white rounded-xl p-2 flex flex-col animate__animated animate__fadeInDown'>
        <div className="w-full flex justify-between">
          <p className="text-sm font-bold text-slate-400">OkNota</p>
          <button
            className="w-6 hover:scale-110 transition cursor-pointer"
            onClick={() => setmodalOkNota(!modalOkNota)}
          >
            <img src={cerrar} alt="cerrar" title="Cerrar" />
          </button>
        </div>
        {/* formulario */}
        <main className='w-full h-full flex flex-col gap-2'>
          <h1 className='text-lg font-bold text-slate-700'>Confirma esta tarea.</h1>
          {/* Errores */}
          <div>
            {erroresHttp ? 
              erroresHttp.map(error=>(
                <h2 className='text-sm p-0 m-0 flex  text-red-500 font-bold '>{error}</h2>
              ))
            :
              ''
            }
          </div>
          <form action="" onSubmit={handleClicConfirmaNota} className='w-full h-full flex flex-col gap-2'>
            <label htmlFor="">Comentario</label>
            <input type="text" 
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            onChange={(e)=>setComentario(e.target.value)}
            value={comentario}
            />
            <label htmlFor="">Fecha de ejecucion</label>
            <input type="date" 
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            onChange={(e)=>setFecha(e.target.value)}
            value={fecha}
            />
            <label htmlFor="">Hora Inicio</label>
            <input type="time" 
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            onChange={(e)=>sethoraI(e.target.value)}
            value={horaI}
            />
          <label htmlFor="">Hora Fin</label>
            <input type="time" 
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            onChange={(e)=>sethoraF(e.target.value)}
            value={horaF}
            />
            <label htmlFor="">Os</label>
            <select name="" id=""
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            onChange={(e)=>setosSelect(e.target.value)}
            value={osSelect}
            >
              <option value="" selected>Seleccione una os </option>
              {os.map(os=>(
                <option value={os.id} key={os.id}>{` Descripcion: ${os.descripcion} Codigo: ${os.id}`}</option>
              ))}
            </select>
            <label htmlFor="">Estado</label>
            <select name="" id=""
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            onChange={(e)=>setestadoSelect(e.target.value)}
            value={estadoSelect}
            >
              <option value="" selected>Seleccione un estado </option>
              {estados.map(estado=>(
                <option value={estado.id} key={estado.id}>{` Descripcion: ${estado.nombre} Codigo: ${estado.id}`}</option>
              ))}
            </select>
            <input type="submit" className='p-2 text-lg font-bold text-white  bg-green-500 hover:bg-green-700 cursor-pointer hover:scale-105 w-1/2 rounded-xl transition-all' />
          </form>
        </main>
    </section>
  )
}
