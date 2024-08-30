import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import clienteAxios from '../../../../../Config/axios';
import { color } from 'framer-motion';
import { Estados } from '../Interfaces/AllEstados';

const EstadosLayout = () => {
    const token = localStorage.getItem('token')
    // estados
    const [nombreEstado,setNombreEstado] = useState<String>('');
    const [colorselect,setColor] = useState<String>('');
    const [respuesta,setRespuesta] = useState<any>(null)
    const [estados,setEstados] = useState<Estados>()
    const [consulta,setConsultar] = useState<boolean>(false)
    const [loading,setLoading] = useState<boolean>(false)
    const createNewEstado = async(e:HTMLFormElement) =>{
        e.preventDefault()
        toast.success('Guardando estado estado...')
        const datos ={
            nombre:nombreEstado,
            color:colorselect
        }
        try {
            const {data} = await clienteAxios.post('/api/createestado',datos,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            toast.success(data?.succes);
            consultaAll()
        } catch (error) {
            console.log(error)
        }
    }
    const consultaAll = async() =>{
        setLoading(true)
        const {data} = await clienteAxios.get('/api/allestados',{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        setEstados(data)
        setLoading(false)
    }
    useEffect(()=>{
       
        consultaAll()
    },[consulta])

  return (
    <section className='w-full bg-white h-full p-2 flex flex-col gap-2 overflow-auto'>
        <h1 className='text-slate-500'>Maestro de Estados</h1>
        <div className='w-full flex flex-row gap-2'>
            <div className='w-full h-full flex fle-col border'>
                <form action="" onSubmit={createNewEstado} className='w-full flex flex-col   p-2 gap-2'>
                    <label  className="block text-sm font-medium leading-6 text-gray-900">Nombre del estado</label>
                    <input type="text" onChange={(e)=>setNombreEstado(e.target.value)} name="username" id="username"  className="block border flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 p-1 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Nombre del estado"/>
                    <label  className="block text-sm font-medium leading-6 text-gray-900">About</label>
                    <input type="color" className='w-10 h-10 ' onChange={(e)=>setColor(e.target.value)}  />
                    <div>
                        <button type='submit' className='p-2 rounded-lg text-white bg-sky-500 hover:bg-sky-800 transition-all'>
                            <p>Guardar estado</p>
                        </button>
                    </div>
                </form>
            </div>
            <div className='w-full flex flex-col border'>
                <table>
                    <thead>
                        <tr className='bg-sky-500 text-white'>
                            <td>Id</td>
                            <td>Nombre</td>
                            <td>Color</td>
                            <td>Estado</td>
                        </tr>
                    </thead>
                    <tbody>
                        {estados?.succes.map((estado,index)=>(
                            <tr key={index}>
                                <td>{estado.id}</td>
                                <td>{estado.nombre}</td>
                                <td>
                                    <div className={`w-10 h-10 `} style={{backgroundColor:estado.color}}></div>
                                </td>
                                <td>activo</td>
                            </tr>
                        ))}
                    </tbody>
                </table> 
            </div>
        </div>
        <ToastContainer/>
    </section>
  )
}

export default EstadosLayout
