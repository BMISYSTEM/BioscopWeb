import React, { useContext, useState } from "react";
import 'animate.css';
/**
 * Imagenes
 */
import cerrar from "../Assets/cerrar.svg";
import { HomePanelContext } from "../Context/HomePanelContext";
import { ToastContainer, toast } from "react-toastify";
import { useNota } from "../hooks/useNota";

export const NewNota = () => {
  const { modalNewNota, setmodalNewNota } = useContext(HomePanelContext);
  const { newNota } = useNota();
  const [estatus, setEstatus] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const [errorData, setErrorData] = useState(null);
  // datos del formulario
  const [descripcion, setDescripcion] = useState("");
  const [data, setData] = useState("");
  /**
   * Reqliza la petision HTTP post al backend para crear una nueva nota
   */
  const handleclickNota = async (e) => {
    e.preventDefault();
    toast.success("Guargando...");
    const datos = {
      text: descripcion,
      data: data,
    };
    await newNota(datos, setEstatus, setErrorText, setErrorData);
  };

  /**
   * Mensajes de respuesta del servidor
   */
  if (estatus) {
    toast.success(estatus.toString(),{position:"top-center"});
    setEstatus(null);
    /**
     * Se cerrara la ventana
     */
    setDescripcion('');
    setData('');
  }
  if (errorText) {
    toast.warning(errorText[0]);
    setErrorText(null);
  }
  if (errorData) {
    toast.warning(errorData[0]);
    setErrorData(null);
  }

  return (
    <>
      <section className="bg-white w-1/3 h-auto rounded-xl shadow-xl border-2 border-indigo-300 p-2  overflow-hidden animate__animated animate__fadeInDown">
        <div className="w-full flex justify-between">
          <p className="text-sm font-bold text-slate-400">NewModal</p>
          <button
            className="w-6 hover:scale-110 transition cursor-pointer"
            onClick={() => setmodalNewNota(!modalNewNota)}
          >
            <img src={cerrar} alt="cerrar" title="Cerrar" />
          </button>
        </div>
        <h1 className="text-xl font-mono text-slate-600 font-bold">
          Que quieres agendar?
        </h1>
        <form
          action=""
          onSubmit={handleclickNota}
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
            onChange={(e) => setDescripcion(e.target.value)}
            value={descripcion}
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
  );
};
