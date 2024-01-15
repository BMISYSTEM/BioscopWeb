import React, { useContext, useEffect, useState } from "react";
import { useNewOs } from "../Hooks/useNewOs";
import { Loading } from "../../../component/Loading";
import { ToastContainer, toast } from "react-toastify";
import 'animate.css'
/**
 * Imagenes
 */
import cerrar from "../Assets/cerrar.svg";
import { OsContext } from "../Context/OsContext";
import clienteAxios from "../../../../Config/axios";
import { useOs } from "../Hooks/useOs";
import { useUpdateOs } from "../Hooks/useUpdateOs";
export const UpdateOs = () => {
  const Bearer = "13|D8HS62kExNpOxieHnSsAIbTnv983kNT3Uoo9Kjwp6eb9268c";
    const {updateOs,setUpdateOs,idUpdate} = useContext(OsContext)
    const { clientes,
            estados,
            usuarios,
            loadingUser,
            loadingEstado,
            loadingCliente,
            } = useNewOs();
    const {UpdateOs} = useUpdateOs(); 
    const {indexOS,isLoading} = useOs();
    const [estatus,setEstatus] = useState(null)
    /**
     * Inputs
     */
 
    if(loadingUser|loadingEstado|loadingCliente | isLoading){
        return (
            <Loading/>
        )
    }   
    const [osUpdateselect,setOsUpdate]= useState(indexOS.filter(cliente=> cliente.id === idUpdate));
    const [descripcion,setdescripcion] = useState(osUpdateselect[0].descripcion)
    const [cliente,setCliente] = useState(0);
    const [estado,setEstado] = useState(0);
    const [user,setUser] = useState(0);

    const handleClickUpdate = async(e) =>{
        e.preventDefault();
        const data = {
            'descripcion':descripcion,
            'user':user,
            'estado':estado,
            'id':idUpdate
        }
        UpdateOs(data,setEstatus);
        toast.success('Guardando Os',{autoClose:600})
    }
    /** 
     * Mensajes de error
    */
   if(estatus?.data?.succes){
    toast.success(estatus?.data?.succes,{position:"top-center",autoClose:600})
    setEstatus(null)
   }
    if(estatus?.response?.data?.errors){
        if(estatus.response.data.errors?.descipcion){
            const error = estatus.response.data.errors.descipcion;
            error.map(error=>(toast.warning(error)))
        }

        if(estatus.response.data.errors?.user){
            const error = estatus.response.data.errors.user;
            error.map(error=>(toast.warning(error)))
        }
        if(estatus.response.data.errors?.estado){
            const error = estatus.response.data.errors.estado;
            error.map(error=>(toast.warning(error)))
        }
        setEstatus(null)
    }
    useEffect(()=>{
      // setOsUpdate(indexOS.filter(cliente=> cliente.id === idUpdate))
      setdescripcion(osUpdateselect[0].descripcion)
      setCliente(osUpdateselect[0].id_cliente)
      setEstado(osUpdateselect[0].estado_id);
      setUser(osUpdateselect[0].user_id)
    },[])
  return (
    <section className="w-1/4 h-2/3 bg-white rounded-xl shadow-xl border-2 p-2 flex flex-col  overflow-hidden animate__animated animate__fadeInDown">
      {/* titulo y opcion de cerrar */}
      <div className="w-full flex justify-between">
        <p className="text-sm font-bold text-slate-400">UpdateOs</p>
        <button
          className="w-6 hover:scale-110 transition cursor-pointer"
          onClick={() => setUpdateOs(!updateOs)}
        >
          <img src={cerrar} alt="cerrar" title="Cerrar" />
        </button>
      </div>
      <h1 className="text-xl font-mono text-slate-600 font-bold">Actualiza la Os.</h1>
      <form action="" className="w-full h-full flex flex-col gap-2 mt-5" onSubmit={handleClickUpdate}>
        <label
          htmlFor=""
          className="text-lg font-bold font-mono text-slate-700"
        >
          Descripcion
        </label>
        <input
          type="text"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
          value={descripcion}
          onChange={(e)=>setdescripcion(e.target.value)}
        />
        <label
          htmlFor=""
          className="text-lg font-bold font-mono text-slate-700"
        >
          Cliente
        </label>
        <select
          type="text"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            value={cliente}
            onChange={(e)=>setCliente(e.target.value)}
        >
              <option value={osUpdateselect[0]?.id_cliente}  selected key={osUpdateselect[0]?.id_cliente}>{osUpdateselect[0]?.empresa}</option>
            {clientes?.map((cliente) => 
                  <option value={cliente.id}   key={cliente.id}>{cliente.nombre}</option>
            )}
        </select>
        <label
          htmlFor=""
          className="text-lg font-bold font-mono text-slate-700"
        >
          Estado
        </label>
        <select
          type="text"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
          value={estado}
          onChange={(e)=>setEstado(e.target.value)}
        >
            <option value={osUpdateselect[0]?.id_estado}  selected key={osUpdateselect[0]?.id_estado}>{osUpdateselect[0]?.estado}</option>
            {estados?.map(estado => (
                <option value={estado.id} key={estado.id}>{estado.nombre}</option>
            ))}
        </select>
        <label
          htmlFor=""
          className="text-lg font-bold font-mono text-slate-700"
        >
          Usuario
        </label>
        <select
          type="text"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
          value={user}
          onChange={(e)=>setUser(e.target.value)}
        >
            <option value={osUpdateselect[0]?.use_id}  selected key={osUpdateselect[0]?.use_id}>{osUpdateselect[0]?.consultor}</option>
            {usuarios?.map(usuario => (
                <option value={usuario.id} key={usuario.id}>{usuario.name}</option>
            ))}
        </select>
        <input
           type="submit"
           value={"Guardar"}
           className="p-2 mt-5 text-lg font-bold bg-green-500 text-white rounded-xl w-1/2 cursor-pointer hover:scale-105 hover:bg-green-700 transition"
         />
      </form>
      <ToastContainer/>
    </section>
  );
};
