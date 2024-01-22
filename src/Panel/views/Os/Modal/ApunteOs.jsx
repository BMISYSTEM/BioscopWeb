import React, { useContext, useEffect, useState } from "react";
import cerrar from "../Assets/cerrar.svg";
import { Tooltip } from "../../../component/Tooltip";
import { ToastContainer, toast } from "react-toastify";
import { OsContext } from "../Context/OsContext";
import { ApunteNotaOs } from "../Component/ApunteNotaOs";
import { useApuntamientos } from "../Hooks/useApuntamientos";
import { Loading } from "../../../component/Loading";
import { useOs } from "../Hooks/useOs";
import "animate.css";
export const ApunteOs = () => {
  const {
    setApunteOSModal,
    ApunteOSModal,
    ApunteOSModalId,
    editData,
    setEditData,
  } = useContext(OsContext);
  const {
    createApuntamiento,
    updateApuntamiento,
    deleteApuntamiento,
    data,
    isLoading,
  } = useApuntamientos();
  const { estados } = useOs();
  const [estatus, setEstatus] = useState(null);
  /**
   * Estados para apunte
   */
  const [nota, setNota] = useState(editData?.nota);
  const [fecha, setFecha] = useState(editData?.fecha);
  const [hora, setHora] = useState(editData?.hora);
  const [estado, setEstado] = useState(editData?.id_estado);
  useEffect(() => {
    setNota(editData?.nota);
    setFecha(editData?.fecha);
    setHora(editData?.hora);
    setEstado(editData?.id_estado);
    // toast.success('Cambio')
  }, [editData]);
  if (isLoading) {
    return <Loading />;
  }
  const apuntamientosOS = data?.data?.succes;
  // crear nuevo apunte
  const handleClickApunte = (e) => {
    e.preventDefault();
    if (!editData?.id) {
      const data = {
        id_os: ApunteOSModalId,
        id_estado: estado,
        nota: nota,
        fecha: fecha,
        hora: hora,
      };
      createApuntamiento(data, setEstatus);
      toast.success("Guardando nota...", { autoClose: 1000 });
      setNota("");
      setFecha("");
      setHora("");
      setEstado("");
      setEditData(null);
    } else {
      const data = {
        id_apuntamiento: editData.id_apunte,
        id_estado: estado,
        nota: nota,
        fecha: fecha,
        hora: hora,
      };
      updateApuntamiento(data, setEstatus);
      toast.success("Actualizando nota...", { autoClose: 1000 });
      setNota("");
      setFecha("");
      setHora("");
      setEstado("");
      setEditData(null);
    }
  };
  if (estatus?.data?.succes) {
    toast.success(estatus?.data?.succes, {
      autoClose: 600,
      position: "top-center",
    });
    setEstatus(null);
  }
  // Segenera si existe datos en el estado de editar
  return (
    <section className="md:w-1/2 w-full md:h-3/4 h-screen bg-white rounded-xl  shadow-xl boredr-2 flex flex-col gap-2 p-2 overflow-hidden animate__animated animate__fadeInDown">
      {/* cabecera, nombre de la modal y opcion de cerrar */}
      <header className="w-full flex flex-row justify-between h-10 items-center ">
        <p className="text-sm font-bold text-slate-400">ApunteOS</p>
        <button
          className="w-6 hover:scale-110 transition cursor-pointer"
          onClick={() => setApunteOSModal(!ApunteOSModal)}
        >
          <Tooltip img={cerrar} mensaje={"Cerrar modal"} key={1} />
        </button>
      </header>
      <main className="w-full h-full flex md:flex-row flex-col gap-1 md:overflow-hidden overflow-auto ">
        {/* Nueva o editar */}
        <div className="w-full h-full flex flex-col gap-2  ">
          <form
            onSubmit={handleClickApunte}
            className="w-full h-full flex flex-col justify-between gap-2 p-2"
          >
            <div className="flex flex-col">
              <label htmlFor="">Nota</label>
              <input
                type="text"
                min={10}
                max={500}
                onChange={(e) => setNota(e.target.value)}
                value={nota}
                className="h-20 border p-2 rounded-xl "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Fecha</label>
              <input
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                type="date"
                className="border p-2 rounded-xl"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Hora</label>
              <input
                type="time"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
                className="border p-2 rounded-xl"
              />
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
        
        <div className="w-full h-full flex flex-col gap-2 border-2  rounded-xl p-2 md:overflow-auto">
          <h2 className="text-sm font-bold text">Historico de Apuntamientos</h2>
          {apuntamientosOS?.map((apunte) => (
            <ApunteNotaOs props={apunte} />
          ))}
        </div>
      </main>
      <ToastContainer />
    </section>
  );
};
