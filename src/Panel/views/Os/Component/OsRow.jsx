import React, { useContext } from "react";
import editar from "../Assets/editar.svg";
import cambio from "../Assets/grupo.svg";
import seguimiento from "../Assets/seguimiento.svg";
import { Tooltip } from "../../../component/Tooltip";
import { OsContext } from "../Context/OsContext";
export const OsRow = ({ os }) => {
  const {handleClickUpdate,handleClickApunteOs} = useContext(OsContext)
  const color = `${os.color}`
  return (

    <tr>
      <td className="border p-1">{os.id}</td>
      <td className="border p-1">{os.descripcion}</td>
      <td className="border p-1">{os.consultor}</td>
      <td className="border p-1">
        <div className={`border flex rounded-xl justify-center font-bold bg-${color}-200 o`} style={{
          borderColor:os.color,
          color:os.color,
          borderWidth:2
        }}>
          <p className="text-center">{os.estado}</p>
        </div>
      </td>
      <td className="border p-1">
        <div className="flex flex-row gap-3 mr-5 items-center justify-center">
          <button
            className="w-6 h-6 hover:scale-110 transition ease-linear duration-200"
            onClick={() => handleClickUpdate(os.id)}
          >
            <Tooltip mensaje={"Editar os"} img={editar} />
          </button>
          <button
            className="w-6 h-6 hover:scale-110 transition ease-linear duration-200"
            onClick={() => handleClickApunteOs(os.id)}
          >
            <Tooltip mensaje={"Apuntamientos"} img={seguimiento} />
          </button>
        </div>
      </td>
    </tr>
  );
};
