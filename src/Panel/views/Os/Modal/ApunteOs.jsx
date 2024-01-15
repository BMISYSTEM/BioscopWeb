import React, { useContext, useEffect, useState } from "react";
import cerrar from "../Assets/cerrar.svg";
import { Tooltip } from "../../../component/Tooltip";
import { useUpdateOs } from "../Hooks/useUpdateOs";
import { OsContext } from "../Context/OsContext";
import { ApunteNotaOs } from "../Component/ApunteNotaOs";
import { useApuntamientos } from "../Hooks/useApuntamientos";
import { Loading } from "../../../component/Loading";
import { useOs } from "../Hooks/useOs";
import 'animate.css'
export const ApunteOs = () => {
  const { setApunteOSModal, ApunteOSModal,ApunteOSModalId } = useContext(OsContext);
  const { createApuntamiento,
          updateApuntamiento,
          deleteApuntamiento,
          data,
          isLoading,} = useApuntamientos();
  const {estados} = useOs()
  const [estatus,setEstatus] = useState(null)
  const [apuntamientos,SetApuntamientos] = useState(null)
  const [nota,setNota] = useState('');
  const [fecha,setFecha] =useState('');
  const [hora,setHora] = useState('');
  const [estado,setEstado] = useState('')

  if(isLoading){
    return (
      <Loading/>
    )
  }
  const apuntamientosOS = data?.data?.succes;
  // crear nuevo apunte 
  const handleClickApunte = (e) =>{
    e.preventDefault();

  }
  return (
    <section className="w-1/2 h-3/4 bg-white rounded-xl shadow-xl boredr-2 flex flex-col gap-2 p-2 overflow-hidden animate__animated animate__fadeInDown">
      {/* cabecera, nombre de la modal y opcion de cerrar */}
      <header className="w-full flex flex-row justify-between h-10 items-center">
        <p className="text-sm font-bold text-slate-400">ApunteOS</p>
        <button
          className="w-6 hover:scale-110 transition cursor-pointer"
          onClick={() => setApunteOSModal(!ApunteOSModal)}
        >
          <Tooltip img={cerrar} mensaje={"Cerrar modal"} key={1} />
        </button>
      </header>
      <main className="w-full h-full flex flex-row gap-1 overflow-hidden">
        {/* Nueva o editar */}
        <div className="w-full h-full flex flex-col gap-2 ">
          <form action="" className="w-full h-full flex flex-col justify-between gap-2 p-2">
            <div className="flex flex-col">
              <label htmlFor="">Nota</label>
              <textarea
                cols="30"
                rows="3"
                className="border p-2 rounded-xl"
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Fecha</label>
              <input type="date" className="border p-2 rounded-xl" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Hora</label>
              <input type="time" className="border p-2 rounded-xl"/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Estado</label>
              <select
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              >
                <option value="">Seleccione un Estado</option>
                {estados?.map((estado) => (
                  <option value={estado.id} key={estado.id}>
                    {estado.nombre}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="submit"
              value={"Guardar"}
              className="p-2 mt-5 text-lg font-bold bg-green-500 text-white rounded-xl w-1/2 cursor-pointer hover:scale-105 hover:bg-green-700 transition"
            />
          </form>
        </div>
        {/* Histrorico */}
        <div className="w-full h-full flex flex-col gap-2 border-2 rounded-xl p-2 overflow-auto">
          {apuntamientosOS?.map(apunte=>(
            <ApunteNotaOs props={apunte} />
          ))}
        </div>
      </main>
    </section>
  );
};
