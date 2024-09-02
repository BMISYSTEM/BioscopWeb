import  { useContext } from 'react'
import { GanttContext } from '../context/GanttContext';

export const NewProjectModal = () => {
  const {modalTareas,newProject,setNewProject} = useContext(GanttContext);
  return (
    <section className='w-1/4 h-auto bg-white  rounded-sm p-2 border border-indigo-500 shadow-xl'>
      <div className='w-full flex justify-end'>
        <button onClick={()=>setNewProject(false)} className='w-8 h-8 bg-red-500 rounded-full text-xs text-center flex items-center justify-center text-white hover:scale-105 transition-all'>
          X
        </button>
      </div>

      <form action="" className='w-full flex flex-col gap-2'>
        <label htmlFor="">Nombre del proyecto</label>
        <input type="text" className='border p-1 rounded-sm'/>
        <label htmlFor="">Sistemas que se implementaran</label>
        <div className='mt-5 flex flex-col gap-5'>
          <label htmlFor="" className='w-full flex flex-row gap-2 '>
            <input type="checkbox" name='sistema' value={'siagri'} />
            <label htmlFor="">SIAGRI</label>
            <input type="number" placeholder='Horas de implementacion' className='w-full' />
          </label>
          <label htmlFor="" className='w-full flex flex-row gap-2'>
            <input type="checkbox" name='sistema' value={'sigind'} />
            <label htmlFor="">SIGIND</label>
            <input type="number" placeholder='Horas de implementacion' className='w-full' />
          </label>
          <label htmlFor="" className='w-full flex flex-row gap-2'>
            <input type="checkbox" name='sistema' value={'siman'} />
            <label htmlFor="">SIMAN</label>
            <input type="number" placeholder='Horas de implementacion' className='w-full' />
          </label>
          <label htmlFor="" className='w-full flex flex-row gap-2 '>
            <input type="checkbox" name='sistema' value={'sicap'} />
            <label htmlFor="">SICAP</label>
            <input type="number" placeholder='Horas de implementacion' className='w-full'  />
          </label>
          <label htmlFor="">Cliente</label>
          <select name="" id="" className='w-full p-2 border '>
            <option value="">Cliente1</option>
            <option value="">Cliente2</option>
            <option value="">Cliente3s</option>
          </select>

        </div>
        <button className='mt-5 p-2 text-white bg-green-500 rounded-sm hover:bg-green-500/50 transition-all'>
          <p>Guardar Proyecto</p>
        </button>
      </form>
    </section>
  )
}
