
import  useSWR  from 'swr'
import clienteAxios from '../../../../Config/axios';
import { useContext } from 'react';
import { GanttContext } from '../context/GanttContext';
export const useNotasProject = () => {
  const {mes} = useContext(GanttContext)
    const Bearer = localStorage.getItem('token')
  /**
   * realiza consultas al servidor con intervalo de tiempo automatico trae todas las notas del dia seleccionado
   */
  const {data:indexNotas,isLoading,mutate} = useSWR(`/api/indexnotagantt?mes=${mes}`,()=>
    clienteAxios(`/api/indexnotagantt?mes=${mes}`, {
        headers: {
          Authorization: `Bearer ${Bearer}`
        }
    }).then((response) => response.data)
  )


  return {
    indexNotas,
    isLoading,
    mutate
  }
}
