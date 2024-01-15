import React, { useContext } from "react";
import Modal from "react-modal";
import { NewNota } from "../Modal/NewNota";
import { UpdateNota } from "../Modal/UpdateNota";
import { HomePanelContext } from "../Context/HomePanelContext";
import 'animate.css';

export const Modales = () => {
    const { modalNewNota,modalUpdateNota,setmodalUpdateNota } = useContext(HomePanelContext);
  return (
    <>
      <Modal
        isOpen={modalNewNota}
        className={
          "bg-slate-800/40 backdrop-blur-sm w-full h-screen grid place-items-center "
        }
      >
        <NewNota />
      </Modal>
      <Modal
        isOpen={modalUpdateNota}
        className={
          "bg-slate-800/40 backdrop-blur-sm w-full h-screen grid place-items-center "
        }
      >
        <UpdateNota />
      </Modal>
    </>
  );
};
