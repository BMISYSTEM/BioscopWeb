import React from 'react'
import  useSWR  from 'swr'
import clienteAxios from '../../../../Config/axios'

export const useResumen = () => {
    const Bearer = localStorage.getItem('token')
    const {data:osResumen,isLoading,mutate} = useSWR('/api/resumenos',()=>
        clienteAxios('/api/resumenos',{
            headers:{
                Authorization:`Bearer ${Bearer}`
            }
        })
    )
    const {data:notasResumen,isLoading:notasLoading,mutate:notasMutate} = useSWR('/api/notasresumen',()=>
        clienteAxios('/api/notasresumen',{
            headers:{
                Authorization:`Bearer ${Bearer}`
            }
        })
    )
  return {
    osResumen,
    isLoading,
    mutate,
    notasResumen,
    notasLoading,
    notasMutate
  }
}
