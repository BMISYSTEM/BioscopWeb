import  useSWR  from 'swr'
import clienteAxios from "../../../../Config/axios";
import { useContext } from 'react';
import { HomePanelContext } from '../Context/HomePanelContext';

export const useNota = () => {
  const {fechaNota} = useContext(HomePanelContext)
  const Bearer = "13|D8HS62kExNpOxieHnSsAIbTnv983kNT3Uoo9Kjwp6eb9268c";
  /**
   *  Crea una nueva nota
   * @param {*} data 
   * @param {*} setEstatus 
   * @param {*} setErrortext 
   * @param {*} setErrorData 
   */
  const newNota = async (
    data,
    setEstatus,
    setErrortext,
    setErrorData
  ) => {
    try {
      const estatus = await clienteAxios.post("/api/newnota", data, {
        headers: {
          Authorization: `Bearer ${Bearer}`,
        },
      });
      setEstatus(estatus.data.succes);
      await mutate();
    } catch (error) {
        setErrortext(error.response.data.errors.text);
        setErrorData(error.response.data.errors.data);
    }
  };
  /**
   * Acualiza la nota seleccionada
   * @param {*} datos contiene el id de la nota, text descripcion y data
   * @param {*} setEstatus 
   */
  const updateNota = async(datos,setEstatus) =>
  {
    try {
      const estatus = await clienteAxios.post('/api/updatenota',datos,{
        headers:{
          Authorization:`Bearer ${Bearer}`
        }
      })
      await setEstatus(estatus)
    } catch (error) {
      setEstatus(error)
    }
  }
  /**
   * Elimina una nota
   * @param {*} id 
   * @param {*} setEstatus 
   */
  const deleteNota = async(id,setEstatus) => {
    try {
      const estatus = await clienteAxios.get(`/api/deletenota?id=${id}`,{
        headers:{
          Authorization: `Bearer ${Bearer}`
        }
      }).then((response) => setEstatus(response))
      await mutate();
    } catch (error) {
      setEstatus(error)
    }
  }
  /**
   * realiza consultas al servidor con intervalo de tiempo automatico trae todas las notas del dia seleccionado
   */
  const {data:indexNotas,isLoading,mutate} = useSWR(`/api/indexnota?min=${fechaNota}`,()=>
    clienteAxios(`/api/indexnota?min=${fechaNota}`, {
        headers: {
          Authorization: `Bearer ${Bearer}`
        }
    }).then((response) => response.data)
  )
  return {
    newNota,
    indexNotas,
    isLoading,
    mutate,
    deleteNota,
    updateNota
  };
};
