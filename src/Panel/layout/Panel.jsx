
import casa from "../assets/casa.svg";
import os from "../assets/os.svg";
import apuntar from "../assets/apuntar.svg";
import usuario from "../assets/usuario.svg";
import expandir from "../assets/expandir.svg"
import encoger from "../assets/encoger.svg"
import permisos from "../assets/permisos.svg"
import compartido from "../assets/compartido.svg"
import ruta from "../assets/ruta.svg"
import docs from "../assets/docs.svg"
import alarma from "../assets/alarma.svg"
import mensajes from "../assets/mensajes.svg"
import relog from "../assets/relog.svg"
import "../home.css"
import 'animate.css'



import { Link, Outlet } from "react-router-dom";
import {useState} from 'react';

const navar= [
  {
    title: "Home",
    to: "/panel/home",
    icono: casa,
  },
  {
    title: "OS",
    to: "/panel/os",
    icono: os,
  },
  {
    title: "Permisos",
    to: "/panel/permiso",
    icono: permisos,
  },
  {
    title: "Sharepoint",
    to: "/panel/sharepoint",
    icono: compartido,
  },
  {
    title: "Intinerario",
    to: "/panel/intinerario",
    icono: ruta,
  },
  {
    title: "Docs",
    to: "/panel/docs",
    icono: docs,
  },
];
const Panel = () => {
    const [barra,setbarra] = useState(false)
  return (
    <div className="w-full h-screen flex flex-row overflow-hidden">
      {/* navegacion */}
      <section className={`${barra ? 'w-1/6 ' : 'w-[5rem]  '} transition-all ease-in duration-300 h-screen bg-white flex flex-col gap-2 p-2`}>
        <div className="w-full h-auto flex items-end justify-end">
            <button onClick={()=>setbarra(!barra)} className="w-6 h-6">
                {barra ?  
                <img src={encoger} alt="expandir" className="w-6 h-6" />
                :
                <img src={expandir} alt="expandir" className="w-6 h-6" />
                }
            </button>
        </div>
        <div className={`w-full ${barra? 'h-32' : 'h-[5rem]'} border-2 rounded-xl transition-all  shadow-sm flex flex-col gap-2 items-center justify-center`}>
            <img src={usuario} alt=" foto de usuario logueado" className={`w-full ${barra ? 'h-20' : 'h-5'} `} />
            {/* <p className={`${barra? 'flex' : 'hidden'}`}>Nombre de usuario</p> */}
        </div>
        {navar.map((nav) => (
          <Link
            to={nav.to}
            className={`w-full p-2 flex flex-row ${!barra ? ' justify-center ': ' ' }  gap-2 items-center transition hover:scale-105 hover:bg-[#edf8ff] hover:border hover:border-[#48b9ff] rounded-xl text-[#0d439b]`}
          >
            <img src={nav.icono} alt={nav.title} className="w-6 h-6" />
            {barra ?  
                <span className="text-xl font-bold  ">{nav.title}</span>
            : 
                ''
            }
          </Link>
        ))}
      </section>
      {/* contenido se renderiza al momento de dar click en algunos de las opciones del aside*/} 
      <main className="w-full h-screen bg-slate-200 flex flex-col p-1 ">
        {/* cabecera con opciones rapidas*/}
        <header className="w-full h-10 bg-white rounded-xl shadow-xl flex flex-row gap-4 items-center justify-center p-2">
          <div className="w-full flex flex-row gap-4 justify-center">
            <button className="w-6 h-6 hover:scale-110 transition">
              <img src={alarma} alt="notificaciones" className="w-6 h-6" title="Notificaciones"/>
            </button>
            <button className="w-6 h-6 hover:scale-110 transition">
              <img src={mensajes} alt="Mensajes" className="w-6 h-6" title="Mensajes enviados"/>
            </button>
            <button className="w-6 h-6 hover:scale-110 transition">
              <img src={relog} alt="Vencidos" className="w-6 h-6" title="Vencidos"/>
            </button>
          </div>
        </header>
        <section className="w-full h-full p-2 flex flex-col">
          <Outlet/>            
        </section>
      </main>
    </div>
  );
};

export default Panel;
