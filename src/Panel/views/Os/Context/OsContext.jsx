import React, { createContext, useState } from 'react'

// crear estado
export const OsContext = createContext({});

// sacar el Provider
const {Provider} = OsContext;


export const OsContextProvider = ({children}) => {
  /**
   * Creacion de una nueva os, maneja el estado de modal visible o no
   */
    const [newOsModal,setnewOsModal] = useState(false);
    /**
   * Actualizar os, maneja el estado de la modal si esta visible o no, idUpdate controla el id de os que sera actualizado
   */
    const [updateOs,setUpdateOs] = useState(false);
    const [idUpdate,setIdUpdate] = useState(0);
    /**
     * Apuntamiento de os, maneja el estado de la modal si esta visible o no y controla el id de la os que sera apuntada
     */
    const [ApunteOSModal,setApunteOSModal] = useState(false)
    const [ApunteOSModalId,setApunteOSModalId] = useState(0)
    /**
     * Asigna los daros para editar 
     */
    const [editData,setEditData] = useState(null);


    const handleClickApunteOs = (id) =>{
      setApunteOSModalId(id);
      setApunteOSModal(!ApunteOSModal);
    }
    const handleClickUpdate = (id) =>{
       setIdUpdate(id)
       setUpdateOs(!updateOs)
    }
  return (
    <Provider value={{
        newOsModal,setnewOsModal,
        updateOs,setUpdateOs,handleClickUpdate,idUpdate,
        ApunteOSModal,setApunteOSModal,handleClickApunteOs,ApunteOSModalId,setApunteOSModalId,
        editData,setEditData
    }}>
        {children}
    </Provider>
  )
}
