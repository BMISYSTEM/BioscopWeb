import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import Modal from 'react-modal'
import clienteAxios from '../../../../Config/axios';
import 'animate.css'
export const Tableros = () => {
    const token = localStorage.getItem('token')
    const [estadosAll,setEstados] = useState('')
    const [osAll,setOs] = useState()
    const [modalNewApunte,setmodalNewApunte] = useState(false)
    const [osSelect,setosSelect] = useState();
    const [comentario,setcomentario] = useState();
    const [estadoSelect,seEstadoSelect] = useState();
    const [loading,setLoading] = useState(false)
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
       setmodalNewApunte(true)
       setosSelect(e.dataTransfer.getData("text/plain"))
       seEstadoSelect(e.target.id)
    //    /**
    //     * Captura el elemento que se movio
    //     */
    //    const idElementoArrastrado = e.dataTransfer.getData("text/plain");
    //     /**
    //     * Captura el id del elemento
    //     */
    //    const elementoArrastrado = document.getElementById(idElementoArrastrado);
    //      /**
    //     * Agrgo el elemento que se movio
    //     */
    //    document.getElementById(e.target.id).appendChild(elementoArrastrado);

    }
    /**
     * Para hacer un cambio de estados e hace por medio del apuntamiento, se puede cambiar directamente pero se perderia el seguimiento
     */
    const updateEstadoNewApuntamiento = async(e) =>{
        e.preventDefault()
        setLoading(true)
        const fecha = new Date()
        const dia = fecha.getDay()
        const mes = fecha.getMonth() + 1
        const year = fecha.getFullYear()
        const horas = fecha.getHours().toString().padStart(2, '0');
        const minutos = fecha.getMinutes().toString().padStart(2, '0');
        const segundos = fecha.getSeconds().toString().padStart(2, '0');
        const datos = {
            id_os : osSelect ,
            id_estado:estadoSelect ,
            nota:comentario,
            fecha: `${year}-${mes}-${dia}`,
            hora: `${horas}:${minutos}:${segundos}`
        }

        await toast.promise(
            clienteAxios.post('/api/newapuntamiento',datos,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            ,
            {
                pending: 'Actualizando el estado ',
                success: 'El apunte se guardo de forma correcta ',
                error: 'Se genero un error comuniquese con soporte'
            }
        )
        await consultarOs()
        setLoading(false)
        setcomentario('')
        setmodalNewApunte(false)
        
    }
    const consultarEstados = async() =>{
        try {
            const {data} = await clienteAxios.get('/api/indexestados',{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            setEstados(data)
        } catch (error) {
            console.log(error)
        }
    }

    const consultarOs = async() =>{
        try {
            const {data} = await clienteAxios.get('/api/indexos',{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            setOs(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        consultarEstados()
        consultarOs()
    },[])
    const estados = estadosAll?.succes
    const os = osAll?.succes
    const descripcionSeleccion = os?.filter((os)=>os.id === Number(osSelect))
    const estadoAcual = estados?.filter((estado)=>estado.id === Number(descripcionSeleccion?.[0]?.estado_id))
    const estadoNuevo = estados?.filter((estado)=>estado.id === Number(estadoSelect))
  return (
    <section className='w-full h-full flex flex-wrap gap-2  overflow-auto justify-center'>
        {/* projectos */}
        {/* <div className='w-2/3 h-full flex flex-col gap-3 p-2' >
            <h1 className='text-black font-bold text-xl'>Tareas</h1>
            <p className='text-black border p-2 rounded-sm shadow-sm text-sm' draggable={true} onDragStart={(e)=>arrastrando(e)} id='1'>Tarea 1 </p>
            <p className='text-black border p-2 rounded-sm shadow-sm text-sm' draggable={true} onDragStart={(e)=>arrastrando(e)} id='2'>Tarea 2 </p>
            <p className='text-black border p-2 rounded-sm shadow-sm text-sm' draggable={true} onDragStart={(e)=>arrastrando(e)} id='3'>Tarea 3 </p>
            <p className='text-black border p-2 rounded-sm shadow-sm text-sm' draggable={true} onDragStart={(e)=>arrastrando(e)} id='4'>Tarea 4 </p>
            <p className='text-black border p-2 rounded-sm shadow-sm text-sm' draggable={true} onDragStart={(e)=>arrastrando(e)} id='5'>Tarea 5 </p>
            <p className='text-black border p-2 rounded-sm shadow-sm text-sm' draggable={true} onDragStart={(e)=>arrastrando(e)} id='6'>Tarea 6 </p>
            <p className='text-black border p-2 rounded-sm shadow-sm text-sm' draggable={true} onDragStart={(e)=>arrastrando(e)} id='7'>Tarea 7 </p>
        </div> */}
        {/* estados  */}
        {estados?.map((estado,index)=>(

            <div key={index} className='w-64 bg-white  p-2 h-auto flex flex-col gap-2 border' id={estado.id} onDrop={(e)=>soltar(e)} onDragOver={(e)=>gestionSoltar(e)}>
                <div className='w-full  text-white font-bold  text-center rounded-sm flex flex-row gap-2 items-center px-3 p-2' style={{
                    backgroundColor:estado.color,
                }}>
                    <div className='w-2 h-2 rounded-full bg-white'>
                    </div>
                    <p className='text-sm'>{estado.nombre}</p>
                </div>
                {os?.map((os,index)=>{
                    if(estado.id === os.estado_id){
                        return(
                            <div key={index} className=''>
                                <p className='text-black border p-2 rounded-sm shadow-sm text-sm' draggable={true} onDragStart={(e)=>arrastrando(e)} id={os.id}>
                                    {os.descripcion}
                                </p>
                            </div>
                        )
                    }
                    
                }                       
                )}
            </div>
        )
        )}
        <Modal isOpen={modalNewApunte} className={'w-full h-full backdrop-blur-sm flex justify-center items-center p-5'}>
            <section className='animate__animated  animate__fadeInDown w-96 h-auto bg-white border border-indigo-500 rounded-sm shadow-lg p-5 flex flex-col gap-5'>
                <div className='w-full flex flex-row items-end justify-end'>
                    <button className='text-xs bg-red-500 text-white font-bold p-2 rounded-full w-6 h-6 text-center flex items-center hover:scale-105'
                    onClick={()=>setmodalNewApunte(false)}>X</button>
                </div>
                <h1 className='text-xl font-bold text-slate-500'>Actualizar estado </h1>
                <div className='flex flex-col gap-2'>
                    <p>OS: {osSelect}</p>
                    <p>Descripcion: {descripcionSeleccion?.[0]?.descripcion} </p>
                    <p>Estado Actual: {estadoAcual?.[0]?.nombre}</p>
                    <p>Estado Nuevo: {estadoNuevo?.[0]?.nombre}</p>
                </div>
                <form action="" onSubmit={updateEstadoNewApuntamiento} className='w-full flex flex-col justify-center '>
                    <label htmlFor="">Comentario</label>
                    <input type="text" 
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                    onChange={(e)=>setcomentario(e.target.value)}
                    value={comentario}
                    />
                        <input disabled={loading} type="submit" className='p-2 text-lg font-bold text-white mt-10 bg-green-500 hover:bg-green-700 cursor-pointer hover:scale-105 w-1/2 rounded-xl transition-all' />
                </form>
            </section>
        </Modal>
        <ToastContainer/>
    </section>
  )
}
