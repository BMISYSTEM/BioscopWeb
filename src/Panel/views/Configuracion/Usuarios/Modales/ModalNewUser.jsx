import React, { useContext, useState } from "react";
import cerrar from '../Assets/cerrar.svg'
import { UsuarioContext } from "../Context/UsuariosContext";
import 'animate.css'
import { useNewUsuario } from "../Hooks/useNewUsuario";
import { Loading } from "../../../../component/Loading";
import { ToastContainer, toast } from "react-toastify";
import { useUsuarios } from "../Hooks/useUsuarios";
export const ModalNewUser = () => {
    const {modalNewUser,setmodalNewUser} = useContext(UsuarioContext)
    const {areas,isLoadinArea,rol,isLoadingRol,newUser} = useNewUsuario()
    const {mutateListUser} = useUsuarios();
    const [nombre,setNombre] = useState('');
    const [apellido,setApellido] = useState('');
    const [cedula,setCedula] = useState('');
    const [telefono,setTelefono] = useState('');
    const [correo,setCorreo] = useState('');
    const [area,setArea] = useState('');
    const [rolsele,setRol] = useState('');
    const [password,setPassword] = useState('');
    const [administrador,setAdministrador] = useState('');
    const [photo,setphoto] = useState();
    const [estatus,setEstatus] = useState(null);
    if(isLoadinArea|isLoadingRol)
    {
      return (
        <Loading/>
      )
    }
    const Rol = rol?.data?.succes
    const Areas = areas?.data?.succes
    const newUsuarios = (e) =>{
      e.preventDefault();
      const data = new FormData();
      data.append('nombre',nombre);
      data.append('apellido',apellido);
      data.append('cedula',cedula);
      data.append('telefono',telefono);
      data.append('password',password);
      data.append('email',correo);
      data.append('id_rol',rolsele);
      data.append('id_area',area);
      data.append('foto',photo);
      data.append('administrador',administrador ? 1 : 0 );
      
      newUser(data,setEstatus,mutateListUser);
      toast.success('Registrando un nuevo Usuario')
    }
    if(estatus?.response?.data?.errors){
      const errores = estatus?.response?.data?.errors;
      Object.values(errores).map(error => {
        toast.error(error[0]);
      })
      setEstatus(null)
    }
    /**
     * Si el post fue exitoso | si se creo el usuario
     */
    if(estatus?.data?.succes)
    {
      toast.success(estatus?.data?.succes,{position:"top-center"})
      setEstatus(null)
    }
    /**
     * Si el post genero error
     */
    if(estatus?.response?.data?.error)
    {
      toast.error(estatus.response.data.error)
      setEstatus(null)
    }
  return (
    <section className="w-1/3 h-auto bg-white rounded-xl shadow-xl p-2 flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <p className="text-sm font-bold text-slate-400">ModalNewUser</p>
        <button
          className="w-6 hover:scale-110 transition cursor-pointer"
          onClick={() => setmodalNewUser(!modalNewUser)}
        >
          <img src={cerrar} alt="cerrar" title="Cerrar" />
        </button>
      </div>
      <main className="w-full flex flex-col gap-2 p-2">
        {/* formulario de registro */}
        <form action="" onSubmit={newUsuarios} className="flex flex-col gap-2">
            <label htmlFor="">Foto de Usuario</label>
            <input type="file" onChange={(e)=>setphoto(e.target.files[0])}/>
            <label htmlFor="">Nombre</label>
            <input type="text" 
              onChange={(e)=>setNombre(e.target.value)}
              value={nombre}
              className="h-6 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " />
            <label htmlFor="">Apellido</label>
            <input type="text"
              onChange={(e)=>setApellido(e.target.value)}
              value={apellido} 
              className="h-6 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "/>
            <label htmlFor="">Cedula</label>
            <input type="number" 
              onChange={(e)=>setCedula(e.target.value)}
              value={cedula}
              placeholder="Ej: 99897866254"
             className="h-6 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "/>
            <label htmlFor="">Telefono</label>
            <input type="number" 
              onChange={(e)=>setTelefono(e.target.value)}
              value={telefono}
              placeholder="Ej: 3184482848"
              className="h-6 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "/>
            <label htmlFor="">Correo</label>
            <input type="email" 
              onChange={(e)=>setCorreo(e.target.value)}
              value={correo}
              placeholder="Ej: nombre@gmail.com"
              className="h-6 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "/>
            <label htmlFor="">Area</label>
            <select type="text" 
              onChange={(e)=>setArea(e.target.value)}
              value={area}
              className="h-8 block w-1/2 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ">
                <option value={0} key={0}>Seleccione un area</option>
                {Areas.map((area,index) => (
                  <option value={area.id} key={index}>{area.nombre}</option>
                ))}
             </select>
            <div className="flex flex-col gap-2 items-center">
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="">Rol</label>
                    <select type="text" 
                    onChange={(e)=>setRol(e.target.value)}
                    value={rolsele}
                    className="h-8 block w-1/2 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ">
                      <option value={0} key={0}>Seleccione un Rol</option>
                      {Rol.map((rol,index) => (
                        <option value={rol.id} key={index}>{rol.nombre}</option>
                      ))}
                    </select>
                </div>
                <div  className=" h-6 w-full flex flex-row gap-2 items-center ">
                    <label htmlFor="">Administrador?</label>
                    <input type="checkbox" 
                    onChange={(e)=>setAdministrador(e.target.value)}
                    value={administrador} />
                </div>
            </div>
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Password" 
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              className="h-8 block w-1/2 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            />
            <input type="submit" value={'Registrar'} className="p-2 cursor-pointer bg-green-500 text-white rounded-xl shadow-lg hover:scale-105 hover:bg-green-700 transition-all"/>
        </form>
      </main>
      <ToastContainer/>
    </section>
  );
};
