import React, { useContext } from "react";
/**
 * Imagenes
 */
import mas from "../Assets/mas.svg";

import { HomePanelContext } from "../Context/HomePanelContext";
import { RowNota } from "./RowNota";
import { useNota } from "../hooks/useNota";
import { Loading } from "../../../component/Loading";
export const Notas = () => {
  const { modalNewNota, setmodalNewNota } = useContext(HomePanelContext);
  const { indexNotas, isLoading, mutate } = useNota();
  if(isLoading){
    return (
      <Loading/>
    )
  }
  const handleNewNota = () => {
    setmodalNewNota(!modalNewNota);
  };

  return (
    <section className="w-full  flex flex-col gap-2 rounded-xl border-2 scroll overflow-auto p-2 items-start justify-start">
      <div className="w-full h-20 ">
        <button
          className="p-2 hover:scale-105 shadow-lg  transition flex flex-row gap-2 rounded-xl border-2"
          onClick={() => handleNewNota()}
        >
          <img
            src={mas}
            alt="Adiccionar"
            title="Nueva nota"
            className="w-6 h-6"
          />
          <span>Nueva nota</span>
        </button>
      </div>
      {indexNotas?.succes.map(nota =>(
        <RowNota key={nota.id} text={nota.text} data={nota.data} id={nota.id}/>
      ))}
      
    </section>
  );
};
