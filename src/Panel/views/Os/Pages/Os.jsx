import React, { useContext} from "react";
import { AccionesOs } from "../Component/AccionesOs";
import { OsContext, OsContextProvider } from "../Context/OsContext";
import { OsModales } from "../Component/OsModales";
import { OsRow } from "../Component/OsRow";
import { Loading } from "../../../component/Loading";
import { useOs } from "../Hooks/useOs";
import { Tooltip } from "../../../component/Tooltip";
/**
 * Imagenes
 */
import editar from "../Assets/editar.svg";
import seguimiento from "../Assets/seguimiento.svg";


export const Os = () => {
  const {handleClickUpdate,handleClickApunteOs} = useContext(OsContext)
  const { indexOS, isLoading, mutate } = useOs();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <OsContextProvider>
      <section className="w-full md:h-full h-[90vh] bg-white rounded-xl flex flex-col gap-1 overflow-hidden ">
        {/* filtros y acciones  */}
        <AccionesOs />
        {/* lista de os */}
        <div className="w-full md:h-[80%] h-screen  flex flex-col gap-2 p-2 items-center overflow-auto  ">
          <table className="w-full">
            <thead>
              <tr className="bg-sky-800 text-white">
                <td className="text-left border p-1 ">Codigo</td>
                <td className="text-left border p-1 ">Descripcion</td>
                <td className="text-left border p-1 ">Consultor</td>
                <td className="text-left border p-1 ">Estado</td>
                <td className="text-left border p-1 ">Acciones</td>
              </tr>
            </thead>
            <tbody>
              {indexOS?.data.succes.map((os,index) => (<OsRow key={index} os={os} />)
              )}
            </tbody>
          </table>
        </div>
      </section>
      <OsModales />
    </OsContextProvider>
  );
};
export default Os;
