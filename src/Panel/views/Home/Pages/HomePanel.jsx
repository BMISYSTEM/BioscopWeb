import React, { useContext } from "react";
/**
 * Componentes
 */
import Calendario from "../Component/Calendario";
/**
 *  Estilos
 */
import "../../../home.css";
import 'animate.css';


import { HomePanelContext, HomePanelProvider } from "../Context/HomePanelContext";
import { Notas } from "../Component/Notas";
import { Modales } from "../Component/Modales";
import { VerMensaje } from "../Component/VerMensaje";


/**
 *  Panel Permite visualizar datos de os y crear notas rapidas
 * @returns JSXElement 
 */
const HomePanel = () => {
  return (
    <HomePanelProvider>
      <div className="w-full h-full bg-white rounded-xl flex flex-col gap-3 p-2 overflow-hidden animate__animated  animate__fadeIn ">
        <section className="w-full h-auto p-2 rounded-sm flex flex-row gap-2 shadow-lg">
          <div className="  rounded-xl p-2 text-center bg-red-500 shadow-lg shadow-red-400 cursor-pointer hover:scale-105 transition w-full">
            <p className="text-4xl font-bold text-white">20</p>
            <h1 className="text-sm font-bold  text-white">
              Numero de OS pendientes
            </h1>
          </div>
          <div className="  rounded-xl p-2 text-center bg-green-500 shadow-lg shadow-green-400 cursor-pointer hover:scale-105 transition w-full">
            <p className="text-4xl font-bold text-white">5</p>
            <h1 className="text-sm font-bold  text-white">
              Numero de OS terminadas
            </h1>
          </div>
          <div className="  rounded-xl p-2 text-center bg-indigo-500 shadow-lg shadow-indigo-400 cursor-pointer hover:scale-105 transition w-full">
            <p className="text-4xl font-bold text-white">1</p>
            <h1 className="text-sm font-bold  text-white">
              Numero de Proyectos activos
            </h1>
          </div>
          <div className="  rounded-xl p-2 text-center bg-amber-500 shadow-lg shadow-amber-400 cursor-pointer hover:scale-105 transition w-full">
            <p className="text-4xl font-bold text-white">20</p>
            <h1 className="text-sm font-bold  text-white">
              Numero de Permisos
            </h1>
          </div>
          <div className="  rounded-xl p-2 text-center bg-sky-500 shadow-lg shadow-sky-400 cursor-pointer hover:scale-105 transition w-full">
            <p className="text-4xl font-bold text-white">20</p>
            <h1 className="text-sm font-bold  text-white">
              Numero de incapacidades
            </h1>
          </div>
          <div className="  rounded-xl p-2 text-center shadow-lg shadow-orange-400 bg-orange-500 cursor-pointer hover:scale-105 transition w-full">
            <p className="text-4xl font-bold text-white">20</p>
            <h1 className="text-sm font-bold  text-white"> Reuniones hoy</h1>
          </div>
        </section>
        <section className="w-full h-72   p-2 rounded-sm flex flex-row gap-2 shadow-lg ">
          {/* calendario */}
          <div className="w-auto h-full flex flex-col gap-2 rounded-xl border-2">
            <Calendario />
          </div>
          {/* Pendientes para ese dia */}
          <Notas/>
        </section>
        <VerMensaje/>
        <Modales/>
      </div>
    </HomePanelProvider>
  );
};

export default HomePanel;
