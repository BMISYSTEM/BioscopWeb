import React, { useContext, useEffect, useState } from "react";
import { useGantt } from "../Hooks/useGantt";
import 'animate.css'
import { Modales } from "./Modales";
import { GanttContext } from "../context/GanttContext";
import { Tooltip } from "../../../component/Tooltip";
export const Gantt = () => {
    /**Url del backend */
  
    /**url de la foto, se almacen en el localstorage al momento de iniciar session */
    const foto = localStorage.getItem('foto')
    const {modalTareas,setModalTareas} = useContext(GanttContext)
    const [diasDiv,setDias] = useState();
    const {tooltip,visibletool,isLoading,tareas,tareaTooltip,duraciontooltip,diaFin} = useGantt();
    const [diasSvg,setDiasSvg] = useState([]);

    
      /**
     * Esta calculando el espacio de las tareas para poder definir donde se colocaran los dias
     * @returns jsxElement
     */
      const dias = () =>{
        let i = 0;
        const elementos = [];
        while(i < diaFin){
          elementos.push( 
          <div className="w-[40px] flex justify-center">
          {i +1 }
          </div>
        )
          i++;
        }
        setDias(elementos)
      }
    useEffect(()=>{
          dias();
    },[diaFin,tareas])
  return (
    <div className=" left-0 top-0 w-full h-full overflow-hidden  ">
      {/* opciones del gantt  */}
      {/* <HeaderGantt /> */}
      <div className={"absolute hidden "} id="tool">
        <div className="w-40 h-auto bg-slate-200 flex flex-col gap-2 text-sm rounded-xl shadow-xl p-2">
          <p className="text-sm text-slate-500">
            <span className="text-lg font-bold text-slate-700">Tarea:</span>{" "}
            {tareaTooltip}
          </p>
          <p className="text-sm text-slate-500">
            <span className="text-lg font-bold text-slate-700">Duracion:</span>{" "}
            {duraciontooltip} dias
          </p>
          {/* <p>ejecutado: 20%</p>
          <p>Asignado: Bayron</p> */}
        </div>
      </div>
      <div className=" md:max-w-[1470px] h-full bg-white   flex flex-row overflow-hidden">
        <div className="md:w-[19%] w-[40%] h-full text-[10px]  flex flex-col text-[#3c423f] ">
          {/* titulos de tareas  */}
          {tareas?.map(tarea => (
            <div className="w-full h-10  px-2 overflow-hidden border border-slate-200 flex items-center ">
              <p className="text-left">{tarea.text}</p>      
            </div>
          ))}
        </div>
        {/* filas 1 */}
        <div className="md:w-full w-full  flex flex-col overflow-x-auto">
        {tareas?.map(tarea => {
              const inicioGantt = ((tarea.dia_inicio * 40) - 40 )+ 'px';
              const duracionDias = (tarea.dia_fin - tarea.dia_inicio);
              const duracionPx = duracionDias  > 0  ? (duracionDias * 40 ) + 40 + 'px' : 40 + 'px';
              return (
                <div className="md:w-full w-[1240px] h-10 bg-white border p-2 flex items-center">
                  {/* tareas */}
                  <div className={`h-[90%] ${tarea.completado ? 'bg-green-500 hover:bg-green-300' : 'bg-sky-500 hover:bg-sky-300'} rounded-xl flex items-center hover:scale-110  transition-all`} 
                  style={{
                    marginLeft:inicioGantt,
                    width:duracionPx
                    }}
                    onMouseMove={(e) => tooltip(e, tarea.id)}
                    onMouseOut={(e) => visibletool(e)}
                    onClick={()=>setModalTareas(!modalTareas)}
                    >
                    {/* foto de integrante */}
                    {/* <Tooltip img={urlBackend + foto} mensaje={'Usuario'}/> */}
                  </div>
                </div>
              )

            }
            )}
          {/* dias */}
          <div className="md:w-full w-[1280px] h-20 bg-white-700 text-slate-300   flex flex-row">
            {diasDiv}
          </div>
        </div>
      </div>   
      <Modales/>
    </div>
  );
};
