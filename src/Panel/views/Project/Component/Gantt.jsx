import  { useContext, useEffect, useState } from "react";
import { useGantt } from "../Hooks/useGantt";
import 'animate.css'
import { Modales } from "./Modales";
import { GanttContext } from "../context/GanttContext";
export const Gantt = () => {
    /**Url del backend */
  
    /**url de la foto, se almacen en el localstorage al momento de iniciar session */
    // const foto = localStorage.getItem('foto')
    const {modalTareas,setModalTareas} = useContext(GanttContext)
    const [diasDiv,setDias] = useState();
    const {tooltip,visibletool,isLoading,tareas,tareaTooltip,duraciontooltip,diaFin} = useGantt();
    const fechaActual = new Date();
    const diaActual = fechaActual.getDate() 
    
      /**
     * Esta calculando el espacio de las tareas para poder definir donde se colocaran los dias
     * @returns jsxElement
     */
      const dias = () =>{
        let i = 0;
        const elementos = [];
        while(i < diaFin){
          elementos.push( 
          <div className="w-[40px] flex justify-center ">
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
    <div className=" left-0 top-0 w-full h-full  ">
      {/* opciones del gantt  */}
      {/* <HeaderGantt /> */}
      <div className={"absolute hidden z-50 "} id="tool">
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
      <div className=" md:w-full h-full   flex flex-row overflow-hidden">
      {/* w-[1540px] */}
        <section className=" md:w-[95%] w-full flex flex-row overflow-auto  ">
          <div className="sticky left-0 w-[400px]  h-full text-[10px]  flex flex-col text-[#3c423f] ">
            <div  className="w-[300px] h-10 bg-sky-500  px-2 overflow-hidden border border-slate-200 flex items-center ">
               <p className="text-sm text-slate-200">Descripcion de la tarea</p>      
            </div>
            {tareas?.map((tarea,index) => (
              <div key={index} className=" w-full h-10  px-2  border border-slate-200 flex items-center ">
                <p className="text-left">{tarea.text}</p>      
              </div>
            ))}
          </div>
          <div className="    flex flex-col  ">
            <div  className="w-[1240px] h-10 bg-sky-500  px-2  border border-slate-200 text-slate-200 flex items-center ">
                {diasDiv}     
            </div>
            {tareas?.map((tarea,index) => {
              console.log(tarea.dia_inicio)
                  
                  const inicioGantt = ((tarea.dia_inicio * 40) - 50 )+ 'px';
                  const duracionDias = (tarea.dia_fin - tarea.dia_inicio);
                  const duracionPx = duracionDias  > 0  ? (duracionDias * 40 ) + 40 + 'px' : 40 + 'px';
                  return (
                    <div key={index} id="gantt" className=" h-10 bg-white border p-2 flex items-center">
                      <div className={`h-[90%] ${tarea.completado  ? 
                      'bg-green-500 hover:bg-green-300' :
                       diaActual >= tarea.dia_inicio ? 'bg-red-500' 
                       : 'bg-sky-500 hover:bg-sky-300'} rounded-xl flex items-center hover:scale-110  transition-all`} 
                      style={{
                        marginLeft:inicioGantt,
                        // marginLeft:'1000px',
                        width:duracionPx
                        }}
                        onMouseMove={(e) => tooltip(e, tarea.id)}
                        onMouseOut={(e) => visibletool(e)}
                        onClick={()=>setModalTareas(!modalTareas)}
                        >
                      </div>
                     
                    </div>
                  )

                }
                )}
                
            <div className="  h-20 bg-white-700 text-slate-300   flex flex-row">
              {diasDiv}
            </div>
          </div>
        </section>
      </div>   
      <Modales/>
    </div>
  );
};
// w-[1240px]
// h-[80%]