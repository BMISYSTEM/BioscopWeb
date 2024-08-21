import React from 'react'
import { useUsuarios } from '../Hooks/useUsuarios'
import { Loading } from '../../../../component/Loading'
import { ProviderUser } from '../Context/UsuariosContext'
import { Modales } from '../Component/Modales'
import { Header } from '../Component/Header'
/**
 * Imagenes
 */
import bloqueo from '../Assets/bloqueo.svg'
import editar from '../Assets/edit.svg'
import { Tooltip } from '../../../../component/Tooltip'
export const Usuarios = () => {
    const {isLoading,users} = useUsuarios()
    if(isLoading)
    {
        return (
            <Loading/>
        )
    }
    const Users = users?.data?.succes
  return (
    <ProviderUser>
        <section className='w-full h-full bg-white flex flex-col p-2'>
            {/* opciones de crear nuevos usuarios y realizar filtros */}
            <Header/>
            <main>
                <table className='w-full text-center '>
                    <thead className='text-xl font-bold font-mono bg-sky-100 '>
                        <tr>
                            <td>
                                Nombre
                            </td>
                            <td>
                                Apellidos
                            </td>
                            <td>
                                Cedula
                            </td>
                            <td>
                                Telefono
                            </td>
                            <td>
                                Correo
                            </td>
                            <td>
                                Estado
                            </td>
                            <td>
                                Rol
                            </td>
                            <td>
                                Acciones
                            </td>

                        </tr>
                    </thead>
                    <tbody className='text-sm border-b'>
                        {Users?.map((user,index)=>(
                            <tr key={index}>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.apellido}
                                </td>
                                <td>
                                    {user.cedula}
                                </td>
                                <td>
                                    {user.telefono}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {user.activo ? 'Activo' : 'Bloqueado'}
                                </td>
                                <td>
                                    {user.id_rol}
                                </td>
                                <td>
                                    <div className='flex flex-row gap-2 justify-center'>
                                        <button className=' text-sky-400 hover:scale-110 transition-all'>
                                            <Tooltip img={bloqueo} mensaje={'Bloquear'}/> 
                                        </button>
                                        <button className=' text-sky-400 hover:scale-110 transition-all'>
                                        <Tooltip img={editar} mensaje={'Editar'}/> 
                                        </button>
                                    </div>
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
            <Modales/>
        </section>
    </ProviderUser>
  )
}
