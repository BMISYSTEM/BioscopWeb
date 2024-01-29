import React, { useContext } from 'react'
import { Gantt } from './Gantt'
import { GanttContext } from '../context/GanttContext';

export const MainProject = () => {
    const {mainVisible,setMainVisible} = useContext(GanttContext);
  return (
    <main className="w-full h-full">
        {mainVisible === 'gantt' ?
            <Gantt/> 
        :
        ''
        }
    </main>
  )
}
