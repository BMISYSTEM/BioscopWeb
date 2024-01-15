import React from "react";
import { Tooltip } from "../../../component/Tooltip";

import editar from '../Assets/editar.svg'
import eliminar from '../Assets/eliminar.svg'
export const ApunteNotaOs = ({props}) => {
  const {nota,nombre_estado,nombre_usuario,fecha,hora} = props;
  return (
    <section className="w-full h-auto  flex flex-col gap">
      {/* foto de usuario */}
      <div className="w-full flex flex-row gap-2 items-center justify-between p-2">
        <div className="w-full flex flex-row gap-2 items-center">
            <div className="w-10 h-10 rounded-full border-2"></div>
            <p>{nombre_usuario}</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
            <button>
                <Tooltip img={editar} mensaje={'Editar informacion'}/>
            </button>
            <button>
                <Tooltip img={eliminar} mensaje={'Elminar OS'}/>
            </button>
        </div>
      </div>
      {/* fecha hora y estado */}
      <div className="w-full flex flex-row justify-between p-2">
        <p className="text-sm text-slate-400">Fecha: {fecha}</p>
        <p className="text-sm text-slate-400">Hora: {hora}</p>
        <p className="text-sm text-slate-400">Estado: {nombre_estado}</p>
      </div>
      <div className="flex flex-row items-center">
        <p className="w-full border p-1 border-[#5faab1] bg-[#ddeff0] rounded-xl ">
          {nota}
        </p>
      </div>
    </section>
  );
};
