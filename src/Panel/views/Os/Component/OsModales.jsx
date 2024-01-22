import React, { useContext } from "react";
import Modal from "react-modal";
import { OsContext } from "../Context/OsContext";
import { NewOs } from "../Modal/NewOs";
import { UpdateOs } from "../Modal/UpdateOs";
import { ApunteOs } from "../Modal/ApunteOs";
import 'animate.css'

export const OsModales = () => {
    const {newOsModal,updateOs,ApunteOSModal} = useContext(OsContext)
  return (
    <>
      <Modal
        isOpen={newOsModal}
        className={
          "bg-slate-800/40 backdrop-blur-sm w-full h-screen grid place-items-center "
        }
      >
        <NewOs />
      </Modal>
      <Modal
        isOpen={updateOs}
        className={
          "bg-slate-800/40 backdrop-blur-sm w-full h-screen grid place-items-center   "
        }
      >
        <UpdateOs />
      </Modal>
      <Modal
        isOpen={ApunteOSModal}
        className={
          "bg-slate-800/40 backdrop-blur-sm w-full h-screen grid place-items-center  "
        }
      >
        <ApunteOs />
      </Modal>
    </>
  );
};
