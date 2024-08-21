import {useEffect, useState} from 'react';
import { Link, Outlet } from "react-router-dom";
import { useLogin } from "../../Home/Hooks/useLogin";
import "../home.css"
import 'animate.css'
/**
 * Imagenes
 */
import usuario from "../assets/usuario.svg";
import expandir from "../assets/expandir.svg"
import encoger from "../assets/encoger.svg"

import alarma from "../assets/alarma.svg"
import mensajes from "../assets/mensajes.svg"
import relog from "../assets/relog.svg"


/**
 * Imporacion de array con opciones de menu
 */
import { useOptionsNav } from '../Hooks/useOptionsNav';
import { Tooltip } from '../component/Tooltip';
import { usePermisosNav } from '../Hooks/usePermisosNav';

const Panel =  () => {
    /**Url del backend */
  const urlBackend = import.meta.env.VITE_URL_BACK
  /**url de la foto, se almacen en el localstorage al momento de iniciar session */
  const foto = localStorage.getItem('foto')
    /**
     * Al estar consultando la variable user se obliga que se revalide que el usuario esta logueado y que su personal
     * asses token siga vigente
     */
    
    const {user} = useLogin();
    const {isLoading,permisos} = usePermisosNav()
    const [barra,setbarra] = useState(false)
    const [selectOption,setselectOption] = useState(1)
    const [infouser,setInfouser] = useState();
    const [selectOptionSubMenu,setselectOptionSubMenu] = useState(1)

    if(isLoading){
      return(
        <p>Cargando informacion</p>
      )
    }
    
    const informacionUsuario = user?.succes
    console.log()
    /**
     * Informacion de los botones de navegacion
     */
    const {navar} = useOptionsNav()
    console.log(usuario)
  return (
    <div className="w-full h-screen flex md:flex-row flex-col overflow-hidden">
      {/* navegacion */}
      <section className={`${barra ? 'md:w-[15rem]   h-full z-50 md:z-0 absolute md:relative w-full ' : 'md:w-[5rem] h-10 w-full  '} transition-all ease-in duration-300 md:h-screen  bg-white flex flex-col gap-2 p-2`}>
        <div className="w-full h-auto flex md:items-end md:justify-end justify-center">
            <button onClick={()=>setbarra(!barra)} className="w-6 h-6 md:flex hidden ">
                {barra ?  
                <img src={encoger} alt="expandir" className="w-6 h-6" />
                :
                <img src={expandir} alt="expandir" className="w-6 h-6" />
                }
            </button>
            <button onClick={()=>setbarra(!barra)} className="w-6 h-6 md:hidden   ">
              <svg width="" height="" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.25C0 0.835786 0.335786 0.5 0.75 0.5H17.25C17.6642 0.5 18 0.835786 18 1.25C18 1.66421 17.6642 2 17.25 2H0.75C0.335786 2 0 1.66421 0 1.25ZM0 5.75C0 5.33579 0.335786 5 0.75 5H17.25C17.6642 5 18 5.33579 18 5.75C18 6.16421 17.6642 6.5 17.25 6.5H0.75C0.335786 6.5 0 6.16421 0 5.75ZM0 10.25C0 9.83579 0.335786 9.5 0.75 9.5H17.25C17.6642 9.5 18 9.83579 18 10.25C18 10.6642 17.6642 11 17.25 11H0.75C0.335786 11 0 10.6642 0 10.25ZM0 14.75C0 14.3358 0.335786 14 0.75 14H17.25C17.6642 14 18 14.3358 18 14.75C18 15.1642 17.6642 15.5 17.25 15.5H0.75C0.335786 15.5 0 15.1642 0 14.75Z" fill="url(#paint0_linear_1906_48)"/>
                <defs>
                <linearGradient id="paint0_linear_1906_48" x1="-6" y1="9.5" x2="23.5" y2="9.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0649E6"/>
                <stop offset="1" stop-color="#798192"/>
                </linearGradient>
                </defs>
              </svg>
            </button>
        </div>
        <div className={`w-20 ${barra? 'h-20 md:flex hidden' : 'md:h-[5rem] hidden  '} border-2 rounded-full md:transition-all  shadow-sm flex flex-col gap-2 items-center justify-center overflow-hidden`}>
            <img src={urlBackend + foto} alt=" foto de usuario logueado" className={`object-contain w-full ${barra ? 'h-full' : 'h-5'} `} />
            {/* <p className={`${barra? 'flex' : 'hidden'}`}>Nombre de usuario</p> */}
        </div>
        {/* si la barra es true se coloca en formato flex sino desaparece */}
        <div className={` ${barra ? " flex " : " hidden md:flex"} flex-col gap-2`}>
          {navar?.map((nav,index) => {
            // Validacion de permisos de forma dinamica 
            if(permisos.permisos[0][nav?.id]){
              if (nav?.children.length > 0 ) {
                return (
                  <button key={index}
                    onClick={()=>setselectOption(nav.id)}
                    className={`w-full p-2 flex flex-row rounded-sm hover:border-l-4 ${!barra ? ' justify-center ': ' ' } ${selectOption === nav.id ? "  border-[0.1px] border-[#48b9ff] border-l-4  " : "  text-[#0d439b] hover:bg-[#edf8ff] hover:border-[#48b9ff]"} gap-2 items-center transition   `}
                  >
                    <div className='flex flex-col gap-2'>
                      <div className='flex flex-row gap-2'>
                        <Tooltip img={nav.icono} mensaje={nav.title} className='w-6 h-6' posicionMesaje='r' visible={`${barra ? 'true' : 'false'} `}/>
                        {/* si barra es true muestra el titulo  */}
                        {barra ?  
                            <span className="text-xl font-bold  ">{nav.title}</span>
                        : 
                            ''
                        }
                      </div>
                      {/* si selectOption es igual al id muestra las opciones de submenu */}
                      {selectOption === nav.id ?
                        nav.children.map((children,index) => (
                          <Link key={index}
                            onClick={()=>setselectOptionSubMenu(children.id)}
                            to={children.to}
                            className={`w-full p-2 flex flex-row rounded-sm hover:border-l-4 ${!barra ? ' justify-center ': ' ' } ${selectOptionSubMenu === children.id ? "  bg-[#edf8ff] border border-[#4870ff] border-l-4  " : "  text-[#0d439b] hover:bg-[#edf8ff] hover:border-[#48b9ff]"} gap-2 items-center transition   `}
                          >
                            <Tooltip img={children.icono} mensaje={children.title} className='w-6 h-6' posicionMesaje='r' visible={`${barra ? 'true' : 'false'} `}/>
                            {barra ?  
                              <span className="text-xl font-bold  ">{children.title}</span>
                            : 
                              ''
                            }
                          </Link>
                        )) 
                      :
                        ''
                      }
  
                    </div>
                  </button>
                )
              }
  
              return (
                <Link key={index}
                  onClick={()=>setselectOption(nav.id)}
                  to={nav.to}
                  className={`w-full p-2 flex flex-row rounded-sm hover:border-l-4 ${!barra ? ' justify-center ': ' ' } ${selectOption === nav.id ? "  bg-[#edf8ff] border border-[#48b9ff] border-l-4  " : "  text-[#0d439b] hover:bg-[#edf8ff] hover:border-[#48b9ff]"} gap-2 items-center transition   `}
                >
                  <Tooltip img={nav.icono} mensaje={nav.title} className='w-6 h-6' posicionMesaje='r' visible={`${barra ? 'true' : 'false'} `}/>
                  {/* <img src={nav.icono} alt={nav.title} className="w-8 h-8" /> */}
                  {barra ?  
                      <span className="text-xl font-bold  ">{nav.title}</span>
                  : 
                      ''
                  }
                </Link>
              )
            }
          }
          )
          }
        </div>
      </section>
      {/* contenido se renderiza al momento de dar click en algunos de las opciones del aside*/} 
      <main className="w-full h-screen bg-slate-200 flex flex-col p-1 ">
        {/* cabecera con opciones rapidas*/}
        <header className="w-full h-10 bg-white rounded-xl shadow-xl flex flex-row gap-4   p-2">
          <div className='w-full'>
            <p>Usuario: <span className='text-lg font-bold text-slate-400'>{informacionUsuario.name } {informacionUsuario.apellido}</span></p> 
            
          </div>
          <div className="w-full flex flex-row gap-4 ">
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
        <section className="w-full h-[95%] p-2 flex flex-col">
          <Outlet/>            
        </section>
      </main>
    </div>
  );
};
export default Panel;
