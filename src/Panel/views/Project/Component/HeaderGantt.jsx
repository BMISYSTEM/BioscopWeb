import React, { useContext } from 'react'
import { GanttContext } from '../context/GanttContext'

export const HeaderGantt = () => {
    const {mes,setMes} = useContext(GanttContext)
  return (
    <section className="w-full h-14 bg-white border-b-2 flex flex-row gap-3 items-center p-2 ">
      {/* <p className="text-xl font-bold text-white font-sans p-2 bg-green-500">Gantt tareas</p> */}
      <button className="text-sm p-2 bg-sky-500 hover:scale-110 hover:bg-sky-900 transition-all text-white rounded-xl shadow-xl">
        Nueva tarea
      </button>
      <p className="text-xl font-bold text-slate-400 font-sans">Mes:</p>
      <select name="" id="" className="text-sm font-bold p-2 border-2 rounded-xl h-10" onChange={(e)=>setMes(e.target.value)}>
        <option value="1"  {...mes ===1 ?     'selected' : ''} selected>Enero</option>
        <option value="2"  {...mes ===2 ?     'selected' : ''}>Febrero</option>
        <option value="3"  {...mes ===3 ?     'selected' : ''}>Marzo</option>
        <option value="4"  {...mes ===4 ?     'selected' : ''}>Abril</option>
        <option value="5"  {...mes ===5 ?     'selected' : ''}>Mayo</option>
        <option value="6"  {...mes ===6 ?     'selected' : ''}>Junio</option>
        <option value="7"  {...mes ===7 ?     'selected' : ''}>Julio</option>
        <option value="8"  {...mes ===8 ?     'selected' : ''}>Agosto</option>
        <option value="9"  {...mes ===9 ?     'selected' : ''}>Septiembre</option>
        <option value="10" {...mes ===10 ?    'selected' : ''}>Optubre</option>
        <option value="11" {...mes ===11 ?    'selected' : ''}>Noviembre</option>
        <option value="12" {...mes ===12 ?    'selected' : ''}>Diciembre</option>
      </select>  
      <p className="text-xl font-bold text-slate-400 font-sans">Projecto:</p>
      <select name="" id="" className="text-sm font-bold p-2 border-2 rounded-xl h-10" onChange={(e)=>setMes(e.target.value)}>
        <option value="1"  {...mes ===1 ?     'selected' : ''} selected>Implementacion Sandiego</option>
        <option value="2"  {...mes ===2 ?     'selected' : ''}>Implementacion sancarlos</option>
        <option value="3"  {...mes ===3 ?     'selected' : ''}>Implementacion Manuelita</option>
      </select>  
      <p className="text-xl font-bold text-slate-400 font-sans">Consultor:</p>
      <select name="" id="" className="text-sm font-bold p-2 border-2 rounded-xl h-10" onChange={(e)=>setMes(e.target.value)}>
        <option value="1"  {...mes ===1 ?     'selected' : ''} selected>Bayron Meneses</option>
        <option value="2"  {...mes ===2 ?     'selected' : ''}>Oscar castillo</option>
        <option value="3"  {...mes ===3 ?     'selected' : ''}>Jose Carabali</option>
      </select>  
  </section>
  )
}
