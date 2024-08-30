import React, { useContext } from "react";
/**
 * Imagenes
 */
import lupa from "../Assets/lupa.svg";
import mas from "../Assets/mas.svg";
import { OsContext } from "../Context/OsContext";
import { Tooltip } from "../../../component/Tooltip";
import { useNewOs } from "../Hooks/useNewOs";
import { Loading } from "../../../component/Loading";
import { useOs } from "../Hooks/useOs";
export const AccionesOs = () => {
  const { newOsModal, setnewOsModal } = useContext(OsContext);
  const {
    clientes,
    estados,
    usuarios,
    loadingUser,
    loadingEstado,
    loadingCliente,
  } = useOs();
  if(loadingUser|loadingEstado|loadingCliente){
    return (
      <Loading/>
    )
  }
  
  return (
    <div className="w-full md:h-20 border-b-2 flex md:flex-row flex-col items-center p-2 gap-4">
      {/* busqueda */}
      <div className="md:w-[35%] w-full h-10  rounded-xl shadow-xl relative ">
        <div className="absolute w-[10%]  flex items-center justify-start p-2">
          <img src={lupa} alt="" title="Busqueda" className="w-6 h-6   " />
        </div>
        <input
          type="text"
          className="w-full h-full p-2 px-10 border-none focus:outline-none  "
          placeholder="Busca cualquier palabra"
        />
      </div>
      <button
        className="flex flex-row gap-2 items-center hover:scale-110"
        onClick={() => setnewOsModal(!newOsModal)}
      >
        <Tooltip mensaje={"Nueva OS"} img={mas} />
      </button>
      <select
          type="text"
          className="block md:w-1/3 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            // value={cliente}
            // onChange={(e)=>setCliente(e.target.value)}
        >
            <option value={0} >Seleccione un cliente</option>
            {clientes?.data.succes.map(cliente => (
                <option value={cliente.id} key={cliente.id}>{cliente.nombre}</option>
            ))}
      </select>
      <select
          type="text"
          className="block md:w-1/3 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            // value={cliente}
            // onChange={(e)=>setCliente(e.target.value)}
        >
            <option value={0} >Seleccione un usuario</option>
            {usuarios?.data.succes.map(usuarios => (
                <option value={usuarios.id} key={usuarios.id}>{usuarios.name}</option>
            ))}
      </select>
      <select
          type="text"
          className="block md:w-1/3 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            // value={cliente}
            // onChange={(e)=>setCliente(e.target.value)}
        >
            <option value={0} >Seleccione un estado</option>
            {estados?.data.succes.map(estados => (
                <option value={estados.id} key={estados.id}>{estados.nombre}</option>
            ))}
      </select>
    </div>
  );
};
