import React, { useContext, useState } from "react";
import { HomeContext } from "../context/HomeContext";
import cerrar from "../assets/cerrar.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import clienteAxios from "../../Config/axios";
import { useLogin } from "../Hooks/useLogin";
const ModalLogin = () => {
  const navigate = useNavigate()
  const { setLoginModal, loginModal } = useContext(HomeContext);
  const {login} = useLogin('guest','/panel/home');
  const [estatus,setEstatus] = useState(null)
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const send = async (e) =>
  {
    // logeo y guardo token en el localstorague 
    e.preventDefault();
    const data = {
      'email':email,
      'password':password
    }
    login(data,setEstatus);
    toast.success('Iniciando seccion',{position:toast.POSITION.TOP_CENTER});
    // navigate();
  }
  if(estatus?.data?.succes){
    toast.success(estatus?.data?.succes)
    setEstatus(null)
    localStorage.setItem('token',estatus.data.token)
  }
  if(estatus?.response?.data?.errors)
  {
    const errors = estatus?.response?.data?.errors;
    
    errors.email.map(error=>(
      toast.warning(error)
    ))
    errors.password.map(error=>(
      toast.warning(error)
    ))
    setEstatus(null)
  }
  return (
    <section className="md:w-1/3 w-full h-2/3 bg-white rounded-xl shadow-xl border-2 shadow-green-500 flex flex-col p-2">
      <div className="w-full  flex flex-row justify-end p-1">
        <button onClick={() => setLoginModal(!loginModal)}>
          <img
            src={cerrar}
            alt="cerrar"
            title="cerrar"
            className="w-6 h-6 hover:scale-110 transition"
          />
        </button>
      </div>
      <form
        onSubmit={send}
        className="w-full h-full flex flex-col gap-2 items-center justify-center"
      >
        <label htmlFor="" className="text-xl font-bold text-slate-600">
          Nombre Usuario
        </label>
        <input
          onChange={(e)=>setEmail(e.target.value)}
          value={estatus}
          type="text"
          className="p-2 border-2 rounded-xl text-center text-sm font-bold "
          placeholder="Correo electrónico"
        />
        <label htmlFor="" className="text-xl font-bold text-slate-600">
          Contraseña
        </label>
        <input
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          type="password"
          className="p-2 border-2 rounded-xl text-center text-sm font-bold "
          placeholder="Contraseña"
        />
        <input
          type="submit"
          className="p-2 text-xl bg-green-500 rounded-xl text-white font-bold m-5 shadow-xl hover:scale-110 hover:bg-green-700 transition"
          value="Ingresar"
        />
      </form>
      <p className="text-sm font-bold text-sky-600 hover:text-sky-400 cursor-pointer transition">Olvidé mi contraseña</p>
    </section>
  );
};

export default ModalLogin;
