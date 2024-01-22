import React from "react";
import { useResumen } from "../hooks/useResumen";

export const Resumen = () => {
  const {
    isLoading,
    mutate,
    osResumen,
    notasResumen,
    notasLoading,
    notasMutate,
  } = useResumen();
  if (isLoading | notasLoading) {
    return <p>Cargando...</p>;
  }
  const osActiva = osResumen?.data?.succes[0]?.osActivas;
  const osInactiva = osResumen?.data?.succes[1]?.osInactiva;
  const tareasPendientes = notasResumen?.data?.succes[0]?.tareasPendientes;
  const tareasCompletas = notasResumen?.data?.succes[1]?.tareasCompletas;
  const reunionesPendientes = notasResumen?.data?.succes[3]?.reunionesPendientes;

  return (
    <section className="w-full h-auto p-2 rounded-sm flex md:flex-row flex-col gap-2 shadow-lg   ">
      <div className="  rounded-xl p-2 text-center bg-red-500 shadow-lg shadow-red-400 cursor-pointer hover:scale-105 transition w-full">
        <p className="text-4xl font-bold text-white">{osActiva}</p>
        <h1 className="text-sm font-bold  text-white">Os activas</h1>
      </div>
      <div className="  rounded-xl p-2 text-center bg-green-500 shadow-lg shadow-green-400 cursor-pointer hover:scale-105 transition w-full">
        <p className="text-4xl font-bold text-white">{osInactiva}</p>
        <h1 className="text-sm font-bold  text-white">Os Inactivas</h1>
      </div>
      <div className="  rounded-xl p-2 text-center bg-indigo-500 shadow-lg shadow-indigo-400 cursor-pointer hover:scale-105 transition w-full">
        <p className="text-4xl font-bold text-white">1</p>
        <h1 className="text-sm font-bold  text-white">
          Numero de Proyectos activos
        </h1>
      </div>
      <div className="  rounded-xl p-2 text-center bg-amber-500 shadow-lg shadow-amber-400 cursor-pointer hover:scale-105 transition w-full">
        <p className="text-4xl font-bold text-white">20</p>
        <h1 className="text-sm font-bold  text-white">Numero de Permisos</h1>
      </div>
      <div className="  rounded-xl p-2 text-center bg-sky-500 shadow-lg shadow-sky-400 cursor-pointer hover:scale-105 transition w-full">
        <p className="text-4xl font-bold text-white">20</p>
        <h1 className="text-sm font-bold  text-white">
          Numero de incapacidades
        </h1>
      </div>
      <div className="  rounded-xl p-2 text-center shadow-lg shadow-orange-400 bg-orange-500 cursor-pointer hover:scale-105 transition w-full">
        <p className="text-4xl font-bold text-white">{reunionesPendientes}</p>
        <h1 className="text-sm font-bold  text-white"> Reuniones Pendientes</h1>
      </div>
    </section>
  );
};
