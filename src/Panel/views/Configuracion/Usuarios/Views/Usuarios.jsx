import React from 'react'

export const Usuarios = () => {
  return (
    <section className='w-full h-full bg-white flex flex-col p-2'>
        {/* opciones de crear nuevos usuarios y realizar filtros */}
        <header className='w-full flex flex-row gap-2 p-2 '>
            {/* filtro */}
            <input type="text" className='p-2 rounded-xl text-sm' placeholder='Busca por nombre o cedula' />
            <button className='p-2 text-sm text-white bg-green-500 rounded-xl shadow-md hover:scale-105 hover:bg-green-700 transition-all'>
                Nuevo
            </button>
        </header>
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
                    </tr>
                </thead>
                <tbody className='text-sm border-b'>
                    <tr>
                        <td>
                            Bayron
                        </td>
                        <td>
                            Meneses Idarraga
                        </td>
                        <td>
                            1143994831
                        </td>
                        <td>
                            3184482848
                        </td>
                        <td>
                            bayronmenesesidarraga.990128@gmail.com
                        </td>
                        <td>
                            Activo
                        </td>
                        <td>
                            2
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>

    </section>
  )
}
