import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import  useSWR  from 'swr'
import clienteAxios from '../../Config/axios';

export const useLogin = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')

    const {data:user,error,isLoading,mutate} = useSWR('/api/user',()=>
        clienteAxios('/api/user',{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => {
            throw Error(error?.response?.data?.errors)
        })
    )
    const login = async(data,setEstatus) =>{
        try {
            const estatusdata = await clienteAxios.post('/api/login',data);
            await setEstatus(estatusdata)  
            await mutate()
        } catch (error) {
            setEstatus(error) 
        }
        
    }

    useEffect(()=>{
        if(user)
        {   
            navigate('/panel/home')
            return

        }
        //si el usuario no esta autenticado lo manda a iniciar session 
        if(error)
        {
            navigate('/')
        }
    },[user,error])

  return {
    login
  }
}
