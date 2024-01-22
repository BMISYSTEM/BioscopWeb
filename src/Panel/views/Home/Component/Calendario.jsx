import React, { useContext, useEffect } from 'react'
import {useState} from 'react';
import { HomePanelContext } from '../Context/HomePanelContext';
import { useNota } from '../hooks/useNota';

const Calendario = () => {
    const {fechaNota,setFechaNota} = useContext(HomePanelContext)
    const {mutate} = useNota()
    /**
     * Dias de lasemana
     */
    const [semana,setSemana] = useState(['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'])
    const [diaseleccion,setDiaSeleccion] = useState();

    /**
     * Fecha actual
     */
    const [fecha,setFecha] = useState(new Date());
    const [ano,setAno]= useState(fecha.getFullYear());
    const [dia,setDia] = useState(fecha.getDate());
    const [mes,setMes] = useState(fecha.getMonth())
    /**
     * Fecha fin de mes
     */
    const [fechafin,setFechafin] = useState(new Date(ano, mes + 1, 0));
    const [anoFin,setAnoFin]= useState(fechafin.getFullYear());
    const [diaFin,setDiaFin] = useState(fechafin.getDate());
    const [mesFin,setMesFin] = useState(fechafin.getMonth());
    /**
     * Dia de la semana
     */
    const [FechaInisio,setFechaInicio] = useState(new Date(ano, mes  , 1));
    const [DiaSemana,SetDiaSemana] = useState(FechaInisio.getDay())
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
    for (let index = 0; index < 37; index++) {
        if(index >=(DiaSemana - 1) && index <= (diaFin+1)){
            if(index >= 0 && index < 7){
                semanauno.push(...[primero++]);
            }
             if (index >= 7 && index < 14){
                semanados.push(...[primero++]);
            }
             if (index >= 14 && index < 21){
                semanatres.push(...[primero++]);
            }
             if (index >= 22 && index < 29){
                semanacuatro.push(...[primero++]);
            }
             if (index >= 30 && index < 40){
                semanasinco.push(...[primero++]);
            }
        }else{
            if(index >= 0 && index < 7){
                semanauno.push(...[0]);
            }
            else if (index >= 7 && index < 13){
                semanados.push(...[0]);
            }
            else if (index >= 13 && index < 21){
                semanatres.push(...[0]);
            }else if (index >= 21 && index < 29){
                semanacuatro.push(...[0]);
            }else if (index >= 29 && index < 40){
                semanasinco.push(...[0]);
            }
        }
        
    }
    const [diasCalendario,setDiasCalendario] = useState([semanauno,semanados,semanatres,semanacuatro,semanasinco]);
    const seleccionfecha = (dia) =>{
        setFechaNota(ano+'0'+ (mes+1) + ''+ (dia > 9 ? dia: "0"+dia) )
        mutate();
        setDiaSeleccion(dia)
    }
    useEffect(()=>{
        setDiaSeleccion(dia)
        setFechaNota(ano+'0'+ (mes+1) + ''+ (dia > 9 ? dia : '0'+dia))
    },[])
  return (
    <div className='md:w-96 w-full h-auto flex flex-col p-2  rounded-xl'>
        <div className='w-full h-10 flex flex-row justify-between border-2 rounded-xl p1 items-center cursor-pointer'>
            <div className={`${dia === 0 ? " bg-sky-700 text-white rounded-full " : "text-slate-600"} hover:bg-slate-500/30 transition text-sm font-bold  p-1 w-full text-center`} >Lu</div>
            <div className={`${dia === 1 ? " bg-sky-700 text-white rounded-full " : "text-slate-600"} hover:bg-slate-500/30 transition text-sm font-bold  p-1 w-full text-center`} >Ma</div>
            <div className={`${dia === 2 ? " bg-sky-700 text-white rounded-full " : "text-slate-600"} hover:bg-slate-500/30 transition text-sm font-bold  p-1 w-full text-center`} >Mi</div>
            <div className={`${dia === 3 ? " bg-sky-700 text-white rounded-full " : "text-slate-600"} hover:bg-slate-500/30 transition text-sm font-bold  p-1 w-full text-center`} >Ju</div>
            <div className={`${dia === 4 ? " bg-sky-700 text-white rounded-full " : "text-slate-600"} hover:bg-slate-500/30 transition text-sm font-bold  p-1 w-full text-center`} >Vi</div>
            <div className={`${dia === 5 ? " bg-sky-700 text-white rounded-full " : "text-slate-600"} hover:bg-slate-500/30 transition text-sm font-bold  p-1 w-full text-center`} >Sa</div>
            <div className={`${dia === 6 ? " bg-sky-700 text-white rounded-full " : "text-slate-600"} hover:bg-slate-500/30 transition text-sm font-bold  p-1 w-full text-center`} >Do</div>
        </div>
        {diasCalendario.map(diasCalendario => (
            <div className='w-full h-10 flex flex-row justify-between p1 items-center '>
                <button onClick={()=>seleccionfecha(diasCalendario[0] )} className={`${diaseleccion === diasCalendario[0] ? 'bg-sky-600/60 text-white font-bold ' : "text-sm font-bold text-slate-600   border-r-2 hover:bg-slate-600/60 cursor-pointer   hover:scale-110 transition hover:text-white"} p-1 w-full rounded-full text-center`}>
                    {diasCalendario[0]}
                </button>
                <button onClick={()=>seleccionfecha(diasCalendario[1] )} className={`${diaseleccion === diasCalendario[1] ? 'bg-sky-600/60 text-white font-bold ' : "text-sm font-bold text-slate-600   border-r-2 hover:bg-slate-600/60 cursor-pointer   hover:scale-110 transition hover:text-white"} p-1 w-full rounded-full text-center`}>
                    {diasCalendario[1]}
                </button>
                <button onClick={()=>seleccionfecha(diasCalendario[2] )} className={`${diaseleccion === diasCalendario[2] ? 'bg-sky-600/60 text-white font-bold ' : "text-sm font-bold text-slate-600   border-r-2 hover:bg-slate-600/60 cursor-pointer   hover:scale-110 transition hover:text-white"} p-1 w-full rounded-full text-center`}>
                    {diasCalendario[2]}
                </button>
                <button onClick={()=>seleccionfecha(diasCalendario[3] )} className={`${diaseleccion === diasCalendario[3] ? 'bg-sky-600/60 text-white font-bold ' : "text-sm font-bold text-slate-600   border-r-2 hover:bg-slate-600/60 cursor-pointer   hover:scale-110 transition hover:text-white"} p-1 w-full rounded-full text-center`}>
                    {diasCalendario[3]}
                </button>
                <button onClick={()=>seleccionfecha(diasCalendario[4])} className={`${diaseleccion === diasCalendario[4] ? 'bg-sky-600/60 text-white font-bold ' : "text-sm font-bold text-slate-600   border-r-2 hover:bg-slate-600/60 cursor-pointer   hover:scale-110 transition hover:text-white"} p-1 w-full rounded-full text-center`}>
                    {diasCalendario[4]}
                </button>
                <button onClick={()=>seleccionfecha(diasCalendario[5])} className={`${diaseleccion === diasCalendario[5] ? 'bg-sky-600/60 text-white font-bold ' : "text-sm font-bold text-slate-600   border-r-2 hover:bg-slate-600/60 cursor-pointer   hover:scale-110 transition hover:text-white"} p-1 w-full rounded-full text-center`}>
                    {diasCalendario[5]}
                </button>
                <button onClick={()=>seleccionfecha(diasCalendario[6] )} className={`${diaseleccion === diasCalendario[6] ? 'bg-sky-600/60 text-white font-bold ' : "text-sm font-bold text-slate-600   border-r-2 hover:bg-slate-600/60 cursor-pointer   hover:scale-110 transition hover:text-white"} p-1 w-full rounded-full text-center`}>
                    {diasCalendario[6]}
                </button>
            </div>
        ))}

    </div>
  )
}

export default Calendario
