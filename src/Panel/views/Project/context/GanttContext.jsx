import React, { createContext, useState } from 'react'
/**
 * Creacion de context
 */
export const GanttContext = createContext({});

/**
 * se extrae el provider del contexto
 */
const {Provider} = GanttContext;


export const GanttProvider = ({children}) => {
    const [mes,setMes] = useState(new Date().getMonth() + 1);
    const [modalTareas,setModalTareas] = useState(false);
    const [mainVisible,setMainVisible] = useState('gantt');
    const [newProject,setNewProject] = useState(false);
  return (
    <Provider value={{
        mes,setMes,
        modalTareas,setModalTareas,
        mainVisible,setMainVisible,
        newProject,setNewProject
    }}>
        {children}
    </Provider>
  )
}
