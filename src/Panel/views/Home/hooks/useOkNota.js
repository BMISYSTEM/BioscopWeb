import  useSWR  from 'swr'
import clienteAxios from "../../../../Config/axios";
import { data } from 'autoprefixer';
export const useOkNota = () => {
    const Bearer = localStorage.getItem('token')
    // consultar las os disponibles de cada usuario 
    const {data:dataOs,error:errorOs,isLoading:loadingOs,mutate:mutateOs} = useSWR('/api/indexos',()=>
    clienteAxios('/api/indexos',{
        headers:{
            Authorization:`Bearer ${Bearer}`
        }
    })) 
    // consultar los estados 
    const {data:dataEstado,error:errorEstado,isLoading:loadingEstado,mutate:mutateEstado} = useSWR('/api/indexestados',()=>
    clienteAxios('/api/indexestados',{
        headers:{
            Authorization:`Bearer ${Bearer}`
        }
    })) 
    // Guardar la confiramcion de la nota 
    const confirmarNota = async (datos,setEstatus) =>
    {
        try {
            const data = await clienteAxios.post('/api/confirnota',datos,{
                headers:{
                    Authorization:`Bearer ${Bearer}`
                }
            })
            await setEstatus(data)
        } catch (error) {
            setEstatus(error)
        }
    }




  return {
    dataOs,
    loadingOs,
    dataEstado,
    loadingEstado,
    mutateOs,
    confirmarNota
  }
}
