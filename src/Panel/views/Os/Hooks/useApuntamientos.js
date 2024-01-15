import { useContext } from "react";
import clienteAxios from "../../../../Config/axios";
import  useSWR  from 'swr'
import { OsContext } from "../Context/OsContext";

export const useApuntamientos = () => {
    const {ApunteOSModalId} = useContext(OsContext)
    const Bearer = "13|D8HS62kExNpOxieHnSsAIbTnv983kNT3Uoo9Kjwp6eb9268c";

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
    // // index
    // const indexApuntamientoOS = async(os_id,setEstatus) =>{
    //     try {
    //         const estatus = await clienteAxios('/api/indexapuntamientoos?id='+os_id,{
    //          headers:{
    //              Authorization:`Bearer ${Bearer}`
    //          }
    //         })  
    //         await setEstatus(estatus)   
    //      } catch (error) {
    //          setEstatus(error)
    //      }
    // }
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
