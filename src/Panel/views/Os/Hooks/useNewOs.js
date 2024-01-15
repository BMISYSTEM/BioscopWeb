import { useEffect, useState } from "react";
import  useSWR  from 'swr'
import clienteAxios from "../../../../Config/axios";
import { useOs } from "./useOs";


export const useNewOs = () => {
    const Bearer = "13|D8HS62kExNpOxieHnSsAIbTnv983kNT3Uoo9Kjwp6eb9268c";
    const {mutate} = useOs();

    
    const NewOs = async(data,setEstatus) =>{
        try {
            const estatus = await clienteAxios.post('/api/newos',data,{
                headers:{
                    Authorization:`Bearer ${Bearer}`
                }
            })
            setEstatus(estatus)
            mutate()
        } catch (error) {
            setEstatus(error)
        }
        
    }
  return {

    NewOs
  }
}
