import React, { useContext } from "react";
import  Modal from 'react-modal'
import { ModalNewUser } from '../Modales/ModalNewUser'
import { UsuarioContext } from "../Context/UsuariosContext";
import 'animate.css'
export const Modales = () => {
    const {setmodalNewUser,modalNewUser} = useContext(UsuarioContext);
  return (
    <>
      <Modal
        isOpen={modalNewUser}
        className={
          "bg-slate-800/40 backdrop-blur-sm w-full h-screen grid place-items-center animate__animated  animate__fadeIn "
        }
      >
        <ModalNewUser />
      </Modal>
    </>
  );
};
