import React, { useContext } from "react";
import { HomePanelContext } from "../Context/HomePanelContext";

export const VerMensaje = () => {
  const { verMensaje, SetVerMensaje } = useContext(HomePanelContext);
  return (
    <section className="w-full h-96   p-2 rounded-sm flex flex-row gap-2 shadow-lg">
      <div className="w-full h-96 flex flex-col gap-2 rounded-xl border-2 p-2">
        <h1 className="text-xl font-bold text-slate-700 font-mono">Visualizador de pendientes.</h1>
        <h2 className="text-xl font-bold text-slate-700">
          {verMensaje.data ? verMensaje.data : "Seleccione una nota"}
        </h2>
        <p>{verMensaje.text ? verMensaje.text : ""}</p>
      </div>
    </section>
  );
};
