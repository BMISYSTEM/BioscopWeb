import React from 'react'
import  useSWR  from 'swr'
import clienteAxios from '../../../../../Config/axios'

export const useUsuarios = () => {
    const token = localStorage.getItem('token')

    const {data:users,error,isLoading,isValidating,mutate:mutateListUser} = useSWR('/api/indexuser',()=>
    clienteAxios('/api/indexuser',{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    )
  return {
    users,
    isLoading,
    mutateListUser
  }
}
