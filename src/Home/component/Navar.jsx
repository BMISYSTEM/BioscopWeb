import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logobiosalc.png";
import casa from "../assets/casa.svg";
import anuncio from "../assets/anuncio.svg";
import auriculares from "../assets/auriculares.svg";
import contrato from "../assets/contrato.svg";
import mensaje from "../assets/mensaje.svg";
import { HomeContext } from "../context/HomeContext";

const Navar = () => {
  const { setLoginModal, loginModal } = useContext(HomeContext);

  const modal = () => {
    setLoginModal(!loginModal);
  };
  return (
    <nav className="w-full h-16 md:flex flex-row gap-3 justify-between items-center md:p-5 hidden ">
      {/* Logo */}
      <div className="w-1/3 md:flex hidden">
        <img src={logo} alt="" className=" w-40 " />
      </div>
      <div className="flex md:flex-row w-full  gap-5 justify-between text-sm  font-bold text-slate-900 items-center p-2 border-2 border-slate-200 rounded-xl shadow-lg">
        <NavLink
          className={`hover:text-indigo-500 flex flex-row gap-1 items-center hover:scale-110`}
          to={"/"}
        >
          <img src={casa} alt="Casa" className="w-6 h-6" />
          Home
        </NavLink>
        <NavLink
          className={`hover:text-indigo-500 flex flex-row gap-1 items-center hover:scale-110`}
          to={"/novedades"}
        >
          <img src={anuncio} alt="Casa" className="w-6 h-6" />
          Novedades
        </NavLink>
        <NavLink
          className={`hover:text-indigo-500 flex flex-row gap-1 items-center hover:scale-110`}
          to={"/documentacion"}
        >
          <img src={contrato} alt="Casa" className="w-6 h-6" />
          Documentación
        </NavLink>
        <NavLink
          className={`hover:text-indigo-500 flex flex-row gap-1 items-center hover:scale-110`}
          to={"/pqr"}
        >
          <img src={auriculares} alt="Casa" className="w-6 h-6" />
          PQR
        </NavLink>
        <NavLink
          className={`hover:text-indigo-500 flex flex-row gap-1 items-center hover:scale-110`}
          to={"/pqr"}
        >
          <img src={mensaje} alt="Casa" className="w-6 h-6" />
          SharePoint
        </NavLink>
      </div>
      <div className="w-1/3 flex justify-end ">
        <button
          className={` rounded-lg shadow-lg shadow-green-300 border-2 border-green-400 bg-green-400 p-2 text-white 
                font-bold hover:animate-pulse hover:scale-110`}
          onClick={() => modal()}
        >
          Acceso
        </button>
      </div>
    </nav>
  );
};

export default Navar;
