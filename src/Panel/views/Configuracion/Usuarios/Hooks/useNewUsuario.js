import  useSWR  from 'swr'
import clienteAxios from '../../../../../Config/axios'
export const useNewUsuario = () => {
    const token = localStorage.getItem('token')

    const {data:areas,isLoading:isLoadinArea} = useSWR('/api/indexarea',()=>
    clienteAxios('/api/indexarea',{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }))

    const {data:rol,isLoading:isLoadingRol,} = useSWR('/api/indexrol',()=>
    clienteAxios('/api/indexrol',{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }))
    /**
     * Crea un nuevo usuario, pendiente implementar envio de imagenes
     * @param {*} datos 
     * @param {*} setEstatus 
     */
    const newUser = async (datos,setEstatus,mutateListUser) =>{
        try {
            const data = await clienteAxios.post('/api/newuser',datos,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            setEstatus(data)
            mutateListUser()
        } catch (error) {
            setEstatus(error)
        }
    }
  return {
    areas,
    isLoadinArea,
    rol,
    isLoadingRol,
    newUser
  }
}
