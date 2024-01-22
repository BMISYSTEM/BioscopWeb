import React, { useContext } from "react";
import { HomePanelContext, HomePanelProvider } from "../Context/HomePanelContext";
import { Notas } from "../Component/Notas";
import { Modales } from "../Component/Modales";
import { VerMensaje } from "../Component/VerMensaje";
/**
 * Componentes
 */
import Calendario from "../Component/Calendario";
/**
 *  Estilos
 */
import "../../../home.css";
import 'animate.css';
import { Resumen } from "../Component/Resumen";
/**
 *  Panel Permite visualizar datos de os y crear notas rapidas
 * @returns JSXElement 
 */
const HomePanel = () => {
  return (
    <HomePanelProvider>
      <div className="w-full h-[99%] bg-white rounded-xl flex flex-col gap-3 p-2 overflow-auto animate__animated  animate__fadeIn ">
        <Resumen/>
        <section className="w-full md:h-72 h-auto   p-2 rounded-sm flex md:flex-row flex-col gap-2 shadow-lg ">
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
