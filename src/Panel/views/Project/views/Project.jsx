import React, { useEffect, useState } from "react";




export const Project = () => {
  const [tareas,settareas] = useState(
    []
  )
  const [visible,setvisible] = useState(false);
  // inputs
  const [descripcion,setDescripcion] = useState('');
  const [inicio,setinicio] = useState('');
  const [fin,setfin] = useState('');
  // datos del tooltip 
  const [tareaTooltip,setTareatooltip] = useState(null);
  const [duraciontooltip,setduraciontooltip] = useState(null);

  const tarea = (e) =>{
    e.preventDefault();
    const id = Math.random(1,300);
    settareas([...tareas,{
                          id:id,
                          tarea:descripcion,
                          inicio:inicio,
                          fin:fin,
                          ejecutado:'30%',
                          asignado:'Bayron Meneses'
                        }]
    )
  }

  const tooltip = (e,id) =>{
    const tareatool = tareas.filter(tarea=> tarea.id ===id)
    setTareatooltip(tareatool[0].tarea)
    const datai = new Date(tareatool[0].inicio.replace(/-/g,'/'))
    const dataf = new Date(tareatool[0].fin.replace(/-/g,'/'))
    setduraciontooltip((dataf.getDate() - datai.getDate())+1)
    setvisible(!visible)
    const tooltip = document.getElementById('tool');
    tooltip.style.display = 'block';
    tooltip.style.left = (e.clientX + 10 ) + 'px';
    tooltip.style.top = (e.clientY +10) + 'px';

  }
  const visibletool = (e) =>{
    const tooltip = document.getElementById('tool');
    tooltip.style.display = 'none';
  }

  const dias = () =>{
    let i = 0;
    const dias = 31
    const elementos = [];
    let x = 201;
    const tarea = (tareas.length)
    while(i < 31){
      elementos.push(<text x={x + (i* 20)} y={(tarea * 42)+20} fontSize={12} fill="#ABAFA7">{i+1}</text>)
      i++;
    }
    return (
      elementos
    )
  }
  return (
    <>
        <div 
        className=" left-0 top-0 w-full h-full ">
          <section className="w-full h-14 bg-white border-b-2 flex flex-row gap-3">
            <form onSubmit={tarea} action="" className="flex flex-row gap-3 p-2 h-auto">
              <label htmlFor="">Tarea</label>
              <input type="text"  className="p-2 text-sm border-2 rounded-xl" onChange={(e)=>setDescripcion(e.target.value)} value={descripcion}/>
              <label htmlFor="">inicio</label>
              <input type="date"  className="p-2 text-sm border-2 rounded-xl"  onChange={(e)=>setinicio(e.target.value)} value={inicio}/>
              <label htmlFor="">fin</label>
              <input type="date" className="p-2 text-sm border-2 rounded-xl"  onChange={(e)=>setfin(e.target.value)} value={fin}/>
              <input type="submit" value={'Registrar'}  className="bg-green-500 rounded-xl p-2 text-white hover:scale-110 transition-all"/>
            </form>
          </section>
          <div className={'absolute hidden '} id="tool" >
            <div className="w-40 h-auto bg-slate-200 flex flex-col gap-2 text-sm rounded-xl shadow-xl p-2">
              <p className="text-sm text-slate-500"><span className="text-lg font-bold text-slate-700">Tarea:</span> {tareaTooltip}</p>
              <p className="text-sm text-slate-500"><span className="text-lg font-bold text-slate-700">Duracion:</span> {duraciontooltip} dias</p>
              {/* <p>ejecutado: 20%</p>
              <p>Asignado: Bayron</p> */}
            </div>
        </div>
       {/* dibujo svg de gannt  */}
        <svg className="w-full h-full" fill="#ffffff">
          {/* rows */}
          <g>
            {tareas.map((tarea,index)=>{
              let y = 0 + (index * 42); 
              return(
                <rect x='0' y={y} className="w-full h-[42px]" fill="#ffffff" ></rect>
              )
            })}

          </g>
          {/* tareas  */}
          <g>
            {tareas.map((tarea,index)=>{
              let y = 25 + (index * 42);  
              return(
                <text x='10' y={y} fill="#7C8981"  fontSize="16">{tarea.tarea}</text>
              )
            }
            )}

          </g>
          {/* recuadro de tareas  */}
          <g>
            {tareas.map((tarea,index)=>{
              const fechai = new Date(tarea.inicio.replace(/-/g,'/'))
              const fechaf = new Date(tarea.fin.replace(/-/g,'/'))
              const diaI = fechai.getDate();
              const diaF = fechaf.getDate();
              const duracion = ((diaF + 1 ) - diaI) * 20 ;
              return(
              <rect x={200 + ((diaI - 1) * 20)}
                    y={10.5 + (index * 42)}
                    rx={5}
                    ry={5}
                    width={duracion}
                    height={21} 
                    className={`cursor-pointer `}
                    fill="#75E115" 
                    onMouseMove={(e)=>tooltip(e,tarea.id)} 
                    onMouseOut={(e)=>visibletool(e)} ></rect>)
            })}
            
            {/* <rect x='340'  y='52.5' rx={5} ry={5} className="w-[40px] h-[21px] cursor-pointer" fill="#75E115" onMouseMove={(e)=>tooltip(e)} onMouseOut={(e)=>visibletool(e)} ></rect> */}
          </g>
          {/* enlaces */}
          <g>
            {/* <path d="M 210 31 L 210 62 L 340 62 " fill="none" stroke="#BDBDBD" stroke-width="2"/> */}
          </g>
          {/* columns */}
          <g>
            {/* semana 1 */}
            <line x1={200} x2={200} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            <line x1={220} x2={220} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            <line x1={240} x2={240} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            <line x1={260} x2={260} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            <line x1={280} x2={280} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            <line x1={300} x2={300} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            <line x1={320} x2={320} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            {/* semana 2 */}
            <line x1={340} x2={340} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            <line x1={360} x2={360} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            <line x1={380} x2={380} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            <line x1={400} x2={400} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            <line x1={420} x2={420} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            <line x1={440} x2={440} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            <line x1={460} x2={460} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            {/* semana 3 */}
            <line x1={480} x2={480} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            <line x1={500} x2={500} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            <line x1={520} x2={520} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            <line x1={540} x2={540} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            <line x1={560} x2={560} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            <line x1={580} x2={580} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            <line x1={600} x2={600} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            {/* semana 4 */}
            <line x1={620} x2={620} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            <line x1={640} x2={640} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            <line x1={660} x2={660} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            <line x1={680} x2={680} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            <line x1={700} x2={700} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            <line x1={720} x2={720} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
            <line x1={740} x2={740} y1={0} y2={168} stroke-width="0" stroke="#FE9C01"/>
          </g>
          {/* dias de mes  */}
          <g>
            {dias()}
          </g>
        </svg>
      </div>
    </>
  );
};
