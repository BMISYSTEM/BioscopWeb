import React, { useContext } from 'react'

/**
 * imagenes
 */
import bajar from '../Assets/bajar.svg';
import { Tooltip } from '../../../component/Tooltip';
import { GanttContext } from '../context/GanttContext';
import { Modales } from './Modales';
export const Proyectos = () => {
    const {newProject,setNewProject} = useContext(GanttContext);
    // agregar a la clase hidden al elemento seleccionado
    const hiddenTr = (id) =>{
        /**
         * Se pasa la clase la cual se le agrega alos tr con informacion
         */
        var tr = document.querySelectorAll(`.${id}`);
        tr.forEach((tr)=>{
            if(tr.style.display  === 'none'){
                tr.style.display = '';
            }else{
                tr.style.display = "none";
            }
        });
    }
  return (
    <section className='w-full h-full  flex flex-col gap-2'>
        {/* opciones de proyectos como nuevo proyecto,editar uno nuevo,eliminar un proyecto */}
        <div className='w-full h-20 p-2 flex flex-row items-center '>
            <button className='text-sm font-bold text-white bg-sky-500 p-2 rounded-sm shadow-xl hover:scale-105 hover:bg-sky-800 transition-all ' 
            onClick={()=>setNewProject(!newProject)}
            >
                Nuevo proyecto
            </button>
        </div>
        <section className='w-full h-full '>
            <table className='w-full border-2'>
                {/* titulo del proyecto */}
                <tr className='border-2 text-xl font-bold text-slate-500 text-center'>
                    <td>Implementacion Manuelita</td>
                </tr>
                {/* titulos de las columnas */}
                <tr className='w-full border-2'>
                    <td className='border text-lg font-bold font-mono p-1'>
                        Tareas
                    </td>
                    <td className='border text-lg font-bold font-mono p-1'>
                        Fecha Inicio
                    </td>
                    <td className='border text-lg font-bold font-mono p-1'>
                        Fecha Final
                    </td>
                    <td className='border text-lg font-bold font-mono p-1'>
                        Horas
                    </td>
                    <td className='border text-lg font-bold font-mono p-1'>
                        Porcentaje
                    </td>
                    <td className='border text-lg font-bold font-mono p-1'>
                        Estatus
                    </td>
                    <td className='border text-lg font-bold font-mono p-1'>
                        Asignado
                    </td>
                </tr>
                {/* filas */}
                {/* item o titulo de categoria */}
                <tr className='w-full border-2'>
                    {/* item */}
                    <td className='text-sm border font-bold'>
                        <div className='flex flex-row gap-2'>
                            <button className='hover:scale-95 transition-all' onClick={()=>hiddenTr("visible1")}>
                                <Tooltip img={bajar} mensaje={'Desplegar'} key={1}/>
                            </button>
                            <span>Levantamiento</span>
                        </div>
                    </td>
                    <td className='text-sm border px-10 font-bold'>
                        01/29/2024
                    </td>
                    <td className='text-sm border px-10 font-bold'>
                        02/15/2024
                    </td>
                    <td className='text-sm border px-10 font-bold'>
                        100
                    </td>
                    <td className='text-sm border px-10 font-bold'>
                        0 %
                    </td>
                    <td className='text-sm border px-10 font-bold'>
                        En proceso
                    </td>
                    <td className='text-sm border px-10 font-bold'>
                       
                    </td>
                </tr>
                {/* fila de tareas normales */}
                    <tr className='w-full border-2 visible1' >
                        <td className='text-sm border px-10'  >
                            Presupuesto
                        </td>
                        <td className='text-sm border px-10' >
                            01/29/2024
                        </td>
                        <td className='text-sm border px-10' >
                            01/29/2024
                        </td>
                        <td className='text-sm border px-10' >
                            5
                        </td>
                        <td className='text-sm border px-10' >
                            0 %
                        </td>
                        <td className='text-sm border px-10' >
                            En proceso
                        </td>
                        <td className='text-sm border px-10' >
                            Bayron Meneses
                        </td>
                    </tr>
                    <tr className='w-full border-2 visible1' >
                        <td className='text-sm border px-10'>
                            Presupuesto
                        </td>
                        <td className='text-sm border px-10'>
                            01/29/2024
                        </td>
                        <td className='text-sm border px-10'>
                            01/29/2024
                        </td>
                        <td className='text-sm border px-10'>
                            5
                        </td>
                        <td className='text-sm border px-10'>
                            0 %
                        </td>
                        <td className='text-sm border px-10'>
                            En proceso
                        </td>
                        <td className='text-sm border px-10' >
                            Bayron Meneses
                        </td>
                    </tr>
                    <tr className='w-full border-2 visible1' >
                        <td className='text-sm border px-10'>
                            Presupuesto
                        </td>
                        <td className='text-sm border px-10'>
                            01/29/2024
                        </td>
                        <td className='text-sm border px-10'>
                            01/29/2024
                        </td>
                        <td className='text-sm border px-10'>
                            5
                        </td>
                        <td className='text-sm border px-10'>
                            0 %
                        </td>
                        <td className='text-sm border px-10'>
                            En proceso
                        </td>
                        <td className='text-sm border px-10' >
                            Bayron Meneses
                        </td>
                    </tr>
                    <tr className='w-full border-2 visible1'>
                        <td className='text-sm border px-10'>
                            Presupuesto
                        </td>
                        <td className='text-sm border px-10'>
                            01/29/2024
                        </td>
                        <td className='text-sm border px-10'>
                            01/29/2024
                        </td>
                        <td className='text-sm border px-10'>
                            5
                        </td>
                        <td className='text-sm border px-10'>
                            0 %
                        </td>
                        <td className='text-sm border px-10'>
                            En proceso
                        </td>
                        <td className='text-sm border px-10' >
                            Bayron Meneses
                        </td>
                    </tr>
                 {/* item o titulo de categoria */}
                 <tr className='w-full border-2'>
                    {/* item */}
                    <td className='text-sm border font-bold'>
                        <div className='flex flex-row gap-2'>
                            <button className='hover:scale-95 transition-all' onClick={()=>hiddenTr("visible2")}>
                                <Tooltip img={bajar} mensaje={'Desplegar'} key={1}/>
                            </button>
                            <span>Levantamiento</span>
                        </div>
                    </td>
                    <td className='text-sm border px-10 font-bold'>
                        01/29/2024
                    </td>
                    <td className='text-sm border px-10 font-bold'>
                        02/15/2024
                    </td>
                    <td className='text-sm border px-10 font-bold'>
                        100
                    </td>
                    <td className='text-sm border px-10 font-bold'>
                        0 %
                    </td>
                    <td className='text-sm border px-10 font-bold'>
                        En proceso
                    </td>
                </tr>
                <tr className='w-full border-2 visible2' >
                    <td className='text-sm border px-10'>
                        Presupuesto
                    </td>
                    <td className='text-sm border px-10'>
                        01/29/2024
                    </td>
                    <td className='text-sm border px-10'>
                        01/29/2024
                    </td>
                    <td className='text-sm border px-10'>
                        5
                    </td>
                    <td className='text-sm border px-10'>
                        0 %
                    </td>
                    <td className='text-sm border px-10'>
                        En proceso
                    </td>
                </tr>
                <tr className='w-full border-2 visible2'>
                    <td className='text-sm border px-10'>
                        Presupuesto
                    </td>
                    <td className='text-sm border px-10'>
                        01/29/2024
                    </td>
                    <td className='text-sm border px-10'>
                        01/29/2024
                    </td>
                    <td className='text-sm border px-10'>
                        5
                    </td>
                    <td className='text-sm border px-10'>
                        0 %
                    </td>
                    <td className='text-sm border px-10'>
                        En proceso
                    </td>
                </tr>
            </table>
        </section>
        <Modales/>
    </section>
  )
}
