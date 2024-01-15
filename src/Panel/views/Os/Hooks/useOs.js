import  useSWR  from 'swr'
import clienteAxios from '../../../../Config/axios';

export const useOs = () => {
    const Bearer = "13|D8HS62kExNpOxieHnSsAIbTnv983kNT3Uoo9Kjwp6eb9268c";

    const {data:indexOS,isLoading,mutate} = useSWR('/api/indexos',()=>
    clienteAxios('/api/indexos',{
        headers:{
            Authorization:`Bearer ${Bearer}`
        }
    }).then(response => response.data.succes)
    )
        /**
     * Carga listado de clientes
     */
        const {data:clientes,isLoading:loadingCliente,mutate:mutateCliente} = useSWR('/api/indexclientes',()=>
        clienteAxios.get('/api/indexclientes',{
            headers:{
                Authorization: `Bearer ${Bearer}`
            }
        }).then(response => response.data.succes)
    )
    /**
     * Carga listado de estados
     */
    const {data:estados,isLoading:loadingEstado,mutate:mutateEstados} = useSWR('/api/indexestados',()=>
        clienteAxios.get('/api/indexestados',{
            headers:{
                Authorization: `Bearer ${Bearer}`
            }
        }).then(response => response.data.succes)
    )
    /**
     * Carga listado de usuarios
     */

    const {data:usuarios,isLoading:loadingUser,mutate:mutateUser} = useSWR('/api/indexuser',()=>
        clienteAxios.get('/api/indexuser',{
            headers:{
                Authorization: `Bearer ${Bearer}`
            }
        }).then(response => response.data.succes)
    )
  return {
    indexOS,
    isLoading,
    mutate,
    clientes,
    estados,
    usuarios,
    loadingUser,
    loadingEstado,
    loadingCliente,
  }
}
