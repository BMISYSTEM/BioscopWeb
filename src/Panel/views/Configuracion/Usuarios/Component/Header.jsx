import React, { useContext } from "react";
import { UsuarioContext } from "../Context/UsuariosContext";

export const Header = () => {
    const {modalNewUser,setmodalNewUser} = useContext(UsuarioContext)
  return (
    <header className="w-full flex flex-row gap-2 p-2 ">
      {/* filtro */}
      <input
        type="text"
        className="p-2 rounded-xl text-sm"
        placeholder="Busca por nombre o cedula"
      />
      <button className="p-2 text-sm text-white bg-green-500 rounded-xl shadow-md hover:scale-105 hover:bg-green-700 transition-all"
      onClick={()=>setmodalNewUser(!modalNewUser)}>
        Nuevo
      </button>
    </header>
  );
};
