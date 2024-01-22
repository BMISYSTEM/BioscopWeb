import React, { useEffect, useState } from "react";
import { AccionesOs } from "../Component/AccionesOs";
import { NewOs } from "../Modal/NewOs";
import Modal from "react-modal";
/**
 * Imagenes
 */
import lupa from "../Assets/lupa.svg";
import mas from "../Assets/mas.svg";

import { OsContextProvider } from "../Context/OsContext";
import { OsModales } from "../Component/OsModales";
import { OsRow } from "../Component/OsRow";
import clienteAxios from "../../../../Config/axios";
import { Loading } from "../../../component/Loading";
import { useOs } from "../Hooks/useOs";

export const Os = () => {
  const { indexOS, isLoading, mutate } = useOs();
    if(isLoading){
        return (
            <Loading/>
        )
    }
  return (
    <OsContextProvider>
      <section className="w-full md:h-full h-[90vh] bg-white rounded-xl flex flex-col gap-1 overflow-hidden ">
        {/* filtros y acciones  */}
        <AccionesOs />
        {/* lista de os */}
        <div className="w-full md:h-[80%] h-screen  flex flex-col gap-2 p-2 items-center overflow-auto  ">
            {indexOS?.map((os) => (
            <OsRow key={os.id} os={os} />
            ))}
        </div>
      </section>
      <OsModales />
    </OsContextProvider>
  );
};
export default Os;
