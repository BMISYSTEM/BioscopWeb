import { useContext } from "react";
import clienteAxios from "../../../../Config/axios";
import  useSWR  from 'swr'
import { OsContext } from "../Context/OsContext";

export const useApuntamientos = () => {
    const {ApunteOSModalId} = useContext(OsContext)
    const Bearer = localStorage.getItem('token')

    // create 
    const createApuntamiento = async(data,setEstatus) => {
        try {
           const estatus = await clienteAxios.post('/api/newapuntamiento',data,{
            headers:{
                Authorization:`Bearer ${Bearer}`
            }
           })  
           await setEstatus(estatus) 
           await mutate()  
        } catch (error) {
            setEstatus(error)
        }
    }

    //  update 
    const updateApuntamiento = async(data,setEstatus) => {
        try {
           const estatus = await clienteAxios.post('/api/updateapuntamientoos',data,{
            headers:{
                Authorization:`Bearer ${Bearer}`
            }
           })  
           await setEstatus(estatus) 
           await mutate()  
        } catch (error) {
            setEstatus(error)
        }
    }
    // delete 
    const deleteApuntamiento = async(id,setEstatus) => {
        try {
           const estatus = await clienteAxios('/api/deleteapuntamientoos?id='+id,{
            headers:{
                Authorization:`Bearer ${Bearer}`
            }
           })  
           await setEstatus(estatus) 
           await mutate()  
        } catch (error) {
            setEstatus(error)
        }
    }
    /**
     * Index consulta las notas de la os seleccionada
     */
    const {data,isLoading,error,mutate} = useSWR('/api/indexapuntamientoos?id='+ApunteOSModalId,()=>
        clienteAxios.get('/api/indexapuntamientoos?id='+ApunteOSModalId,{
            headers:{
                Authorization:`Bearer ${Bearer}`
            }
        })
    )
  return {
    data,
    isLoading,
    createApuntamiento,
    updateApuntamiento,
    deleteApuntamiento,
  }
}
