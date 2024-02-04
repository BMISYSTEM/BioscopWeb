import React, { useContext } from 'react'
import { Gantt } from './Gantt'
import { GanttContext } from '../context/GanttContext';
import { Proyectos } from './Proyectos';
import { Tableros } from './Tableros';

export const MainProject = () => {
    const {mainVisible,setMainVisible} = useContext(GanttContext);
  return (
    <main className="w-full h-full">
        {mainVisible === 'gantt' ?
            <Gantt/> 
        :
        ''
        }
        {mainVisible === 'project' ?
            <Proyectos/> 
        :
        ''
        }
        {mainVisible === 'tablero' ?
            <Tableros/> 
        :
        ''
        }
    </main>
  )
}
