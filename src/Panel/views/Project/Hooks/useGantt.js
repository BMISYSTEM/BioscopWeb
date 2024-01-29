import React, { useContext, useEffect, useState } from "react";
import { useNotasProject } from "./useNotasProject";
import { GanttContext } from "../context/GanttContext";

export const useGantt = () => {
    const {mes:mesSeleccion} = useContext(GanttContext)
    /**
     * Consulta la informacion del gantt utilizando las notas 
     */
    const { indexNotas, isLoading, mutate } = useNotasProject(
        new Date().getMonth() + 1
    );
    const tareas = indexNotas?.succes;


    /**
     * Fecha actual
     */
    const [fecha, setFecha] = useState(new Date());
    const [ano, setAno] = useState(fecha?.getFullYear());
    const [dia, setDia] = useState(fecha?.getDate());
    const [mes, setMes] = useState(fecha?.getMonth());


    /**
     * Fecha fin de mes
     */
    const [fechafin, setFechafin] = useState(new Date(ano, mesSeleccion , 0));
    const [anoFin, setAnoFin] = useState(fechafin?.getFullYear());
    const [diaFin, setDiaFin] = useState(fechafin?.getDate());
    const [mesFin, setMesFin] = useState(fechafin?.getMonth());


    /**
     * visibilidad de tooltip, se muestra cuando se pasa por encima de una tarea
     */
    const [visible, setvisible] = useState(false);


    /**
     * datos del tooltip
     */
    const [tareaTooltip, setTareatooltip] = useState(null);
    const [duraciontooltip, setduraciontooltip] = useState(null);


    /**
     * estados de los inputs para nuevas tareas
     */
    const [descripcion, setDescripcion] = useState("");
    const [inicio, setinicio] = useState("");
    const [fin, setfin] = useState("");


    /**
     * Muestra la informacion de la tarea en el tooltipe
     * @param {*} e
     * @param {*} id
     */
    const tooltip = (e, id) => {
    // filtrando array de tareas para saber por cual se esta pasando
    const tareatool = tareas.filter((tarea) => tarea.id === id);
    // se agrega la tarea al estado de tareastootip
    setTareatooltip(tareatool[0].text);
    // se genera el dia de inicio y el dia fin, ya que el datepiker genera una separacion (-) se remplaza con (/)
    const datai = new Date(tareatool[0].fecha_inicio.replace(/-/g, "/"));
    const dataf = new Date(tareatool[0].fecha_fin.replace(/-/g, "/"));
    // Se agrega la duracion en dias de la tarea sacando la diferencia de las dos variables anteriores
    setduraciontooltip(dataf.getDate() - datai.getDate() + 1);
    // se cambia el estado para mostrar visibilidad del div tooltipe
    setvisible(!visible);
    // se le agrega los styles al div tooltipe para mostrarlo justo debajo del cursor
    const tooltip = document.getElementById("tool");
    tooltip.style.display = "block";
    tooltip.style.left = e.clientX - 150 + "px";
    tooltip.style.top = e.clientY + 10 + "px";
  };
  /**
   * Cambia el estado de visibilidad del tootipe
   * @param {*} e
   */
  const visibletool = (e) => {
    const tooltip = document.getElementById("tool");
    tooltip.style.display = "none";
  };


  /**
   * actualiza el ultimo dia del mes, ya que esto permite establecer que dia es del mes ejemplo febreo = 29 
   */
  useEffect(()=>{
    setMes(mesSeleccion)
    setFechafin(new Date(ano, mesSeleccion , 0))
    setDiaFin(new Date(ano, mesSeleccion , 0).getDate());
  },[mesSeleccion])


  return {
    visibletool,
    tooltip,
    indexNotas,
    tareas,
    isLoading,
    tareaTooltip,
    duraciontooltip,
    diaFin,
  };
};
