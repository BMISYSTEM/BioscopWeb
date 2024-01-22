import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Navar from '../component/Navar'
import '../css/home.css'
import ModalLogin from '../component/ModalLogin';
import Servicios from '../component/Servicios'
import Veneficios from '../component/Veneficios'
import Paises from '../component/Paises'
import Footer from '../component/Footer'
import Modal from 'react-modal';
import { HomeContext } from '../context/HomeContext';
import 'animate.css';
/**
 * Imagenes
 */
import imagen from '../assets/header.png'
import NavarMobile from '../component/NavarMobile';
const Home = () => {
  const {loginModal} = useContext(HomeContext)
  console.log(loginModal)
  return (
      <>
        <body className='w-full h-full scroll overflow-hidden '>
            {/* cabecera */}
            <head className='flex flex-col '>
                {/* Los navar estan condiccionados por css para que en pantallas pequeñas aparezca el navarMobile  */}
                <Navar/>
                <NavarMobile/>
                <div className=''>
                    <img src={imagen} alt="" className='w-full h-[700px]'/>
                </div>
            </head>
            {/* renderisa pages */}
            <main>
              <Servicios/>
              <Veneficios/>
              <Paises/>
            </main>

            <footer>
              <Footer/>
            </footer>
        </body>
        <Modal isOpen={loginModal} className={'w-full h-screen bg-slate-500/10 backdrop-blur-lg grid place-items-center animate__animated  animate__fadeIn'} >
        <ModalLogin/>
        </Modal>
        <ToastContainer autoClose={500}/>
      </>
  )
}

export default Home
