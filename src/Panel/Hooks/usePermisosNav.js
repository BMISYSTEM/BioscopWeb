import React from 'react'
import  useSWR  from 'swr'
import clienteAxios from '../../Config/axios'

export const usePermisosNav = () => {
    const token = localStorage.getItem('token')

    const {data:permisos,error,isLoading,mutate} = useSWR('/api/permisosuser',()=>
    clienteAxios('/api/permisosuser',{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    .then(res => res.data)
    .catch(error => {
        throw Error(error?.response?.data?.errors)
    })
)
  return {
    permisos,
    isLoading
  }
}