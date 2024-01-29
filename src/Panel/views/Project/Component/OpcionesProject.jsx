import React, { useContext } from 'react'
import { Tooltip } from "../../../component/Tooltip";

// imagenes
import project from '../Assets/project.svg'
import gantt from '../Assets/gantt.png'
import cuadricula from '../Assets/cuadricula.png'
import { GanttContext } from '../context/GanttContext';

export const OpcionesProject = () => {
    const {mainVisible,setMainVisible} = useContext(GanttContext);
  return (
    <div className="w-full h-20  flex flex-row gap-3 items-center p-2">
        {/* botones */}
        <button 
        className="p-2 text-sm font-bold text-white bg-sky-400 rounded-sm shadow-xl h-10 hover:scale-105 hover:bg-sky-800 transition-all flex items-center justify-center  gap-2"
        onClick={()=>setMainVisible('project')}
        >
            <Tooltip img={project} mensaje={'Proyectos'}/>
            Project
        </button>
        <button className="p-2 text-sm font-bold text-white bg-sky-400 rounded-sm shadow-xl h-10 hover:scale-105 hover:bg-sky-800 transition-all flex items-center justify-center gap-2"
        onClick={()=>setMainVisible('tablero')}
        >
            <Tooltip img={cuadricula} mensaje={'Tablas de asignacion'}/>
            tableros
        </button>
        <button className="p-2 text-sm font-bold text-white bg-sky-400 rounded-sm shadow-xl h-10 hover:scale-105 hover:bg-sky-800 transition-all flex items-center justify-center gap-2"
        onClick={()=>setMainVisible('gantt')}
        >
            <Tooltip img={gantt} mensaje={'Gantt de tareas'}/>
            Gantt
        </button>
    </div>
  )
}
