import React, { useContext, useEffect } from 'react'
import {useState} from 'react';
import { HomePanelContext } from '../Context/HomePanelContext';
import { useNota } from '../hooks/useNota';

const Calendario = () => {
    const {fechaNota,setFechaNota} = useContext(HomePanelContext)
    const {mutate} = useNota()
    /**
     * Mes seleccionado
     */
    const [mesSeleccion,setMesseleccion] = useState(new Date().getMonth())
    console.log(mesSeleccion)
    const [diaseleccion,setDiaSeleccion] = useState();

    /**
     * Fecha actual
     */
    const [fecha,setFecha] = useState(new Date());
    const [ano,setAno]= useState(fecha.getFullYear());
    const [dia,setDia] = useState(fecha.getDate());
    const [mes,setMes] = useState(fecha.getMonth())


    /**
         * Arreglos para el calendario
         */
    let semanauno = [];
    let semanados = [];
    let semanatres = [];
    let semanacuatro = [];
    let semanasinco = [];
    let primero = 1;
    let diasSemana = 7
    let conteoSemana = 1
    useEffect(()=>{
        const fechaFin = new Date(ano, mesSeleccion , 0)
        const diaFin =fechaFin.getDate()
        const mesFin = fechaFin.getMonth()
        /**Fecha fin  */
        const fechaInicio = new Date(ano, mesSeleccion -1 , 1)
        const diaSemana = fechaInicio.getDay()
        /** recorrio para llenar los array por semana */
        for (let index = 0; index < 35; index++) {
            /** index mayor que el dia de la semana para iniciar a colocar los dias  */
            if(index >=(diaSemana ) && index <= (diaFin + (diaSemana - 1))){
                if(index >= diaSemana && index < 7){
                    semanauno.push(...[primero++]);

                }
                 if (index >= 7 && index < 14){
                    semanados.push(...[primero++]);

                }
                 if (index >= 14 && index < 21){
                    semanatres.push(...[primero++]);
                }
                 if (index >= 21 && index < 28){
                    semanacuatro.push(...[primero++]);

                }
                 if (index >= 28 && index <= 40){
                    semanasinco.push(...[primero++]);
                }
            }
            // cuando no entra en las condiciones del if es por que no es un dia de este mes entonces coloca 0 
            else{
                if(index >= 0 && index < 7){
                    semanauno.push(...[0]);
                }
                else if (index >= 7 && index < 14){
                    semanados.push(...[0]);
                }
                else if (index >= 14 && index < 21){
                    semanatres.push(...[0]);
                }else if (index >= 21 && index < 28){
                    semanacuatro.push(...[0]);
                }else if (index >= 28 && index < 35){
                    semanasinco.push(...[0]);
                }
            }
        }
        setDiasCalendario([semanauno,semanados,semanatres,semanacuatro,semanasinco])
    },[mesSeleccion])
   
    const [diasCalendario,setDiasCalendario] = useState([semanauno,semanados,semanatres,semanacuatro,semanasinco]);
    const seleccionfecha = (dia) =>{
        console.log((Number(mesSeleccion) + 1 < 10 ? '0'+(Number(mesSeleccion) + 1) : (Number(mesSeleccion) + 1)))
        setFechaNota(ano + (Number(mesSeleccion) + 1 < 10 ? '0'+(Number(mesSeleccion) + 1) : (Number(mesSeleccion) + 1))  + ''+ (dia > 9 ? dia: "0"+dia) )
        mutate();
        setDiaSeleccion(dia)
    }
    useEffect(()=>{
        setDiaSeleccion(dia)
        setFechaNota(ano+'0'+ (mes+1) + ''+ (dia > 9 ? dia : '0'+dia))
    },[])
    
  return (
    <div className='md:w-96 w-full h-auto flex flex-col p-2  rounded-xl gap-2'>
        <select className='p-2 border-none' name="" id="" onChange={(e)=>setMesseleccion(e.target.value)} value={mesSeleccion}>
            <option value="0"   selected={mesSeleccion === 0 ? true : false}>Enero</option>
            <option value="1"   selected={mesSeleccion === 1 ? true : false}>Febrero</option>
            <option value="2"   selected={mesSeleccion === 2 ? true : false}>Marzo</option>
            <option value="3"   selected={mesSeleccion === 3 ? true : false}>Abril</option>
            <option value="4"   selected={mesSeleccion === 4 ? true : false}>Mayo</option>
            <option value="5"   selected={mesSeleccion === 5 ? true : false}>Junio</option>
            <option value="6"   selected={mesSeleccion === 6 ? true : false}>Julio</option>
            <option value="7"   selected={mesSeleccion === 7 ? true : false}>Agosto</option>
            <option value="8"   selected={mesSeleccion === 8 ? true : false}>Septiembre</option>
            <option value="9"   selected={mesSeleccion === 9 ? true : false} >Obtubre</option>
            <option value="10"  selected={mesSeleccion === 10 ? true : false} >Noviembre</option>
            <option value="11"  selected={mesSeleccion === 11 ? true : false} >Diciembre</option>
        </select>
        <div className='w-full h-10 flex flex-row justify-between border-2 rounded-xl p1 items-center cursor-pointer'>
            <div  key={7} className={`text-slate-600 hover:bg-slate-500/30 transition text-sm font-bold  p-1 w-full text-center`} >Do</div>
            <div  key={1} className={`text-slate-600 hover:bg-slate-500/30 transition text-sm font-bold  p-1 w-full text-center`} >Lu</div>
            <div  key={2} className={`text-slate-600 hover:bg-slate-500/30 transition text-sm font-bold  p-1 w-full text-center`} >Ma</div>
            <div  key={3} className={`text-slate-600 hover:bg-slate-500/30 transition text-sm font-bold  p-1 w-full text-center`} >Mi</div>
            <div  key={4} className={`text-slate-600 hover:bg-slate-500/30 transition text-sm font-bold  p-1 w-full text-center`} >Ju</div>
            <div  key={5} className={`text-slate-600 hover:bg-slate-500/30 transition text-sm font-bold  p-1 w-full text-center`} >Vi</div>
            <div  key={6} className={`text-slate-600 hover:bg-slate-500/30 transition text-sm font-bold  p-1 w-full text-center`} >Sa</div>
        </div>
        {diasCalendario.map((diasCalendario,index) => (
            <div key={index} className='w-full h-10 flex flex-row justify-between p1 items-center '>
                <button onClick={()=>seleccionfecha(diasCalendario[0] )} className={`${diaseleccion === diasCalendario[0] ? 'bg-sky-600/60 text-white font-bold ' : "text-sm font-bold text-slate-600   border-r-2 hover:bg-slate-600/60 cursor-pointer   hover:scale-105 transition  hover:text-white"} p-1 w-full rounded-xs text-center`}>
                    {diasCalendario[0]}
                </button>
                <button onClick={()=>seleccionfecha(diasCalendario[1] )} className={`${diaseleccion === diasCalendario[1] ? 'bg-sky-600/60 text-white font-bold ' : "text-sm font-bold text-slate-600   border-r-2 hover:bg-slate-600/60 cursor-pointer   hover:scale-105 transition hover:text-white"} p-1 w-full rounded-xs text-center`}>
                    {diasCalendario[1]}
                </button>
                <button onClick={()=>seleccionfecha(diasCalendario[2] )} className={`${diaseleccion === diasCalendario[2] ? 'bg-sky-600/60 text-white font-bold ' : "text-sm font-bold text-slate-600   border-r-2 hover:bg-slate-600/60 cursor-pointer   hover:scale-105 transition hover:text-white"} p-1 w-full rounded-xs text-center`}>
                    {diasCalendario[2]}
                </button>
                <button onClick={()=>seleccionfecha(diasCalendario[3] )} className={`${diaseleccion === diasCalendario[3] ? 'bg-sky-600/60 text-white font-bold ' : "text-sm font-bold text-slate-600   border-r-2 hover:bg-slate-600/60 cursor-pointer   hover:scale-105 transition hover:text-white"} p-1 w-full rounded-xs text-center`}>
                    {diasCalendario[3]}
                </button>
                <button onClick={()=>seleccionfecha(diasCalendario[4])} className={`${diaseleccion === diasCalendario[4] ? 'bg-sky-600/60 text-white font-bold ' : "text-sm font-bold text-slate-600   border-r-2 hover:bg-slate-600/60 cursor-pointer   hover:scale-105 transition hover:text-white"} p-1 w-full rounded-xs text-center`}>
                    {diasCalendario[4]}
                </button>
                <button onClick={()=>seleccionfecha(diasCalendario[5])} className={`${diaseleccion === diasCalendario[5] ? 'bg-sky-600/60 text-white font-bold ' : "text-sm font-bold text-slate-600   border-r-2 hover:bg-slate-600/60 cursor-pointer   hover:scale-105 transition hover:text-white"} p-1 w-full rounded-xs text-center`}>
                    {diasCalendario[5]}
                </button>
                <button onClick={()=>seleccionfecha(diasCalendario[6] )} className={`${diaseleccion === diasCalendario[6] ? 'bg-sky-600/60 text-white font-bold ' : "text-sm font-bold text-slate-600   border-r-2 hover:bg-slate-600/60 cursor-pointer   hover:scale-105 transition hover:text-white"} p-1 w-full rounded-xs text-center`}>
                    {diasCalendario[6]}
                </button>
            </div>
        ))}

    </div>
  )
}

export default Calendario
