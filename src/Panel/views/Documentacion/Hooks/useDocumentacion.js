import useSWR from "swr"
import clienteAxios from "../../../../Config/axios"

export const useDocumentacion = () => {
    const token = localStorage.getItem('token')
    const {data:modulos,isLoading:loadingModulos,mutate:mutateModulos} = useSWR('/api/allmodulos',()=>
    clienteAxios('/api/allmodulos',{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }))



  return {
    modulos,
    loadingModulos,
    mutateModulos
  }
}
