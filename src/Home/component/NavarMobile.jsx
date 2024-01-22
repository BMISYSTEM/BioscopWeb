
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logobiosalc.png";
import casa from "../assets/casa.svg";
import anuncio from "../assets/anuncio.svg";
import auriculares from "../assets/auriculares.svg";
import contrato from "../assets/contrato.svg";
import mensaje from "../assets/mensaje.svg";
import { HomeContext } from "../context/HomeContext";

const NavarMobile = () => {
    const { setLoginModal, loginModal } = useContext(HomeContext);
    const [barra,setBarra] = useState(false)
  const modal = () => {
    setLoginModal(!loginModal);
  };
  return (
    <nav className={` ${barra ? ' w-full fixed h-screen bg-white flex flex-col justify-between p-2 items-center z-50' : ' p-2 flex flex-col items-center w-full h-12 overflow-hidden'} transition-all duration-700 md:hidden`}>
      {/* Logo */}
      <button onClick={()=>setBarra(!barra)} className="w-full flex justify-center ">
        {/* <img src={logo} alt="" className=" w-40 " /> */}
        <svg width="" height="" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.25C0 0.835786 0.335786 0.5 0.75 0.5H17.25C17.6642 0.5 18 0.835786 18 1.25C18 1.66421 17.6642 2 17.25 2H0.75C0.335786 2 0 1.66421 0 1.25ZM0 5.75C0 5.33579 0.335786 5 0.75 5H17.25C17.6642 5 18 5.33579 18 5.75C18 6.16421 17.6642 6.5 17.25 6.5H0.75C0.335786 6.5 0 6.16421 0 5.75ZM0 10.25C0 9.83579 0.335786 9.5 0.75 9.5H17.25C17.6642 9.5 18 9.83579 18 10.25C18 10.6642 17.6642 11 17.25 11H0.75C0.335786 11 0 10.6642 0 10.25ZM0 14.75C0 14.3358 0.335786 14 0.75 14H17.25C17.6642 14 18 14.3358 18 14.75C18 15.1642 17.6642 15.5 17.25 15.5H0.75C0.335786 15.5 0 15.1642 0 14.75Z" fill="url(#paint0_linear_1906_48)"/>
          <defs>
          <linearGradient id="paint0_linear_1906_48" x1="-6" y1="9.5" x2="23.5" y2="9.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0649E6"/>
          <stop offset="1" stop-color="#798192"/>
          </linearGradient>
          </defs>
        </svg>
      </button>
        <NavLink
          className={`hover:text-indigo-500 flex flex-row gap-1 items-center hover:scale-110 ${barra ? 'opacity-100' : 'opacity-0 '} transition-all `}
          to={"/"}
        >
          <img src={casa} alt="Casa" className="w-6 h-6" />
          Home
        </NavLink>
        <NavLink
          className={`hover:text-indigo-500 flex flex-row gap-1 items-center hover:scale-110 ${barra ? 'opacity-100' : 'opacity-0 '} transition-all duration-100 `}
          to={"/novedades"}
        >
          <img src={anuncio} alt="Casa" className="w-6 h-6" />
          Novedades
        </NavLink>
        <NavLink
          className={`hover:text-indigo-500 flex flex-row gap-1 items-center hover:scale-110 ${barra ? 'opacity-100' : 'opacity-0 '} transition-all duration-100  `}
          to={"/documentacion"}
        >
          <img src={contrato} alt="Casa" className="w-6 h-6" />
          Documentación
        </NavLink>
        <NavLink
          className={`hover:text-indigo-500 flex flex-row gap-1 items-center hover:scale-110 ${barra ? 'opacity-100' : 'opacity-0 '} transition-all duration-100 `}
          to={"/pqr"}
        >
          <img src={auriculares} alt="Casa" className="w-6 h-6" />
          PQR
        </NavLink>
        <NavLink
          className={`hover:text-indigo-500 flex flex-row gap-1 items-center hover:scale-110 ${barra ? 'opacity-100' : 'opacity-0 '} transition-all duration-100  `}
          to={"/pqr"}
        >
          <img src={mensaje} alt="Casa" className="w-6 h-6" />
          SharePoint
        </NavLink>
        <button
          className={` rounded-lg shadow-lg shadow-green-300 border-2 border-green-400 bg-green-400 p-2 text-white 
                font-bold hover:animate-pulse hover:scale-110 ${barra ? 'opacity-100' : 'opacity-0 '} transition-all duration-100  `}
          onClick={() => modal()}
        >
          Acceso
        </button>
    </nav>
  );
};

export default NavarMobile;
