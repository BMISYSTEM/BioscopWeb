import React, { createContext, ReactElement, useState,Dispatch } from "react";

/**
 * Se crea el contexto que almacenara el estado de los valores que se involucran en la pantalla Home
 */
export const HomePanelContext = createContext({});
/**
 * Se extrae del context el Provider que se encarga de enviar los datos a la app
 */
const { Provider } = HomePanelContext;
export const HomePanelProvider = ({children}) => {
  /**
   * Estado visible de modal nueva nota
   */
  const [modalNewNota,setmodalNewNota] = useState(false);
  /**
   * Estado visible de modal Actualiza una nota
   */
  const [modalUpdateNota,setmodalUpdateNota] = useState(false);
  /**
   * Codigo de la nota a actualizar
   */
  const [idUpdateNota,setidUpdateNota] = useState(null)
  /**
   * Mensaje que se visualiza en el panel
   */
  const [verMensaje,SetVerMensaje] = useState({});
  /**
   * Controla la fecha que se consulta al server para visualizar las notas del dia
   */
  const [fechaNota,setFechaNota] = useState();
  return (
    <Provider value={{
        modalNewNota,setmodalNewNota,
        verMensaje,SetVerMensaje,
        fechaNota,setFechaNota,
        modalUpdateNota,setmodalUpdateNota,
        idUpdateNota,setidUpdateNota
    }}>
        {children}
    </Provider>
  )
}
