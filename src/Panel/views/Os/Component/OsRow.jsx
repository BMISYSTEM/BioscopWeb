import React, { useContext } from "react";
import editar from "../Assets/editar.svg";
import cambio from "../Assets/grupo.svg";
import seguimiento from "../Assets/seguimiento.svg";
import { Tooltip } from "../../../component/Tooltip";
import { OsContext } from "../Context/OsContext";
export const OsRow = ({ os }) => {
  const {handleClickUpdate,handleClickApunteOs} = useContext(OsContext)
  return (
    <div className=" w-full overflow-hidden" >
        {/* <div class="tooltiptext">¡Hola!</div> */}
      {/* os y su descripcion */}
      <div className="w-full  h-[5rem]  bg-white  shadow-sm flex flex-row gap-2 items-center p-2 justify-between border-b-2 hover:border-indigo-600 ">
        
        <h1>
          <span className="text-xl font-bold text-slate-600 flex flex-col gap-1">
            Codigo:
          </span>
          {os.id}
        </h1>
        <h2 className="w-[30%]">
          <span className="text-xl font-bold text-slate-600 flex flex-col gap-1">
            Descripcion:
          </span>
          {os.descripcion}
        </h2>
        <h3>
          <span className="text-xl font-bold text-slate-600 flex flex-col gap-1">
            Consultor:
          </span>
          {os.consultor}
        </h3>
        <h3>
          <span className="text-xl font-bold text-slate-600 flex flex-col gap-1">
            Estado:
          </span>
          {os.estado}
        </h3>
        <div className="flex flex-row gap-3 mr-5">
          <button className="w-6 h-6 hover:scale-110 transition ease-linear duration-200"
          onClick={()=>handleClickUpdate(os.id)}
          >
            <Tooltip mensaje={'Editar os'} img={editar}/>
          </button>
          <button className="w-6 h-6 hover:scale-110 transition ease-linear duration-200"
          onClick={()=>handleClickApunteOs(os.id)}
          >
          <Tooltip mensaje={'Apuntamientos'} img={seguimiento}/>
          </button>
        </div>
      </div>
    </div>
  );
};
